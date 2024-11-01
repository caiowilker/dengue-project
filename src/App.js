// src/App.js
import React from 'react';
import RelatoForm from './components/RelatoForm';
import MapView from './components/MapView';
import RelatoChart from './components/RelatoChart';
import ErrorBoundary from './ErrorBoundary';

function App() {
    return (
        <ErrorBoundary>
            <div>
                <h1>Sistema de Relatos de Focos de Dengue</h1>
                <RelatoForm />
                <MapView />
                <RelatoChart />
            </div>
        </ErrorBoundary>
    );
}

export default App;
