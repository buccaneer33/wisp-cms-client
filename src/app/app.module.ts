import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderWidgetComponent } from './app/page-builder/components/header-widget/header-widget.component';
import { FooterWidgetComponent } from './page-builder/components/footer-widget/footer-widget.component';
import { MainWidgetComponent } from './page-builder/components/main-widget/main-widget.component';
import { MainColumnWidgetComponent } from './page-builder/components/main-column-widget/main-column-widget.component';
import { SideColumnWidgetComponent } from './page-builder/components/side-column-widget/side-column-widget.component';
import { NewsListWidgetComponent } from './page-builder/components/news-list-widget/news-list-widget.component';
import { SiteTitleWidgetComponent } from './page-builder/components/site-title-widget/site-title-widget.component';
import { SiteSloganWidgetComponent } from './page-builder/components/site-slogan-widget/site-slogan-widget.component';
import { OrdersListWidgetComponent } from './page-builder/components/orders-list-widget/orders-list-widget.component';
import { TextWidgetComponent } from './page-builder/components/text-widget/text-widget.component';
import { ImageSingleWidgetComponent } from './page-builder/components/image-single-widget/image-single-widget.component';
import { SiteLogoWidgetComponent } from './page-builder/components/site-logo-widget/site-logo-widget.component';
import { CartLinkWidgetComponent } from './page-builder/components/cart-link-widget/cart-link-widget.component';
import { AccountLinkWidgetComponent } from './page-builder/components/account-link-widget/account-link-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderWidgetComponent,
    FooterWidgetComponent,
    MainWidgetComponent,
    MainColumnWidgetComponent,
    SideColumnWidgetComponent,
    NewsListWidgetComponent,
    SiteTitleWidgetComponent,
    SiteSloganWidgetComponent,
    OrdersListWidgetComponent,
    TextWidgetComponent,
    ImageSingleWidgetComponent,
    SiteLogoWidgetComponent,
    CartLinkWidgetComponent,
    AccountLinkWidgetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
