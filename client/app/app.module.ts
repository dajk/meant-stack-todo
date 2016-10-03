import { NgModule            } from '@angular/core';
import { BrowserModule       } from '@angular/platform-browser';
import { HttpModule          } from '@angular/http';
import { FormsModule         } from '@angular/forms';
import { AppComponent        } from './components/app/app.component';
import { MessagesComponent   } from './components/message/messages.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, MessagesComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
