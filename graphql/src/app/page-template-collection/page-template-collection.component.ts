import { Component, OnInit } from '@angular/core';
import { PageTemplateListItemFragment, PageTemplatesGQL } from '../generated/graphql';
import {DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: "app-page-template-collection",
  template: `<a [href]="downloadJsonHref" class="button" download="download.json"><b>Download Transformed JSON File</b></a>
  <p>{{cat_array3}}</p>
  <ng-container *ngFor="let newJ of newJson">
    <article *ngIf="newJ">
      <br>
      <br>
      <a [href]="newJ.url">{{ newJ.seo.title }}</a>
      <h2>Description</h2>
      <p>{{ newJ.seo.description }}</p>
      <h2>isNoIndex</h2>
    </article>
  </ng-container>`,

  styleUrls: ["./page-template-collection.component.css"],
})
export class PageTemplateCollectionComponent implements OnInit {
  pageTemplates: (PageTemplateListItemFragment | null)[] | undefined;
  public downloadJsonHref: any;
  public persons: any = {};
  public newJson: any[]
  public cat_array: any[];
  public cat_array2: any = [];
  public cat_array3: any[];
  public detailList1 : any;
  public cat = "";

  constructor(private pageTemplatesGQL: PageTemplatesGQL,private sanitizer: DomSanitizer) {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.pageTemplatesGQL.fetch().subscribe(({ data }) => {
    this.pageTemplates = (data.pageTemplateCollection?.items);
    const jsonData = JSON.stringify(this.pageTemplates,function(key,value) {
      if (key=="url"){
        return value.replace("/home","https://www.rogers.com")
      }if (key=="seo"){
        return {"title":value.title.replace(" - Rogers", " | Rogers"),
                "description":value.description.substring(0, 80),
                "isNoIndex":value.isNoIndex}  
      }
      else{
        return value;
      }
    });
    const userData = JSON.parse(jsonData);
    const jsonData1 = JSON.stringify(userData, null, 2);
    const stringify1 = JSON.parse(jsonData1);
    for (var i = 0; i < stringify1.length; i++) {
      if (stringify1[i]['url'].startsWith('https://www.rogers.com')){
        var newest = stringify1[i]['url'].split("/");
        for (var j = 0; j< newest.length-3;j++) {
          var upper = newest[j+3].charAt(0).toUpperCase( ) + newest[j+3].substring(1,)
          this.persons[j+1] = stringify1[i]['url'].replace(newest[j+3],upper);
          stringify1[i]['category']=this.persons;
        }
        this.cat_array2.push(this.persons)
        this.cat += JSON.stringify(this.persons);
        this.persons={}; 
      }else{
        stringify1[i]['category']='null';
      }
    }
    
    this.cat_array = this.cat.split("}");
    this.cat_array3 = JSON.parse(JSON.stringify(this.cat_array2))
    this.newJson = stringify1;
    const jsonData2 = JSON.stringify(stringify1, null, 2);
    console.log(jsonData2);
    
    var url = this.sanitizer.bypassSecurityTrustUrl(
      "data:application/json;charset=UTF-8," + encodeURIComponent(jsonData2)
    );
    this.downloadJsonHref = url;
    });
  }
}



