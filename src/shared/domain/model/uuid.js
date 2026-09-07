import { v7 as uuidv7, validate as uuidValidate} from 'uuid';

export function generateUUID() {
    return uuidv7();
}

export function isValidUUID(uuid) {
    return uuidValidate(uuid);
}