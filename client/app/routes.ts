import { Routes } from "@angular/router";
import { CategoryListComponent } from "./components/category-list.component";
import { CategoryDetailComponent } from "./components/category-detail.component";

export const appRoutes: Routes = [
    { path: "", component: CategoryListComponent },
    { path: "category/:id", component: CategoryDetailComponent },
    // { path: "**", pathMatch: "full", component: NotFoundComponent }
]