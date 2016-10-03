import { NgModule           } from '@angular/core';
import { BrowserModule      } from '@angular/platform-browser';
import { HttpModule         } from '@angular/http';
import { AppComponent       } from './app.component';
import { MessagesComponent  } from './messages.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, MessagesComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
