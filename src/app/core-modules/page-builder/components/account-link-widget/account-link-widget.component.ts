import { Component, Input } from '@angular/core';
import { AbstractWidgetComponent } from '../abstract-widget.component';

import { AbstractWidget } from '@page-builder/models/fields/abstractWidget';

@Component({
  selector: 'app-account-link-widget',
  templateUrl: './account-link-widget.component.html',
  styleUrls: ['./account-link-widget.component.sass']
})
export class AccountLinkWidgetComponent extends AbstractWidgetComponent {
    @Input()
    widget: AbstractWidget;
}
