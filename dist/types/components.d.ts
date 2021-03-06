/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import './stencil.core';




export namespace Components {

  interface AgcCattlePoundsWeanedInputs {
    'socket': string;
  }
  interface AgcCattlePoundsWeanedInputsAttributes extends StencilHTMLAttributes {
    'socket'?: string;
  }

  interface AgcCattlePoundsWeanedProgress {
    'socket': string;
  }
  interface AgcCattlePoundsWeanedProgressAttributes extends StencilHTMLAttributes {
    'socket'?: string;
  }

  interface AgcCattlePoundsWeanedResultsPlaceholder {}
  interface AgcCattlePoundsWeanedResultsPlaceholderAttributes extends StencilHTMLAttributes {}

  interface AgcCattlePoundsWeanedResults {
    'socket': string;
  }
  interface AgcCattlePoundsWeanedResultsAttributes extends StencilHTMLAttributes {
    'socket'?: string;
  }

  interface AgcCattlePoundsWeaned {
    'mode': 'full' | 'step';
    'socket': string;
    'tract': string;
    'units': any;
  }
  interface AgcCattlePoundsWeanedAttributes extends StencilHTMLAttributes {
    'mode'?: 'full' | 'step';
    'onAgcCalculated'?: (event: CustomEvent) => void;
    'onAgcStepChanged'?: (event: CustomEvent) => void;
    'socket'?: string;
    'tract'?: string;
    'units'?: any;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AgcCattlePoundsWeanedInputs': Components.AgcCattlePoundsWeanedInputs;
    'AgcCattlePoundsWeanedProgress': Components.AgcCattlePoundsWeanedProgress;
    'AgcCattlePoundsWeanedResultsPlaceholder': Components.AgcCattlePoundsWeanedResultsPlaceholder;
    'AgcCattlePoundsWeanedResults': Components.AgcCattlePoundsWeanedResults;
    'AgcCattlePoundsWeaned': Components.AgcCattlePoundsWeaned;
  }

  interface StencilIntrinsicElements {
    'agc-cattle-pounds-weaned-inputs': Components.AgcCattlePoundsWeanedInputsAttributes;
    'agc-cattle-pounds-weaned-progress': Components.AgcCattlePoundsWeanedProgressAttributes;
    'agc-cattle-pounds-weaned-results-placeholder': Components.AgcCattlePoundsWeanedResultsPlaceholderAttributes;
    'agc-cattle-pounds-weaned-results': Components.AgcCattlePoundsWeanedResultsAttributes;
    'agc-cattle-pounds-weaned': Components.AgcCattlePoundsWeanedAttributes;
  }


  interface HTMLAgcCattlePoundsWeanedInputsElement extends Components.AgcCattlePoundsWeanedInputs, HTMLStencilElement {}
  var HTMLAgcCattlePoundsWeanedInputsElement: {
    prototype: HTMLAgcCattlePoundsWeanedInputsElement;
    new (): HTMLAgcCattlePoundsWeanedInputsElement;
  };

  interface HTMLAgcCattlePoundsWeanedProgressElement extends Components.AgcCattlePoundsWeanedProgress, HTMLStencilElement {}
  var HTMLAgcCattlePoundsWeanedProgressElement: {
    prototype: HTMLAgcCattlePoundsWeanedProgressElement;
    new (): HTMLAgcCattlePoundsWeanedProgressElement;
  };

  interface HTMLAgcCattlePoundsWeanedResultsPlaceholderElement extends Components.AgcCattlePoundsWeanedResultsPlaceholder, HTMLStencilElement {}
  var HTMLAgcCattlePoundsWeanedResultsPlaceholderElement: {
    prototype: HTMLAgcCattlePoundsWeanedResultsPlaceholderElement;
    new (): HTMLAgcCattlePoundsWeanedResultsPlaceholderElement;
  };

  interface HTMLAgcCattlePoundsWeanedResultsElement extends Components.AgcCattlePoundsWeanedResults, HTMLStencilElement {}
  var HTMLAgcCattlePoundsWeanedResultsElement: {
    prototype: HTMLAgcCattlePoundsWeanedResultsElement;
    new (): HTMLAgcCattlePoundsWeanedResultsElement;
  };

  interface HTMLAgcCattlePoundsWeanedElement extends Components.AgcCattlePoundsWeaned, HTMLStencilElement {}
  var HTMLAgcCattlePoundsWeanedElement: {
    prototype: HTMLAgcCattlePoundsWeanedElement;
    new (): HTMLAgcCattlePoundsWeanedElement;
  };

  interface HTMLElementTagNameMap {
    'agc-cattle-pounds-weaned-inputs': HTMLAgcCattlePoundsWeanedInputsElement
    'agc-cattle-pounds-weaned-progress': HTMLAgcCattlePoundsWeanedProgressElement
    'agc-cattle-pounds-weaned-results-placeholder': HTMLAgcCattlePoundsWeanedResultsPlaceholderElement
    'agc-cattle-pounds-weaned-results': HTMLAgcCattlePoundsWeanedResultsElement
    'agc-cattle-pounds-weaned': HTMLAgcCattlePoundsWeanedElement
  }

  interface ElementTagNameMap {
    'agc-cattle-pounds-weaned-inputs': HTMLAgcCattlePoundsWeanedInputsElement;
    'agc-cattle-pounds-weaned-progress': HTMLAgcCattlePoundsWeanedProgressElement;
    'agc-cattle-pounds-weaned-results-placeholder': HTMLAgcCattlePoundsWeanedResultsPlaceholderElement;
    'agc-cattle-pounds-weaned-results': HTMLAgcCattlePoundsWeanedResultsElement;
    'agc-cattle-pounds-weaned': HTMLAgcCattlePoundsWeanedElement;
  }


}
