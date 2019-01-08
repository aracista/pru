import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupPackage1Page } from './group-package1.page';

describe('GroupPackage1Page', () => {
  let component: GroupPackage1Page;
  let fixture: ComponentFixture<GroupPackage1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupPackage1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupPackage1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
