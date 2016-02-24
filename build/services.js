webpackJsonp([3,4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(486);


/***/ },

/***/ 486:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(246);
	var http_1 = __webpack_require__(364);
	var URL = 'http://localhost:3000';
	var UserService = (function () {
	    function UserService(http) {
	        this.http = http;
	    }
	    UserService.prototype.getAllUsers = function () {
	        return this.http.get(URL + '/getAllUsers').map(function (res) { return res.json(); });
	    };
	    UserService.prototype.addUser = function (name, profileImg) {
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        var data = JSON.stringify({ name: name, profileImg: profileImg });
	        return this.http.post(URL + '/addUser', data, { headers: headers }).map(function (res) { return res.json(); });
	    };
	    UserService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], UserService);
	    return UserService;
	})();
	exports.UserService = UserService;
	exports.userServiceInjectables = [
	    core_1.bind(UserService).toClass(UserService)
	];


/***/ }

});
//# sourceMappingURL=services.js.map