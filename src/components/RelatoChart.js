// src/components/RelatoChart.js
import React, { useEffect, useState } from 'react';
import { buscarRelatosPorIntervaloDeDatas } from '../services/firebaseService';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

// Registra todas as escalas e elementos do Chart.js
Chart.register(...registerables);

function RelatoChart() {
    const [dadosGrafico, setDadosGrafico] = useState({ labels: [], datasets: [] });
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState('');

    useEffect(() => {
        const fetchRelatos = async () => {
            try {
                const relatos = await buscarRelatosPorIntervaloDeDatas('2024-01-01', '2024-12-31');

                const contagemRelatos = {};
                relatos.forEach(relato => {
                    const dataFormatada = new Date(relato.data).toLocaleDateString();
                    contagemRelatos[dataFormatada] = (contagemRelatos[dataFormatada] || 0) + 1;
                });

                const labels = Object.keys(contagemRelatos);
                const dataset = Object.values(contagemRelatos);

                setDadosGrafico({
                    labels: labels,
                    datasets: [
                        {
                            label: 'Focos de Dengue',
                            data: dataset,
                            fill: false,
                            borderColor: 'red'
                        }
                    ]
                });
            } catch (error) {
                setErro("Erro ao carregar os relatos.");
            } finally {
                setLoading(false);
            }
        };

        fetchRelatos();
    }, []);

    if (loading) {
        return <p>Carregando dados...</p>;
    }

    if (erro) {
        return <p style={{ color: 'red' }}>{erro}</p>;
    }

    return (
        <div>
            <h2>Gráfico de Focos de Dengue</h2>
            <Line data={dadosGrafico} />
        </div>
    );
}

export default RelatoChart;
