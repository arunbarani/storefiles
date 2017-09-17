import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';
import { HSAValidator } from './hsa-validators';

@Directive({
  selector: '[hsavalidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true }]
})
export class EmailValidatorDirective implements Validator {
  @Input() hsavalidator : any;

  validate(control: AbstractControl): { [key: string]: any } {
    return HSAValidator.validate(this.hsavalidator)(control);
  }

}


