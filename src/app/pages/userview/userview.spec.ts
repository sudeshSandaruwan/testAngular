import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userview } from './userview';

describe('Userview', () => {
  let component: Userview;
  let fixture: ComponentFixture<Userview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
