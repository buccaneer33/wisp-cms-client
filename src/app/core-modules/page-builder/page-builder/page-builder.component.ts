import { Component, OnInit } from '@angular/core';
import { PageBuilderService } from '@page-builder/services/page-builder.service';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PageInterface } from '../interfaces/pageIntarface';


@Component({
  selector: 'app-page-builder',
  templateUrl: './page-builder.component.html',
  styleUrls: ['./page-builder.component.sass']
})
export class PageBuilderComponent implements OnInit {
    public pageForm;

  constructor(
      private builder: PageBuilderService,
      private http: HttpClient
      ) {
        this.getJSON().subscribe(data => {
             this.buildPage(data);

        });
      }

  ngOnInit() {
  }

    public buildPage(data) {
        this.pageForm = this.builder.createPageObject(data);
       // console.log(data);
       // console.log(this.pageForm);
    }

    public getJSON(): Observable<any> {
        const apiUrl = '../../../../assets/dev-stubs/text-page.json';
        return this.http.get(apiUrl);
    }
}
