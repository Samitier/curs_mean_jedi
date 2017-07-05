import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Quote } from "../models/quote.model";

@Injectable()
export class QuotesApiService {

    constructor(private _http:Http) {}

    _get(url):Promise<any> {
        return this._http.get("/api/" + url)
                        .toPromise()
                        .then(response => response.json())
    }

    _post(url, data):Promise<any> {
        return this._http.post("/api/" + url, data)
                        .toPromise()
                        .then(response => response.json())
    }

    getQuotes():Promise<any> {
        return this._get("quotes")
    }

    getQuote(id:string):Promise<any> {
        return this._get("quotes/" + id)
    }

    postQuote(quote:Quote):Promise<any> {
        return this._post("quotes", quote)
    }

    getCategories():Promise<any> {
        return this._get("categories")
    }

    getCategory(id:string):Promise<any> {
        return this._get("categories/" + id)
    }
}