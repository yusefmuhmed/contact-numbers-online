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
if(contactId){
this.contactService.deleteContact(contactId).subscribe((data) =>{
this.getContacts();

},
(error)=>{this.errorMessage=error}


)
}
  }


}
