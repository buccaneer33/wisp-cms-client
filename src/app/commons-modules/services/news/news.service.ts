import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { INewsList, INews } from '../../interfaces/index';

@Injectable({
    providedIn: 'root'
})
export class NewsService {

    /**
     * Temporary variables,
     */
    private urlServer = 'http://localhost:4001';
    private _newsUrl = this.urlServer+'/news/';
    private _newsOfIdUrl = this.urlServer+'/newsItem/01';

    constructor(private _http: HttpClient) { }

    /**
     * Get list news
     */
    public getNewsList(): Observable<INewsList> {
        return this._http.get<INewsList>(this._newsUrl);
    }

    /**
     * Get news by id
     * @param {number} id - news
     */
    public getNewsItem(id: number): Observable<INews> {
        return this._http.get<INews>(this._newsOfIdUrl);
    }
}
