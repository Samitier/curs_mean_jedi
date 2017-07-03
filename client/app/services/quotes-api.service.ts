import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class QuotesApiService {

    constructor(private _http:Http) {}
    
    getQuotes():Promise<any> {
        return this._http.get("/api/quotes")
                        .toPromise()
                        .then(response => response.json())
                        .catch(error => console.error(error))
    }

    getCategories():Promise<any> {
        return this._http.get("/api/category")
                        .toPromise()
                        .then(response => response.json())
                        .catch(error => console.error(error))
    }
}