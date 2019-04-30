import { Component, Input } from '@angular/core';
import { AbstractWidgetComponent } from '../abstract-widget.component';

import { AbstractWidget } from '@page-builder/models/fields/abstractWidget';

@Component({
  selector: 'app-orders-list-widget',
  templateUrl: './orders-list-widget.component.html',
  styleUrls: ['./orders-list-widget.component.sass']
})
export class OrdersListWidgetComponent extends AbstractWidgetComponent {
    @Input()
    widget: AbstractWidget;
}
