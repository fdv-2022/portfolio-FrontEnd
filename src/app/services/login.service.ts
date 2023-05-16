import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private data:DataService, private http: HttpClient) { }
  LoginEvent(state: boolean) {
  this.LoginState.emit(state);
  this.data.logDataSave(state);
  }
  @Output() LoginState = new EventEmitter<boolean>();
}
``