class TrafficLightComponent extends HTMLElement {
    #template = `
        <style>
            :host {
                background-color: black;
                display: inline-flex;
                flex-direction: column;
                gap: 10px;
                padding: 10px !important;
            }

            .light {
                width: 50px;
                flex-basis: 50px;
                border-radius: 50%;
                filter: brightness(20%);
            }

            .light-red {
                background-color: red;
            }

            .light-orange {
                background-color: orange;
            }

            .light-green {
                background-color: green;
            }
        </style>

        <div class="light light-red"></div>
        <div class="light light-orange"></div>
        <div class="light light-green"></div>
    `;


    #shadowRoot;


    #durationRed;

    get durationRed() {
        return this.#durationRed;
    }

    set durationRed(value) {
        this.#durationRed = value;
    }


    #durationOrange;

    get durationOrange() {
        return this.#durationOrange;
    }

    set durationOrange(value) {
        this.#durationOrange = value;
    }


    #durationGreen;

    get durationGreen() {
        return this.#durationGreen;
    }

    set durationGreen(value) {
        this.#durationGreen = value;
    }


    constructor() {
        super();
        this.#shadowRoot = this.attachShadow({ mode: 'open' });
        this.#shadowRoot.innerHTML = this.#template;
    }


    connectedCallback() {
        this.#setup();
    }


    #setup() {
        this.#shadowRoot.querySelector('.light-red').style.filter = 'brightness(100%)';

        setupDurationRed.bind(this)();
        setupDurationOrange.bind(this)();
        setupDurationGreen.bind(this)();

        setInterval(setupDurationRed.bind(this), this.#durationRed + this.#durationOrange + this.#durationGreen);
        setInterval(setupDurationOrange.bind(this), this.#durationRed + this.#durationOrange + this.#durationGreen);
        setInterval(setupDurationGreen.bind(this), this.#durationRed + this.#durationOrange + this.#durationGreen);


        function setupDurationRed() {
            setTimeout(
                () => {
                    this.#shadowRoot.querySelector('.light-red').style.filter = 'brightness(20%)';
                    this.#shadowRoot.querySelector('.light-orange').style.filter = 'brightness(100%)';
                    // const event = new CustomEvent('lightorangeswitched', { detail: { light: 'ORANGE' } });
                    const event = new CustomEvent('lightswitched', { detail: { light: 'ORANGE' } });
                    this.dispatchEvent(event);
                },
                this.#durationRed
            );
        }

        function setupDurationOrange() {
            setTimeout(
                () => {
                    this.#shadowRoot.querySelector('.light-orange').style.filter = 'brightness(20%)';
                    this.#shadowRoot.querySelector('.light-green').style.filter = 'brightness(100%)';
                    // const event = new CustomEvent('lightgreenswitched', { detail: { light: 'GREEN' } });
                    const event = new CustomEvent('lightswitched', { detail: { light: 'GREEN' } });
                    this.dispatchEvent(event);
                },
                this.#durationRed + this.#durationOrange
            );
        }

        function setupDurationGreen() {
            setTimeout(
                () => {
                    this.#shadowRoot.querySelector('.light-green').style.filter = 'brightness(20%)';
                    this.#shadowRoot.querySelector('.light-red').style.filter = 'brightness(100%)';
                    // const event = new CustomEvent('lightredswitched', { detail: { light: 'RED' } });
                    const event = new CustomEvent('lightswitched', { detail: { light: 'RED' } });
                    this.dispatchEvent(event);
                },
                this.#durationRed + this.#durationOrange + this.#durationGreen
            );
        }
    }


    static get observedAttributes() {
        return ['duration-red', 'duration-orange', 'duration-green'];
    }


    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'duration-red':
                this.#durationRed = parseInt(newValue) * 1000;
                break;
            case 'duration-orange':
                this.#durationOrange = parseInt(newValue) * 1000;
                break;
            case 'duration-green':
                this.#durationGreen = parseInt(newValue) * 1000;
                break;
        }
    }


}

window.customElements.define('traffic-light', TrafficLightComponent);