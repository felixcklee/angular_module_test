import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModuleFx1 } from '../fx1/fx1.modulefx';
import { ModuleFx2 } from '../fx1/fx1.modulefx2';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, ModuleFx1, ModuleFx2],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
