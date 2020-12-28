import _ from "lodash";

/**
 * Prototype do something.
 * @return {string}
 */
export function Prototype(): string {
  const message = "the answer is " + _.reduce(["a", "b", "c"], (a, b) => a + b);
  return message;
}

/**
 * Print something.
 * @param {string} message
 */
export function Print(message: string) {
  console.log(message);
}
