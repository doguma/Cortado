import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../core/auth.service';

type UserFields = 'position';
type FormErrors = { [u in UserFields]: string };


@Component({
  selector: 'man-or-work',
  templateUrl: './man-or-work.component.html',
  styleUrls: ['./man-or-work.component.scss']
})
export class ManOrWorkComponent implements OnInit {

  extraProfileForm: FormGroup;
  newUser = true; // to toggle login or signup form

  formErrors: FormErrors = {
    'position': ''
  };
  validationMessages = {
    'position': {
      'required': 'This is a required field'
    }
  };

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.buildForm();
  }

  manOrWork() {
    this.auth.addManOrWork(this.extraProfileForm.value['position']);
    this.router.navigate(['extra-profile']);    
  }

  buildForm() {
    this.extraProfileForm = this.fb.group({
      'position': ['', [
        Validators.required
      ]],
    });

    this.extraProfileForm.valueChanges.subscribe((data) => this.onValueChanged(data));
    this.onValueChanged(); // reset validation messages
  }

  // Updates validation state on form changes.
  onValueChanged(data?: any) {
    if (!this.extraProfileForm) { return; }
    const form = this.extraProfileForm;
    for (const field in this.formErrors) {
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field) && (field === 'position')) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          if (control.errors) {
            for (const key in control.errors) {
              if (Object.prototype.hasOwnProperty.call(control.errors, key) ) {
                this.formErrors[field] += `${(messages as {[key: string]: string})[key]} `;
              }
            }
          }
        }
      }
    }
  }
}
