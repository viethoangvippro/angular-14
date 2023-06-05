import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit{

  items: Item[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getItems().subscribe(items => {
      this.items = items;
    });
  }

  getItems() {
    return this.http.get<Item[]>('http://localhost:3000/table');
  }
  getItem(id: number) {
    return this.http.get<Item>('http://localhost:3000/table/' + id);
  }
  addItem(item: Item) {
    return this.http.post<Item>('http://localhost:3000/table', item);
  }
  updateItem(item: Item) {
    return this.http.put<Item>('http://localhost:3000/table/' + item.id, item);
  }
  deleteItem(id: number) {
    return this.http.delete<Item>('http://localhost:3000/table/' + id);
  }



}
export class Item {
  id!: number;
  name! : string
  description! : string
  // thuộc tính và phương thức của lớp Item
}


