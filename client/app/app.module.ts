import { NgModule } from "@angular/core"
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { RandomQuoteComponent } from "./components/random-quote.component";
import { QuotesApiService } from "./services/quotes-api.service";
import { CategoryListComponent } from "./components/category-list.component";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes";
import { CategoryDetailComponent } from "./components/category-detail.component";

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        CategoryDetailComponent,
        RandomQuoteComponent,
        CategoryListComponent
    ],
    providers: [
        QuotesApiService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
