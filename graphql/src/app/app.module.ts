import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { PageTemplateCollectionComponent } from './page-template-collection/page-template-collection.component';
import { ApolloModule, APOLLO_OPTIONS } from "apollo-angular";


@NgModule({
  declarations: [
    AppComponent,
    PageTemplateCollectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    ApolloModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
