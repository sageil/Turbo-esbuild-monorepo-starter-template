/**
 * Docs for `common` module
 * @packageDocumentation
 */

/**
 * Docs for `doSomething` function.
 */
export function doSomething(): DoerInt {
  console.log('Doing something...');
  return { canDo: true };
}

export interface DoerInt {
  canDo: true;
}
