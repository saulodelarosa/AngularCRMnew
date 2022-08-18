import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../../services/account.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm:FormGroup;
  constructor(private fb:FormBuilder, private accountService:AccountService) {
    this.signUpForm =  this.fb.group({
     "firstName": new FormControl('',[Validators.required]),
     "lastName": new FormControl('',[Validators.required]),
     "email": new FormControl('',[Validators.required,Validators.email]),
     "password": new FormControl('',[Validators.required]),
     "confirmPassword": new FormControl('',[Validators.required]),
    });
   }

  ngOnInit(): void {
  }
  signUp(){
    this.accountService.signUp(this.signUpForm.value).subscribe(d=>{
      alert(d)
      this.signUpForm.reset();
    })
  }
}
