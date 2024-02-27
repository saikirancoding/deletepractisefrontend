import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncdemoComponent } from './asyncdemo.component';

describe('AsyncdemoComponent', () => {
  let component: AsyncdemoComponent;
  let fixture: ComponentFixture<AsyncdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsyncdemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsyncdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
