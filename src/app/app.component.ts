import { Component } from '@angular/core';
import { ParentUser } from './parent-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Teimuraz Makharoblidze';
  users= [
{

firstname: "Jora",
lastname: "Smith",
age: 31

},
{

  firstname: "Pedro",
  lastname: "Salsa",
  age: 41
  
  },
  {

    firstname: "john",
    lastname: "harrys",
    age: 17
    
    },
    {

      firstname: "Peter",
      lastname: "Parker",
      age: 9
      
      },

      {

        firstname: "Pablo",
        lastname: "Lopez",
        age: 57
        
        },

  ]



  user: ParentUser[]=[

   {Id: 12314,

    Firstname: "jora",
    
    Lastname: "Smith",
    
     
    
    DateOfBirth: "03/07/1993",
    
     
    
    PhoneNumber: 1234567809,
    
     
    
    Email: "JoraS@gmial.com",

   }
   

  ]



}

