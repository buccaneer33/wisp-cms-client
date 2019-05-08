import { Component, Input } from '@angular/core';
import { AbstractWidgetComponent } from '../abstract-widget.component';

import { AbstractWidget } from '@page-builder/models/fields/abstractWidget';

@Component({
  selector: 'app-header-widget',
  templateUrl: './header-widget.component.html',
  styleUrls: ['./header-widget.component.sass']
})
export class HeaderWidgetComponent extends AbstractWidgetComponent {
    @Input()
    widget: AbstractWidget;
}
