import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeArtistUserComponent } from './home-artist-user.component';

describe('HomeArtistUserComponent', () => {
  let component: HomeArtistUserComponent;
  let fixture: ComponentFixture<HomeArtistUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeArtistUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeArtistUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
