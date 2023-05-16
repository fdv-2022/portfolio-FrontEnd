import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-experience-modal',
  templateUrl: './experience-modal.component.html',
  styleUrls: ['./experience-modal.component.css'],
})
export class ExperienceModalComponent{
  constructor(private data:DataService){}
  @Input() sectionArray: [string, string, Array<Array<string>>, Array<Array<string>>] = ['','',[],[]];
  displayStyle: string = 'none';

  openModal(): void {
    this.displayStyle = 'block';
  }

  closeModal(): void {
    this.displayStyle = 'none';
  }

  saveModal(): void {
    this.displayStyle = 'none';
    this.data.putExperienceData(this.sectionArray[2]).subscribe();
  }

  addField(): void {
    this.sectionArray[2].push(['','']);
  }

  removeField():void {
    this.sectionArray[2].pop();
  }
}
