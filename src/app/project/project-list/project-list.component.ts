import { listAnimation } from './../../anims/list.anim';
import { slideToRight } from './../../anims/router.anim';
import { ConfirmDialogComponent } from './../../shared/confirm-dialog/confirm-dialog.component';
import { Component, OnInit, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MdDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.scss'],
    animations: [
        slideToRight,
        listAnimation
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListComponent implements OnInit {

    @HostBinding('@routeAnim') state;

    projects = [{
        'id': 1,
        'name': '企业协作平台',
        'desc': '这是一个企业内部项目',
        'coverImg': 'assets/img/covers/0.jpg'
    }, {
        'id': 2,
        'name': '企业协作平台',
        'desc': '这是一个企业内部项目',
        'coverImg': 'assets/img/covers/1.jpg'
    }];

    constructor(private mdDialog: MdDialog, private changeDetectorRef: ChangeDetectorRef) { }

    ngOnInit() {
    }

    openNewProjectDialog() {
        const dialogRef = this.mdDialog.open(NewProjectComponent, { data: { title: '新建项目' } });
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            this.projects = [...this.projects, {
                'id': 3,
                'name': '新项目3',
                'desc': '新项目介绍3',
                'coverImg': 'assets/img/covers/3.jpg'
            }, {
                'id': 4,
                'name': '新项目4',
                'desc': '新项目介绍4',
                'coverImg': 'assets/img/covers/4.jpg'
            }];
            this.changeDetectorRef.markForCheck();
        });
    }

    launchInviteDialog() {
        const dialogRef = this.mdDialog.open(InviteComponent);
    }

    launchUpdateDialog() {
        const dialogRef = this.mdDialog.open(NewProjectComponent, { data: { title: '编辑项目' } });
    }

    launchConfirmDialog(projectVM) {
        const dialogRef = this.mdDialog.open(ConfirmDialogComponent, { data: { title: '删除项目', content: '确认删除该项目吗?' } });
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            this.projects = this.projects.filter(project => project.id !== projectVM.id);
            this.changeDetectorRef.markForCheck();
        });
    }

}
