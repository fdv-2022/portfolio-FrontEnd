import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  constructor(private login:LoginService, private data:DataService) {}

  ngOnInit(): void {
    this.login.LoginState.subscribe((state: boolean) => {
      this.loginState = state;
    })
    this.bannerUrl = this.data.bannerData;
  }
  loginState: boolean = this.data.logData[0];
  bannerUrl: string = '';
}
