import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

//utilizado uma unica vez em toda a aplicação
ReactDOM.render(<App />, document.getElementById('root')); // Colocando tag App dentro do html, numa div chamada 'root'

serviceWorker.unregister();
