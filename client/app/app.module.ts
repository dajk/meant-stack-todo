import { NgModule               } from '@angular/core';
import { BrowserModule          } from '@angular/platform-browser';
import { HttpModule             } from '@angular/http';
import { FormsModule            } from '@angular/forms';
import { EffectsModule          } from '@ngrx/effects';
import { StoreModule            } from '@ngrx/store';
import { AppComponent           } from './components/app/app.component';
import { MessagesComponent      } from './components/message/messages.component';
import { messageReducer         } from './reducers/message.reducer';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ messages: messageReducer }, { messages: []})
  ],
  declarations: [ AppComponent, MessagesComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
