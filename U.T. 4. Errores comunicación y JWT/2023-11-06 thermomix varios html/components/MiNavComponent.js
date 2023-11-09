export default class MiNavComponent extends HTMLElement {
    _template = `
        <style>
            nav {
                background-color: var(--color-700);
                color: var(--color-300);
                padding: 0.5rem 0;
            }

            ul {
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                font-size: 2rem;
                list-style: none;
            }

            a {
                text-decoration: none;
                color: inherit;
            }
        </style>

        <nav>
            <ul>
                <li><a href="./books.htm">Libros</a></li>
                <li><a href="./dishes.htm">Platos</a></li>
                <li><a href="./recipes.htm">Recetas</a></li>
            </ul>
        </nav>
    `;

    constructor() {
        super();

        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.innerHTML = this._template;
    }
}