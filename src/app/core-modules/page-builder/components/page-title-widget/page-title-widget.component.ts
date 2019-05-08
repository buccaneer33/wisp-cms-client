import { Component, Input } from '@angular/core';
import { AbstractWidgetComponent } from '../abstract-widget.component';

import { AbstractWidget } from '@page-builder/models/fields/abstractWidget';

@Component({
  selector: 'app-page-title-widget',
  templateUrl: './page-title-widget.component.html',
  styleUrls: ['./page-title-widget.component.sass']
})
export class PageTitleWidgetComponent extends AbstractWidgetComponent {
    @Input()
    widget: AbstractWidget;
}
