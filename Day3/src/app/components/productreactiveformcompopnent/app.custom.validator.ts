import { AbstractControl, ValidatorFn } from '@angular/forms';

// custom validator class must contain static metyhod
export class MyCustomValidator {
  // if the method is validated
  // then it will return null
  // else it will retun JSON object for
  // invalidation
  // AbstractControl --> represents HTML UI element
  // on which the validations are applied
  static checkEven(ctrl: AbstractControl) : any {
     const val: number  = parseInt(ctrl.value);
     if (val % 2 === 0) {
        return null;
     } else {
       return {noteven:true}
     }
  }

  static checkUniqueId(ids : Number[]) : ValidatorFn{
  return (ctrl : AbstractControl): any => {
    const val: number = parseInt(ctrl.value);
    if (ids.includes(val)) {
      return {duplicate: true};
    } else {
      return null;
    }
  }
  }

  static checkIfUppercase(ctrl: AbstractControl) : any {
    var char = ctrl.value.charAt(0);
    if (char === char.toLocaleLowerCase()) {
      return { notanuppercase: true};
    } else if (char === char.toLocaleUpperCase()) {
      return null;
  }
 }


}
