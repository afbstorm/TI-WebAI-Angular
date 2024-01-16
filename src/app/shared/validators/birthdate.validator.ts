import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";


export function birthdateValidator (): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const actualDate = new Date().getFullYear();

    if ((parseInt(String(actualDate)) - parseInt(value)) < 13) {
      return {birthdate: 'Interdit au moins de 13 ans.'}
    }
    return null;
  }
}
