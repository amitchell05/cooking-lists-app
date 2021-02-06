import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ShoppingListService } from '../shopping-list.service';

import { ShoppingListEditComponent } from './shopping-list-edit.component';

describe('ShoppingListEditComponent', () => {
  let component: ShoppingListEditComponent;
  let fixture: ComponentFixture<ShoppingListEditComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ShoppingListEditComponent],
        providers: [ShoppingListService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the shopping-list-edit component', () => {
    expect(component).toBeTruthy();
  });
});
