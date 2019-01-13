
import { Component, State, Event, EventEmitter, Prop } from '@stencil/core';
import { validate, round } from '../../utils'

@Component({
    tag: 'agc-cattle-pounds-weaned'
})
export class AgcCattlePoundsWeaned {

    @Prop() socket: string = ""
    @Prop() tract: string = ""
    @Prop() mode: 'full' | 'step' = 'step'
    @Prop() units: any = { weight: 'lbs' }
    @State() currentStep = 0
    @State() cache = {}
    @State() submitted = false
    @State() results = {}
    @Event({
        eventName: 'agcCalculated'
      }) agcCalculated: EventEmitter;
    @Event({
        eventName: 'agcStepChanged'
    }) agcStepChanged: EventEmitter;

    form: HTMLFormElement

    render() {
        return (
            <div>
                <form onSubmit={(e) => e.preventDefault()} ref={c => this.form = c as HTMLFormElement} data-wizard="agc-cattle-pounds-weaned" 
                    data-wizard-mode={this.mode}
                    class="agc-wizard">
                    <slot></slot>
                    <section data-wizard-section="1">
                        <div class="agc-wizard__field">
                            <label data-i18n="fields.total-weight-weaned">Total Weight Weaned</label>
                            <input name="totalWeightWeaned" type="text" required />
                            <p class="agc-wizard__validation-message" data-i18n="validation.total-weight-weaned.required" data-validates="totalWeightWeaned">Please enter a value.</p>
                            <p data-i18n={`hints.total-weight-weaned-${this.units['weight']}`}>⮤ Enter the total weight weaned in pounds.</p>
                        </div>
                        <div class="agc-wizard__actions">
                            {this.mode === 'step' && <button class="agc-wizard__actions-next" data-i18n="actions.next" onClick={this.nextPrev.bind(this, 1)}>Next</button>}
                        </div>
                    </section>
                    <section data-wizard-section="2">
                        <div class="agc-wizard__field">
                            <label data-i18n="fields.females-exposed">Total Females Exposed</label>
                            <input name="femalesExposed" type="text" required />
                            <p class="agc-wizard__validation-message" data-i18n="validation.females-exposed.required" data-validates="femalesExposed">Please enter a value.</p>
                            <p data-i18n={`hints.females-exposed`}>⮤ Enter the total number of females exposed for breeding.</p>
                        </div>
                        <div class="agc-wizard__actions">
                            {this.mode === 'step' && <button class="agc-wizard__actions-prev" data-i18n="actions.prev" onClick={this.nextPrev.bind(this, -1)}>Back</button>}
                            <button class="agc-wizard__actions-next" data-i18n="actions.finish" onClick={this.nextPrev.bind(this, this.mode === 'step' ? 1 : 2)}>Calculate</button>
                        </div>
                    </section>
                    <section data-wizard-results>                        
                        <slot name="results"></slot>                     
                    </section>
                </form>
            </div>
        );
    }

    showTab(n) {
        // This function will display the specified section of the form... 
        if (this.mode === 'step') {       
            this.cache['sections'][n].style.display = "block";
        }

        if (this.socket) {
            this.agcStepChanged.emit({socket: this.socket, tract: this.tract, step: this.currentStep})
        }
    }

    reset() {
        this.currentStep = 0
        this.submitted = false
        this.showTab(0)
    }

    validateForm () {
        let valid = true;

        if (this.currentStep === 0 || this.mode === 'full') {
            if (!validate(this.form, 'totalWeightWeaned')) {
                valid = false
            }
        }

        if (this.currentStep === 0 || this.mode === 'full') {
            if (!validate(this.form, 'femalesExposed')) {
                valid = false
            }
        }
        

        return valid;
    }

    nextPrev(n, e) {
        e && e.preventDefault()
        if (this.mode === 'full') {
            if (!this.validateForm()) return false
        } else if (n == 1 && !this.validateForm()) return false

        // Hide the current tab:
        if (this.mode === 'step') {
            this.cache['sections'][this.currentStep].style.display = "none"
        }
        // Increase or decrease the current tab by 1:
        this.currentStep = this.currentStep + n
        // if you have reached the end of the form...
        if (this.currentStep >= this.cache['sections'].length) {
            // ... the form gets submitted:
            this.submitted = true
            this.showResults.call(this);
            return false;
        }
        // Otherwise, display the correct tab:
        this.showTab.call(this, this.currentStep);
    }

    showResults() {
        let totalWeightWeaned =  round((this.form.querySelector('[name="totalWeightWeaned"') as HTMLInputElement).value, 0);        
        let femalesExposed =  round((this.form.querySelector('[name="femalesExposed"') as HTMLInputElement).value, 0);        

        let weightWeanedPerFemale = round(totalWeightWeaned / femalesExposed, 0);

        let results = {
            socket: this.socket,
            tract: this.tract,
            units: this.units,
            totalWeightWeaned,
            femalesExposed,
            weightWeanedPerFemale,
            calculated: new Date()
        }

        if (this.socket) {
            this.agcCalculated.emit({socket: this.socket, tract: this.tract, results: {...results}})
        }

        this.results = {...results}
        
        this.cache['results'].forEach(result => {
            result.style.display = 'block'
        })
    }

    handleAction(e:CustomEvent) {
        if (e.detail['action'] === 'reset') {
            this.reset();
        }
    }

    componentDidLoad() {
        var sections = Array.from(this.form.querySelectorAll('[data-wizard-section]')).map(c => c as any).map(c => c as HTMLElement)
        var results = Array.from(this.form.querySelectorAll('[data-wizard-results]')).map(c => c as any).map(c => c as HTMLElement)
        this.cache = {...this.cache, sections: sections, results: results}

        window.document.addEventListener('agcAction', this.handleAction.bind(this));

        this.showTab(0)
    }

    componentDidUnload() {
        window.document.removeEventListener('agcAction', this.handleAction);
    }
}