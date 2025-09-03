import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TescoComponent } from './tesco.component';

describe('TescoComponent', () => {
  let component: TescoComponent;
  let fixture: ComponentFixture<TescoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TescoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TescoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
