/*! Built with http://stenciljs.com */
import { h } from '../agc-cattle-pounds-weaned.core.js';

class AgcCattlePoundsWeanedInputs {
    constructor() {
        this.socket = "";
        this.ready = false;
    }
    render() {
        return (h("section", { "data-wizard-results": true, ref: c => this.section = c },
            h("div", { style: { display: this.ready ? 'none' : 'block' } },
                h("slot", { name: "empty" })),
            h("div", { style: { display: this.ready ? 'block' : 'none' } }, this.data && (h("ul", { class: "agc-results" },
                h("li", null,
                    h("h2", { "data-i18n": "results.total-weight-weaned" }, "Total Weight Weaned"),
                    h("span", { class: "agc-results__value", "data-units": this.data['units']['weight'] }, this.data['totalWeightWeaned']),
                    h("sub", null, this.data['units']['weight'])),
                h("li", null,
                    h("h2", { "data-i18n": "results.females-exposed" }, "Total Females Exposed"),
                    h("span", { class: "agc-results__value" }, this.data['femalesExposed']),
                    h("sub", null, "hd")))))));
    }
    handleResults(e) {
        if (e.detail['socket'] !== this.socket) {
            return;
        }
        this.data = Object.assign({}, e.detail['results']);
        this.ready = true;
    }
    componentDidLoad() {
        if (!this.socket) {
            return;
        }
        window.document.addEventListener('agcCalculated', this.handleResults.bind(this));
    }
    componentDidUnload() {
        window.document.removeEventListener('agcCalculated', this.handleResults);
    }
    static get is() { return "agc-cattle-pounds-weaned-inputs"; }
    static get properties() { return {
        "data": {
            "state": true
        },
        "ready": {
            "state": true
        },
        "socket": {
            "type": String,
            "attr": "socket"
        }
    }; }
}

export { AgcCattlePoundsWeanedInputs };
