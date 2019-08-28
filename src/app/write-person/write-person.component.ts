import { Component, OnInit } from '@angular/core';
// 1a. Import Store
import { Store } from '@ngrx/store';
// 1b. Import App State
import { AppState } from './../app.state';
// 1c. Import Person object
import { Person } from './../models/app.person.model';
// 1d. Import Actions
import * as PersonActions from './../actions/app.person.actions';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-write-person',
  templateUrl: './write-person.component.html'
})
export class WritePersonComponent implements OnInit {
  person: Person;
  // 2. Inject Store for AppState in Constructor
  constructor(private store: Store<AppState>) {
    this.person = new Person(0, '');
  }

  ngOnInit() {
  }

  // 3. dispatch the AddPerson Action
  addPerson() {
    this.store.dispatch(
       new PersonActions.AddPerson(this.person)
    );
  }
  clearPerson() {
    this.person = new Person(0, '');
  }
}
