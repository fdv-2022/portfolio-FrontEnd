import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project2ModalComponent } from './project2-modal.component';

describe('Project2ModalComponent', () => {
  let component: Project2ModalComponent;
  let fixture: ComponentFixture<Project2ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Project2ModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Project2ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
