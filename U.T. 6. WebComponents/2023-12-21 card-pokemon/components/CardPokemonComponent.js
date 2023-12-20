class CardPokemonComponent extends HTMLElement {
    #template = `
        <style>
            :host {
                border: solid 5px darkgreen;
                background-color: lightgreen;
                display: grid;

                grid-template-columns: auto auto;
            }

            #tDivName, #tDivImage {
                grid-column: span 2;
            }

            #tDivName {
                text-transform: uppercase;
                text-align: center;
                font-size: 2rem;
                font-weight: bold;
            }
        </style>


        <div id="tDivName">Nombre: </div>
        <img id="tDivImage">
        <div>Estatura:</div><div id="tDivHeight"></div>
        <div>Masa:</div><div id="tDivWeight"></div>
    `;

    #shadowRoot;
    #pokemonId;


    constructor() {
        super();
        this.#shadowRoot = this.attachShadow({ mode: 'open' });
        this.#shadowRoot.innerHTML = this.#template;
    }


    async connectedCallback() {
        const { name, height, weight, image } = await this.#getPokemon();
        this.#shadowRoot.querySelector('#tDivName').textContent = name;
        this.#shadowRoot.querySelector('#tDivImage').src = image;
        this.#shadowRoot.querySelector('#tDivHeight').textContent = height;
        this.#shadowRoot.querySelector('#tDivWeight').textContent = weight;
    }


    static get observedAttributes() {
        return ['pokemon'];
    }


    async #getPokemon() {
        const url = `https://pokeapi.co/api/v2/pokemon/${this.#pokemonId}/`;
        const response = await fetch(url);
        const data = await response.json();
        const { name, height, weight } = data;
        const image = data.sprites.front_default;
        return { name, height, weight, image }
    }


    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'pokemon') {
            this.#pokemonId = parseInt(newValue);
        }
    }

}

window.customElements.define('card-pokemon', CardPokemonComponent);