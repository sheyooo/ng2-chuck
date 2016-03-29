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
                    this.onDislike = new core_1.EventEmitter;
                    this.color = "white";
                    this.img = "http://thecatapi.com/api/images/get?format=src&type=gif";
                }
                JokeComponent.prototype.ngOnInit = function () {
                    this.img += "&v=" + Math.random();
                };
                JokeComponent.prototype.changeColor = function (color) {
                    this.color = color;
                    this.onLike.emit({
                        color: color
                    });
                };
                JokeComponent.prototype.like = function (btn) {
                    $(btn).transition('pulse', '200ms');
                    this.color = "blue";
                };
                JokeComponent.prototype.dislike = function (btn) {
                    var that = this;
                    var func = function () {
                        that.onDislike.emit({
                            joke: that.joke
                        });
                    };
                    $('#chuck' + this.joke.id)
                        .transition({
                        animation: 'fade right out',
                        onComplete: func
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], JokeComponent.prototype, "joke", void 0);
                __decorate([
                    core_1.Input('arr_id'), 
                    __metadata('design:type', Number)
                ], JokeComponent.prototype, "idInArr", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], JokeComponent.prototype, "onLike", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], JokeComponent.prototype, "onDislike", void 0);
                JokeComponent = __decorate([
                    core_1.Component({
                        selector: 'joke',
                        template: "\n\t<div class=\"ui card {{color}}\" [attr.id]=\"'chuck'+joke.id\">\t\t\n\t\t<div class=\"ui two buttons\">\n\t\t\t<button #likeBtn (click)=\"like(likeBtn)\" class=\"ui blue button\">\n\t\t\t\t<i class=\"heart icon\"></i>\n\t\t\t\tLike\n\t\t\t</button>\n\t\t\t<button #dislikeBtn (click)=\"dislike(dislikeBtn)\" class=\"ui grey button\">\n\t\t\t\t<i class=\"trash icon\"></i>\n\t\t\t\tDislike\n\t\t\t</button>\n\t\t</div>\n\t\t<div class=\"image\">\n\t\t\t<img [src]=\"img\" alt=\"Oh wooow~~~ :-|\" />\n\t\t</div>\n\t\t<div class=\"content\">\n\t\t\t<h2>{{joke.joke}}</h2>\n\t\t</div>\n\t</div>",
                        styles: ['h2 {font-weight: 100}']
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