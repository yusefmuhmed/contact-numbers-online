import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/Services/contact.service';
import { IContact } from 'src/app/models/IContact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  public loading: boolean = false;
  public contact: any = {} as any;
  public errorMessage: string | null = null;

  constructor (private contactService: ContactService, private router: Router) {

  }
  ngOnInit(): void {

  }


public createSubmit(){
this.contactService.createContact(this.contact).subscribe(contact => {

this.router.navigate(['/']).then();

},
(error)=>{this.errorMessage=error;
this.router.navigate(['/contacts/add'])
}
)
}


}
