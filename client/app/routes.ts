import { Routes } from "@angular/router";
import { CategoryListComponent } from "./category-list/category-list.component";
import { CategoryDetailComponent } from "./category-detail/category-detail.component";
import { NotFoundComponent } from "./errors/not-found.component";
import { QuotesListComponent } from "./quotes-list/quotes-list.component";


export const appRoutes: Routes = [
    { path: "", component: QuotesListComponent },

    { path: "categories", component: CategoryListComponent },
    { path: "categories/:id", component: CategoryDetailComponent },

    { path: "404", pathMatch: "full", component: NotFoundComponent },
    { path: "**", pathMatch: "full", redirectTo: "404" }
]