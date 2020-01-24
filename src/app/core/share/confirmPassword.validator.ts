import { AbstractControl, Validators, FormGroup } from '@angular/forms';
export function confirmPasswordValidator() {
    return (group: FormGroup) => {
        let password = group.controls['password'];
        let confirmPassword = group.controls['replayPassword'];
        if (!(password.value === confirmPassword.value)) {
            return { confirmPassword: true }
        }
        return null
    }
}

