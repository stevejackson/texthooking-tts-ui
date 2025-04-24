import React from 'react';
import ReactDOM from 'react-dom/client';

import TexthookerApp from "~/components/TexthookerApp.jsx";

const RootComponent = () => (
    <React.StrictMode>
        <TexthookerApp />
    </React.StrictMode>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RootComponent />);