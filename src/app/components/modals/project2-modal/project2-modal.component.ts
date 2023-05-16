import { Component, Input} from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-project2-modal',
  templateUrl: './project2-modal.component.html',
  styleUrls: ['./project2-modal.component.css'],
})
export class Project2ModalComponent {
  constructor(private data:DataService){}
  @Input() projectArr: string[][] = [];
  displayStyle: string = 'none';
  projectImg: string = "";

  openModal(): void {
    this.displayStyle = 'block';
    this.projectImg = this.projectArr[1][0];
  }

  closeModal(): void {
    this.displayStyle = 'none';
  }

  saveModal(): void {
      this.displayStyle = 'none';
      this.projectArr[1][0]= this.projectImg;
      this.data.putProyectData(this.projectArr[1], 2).subscribe();
  }
}
