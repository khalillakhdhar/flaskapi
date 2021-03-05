import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadprodComponent } from './readprod.component';

describe('ReadprodComponent', () => {
  let component: ReadprodComponent;
  let fixture: ComponentFixture<ReadprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadprodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
