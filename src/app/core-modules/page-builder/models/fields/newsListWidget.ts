import { AbstractWidget } from './abstractWidget';
import { NewsListWidgetComponent } from '@page-components/news-list-widget/news-list-widget.component';

export class NewsListWidget extends AbstractWidget {
    componentClass = NewsListWidgetComponent;
}
