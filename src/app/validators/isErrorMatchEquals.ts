import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';


  export const isErrorMatchEquals: ValidatorFn = (formGroup: FormGroup): ValidationErrors | null => {
      if (formGroup.get('passwordConfirmCtrl').value === formGroup.get('passwordCtrl').value) {
        return null;
      } else {
        return {passwordMismatch: true};
      }
    };
