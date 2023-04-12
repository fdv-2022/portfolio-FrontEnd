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

  openModal(): void {
    this.displayStyle = 'block';
    console.log(this.projectArr[1])
  }

  closeModal(): void {
    this.displayStyle = 'none';
  }

  saveModal(): void {
    this.displayStyle = 'none';
    this.data.project2Save();
  }

  sectionRestore():void {
    this.displayStyle = 'none';
    this.data.project2Clear();
  }
}
