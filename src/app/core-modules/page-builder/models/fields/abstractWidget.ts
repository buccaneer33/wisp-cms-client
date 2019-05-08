import { WidgetInterface } from '../interfaces/widgetInterface';
import { widgetSlotTypes } from '../interfaces/widgetInterface';

export abstract class AbstractWidget implements WidgetInterface {
    public name;
    public type;
    public widgets;
    public attributes;
    public content;

    constructor(data: WidgetInterface) {

    }
    public setData(data: WidgetInterface): void {
        this.name = data.name;
        this.type = data.type;

        if (data.widgets) {
            this.widgets = data.widgets;
        }
        this.attributes = data.attributes;
        this.content = data.content;
    }
   /* public createInnerWidget(data: WidgetInterface) {
        if (this.widgets) {
            for (let innerWidget in this.widgets) {
                if (this.widgets.hasOwnProperty(innerWidget)) {

                }
            }
        }
    }*/
}
