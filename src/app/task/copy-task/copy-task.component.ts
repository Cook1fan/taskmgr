import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';
import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-copy-task',
    templateUrl: './copy-task.component.html',
    styleUrls: ['./copy-task.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CopyTaskComponent implements OnInit {

    lists: any[];

    constructor(
        @Inject(MD_DIALOG_DATA) private data,
        private mdDialogRef: MdDialogRef<CopyTaskComponent>
    ) { }

    ngOnInit() {
        this.lists = this.data.lists;
    }

}
