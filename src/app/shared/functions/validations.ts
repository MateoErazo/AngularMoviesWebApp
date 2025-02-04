import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function firstCapitalLetter() : ValidatorFn {
    return (control: AbstractControl) : ValidationErrors | null => {
        const value = <string> control.value;

        if(!value) return null;
        if(value.length === 0) return null; 

        const firstLetter = value[0];

        if(firstLetter != firstLetter.toUpperCase()){
            return {
                firstCapitalLetter: {
                    message: 'The first letter must be capitalized.'
                }
            }

        }

        return null;
    }

}

export function dateCannotBeInFuture(): ValidatorFn {
    return (control: AbstractControl) : ValidationErrors | null => {
        const userDate = new Date(control.value);
        const todayDate = new Date();
        
        if(userDate > todayDate){
            return {
                futureDate:{
                    message:'Date cannot be in future.'
                }
            }
        }

        return null;
    }
}