import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountLinkWidgetComponent } from './account-link-widget.component';

describe('AccountLinkWidgetComponent', () => {
  let component: AccountLinkWidgetComponent;
  let fixture: ComponentFixture<AccountLinkWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountLinkWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountLinkWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
