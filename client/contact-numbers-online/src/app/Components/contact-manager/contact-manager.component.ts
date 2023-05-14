import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/Services/contact.service';
import { IContact } from 'src/app/models/IContact';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {

  public loading: boolean = false;
  public contacts: any[] = [];
  public errorMessage: string | null = null;
  public searchText: any | null = null;

  page: number = 1;
  count: number = 0;
  pageSize: number = 5;
  sizes: any = [5, 10];

  constructor (private contactService: ContactService) {

  }
  ngOnInit(): void {
    this.getContacts()

  }

  public getContacts(){
    this.loading = true;
    this.contactService.getAllContacts().subscribe( res => {
    this.contacts = res.data;
    console.log(this.contacts)
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

  onContactDataChange(event: any) {
    this.page = event;
    this.getContacts();
  }
  onContactSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.getContacts();
  }








}


