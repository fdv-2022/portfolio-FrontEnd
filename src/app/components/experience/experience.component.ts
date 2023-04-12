import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  constructor(private login:LoginService, private data:DataService) {}
  ngOnInit():void{
    this.login.LoginState.subscribe((state: boolean) => {
      this.loginState = state;
    })
    this.sectionArray = this.data.experienceData;
  }
  sectionArray: [string, string, Array<Array<string>>, Array<Array<string>>] = ['','',[],[]];
  loginState: boolean = this.data.logData[0];
  educationDisplay: string = 'block';
  experienceDisplay: string = 'block';
  sectionDisplay: string = 'block';

  educationHide(): void {
    this.educationDisplay = 'none';
    if (this.educationDisplay === 'none' && this.experienceDisplay === 'none') {
      this.sectionDisplay = 'none';
    }
  }
  experienceHide(): void {
    this.experienceDisplay = 'none';
    if (this.educationDisplay === 'none' && this.experienceDisplay === 'none') {
      this.sectionDisplay = 'none';
    }
  }
}