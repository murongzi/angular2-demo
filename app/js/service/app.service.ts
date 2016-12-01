import {Injectable} from '@angular/core';

import {HEROES} from './mock.heroes';

@Injectable()
export class AppService {
    getHeroes() {
        return HEROES;
    }
}
