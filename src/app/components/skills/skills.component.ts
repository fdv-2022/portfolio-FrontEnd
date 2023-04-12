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
    this.data.projectReload.subscribe((dataReload: [string, string[][]]) =>{
      this.sectionArray = dataReload;
    })
    this.sectionArray = this.data.skillsData;
  }
  sectionArray: [string, string[][]] = ['', []];
  loginState: boolean = this.data.logData[0];
  sectionDisplay: string = 'block';

  sectionHide(): void {
    this.sectionDisplay = 'none';
  }
}
