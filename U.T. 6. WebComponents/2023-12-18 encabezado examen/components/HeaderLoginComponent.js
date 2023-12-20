export default class HeaderLoginComponent extends HTMLElement {
    #template = `
        <style>
            :host {
                display: flex;
                align-items: center;
                gap: 1rem;
                padding: 0.5rem 1rem !important;
            }

            .company-name {
                flex-grow: 1;
                text-transform: uppercase;
                text-align: center;
                font-size: 2rem;
            }
        </style>

        <span class="company-name">FlightsBooking ✈</span>
        <span id="tSpnFullname"></span>
        <button id="tButClose"></button>
    `;

    #shadowRoot;

    constructor() {
        super();
        this.#shadowRoot = this.attachShadow({ mode: 'open' });
        this.#shadowRoot.innerHTML = this.#template;

        const fullname = window.localStorage.getItem('fullname');
        this.#shadowRoot.querySelector('#tSpnFullname').textContent = fullname;

        this.#setupCloseButton();
    }


    #setupCloseButton() {
        this.#shadowRoot.querySelector('#tButClose').addEventListener('click', _ => {
            // window.localStorage.clear();
            // window.location = '/views/login.htm';
            this.#triggerCloseSessionEvent();
        })
    }


    #triggerCloseSessionEvent() {
        this.dispatchEvent(new CustomEvent('sessionclosed'));
    }


    static get observedAttributes() {
        return ['button-text'];
    }


    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'button-text') {
            this.#shadowRoot.querySelector('#tButClose').textContent = newValue;
        }
    }
}


window.customElements.define('header-login', HeaderLoginComponent);