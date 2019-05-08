import { WidgetAttributes } from './widgetAttributes';
import { WidgetContent } from './widgetContent';

export type widgetSlotTypes =
    | 'header-block'
    | 'site-logo'
    | 'site-title'
    | 'site-slogan'
    | 'order-cart'
    | 'personal-area'
    | 'side-column'
    | 'main-column'
    | 'page-title'
    | 'text-field'
    | 'footer-block';

export class WidgetInterface {
        public name: string;
        public type: widgetSlotTypes;
        public widgets?: WidgetInterface[];
        public attributes?: WidgetAttributes;
        public content?: WidgetContent;
    }
