export class UserModel {
    userId;
    account;
    password;
    userName;
    role;
    email;
    mobile;
    showAct;
    active;
    showActive;
    cid;
    showCompany;
    money;
    car;
    address;
    showFinish;
}
export class CourseModel {

    courseId;
    courseName;
    typeId;
    typeName;
    teacherId;
    teacherName;
    courseTime = '2021-01-01 00:00:00';
    applyNumber;
    courseNumber;
    pic;
    courseStatus;
    endTime = '2021-01-01 00:00:00';
}
export class ApplyModel {
    applyId;
    courseId;
    courseName;
    typeId;
    typeName;
    teacherId;
    teacherName;
    userId;
    userName;
    status;
    courseTime = '2021-01-01 00:00:00';
    address;
}
export class TypeModel {
    typeId;
    typeName;

}
export class CarTypeModel {
    typeId;
    typeName;
    details;

}
export class CarModel {
    carId;
    carName;
    userId;
    typeId;
    typeName;
    connectState;
    addressId;
    address;
    addressX;
    addressY;
}
export class ConnectModel {
    connectId;
    userId;
    carId;
    carName;
    connectAction;
    connectTime;
}
export class OperationModel {
    operationId;
    userId;
    carId;
    carName;
    operationAction;
    operationLength;
    operationTime;
    addressStart;
    addressStartX;
    addressStartY;
    addressEnd;
    addressEndX;
    addressEndY;
}
export class BreakdownModel {
    breakdownId;
    breakdownName;
    carId;
    carName;
    typeId;
    typeName;
    details;
    solution;
}
export class OrderModel {
    oid;
    uid;
    driver;
    start;
    end;
    cost;
    comment;
    finish;
    showUser;
    showDriver;
    showFinish;
    startname;
    endname;
    car;
    name: any;
}

export class RecordModel {
    did;
    name;
    path;
    bitsallocated;
    rows;
    columns;
    windowcenter;
    windowwidth;
    body;
    date;
    position;
    orientation;
    bitsstored;
}
