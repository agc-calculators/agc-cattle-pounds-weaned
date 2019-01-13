
// AgcCattlePoundsWeaned: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './agc-cattle-pounds-weaned.core.js';
import {
  AgcCattlePoundsWeaned,
  AgcCattlePoundsWeanedInputs,
  AgcCattlePoundsWeanedProgress,
  AgcCattlePoundsWeanedResults,
  AgcCattlePoundsWeanedResultsPlaceholder
} from './agc-cattle-pounds-weaned.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    AgcCattlePoundsWeaned,
    AgcCattlePoundsWeanedInputs,
    AgcCattlePoundsWeanedProgress,
    AgcCattlePoundsWeanedResults,
    AgcCattlePoundsWeanedResultsPlaceholder
  ], opts);
}
