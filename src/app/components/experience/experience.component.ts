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
    this.data.experienceReload.subscribe((dataReload:[string, string, Array<Array<string>>, Array<Array<string>>]) =>{
      this.sectionArray = dataReload;
      this.sectionDisplay = 'block';
      this.educationDisplay = 'block';
      this.experienceDisplay = 'block';
    })
    this.data.getEducationData().subscribe((data) => {
      this.sectionArray[3] = data;
      if(this.sectionArray[3].length === 0){
        this.educationDisplay = 'none';
      }

      if(this.experienceDisplay === 'none' && this.educationDisplay === 'none'){
        this.sectionDisplay = 'none';
      }

    })
    this.data.getExperienceData().subscribe((data) => {
      this.sectionArray[2] = data;
      if(this.sectionArray[2].length === 0){
        this.experienceDisplay = 'none';
      }

      if(this.experienceDisplay === 'none' && this.educationDisplay === 'none'){
        this.sectionDisplay = 'none';
      }
    })
    this.sectionArray = this.data.experienceData;
  }
  sectionArray: [string, string, Array<Array<string>>, Array<Array<string>>] = ['','',[],[]];
  loginState: boolean = this.data.logData[0];
  educationDisplay: string = 'block';
  experienceDisplay: string = 'block';
  sectionDisplay: string = 'block';

  educationHide(): void {
    this.data.deleteEducationData().subscribe();
    this.educationDisplay = 'none';
    if (this.educationDisplay === 'none' && this.experienceDisplay === 'none') {
      this.sectionDisplay = 'none';
    }
  }
  experienceHide(): void {
    this.data.deleteExperienceData().subscribe();
    this.experienceDisplay = 'none';
    if (this.educationDisplay === 'none' && this.experienceDisplay === 'none') {
      this.sectionDisplay = 'none';
    }
  }
}