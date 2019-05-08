import { Component, Input } from '@angular/core';
import { AbstractWidgetComponent } from '../abstract-widget.component';

import { AbstractWidget } from '@page-builder/models/fields/abstractWidget';

@Component({
  selector: 'app-news-list-widget',
  templateUrl: './news-list-widget.component.html',
  styleUrls: ['./news-list-widget.component.sass']
})
export class NewsListWidgetComponent extends AbstractWidgetComponent {
    @Input()
    widget: AbstractWidget;
}
