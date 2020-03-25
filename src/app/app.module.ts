import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MapBoxComponent } from "./map-box/map-box.component";
import { SideBarComponent } from "./side-bar/side-bar.component";
import { SearchComponent } from './search/search.component';

import { AnnotationsComponent } from './annotations/annotations.component';
import { StoreModule } from '@ngrx/store';
import { annotationsReducer } from './store/annotations.reducers';

@NgModule({
  declarations: [AppComponent, MapBoxComponent, SideBarComponent, SearchComponent, AnnotationsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule,
    StoreModule.forRoot({annotations: annotationsReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
