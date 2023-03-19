import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { combineLatest, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getuserLoaded, getuserLoading, getuserUsers, rootReducerState } from 'src/app/reducers';
import { UserListRequestAction, UserListSuccessAction } from 'src/app/actions/user-action';
import { User } from 'src/app/actions/user';

// State management 
//this.store.dispatch(new UserListSuccessAction({ data }))

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  items: User[] = [];
  constructor(private http: HttpClient, private store: Store<rootReducerState>) {
   
  }

}
