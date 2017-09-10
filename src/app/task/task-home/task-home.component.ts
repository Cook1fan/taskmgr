import { slideToRight } from './../../anims/router.anim';
import { NewTaskListComponent } from './../new-task-list/new-task-list.component';
import { ConfirmDialogComponent } from './../../shared/confirm-dialog/confirm-dialog.component';
import { CopyTaskComponent } from './../copy-task/copy-task.component';
import { NewTaskComponent } from './../new-task/new-task.component';
import { MdDialog } from '@angular/material';
import { Component, OnInit, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-task-home',
    templateUrl: './task-home.component.html',
    styleUrls: ['./task-home.component.scss'],
    animations: [
        slideToRight
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskHomeComponent implements OnInit {

    @HostBinding('@routeAnim') state;

    lists = [{
        id: 1,
        name: '待办',
        tasks: [{
            id: 1,
            desc: '任务一：去星巴克买杯咖啡',
            completed: true,
            priority: 3,
            owner: {
                id: 1,
                name: '张三',
                avatar: 'avatars:svg-11'
            },
            dueDate: new Date(),
            reminder: new Date()
        }, {
            id: 2,
            desc: '任务二：完成老板布置的 PPT 作业',
            completed: false,
            priority: 2,
            owner: {
                id: 1,
                name: '李四',
                avatar: 'avatars:svg-12'
            },
            dueDate: new Date()
        }],
    }, {
        id: 2,
        name: '进行中',
        tasks: [{
            id: 1,
            desc: '任务三：项目代码审批',
            completed: false,
            priority: 1,
            owner: {
                id: 1,
                name: '王五',
                avatar: 'avatars:svg-13'
            },
            dueDate: new Date()
        }, {
            id: 2,
            desc: '任务四：制定项目计划',
            completed: false,
            priority: 2,
            owner: {
                id: 1,
                name: '李四',
                avatar: 'avatars:svg-12'
            },
            dueDate: new Date()
        }],
    }];

    constructor(
        private mdDialog: MdDialog,
        private changeDetectorRef: ChangeDetectorRef
    ) { }

    ngOnInit() {
    }

    launchNewTaskDialog() {
        const dialogRef = this.mdDialog.open(NewTaskComponent, { data: { title: '新建任务' } });
    }

    launchCopyTaskDialog() {
        const dialogRef = this.mdDialog.open(CopyTaskComponent, { data: { lists: this.lists } });
    }

    launchUpdateTaskDialog(task) {
        const dialogRef = this.mdDialog.open(NewTaskComponent, { data: { title: '修改任务', task: task } });
    }

    launchConfirmDialog() {
        const dialogRef = this.mdDialog.open(ConfirmDialogComponent, { data: { title: '删除任务列表', content: '确认删除该任务列表吗?' } });
        dialogRef.afterClosed().subscribe(result => console.log(result));
    }

    launchEditListDialog() {
        const dialogRef = this.mdDialog.open(NewTaskListComponent, { data: { title: '更改列表名称' } });
        dialogRef.afterClosed().subscribe(result => console.log(result));
    }

    launchNewListDialog() {
        const dialogRef = this.mdDialog.open(NewTaskListComponent, { data: { title: '新增列表名称' } });
        dialogRef.afterClosed().subscribe(result => console.log(result));
    }

}
