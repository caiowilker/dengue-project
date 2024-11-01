// src/components/RelatoForm.js
import React, { useState } from 'react';
import { addRelato } from '../services/firebaseService';

function RelatoForm() {
    const [relato, setRelato] = useState({ descricao: '', localizacao: '' });
    const [erro, setErro] = useState('');
    const [sucesso, setSucesso] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErro('');
        setSucesso('');

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const localizacao = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };

                try {
                    await addRelato({ ...relato, localizacao });
                    setSucesso("Relato enviado com sucesso!");
                    setRelato({ descricao: '', localizacao: '' });
                } catch (e) {
                    setErro("Erro ao enviar relato. Tente novamente.");
                }
            }, () => {
                setErro("Não foi possível obter a localização.");
            });
        } else {
            setErro("Geolocalização não é suportada pelo seu navegador.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Descrição:</label>
            <input
                type="text"
                value={relato.descricao}
                onChange={(e) => setRelato({ ...relato, descricao: e.target.value })}
                required
            />
            <button type="submit">Enviar Relato</button>
            {erro && <p style={{ color: 'red' }}>{erro}</p>}
            {sucesso && <p style={{ color: 'green' }}>{sucesso}</p>}
        </form>
    );
}

export default RelatoForm;
