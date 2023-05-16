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
    this.data.getAboutMeData().subscribe((data) => {
      for(let i = 0; i < 5 ; i++){
      this.sectionArray.push(data[i]);
      }
      if(!this.sectionArray[2] && !this.sectionArray[3]){
        this.displayStyle = 'none';
      }
    })
  }

  loginState: boolean = this.data.logData[0];
  sectionArray: string[] = [];

  displayStyle: string = 'block';
  elementHide(): void {
    this.sectionArray[2] = ""
    this.sectionArray[3] = ""
    this.data.deleteAboutSection().subscribe();
    this.displayStyle = 'none';
  }
}
