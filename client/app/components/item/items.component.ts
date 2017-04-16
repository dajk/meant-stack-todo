import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Store } from '@ngrx/store';
import { ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM, INIT_ITEMS } from '../../reducers/item.reducer';
import { Observable } from 'rxjs/Observable';
import { ItemI } from '../../models/item.model';

@Component({
  // moduleId: module.id,
  selector: 'items',
  templateUrl: './app/components/item/items.component.html',
  styleUrls: ['./app/components/item/items.component.css'],
  providers: [ItemsService],
})

export class ItemsComponent implements OnInit {
  errorMsg: string;
  items: Observable<ItemI[]>;
  newItem: ItemI = { title: '', isDone: false };
  statuses: string[] = ['all', 'started', 'completed'];
  status: string;

  constructor(
    private _itemsService: ItemsService,
    private _store: Store<ItemI[]>
  ) {
    this.items = _store.select('items');
  }

  ngOnInit() {
    this.getItems();
    this.status = this.statuses[0];
  }

  getItems() {
    this._itemsService.getItems().subscribe(res => {
      this._store.dispatch({ type: INIT_ITEMS, payload: res });
    });
  }

  addItem(e: Event, newItem: ItemI) {
    e.preventDefault();

    this._itemsService.addItem(newItem).subscribe(res => {
      this._store.dispatch({ type: ADD_ITEM,
        payload: {
          _id: res._id,
          title: res.title,
          isDone: res.isDone
        }
      });
      this.errorMsg = null;
    }, err => this.errorMsg = err.json().item);
    
    this.newItem.title = '';
  }

  removeItem(id: string) {
    this._itemsService.removeItem(id).subscribe(res => {
      this._store.dispatch({ type: REMOVE_ITEM, payload: res.json() });
    });
  }

  updateStatus(isDone: boolean, item: ItemI) {
    const updatedItem = (<any>Object).assign({}, item, {
      isDone: isDone
    });
    this.updateItem(updatedItem);
  }

  updateTitle(e: any, item: ItemI) {
    if (e.keyCode === 13) {
      e.preventDefault();
      const title = e.target.textContent;
      const updatedItem = (<any>Object).assign({}, item, {
        title: title
      });
      this.updateItem(updatedItem);
    }
  }

  setStatus(status: string) {
    this.status = status;
  }

  updateItem(item: ItemI) {
    this._itemsService.updateItem(item).subscribe(res => {
      this._store.dispatch({ type: UPDATE_ITEM, payload: res.json() });
      this.errorMsg = null;
    }, err => this.errorMsg = err.json().item);
  }

}
