import { Injectable, Output, EventEmitter } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private data:DataService) { }
  LoginEvent(state: boolean) {
  this.LoginState.emit(state);
  this.data.logDataSave(state);
  }
  @Output() LoginState = new EventEmitter<boolean>();
}
``