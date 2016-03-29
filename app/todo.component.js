System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var CellComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CellComponent = (function () {
                function CellComponent() {
                }
                __decorate([
                    core_1.Input('todo'), 
                    __metadata('design:type', Object)
                ], CellComponent.prototype, "todo", void 0);
                CellComponent = __decorate([
                    core_1.Component({
                        selector: 'todo',
                        template: "\n\t<!-- <div class=\"ui checkbox\"> -->\n\t{{obj}}\n\t  <input type=\"checkbox\" [(ngModel)]=\"todo.done\" >\n\t  <label>{{ todo.task }} {{todo.done ? '[Completed]' : ''}}</label> \n\t<!-- </div> -->"
                    }), 
                    __metadata('design:paramtypes', [])
                ], CellComponent);
                return CellComponent;
            }());
            exports_1("CellComponent", CellComponent);
        }
    }
});
//# sourceMappingURL=todo.component.js.map