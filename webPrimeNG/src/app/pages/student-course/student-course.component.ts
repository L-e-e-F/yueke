import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { CommonConstance } from '../../commom/constance';
import { Model } from '../../commom/model/Model';
import { ApplyModel, CourseModel, UserModel } from '../../commom/model/webpage/UserModel';
import { courseStatusOptions, parseStatus, statusOptions } from '../../commom/options';
import { CommonHttpService } from '../../commom/services/common.service';
import { showError, showSuccess } from '../../commom/utils/util';
@Component({
  selector: 'app-student-course',
  templateUrl: './student-course.component.html',
  styleUrls: ['./student-course.component.scss']
})
export class StudentCourseComponent implements OnInit {

    loading: boolean;
    // tslint:disable-next-line:ban-ts-ignore
    // @ts-ignore
    // tslint:disable-next-line:prefer-inline-decorator
    @ViewChild('dt1')
    table: Table;
    filter: any = {};
    blockedDocument = false;
    datas: Array<CourseModel>;
    data: CourseModel = new CourseModel();
    applyData: ApplyModel = new ApplyModel();
    cols: Array<any>;
    displayDialog = false;
    selectedData: CourseModel;
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
            {field: 'typeName', header: '课程类型'},
            {field: 'teacherName', header: '任课教师'},
            {field: 'courseStatus', header: '课程状态'}
        ];
    }

    ngOnInit() {
        this.initCols();
        this.search();
    }

    search() {
        this.service.get('/course/').subscribe(
            (res: Array<CourseModel>) => {
                // for (const i of res) {
                //     if (!(i.courseStatus === null)) {
                //         i.courseStatus = parseStatus(i.courseStatus, courseStatusOptions);
                //     }
                // }
                this.model.courselist = res;
                this.datas = res;
            },
            error => {
                this.showError(error);
            }
        );
    }
    exid() {
        this.data = null;
        this.displayDialog = false;
        this.search();
    }
    save() {
        if (this.data) {
            this.applyData.courseId = this.data.courseId;
            this.applyData.courseName = this.data.courseName;
            this.applyData.courseTime = this.data.courseTime;
            this.applyData.teacherId = this.data.teacherId;
            this.applyData.teacherName = this.data.teacherName;
            this.applyData.address = this.data.pic;
            this.applyData.status = 0;
            this.applyData.userId = this.userInfo.userId;
            this.applyData.userName = this.userInfo.userName;
        }
        if (this.data.applyNumber >= this.data.courseNumber) {
            this.displayDialog = false;
        } else {
            this.service.add('apply', this.applyData).subscribe(
                res => {
                    this.showSuccess();
                    this.search();
                },
                error => {
                    this.showError(error);
                }
            );
        }
    }

    // delete(usedId) {
    //
    //     this.service.delete('course',usedId).subscribe(
    //         res => {
    //             this.showSuccess();
    //             this.search();
    //         },
    //         error => {
    //             this.showError(error);
    //         }
    //     );
    // }
    onRowSelect(event) {
        this.newData = false;
        this.data = this.clone(event.data);
        if (this.data.courseStatus === '可预约') {
            this.displayDialog = true;
        }
    }

    clone(c: CourseModel): CourseModel {
        const data = new CourseModel();
        for (const prop in c) {
            data[prop] = c[prop];
        }

        return data;
    }
    showDialogToAdd() {
        this.newData = true;
        this.data = new CourseModel();
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
