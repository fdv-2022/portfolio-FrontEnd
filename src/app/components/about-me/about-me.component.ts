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
    this.aboutMeArr = this.data.aboutMeData
    this.name = this.data.aboutMeData[0]
    this.location = this.data.aboutMeData[1]
    this.aboutTitle = this.data.aboutMeData[2]
    this.aboutInfo = this.data.aboutMeData[3]
    this.profileUrl = this.data.aboutMeData[4]
  }

  loginState: boolean = this.data.logData[0];

  aboutMeArr: Array<string> =[]
  name: string = '';
  location: string = '';
  aboutTitle: string = '';
  aboutInfo: string = '';
  profileUrl: string = '';


  /*
  name: string = 'Facundo Del VIgo';
  location: string = 'Ciudad de Formosa, Argentina.';
  aboutTitle: string = 'Acerca De';
  aboutInfo: string = 'Estudiante de desarrollo web';
  profileUrl: string = '../../../assets/images/profile.jpg'; */

  displayStyle: string = 'block';
  elementHide(): void {
    this.displayStyle = 'none';
  }
}
