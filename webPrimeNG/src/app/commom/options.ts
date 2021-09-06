import * as moment from 'moment';
import { isNull } from './utils/util';

export const statusOptions = [
    {value: 0, label: '教师'},
    {value: 1, label: '学生'}
];
export const carType = [
    {label: '京东无人配送车', value: 1},
    {label: '美团无人配送车', value: 2},
    {label: '顺丰无人配送车', value: 3}
];
export const fileType = [
    {value: 0, label: '文件'},
    {value: 1, label: '正常图片'},
    {value: 2, label: '优秀图片'}
];
export interface CarInstruct {
    name: string;
    value: number;
}
export const activeOptions = [
    {value: false, label: '未解决'},
    {value: true, label: '解决'}
];
export const ayylyStatusOptions = [
    {value: 0, label: '已预约'},
    {value: 1, label: '开课'},
    {value: 2, label: '开课失败'}
];
export const courseStatusOptions = [
    {value: 1, label: '可预约'},
    {value: 2, label: '已满人'},
    {value: 3, label: '开课'},
    {value: 4, label: '开课失败'}
];
export const operation = [
    {value: 0, label: '向上'},
    {value: 1, label: '向下'},
    {value: 2, label: '向左'},
    {value: 3, label: '向右'}
];
export const finishOptions = [
    {value: 0, label: '连接'},
    {value: 1, label: '断开'}
];

export const useOptions = [
    {value: false, label: '不可用'},
    {value: true, label: '可用'}
];

export const levelOptions = [
    {value: 0, label: '标准'},
    {value: 1, label: '轻度'},
    {value: 2, label: '中等'},
    {value: 3, label: '严重'},
    {value: 4, label: '紧急'}
];

export function parseStatus(status, options) {
    let newStatus = '';
    for (const i of options) {
        if (i.value == status) {
            newStatus = i.label;
            break;
        }
    }

    return newStatus;
}
export function jsonStatus(status, options) {
    let newStatus = '';
    for (const i of options) {
        if (status == i.label) {
            newStatus = i.value;
            break;
        }
    }

    return newStatus;
}
export function formatDate(date) {
    return moment(new Date(date)).format(
        'YYYY-MM-DD'
    );
}
// tslint:disable-next-line:no-shadowed-variable
export function format(date, format) {
    return moment(new Date(date)).format(
        format
    );
}

export function initLineLabelMonth(num) {
    const dateOptions = [];
    const time = new Date(new Date().setMonth(new Date().getMonth() - num)); // '2019-08-10');
    for (let i = 0; i <= num; i++) {
        // const date = format(new Date().setDate(new Date().getDate() + i), 'yyyy-MM-dd');
        const date = moment(new Date(time).setMonth(time.getMonth() + i)).format('YYYY-MM');
        // dateOptions = [
        //     ...dateOptions,
        //     {value: date, label: `${date}`},
        // ];
        dateOptions.push(date);
    }
    return dateOptions;
}

export function initFullYearMonth(year) {
    const dateOptions = [];
    const time = new Date(new Date().setFullYear(year, 0));
    for (let i = 0; i <= 11; i++) {
        const date = moment(new Date(time).setMonth(time.getMonth() + i)).format('YYYY-MM');
        dateOptions.push(date);
    }
    return dateOptions;
}

export function sort(arr: Array<number>, begin: number, end: number): Array<number> {
    if (end <= begin) {
        return arr;
    }
    let i = begin;
    let j = end;
    const key = arr[begin];
    while (true) {
        while (true) {
            if (i == j) { break; }
            if (arr[j] < key) {
                const temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
                break;
            }
            j--;
        }
        while (true) {
            if (i == j) { break; }
            if (arr[i] > key) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                break;
            }
            i++;
        }
        if (i == j) {
            break;
        }
    }
    if (end - j > 1) {
        arr = sort(arr, j + 1, end);
    }
    if (i - begin > 1) {
        arr = sort(arr, begin, i);
    }
    return arr;
}
