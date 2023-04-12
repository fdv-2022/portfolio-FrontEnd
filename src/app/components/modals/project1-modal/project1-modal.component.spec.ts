import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project1ModalComponent } from './project1-modal.component';

describe('Project1ModalComponent', () => {
  let component: Project1ModalComponent;
  let fixture: ComponentFixture<Project1ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Project1ModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Project1ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
