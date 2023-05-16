import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-skills-modal',
  templateUrl: './skills-modal.component.html',
  styleUrls: ['./skills-modal.component.css'],
})
export class SkillsModalComponent {
  constructor(private data:DataService){}
  @Input() sectionData: [string, Array<Array<string>>] = ['', []];
  displayStyle: string = 'none';

  addField(): void {
    this.sectionData[1].push(['','']);
  }

  removeField(): void {
    this.sectionData[1].pop();
  }
  openModal(): void {
    this.displayStyle = 'block';
  }

  closeModal(): void {
    this.displayStyle = 'none';
  }

  saveModal(): void {
    this.displayStyle = 'none';
    this.data.putSkillsData(this.sectionData[1]).subscribe();
  }
}
