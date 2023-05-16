import { Component, OnInit} from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css'],
})
export class ProyectsComponent implements OnInit {
  constructor(private login:LoginService, private data:DataService) {
  }
  ngOnInit():void {
    this.login.LoginState.subscribe((state: boolean) => {
      this.loginState = state;
    })
    this.data.projectReload.subscribe((dataReload: string[][]) =>{
      this.sectionArray = dataReload;
      this.project1Exists = true;
      this.project2Exists = true;
    })
    this.data.getProyectData().subscribe((data) => {
      this.sectionArray = data;
      this.project1Exists = false;
      this.project2Exists = false;
      this.sectionArray.forEach(element=>{
          if(element[4] === "1"){
          this.project1Exists = true;
          }
          if(element[4] === "2"){
          this.project2Exists = true;
          }
      })
    })
  }

  sectionArray: string[][] = []
  loginState: boolean = this.data.logData[0];
  sectionDisplay: string = 'block';
  project1Exists: boolean = true;
  project2Exists: boolean = true;

  project1Hide(): void {
    if(this.project2Exists === false){
      this.sectionDisplay = 'none';
    }

    if(this.sectionArray[0][4] === "2"){
      this.data.deleteProyectData(2).subscribe();
      this.project1Exists = false;
      return;
    }
    this.data.deleteProyectData(1).subscribe();
    this.project1Exists = false;
  }
  project2Hide(): void {
    if(this.project1Exists === false){
      this.sectionDisplay = 'none';
    }
    this.data.deleteProyectData(2).subscribe();
    this.project2Exists = false;
  }
}
