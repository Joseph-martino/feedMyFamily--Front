import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupetableComponent } from './groupetable.component';

describe('GroupetableComponent', () => {
  let component: GroupetableComponent;
  let fixture: ComponentFixture<GroupetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupetableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
