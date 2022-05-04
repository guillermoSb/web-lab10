

/**
 * Adds two numbers
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
export const add = (a, b) => a + b;


/**
 * Subtracts two numbers
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
export const sub = (a, b) => a - b;

/**
 * Divide
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
export const divide = (a, b) => a / b;


/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
export const multiply = (a, b) => a * b;


/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
export const mod = (a, b) => a % b;


/**
 * Converts an array to a number
 * @param {number[]} arr 
 * @returns 
 */
export const arrayToNumber = (arr) => {
    return Number(arr.join(''))
}