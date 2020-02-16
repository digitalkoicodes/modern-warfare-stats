import { Component, OnInit } from "@angular/core";
// import * as localStorage from '@proplugins/nativescript-localstorage';
import * as appSettings from "tns-core-modules/application-settings";
import { HomeService } from "./home.service";
import {MwStats} from './stats';

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    public model = {accountName: ''};
    public notFound = false;
    public stats = {};
    constructor(
        public HomeService: HomeService
    ) {

    }

    ngOnInit(): void {
        // Init your component properties here.
        this.getStats();
    }

    getStats(){
        if(!this.getAccount())
            return false;
        this.HomeService.playerStats(this.getAccount()).subscribe((r) => {
            console.log(r);
            this.stats = r;
        });
    }

    getAccount(){
        return appSettings.getString('account', '');
    }

    save(){
        console.log(this.model.accountName);
        appSettings.setString('account', this.model.accountName)
        this.getStats();
    }

    reset(){
        this.notFound = false;
        appSettings.clear();
    }
}
