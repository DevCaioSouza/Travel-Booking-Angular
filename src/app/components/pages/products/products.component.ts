import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
    selector: 'app-products',
    imports: [HeaderComponent],
    templateUrl: './products.component.html',
    styleUrl: './products.component.scss'
})
export class ProductsComponent {}
