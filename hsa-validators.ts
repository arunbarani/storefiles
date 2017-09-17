import { AbstractControl, ValidatorFn } from '@angular/forms';
import { ValidationProvider } from './hsa-validation.provider';

export const HSAValidator = {validate};

function validate(hasValidators: string): ValidatorFn {
    let validators: Array<any> = hasValidators ? hasValidators.split(",") : [];

    return (control: AbstractControl): { [key: string]: any } => {
        let validationResult: object = null;
        let isValid;

        for (let index = 0; index < validators.length; index++) {
            let valMsg, valExpression;

            if (typeof validators[index] == "string" && validators[index].trim().split(":").length > 0) {
                let valObjArr = validators[index].split(":")
                let valName = valObjArr[0].trim();

                valMsg = valObjArr.length > 1 ? valObjArr[1] : ValidationProvider.config[valName].message;
                valExpression = ValidationProvider.config[valName].expression;
            } else if (typeof validators[index] == "object") {
                valExpression = validators[index].expression;
            }

            isValid = valExpression.test(control.value);

            if (isValid == false) {
                validationResult = { message: valMsg };
                break;
            }
        }

        return validationResult;
    }
}