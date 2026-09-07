import {ValidationError} from "./errors.js";

/**
 * Value object representing a currency code (e.g., USD, EUR, GBP, JYP).
 */
export class Currency {
    static #VALID_CODES = ['USD', 'EUR', 'GBP', 'JYP'];
    #code;

    /**
     *
     * @param code
     */
    constructor(code) {
        if (!Currency.#VALID_CODES.includes(code)) {
            throw new ValidationError(`Invalid currency code: ${code}. Must be one of: ${Currency.#VALID_CODES.join(', ')}`);

        }
        this.#code = code;
        Object.freeze(this);
    }

    /**
     * Gets the currency code
     * @returns {string} The currency code
     */
    get code() {
        return this.#code;
    }

    /**
     * Checks if the currency is equal to another Currency
     * @param {Currency} other -
     * @returns {boolean}
     */
    equals(other) {
        return other instanceof Currency && this.#code === other.code;
    }

    toString() {
        return this.#code;
    }
}