import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomPasswordValidationService {

  constructor() { }

  passwordMatchValidator(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {

      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      // Checking if the controls exist

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      // If the passwords do not match : error should be generated

      if (passwordControl.value !== confirmPasswordControl.value) {

        // If the errors array already exists, we update/create the passwordMismatch property

        if(confirmPasswordControl.errors)
          confirmPasswordControl.errors['passwordMismatch'] = true;

        // Else, errors array is initialized with the passwordMismatch property

        else
          confirmPasswordControl.setErrors({ passwordMismatch: true });

          return true;

      } else {

        // When the passwords match, update the passwordMismatch property

        if(confirmPasswordControl.errors)
          confirmPasswordControl.errors['passwordMismatch'] = false;

          return true;
      }
    };



  }
}











  //   return (formGroup: FormGroup) => {
  //     const control = formGroup.controls[password];
  //     const matchingControl = formGroup.controls[confirmPassword];
  //     if (matchingControl.errors && !matchingControl.errors['passwordMismatch']) {
  //         return;
  //     }
  //     if (control.value !== matchingControl.value) {
  //         matchingControl.setErrors({ passwordMismatch: true });
  //     } else {
  //         matchingControl.setErrors({ passwordMismatch: null });
  //     }
  // }