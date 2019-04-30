import { Component, Input } from '@angular/core';
import { AbstractWidgetComponent } from '../abstract-widget.component';

import { AbstractWidget } from '@page-builder/models/fields/abstractWidget';

@Component({
  selector: 'app-site-logo-widget',
  templateUrl: './site-logo-widget.component.html',
  styleUrls: ['./site-logo-widget.component.sass']
})
export class SiteLogoWidgetComponent extends AbstractWidgetComponent {
    @Input()
    widget: AbstractWidget;
}
