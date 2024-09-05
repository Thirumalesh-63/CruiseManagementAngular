import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  setUserId(id:string){
    localStorage.setItem('id',id);
  }

  setEmail(email:string){
    localStorage.setItem('email',email);
  }
  getEmail(){
    return localStorage.getItem('email');
  }
  getUserId(){
    return localStorage.getItem('id');
  }
  getToken() {
    return localStorage.getItem('token');
  }
  removeToken() {
    localStorage.removeItem('token');
  }
  // write a method to check if the user is logged in
  isLoggedIn() {
    return this.getToken() !== null;
  }
  // write a method to log the user out
  logout() {
    this.removeToken();
  }
  

}
