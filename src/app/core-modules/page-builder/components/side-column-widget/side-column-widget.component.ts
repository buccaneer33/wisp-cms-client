import { Component, Input } from '@angular/core';
import { AbstractWidgetComponent } from '../abstract-widget.component';

import { AbstractWidget } from '@page-builder/models/fields/abstractWidget';

@Component({
  selector: 'app-side-column-widget',
  templateUrl: './side-column-widget.component.html',
  styleUrls: ['./side-column-widget.component.sass']
})
export class SideColumnWidgetComponent extends AbstractWidgetComponent {
    @Input()
    widget: AbstractWidget;
}
