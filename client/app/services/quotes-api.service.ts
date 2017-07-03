import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class QuotesApiService {

    constructor(private _http:Http) {}

    _get(url):Promise<any> {
        return this._http.get("/api/" + url)
                        .toPromise()
                        .then(response => response.json())
                        .catch(error => console.error(error))
    }

    getQuotes():Promise<any> {
        return this._get("quotes")
    }

    getCategories():Promise<any> {
        return this._get("category")
    }
}