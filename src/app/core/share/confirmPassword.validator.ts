import { AbstractControl, Validators, FormGroup } from '@angular/forms';
import { debounceTime, tap } from 'rxjs/operators';
import { registerService } from 'src/app/usuario/register/register.service';
import { Subject } from 'rxjs';
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
export function checkExistsEmail(service: registerService) {

    return (group: FormGroup) => {
        if (!(group.controls['email'].value === '')) {
            let u = service.checkEmail(group.controls['email']);

            u.subscribe(res => {
                if (!(res === null)) {
                    return { checkExistsEmail: true }
                } else {
                    return null
                }
            })
        } else {
            return null;
        }
    }
}

