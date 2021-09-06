import { Injectable } from '@angular/core';
import { ApplyModel, CarModel, CarTypeModel, ConnectModel, CourseModel, UserModel } from './webpage/UserModel';
@Injectable()
export class Model {
    userInfoDate: UserModel = new UserModel();
    userList: Array<UserModel> = new Array<UserModel>();
    carInfoDate: CarModel = new CarModel();
    CarList: Array<CarModel> = new Array<CarModel>();
    CarTypeList: Array<CarTypeModel> = new Array<CarTypeModel>();
    connectInfoDate: ConnectModel = new ConnectModel();
    courselist: Array<CourseModel> = new Array<CourseModel>();
    applylist: Array<ApplyModel> = new Array<ApplyModel>();

}
