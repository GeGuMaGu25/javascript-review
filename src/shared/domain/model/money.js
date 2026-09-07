import {Currency} from "./currency.js";
import {ValidationError} from "./errors.js";

export class Money
{
    #amount;
    #currency;

    constructor(amount, currency)
    {
        if(!Number.isFinite(amount) || amount < 0)
        {
            throw new ValidationError(`Invalid amount: ${amount}`);
        }
        if(!currency instanceof Currency)
            throw new ValidationError(`Invalid currency: ${currency}`);
        this.#amount = amount;
        this.#currency = currency;
        Object.freeze(this);
    }
    get amount()
    {
        return this.#amount;
    }
    get currency()
    {
        return this.#currency;
    }
    add(other)
    {
        if(!(other instanceof Money) || !this.equals(other.currency))
            throw new ValidationError(`Cannot add Money with different currency: ${this.currency} and ${other.currency}`);
        return new Money({amount: this.#amount + other.amount, currency: this.#currency})
    }

    multiply(multiplier)
    {
        if(!Number.isFinite(multiplier) || multiplier < 0)
            throw new ValidationError(`Invalid multiplier: ${this.currency} and ${other.currency}`);
        return new Money({amount: this.#amount * multiplier, currency: this.#currency})
    }

    equals(other)
    {
        return other instanceof Money && this.#amount === other.amount && this.#currency.equals(other.currency);
    }
}