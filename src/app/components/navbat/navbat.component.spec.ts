import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbatComponent } from './navbat.component';

describe('NavbatComponent', () => {
  let component: NavbatComponent;
  let fixture: ComponentFixture<NavbatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
