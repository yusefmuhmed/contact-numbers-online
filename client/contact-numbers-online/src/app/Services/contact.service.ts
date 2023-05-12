import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IContact } from '../models/IContact';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // try ''
  private  serverUrl = `http://localhost:3000/api`

  constructor(private httpClient: HttpClient) { }

//GET  all contacts
public getAllContacts(): Observable<IContact[]> {
let dataUrl: string = `${this.serverUrl}/contact`
  return this.httpClient.get<IContact[]>(dataUrl).pipe(catchError(this.handleError));
}

//Error handling
public handleError(error:HttpErrorResponse){
  let errorMessage:string ='';
  if(error.error instanceof ErrorEvent){
    //client error
    errorMessage = `Error : ${error.error.message}`
  }

  else{
    //server error
    errorMessage = `Status : ${error.status} \n Message: ${error.message} `;
  }
  return throwError(errorMessage);
}

}
