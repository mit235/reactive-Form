import { Component } from '@angular/core';
import{FormControl,FormGroup,Validators}from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
 loginForm=new FormGroup(
  {
    user:new FormControl("",[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])
  }
 )
 loginUser(item:any){
  console.log(item)
 }
 get users(){
  return this.loginForm.get('user');
 }
 get pass(){
  return this.loginForm.get('password');
 }
}
