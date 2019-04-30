import { Component, Input } from '@angular/core';
import { AbstractWidgetComponent } from '../abstract-widget.component';

import { AbstractWidget } from '@page-builder/models/fields/abstractWidget';

@Component({
  selector: 'app-cart-link-widget',
  templateUrl: './cart-link-widget.component.html',
  styleUrls: ['./cart-link-widget.component.sass']
})
export class CartLinkWidgetComponent extends AbstractWidgetComponent {
    @Input()
    widget: AbstractWidget;
}
