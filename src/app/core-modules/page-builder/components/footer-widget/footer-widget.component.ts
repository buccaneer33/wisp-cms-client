import { Component, Input } from '@angular/core';
import { AbstractWidgetComponent } from '../abstract-widget.component';

import { AbstractWidget } from '@page-builder/models/fields/abstractWidget';

@Component({
  selector: 'app-footer-widget',
  templateUrl: './footer-widget.component.html',
  styleUrls: ['./footer-widget.component.sass']
})
export class FooterWidgetComponent extends AbstractWidgetComponent {
    @Input()
    widget: AbstractWidget;
}
