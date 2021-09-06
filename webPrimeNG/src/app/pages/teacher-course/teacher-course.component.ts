import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { CommonConstance } from '../../commom/constance';
import { Model } from '../../commom/model/Model';
import { ApplyModel, CourseModel, TypeModel, UserModel } from '../../commom/model/webpage/UserModel';
import { CommonHttpService } from '../../commom/services/common.service';
import { showError, showSuccess } from '../../commom/utils/util';

@Component({
  selector: 'app-teacher-course',
  templateUrl: './teacher-course.component.html',
  styleUrls: ['./teacher-course.component.scss']
})
export class TeacherCourseComponent implements OnInit {

    loading: boolean;
    // tslint:disable-next-line:ban-ts-ignore
    // @ts-ignore
    // tslint:disable-next-line:prefer-inline-decorator
    @ViewChild('dt1')
    table: Table;
    filter: any = {};
    blockedDocument = false;
    datas: Array<CourseModel>;
    typeList: Array<TypeModel>;
    selectedType: TypeModel;
    data: CourseModel = new CourseModel();
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
        this.typeList = [
            {typeName: '专业课', typeId: 1},
            {typeName: '公共必须课', typeId: 2}
        ];
        this.cols = [
            {field: 'courseName', header: '课程名'},
            {field: 'typeName', header: '课程类型'},
            {field: 'applyNumber', header: '上课人数'},
            {field: 'courseTime', header: '时间'},
            {field: 'pic', header: '地点'},
            {field: 'courseStatus', header: '课程状态'}
        ];
    }

    ngOnInit() {
        this.initCols();
        this.search();
    }

    search() {
        this.service.applyGet('/course/status/', this.userInfo.userId).subscribe(
            (res: Array<CourseModel>) => {
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
    onRowSelect(event) {
        this.newData = false;
        this.data = this.clone(event.data);
        this.displayDialog = false;
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
        this.data = new CourseModel();
        this.displayDialog = false;
    }
    showError(error) {
        showError(
            this.messageService,
            '失败',
            error.error.message,
            3000
        );
        this.data = new CourseModel();
        this.displayDialog = false;
    }
}
