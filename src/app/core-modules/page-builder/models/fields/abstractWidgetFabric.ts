import { Injectable } from '@angular/core';
import { WidgetInterface } from '../interfaces/widgetInterface';

import { AbstractWidget } from './abstractWidget';
import { AccountLinkWidget } from './accountLinkWidget';
import { CartLinkWidget } from './cartLinkWidget';
import { FooterWidget } from './footerWidget';
import { HeaderWidget } from './headerWidget';
import { ImageSingleWidget } from './imageSingleWidget';
import { MainColumnWidget } from './mainColumnWidget';
import { MainWidget } from './mainWidget';
import { NewsListWidget } from './newsListWidget';
import { OrdersListWidget } from './ordersListWidget';
import { SideColumnWidget } from './sideColumnWidget';
import { SiteLogoWidget } from './siteLogoWidget';
import { SiteSloganWidget } from './siteSloganWidget';
import { SiteTitleWidget } from './siteTitleWidget';
import { TextWidget } from './textWidget';
import { NewsItemWidget } from './newsItemWidget';
import { PageTitleWidget } from './pageTitleWidget';


@Injectable({
    providedIn: 'root'
})

export class AbstractWidgetFabric {

    static slottypes = {
        'header-block': HeaderWidget,
        'site-title': SiteTitleWidget,
        'site-slogan': SiteSloganWidget,
        'cart-link': CartLinkWidget,
        'account-link': AccountLinkWidget,
        'main-block': MainWidget,
        'side-column': SideColumnWidget,
        'main-column': MainColumnWidget,
        'page-title': PageTitleWidget,
        'text-field': TextWidget,
        'footer-block': FooterWidget,
        'image-single': ImageSingleWidget,
        'news-list': NewsListWidget,
        'news-item': NewsItemWidget,
        'order-list': OrdersListWidget,
        'site-logo': SiteLogoWidget,
    };

    static createWidget(metadata: WidgetInterface): AbstractWidget {
        if (AbstractWidgetFabric.slottypes.hasOwnProperty(metadata.type)) {
            return new AbstractWidgetFabric.slottypes[ metadata.type ](metadata);
        } else {
            console.log('No type of widget ' + metadata.type);
            return ;
        }
    }
}
