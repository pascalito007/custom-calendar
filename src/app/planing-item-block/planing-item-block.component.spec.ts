import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaningItemBlockComponent } from './planing-item-block.component';

describe('PlaningItemBlockComponent', () => {
  let component: PlaningItemBlockComponent;
  let fixture: ComponentFixture<PlaningItemBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaningItemBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaningItemBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
