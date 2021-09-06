import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { CommonConstance } from '../../commom/constance';
import { Model } from '../../commom/model/Model';
import { ApplyModel, CourseModel, UserModel } from '../../commom/model/webpage/UserModel';
import { ayylyStatusOptions, courseStatusOptions, parseStatus, statusOptions } from '../../commom/options';
import { CommonHttpService } from '../../commom/services/common.service';
import { showError, showSuccess } from '../../commom/utils/util';

@Component({
  selector: 'app-student-apply',
  templateUrl: './student-apply.component.html',
  styleUrls: ['./student-apply.component.scss']
})
export class StudentApplyComponent implements OnInit {
    loading: boolean;
    // tslint:disable-next-line:ban-ts-ignore
    // @ts-ignore
    // tslint:disable-next-line:prefer-inline-decorator
    @ViewChild('dt1')
    table: Table;
    filter: any = {};
    blockedDocument = false;
    datas: Array<ApplyModel>;
    data: ApplyModel = new ApplyModel();
    cols: Array<any>;
    displayDialog = false;
    selectedData: ApplyModel;
    newData: boolean;
    userInfo: UserModel = JSON.parse(localStorage.getItem(CommonConstance.LOCALSTORAGE.USER_INFO));
    constructor(private route: Router,
                private confirmationService: ConfirmationService,
                private messageService: MessageService,
                private service: CommonHttpService,
                private model: Model
    ) {
    }
    initCols() {
        this.cols = [
            {field: 'courseName', header: '课程名'},
            {field: 'teacherName', header: '任课教师'},
            {field: 'courseTime', header: '时间'},
            {field: 'address', header: '地点'},
            {field: 'status', header: '状态'}
        ];
    }

    ngOnInit() {
        this.initCols();
        this.search();
    }

    search() {
        console.log(this.userInfo.userId);
        this.service.applyGet('/apply/userId/', this.userInfo.userId).subscribe(
            (res: Array<ApplyModel>) => {
                for (const i of res) {
                    i.status = parseStatus(i.status, ayylyStatusOptions);
                }
                this.model.applylist = res;
                this.datas = this.model.applylist;
                console.log(this.datas);
            },
            error => {
                this.showError(error);
            }
        );
    }
    save() {
        if (this.newData) {
            this.service.add('user', this.data).subscribe(
                res => {
                    this.showSuccess();
                    this.search();
                },
                error => {
                    this.showError(error);
                }
            );
        } else {this.service.update('user', this.data).subscribe(
            res => {
                this.showSuccess();
                this.search();
            },
            error => {
                this.showError(error);
            }
        ); }
    }
    onRowSelect(event) {
        this.newData = false;
        this.data = this.clone(event.data);
        this.displayDialog = false;
    }

    clone(c: ApplyModel): ApplyModel {
        const data = new ApplyModel();
        for (const prop in c) {
            data[prop] = c[prop];
        }

        return data;
    }
    showDialogToAdd() {
        this.newData = true;
        this.data = new ApplyModel();
        this.displayDialog = true;
    }
    showSuccess() {
        showSuccess(
            this.messageService,
            '成功',
            '',
            3000
        );
        this.data = null;
        this.displayDialog = false;
    }
    showError(error) {
        showError(
            this.messageService,
            '失败',
            error.error.message,
            3000
        );
        this.data = null;
        this.displayDialog = false;
    }
}
