import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class AppElement extends HTMLElement {
    load = async () => {
        ReactDOM.render(
            <React.StrictMode>
                    <App/>
            </React.StrictMode>,
            this
        );
    };

    connectedCallback() {
        this.load();
    }

    disconnectedCallback() {
        ReactDOM.unmountComponentAtNode(this);
    }
}

window.customElements.define('app-element', AppElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
