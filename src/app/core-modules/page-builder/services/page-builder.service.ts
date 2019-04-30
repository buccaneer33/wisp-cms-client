import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageInterface } from '@page-builder/interfaces/pageIntarface';
import { WidgetInterface } from '@page-builder/models/interfaces/widgetInterface';
import { PageSlotesInterface } from '@page-builder/interfaces/pageSlotsInterface';
import { AbstractWidgetFabric } from '@page-models/fields/abstractWidgetFabric';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PageBuilderService {
    public PageObj: PageInterface = {
        name: '',
        metaDesc: '',
        metaKeys: '',
        slots: []
    };

    constructor() {}

    /**
     * @create page
     * @param pageData
     */
    public createPageObject(pageData: PageInterface): PageInterface {
        if (pageData) {

            this.PageObj.name = pageData.name;

            if (pageData.slots && pageData.slots.length) {
                for (const slot of pageData.slots) {
                    let obj;
                    obj = this.createSlotObject(slot);
                    console.log( obj );
                }
            }
           // console.log( this.PageObj );
            return  this.PageObj;
        }
    }
    /**
     * @create slot
     * @param pageData
     */
    private createSlotObject(slotData: PageSlotesInterface) {
       // console.log( slotData );
        let slots = {};
        if ( slotData.widgets && slotData.widgets.length ) {



            for (let i = 0; i < slotData.widgets.length;  i ++) {
                const slot = slotData.widgets[i];
                // console.log(slot);
                slots = this.createWidgetObject( slot );
            }/**/
        }
        return slots;
    }
    /**
     * @create widget
     * @param pageData
     */
    private createWidgetObject(widgetData: WidgetInterface) {
        const widgets = {};
        if (widgetData.type && widgetData.type.length) {
            const f = AbstractWidgetFabric.createWidget( widgetData );
            if ( f ) {
                widgets[ f.name ] = f;
            }
        }
        return widgets;
    }
}
