import React from 'react';
import ReactDOM from 'react-dom/client';
import StateHome from './State/StateHome';
import '../src/assets/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div >
        <StateHome />
        <div className='overlay'></div>
    </div>
)
// npx create-react-app