import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditHistoryComponent } from './dialog-edit-history.component';

describe('DialogEditHistoryComponent', () => {
  let component: DialogEditHistoryComponent;
  let fixture: ComponentFixture<DialogEditHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogEditHistoryComponent]
    });
    fixture = TestBed.createComponent(DialogEditHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
