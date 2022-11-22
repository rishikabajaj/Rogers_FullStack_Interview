import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class Q1Service{
    constructor(private httpClient : HttpClient){ }

    getDetails(){
        console.log('I am getting details')
        return this.httpClient.get('https://cdn.contentful.com/spaces/8utyj17y1gom/entries?access_token=e50d8ac79fd7a3545d8c0049c6a1216f5d358a192467c77584eca6fad21e0f37&content_type=pageTemplate&include=1&fields.url=%2Fhome%2Fsupport')
    }

    
}