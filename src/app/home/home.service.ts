import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeService { 

    constructor(
        public HttpClient: HttpClient,
    ){}

    public playerStats(name){
        let url = 'https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/battle/gamer/'+encodeURIComponent(name)+'/profile/type/mp';
        console.log('sending request:', url);
        return this.HttpClient.get(url);
    }

}