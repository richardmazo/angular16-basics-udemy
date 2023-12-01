import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserUseCase } from 'src/app/domain/usecases/userusecases';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private formBuilder : FormBuilder, private router : Router, private _userUseCases : UserUseCase){
    
  }
  loginForm!:FormGroup;
  validationMessages = {
    email: [
      {type: 'required', message: 'Este campo es requerido'},
      {type: 'pattern', message: 'Solo se permiten emails validos'},
    ],
    password: [
      {type: 'required', message: 'Este campo es requerido'},
      {type: 'minlength', message: 'Este campo debe tener minimo 6 caracteres'},
    ],    
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['',
      [
        Validators.required,
        Validators.email,
        Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ]],
      password: ['',
      [
        Validators.required,
        Validators.minLength(6)
      ]]
    })
  }

  public get f(){
    return this.loginForm.controls
  }

  login(){
    var email = this.loginForm.controls['email'].value;
    var password = this.loginForm.controls['password'].value;
    if(this.loginForm.valid){
      let response = this._userUseCases.login(email, password);
      response.subscribe((data:any)=>{
        if(data){
          localStorage.setItem('email',data.email);
          localStorage.setItem('document',data.document);
          Swal.fire({
            title: 'Logueado!',
            text: 'Bienvenido al sistema ' + data.name,
            icon: 'success'
          })              
          this.router.navigate(['/home'])
          return;
        }
        Swal.fire({
          title: 'Alert!',
          text: 'Usuario o contraseña invalido',
          icon: 'error'
        })  
        return;      
      });  

    }else{
      Swal.fire({
        title: 'Alert!',
        text: 'Verifique los campos',
        icon: 'error'
      })
    }
    
  }
  
  /*
  texto : string = '';
  numeros : number = 0; 

  function login(email:string) : null {
    const a : string;
    const b : [];
    const c : Boolean;
    const d : any;
    const e : Object;
    return null;
    
  }*/
}
