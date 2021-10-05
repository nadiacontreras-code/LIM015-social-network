import { components } from './componentes.js';

const changeRoute = (route) => {
    const container = document.getElementById('root');
    container.innerHTML = '';
    switch (route) {
        case '#/': { return container.appendChild(components.login()) }

    }
}

export {changeRoute};