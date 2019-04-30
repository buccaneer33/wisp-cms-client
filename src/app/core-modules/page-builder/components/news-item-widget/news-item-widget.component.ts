import { Component, Input } from '@angular/core';
import { AbstractWidgetComponent } from '../abstract-widget.component';

import { AbstractWidget } from '@page-builder/models/fields/abstractWidget';

@Component({
  selector: 'app-news-item-widget',
  templateUrl: './news-item-widget.component.html',
  styleUrls: ['./news-item-widget.component.sass']
})
export class NewsItemWidgetComponent extends AbstractWidgetComponent {
    @Input()
    widget: AbstractWidget;
}
