import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
    MdSlideToggleModule,
    MdGridListModule,
    MdDialogModule,
    MdAutocompleteModule,
    MdMenuModule,
    MdCheckboxModule,
    MdTooltipModule,
    MdRadioModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdSelectModule,
    MdSidenavModule
} from '@angular/material';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        MdToolbarModule,
        MdIconModule,
        MdButtonModule,
        MdCardModule,
        MdInputModule,
        MdListModule,
        MdSlideToggleModule,
        MdGridListModule,
        MdAutocompleteModule,
        MdMenuModule,
        MdCheckboxModule,
        MdTooltipModule,
        MdRadioModule,
        MdDatepickerModule,
        MdNativeDateModule,
        MdSelectModule,
        MdSidenavModule
    ],
    exports: [
        CommonModule,
        MdToolbarModule,
        MdIconModule,
        MdButtonModule,
        MdCardModule,
        MdInputModule,
        MdListModule,
        MdSlideToggleModule,
        MdGridListModule,
        MdDialogModule,
        MdAutocompleteModule,
        MdMenuModule,
        MdCheckboxModule,
        MdTooltipModule,
        MdRadioModule,
        MdDatepickerModule,
        MdNativeDateModule,
        MdSelectModule,
        MdSidenavModule
    ],
    entryComponents: [
        ConfirmDialogComponent
    ],
    providers: [
    ],
    declarations: [ConfirmDialogComponent]
})
export class SharedModule { }
