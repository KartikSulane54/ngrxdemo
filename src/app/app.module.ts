// 1a. import reducer
import { reducer } from './reducers/app.person.reducer';
// 1b. import StoreModule
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ReadPersonComponent } from './read-person/read-person.component';
import { WritePersonComponent } from './write-person/write-person.component';
@NgModule({
  declarations: [
    AppComponent,
    ReadPersonComponent,
    WritePersonComponent
  ],
  imports: [
    BrowserModule, FormsModule, // 2. defining the reducer for Store
    StoreModule.forRoot({
        person : reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
