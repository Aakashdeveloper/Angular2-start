import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    product: IProduct;

    constructor(private _route: ActivatedRoute,
                private _router: Router) {
    }

    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        let name = +this._route.snapshot.params['name'];
        this.pageTitle += `: ${name}`;
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }
}
