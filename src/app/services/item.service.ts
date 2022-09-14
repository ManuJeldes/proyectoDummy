import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

getItems(){
  return[
    {
      id: 0,
      title: 'manzana',
      price: 1000,
      quantity: 4,
      completed: false
    },
    {
      id: 1,
      title: 'pan',
      price: 1790,
      quantity: 1,
      completed: true
    },
    {
      id: 2,
      title: 'torta',
      price: 9990,
      quantity:2,
      completed: true
    },
  ]
}

}
