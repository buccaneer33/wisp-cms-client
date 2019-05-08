import { AbstractWidget } from './abstractWidget';
import { NewsItemWidgetComponent } from '@app/core-modules/page-builder/components/news-item-widget/news-item-widget.component';

export class NewsItemWidget extends AbstractWidget {
    componentClass = NewsItemWidgetComponent;
}
