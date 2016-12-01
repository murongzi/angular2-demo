import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppService} from './service/app.service';
import {AppComponent} from './app.component';

@NgModule({
    providers:[AppService],
    imports: [BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule{
}
