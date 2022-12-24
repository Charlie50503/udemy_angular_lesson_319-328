import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { NgModule } from "@angular/core";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports:[
    FormsModule,
    CommonModule,
    ShoppingListRoutingModule
  ]
})
export class ShoppingListModule {

}
