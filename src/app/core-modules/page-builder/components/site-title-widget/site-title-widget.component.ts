import { Component, Input } from '@angular/core';
import { AbstractWidgetComponent } from '../abstract-widget.component';

import { AbstractWidget } from '@page-builder/models/fields/abstractWidget';

@Component({
  selector: 'app-site-title-widget',
  templateUrl: './site-title-widget.component.html',
  styleUrls: ['./site-title-widget.component.sass']
})
export class SiteTitleWidgetComponent extends AbstractWidgetComponent {
    @Input()
    widget: AbstractWidget;

}
