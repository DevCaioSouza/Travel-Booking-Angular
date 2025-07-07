import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

import { register } from 'swiper/element/bundle';

register();

@Component({
    selector: 'app-home',
    imports: [HeaderComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class HomeComponent {

}
