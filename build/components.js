webpackJsonp([2,5],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(493);
	__webpack_require__(494);
	__webpack_require__(489);
	module.exports = __webpack_require__(485);


/***/ },

/***/ 485:
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
	var UserService_1 = __webpack_require__(486);
	var User_1 = __webpack_require__(487);
	var HomeComponent = (function () {
	    function HomeComponent(userService) {
	        this.userService = userService;
	        this.allUsers = new Array();
	        this.newUser = new User_1.User();
	        this.data = this.getAllUsers();
	        this.newUser.name = 'Igor';
	        this.newUser.profileImg = 'Picajzla';
	    }
	    HomeComponent.prototype.getAllUsers = function () {
	        var _this = this;
	        this.userService.getAllUsers()
	            .subscribe(function (data) { return _this.allUsers = data; }, function (err) { return console.log(err); });
	    };
	    HomeComponent.prototype.addUser = function (user) {
	        var _this = this;
	        this.userService.addUser(user)
	            .subscribe(function (data) { return _this.allUsers = data; }, function (err) { return console.log(err); });
	    };
	    HomeComponent.prototype.deleteUser = function (name) {
	        var _this = this;
	        this.userService.deleteUser(name)
	            .subscribe(function (data) { return _this.allUsers = data; }, function (err) { return console.log(err); });
	    };
	    HomeComponent = __decorate([
	        core_1.Component({
	            selector: 'home',
	            templateUrl: "./app/views/home.html"
	        }), 
	        __metadata('design:paramtypes', [UserService_1.UserService])
	    ], HomeComponent);
	    return HomeComponent;
	})();
	exports.HomeComponent = HomeComponent;


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
	var User_1 = __webpack_require__(487);
	var GlobalService_1 = __webpack_require__(488);
	var UserService = (function () {
	    function UserService(http, globalService) {
	        this.http = http;
	        this.globalService = globalService;
	    }
	    UserService.prototype.getAllUsers = function () {
	        return this.http.get(this.globalService.URL_GETALLUSERS)
	            .map(function (res) {
	            var response = new User_1.Users(res.json());
	            return response.users;
	        });
	    };
	    UserService.prototype.getUserByName = function (name) {
	        return this.http.get(this.globalService.URL_GETUSER(name))
	            .map(function (res) {
	            var response = new User_1.Users(res.json());
	            return response.users;
	        });
	    };
	    UserService.prototype.addUser = function (user) {
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        return this.http.post(this.globalService.URL_ADDUSER, JSON.stringify(user), { headers: headers })
	            .map(function (res) {
	            var response = new User_1.Users(res.json());
	            return response.users;
	        });
	    };
	    UserService.prototype.deleteUser = function (name) {
	        return this.http.get(this.globalService.URL_DELETEUSER(name))
	            .map(function (res) {
	            var response = new User_1.Users(res.json());
	            return response.users;
	        });
	    };
	    UserService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http, GlobalService_1.GlobalService])
	    ], UserService);
	    return UserService;
	})();
	exports.UserService = UserService;
	exports.userServiceInjectables = [
	    core_1.bind(UserService).toClass(UserService)
	];


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


/***/ },

/***/ 488:
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
	var URL = 'http://localhost:3000';
	var GlobalService = (function () {
	    function GlobalService() {
	        this.URL_UPLOAD_PICTURE = URL + "/api/upload";
	        this.URL_GETALLUSERS = URL + "/getAllUsers";
	        this.URL_ADDUSER = URL + "/addUser";
	    }
	    GlobalService.prototype.URL_GETUSER = function (username) { return URL + "/getAllUsers/" + username; };
	    GlobalService.prototype.URL_DELETEUSER = function (username) { return URL + "/deleteUser/" + username; };
	    GlobalService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], GlobalService);
	    return GlobalService;
	})();
	exports.GlobalService = GlobalService;
	exports.globalServiceInjectables = [
	    core_1.bind(GlobalService).toClass(GlobalService)
	];


/***/ },

/***/ 489:
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
	var UploadPictureService_1 = __webpack_require__(490);
	var UploadPictureComponent = (function () {
	    function UploadPictureComponent(uploadPictureService) {
	        this.uploadPictureService = uploadPictureService;
	    }
	    UploadPictureComponent.prototype.uploadFile = function () {
	        this.uploadPictureService.upload(this.selectedFiles[0]);
	    };
	    UploadPictureComponent.prototype.onChange = function (event) {
	        this.selectedFiles = event.srcElement.files;
	    };
	    UploadPictureComponent = __decorate([
	        core_1.Component({
	            selector: 'uploadPicture',
	            templateUrl: "./app/views/uploadPicture.html"
	        }), 
	        __metadata('design:paramtypes', [UploadPictureService_1.UploadPictureService])
	    ], UploadPictureComponent);
	    return UploadPictureComponent;
	})();
	exports.UploadPictureComponent = UploadPictureComponent;


/***/ },

/***/ 490:
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
	var GlobalService_1 = __webpack_require__(488);
	var multipart_item_1 = __webpack_require__(491);
	var multipart_uploader_1 = __webpack_require__(492);
	var UploadPictureService = (function () {
	    function UploadPictureService(http, globalService) {
	        this.http = http;
	        this.globalService = globalService;
	        this.uploader = new multipart_uploader_1.MultipartUploader({ url: this.globalService.URL_UPLOAD_PICTURE });
	        this.multipartItem = new multipart_item_1.MultipartItem(this.uploader);
	    }
	    UploadPictureService.prototype.upload = function (file) {
	        if (this.multipartItem == null) {
	            this.multipartItem = new multipart_item_1.MultipartItem(this.uploader);
	        }
	        if (this.multipartItem.formData == null)
	            this.multipartItem.formData = new FormData();
	        this.multipartItem.formData.append("userPhoto", file);
	        this.multipartItem.withCredentials = false;
	        this.multipartItem.callback = this.uploadCallback;
	        this.multipartItem.upload();
	    };
	    UploadPictureService.prototype.uploadCallback = function (data) {
	        if (data) {
	            console.debug("uploadCallback() upload file success.");
	        }
	        else {
	            console.error("uploadCallback() upload file false.");
	        }
	    };
	    UploadPictureService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http, GlobalService_1.GlobalService])
	    ], UploadPictureService);
	    return UploadPictureService;
	})();
	exports.UploadPictureService = UploadPictureService;
	exports.uploadPictureServiceInjectables = [
	    core_1.bind(UploadPictureService).toClass(UploadPictureService)
	];


/***/ },

/***/ 491:
/***/ function(module, exports) {

	var MultipartItem = (function () {
	    function MultipartItem(uploader) {
	        this.uploader = uploader;
	        this.alias = 'file';
	        this.url = '/';
	        this.method = 'POST';
	        this.headers = [];
	        this.withCredentials = true;
	        this.formData = null;
	        this.isReady = false;
	        this.isUploading = false;
	        this.isUploaded = false;
	        this.isSuccess = false;
	        this.isCancel = false;
	        this.isError = false;
	        this.progress = 0;
	        this.index = null;
	        this.callback = null;
	    }
	    MultipartItem.prototype.upload = function () {
	        try {
	            console.debug("multipart-item.ts & upload() ==>.");
	            this.uploader.uploadItem(this);
	        }
	        catch (e) {
	        }
	    };
	    MultipartItem.prototype.init = function () {
	        this.isReady = false;
	        this.isUploading = false;
	        this.isUploaded = false;
	        this.isSuccess = false;
	        this.isCancel = false;
	        this.isError = false;
	        this.progress = 0;
	        this.formData = null;
	        this.callback = null;
	    };
	    MultipartItem.prototype.onBeforeUpload = function () {
	    };
	    MultipartItem.prototype.onProgress = function (progress) {
	    };
	    MultipartItem.prototype.onSuccess = function (response, status, headers) {
	    };
	    MultipartItem.prototype.onError = function (response, status, headers) {
	    };
	    MultipartItem.prototype.onCancel = function (response, status, headers) {
	    };
	    MultipartItem.prototype.onComplete = function (response, status, headers) {
	        this.callback(response);
	        this.init();
	    };
	    MultipartItem.prototype._onBeforeUpload = function () {
	        this.isReady = true;
	        this.isUploading = true;
	        this.isUploaded = false;
	        this.isSuccess = false;
	        this.isCancel = false;
	        this.isError = false;
	        this.progress = 0;
	        this.onBeforeUpload();
	    };
	    MultipartItem.prototype._onProgress = function (progress) {
	        this.progress = progress;
	        this.onProgress(progress);
	    };
	    MultipartItem.prototype._onSuccess = function (response, status, headers) {
	        this.isReady = false;
	        this.isUploading = false;
	        this.isUploaded = true;
	        this.isSuccess = true;
	        this.isCancel = false;
	        this.isError = false;
	        this.progress = 100;
	        this.index = null;
	        this.onSuccess(response, status, headers);
	    };
	    MultipartItem.prototype._onError = function (response, status, headers) {
	        this.isReady = false;
	        this.isUploading = false;
	        this.isUploaded = true;
	        this.isSuccess = false;
	        this.isCancel = false;
	        this.isError = true;
	        this.progress = 0;
	        this.index = null;
	        this.onError(response, status, headers);
	        this.callback(response);
	    };
	    MultipartItem.prototype._onCancel = function (response, status, headers) {
	        this.isReady = false;
	        this.isUploading = false;
	        this.isUploaded = false;
	        this.isSuccess = false;
	        this.isCancel = true;
	        this.isError = false;
	        this.progress = 0;
	        this.index = null;
	        this.onCancel(response, status, headers);
	    };
	    MultipartItem.prototype._onComplete = function (response, status, headers) {
	        this.onComplete(response, status, headers);
	    };
	    MultipartItem.prototype._prepareToUploading = function () {
	        this.isReady = true;
	    };
	    return MultipartItem;
	})();
	exports.MultipartItem = MultipartItem;


/***/ },

/***/ 492:
/***/ function(module, exports) {

	var MultipartUploader = (function () {
	    function MultipartUploader(options) {
	        this.options = options;
	        this.isUploading = false;
	        this.progress = 0;
	        this.isHTML5 = true;
	        this.url = options.url;
	        this.authToken = options.authToken;
	    }
	    MultipartUploader.prototype.uploadItem = function (item) {
	        console.debug("multipart-uploader.ts & uploadItem() ==>.");
	        if (this.isUploading) {
	            console.debug("multipart-uploader.ts & uploadItem() uploader is uploading now.");
	            return;
	        }
	        this.isUploading = true;
	        this._xhrTransport(item);
	    };
	    MultipartUploader.prototype._onBeforeUploadItem = function (item) {
	        item._onBeforeUpload();
	    };
	    MultipartUploader.prototype._parseHeaders = function (headers) {
	        var parsed = {}, key, val, i;
	        if (!headers) {
	            return parsed;
	        }
	        headers.split('\n').map(function (line) {
	            i = line.indexOf(':');
	            key = line.slice(0, i).trim().toLowerCase();
	            val = line.slice(i + 1).trim();
	            if (key) {
	                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	            }
	        });
	        return parsed;
	    };
	    MultipartUploader.prototype._transformResponse = function (response, headers) {
	        return response;
	    };
	    MultipartUploader.prototype._isSuccessCode = function (status) {
	        return (status >= 200 && status < 300) || status === 304;
	    };
	    MultipartUploader.prototype._render = function () {
	    };
	    MultipartUploader.prototype._xhrTransport = function (item) {
	        var _this = this;
	        console.debug("multipart-uploader.ts & _xhrTransport() ==>.");
	        var xhr = item._xhr = new XMLHttpRequest();
	        this._onBeforeUploadItem(item);
	        xhr.upload.onprogress = function (event) {
	        };
	        xhr.onload = function () {
	            console.debug("multipart-uploader.ts & _xhrTransport.onload() ==>");
	            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
	            var response = _this._transformResponse(xhr.response, headers);
	            var gist = _this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
	            var method = '_on' + gist + 'Item';
	            _this[method](item, response, xhr.status, headers);
	            _this._onCompleteItem(item, response, xhr.status, headers);
	        };
	        xhr.onerror = function () {
	            console.debug("multipart-uploader.ts & _xhrTransport.onerror() ==>");
	            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
	            var response = _this._transformResponse(xhr.response, headers);
	            _this._onErrorItem(item, response, xhr.status, headers);
	        };
	        xhr.onabort = function () {
	            console.debug("multipart-uploader.ts & _xhrTransport.onabort() ==>");
	            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
	            var response = _this._transformResponse(xhr.response, headers);
	            _this._onCompleteItem(item, response, xhr.status, headers);
	        };
	        xhr.open(item.method, this.url, true);
	        xhr.withCredentials = item.withCredentials;
	        if (this.authToken) {
	            xhr.setRequestHeader('Authorization', this.authToken);
	        }
	        console.debug("multipart-uploader.ts & _xhrTransport() send...");
	        xhr.send(item.formData);
	        this._render();
	    };
	    MultipartUploader.prototype.onSuccessItem = function (item, response, status, headers) {
	    };
	    MultipartUploader.prototype.onErrorItem = function (item, response, status, headers) {
	        this.isUploading = false;
	    };
	    MultipartUploader.prototype.onCancelItem = function (item, response, status, headers) {
	    };
	    MultipartUploader.prototype.onCompleteItem = function (item, response, status, headers) {
	    };
	    MultipartUploader.prototype._onSuccessItem = function (item, response, status, headers) {
	        item._onSuccess(response, status, headers);
	        this.onSuccessItem(item, response, status, headers);
	    };
	    MultipartUploader.prototype._onErrorItem = function (item, response, status, headers) {
	        console.debug("multipart-uploader.ts & _onErrorItem() ==>" + " Error status:" + status);
	        item._onError(response, status, headers);
	        this.onErrorItem(item, response, status, headers);
	    };
	    MultipartUploader.prototype._onCancelItem = function (item, response, status, headers) {
	        item._onCancel(response, status, headers);
	        this.onCancelItem(item, response, status, headers);
	    };
	    MultipartUploader.prototype._onCompleteItem = function (item, response, status, headers) {
	        item._onComplete(response, status, headers);
	        this.onCompleteItem(item, response, status, headers);
	        this.isUploading = false;
	        this._render();
	    };
	    return MultipartUploader;
	})();
	exports.MultipartUploader = MultipartUploader;


/***/ },

/***/ 493:
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
	var SOURCES = [
	    { "path": "./app/assets/images/fish.png" },
	    { "path": "./app/assets/images/owl.png" },
	    { "path": "./app/assets/images/lion.png" },
	    { "path": "./app/assets/images/penguin.png" }
	];
	var RegisterComponent = (function () {
	    function RegisterComponent() {
	        this.paths = SOURCES;
	    }
	    RegisterComponent.prototype.onSelect = function (src) { this.selectedPath = src; };
	    RegisterComponent = __decorate([
	        core_1.Component({
	            templateUrl: './app/views/register.html'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], RegisterComponent);
	    return RegisterComponent;
	})();
	exports.RegisterComponent = RegisterComponent;


/***/ },

/***/ 494:
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
	var router_1 = __webpack_require__(339);
	var LoginComponent = (function () {
	    function LoginComponent() {
	    }
	    LoginComponent = __decorate([
	        core_1.Component({
	            selector: 'login',
	            directives: [router_1.RouterLink],
	            templateUrl: "./app/views/login.html"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], LoginComponent);
	    return LoginComponent;
	})();
	exports.LoginComponent = LoginComponent;


/***/ }

});
//# sourceMappingURL=components.js.map