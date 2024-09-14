import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsComponentComponent } from './contacts-component.component';

describe('ContactsComponentComponent', () => {
  let component: ContactsComponentComponent;
  let fixture: ComponentFixture<ContactsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactsComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
