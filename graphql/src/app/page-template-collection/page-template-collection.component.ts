import { Component, OnInit } from '@angular/core';
import { PageTemplateListItemFragment, PageTemplatesGQL } from '../generated/graphql';
import {DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: "app-page-template-collection",
  template: `<a [href]="downloadJsonHref" class="button" download="download.json"><b>Download Transformed JSON File</b></a>
  <br>
  <br>
  <ng-container *ngFor="let newJ of newJson">
  <div class="boxed">

  <br>

    <article *ngIf="newJ">
      <a href={{newJ.url}}>{{ newJ.seo.title }}</a>

      <p>{{ newJ.seo.description }}</p>

    </article>
    </div>
    <br>
    <br>
  </ng-container>`,

  styleUrls: ["./page-template-collection.component.css"],
})
export class PageTemplateCollectionComponent implements OnInit {
  pageTemplates: (PageTemplateListItemFragment | null)[] | undefined;
  public downloadJsonHref: any;
  public persons: any = {};
  public newJson: any[]
  public cat_array: any[];
  public detailList1 : any;

  constructor(private pageTemplatesGQL: PageTemplatesGQL,private sanitizer: DomSanitizer) {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.pageTemplatesGQL.fetch().subscribe(({ data }) => {
    this.pageTemplates = (data.pageTemplateCollection?.items);
    const jsonData = JSON.stringify(this.pageTemplates,function(key,value) {
      if (key=="url"){
        if (value.startsWith('/home')){
          return value.replace("/home","https://www.rogers.com")
        }else{
          return value.replace(value, "https://www.rogers.com"+value)
        }
        
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
    const stringifiedData = JSON.parse(jsonData1);
    for (var i = 0; i < stringifiedData.length; i++) {
      if (stringifiedData[i]['url'].startsWith('https://www.rogers.com')){
        var newest = stringifiedData[i]['url'].split("/");
        for (var j = 0; j< newest.length-3;j++) {
          var upper = newest[j+3].charAt(0).toUpperCase( ) + newest[j+3].substring(1,)
          this.persons[j+1] = stringifiedData[i]['url'].replace(newest[j+3],upper);
          stringifiedData[i]['category']=this.persons;
        }
        this.persons={}; 
      }else{
        stringifiedData[i]['category']={};
      }
    }
    this.newJson = stringifiedData;
    console.log(this.newJson)

    const finalJsonData = JSON.stringify(stringifiedData, null, 2);
    
    //download JSON File
    var url = this.sanitizer.bypassSecurityTrustUrl(
      "data:application/json;charset=UTF-8," + encodeURIComponent(finalJsonData)
    );
    this.downloadJsonHref = url;
    });
  }
}
