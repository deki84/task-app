import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public username: string = 'Paul Smith';

  constructor() {}

  public getUsername(): string {
    return this.username;
  }
}
