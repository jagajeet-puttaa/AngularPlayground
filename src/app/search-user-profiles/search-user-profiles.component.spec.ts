import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUserProfilesComponent } from './search-user-profiles.component';

describe('SearchUserProfilesComponent', () => {
  let component: SearchUserProfilesComponent;
  let fixture: ComponentFixture<SearchUserProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchUserProfilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUserProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
