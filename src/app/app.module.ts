import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderWidgetComponent } from './core-modules/page-builder/components/header-widget/header-widget.component';
import { FooterWidgetComponent } from './core-modules/page-builder/components/footer-widget/footer-widget.component';
import { MainWidgetComponent } from './core-modules/page-builder/components/main-widget/main-widget.component';
import { MainColumnWidgetComponent } from './core-modules/page-builder/components/main-column-widget/main-column-widget.component';
import { SideColumnWidgetComponent } from './core-modules/page-builder/components/side-column-widget/side-column-widget.component';
import { NewsListWidgetComponent } from './core-modules/page-builder/components/news-list-widget/news-list-widget.component';
import { SiteTitleWidgetComponent } from './core-modules/page-builder/components/site-title-widget/site-title-widget.component';
import { SiteSloganWidgetComponent } from './core-modules/page-builder/components/site-slogan-widget/site-slogan-widget.component';
import { OrdersListWidgetComponent } from './core-modules/page-builder/components/orders-list-widget/orders-list-widget.component';
import { TextWidgetComponent } from './core-modules/page-builder/components/text-widget/text-widget.component';
import { ImageSingleWidgetComponent } from './core-modules/page-builder/components/image-single-widget/image-single-widget.component';
import { SiteLogoWidgetComponent } from './core-modules/page-builder/components/site-logo-widget/site-logo-widget.component';
import { CartLinkWidgetComponent } from './core-modules/page-builder/components/cart-link-widget/cart-link-widget.component';
import { AccountLinkWidgetComponent } from './core-modules/page-builder/components/account-link-widget/account-link-widget.component';

import { NewsService} from './commons-modules/services/news/news.service';
import { NewsItemWidgetComponent } from './core-modules/page-builder/components/news-item-widget/news-item-widget.component';
import { PageTitleWidgetComponent } from './core-modules/page-builder/components/page-title-widget/page-title-widget.component';
import { PageBuilderComponent } from './core-modules/page-builder/page-builder/page-builder.component';

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
    AccountLinkWidgetComponent,
    NewsItemWidgetComponent,
    PageTitleWidgetComponent,
    PageBuilderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
