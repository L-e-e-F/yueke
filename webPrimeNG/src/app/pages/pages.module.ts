import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import {
    BlockUIModule,
    ButtonModule,
    CardModule, CheckboxModule,
    ConfirmationService,
    ConfirmDialogModule,
    DialogModule,
    DialogService,
    DropdownModule, FileUploadModule, GMapModule,
    InputTextModule,
    MessageService, PanelModule,
    ScrollPanelModule
} from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MenuHttpService } from '../commom/services/http';
import { PagesMenuComponent, PagesSubMenuComponent } from './layout/pages.menu.component';
import { PagesTopBarComponent } from './layout/pages.topbar.component';
import { LoginComponent } from './login/login.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { PagesRoutesModule } from './pages-routes';
import { PagesComponent } from './pages.component';
import { StudentApplyComponent } from './student-apply/student-apply.component';
import { StudentCourseComponent } from './student-course/student-course.component';
import { TeacherApplyComponent } from './teacher-apply/teacher-apply.component';
import { TeacherCourseComponent } from './teacher-course/teacher-course.component';

@NgModule({
    declarations: [
        PagesComponent,
        PagesTopBarComponent,
        PagesMenuComponent,
        PagesSubMenuComponent,
        MyprofileComponent,
        LoginComponent,
        TeacherApplyComponent,
        TeacherCourseComponent,
        StudentApplyComponent,
        StudentCourseComponent
    ],
    imports: [
        CommonModule,
        PagesRoutesModule,
        TranslateModule,
        ScrollPanelModule,
        ButtonModule,
        CardModule,
        ToastModule,
        BlockUIModule,
        TableModule,
        DialogModule,
        ConfirmDialogModule,
        FormsModule,
        InputTextModule,
        DropdownModule,
        PanelModule,
        FileUploadModule,
        GMapModule,
        CheckboxModule
    ],
    exports: [

    ],
    providers: [
        MenuHttpService,
        DialogService,
        ConfirmationService,
        MessageService
    ]
})
export class PagesModule {
}
