import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { HomeService } from "./home.service";


@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        HomeRoutingModule,
        HttpClientModule
    ],
    declarations: [
        HomeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        HomeService
    ]
})
export class HomeModule { }
