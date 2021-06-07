"use strict";
var ToDo = /** @class */ (function () {
    function ToDo(title, description, done) {
        this.title = title;
        this.description = description;
        this.done = done;
        this.createTask();
    }
    ToDo.prototype.createTask = function () {
        return [this.title, this.description, this.done];
    };
    return ToDo;
}());
var task_school = new ToDo('School HW', 'I will do my english homework', false);
console.log(task_school);
