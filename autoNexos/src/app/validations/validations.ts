export class Validation {

    constructor() { }

    validatorField(data: string) {
        if (data === '') {
            return false;
        }
        return true;
    }


}