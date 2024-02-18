import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CounterComponent } from './counter/counter.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    CounterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    CounterComponent
  ]
})
export class UserAuthModule { }
