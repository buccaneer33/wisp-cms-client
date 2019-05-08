import { Injectable, Pipe } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IGoodsCategory } from '@interfaces/goods/igoods-categories';
import { IGoodsList } from '@interfaces/goods/igoods-list';
import { IGoodsItem } from '@interfaces/goods/igoods-item';
import { Content } from '@angular/compiler/src/render3/r3_ast';


@Injectable({
  providedIn: 'root'
})
export class GoodsService {
    /**
     * Temporary variables,
     */
    private urlServer = 'http://localhost:8080';
    private goodsUrl = this.urlServer + '/goods/';
    private goodsCategoryUrl = this.goodsUrl + '/category/';
    private goodsOfIdUrl = this.goodsUrl + '/goodsItem/';
    public handleError: any;


  constructor(private http: HttpClient) { }

    /**
     * Get categories list
     */
    public getCategoriesList(): Observable<IGoodsCategory> {
        return this.http.get<IGoodsCategory>(this.goodsUrl);
    }

    /**
     * Get goods of category
     *  @param { string } catId - category
     */
    public getGoodsList( catId: string ): Observable<IGoodsList> {
        catId = catId.trim();
        const options = catId ?
        { params: new HttpParams().set('category', catId) } : {};

        return this.http.get<IGoodsList>(this.goodsCategoryUrl, options )
        .pipe(
            catchError(this.handleError('searchCaterory', []))
            );
    }
    /**
     * Get goods item
     * @param {string} goodId - goodItem
     */
    public getGoodsItem( goodId: string ): Observable<IGoodsItem> {
        goodId = goodId.trim();
        const options = goodId ?
        { params: new HttpParams().set('item', goodId) } : {};

        return this.http.get<IGoodsItem>(this.goodsOfIdUrl, options )
        .pipe(
            catchError(this.handleError('searchGoods', []))
            );
    }


}
