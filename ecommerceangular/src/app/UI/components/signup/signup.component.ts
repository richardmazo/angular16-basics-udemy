import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/domain/models/User/user';
import { UserUseCase } from 'src/app/domain/usecases/userusecases';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  signupForm!:FormGroup;
  public validationMessages = {
    name: [
      {type:"required",message:"Este campo es requerido"}
    ],
    email:[
      {type:"required",message:"Este campo es requerido"},
      {type:"pattern",message:"Este es de tipo email"}
    ],
    document:[
      {type:"required",message:"Este campo es requerido"},
      {type:"minlength",message:"Este campo debe tener minimo 6 caracteres"},   
      {type:"pattern",message:"Este campo es numerico"}      
    ]
  }
  constructor(private formBuilder:FormBuilder, private _userUseCase : UserUseCase, private router : Router){

  }
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name:[
        '',
        [
          Validators.required
        ]
      ],
      email:[
        '',
        [
          Validators.required,
          Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        ]
      ],
      document:[
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/(^\d{1,10}$)/)
        ]
      ]            
    })
  }

  public get f(){
    return this.signupForm.controls
  }

  signup(){
    if(this.signupForm.valid){
      var name = this.signupForm.controls['name'].value
      var email = this.signupForm.controls['email'].value
      var document = this.signupForm.controls['document'].value

      var user : User = {name, email, document};
      let response = this._userUseCase.signup(user).subscribe((data:any) => {
        Swal.fire({
          title: 'Usuario registrado',
          text: 'El usuario de ' + data.name + ' fue registrado con exito',
          icon: 'success'
        })
        this.router.navigate(['/login'])
      })
    }
  }


}
