import {generateUuid, validateUuid} from "./uuid.js";

export class PurchaseOrderId {
    #value

    constructor(value) {
        if (!validateUuid(value)) {
            throw new Error(`PInvalid PurchaseOrderId: ${value}. Must be a valid UUID.`);
        }
        this.#value = value;
        Object.freeze(this);
    }

    static generate() {
        return new PurchaseOrderId(generateUuid());
    }

    get value() {
        return this.#value;
    }

    equals(other) {
        return other instanceof PurchaseOrderId && this.#value === other.#value;
    }

    toString() {
        return this.#value;
    }
}
