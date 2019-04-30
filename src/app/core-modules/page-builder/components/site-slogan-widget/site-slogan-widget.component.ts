import { Component, Input } from '@angular/core';
import { AbstractWidgetComponent } from '../abstract-widget.component';

import { AbstractWidget } from '@page-builder/models/fields/abstractWidget';

@Component({
  selector: 'app-site-slogan-widget',
  templateUrl: './site-slogan-widget.component.html',
  styleUrls: ['./site-slogan-widget.component.sass']
})
export class SiteSloganWidgetComponent extends AbstractWidgetComponent {
    @Input()
    widget: AbstractWidget;
}
