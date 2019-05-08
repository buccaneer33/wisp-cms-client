import { Component, Input } from '@angular/core';
import { AbstractWidgetComponent } from '../abstract-widget.component';

import { AbstractWidget } from '@page-builder/models/fields/abstractWidget';

@Component({
  selector: 'app-main-column-widget',
  templateUrl: './main-column-widget.component.html',
  styleUrls: ['./main-column-widget.component.sass']
})
export class MainColumnWidgetComponent extends AbstractWidgetComponent {
    @Input()
    widget: AbstractWidget;
}
