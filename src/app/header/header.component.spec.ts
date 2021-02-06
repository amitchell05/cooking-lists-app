import { HttpClientModule } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RecipeService } from '../recipes/recipe.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [RecipeService, ShoppingListService],
    });
    TestBed.compileComponents();
  });

  it(
    'should create the header component',
    waitForAsync(() => {
      const fixture = TestBed.createComponent(HeaderComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );
});
