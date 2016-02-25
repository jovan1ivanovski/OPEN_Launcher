webpackJsonp([3,5],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(487);


/***/ },

/***/ 487:
/***/ function(module, exports) {

	var User = (function () {
	    function User() {
	    }
	    return User;
	})();
	exports.User = User;
	var Users = (function () {
	    function Users(objets) {
	        this.users = new Array();
	        for (var key in objets) {
	            var obj = objets[key];
	            var user = new User();
	            for (var prop in obj) {
	                user[prop] = obj[prop];
	            }
	            this.users.push(user);
	        }
	    }
	    return Users;
	})();
	exports.Users = Users;


/***/ }

});
//# sourceMappingURL=models.js.map