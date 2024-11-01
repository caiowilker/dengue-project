// src/components/MapView.js
import React, { useEffect, useRef, useState } from 'react';
import { getRelatos, buscarRelatosPorIntervaloDeDatas } from '../services/firebaseService';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Define um ícone de marcador vermelho personalizado
const redIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    className: 'red-icon' // Adiciona uma classe CSS para mais customização, se necessário
});

function MapView() {
    const mapRef = useRef(null); // useRef para garantir que o mapa seja inicializado apenas uma vez
    const [dataInicio, setDataInicio] = useState('');
    const [dataFim, setDataFim] = useState('');

    useEffect(() => {
        if (!mapRef.current) {
            // Inicializa o mapa
            const mapInstance = L.map('map').setView([-15.7801, -47.9292], 4); // Centro do Brasil
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(mapInstance);

            mapRef.current = mapInstance; // Armazena a instância do mapa em mapRef
        }

        const fetchRelatos = async () => {
            const relatos = await getRelatos();

            // Limpa os marcadores do mapa antes de adicionar novos
            mapRef.current.eachLayer((layer) => {
                if (layer instanceof L.Marker) {
                    mapRef.current.removeLayer(layer);
                }
            });

            relatos.forEach(relato => {
                const { localizacao, descricao } = relato;

                // Verifique se `localizacao` e suas coordenadas estão definidas
                if (localizacao && localizacao.latitude && localizacao.longitude) {
                    L.marker([localizacao.latitude, localizacao.longitude], { icon: redIcon })
                        .addTo(mapRef.current)
                        .bindPopup(`<strong>Relato:</strong> ${descricao}`);
                } else {
                    console.warn("Relato sem localização: ", relato); // Log de aviso
                }
            });
        };

        fetchRelatos();
    }, []); // Array vazio para rodar apenas na montagem

    const handleFiltrar = async () => {
        if (dataInicio && dataFim) {
            const relatos = await buscarRelatosPorIntervaloDeDatas(dataInicio, dataFim);
            
            // Limpa os marcadores do mapa antes de adicionar novos
            mapRef.current.eachLayer((layer) => {
                if (layer instanceof L.Marker) {
                    mapRef.current.removeLayer(layer);
                }
            });

            relatos.forEach(relato => {
                const { localizacao, descricao } = relato;

                // Verifique se `localizacao` e suas coordenadas estão definidas
                if (localizacao && localizacao.latitude && localizacao.longitude) {
                    L.marker([localizacao.latitude, localizacao.longitude], { icon: redIcon })
                        .addTo(mapRef.current)
                        .bindPopup(`<strong>Relato:</strong> ${descricao}`);
                } else {
                    console.warn("Relato sem localização: ", relato); // Log de aviso
                }
            });
        } else {
            alert("Por favor, selecione um intervalo de datas.");
        }
    };

    return (
        <div>
            <div style={{ margin: '10px' }}>
                <label>
                    Data Início:
                    <input
                        type="date"
                        value={dataInicio}
                        onChange={(e) => setDataInicio(e.target.value)}
                    />
                </label>
                <label>
                    Data Fim:
                    <input
                        type="date"
                        value={dataFim}
                        onChange={(e) => setDataFim(e.target.value)}
                    />
                </label>
                <button onClick={handleFiltrar}>Filtrar</button>
            </div>
            <div id="map" style={{ height: '100vh' }}></div>
        </div>
    );
}

export default MapView;
