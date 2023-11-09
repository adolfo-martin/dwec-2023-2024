export default class MiHeaderComponent extends HTMLElement {
    _template = `
        <style>
            header {
                display: flex;
            }
            span {
                flex-grow: 1;
            }
            img {
                height: 5rem; 
            }
        </style>
        <header>
            <span>Thermomix con Adolfo</span>
            <img src="/components/assets/logo.png">
        </header>
    `;

    constructor() {
        super();

        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.innerHTML = this._template;
    }
}