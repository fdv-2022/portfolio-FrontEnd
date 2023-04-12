import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeModalComponent } from './about-me-modal.component';

describe('AboutMeModalComponent', () => {
  let component: AboutMeModalComponent;
  let fixture: ComponentFixture<AboutMeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
