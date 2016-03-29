System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', './joke.component'], function(exports_1, context_1) {
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
    var core_1, http_1, http_2, Observable_1, joke_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (joke_component_1_1) {
                joke_component_1 = joke_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(http) {
                    this.http = http;
                    this._apiBase = 'http://api.icndb.com/jokes/';
                    this.chucks = [];
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._observable = this.http.get(this._apiBase + 'random/8?escape=javascript')
                        .retryWhen(function (err) { return err.delay(2000); })
                        .catch(function (error) {
                        // in a real world app, we may send the error to some remote logging infrastructure
                        // instead of just logging it to the console
                        console.error(error);
                        return Observable_1.Observable.throw(error.json().error || 'Server error');
                    });
                    this._observable.subscribe(function (jokes) { return _this.insert(jokes.json().value); });
                };
                AppComponent.prototype.insert = function (jokes) {
                    for (var i = 0; i < jokes.length; i++) {
                        this.chucks.push(jokes[i]);
                    }
                };
                AppComponent.prototype.loadMore = function () {
                    var _this = this;
                    this._observable
                        .subscribe(function (jokes) { return _this.insert(jokes.json().value); });
                };
                AppComponent.prototype.removeIt = function (evt) {
                    var id = this.chucks.findIndex(function (j) { return j == evt.joke; });
                    this.chucks.splice(id, 1);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'chuck',
                        template: "\n    <h1 class=\"ui center aligned header\">Chuck Norris and Cats \u2764\u2764</h1>\n    <div class=\"ui grid centered container\">\n    \t<div *ngIf=\"! chucks.length > 0\">\n\t\t\tLoading lists of Chuck Norris...\n    \t</div>\n    \t<joke class=\"ui row\" *ngFor=\"#chuck of chucks\" [joke]=\"chuck\" [arr_id]=\"index\" (onDislike)=\"removeIt($event)\"></joke>\n    \t\n    \t<button id=\"loadMoreBtn\" (click)=\"loadMore()\" class=\"ui labeled icon button\">\n\t      <i class=\"heart icon\"></i>\n\t      Load some more...\n\t    </button>\n    </div>",
                        styles: ["#loadMoreBtn { position : fixed; bottom: 10px; left: 10px; opacity: 0.8; transition: all 0.5s;}\n    \t\t\t#loadMoreBtn:hover { opacity: 1}"],
                        providers: [http_2.Http, http_1.HTTP_PROVIDERS],
                        directives: [joke_component_1.JokeComponent]
                    }), 
                    __metadata('design:paramtypes', [http_2.Http])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map