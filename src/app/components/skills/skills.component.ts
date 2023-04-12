import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  constructor(private login:LoginService, private data:DataService) {}
  ngOnInit():void {
    this.login.LoginState.subscribe((state: boolean) => {
      this.loginState = state;
    })
    this.sectionData = this.data.skillsData;
    this.sectionTitle = this.data.skillsData[0];
    this.skillsArr = this.data.skillsData[1];
  }
  sectionData: [string, Array<Array<string>>] = ['', []];
  loginState: boolean = this.data.logData[0];
  sectionDisplay: string = 'block';
  sectionTitle: string = '';
  skillsArr: Array<Array<string>> = [];

  sectionHide(): void {
    this.sectionDisplay = 'none';
  }
}
