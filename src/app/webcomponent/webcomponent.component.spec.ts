import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcomponentComponent } from './webcomponent.component';

describe('WebcomponentComponent', () => {
  let component: WebcomponentComponent;
  let fixture: ComponentFixture<WebcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebcomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
