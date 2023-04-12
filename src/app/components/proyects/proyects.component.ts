import { Component, OnInit} from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css'],
})
export class ProyectsComponent implements OnInit {
  constructor(private login:LoginService, private data:DataService) {}
  ngOnInit():void {
    this.login.LoginState.subscribe((state: boolean) => {
      this.loginState = state;
    })
    this.data.projectReload.subscribe((dataReload: string[][]) =>{
      this.sectionArray = dataReload;
    })
    this.sectionArray = this.data.projectData;
  }

  sectionArray: string[][] = []
  loginState: boolean = this.data.logData[0];
  sectionDisplay: string = 'block';
  project1Display: string = 'block';
  project2Display: string = 'block';

  project1Hide(): void {
    this.project1Display = 'none';
    if (this.project1Display === 'none' && this.project2Display === 'none') {
      this.sectionDisplay = 'none';
    }
  }
  project2Hide(): void {
    this.project2Display = 'none';
    if (this.project1Display === 'none' && this.project2Display === 'none') {
      this.sectionDisplay = 'none';
    }
  }
}
