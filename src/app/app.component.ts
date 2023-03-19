import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './actions/user';
import { UserListRequestAction, UserListSuccessAction } from './actions/user-action';
import * as myValues from './services/reponseFile'
export interface customClass {
   name:String;
   age:Number
   password:String
} 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angularapplication';
  items?:User[];
  user:customClass = 
  {
    name:'GANESH',
    age:20,
    password:'ganesh@123'
   }
  constructor(private http:HttpClient,private store:Store){
   console.log(this.getDetails())
   
   console.log(this.user)
   console.log(myValues.USER_CREATED)
  }
  getDataUsingAngularObserable(): Observable<any>{
    return this.http.get('https://api.publicapis.org/entries')
  }
  getDetails(){
    this.store.dispatch(new UserListRequestAction())
   this.getDataUsingAngularObserable().subscribe(res =>{
   
     this.items = res.entries
     this.store.dispatch(new UserListSuccessAction(res.entries))
   });
   
  //  this.store.select(getusers).subscribe(res =>{

  //  })
  }
}
