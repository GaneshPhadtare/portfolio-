import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  items: Array<any> = [];
 constructor(private http:HttpClient){
  console.log(this.getDetails())
 }
  getDataUsingAngularObserable(): Observable<any>{
    return this.http.get('https://api.publicapis.org/entries')
  }
  getDetails(){
   this.getDataUsingAngularObserable().subscribe(res =>{
    //  console.log(res.entries)
     this.items = res.entries
   })
  }
}
