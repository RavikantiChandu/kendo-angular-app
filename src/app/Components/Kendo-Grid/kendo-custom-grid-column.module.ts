import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {DiCustomGridColumnComponent} from './kendo-custom-grid-column.compenent';
import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
    imports: [
        CommonModule,
        GridModule
    ],
    declarations: [DiCustomGridColumnComponent],
    exports:[DiCustomGridColumnComponent]
})
export class KendoCustomGridColumnModule { }
