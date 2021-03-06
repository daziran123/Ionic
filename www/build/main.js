webpackJsonp([0],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the SettingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SettingsProvider = (function () {
    function SettingsProvider(http) {
        this.http = http;
        this.theme = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["BehaviorSubject"]('light-theme');
    }
    SettingsProvider.prototype.setActiveTheme = function (val) {
        this.theme.next(val);
    };
    SettingsProvider.prototype.getActiveTheme = function () {
        return this.theme.asObservable();
    };
    SettingsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], SettingsProvider);
    return SettingsProvider;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 192;

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = (function () {
    function RestProvider(http) {
        // console.log('Hello RestProvider Provider');
        this.http = http;
        //feed
        this.apiUrlFeeds = 'https://imoocqa.gugujiankong.com/api/feeds/get';
        //account
        this.apiUrlRegister = 'https://imoocqa.gugujiankong.com/api/account/register';
        this.apiUrlLogin = 'https://imoocqa.gugujiankong.com/api/account/login';
        this.apiUrlUserInfo = 'https://imoocqa.gugujiankong.com/api/account/userinfo';
        this.apiUrlUpdateNickName = 'https://imoocqa.gugujiankong.com/api/account/updatenickname';
        this.apiGetUserQuestionList = 'https://imoocqa.gugujiankong.com/api/account/getuserquestionlist';
        //question
        this.apiUrlQuestionSave = 'https://imoocqa.gugujiankong.com/api/question/save';
        this.apiUrlQuestionList = 'https://imoocqa.gugujiankong.com/api/question/list?index=1&number=10';
        this.apiUrlGetQuestion = 'https://imoocqa.gugujiankong.com/api/question/get';
        this.apiUrlAnswer = 'https://imoocqa.gugujiankong.com/api/question/answer';
        this.apiUrlGetQuestionWithUser = 'https://imoocqa.gugujiankong.com/api/question/getwithuser';
        this.apiUrlSaveFavourite = 'https://imoocqa.gugujiankong.com/api/question/savefavourite';
        /**
         *根据用户的手机号码和密码进行登陆
         * 注意安全性方面要有详细的设计和处理，
         * //密码的传递应该在传递参数之前经行加密，
         * 并且服务端也要做相应的处理
         * @param {*} mobile
         * @param {*} password
         * @returns {Observable<string[]>}
         * @memberof RestProvider
         */
        this.apiUrlUserNotifications = "https://imoocqa.gugujiankong.com/api/account/usernotifications";
    }
    RestProvider.prototype.login = function (mobile, password) {
        return this.getUrlReturn(this.apiUrlLogin + "?mobile=" + mobile + "&password=" + password);
    };
    // login 方法会返回observable 的 一个对象，就会调用 this.getUrlReturn的方法
    // 然后做一些 url 的拼接，两个参数是前边传递进来的
    RestProvider.prototype.register = function (mobile, nickname, password) {
        return this.getUrlReturn(this.apiUrlRegister + "?mobile=" + mobile + "&nickname=" + nickname + "&password=" + password);
    };
    RestProvider.prototype.getUserInfo = function (userId) {
        return this.getUrlReturn(this.apiUrlUserInfo + "?userId=" + userId);
    };
    RestProvider.prototype.updateNickName = function (userId, nickname) {
        return this.getUrlReturn(this.apiUrlUpdateNickName + "?userid=" + userId + "&nickname" + nickname);
    };
    RestProvider.prototype.saveQuestion = function (userId, title, content) {
        return this.getUrlReturn(this.apiUrlQuestionSave + "?userid=" + userId + "&title=" + title + "&content=" + content);
    };
    RestProvider.prototype.saveFavourite = function (questionId, userId) {
        return this.getUrlReturn(this.apiUrlSaveFavourite + "?questionid=" + questionId + "&userid=" + userId);
    };
    /**
     *获取问题详情
     *
     * @param {*} id
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.getQuestion = function (id) {
        return this.getUrlReturn(this.apiUrlGetQuestion + "?id=" + id);
    };
    /**
     *获取问题的详情，传递userid 获取到当前用户有没有关注此问题
     *
     * @param {*} questionId
     * @param {*} userId
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.getQuestionWithUser = function (questionId, userId) {
        return this.getUrlReturn(this.apiUrlGetQuestionWithUser + "?id=" + questionId + "&userid=" + userId);
    };
    //feeds  被关注了，被回答了，会通知你 
    RestProvider.prototype.getFeeds = function () {
        return this.getUrlReturn(this.apiUrlFeeds);
    };
    /**
     *获取用户的提醒消息
     *
     * @param {*} userId
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.getUserNotifications = function (userId) {
        return this.getUrlReturn(this.apiUrlUserNotifications + "?userid=" + userId);
    };
    /**
     *
     *获取所有的新问题
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.getQuestions = function () {
        return this.getUrlReturn(this.apiUrlQuestionList);
    };
    /**
     *获取用户的相关问题列表
     *
     * @param {*} userId
     * @param {*} type  question/answer/favourite
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.getUserQuestionList = function (userId, type) {
        return this.getUrlReturn(this.apiGetUserQuestionList + "?userid=" + userId + "&type=" + type);
    };
    /**
     *h回到问题接口
     *
     * @param {*} userId
     * @param {*} questionId
     * @param {*} content
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.answer = function (userId, questionId, content) {
        return this.getUrlReturn(this.apiUrlAnswer + "?userid" + userId + "&questionid=" + questionId + "&content=" + content);
    };
    /*
    /*   全局获取HTTP 请求方法
    工号：大力
    *  @private
    *  @param{string}url
     @return {observable<string>[]}
       @memberof RestProvider
    */
    RestProvider.prototype.getUrlReturn = function (url) {
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     *处理接口返回的数据，处理成JSON 格式
     *
     * @private
     * @param {Response} res
     * @returns
     * @memberof RestProvider
     */
    RestProvider.prototype.extractData = function (res) {
        var body = res.json();
        return JSON.parse(body) || {};
    };
    /**
     *处理请求中的错误，考虑了各种情况的错误处理并在console 中显示erro
     *
     * @private
     * @param {(Response| any)} error
     * @returns
     * @memberof RestProvider
     */
    RestProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + "-" + (error.statusText || '') + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errMsg);
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_chat__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__discovery_discovery__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notification_notification__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__more_more__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage() {
        this.tabHome = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tabDiscovery = __WEBPACK_IMPORTED_MODULE_3__discovery_discovery__["a" /* DiscoveryPage */];
        this.tabChat = __WEBPACK_IMPORTED_MODULE_1__chat_chat__["a" /* ChatPage */];
        this.tabNotification = __WEBPACK_IMPORTED_MODULE_4__notification_notification__["a" /* NotificationPage */];
        this.tabMore = __WEBPACK_IMPORTED_MODULE_5__more_more__["a" /* MorePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"F:\ck\project\Ionic\04-01\src\pages\tabs\tabs.html"*/'<ion-tabs selectedIndex="4">\n  <ion-tab [root]="tabHome" tabTitle="首页" tabIcon="list-box"></ion-tab>\n  <ion-tab [root]="tabDiscovery" tabTitle="发现" tabIcon="navigate"></ion-tab>\n  <ion-tab [root]="tabChat" tabTitle="聊天" tabIcon="chatbubbles"></ion-tab>\n  <ion-tab [root]="tabNotification" tabTitle="通知" tabIcon="notifications"></ion-tab>\n  <ion-tab [root]="tabMore" tabTitle="更多" tabIcon="menu"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"F:\ck\project\Ionic\04-01\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatdetails_chatdetails__ = __webpack_require__(239);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatPage = (function () {
    function ChatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //在此处可以直接从你的api 接口或者其他方法实现用户列表的定义。
        this.userinfo = {
            userid: '123321',
            username: '魔女'
        };
        this.ChatdetailsPage = __WEBPACK_IMPORTED_MODULE_2__chatdetails_chatdetails__["a" /* ChatdetailsPage */];
        //  this.ChatdetailsPage是 ChatdetailsPage:any; 定义，等于的是导入的
        //   import { ChatdetailsPage } from '../chatdetails/chatdetails';
    }
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"F:\ck\project\Ionic\04-01\src\pages\chat\chat.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>chat</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n<ion-list>\n    <ion-item [navPush]="ChatdetailsPage" [navParams]="userinfo">\n        <!-- [navParams]="userinfo" userinfo 后台定义，userinfo:objet;  在\n          constructor 构造 直接在api 接口或者其他的方法实现用户列表的定义 \n            this.userinfo={\n              userid:"123321",\n              username:\'名字\'\n            }传参方式 -->\n<ion-avatar item-left>\n  <img src="">\n</ion-avatar>\n    <h2>魔女</h2>\n    <p>给大家展示聊天软件的开发</p>\n  </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"F:\ck\project\Ionic\04-01\src\pages\chat\chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_chatservice_chatservice__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// @IonicPage()
var ChatdetailsPage = (function () {
    // 定义
    function ChatdetailsPage(navCtrl, navParams, rest, storage, event, chatservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rest = rest;
        this.storage = storage;
        this.event = event;
        this.chatservice = chatservice;
        this.isOpenEmojiPicker = false;
        this.messageList = []; // =[] 意思是初始的是空 
        this.chatUserName = navParams.get('username');
        // 获取 userinfo中 username 界面传递过来的值,每一步开发要检查以下
        this.chatUserId = navParams.get('userid'); //取得和谁聊天的userid
    }
    // 应该页面进来的时候,继续往下滚动到底部
    ChatdetailsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        //我自己用户信息的获取
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                _this.rest.getUserInfo(val)
                    .subscribe(function (userinfo) {
                    _this.userId = '140000198202211138';
                    _this.userName = userinfo["UserNickName"];
                    _this.userImgUrl = userinfo["UserHeadface"] + "?" + (new Date()).valueOf();
                }, function (error) { return _this.errorMessage = error; });
            }
        });
        this.getMessages()
            .then(function () {
            _this.scrollToBottom();
        });
        //听取消息的发布
        this.event.subscribe('chat.received', function (msg, time) {
            _this.messageList.push(msg);
            _this.scrollToBottom();
        });
    };
    // 定义一个 getMessages 方法 调用刚才chatservice定义的方法
    // 注意import 和 在 constructor()
    //
    /**
     *调用service里面的方法进行属性的赋值
     *
     * @returns
     * @memberof ChatdetailsPage
     */
    ChatdetailsPage.prototype.getMessages = function () {
        var _this = this;
        return this.chatservice.getMessageList()
            .then(function (res) {
            _this.messageList = res; //给messageList 赋值  赋值为返货的值 
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    // 切换表情组件
    ChatdetailsPage.prototype.switchEmojiPicker = function () {
        this.isOpenEmojiPicker = !this.isOpenEmojiPicker;
    };
    ChatdetailsPage.prototype.scrollToBottom = function () {
        var _this = this;
        // 滚动实现方法，一会来实现
        setTimeout(function () {
            if (_this.content.scrollToBottom) {
                _this.content.scrollToBottom();
            }
        }, 400);
    };
    ChatdetailsPage.prototype.getMessageIndex = function (id) {
        return this.messageList.findIndex(function (e) { return e.messageId === id; });
    };
    //  发送信息逻辑
    ChatdetailsPage.prototype.sendMessage = function () {
        var _this = this;
        if (!this.editorMessage.trim())
            return;
        var id = Date.now().toString();
        var messageSend = {
            messageId: id,
            userId: this.userId,
            username: this.userName,
            userImgUrl: this.userImgUrl,
            toUserId: this.chatUserId,
            time: Date.now(),
            message: this.editorMessage,
            status: 'pending'
        };
        this.messageList.push(messageSend);
        this.scrollToBottom();
        this.editorMessage = '';
        if (!this.isOpenEmojiPicker) {
            this.messageInput.setFocus();
        }
        //发送消息并改变消息的状态
        this.chatservice.sendMessage(messageSend)
            .then(function () {
            var index = _this.getMessageIndex(id);
            if (index !== -1) {
                _this.messageList[index].status = 'success';
            }
        });
    };
    ChatdetailsPage.prototype.ionViewWillLeave = function () {
        // 告诉我要走了 不听了
        this.event.unsubscribe('chat.received');
    };
    ChatdetailsPage.prototype.focus = function () {
        this.isOpenEmojiPicker = false;
        this.content.resize();
        this.scrollToBottom();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], ChatdetailsPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('chatInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* TextInput */])
    ], ChatdetailsPage.prototype, "messageInput", void 0);
    ChatdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-chatdetails',template:/*ion-inline-start:"F:\ck\project\Ionic\04-01\src\pages\chatdetails\chatdetails.html"*/'\n<ion-header>\n  <ion-navbar>\n      <!-- <ion-title>此处名字显示，是和对方聊天的动态名字，所以要绑定{{}}</ion-title> -->\n      <ion-title>{{chatUserName}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n<div class="message-wrap">\n   <!-- 右边消息 -->\n    <!-- 小节回顾，1.思考如何动态控制 聊天窗口动态判断，2.引入了css -->\n   <!-- 通过控制right 和left 控制左右  如何动态控制-->\n\n   <div class="message" *ngFor="let m of messageList"\n   [class.left]="m.userId===chatUserId"\n   [class.right]="m.userId===userId" \n  > \n   <!-- 动态调整位置 -->\n    <img [src]="m.userImgUrl" class="user-img">\n    <ion-spinner name="dots" *ngIf="m.status===\'pending\'"></ion-spinner>\n    <div class="msg-detail">\n    <div class="msg-info">  \n      <p>{{m.username}}&nbsp;{{m.time | relativetime}}</p>\n    </div>\n    <div class="msg-content">\n      <p class="line-breaker">{{m.message}}</p>\n    </div>\n  </div>\n  </div>\n  </div>\n    <!-- <div class="message right"> 要用ngfor 来进行循环了\n      <img src="" class="user-img">\n      <div class="msg-detail">\n      <div class="msg-info">  \n        <p>大力&nbsp;1分钟前</p>\n      </div>\n      <div class="msg-content">\n        <p class="line-breaker">这是消息的内容</p>\n      </div>\n    </div>\n    </div> -->\n\n</ion-content>\n<!-- 底部放footer里，加一些样式 -->\n<ion-footer no-border [style.height]="isOpenEmojiPicker?\'255px\':\'55px\'">\n<!-- grid  flex 布局，row  一行  col-12 行布局 -->\n<ion-grid class="input-wrap">\n    <!-- ion-row一行  col-12 算一行可以切分 -->\n  <ion-row> \n  <ion-col col-2>\n   <button ion-button clear icon-only item-right (click)="switchEmojiPicker()">\n     <ion-icon name="md-happy"></ion-icon>\n    </button>\n  </ion-col>\n  <ion-col col-8>\n    <ion-textarea #chatInput [(ngModel)]="editorMessage" \n    (keyup.enter)="sendMessage()" \n    (focus)="focus()"\n    placeholder="请输入内容"></ion-textarea>\n  </ion-col>\n  <ion-col col-2>\n    <button ion-button clear ion-only item-right (click)="sendMessage()">\n      <ion-icon name="send"></ion-icon>\n    </button>\n\n  </ion-col>\n  </ion-row>\n</ion-grid>\n<emojipicker *ngIf="isOpenEmojiPicker"></emojipicker>\n</ion-footer>\n'/*ion-inline-end:"F:\ck\project\Ionic\04-01\src\pages\chatdetails\chatdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_2__Ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_chatservice_chatservice__["a" /* ChatserviceProvider */]])
    ], ChatdetailsPage);
    return ChatdetailsPage;
}());

//# sourceMappingURL=chatdetails.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ChatMessage */
/* unused harmony export UserInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { HttpClient } from '@angular/common/http';

//聊天信息的属性
var ChatMessage = (function () {
    function ChatMessage() {
    }
    return ChatMessage;
}());

//用户信息属性
var UserInfo = (function () {
    function UserInfo() {
    }
    return UserInfo;
}());

var ChatserviceProvider = (function () {
    function ChatserviceProvider(http, event) {
        this.http = http;
        this.event = event;
    }
    /**
     *获取消息列表
     *从Api 获取或者从模拟的JSON获取
     * @returns {Promise<ChatMessage[]>}
     * @memberof ChatserviceProvider
     */
    ChatserviceProvider.prototype.getMessageList = function () {
        var url = '../../assets/mock/msg-list.json';
        return this.http.get(url) //从json里边获得url
            .toPromise() //
            .then(function (response) { return response.json().array; }) // json 强制转换成数组，chatMessage[]
            .catch(function (error) { return Promise.reject(error || '错误信息'); }); //异常捕获返回告诉调用的地方，异常信息
    };
    ChatserviceProvider.prototype.sendMessage = function (message) {
        var _this = this;
        return new Promise(function (resolve) { return setTimeout(function () {
            resolve(message);
        }, Math.random() * 1000); })
            .then(function () {
            // 发出去之后模拟发送消息
            _this.mockNewMessage(message);
        });
    };
    /**
     *模拟对方回复了一个消息
     这里要思考：前台如何即时地接受这个消息
     *
     * @param {*} message
     * @memberof ChatserviceProvider
     */
    ChatserviceProvider.prototype.mockNewMessage = function (message) {
        var _this = this;
        var id = Date.now().toString();
        var messageSend = {
            messageId: id,
            userId: '123321',
            username: '魔女',
            userImgUrl: 'http://img.mukewang.com/user/57a322f00001e4ae02560256-40-40.jpg',
            toUserId: message.userId,
            time: Date.now(),
            message: '你是不是给我发送了[' + message.message + ']?',
            status: 'success'
        };
        //进行消息的发布，类似大喇叭经行广播
        setTimeout(function () {
            _this.event.publish('chat.received', messageSend, Date.now());
        }, Math.random() * 1000);
    };
    ChatserviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */]])
    ], ChatserviceProvider);
    return ChatserviceProvider;
}());

//# sourceMappingURL=chatservice.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_question__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_baseui__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__details_details__ = __webpack_require__(64);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import{ ChatPage} from '../chat/chat';
var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage(navCtrl, modalCtrl, loadingCtrl, rest) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.modalCtrl = modalCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.rest = rest;
        return _this;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.getFeeds();
    };
    HomePage.prototype.gotoQuestion = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__question_question__["a" /* QuestionPage */]);
        modal.present();
    };
    /**
     *选择指定的tabs
     *
     * @memberof HomePage
     */
    HomePage.prototype.gotoChat = function () {
        //   var modal=this.modalCtrl.create(ChatPage);
        // modal.present();
        this.selectTab(2);
    };
    // 选择也页面的有几种方式
    // 选择哪一个tab
    HomePage.prototype.selectTab = function (index) {
        var t = this.navCtrl.parent; //定义一个参数 t 类型是 tabs，定义在ionic-angualr
        //navCtrl 控制额是，首页 内容视图的东西。他的 parent父级，就是  tabs层级
        t.select(index);
    };
    HomePage.prototype.getFeeds = function () {
        var _this = this;
        var loading = _super.prototype.showLoading.call(this, this.loadingCtrl, "数据加载中");
        this.rest.getFeeds()
            .subscribe(function (f) {
            _this.feeds = f;
            loading.dismiss();
        }, function (error) { return _this.errorMessage = error; });
    };
    HomePage.prototype.gotoDetails = function (questionId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__details_details__["a" /* DetailsPage */], { id: questionId });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"F:\ck\project\Ionic\04-01\src\pages\home\home.html"*/'<ion-header>\n  <!-- toolbar 是有一个包裹 -->\n  <ion-toolbar class="searchbar-input" >\n      <ion-searchbar placeholder="搜索:请输入搜索内容" class="searchbal"></ion-searchbar>\n      <ion-icon name="text" class="top_header_message_icon" (click)="gotoChat()"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class="floatMenu">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4 text-center>\n            <div (tap)="gotoQuestion()">\n              <ion-icon name="create">提问</ion-icon>\n            </div>\n        </ion-col>\n        <ion-col col-4 text-center>\n            <div (tap)="gotoQuestion()"><span style="float:left; color:#ddd">|</span>\n                <ion-icon name="albums">回答</ion-icon>\n              </div>\n        </ion-col>\n        <ion-col col-4 text-center>\n            <div (tap)="gotoQuestion()">\n              <span style="float:left;color:#ddd">|</span>\n                <ion-icon name="share-alt">分享</ion-icon>\n              </div>\n        </ion-col>\n      </ion-row> \n    </ion-grid>\n  </div>\n  <ion-card   *ngFor="let f of feeds"  (click)="gotoDetails(f.IdentityId)">\n  <ion-item>\n    <ion-avatar item-start>\n     <img src="{{f.HeadFace}}">\n    </ion-avatar>\n    <p>{{f.UserNickName}}回答该问题\n      <ion-icon class="more_button" name="more"></ion-icon>\n    </p>\n    </ion-item>\n    <h2>{{f.ContentTitle}}这是一个问题的的标题</h2>\n    <ion-card-content>\n      <p>{{f.ContentSummary}}文章的内容</p>\n    </ion-card-content>\n    <ion-row> \n    <ion-col col-8 center text-left>\n      <ion-note>\n        100{{f.LikeCount}} 赞同&nbsp;&nbsp;&nbsp;&nbsp;20{{f.CommentCount}} &nbsp;评论&nbsp;&nbsp;关注问题\n      </ion-note>\n    </ion-col>\n    <ion-col col-4></ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"F:\ck\project\Ionic\04-01\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */]])
    ], HomePage);
    return HomePage;
}(__WEBPACK_IMPORTED_MODULE_3__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_baseui__ = __webpack_require__(28);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// IonicPage,
/**
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var QuestionPage = (function (_super) {
    __extends(QuestionPage, _super);
    function QuestionPage(navCtrl, navParams, viewCtrl, rest, storage, loadingCtrl, toastCtrl) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.viewCtrl = viewCtrl;
        _this.rest = rest;
        _this.storage = storage;
        _this.loadingCtrl = loadingCtrl;
        _this.toastCtrl = toastCtrl;
        return _this;
    }
    QuestionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuestionPage');
    };
    // dismiss(){
    //   this.viewCtrl.dismiss();
    // }
    QuestionPage.prototype.submitQuestion = function () {
        // 先获取userid  需要做一些构造
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                var loading = _super.prototype.showLoading.call(_this, _this.loadingCtrl, "发表中...");
                _this.rest.saveQuestion(val, _this.title, _this.content)
                    .subscribe(function (f) {
                    if (f["Status"] == "OK") {
                        loading.dismissAll();
                        // this.dismiss();
                    }
                    else {
                        // loading.dismissAll();
                        _super.prototype.showToast.call(_this, _this.toastCtrl, f["StatusContent"]);
                    }
                }, function (error) { return _this.errorMessage = error; });
            }
            else {
                _super.prototype.showToast.call(_this, _this.toastCtrl, "请登录后发布提问");
            }
        });
    };
    // 到聊天的窗口
    QuestionPage.prototype.gotoChat = function () {
    };
    QuestionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-question',template:/*ion-inline-start:"F:\ck\project\Ionic\04-01\src\pages\question\question.html"*/'<!--\n  Generated template for the QuestionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n<ion-navbar>\n    <ion-title>提问</ion-title>\n <ion-buttons start>\n\n  <button ion-button (click)="dismiss()">\n    <span ion-text color="primary" showWhen="ios">取消</span>\n    <ion-icon name="md-close" showWhen="android"></ion-icon>\n  </button>\n</ion-buttons>\n</ion-navbar>\n</ion-header>\n<ion-content>\n<ion-list>\n <ion-item>\n   <ion-label stacked>问题标题</ion-label>\n   <ion-input type="text" [(ngModel)]="title"></ion-input>\n </ion-item> \n <ion-item>\n <ion-label stacked>问题内容</ion-label>\n <ion-textarea type="text" rows="5" [(ngModel)]="content"></ion-textarea>\n</ion-item>\n</ion-list>\n<div padding>\n  <button ion-button color="primary"  block (click)="submitQuestion()">提问</button>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"F:\ck\project\Ionic\04-01\src\pages\question\question.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], QuestionPage);
    return QuestionPage;
}(__WEBPACK_IMPORTED_MODULE_4__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=question.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_baseui__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(23);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AnswerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var AnswerPage = (function (_super) {
    __extends(AnswerPage, _super);
    function AnswerPage(navCtrl, navParams, viewCtrl, storage, loadingCtrl, rest, toastCtrl) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.viewCtrl = viewCtrl;
        _this.storage = storage;
        _this.loadingCtrl = loadingCtrl;
        _this.rest = rest;
        _this.toastCtrl = toastCtrl;
        _this.id = navParams.get('id'); //接受传递过来的参数
        return _this;
    }
    AnswerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AnswerPage');
    };
    // dismiss(){
    //   this.viewCtrl.dismiss();
    // }
    AnswerPage.prototype.submit = function () {
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                var loading = _super.prototype.showLoading.call(_this, _this.loadingCtrl, '发表中...');
                _this.rest.answer(val, _this.id, _this.content)
                    .subscribe(function (f) {
                    if (f["Status"] == "OK") {
                        loading.dismissAll();
                        // this.dismiss();
                    }
                    else {
                        // loading.dismissAll();
                        _super.prototype.showToast.call(_this, _this.toastCtrl, f["StatusContent"]);
                    }
                }, function (error) { return _this.errorMessage = error; });
            }
            else {
                _super.prototype.showToast.call(_this, _this.toastCtrl, "请登陆回答");
            }
        });
    };
    AnswerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-answer',template:/*ion-inline-start:"F:\ck\project\Ionic\04-01\src\pages\answer\answer.html"*/'<!--\n  Generated template for the AnswerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>回答</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">取消</span>\n        <ion-icon name="md-close" showWhen="android"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons end>\n        <button ion-button (click)="submit()">\n          <span ion-text color="primary" showWhen="ios">发布</span>\n          <ion-icon name="md-add-circle" showWhen="android"></ion-icon>\n        </button>\n        \n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<ion-list>\n  <ion-item>\n    <ion-label stacked>请输入回答内容</ion-label>\n    <ion-textarea type="text" rows="20" style="height:100%;" [(ngModel)]="content"></ion-textarea>\n  </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"F:\ck\project\Ionic\04-01\src\pages\answer\answer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], AnswerPage);
    return AnswerPage;
}(__WEBPACK_IMPORTED_MODULE_2__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=answer.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoveryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_baseui__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__details_details__ = __webpack_require__(64);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the DiscoveryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var DiscoveryPage = (function (_super) {
    __extends(DiscoveryPage, _super);
    function DiscoveryPage(navCtrl, navParams, modalCtrl, loadingCtrl, rest) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.modalCtrl = modalCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.rest = rest;
        return _this;
    }
    DiscoveryPage.prototype.ionViewDidLoad = function () {
        this.getQuestions();
    };
    DiscoveryPage.prototype.getQuestions = function () {
        var _this = this;
        var loading = _super.prototype.showLoading.call(this, this.loadingCtrl, "数据加载中");
        this.rest.getQuestions()
            .subscribe(function (q) {
            _this.questions = q;
            loading.dismiss();
        }, function (error) { return _this.errorMessage = error; });
    };
    DiscoveryPage.prototype.doRefresh = function (refresher) {
        this.getQuestions(); //页面刷新的时候重新做一下问题加载
        refresher.comple(); // 整个刷新完成关闭
    };
    DiscoveryPage.prototype.gotoDetails = function (questionId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__details_details__["a" /* DetailsPage */], { id: questionId });
    };
    DiscoveryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-discovery',template:/*ion-inline-start:"F:\ck\project\Ionic\04-01\src\pages\discovery\discovery.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>发现页面</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n<ion-refresher (ionRefresh)="doRefresh($event)" (click)="gotoDetails(q.IdentityId)">\n<ion-refresher-content \npullingIcon="arrow-down"   \npullingText="下拉刷新" \nrefreshingSpinner="circles"\nrefreshingText="数据加载中">\n<!-- pullingIcon="arrow-down"     下拉\npullingText="下拉刷新"   下拉的文字\nrefreshingSpinner="circles"  下拉圈圈\nrefreshingText="数据加载中">下拉时的文字 \n下拉的时候怎么加载数据呢？-->\n\n</ion-refresher-content>\n\n</ion-refresher>\n  <!-- 拿到card 的循环 -->\n  <!-- 发现页面的逻辑添加，主要学习下拉刷新组件的一些事件  -->\n  \n    <ion-card *ngFor="let q of questions">\n        <ion-item>\n          <ion-avatar item-start>\n           <img src="{{q.HeadFace}}">\n          </ion-avatar>\n          <p>{{q.UserNickName}}发表的问题\n            <ion-icon class="more_button" name="more"></ion-icon>\n          </p>\n          </ion-item>\n          <h2>{{q.ContentTitle}}</h2>\n          <ion-card-content>\n            <p>{{q.ContentSunnary}}</p>\n          </ion-card-content>\n          <ion-row> \n          <ion-col col-8 center text-left>\n            <ion-note>\n              {{q.LikeCount}}100赞同&nbsp;&nbsp;&nbsp;&nbsp;20{{q.ComentCount}} &nbsp;评论&nbsp;&nbsp;关注问题\n            </ion-note>\n          </ion-col>\n          <ion-col col-4></ion-col>\n          </ion-row>\n        </ion-card>\n</ion-content>\n'/*ion-inline-end:"F:\ck\project\Ionic\04-01\src\pages\discovery\discovery.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], DiscoveryPage);
    return DiscoveryPage;
}(__WEBPACK_IMPORTED_MODULE_3__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=discovery.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_baseui__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__details_details__ = __webpack_require__(64);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// 通知的消息后台保存回答，关注的时候自动生成的消息数据，前台只要通过api获取即可
// @IonicPage()
var NotificationPage = (function (_super) {
    __extends(NotificationPage, _super);
    function NotificationPage(navCtrl, navParams, rest, storage, loadingCtrl, toastCtrl) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.rest = rest;
        _this.storage = storage;
        _this.loadingCtrl = loadingCtrl;
        _this.toastCtrl = toastCtrl;
        return _this;
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                var loading = _super.prototype.showLoading.call(_this, _this.loadingCtrl, "加载中...");
                _this.rest.getUserNotifications(val) //从后台获取到的uid 
                    .subscribe(function (n) {
                    _this.notificationList = n;
                    loading.dismissAll();
                }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    NotificationPage.prototype.gotoDetails = function (questionId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__details_details__["a" /* DetailsPage */], { id: questionId });
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"F:\ck\project\Ionic\04-01\src\pages\notification\notification.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>通知</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<ion-list>\n<ion-item *ngFor="let n of notificationList" (click)="gotoDetatils(n.QuestionId)"> \n  <ion-avatar item-left>\n    <img src="{{n.HeadFace}}">\n  </ion-avatar>\n  <h2>{{n.NotificationTitle}}</h2>\n  <p>{{n.NotificationMessage}}</p>\n</ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"F:\ck\project\Ionic\04-01\src\pages\notification\notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], NotificationPage);
    return NotificationPage;
}(__WEBPACK_IMPORTED_MODULE_4__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_baseui__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_user__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__userdatalist_userdatalist__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_settings_settings__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__scan_scan__ = __webpack_require__(282);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MorePage = (function (_super) {
    __extends(MorePage, _super);
    function MorePage(navCtrl, navParams, modalCtrl, storage, loadingCtrl, rest, settings) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.modalCtrl = modalCtrl;
        _this.storage = storage;
        _this.loadingCtrl = loadingCtrl;
        _this.rest = rest;
        _this.settings = settings;
        _this.notLogin = true;
        _this.logined = false;
        _this.settings.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
        return _this;
    }
    // 学习的本质就是重复
    // ionViewDidLoad() { 这个是生命周期，暂时用不到先注释掉
    //   console.log('ionViewDidLoad MorePage');
    // }
    MorePage.prototype.showModal = function () {
        // 新建一个login
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        modal.present();
    };
    // ionViewDidEnter(){  每次 enter 的时候加载一次 改成 只加载第一次 load
    MorePage.prototype.ionViewDidLoad = function () {
        this.loadUserPage();
    };
    MorePage.prototype.loadUserPage = function () {
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                // 用户登陆过
                var loading = _super.prototype.showLoading.call(_this, _this.loadingCtrl, "加载中...");
                _this.rest.getUserInfo(val)
                    .subscribe(function (userinfo) {
                    _this.userinfo = userinfo;
                    _this.headface = userinfo["UserHeadface"] + "?" + (new Date()).valueOf();
                    _this.notLogin = false;
                    _this.logined = true;
                    loading.dismiss();
                });
                // 加载用户数据
            }
            else {
                _this.notLogin = true;
                _this.logined = false;
            }
        });
    };
    MorePage.prototype.gotoDataList = function (type) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__userdatalist_userdatalist__["a" /* UserdatalistPage */], { "dataType": type });
    };
    MorePage.prototype.gotoUserPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__user_user__["a" /* UserPage */]);
    };
    /**
     *+跳转到扫描二维码的也页面上，加上animatefalse的参数是为了
     *相机能够在屏幕中显示，如果不加，相机就出不来。
     *animate的参数默认值为true
     * @memberof MorePage
     */
    MorePage.prototype.gotoScanQrCode = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__scan_scan__["a" /* ScanPage */], null, { "animate": false });
    };
    MorePage.prototype.toggleChangeTheme = function () {
        if (this.selectedTheme === 'dark-theme') {
            this.settings.setActiveTheme('light-theme');
        }
        else {
            this.settings.setActiveTheme('dark-theme');
        }
    };
    MorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-more',template:/*ion-inline-start:"F:\ck\project\Ionic\04-01\src\pages\more\more.html"*/'<!--\n  Generated template for the MorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>更多</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div *ngIf="notLogin">\n  <ion-card>\n    <ion-card-header text-center>\n      登陆集智QA，体验更多功能\n    </ion-card-header>\n    <ion-card-content  text-center>\n      <button ion-button outline small (click)="showModal()">登陆/注册</button>\n    </ion-card-content>\n  </ion-card>\n</div>\n  \n  <div *ngIf="logined">\n     <ion-list class="margin-top" >\n       <ion-list-header>\n         我的集智\n       </ion-list-header>\n\n       <button ion-item (click)="gotoDataList(\'question\')">\n         <ion-icon name="paper" item-start color="primary"></ion-icon>\n         <ion-label>我的提问</ion-label>\n       </button>\n       <button ion-item (click)="gotoDataList(\'favourite\')">\n          <ion-icon name="star" item-start color="orange"></ion-icon>\n          <ion-label>我的关注</ion-label>\n        </button>\n        <button ion-item (click)="gotoDataList(\'answer\')">\n            <ion-icon name="disc" item-start color="secondary"></ion-icon>\n            <ion-label>我的回答</ion-label>\n          </button>\n       <!-- <button ion-item (click)="gotoUserPage()">\n         <ion-avatar item-start>\n           <img src="{{headface}}">\n         </ion-avatar>\n         <h2>{{userinfo.UserNickName}}</h2>\n         <!- <h2>这是个昵称</h2> -->\n         <!-- <p>查看个人主页或编辑简介</p>  -->\n\n     </ion-list>\n\n     <ion-list class="margin-top">\n       <ion-list-header>\n         设置\n       </ion-list-header>\n       <ion-item> \n         <ion-icon name="cloudy-night" item-start color = "purple"></ion-icon>\n         <ion-label>夜间模式</ion-label>\n         <ion-toggle color="purple" (ionChange)="toggleChangeTheme()"></ion-toggle>\n       </ion-item>\n\n       \n         <button ion-item (click)="gotoScanQrCode()">\n          <ion-icon name="qr-scanner" item-start color = "dark"></ion-icon>\n          <ion-label>扫描二维码</ion-label>\n         </button>\n     </ion-list>\n     \n      </div>\n\n</ion-content>\n'/*ion-inline-end:"F:\ck\project\Ionic\04-01\src\pages\more\more.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_settings_settings__["a" /* SettingsProvider */]])
    ], MorePage);
    return MorePage;
}(__WEBPACK_IMPORTED_MODULE_4__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=more.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_baseui__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(274);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()  import IonicPage,
var LoginPage = (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage(navCtrl, navParams, viewCtrl, //控制视图的显隐,
        loadingCtrl, 
        //  做一下构造REST构造
        rest, toastCtrl, storage) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.viewCtrl = viewCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.rest = rest;
        _this.toastCtrl = toastCtrl;
        _this.storage = storage;
        return _this;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        //  需要请求api
        // 加载时有个loading: 因为多处可以用所以搞个封装；公用一个类实现
        var loading = _super.prototype.showLoading.call(this, this.loadingCtrl, "登陆中...");
        // 接着进行rest请求,去rest 定义方法
        this.rest.login(this.mobile, this.password)
            .subscribe(function (f) {
            if (f["Status"] == "OK") {
                //如果处理成功，进入登陆成功的页面跳转
                //  storage 存储用户登陆的信息，你也可以储存接口返回的token
                // 每次验证用户是否是真实的用户，是否存在欺骗,攻击性的代码
                _this.storage.set('UserId', f["UserId"]); //x先存储userID 
                loading.dismiss(); //储存好代码后加载中的界面dismiss 掉
                //弹出的login 页面也要dismiss 掉
                //  this.dismiss();
            }
            else {
                // 如果没有登陆成功，则进去一个弹窗界面
                // 把这个登陆界面隐藏掉
                loading.dismiss();
                // this.dismiss();
                //如果登陆失败后显示的是从后端获取的状态
                _super.prototype.showToast.call(_this, _this.toastCtrl, f["StatusContent"]);
                // 登陆失败，第一个参数传第一个类的ctrl，第二个类是失败的原因内容
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    /**
     *关闭当前页面方法
     *
     * @memberof LoginPage
     */
    LoginPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LoginPage.prototype.pushRegisterPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"F:\ck\project\Ionic\04-01\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>用户登陆</ion-title>\n    <ion-buttons>\n    <button ion-button  (click)="dismiss()">\n      <span ion-text color="primary" showWhen=\'ios\'>取消</span>\n        <ion-icon name="md-close" showWhen="android"></ion-icon>\n        <!-- //当系统为iOS的时候显示取消，当为android 的时候显示图标md-close -->\n    </button>\n  </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<ion-list>\n  <ion-item>\n    <ion-label stacked>手机号码</ion-label>\n    <ion-input type="text" [(ngModel)]="mobile"></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label stacked>密码</ion-label>\n    <ion-input type="password" [(ngModel)]="password"></ion-input>\n  </ion-item>\n</ion-list>\n<div padding>\n  <button ion-button color="primary" block (click)="login()">登陆</button>\n</div>\n<div padding text-center>\n  <button ion-button color="primary" outline (click)="pushRegisterPage()">没有账号？注册</button>\n</div>\n</ion-content>\n'/*ion-inline-end:"F:\ck\project\Ionic\04-01\src\pages\login\login.html"*/,
        })
        // export class LoginPage { etends BaseUi 是一个扩展类是一个他的父类
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}(__WEBPACK_IMPORTED_MODULE_2__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_baseui__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(23);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {Storage} from '@ionic/storage'
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var RegisterPage = (function (_super) {
    __extends(RegisterPage, _super);
    function RegisterPage(navCtrl, navParams, loadingCtrl, viewCtrl, rest, toastCtrl) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.loadingCtrl = loadingCtrl;
        _this.viewCtrl = viewCtrl;
        _this.rest = rest;
        _this.toastCtrl = toastCtrl;
        return _this;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    RegisterPage.prototype.gotoLogin = function () {
        this.navCtrl.pop();
    };
    RegisterPage.prototype.doRegister = function () {
        //前台验证表单数据的正确性
        //包括手机号码，验证国内手机号码格式，昵称的长度，密码的长度
        //考虑所有的当前手机号码的可能性
        var _this = this;
        if (!(/^1[34578]\d{9}$/.test(this.mobile))) {
            _super.prototype.showToast.call(this, this.toastCtrl, '您的手机号码格式不正确');
        }
        else if (this.nickname.length < 3 || this.nickname > 10) {
            _super.prototype.showToast.call(this, this.toastCtrl, '昵称长度应该在3-10之间');
        }
        else if (this.password < 6 || this.password > 20) {
            _super.prototype.showToast.call(this, this.toastCtrl, '密码长度在6-20之间');
        }
        else if (this.confirmPassword.length < 6 || this.confirmPassword.length > 20) {
            _super.prototype.showToast.call(this, this.toastCtrl, '密码长度在6-20之间');
        }
        //密码验证
        if (this.password != this.confirmPassword) {
            _super.prototype.showToast.call(this, this.toastCtrl, '两次输入密码不一致');
        }
        else {
            var loading = _super.prototype.showLoading.call(this, this.loadingCtrl, '注册中...');
            this.rest.register(this.mobile, this.nickname, this.password)
                .subscribe(function (f) {
                if (f["Status"] == "ok") {
                    loading.dismiss();
                    _super.prototype.showToast.call(_this, _this.toastCtrl, "注册成功");
                    _this.dismiss();
                }
                else {
                    loading.dismiss();
                    _super.prototype.showToast.call(_this, _this.toastCtrl, f["StatusContent"]);
                    _this.dismiss();
                }
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"F:\ck\project\Ionic\04-01\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>用户注册</ion-title>\n    <!-- <ion-buttons>  检测到是navgation  时 会自动带一个， back ,如修改需要去全局修改英文\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="iso">取消</span>\n        <ion-icon name="md-close" showWhen="android"></ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n<ion-list>\n  <ion-item>\n    <ion-label stacked>手机号码</ion-label>\n    <ion-input type="text" [(ngModel)]="mobile" ></ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-label stacked>昵称</ion-label>\n      <ion-input type="text" [(ngModel)]="nickname"></ion-input>\n    </ion-item>\n  <ion-item>\n    <ion-label stacked>密码</ion-label>\n    <ion-input type="password" [(ngModel)]="password"></ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-label stacked>确认密码</ion-label>\n      <ion-input type="password" [(ngModel)]="confirmPassword"></ion-input>\n    </ion-item>\n\n</ion-list>\n<div padding>\n  <button ion-button color="primary"  block (click) ="doRegister()">注册</button>\n</div>\n<div padding>\n  <button ion-button color="primary" outline  block (click)="gotoLogin()">已有账号？登陆</button>\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"F:\ck\project\Ionic\04-01\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], RegisterPage);
    return RegisterPage;
}(__WEBPACK_IMPORTED_MODULE_2__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__headface_headface__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// IonicPage,
// @IonicPage()
var UserPage = (function () {
    function UserPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserPage');
    };
    UserPage.prototype.gotoHeadface = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__headface_headface__["a" /* HeadfacePage */]);
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"F:\ck\project\Ionic\04-01\src\pages\user\user.html"*/'<!--\n  Generated template for the UserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n<ion-navbar>\n    <ion-title>个人中心</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n<ion-list class="marginTop marginBottom">\n  <button ion-item (click)="gotoHeadface()">\n    <ion-avatar item-start>\n      <img src="{{headface}}"/>\n    </ion-avatar>\n    <h2>修改头像</h2>\n  </button>\n</ion-list>\n<ion-list class="marginTop">\n  <ion-item>\n  <ion-label>用户昵称</ion-label>\n  <ion-input type="text"> Parry </ion-input>\n</ion-item>\n</ion-list>\n<div padding text-center class="paddingTop">\n    <button ion-button color="primary" block>保存</button>\n  </div>\n<div padding text-center class="paddingTop">\n  <button ion-button color="danger" block>注销</button>\n</div>\n\n</ion-content>'/*ion-inline-end:"F:\ck\project\Ionic\04-01\src\pages\user\user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadfacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_baseui__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_File_path__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(280);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// 调用摄像头
// npm install --save @ionic-native/file @ionic-native/file-path @ionic-native/transfer   @ionic-native /camera 
// ionic cordova plugin add cordova-plugin-camera --save  相机     @4.3.2
// ionic cordova plugin add cordova-plugin-file --save  本地文件   @  4.3.2
// ionic cordova plugin add cordova-plugin-file-transfer  --save   传输相关文件     3.14.0
// ionic cordova plugin add cordova-plugin-filepath --save   路径相关 @4.3.2


// TransferObject


// IonicPage,
/**
 * Generated class for the HeadfacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var HeadfacePage = (function (_super) {
    __extends(HeadfacePage, _super);
    function HeadfacePage(navCtrl, navParams, viewCtrl, actionSheetCtrl, storage, modalCtrl, rest, loadingCtrl, camera, file, filePath, transfer, platform, toastCtrl) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.viewCtrl = viewCtrl;
        _this.actionSheetCtrl = actionSheetCtrl;
        _this.storage = storage;
        _this.modalCtrl = modalCtrl;
        _this.rest = rest;
        _this.loadingCtrl = loadingCtrl;
        _this.camera = camera;
        _this.file = file;
        _this.filePath = filePath;
        _this.transfer = transfer;
        _this.platform = platform;
        _this.toastCtrl = toastCtrl;
        _this.lastImage = null; // 保存最后一次
        return _this;
    }
    // 每次加载进来，从storage 本地存储把 UserId 拿出来，存储图片的时候用到
    HeadfacePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                _this.userId = val;
            }
        });
    };
    HeadfacePage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: '选择图片',
            buttons: [
                {
                    text: '从图片库中选择',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: '使用相机',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: '取消',
                    role: 'cancel'
                }
            ],
        });
        actionSheet.present();
    };
    //这个函数 大，多看几遍  9-5  获取图片
    HeadfacePage.prototype.takePicture = function (sourceType) {
        var _this = this;
        // 定义相机的一些参数
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true,
        };
        //获取图片的方法
        this.camera.getPicture(options).then(function (imagePath) {
            //特别处理android 平台的文件路径问题
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath) //获取android下的真实路径
                    .then(function (filePath) {
                    //获取正确的路径
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    //获取正确的文件名
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                //获取正确的路径
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                //获取正确的文件名
                var currentName = imagePath.substring(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        }, function (err) {
            _super.prototype.showToast.call(_this, _this.toastCtrl, "选择图片出现错误，请在app中检查权限");
        });
    };
    // 将获取到的图片或者相机拍摄到的图片进行一下另存为，用于后期图片上传的后期使用
    HeadfacePage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
        }, function (erro) {
            _super.prototype.showToast.call(_this, _this.toastCtrl, '存储图片到本地的图库出现错误');
        });
    };
    //为文件生成一个新的文件名
    HeadfacePage.prototype.createFileName = function () {
        var d = new Date(), // 日期做一个 唯一值取到值
        n = d.getTime(), // 精确的时间
        newFileName = n + ".jpg";
        return newFileName;
    };
    // 处理图片的路径为可以上传的路径
    HeadfacePage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* normalizeURL */])(cordova.file.dataDirectory + img);
            // 此处为官方bug  新版本无次问题
        }
    };
    // ### fileTransfer上传的参数
    HeadfacePage.prototype.uploadImage = function () {
        var _this = this;
        var url = 'https://imoocqa.gugujiankong.com/api/account/uploadheadface';
        var targetPath = this.pathForImage(this.lastImage);
        var filename = this.userId + ".jpg"; //定义上传的文件名
        var options = {
            fileKey: 'file',
            fileName: filename,
            chunkedMode: false,
            mimeType: "multipart/form-data",
            params: { 'fileName': filename, 'userid': this.userId }
        };
        var fileTransfer = this.transfer.create();
        var loading = _super.prototype.showLoading.call(this, this.loadingCtrl, "上传中...");
        //开始上传
        fileTransfer.upload(targetPath, url, options).then(function (data) {
            loading.dismiss();
            _super.prototype.showToast.call(_this, _this.toastCtrl, '图片上传成功');
            // 用户看清弹窗提示后进行页面的关闭
            setTimeout(function () {
                _this.viewCtrl.dismiss();
            }, 3000);
        }, function (err) {
            loading.dismiss();
            _super.prototype.showToast.call(_this, _this.toastCtrl, "图片上传发生从未，请重试.");
        });
    };
    HeadfacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-headface',template:/*ion-inline-start:"F:\ck\project\Ionic\04-01\src\pages\headface\headface.html"*/'<!--\n  Generated template for the HeadfacePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>设置头像</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<img src="{{pathForImage(lastImage)}}" style="width:100%;" [hidden]="lastImage===null"/>\n<!-- 当为空的时候隐藏掉这个方法，有值时显示 -->\n<h3 [hidden]="lastImage!=null">请从图片库选择一个图片</h3>\n</ion-content>\n<ion-footer>\n  <ion-toolbar color="primary">\n    <ion-buttons>\n      <button ion-button icon-left (click)="presentActionSheet()">\n        <ion-icon name="camera"></ion-icon>选择...\n      </button>\n      <button ion-button icon-left (click)="uploadImage()" [disabled]="lastImage===null">\n       <!-- [disable]="lastImage===null" 当图为是否为空 -->\n        <ion-icon name="cloud-upload"></ion-icon>上传\n      </button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-footer>>'/*ion-inline-end:"F:\ck\project\Ionic\04-01\src\pages\headface\headface.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_File_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], HeadfacePage);
    return HeadfacePage;
}(__WEBPACK_IMPORTED_MODULE_2__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=headface.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseUI; });
var BaseUI = (function () {
    function BaseUI() {
    }
    BaseUI.prototype.showLoading = function (loadingCtrl, message) {
        var loader = loadingCtrl.create({
            content: message,
            dismissOnPageChange: true,
        });
        loader.present();
        return loader;
    };
    /**
     *UI层的公用组建
     *
     * @protected
     * @param {ToastController} toastCtrl
     * @param {string} message
     * @returns {Toast}
     * @memberof BaseUI
     */
    BaseUI.prototype.showToast = function (toastCtrl, message) {
        var toast = toastCtrl.create({
            //    写几个参数
            message: message,
            duration: 3000,
            position: 'bottom',
        });
        toast.present();
        return toast;
    };
    return BaseUI;
}());

//# sourceMappingURL=baseui.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserdatalistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// @IonicPage()
var UserdatalistPage = (function () {
    function UserdatalistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataType = navParams.get('dataType');
        switch (this.dataType) {
            case "question":
                this.title = "我的提问";
                break;
            case "answer":
                this.title = "我的回答";
                break;
            case "favourite":
                this.title = "我的关注";
                break;
        }
    }
    UserdatalistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-userdatalist',template:/*ion-inline-start:"F:\ck\project\Ionic\04-01\src\pages\userdatalist\userdatalist.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <question-list datatype="{{dataType}}"></question-list>\n</ion-content>\n'/*ion-inline-end:"F:\ck\project\Ionic\04-01\src\pages\userdatalist\userdatalist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], UserdatalistPage);
    return UserdatalistPage;
}());

//# sourceMappingURL=userdatalist.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScanPage = (function () {
    function ScanPage(navCtrl, navParams, alertCtrl, qrScanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.qrScanner = qrScanner;
    }
    ScanPage.prototype.ionViewDidEnter = function () {
        this.scanQRCode();
    };
    ScanPage.prototype.scanQRCode = function () {
        var _this = this;
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                var scanSub_1 = _this.qrScanner.scan().subscribe(function (text) {
                    var alert = _this.alertCtrl.create({
                        title: "二维码内容",
                        subTitle: text,
                        buttons: ['ok']
                    });
                    alert.present();
                    scanSub_1.unsubscribe();
                });
                _this.qrScanner.show();
            }
            else if (status.denied) {
                //体型用户权限未开
            }
            else {
            }
        })
            .catch(function (e) { return console.error('Error:', e); });
    };
    ScanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-scan',template:/*ion-inline-start:"F:\ck\project\Ionic\04-01\src\pages\scan\scan.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>scan</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<div class="line"></div>\n'/*ion-inline-end:"F:\ck\project\Ionic\04-01\src\pages\scan\scan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__["a" /* QRScanner */]])
    ], ScanPage);
    return ScanPage;
}());

//# sourceMappingURL=scan.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the EmojiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var EmojiProvider = (function () {
    function EmojiProvider(http) {
        //console.log('Hello EmojiProvider Provider');
        this.http = http;
    }
    /**
     *获取所有表情的数据（已分好了组）
     *
     * @memberof EmojiProvider
     */
    EmojiProvider.prototype.getEmojis = function () {
        // 定义emojis 表情包
        var EMOJIS = "😄 🙂 😂 😕 😕 😁 😅 😓 😃 😵 😆 😄 🙂 😂 😕 😕 😁 😅 😓 😃 😵 😆";
        "😄 🙂 😂 😕 😕 😁 😅 😓 😃 😵 😆 😄 🙂 😂 😕 😕 😁 😅 😓 😃 😵 😆";
        "😄 🙂 😂 😕 😕 😁 😅 😓 😃 😵 😆 😄 🙂 😂 😕 😕 😁 😅 😓 😃 😵 😆";
        "😄 🙂 😂 😕 😕 😁 😅 😓 😃 😵 😆 😄 🙂 😂 😕 😕 😁 😅 😓 😃 😵 😆";
        "😄 🙂 😂 😕 😕 😁 😅 😓 😃 😵 😆 😄 🙂 😂 😕 😕 😁 😅 😓 😃 😵 😆";
        "😄 🙂 😂 😕 😕 😁 😅 😓 😃 😵 😆 😄 🙂 😂 😕 😕 😁 😅 😓 😃 😵 😆";
        "😄 🙂 😂 😕 😕 😁 😅 😓 😃 😵 😆 😄 🙂 😂 😕 😕 😁 😅 😓 😃 😵 😆";
        "😄 🙂 😂 😕 😕 😁 😅 😓 😃 😵 😆 😄 🙂 😂 😕 😕 😁 😅 😓 😃 😵 😆";
        //然后进行分组的操作
        var array = EMOJIS.split(' '); //用空格分组
        var groupNumber = Math.ceil(array.length / 10); //  四舍五入的意思 ，但是取大，比如12.1 要取13
        var items = [];
        //分组填充表情
        for (var i = 0; i < groupNumber; i++) {
            items.push(array.slice(10 * i, 10 * (i + 1)));
        }
        return items;
    };
    EmojiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], EmojiProvider);
    return EmojiProvider;
}());

//# sourceMappingURL=emoji.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(414);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_chat_chat__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_notification_notification__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_discovery_discovery__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_more_more__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_user_user__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_headface_headface__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_details_details__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_question_question__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_rest_rest__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_http__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common_http__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_file__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_qr_scanner__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_userdatalist_userdatalist__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_transfer__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_File_path__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_answer_answer__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_chatdetails_chatdetails__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_emoji_emoji__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_components_module__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_chatservice_chatservice__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pipes_relativetime_relativetime__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_settings_settings__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_scan_scan__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























// , QRScannerStatus 

// import {Transfer,TransferObject} from '@ionic-native/transfer';

// TransferObject









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_more_more__["a" /* MorePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_discovery_discovery__["a" /* DiscoveryPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_answer_answer__["a" /* AnswerPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_headface_headface__["a" /* HeadfacePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_question_question__["a" /* QuestionPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_scan_scan__["a" /* ScanPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_chatdetails_chatdetails__["a" /* ChatdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_33__pipes_relativetime_relativetime__["a" /* RelativetimePipe */],
                __WEBPACK_IMPORTED_MODULE_25__pages_userdatalist_userdatalist__["a" /* UserdatalistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    backButtonText: '返回',
                }, {
                    links: [
                        { loadChildren: '../pages/scan/scan.module#ScanPageModule', name: 'ScanPage', segment: 'scan', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_31__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_more_more__["a" /* MorePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_discovery_discovery__["a" /* DiscoveryPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_headface_headface__["a" /* HeadfacePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_question_question__["a" /* QuestionPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_answer_answer__["a" /* AnswerPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_chatdetails_chatdetails__["a" /* ChatdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_userdatalist_userdatalist__["a" /* UserdatalistPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_scan_scan__["a" /* ScanPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_qr_scanner__["a" /* QRScanner */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_transfer__["a" /* Transfer */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_File_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_30__providers_emoji_emoji__["a" /* EmojiProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_chatservice_chatservice__["a" /* ChatserviceProvider */],
                __WEBPACK_IMPORTED_MODULE_34__providers_settings_settings__["a" /* SettingsProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_settings_settings__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, settings) {
        var _this = this;
        this.settings = settings;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        this.settings.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"F:\ck\project\Ionic\04-01\src\app\app.html"*/'<ion-nav [root]="rootPage" [class]="selectedTheme"></ion-nav>\n'/*ion-inline-end:"F:\ck\project\Ionic\04-01\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__providers_settings_settings__["a" /* SettingsProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_baseui__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__answer_answer__ = __webpack_require__(269);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var DetailsPage = (function (_super) {
    __extends(DetailsPage, _super);
    // 是否是我的问题
    function DetailsPage(navCtrl, navParams, rest, toastCtrl, loadingCtrl, storage, modalCtrl) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.rest = rest;
        _this.toastCtrl = toastCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.storage = storage;
        _this.modalCtrl = modalCtrl;
        return _this;
    }
    DetailsPage.prototype.ionViewDidLoad = function () {
        // 刚才push 传递了参数 id,那么此时接受参数id 
        // 既是参数的获取，获取参说的传递
        this.id = this.navParams.get('id');
        this.loadQuestion(this.id);
    };
    DetailsPage.prototype.loadQuestion = function (id) {
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val !== null) {
                _this.userId = val;
                var loading = _super.prototype.showLoading.call(_this, _this.loadingCtrl, "加载中...");
                _this.rest.getQuestionWithUser(id, val) //调用方法，记得定义（此方法在rest中定义）
                    .subscribe(//传递对应的参数
                function (//传递对应的参数
                    q) {
                    _this.question = q;
                    _this.answers = q["Answers"]; //q 里有个answers 数组里有个数组，
                    //可以展示多个回答，也可能后台id 未查到，为空
                    loading.dismiss();
                    _this.isFavourite = q["IsFavourite"];
                    _this.isMyQuestion = (q["OwnUserId"] == val);
                }, function (error) { return _this.errorMessage = error; });
                //然后可以进行数据的绑定
            }
        });
    };
    DetailsPage.prototype.saveFavourite = function () {
        var _this = this;
        var loading = _super.prototype.showLoading.call(this, this.loadingCtrl, "请求中...");
        this.rest.saveFavourite(this.id, this.userId)
            .subscribe(function (f) {
            if (f["Status"] == "OK") {
                loading.dismiss();
                _super.prototype.showToast.call(_this, _this.toastCtrl, _this.isFavourite ? "取消关注成功" : "关注问题成功");
                // 如过已经关注，变成取消关注，否则关注
                _this.isFavourite = !_this.isFavourite;
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    DetailsPage.prototype.showAnswerPage = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__answer_answer__["a" /* AnswerPage */], { "id": this.id }); // modal传参
        //关闭后的回调
        modal.onDidDismiss(function () {
            _this.loadQuestion(_this.id); //这样回调后，回答完毕后，父页面同时进行了刷新
        });
        modal.present();
    };
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"F:\ck\project\Ionic\04-01\src\pages\details\details.html"*/'<!--\n  Generated template for the DetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n   <!-- question? 处理可空对象，也叫安全导航 -->\n    <ion-title>{{question?.ContentTitle}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<ion-card>\n  <ion-card-content>\n    {{question?.ContentTitle}}\n  <p> {{question?.LikeCount}} 个关注&nbsp;&nbsp;{{question?.CommentCount}} 个回答</p>\n  <button ion-button small color="secondary" [disabled]="isMyQuestion" (click)="showAnswerPage()"><ion-icon name="add" ></ion-icon>&nbsp;回答</button>\n  &nbsp;&nbsp;<button ion-button small (click)="saveFavourite()">{{isFavourite ?\'取消关注\':\'关注\'}}</button>\n  </ion-card-content>\n</ion-card>\n<ion-card *ngFor="let a  of answers">\n    <ion-item>\n      <ion-avatar item-start>\n       <img src="{{a.HeadFace}}">\n      </ion-avatar>\n      <p>大力{{a.UserNickName}}</p>\n      </ion-item>\n      <ion-card-content>\n        <p>用户回答内容{{a.Content}}</p>\n        <p class="answer_data">2018-09-16{{a.CreateDateTime}}</p>\n      </ion-card-content>\n\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"F:\ck\project\Ionic\04-01\src\pages\details\details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], DetailsPage);
    return DetailsPage;
}(__WEBPACK_IMPORTED_MODULE_2__common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emojipicker_emojipicker__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_list_question_list__ = __webpack_require__(725);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__emojipicker_emojipicker__["a" /* EmojipickerComponent */],
                __WEBPACK_IMPORTED_MODULE_3__question_list_question_list__["a" /* QuestionListComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__emojipicker_emojipicker__["a" /* EmojipickerComponent */]),],
            exports: [__WEBPACK_IMPORTED_MODULE_2__emojipicker_emojipicker__["a" /* EmojipickerComponent */],
                __WEBPACK_IMPORTED_MODULE_3__question_list_question_list__["a" /* QuestionListComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//控制组件 ComponentsModule  导入全局 app.model。
//   注意引入imports: [IonicPageModule.forChild(EmojipickerComponent)], 
//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EMOJI_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojipickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_emoji_emoji__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EmojipickerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
// 实现emojipickerComponent 的providers
var EMOJI_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* forwardRef */])(function () { return EmojipickerComponent; }),
    multi: true,
};
var EmojipickerComponent = (function () {
    function EmojipickerComponent(emojiProvider) {
        // 定义
        this.emojiArray = [];
        this.emojiArray = emojiProvider.getEmojis();
    }
    EmojipickerComponent.prototype.writeValue = function (obj) {
        // Writes a new value to the element.
        this.content = obj;
    };
    EmojipickerComponent.prototype.registerOnChange = function (fn) {
        this.onChanged = fn;
        //  新的内容会做一个更改
        this.setValue(this.content);
        //  setValue 不仅仅是值做一个更改 还要绑定onChanged的function
    };
    EmojipickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    // 再次处理新的内容赋值以及函数的绑定
    EmojipickerComponent.prototype.setValue = function (val) {
        // 定义 setValue  接受一个参数，返回是 any
        this.content += val; //对值做变更，赋上值
        if (this.content) {
            this.onChanged(this.content);
        }
        // 如果这个内容不为空，则把 新的内容onChange给绑定上去
    };
    EmojipickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'emojipicker',template:/*ion-inline-start:"F:\ck\project\Ionic\04-01\src\components\emojipicker\emojipicker.html"*/'<!-- Generated template for the EmojipickerComponent component -->\n<div class="emoji-picker">\n<div class="emoji-items">\n  <ion-slides pager>\n    \n      <ion-slide *ngFor="let items of emojiArray">\n       <span class="emoji-item" (click)="setValue(item)" *ngFor="let item of items">\n      {{item}}</span>\n      </ion-slide>\n      \n  </ion-slides>\n</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             \n</div>\n'/*ion-inline-end:"F:\ck\project\Ionic\04-01\src\components\emojipicker\emojipicker.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_emoji_emoji__["a" /* EmojiProvider */]],
        })
        // 实现接口
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_emoji_emoji__["a" /* EmojiProvider */]])
    ], EmojipickerComponent);
    return EmojipickerComponent;
}());

//# sourceMappingURL=emojipicker.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_common_baseui__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_details_details__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(13);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuestionListComponent = (function (_super) {
    __extends(QuestionListComponent, _super);
    function QuestionListComponent(navCtrl, viewCtrl, navParams, modalCtrl, rest, toast, storage, loadingCtrl) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.viewCtrl = viewCtrl;
        _this.navParams = navParams;
        _this.modalCtrl = modalCtrl;
        _this.rest = rest;
        _this.toast = toast;
        _this.storage = storage;
        _this.loadingCtrl = loadingCtrl;
        return _this;
    }
    // 如何向组件传递参数@Input( 'datatype') dataSourceType;
    QuestionListComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                //加载用户数据
                var loading = _super.prototype.showLoading.call(_this, _this.loadingCtrl, "加载中。。。");
                _this.rest.getUserQuestionList(val, _this.dataSourceType)
                    .subscribe(function (q) {
                    _this.questions = q;
                    loading.dismissAll();
                }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    QuestionListComponent.prototype.gotoDetails = function (questionId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_details_details__["a" /* DetailsPage */], { id: questionId });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('datatype'),
        __metadata("design:type", Object)
    ], QuestionListComponent.prototype, "dataSourceType", void 0);
    QuestionListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'question-list',template:/*ion-inline-start:"F:\ck\project\Ionic\04-01\src\components\question-list\question-list.html"*/'<ion-list>\n  <ion-item *ngFor="let q of questions" (click)="gotoDetails(q.IdentityId)">\n    <h2>{{q.ContentTitle}}</h2>\n    <p>{{q.ContentSummary}}</p>\n  </ion-item>\n</ion-list>'/*ion-inline-end:"F:\ck\project\Ionic\04-01\src\components\question-list\question-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* LoadingController */]])
    ], QuestionListComponent);
    return QuestionListComponent;
}(__WEBPACK_IMPORTED_MODULE_1__pages_common_baseui__["a" /* BaseUI */]));

//# sourceMappingURL=question-list.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelativetimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RelativetimePipe = (function () {
    function RelativetimePipe() {
    }
    RelativetimePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return __WEBPACK_IMPORTED_MODULE_1_moment__(value).toNow();
    };
    RelativetimePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'relativetime',
        })
    ], RelativetimePipe);
    return RelativetimePipe;
}());

//# sourceMappingURL=relativetime.js.map

/***/ }),

/***/ 728:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 285,
	"./af.js": 285,
	"./ar": 286,
	"./ar-dz": 287,
	"./ar-dz.js": 287,
	"./ar-kw": 288,
	"./ar-kw.js": 288,
	"./ar-ly": 289,
	"./ar-ly.js": 289,
	"./ar-ma": 290,
	"./ar-ma.js": 290,
	"./ar-sa": 291,
	"./ar-sa.js": 291,
	"./ar-tn": 292,
	"./ar-tn.js": 292,
	"./ar.js": 286,
	"./az": 293,
	"./az.js": 293,
	"./be": 294,
	"./be.js": 294,
	"./bg": 295,
	"./bg.js": 295,
	"./bm": 296,
	"./bm.js": 296,
	"./bn": 297,
	"./bn.js": 297,
	"./bo": 298,
	"./bo.js": 298,
	"./br": 299,
	"./br.js": 299,
	"./bs": 300,
	"./bs.js": 300,
	"./ca": 301,
	"./ca.js": 301,
	"./cs": 302,
	"./cs.js": 302,
	"./cv": 303,
	"./cv.js": 303,
	"./cy": 304,
	"./cy.js": 304,
	"./da": 305,
	"./da.js": 305,
	"./de": 306,
	"./de-at": 307,
	"./de-at.js": 307,
	"./de-ch": 308,
	"./de-ch.js": 308,
	"./de.js": 306,
	"./dv": 309,
	"./dv.js": 309,
	"./el": 310,
	"./el.js": 310,
	"./en-au": 311,
	"./en-au.js": 311,
	"./en-ca": 312,
	"./en-ca.js": 312,
	"./en-gb": 313,
	"./en-gb.js": 313,
	"./en-ie": 314,
	"./en-ie.js": 314,
	"./en-il": 315,
	"./en-il.js": 315,
	"./en-nz": 316,
	"./en-nz.js": 316,
	"./eo": 317,
	"./eo.js": 317,
	"./es": 318,
	"./es-do": 319,
	"./es-do.js": 319,
	"./es-us": 320,
	"./es-us.js": 320,
	"./es.js": 318,
	"./et": 321,
	"./et.js": 321,
	"./eu": 322,
	"./eu.js": 322,
	"./fa": 323,
	"./fa.js": 323,
	"./fi": 324,
	"./fi.js": 324,
	"./fo": 325,
	"./fo.js": 325,
	"./fr": 326,
	"./fr-ca": 327,
	"./fr-ca.js": 327,
	"./fr-ch": 328,
	"./fr-ch.js": 328,
	"./fr.js": 326,
	"./fy": 329,
	"./fy.js": 329,
	"./gd": 330,
	"./gd.js": 330,
	"./gl": 331,
	"./gl.js": 331,
	"./gom-latn": 332,
	"./gom-latn.js": 332,
	"./gu": 333,
	"./gu.js": 333,
	"./he": 334,
	"./he.js": 334,
	"./hi": 335,
	"./hi.js": 335,
	"./hr": 336,
	"./hr.js": 336,
	"./hu": 337,
	"./hu.js": 337,
	"./hy-am": 338,
	"./hy-am.js": 338,
	"./id": 339,
	"./id.js": 339,
	"./is": 340,
	"./is.js": 340,
	"./it": 341,
	"./it.js": 341,
	"./ja": 342,
	"./ja.js": 342,
	"./jv": 343,
	"./jv.js": 343,
	"./ka": 344,
	"./ka.js": 344,
	"./kk": 345,
	"./kk.js": 345,
	"./km": 346,
	"./km.js": 346,
	"./kn": 347,
	"./kn.js": 347,
	"./ko": 348,
	"./ko.js": 348,
	"./ku": 349,
	"./ku.js": 349,
	"./ky": 350,
	"./ky.js": 350,
	"./lb": 351,
	"./lb.js": 351,
	"./lo": 352,
	"./lo.js": 352,
	"./lt": 353,
	"./lt.js": 353,
	"./lv": 354,
	"./lv.js": 354,
	"./me": 355,
	"./me.js": 355,
	"./mi": 356,
	"./mi.js": 356,
	"./mk": 357,
	"./mk.js": 357,
	"./ml": 358,
	"./ml.js": 358,
	"./mn": 359,
	"./mn.js": 359,
	"./mr": 360,
	"./mr.js": 360,
	"./ms": 361,
	"./ms-my": 362,
	"./ms-my.js": 362,
	"./ms.js": 361,
	"./mt": 363,
	"./mt.js": 363,
	"./my": 364,
	"./my.js": 364,
	"./nb": 365,
	"./nb.js": 365,
	"./ne": 366,
	"./ne.js": 366,
	"./nl": 367,
	"./nl-be": 368,
	"./nl-be.js": 368,
	"./nl.js": 367,
	"./nn": 369,
	"./nn.js": 369,
	"./pa-in": 370,
	"./pa-in.js": 370,
	"./pl": 371,
	"./pl.js": 371,
	"./pt": 372,
	"./pt-br": 373,
	"./pt-br.js": 373,
	"./pt.js": 372,
	"./ro": 374,
	"./ro.js": 374,
	"./ru": 375,
	"./ru.js": 375,
	"./sd": 376,
	"./sd.js": 376,
	"./se": 377,
	"./se.js": 377,
	"./si": 378,
	"./si.js": 378,
	"./sk": 379,
	"./sk.js": 379,
	"./sl": 380,
	"./sl.js": 380,
	"./sq": 381,
	"./sq.js": 381,
	"./sr": 382,
	"./sr-cyrl": 383,
	"./sr-cyrl.js": 383,
	"./sr.js": 382,
	"./ss": 384,
	"./ss.js": 384,
	"./sv": 385,
	"./sv.js": 385,
	"./sw": 386,
	"./sw.js": 386,
	"./ta": 387,
	"./ta.js": 387,
	"./te": 388,
	"./te.js": 388,
	"./tet": 389,
	"./tet.js": 389,
	"./tg": 390,
	"./tg.js": 390,
	"./th": 391,
	"./th.js": 391,
	"./tl-ph": 392,
	"./tl-ph.js": 392,
	"./tlh": 393,
	"./tlh.js": 393,
	"./tr": 394,
	"./tr.js": 394,
	"./tzl": 395,
	"./tzl.js": 395,
	"./tzm": 396,
	"./tzm-latn": 397,
	"./tzm-latn.js": 397,
	"./tzm.js": 396,
	"./ug-cn": 398,
	"./ug-cn.js": 398,
	"./uk": 399,
	"./uk.js": 399,
	"./ur": 400,
	"./ur.js": 400,
	"./uz": 401,
	"./uz-latn": 402,
	"./uz-latn.js": 402,
	"./uz.js": 401,
	"./vi": 403,
	"./vi.js": 403,
	"./x-pseudo": 404,
	"./x-pseudo.js": 404,
	"./yo": 405,
	"./yo.js": 405,
	"./zh-cn": 406,
	"./zh-cn.js": 406,
	"./zh-hk": 407,
	"./zh-hk.js": 407,
	"./zh-tw": 408,
	"./zh-tw.js": 408
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 728;

/***/ })

},[409]);
//# sourceMappingURL=main.js.map