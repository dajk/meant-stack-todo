import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './components/app/app.component';
import { ItemsComponent } from './components/item/items.component';
import { itemsReducer } from './reducers/item.reducer';
import { StatusPipe } from './pipes/item.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ items: itemsReducer }, { item: [] })
  ],
  declarations: [ AppComponent, ItemsComponent, StatusPipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
