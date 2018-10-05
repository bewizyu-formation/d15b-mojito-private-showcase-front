import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeArtistAdminComponent } from './home-artist-admin.component';

describe('HomeArtistAdminComponent', () => {
  let component: HomeArtistAdminComponent;
  let fixture: ComponentFixture<HomeArtistAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeArtistAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeArtistAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
