import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/Services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent {
  public loading: boolean = false;
  public contactId: string | null = null;
  public contact: any = {} as any;
  public errorMessage: string | null = null;




  constructor (private contactService: ContactService, private activatedRoute: ActivatedRoute,private router: Router) {

  }

ngOnInit(): void {
this.loading = true;
this.activatedRoute.paramMap.subscribe((param: any) => {

this.contactId = param.get('contactId');


})

if (this.contactId){
  this.contactService.getSingleContact(this.contactId).subscribe((data: any) => {

    this.contact = data.data
    console.log(this.contact)
    this.loading = false;
  }, (error)=>{
    this.errorMessage = error
    this.loading=false;
  }

  )

}
  }


  public updateContact(){
    if(this.contactId){
    this.contactService.updateContact(this.contact,this.contactId).subscribe(contact => {

    this.router.navigate(['/contacts/admin']).then();

    },
    (error)=>{this.errorMessage=error;
    this.router.navigate(['/contacts/edit'])
    }
    )
    }







  }


}
