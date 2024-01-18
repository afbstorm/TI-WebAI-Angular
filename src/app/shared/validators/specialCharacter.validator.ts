import { AbstractControl, ValidationErrors } from "@angular/forms";

export function specialCharacterValidator(control: AbstractControl): ValidationErrors | null {
  if (/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(control.value)) {
    return null;
  }

  return { needsSpecial: true };
}
