import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AuthInterceptorService } from './app/auth/auth-interceptor.service';
import { RecipeService } from './app/recipes/recipe.service';
import { ShoppingListService } from './app/shopping-list/shopping-list.service';

@NgModule({
  // Nice To Have: Provide shopping list service here to use the service application-wide
  providers: [
    ShoppingListService,
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
})
export class CoreModule {}
