/**
 * Docs for `example app index` module
 * @packageDocumentation
 */

/**
 * Example user
 * @example example
 * @implements {example}
 */
export class Exampleuser implements example {
  /**
   * Cancels the operation and returns a boolean value.
   *
   * @return {boolean} true if the operation is successfully canceled, false otherwise
   */
  public cancel(): boolean {
    return true;
  }
}
/**
 * example interface demonstrating usage
 */
export interface example {
  /**
   * Cancels the operation and returns a boolean value.
   * @return {boolean} true if the operation is successfully canceled, false otherwise
   * */
  cancel: () => boolean;
}
