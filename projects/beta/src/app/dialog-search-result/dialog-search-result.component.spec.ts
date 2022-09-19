import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSearchResultComponent } from './dialog-search-result.component';

describe('DialogSearchResultComponent', () => {
  let component: DialogSearchResultComponent;
  let fixture: ComponentFixture<DialogSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSearchResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
