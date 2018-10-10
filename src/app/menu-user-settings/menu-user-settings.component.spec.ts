import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuUserSettingsComponent } from './menu-user-settings.component';

describe('MenuUserSettingsComponent', () => {
  let component: MenuUserSettingsComponent;
  let fixture: ComponentFixture<MenuUserSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuUserSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuUserSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
