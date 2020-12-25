"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(name, hire_date, month) {
        this.name = name;
        this.hire_date = hire_date;
        this.month = month;
    }
    Employee.prototype.get_name = function () {
        return this.name;
    };
    Employee.prototype.get_hire_date = function () {
        return this.hire_date;
    };
    Employee.prototype.get_month = function () {
        return this.month;
    };
    Employee.prototype.get_employee_info = function () {
        return "name : " + this.get_name() + "\n" +
            " hiredate :  " + this.get_hire_date().get_date() + " \n" +
            " month : " + this.get_month();
    };
    Employee.prototype.set_name = function (name) {
        this.name = name;
    };
    Employee.prototype.set_hire_date = function (date) {
        this.hire_date = date;
    };
    Employee.prototype.set_month = function (month_sal) {
        if (month_sal >= 0)
            this.month = month_sal;
    };
    return Employee;
}());
exports.Employee = Employee;
