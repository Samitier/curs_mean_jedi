import { Routes } from "@angular/router";
import { CategoryListComponent } from "./category-list/category-list.component";
import { CategoryDetailComponent } from "./category-detail/category-detail.component";
import { NotFoundComponent } from "./errors/not-found.component";
import { QuotesListComponent } from "./quotes-list/quotes-list.component";
import { LoginComponent } from "./login/login.component";
import { RandomQuoteComponent } from './random-quote/random-quote.component';


export const appRoutes: Routes = [
    { path: "", component: RandomQuoteComponent },
    { path: "quotes", component: QuotesListComponent },

    { path: "categories", component: CategoryListComponent },
    { path: "categories/:id", component: CategoryDetailComponent },

    { path: "login", component: LoginComponent },

    { path: "404", pathMatch: "full", component: NotFoundComponent },
    { path: "**", pathMatch: "full", redirectTo: "404" }
]