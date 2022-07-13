import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name: any; 
  email: any; 
  message: any; 

  constructor(private http: HttpClient , ) { }

  ngOnInit(): void {
  }

  clearForm() {
    this.name = '';
    this.email = '';
    this.message = '';
  }

  handleSubmit(ngForm: { form: { value: any; }; }){
    console.log(ngForm);
    this.http.post('https://majd-alkhouri.developerakademie.com/Sendmail.php', JSON.stringify(ngForm.form.value))
    .subscribe(
     {
       next :  (response)=> {
        
       },
       error : (error)=> console.error(error)
     }
    )
    this.clearForm();
  }
 
}



