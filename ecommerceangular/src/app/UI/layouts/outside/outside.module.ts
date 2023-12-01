import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { OutsideComponent } from './outside.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../../components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from '../../components/signup/signup.component';



@NgModule({
  declarations: [OutsideComponent, LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OutsideModule { }
