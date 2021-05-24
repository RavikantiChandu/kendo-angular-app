import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import {KendoCustomGridColumnModule} from './kendo-custom-grid-column.module';
import  {DiCustomGridComponent} from './kendo-custom-grid.component';
import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
    imports: [
        CommonModule,
        GridModule,
        KendoCustomGridColumnModule
    ],
    declarations: [DiCustomGridComponent],
    exports:[DiCustomGridComponent]
})
export class KendoCustomGridModule { }
