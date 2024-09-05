import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from './model/User';
import { Observable } from 'rxjs';
import { Userdetails } from './model/userdetails';
import { Cruiseline } from './model/CruiseLine';
import { Ship } from './model/Ship';
import { AuthService } from './auth.service';
import { Cruise } from './model/Cruise';
@Injectable({
  providedIn: 'root'
})
export class MasterService {

 token?:any;
 auth:AuthService=new AuthService();
  constructor(
    private http: HttpClient
  ) { 
    if(this.auth.getToken()){
      this.token=this.auth.getToken();
    }
       
  }
      
  
  private getHeaders() {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
  }
  createuser(user: User) {
    return this.http.post<string>('http://localhost:8083/auth/user', user)

   }

   loginuser(user: User) {
    return this.http.post<Userdetails>('http://localhost:8083/auth/login', user)
   }

   getAllCruiseLines() {
    return this.http.get('http://localhost:8083/shipmanagement/admin/cruiseline')
   }

   getAllCruises() {
    return this.http.get('http://localhost:8083/shipmanagement/admin/cruises')
   }

   createcruiseline(cruiseline: Cruiseline) {
    return this.http.post('http://localhost:8083/shipmanagement/admin/cruiseline', cruiseline, { headers: this.getHeaders() })
   }
   createShip(id: number, ship: Ship) {
    return this.http.post(`http://localhost:8083/shipmanagement/admin/ship/${id}`, ship, { headers: this.getHeaders() });
  }
  
  getUser(id: string){
    return this.http.get(`http://localhost:8083/userregistry/user/${id}`, { headers: this.getHeaders() })
  }

  updateUser(id:number,user:User){
    return this.http.put(`http://localhost:8083/userregistry/user/${id}`, user, { headers: this.getHeaders() })
  }
   getallusers(){
    return this.http.get('http://localhost:8083/userregistry/admin/users', { headers: this.getHeaders() })
   }
   
   getallcruiselines(){
    return this.http.get('http://localhost:8083/shipmanagement/admin/cruiseline', { headers: this.getHeaders() })
   }
   getAllShips(){
    return this.http.get('http://localhost:8083/shipmanagement/admin/ship', { headers: this.getHeaders() })
   }

   createCruise(id: number, cruise: Cruise) {
    return this.http.post(`http://localhost:8083/shipmanagement/admin/cruise/${id}`, cruise, { headers: this.getHeaders() });
  }

  updateCruiseLine(id:any,cruiseline: Cruiseline) {
    return this.http.put(`http://localhost:8083/shipmanagement/admin/cruiseline/${id}`, cruiseline, { headers: this.getHeaders() })
   }

   updateship(id:any,ship: Ship) {
    return this.http.put(`http://localhost:8083/shipmanagement/admin/ship/${id}`, ship, { headers: this.getHeaders() })
   }
   updatecruise(id:any,cruise: Cruise) {
    return this.http.put(`http://localhost:8083/shipmanagement/admin/cruise/${id}`, cruise, { headers: this.getHeaders() })
   }

   deletecruiseline(id: any, p0: { responseType: string; }){
    return this.http.delete<string>(`http://localhost:8083/shipmanagement/admin/cruiseline/${id}`, { headers: this.getHeaders() })
   }

   
   deleteship(id:any){
    return this.http.delete(`http://localhost:8083/shipmanagement/admin/ship/${id}`,{ headers: this.getHeaders() })
   }

   
   deletecruise(id:any){
    return this.http.delete(`http://localhost:8083/shipmanagement/admin/cruise/${id}`,{ headers: this.getHeaders() })
   }

   getbookingsbycruise(cruiseName:string){
    return this.http.get(`http://localhost:8083/bookingmanagement/admin/booking/ByCruise/${cruiseName}`, { headers: this.getHeaders() })
   }
   getbookingsbyuser(user:string){
    return this.http.get(`http://localhost:8083/bookingmanagement/booking/ByUser/${user}`, { headers: this.getHeaders() })
   }
   getbookingsbycruiseline(cruiseline:string){
    return this.http.get(`http://localhost:8083/bookingmanagement/admin/booking/ByCruiseLine/${cruiseline}`, { headers: this.getHeaders() })
   }

   getbookingsbystartdestination(startdestination:string){
    return this.http.get(`http://localhost:8083/bookingmanagement/admin/booking/ByStartdestination/${startdestination}`, { headers: this.getHeaders() })
   }

   getbookingsbyenddestination(enddestination:string){
    return this.http.get(`http://localhost:8083/bookingmanagement/admin/booking/Byenddestination/${enddestination}`, { headers: this.getHeaders() })
   }

   getbookingsbetweendate(startdate:any,enddate:any){
    return this.http.get(`http://localhost:8083/bookingmanagement/admin/booking/ByDateduration/${startdate}/${enddate}`, { headers: this.getHeaders() })
   }

   getcruisebystartdestination(startdestination:string){
    return this.http.get(`http://localhost:8083/shipmanagement/cruisesBystartdestination/${startdestination}`, { headers: this.getHeaders() })
   }

   getcruisebyenddestination(enddestination:string){   
     return this.http.get(`http://localhost:8083/shipmanagement/cruisesByenddestination/${enddestination}`, { headers: this.getHeaders() })
   }

   getcruisesBycruiseline(cruiseline:string){
    return this.http.get(`http://localhost:8083/shipmanagement/cruisesBycruiseline/${cruiseline}`, { headers: this.getHeaders() })
   }

   getcruisesByship(shipname:string){
    return this.http.get(`http://localhost:8083/shipmanagement/cruisesByship/${shipname}`, { headers: this.getHeaders() })
   }


   getCruisesBybetweenDates(startDate: string, endDate: string) {
    const url = `http://localhost:8083/shipmanagement/cruises/BybetweenDates`;
  
    const params = new HttpParams()
      .set('startDate', startDate)
      .set('endDate', endDate);
  
    console.log('Request URL:', url);
    console.log('Request Params:', params.toString());
  
    return this.http.get(url, { headers: this.getHeaders(), params });
  }
  

   getcruisesBycruiseName(cruiseName:string){
    return this.http.get(`http://localhost:8083/shipmanagement/cruises/cruisesBycruiseName/${cruiseName}`, { headers: this.getHeaders() })
   }

   bookaticketforcruise(id: number, cruiseName: string) {  
    // Ensure to pass an empty object as the body if there's no body to send
    return this.http.post(`http://localhost:8083/bookingmanagement/booking/${id}/${cruiseName}`, {}, { headers: this.getHeaders() });
  }
  

}
