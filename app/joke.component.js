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
    var JokeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            JokeComponent = (function () {
                function JokeComponent() {
                    this.onLike = new core_1.EventEmitter;
                    this.color = "white";
                }
                JokeComponent.prototype.changeColor = function (color) {
                    this.color = color;
                    this.onLike.emit({
                        color: color
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], JokeComponent.prototype, "joke", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], JokeComponent.prototype, "onLike", void 0);
                JokeComponent = __decorate([
                    core_1.Component({
                        selector: 'joke',
                        template: "\n\t<div class=\"ui card {{color}}\">\t\t\n\t\t<div class=\"ui two buttons\">\n\t\t\t<button (click)=\"changeColor('red')\" class=\"ui blue button\">Like</button>\n\t\t\t<button (click)=\"changeColor('black')\" class=\"ui black button\">Dislike</button>\n\t\t</div>\n\t\t<p class=\"content\">\n\t\t\t{{joke.joke}}\n\t\t</p>\t\n\t</div>",
                        styles: ["p {font-size: 20px}"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], JokeComponent);
                return JokeComponent;
            }());
            exports_1("JokeComponent", JokeComponent);
        }
    }
});
//# sourceMappingURL=joke.component.js.map