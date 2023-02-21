import {evaluate} from 'mathjs';

export function evaluateCalculator(value) {
  let evaluateCount = '';
  try {
    evaluateCount = evaluate(value);
    if (evaluateCount === undefined || Number.isNaN(evaluateCount)) {
      // error display
    }
  } catch (error) {
    return undefined;
  }

  return evaluateCount;
}

export function test() {
  // test
}
