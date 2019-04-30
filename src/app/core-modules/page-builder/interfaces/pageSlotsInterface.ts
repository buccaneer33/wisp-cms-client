import { WidgetInterface } from '../models/interfaces/widgetInterface';
import { widgetSlotTypes } from '../models/interfaces/widgetInterface';

export interface PageSlotesInterface {
    id: number;
    name: string;
    type: widgetSlotTypes;
    widgets: WidgetInterface[];
}
