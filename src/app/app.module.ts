import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { KendoCustomGridModule} from './Components/Kendo-Grid/kendo-custom-grid.module';
import { KendoCustomGridColumnModule} from './Components/Kendo-Grid/kendo-custom-grid-column.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    GridModule,
    NgbModule,
    KendoCustomGridModule ,
    KendoCustomGridColumnModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
