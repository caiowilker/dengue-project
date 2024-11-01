// src/services/firebaseService.js
import { db } from '../firebase';
import { collection, addDoc, query, where, getDocs, Timestamp } from 'firebase/firestore';

// Adiciona um novo relato ao Firestore
export const addRelato = async (relato) => {
    try {
        await addDoc(collection(db, 'relatos'), {
            descricao: relato.descricao,
            data: Timestamp.fromDate(new Date()), // Armazenando a data atual como Timestamp
            localizacao: relato.localizacao
        });
    } catch (error) {
        console.error("Erro ao adicionar relato: ", error);
        throw error; // Re-lança o erro para tratamento
    }
};

// Obtém todos os relatos do Firestore
export const getRelatos = async () => {
    const relatosCollection = collection(db, 'relatos');
    const querySnapshot = await getDocs(relatosCollection);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Busca relatos dentro de um intervalo de datas
export const buscarRelatosPorIntervaloDeDatas = async (dataInicio, dataFim) => {
    const relatosCollection = collection(db, 'relatos');

    // Convertendo strings em objetos Date
    const inicio = Timestamp.fromDate(new Date(dataInicio));
    
    // Adiciona um dia à dataFim para incluir o dia inteiro
    const fimComInclusao = Timestamp.fromDate(new Date(dataFim + 'T23:59:59'));

    // Monta a consulta para buscar relatos dentro do intervalo de datas
    const q = query(relatosCollection,
        where("data", ">=", inicio),
        where("data", "<=", fimComInclusao)
    );

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
