import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionArtisteComponent } from './description-artiste.component';

describe('DescriptionArtisteComponent', () => {
  let component: DescriptionArtisteComponent;
  let fixture: ComponentFixture<DescriptionArtisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionArtisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionArtisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
