import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  constructor(private login:LoginService, private data:DataService) {}
  ngOnInit():void {
    this.login.LoginState.subscribe((state: boolean) => {
      this.loginState = state;
    })
    this.data.aboutReload.subscribe((dataReload:string[]) =>{
      this.sectionArray = dataReload;
      this.displayStyle = 'block';
    })
    this.sectionArray = this.data.aboutMeData
  }
  loginState: boolean = this.data.logData[0];
  sectionArray: string[] =[]

  displayStyle: string = 'block';
  elementHide(): void {
    this.displayStyle = 'none';
  }
}
