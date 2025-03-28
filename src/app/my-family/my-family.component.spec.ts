import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfamilyComponent } from './my-family.component';

describe('MyfamilyComponent', () => {
  let component: MyfamilyComponent;
  let fixture: ComponentFixture<MyfamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyfamilyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyfamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});