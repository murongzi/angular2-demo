import {Component} from '@angular/core';

import {AppService} from './service/app.service';

@Component({selector:'my-app', templateUrl:'views/template.html'})
export class AppComponent{
    items;
    constructor(appService:AppService) {
        this.items = appService.getHeroes();
    }

    itemClick(i) {
        console.log(this);
    }

    trackByFn() {
        console.log(arguments);
    }

    addItem(i) {
        this.items.push({
            id:Math.random(),
            name:Math.random().toString(36).substr(2)
        });
    }

    removeItem(i) {
        this.items.splice(i, 1);
    }
}
