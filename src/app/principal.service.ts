
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  constructor(private http: Http ) { }


  getOrder(paramId){

    return this.http.get(`http://friccion.ngrok.io/api/v1/order/${paramId}`).toPromise()
  }
  
}
