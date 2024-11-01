// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Suas configurações do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBObTIvz6fHEIHnASjZYRYkkYRcXNyxB40",
    authDomain: "web-dengue-a0b99.firebaseapp.com",
    projectId: "web-dengue-a0b99",
    storageBucket: "web-dengue-a0b99.appspot.com",
    messagingSenderId: "578856616836",
    appId: "1:578856616836:web:405d679a8a11124187d3d1",
    measurementId: "G-3GPLSR6G6J"
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }; // Exporte o banco de dados para uso em outros arquivos
