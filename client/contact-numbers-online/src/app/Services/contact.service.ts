import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IContact } from '../models/IContact';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // try ''
  private  serverUrl = `http://localhost:3000/api/`

  constructor(private httpClient: HttpClient) { }


//GET  all contacts
public getAllContacts(): Observable<any> {

  return this.httpClient.get("http://localhost:3000/api/contact/fetchContacts");
}

public getSingleContact(contactId:string): Observable<any> {
  return this.httpClient.get(`http://localhost:3000/api/contact/getSingleContact/${contactId}`);
}


public filterContactsByName(contactName:string): Observable<any> {
  return this.httpClient.get(`http://localhost:3000/api/contact/filterContactsByName/${contactName}`);
}




//Create Contact
public createContact(contact:any): Observable<any> {
  return this.httpClient.post("http://localhost:3000/api/contact/addContact",contact);
  }



//UPDATE single contact
public updateContact(contact:any,contactId:string): Observable<any> {
  return this.httpClient.put(`http://localhost:3000/api/contact/editContact/${contactId}`,contact).pipe(catchError(this.handleError))
  }


//Delete single contact
public deleteContact(contactId:string): Observable<any> {
  return this.httpClient.delete(`http://localhost:3000/api/contact/deleteContact/${contactId}`);
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
