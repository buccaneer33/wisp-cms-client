import { Input, OnInit, Renderer2, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of as ObservableOf, Subscription } from 'rxjs';
import { AbstractWidget } from '../models/fields/abstractWidget';

@Injectable({
    providedIn: 'root'
})
export class AbstractWidgetComponent {
    public value;

    @Input()
    widget: AbstractWidget;

    constructor(http: HttpClient, render: Renderer2) {

    }

}
