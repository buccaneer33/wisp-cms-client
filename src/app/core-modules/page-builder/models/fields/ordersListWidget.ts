import { AbstractWidget } from './abstractWidget';
import { OrdersListWidgetComponent } from '@page-components/orders-list-widget/orders-list-widget.component';

export class OrdersListWidget extends AbstractWidget {
    componentClass = OrdersListWidgetComponent;
}
