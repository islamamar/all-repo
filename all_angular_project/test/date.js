"use strict";
exports.__esModule = true;
exports.Date = void 0;
var Date = /** @class */ (function () {
    function Date(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    Date.prototype.get_day = function () {
        return this.day;
    };
    Date.prototype.get_year = function () {
        console.log("mmmm");
        console.log(this.year);
        return this.year;
    };
    Date.prototype.get_month = function () {
        return this.month;
    };
    Date.prototype.get_date = function () {
        return this.get_day() + "/" + this.get_month() + " / " + this.get_year();
    };
    Date.prototype.set_day = function (day) {
        if (this.day <= 30)
            this.day = day;
    };
    Date.prototype.set_year = function (year) {
        this.year = year;
    };
    Date.prototype.set_month = function (month) {
        if (this.month <= 12)
            this.month = month;
    };
    Date.prototype.age = function (date1, date2) {
        console.log(date1.year);
        return Math.abs(date1.year - date2.year);
    };
    return Date;
}());
exports.Date = Date;
