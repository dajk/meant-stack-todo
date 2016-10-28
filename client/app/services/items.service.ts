import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ItemI } from '../models/item.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemsService {
	
  constructor(private _http: Http) { }

  getItems(): Observable<ItemI[]> {
    return this._http.get('/api/items')
      .map(res => res.json());
  }

  addItem(newItem: ItemI): Observable<ItemI> {
    return this._http.post('/api/items', newItem)
      .map(res => res.json());
  }

  removeItem(id: string): Observable<any> {
    return this._http.delete(`/api/items/${id}`);
  }

  updateItem(item: ItemI): Observable<any> {
    return this._http.put(`/api/items/${item._id}`, item);
  }
}
