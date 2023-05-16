import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-banner-modal',
  templateUrl: './banner-modal.component.html',
  styleUrls: ['./banner-modal.component.css'],
})
export class BannerModalComponent {
  constructor(private data:DataService){}
  @Input() bannerUrl:string = "" ;

  displayStyle: string = 'none';

  openModal(): void {
    this.displayStyle = 'block';
  }

  closeModal(): void {
    this.displayStyle = 'none';
  }

  saveModal(): void {
    this.displayStyle = 'none';
    this.data.bannerReload.emit(this.bannerUrl);
    this.data.patchBannerData(this.bannerUrl).subscribe();
  }
}
