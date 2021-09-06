import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { PagesComponent } from './pages.component';
import { StudentApplyComponent } from './student-apply/student-apply.component';
import { StudentCourseComponent } from './student-course/student-course.component';
import { TeacherApplyComponent } from './teacher-apply/teacher-apply.component';
import { TeacherCourseComponent } from './teacher-course/teacher-course.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: 'system',
                loadChildren: './system/system.module#SystemModule'
            },
            {
                path: 'myprofile',
                component: MyprofileComponent
            }
            ,
            {
                path: 'studentCourse',
                component: StudentCourseComponent
            }
            ,
            {
                path: 'teacherCourse',
                component: TeacherCourseComponent
            }
            ,
            {
                path: 'studentApply',
                component: StudentApplyComponent
            }
            ,
            {
                path: 'teacherApply',
                component: TeacherApplyComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutesModule {
}
