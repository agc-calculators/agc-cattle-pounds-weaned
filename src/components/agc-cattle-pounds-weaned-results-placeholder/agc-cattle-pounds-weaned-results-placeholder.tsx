
import { Component } from '@stencil/core';


@Component({
    tag: 'agc-cattle-pounds-weaned-results-placeholder'
})
export class AgcCattlePoundsWeanedResultsPlaceholder {

    

    render() {
        const placeholder = () => <span><i class="mark"></i> <i class="mark"></i> <i class="mark"></i> <i class="mark"></i></span>

        return (
            <section>
                <ul class="agc-results-placeholder">
                    <li>
                        <h2 data-i18n="results.weight-weaned-per-female">Weight Weaned per Female</h2>
                        {placeholder()}
                    </li>                                      
                </ul>
            </section>
        );
    }
}