import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCreateComponentComponent } from './client-create-component.component';

describe('ClientCreateComponentComponent', () => {
  let component: ClientCreateComponentComponent;
  let fixture: ComponentFixture<ClientCreateComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientCreateComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientCreateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
