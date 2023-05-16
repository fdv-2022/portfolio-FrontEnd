import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-project1-modal',
  templateUrl: './project1-modal.component.html',
  styleUrls: ['./project1-modal.component.css'],
})
export class Project1ModalComponent {
  constructor(private data:DataService){}
  @Input() projectArr: string[][] = [];
  projectImg: string = "";
  displayStyle: string = 'none';

  openModal(): void {
    this.displayStyle = 'block';
    this.projectImg = this.projectArr[0][0];
  }

  closeModal(): void {
    this.displayStyle = 'none';
  }

  saveModal(): void {
    this.displayStyle = 'none';
    this.projectArr[0][0]= this.projectImg;
    this.data.putProyectData(this.projectArr[0], 1).subscribe();
  }
}
