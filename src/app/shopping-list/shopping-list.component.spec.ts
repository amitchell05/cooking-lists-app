import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListService } from './shopping-list.service';

describe('ShoppingListComponent', () => {
  let component: ShoppingListComponent;
  let fixture: ComponentFixture<ShoppingListComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ShoppingListComponent],
        providers: [ShoppingListService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the shopping-list component', () => {
    expect(component).toBeTruthy();
  });
});
