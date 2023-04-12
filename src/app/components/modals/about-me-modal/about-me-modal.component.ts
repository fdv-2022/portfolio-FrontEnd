import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-about-me-modal',
  templateUrl: './about-me-modal.component.html',
  styleUrls: ['./about-me-modal.component.css'],
})
export class AboutMeModalComponent{
  constructor (private data:DataService) {}
  @Input() aboutArr: Array<string>= [];
  displayStyle: string = 'none';

  openModal(): void {
    this.displayStyle = 'block';
  }
  saveChanges(): void {
    this.displayStyle = 'none';
    this.data.aboutSave();
  }
  sectionRestore():void {
    this.displayStyle = 'none';
    this.data.aboutClear();
  }
}
