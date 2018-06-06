import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../core/auth.service';

type UserFields = 'displayName' | 'storeName' | 'position';
type FormErrors = { [u in UserFields]: string };


@Component({
  selector: 'extra-profile',
  templateUrl: './extra-profile.component.html',
  styleUrls: ['./extra-profile.component.scss']
})
export class ExtraProfileComponent implements OnInit {

  extraProfileForm: FormGroup;
  newUser = true; // to toggle login or signup form

  formErrors: FormErrors = {
    'displayName': '',
    'storeName': '',
    'position': ''
  };
  validationMessages = {
    'displayName': {
      'required': 'Email is required.'
    },
    'storeName': {
      'required': 'Password is required.'
    },
    'position': {
      'required': 'Password is required.'
    }
  };

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.buildForm();
  }

  extraProfile() {
    this.auth.addExtraProfile(this.extraProfileForm.value['displayName'], this.extraProfileForm.value['storeName'], this.extraProfileForm.value['position']);
    this.router.navigate(['/']);    
  }

  buildForm() {
    this.extraProfileForm = this.fb.group({
      'displayName': ['', [
        Validators.required
      ]],
      'storeName': ['', [
        Validators.required
      ]],
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
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field) && (field === 'displayName' || field === 'storeName' || field === 'position')) {
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
