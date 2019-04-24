import { WidgetAttributes } from "./index";
export interface WidgetMetadata {
    widgetId: number;
    widgetName: string;
    group_id: string;
    fieldtype: string
    widgetAttributes: WidgetAttributes;
}