import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
faLock=faLock;
  loginForm: FormGroup;
  
  constructor(private fb:FormBuilder, private r:Router) { }

  ngOnInit() {
    this.loginForm= this.fb.group({
      username:'',
      password:''
    })
  
  }

  onLoginSubmit(){

    if(this.loginForm.get('username').value==='admin' && this.loginForm.get('password').value==='admin123')
    {
      console.log("logged in");
      alert("login Successfully")
      
        this.r.navigateByUrl('login/header');
    }
    else{
      alert("Login Faild...")
    }
  }
}
