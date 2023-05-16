import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-education-modal',
  templateUrl: './education-modal.component.html',
  styleUrls: ['./education-modal.component.css'],
})
export class EducationModalComponent {
  constructor(private data:DataService){};
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
    this.data.putEducationData(this.sectionArray[3]).subscribe((resp) => console.log(resp));
  }

  addField(): void {
    this.sectionArray[3].push(['','']);
  }

  removeField():void {
    this.sectionArray[3].pop();
  }
}
