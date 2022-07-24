import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupepageComponent } from './groupepage.component';

describe('GroupepageComponent', () => {
  let component: GroupepageComponent;
  let fixture: ComponentFixture<GroupepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
