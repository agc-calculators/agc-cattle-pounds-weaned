/*! Built with http://stenciljs.com */
import { h } from '../agc-cattle-pounds-weaned.core.js';

class AgcCattlePoundsWeanedResultsPlaceholder {
    render() {
        const placeholder = () => h("span", null,
            h("i", { class: "mark" }),
            " ",
            h("i", { class: "mark" }),
            " ",
            h("i", { class: "mark" }),
            " ",
            h("i", { class: "mark" }));
        return (h("section", null,
            h("ul", { class: "agc-results-placeholder" },
                h("li", null,
                    h("h2", { "data-i18n": "results.weight-weaned-per-female" }, "Weight Weaned per Female"),
                    placeholder()))));
    }
    static get is() { return "agc-cattle-pounds-weaned-results-placeholder"; }
}

export { AgcCattlePoundsWeanedResultsPlaceholder };
