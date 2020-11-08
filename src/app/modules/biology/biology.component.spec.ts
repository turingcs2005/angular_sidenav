import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiologyComponent } from './biology.component';

describe('BiologyComponent', () => {
  let component: BiologyComponent;
  let fixture: ComponentFixture<BiologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
