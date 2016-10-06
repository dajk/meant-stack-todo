import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './components/app/app.component';
import { MessagesComponent } from './components/message/messages.component';
import { messagesReducer } from './reducers/message.reducer';
import { StatusPipe } from './pipes/message.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ messages: messagesReducer }, { messages: [] })
  ],
  declarations: [ AppComponent, MessagesComponent, StatusPipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
