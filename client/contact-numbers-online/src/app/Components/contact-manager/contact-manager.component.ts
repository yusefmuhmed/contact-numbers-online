import { Component } from '@angular/core';
import { ContactService } from 'src/app/Services/contact.service';
import { IContact } from 'src/app/models/IContact';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent {

  public loading: boolean = false;
  public contacts: any[] = [];
  public errorMessage: string | null = null;
  public searchText: any | null = null;

  constructor (private contactService: ContactService) {
    this.getContacts()
  }

  public getContacts(){
    this.loading = true;
    this.contactService.getAllContacts().subscribe( res => {

    this.contacts = res.data;

    this.loading = false;})
  }

public clickDeleteContact(contactId:string| undefined){
const confirmed = window.confirm('Are you sure you want to delete this contact?');
if(confirmed){
if(contactId){
this.contactService.deleteContact(contactId).subscribe((data) =>{
this.getContacts();

},
(error)=>{this.errorMessage=error}


)
}
}
  }




  public clickSearchContact(contactName:string| undefined){}

}
