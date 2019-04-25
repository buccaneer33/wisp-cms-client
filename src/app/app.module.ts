import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NewsService} from './commons-modules/services/news/news.service';
import { GoodsComponent } from './commons-modules/components/goods/goods.component'

@NgModule({
  declarations: [
    AppComponent,
    GoodsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
