import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class QuotesApiService {

    constructor(private _http:Http) {}

    _get(url):Promise<any> {
        return this._http.get("/api/" + url)
                        .toPromise()
                        .then(response => response.json())
    }

    getQuotes():Promise<any> {
        return this._get("quotes")
    }

    getCategories():Promise<any> {
        return this._get("category")
    }

    getCategory(id:string):Promise<any> {
        return this._get("category/" + id)
    }

    getQuote(id:string):Promise<any> {
        return this._get("quote/" + id)
    }
}