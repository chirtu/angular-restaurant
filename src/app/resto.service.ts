import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RestoService {
  constructor() {}
  getList() {
    console.warn('some data');
  }
}
