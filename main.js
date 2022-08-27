/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var e={};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.p="";var n=function(){function e(t,n,r,o,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._likes=t.likes,this._id=t._id,this._templateSelector=n,this._handleCardClick=r,this._confirmPopup=document.querySelector(".popup-confirm"),this.cardOwnerId=t.owner._id,this._myId=i._id,this._deletePopup=o}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".elements__card").cloneNode(!0)}},{key:"_handleLikeClick",value:function(){this._likeButton.classList.toggle("button-like_active")}},{key:"_handleDeleteClick",value:function(){this._element.remove()}},{key:"_deleteCard",value:function(){this._handleCardClick(),this._element=null}},{key:"_handleOpenImage",value:function(){this._handleCardClick(this._name,this._link)}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton=this._element.querySelector(".button-like"),this._deleteButton=this._element.querySelector(".button-delete"),this._cardImage=this._element.querySelector(".elements__card-image"),this._cardHeading=this._element.querySelector(".elements__card-heading"),this.likeCounter=this._element.querySelector(".button-like__counter"),this._likeButton.addEventListener("click",(function(){e._handleLikeClick()})),this._deleteButton.classList.contains("button-delete_inactive")||this._deleteButton.addEventListener("click",(function(){e._deletePopup(e._deleteCard.bind(e),e._id)})),this._cardImage.addEventListener("click",(function(){e._handleOpenImage()}))}},{key:"_setLike",value:function(){this.likeCounter.classList.toggle("button-like__counter_inactive")}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._setEventListeners(),this._setLike(),this.cardOwnerId!==this._myId&&this._deleteButton.classList.add("button-delete_inactive"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardHeading.textContent=this._name,this.likeCounter.textContent=this._likes.length,this._element}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector))}var t,n;return t=e,(n=[{key:"_showError",value:function(e,t){var n=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideError(e):this._showError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState(e._inputList)}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(e){this._hasInvalidInput(e)?this.disableButton():(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"disableButton",value:function(){this._buttonElement.setAttribute("disabled",!0),this._buttonElement.classList.add(this._inactiveButtonClass)}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(this._inputList),this._inputList.forEach((function(t){e._hideError(t)}))}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){var r=t.data,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(e){var t=this;this.clear(),this._renderedItems=e,this._renderedItems.forEach((function(e){t._renderer(e)}))}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),u=[{name:"Ангелы",link:e.p+"221459de090a999643fa.jpg"},{name:"Исаакиевский Собор",link:e.p+"eeb56558ed893657abae.jpg"},{name:"Казанский собор",link:e.p+"6a25d9b7b94e5795a839.jpg"},{name:"Лахта Центр",link:e.p+"4ecd4a86c267c3651a60.jpg"},{name:"Вантовый мост",link:e.p+"f9b49f40ce69aa79140b.jpg"},{name:"Витебский вокзал",link:e.p+"1c34a449bebce03d7d5e.jpg"}],c={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".button-save",inactiveButtonClass:"button-save_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},s=document.querySelector(".button-add"),l=document.querySelector(".button-edit"),f=(document.querySelector("#profile-close"),document.querySelector("#item-close"),document.querySelector("#image-close"),document.querySelector(".popup-edit"),document.querySelector(".popup-newitem"),document.querySelector(".popup-image"),document.querySelector("#card-form")),p=document.querySelector("#edit-form");function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}document.querySelector("#avatar-form"),p.querySelector("#name"),p.querySelector("#about"),document.querySelector(".profile__name"),document.querySelector(".profile__description"),document.querySelector(".popup-image__img"),document.querySelector(".popup-image__description"),document.querySelector("#name"),document.querySelector("#link");var d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._closeButton=this._popup.querySelector(".button-close"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleBgClose",value:function(e){e.target.classList.contains("popup_opened")&&this.close()}},{key:"setEventListeners",value:function(){this._closeButton.addEventListener("click",this.close.bind(this)),this._popup.addEventListener("click",this._handleBgClose.bind(this))}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=_(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function _(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function g(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup-image__img"),t._popupDescription=t._popup.querySelector(".popup-image__description"),t.setEventListeners(),t}return t=a,(n=[{key:"open",value:function(e,t){this._popupImage.alt=e,this._popupImage.src=t,this._popupDescription.textContent=e,m(w(a.prototype),"open",this).call(this)}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(d);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=L(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},O.apply(this,arguments)}function L(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}function j(e,t){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},j(e,t)}function C(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleFormSubmit=r,t._inputList=t._popup.querySelectorAll(".popup__input"),t._form=t._popup.querySelector(".popup__form"),t.setEventListeners(),t}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e._form.reset(),e.close()})),O(P(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this._form.reset(),O(P(a.prototype),"close",this).call(this)}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(d);function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t,n,r){var o,i,a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i=function(){return a._userInfo},(o="getSavedInfo")in this?Object.defineProperty(this,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):this[o]=i,this._profileName=document.querySelector(t),this._profileInfo=document.querySelector(n),this._avatar=document.querySelector(r)}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return this._firstname=this._profileName.textContent,this._description=this._profileInfo.textContent,this.info={name:this._firstname,about:this._description},this.info}},{key:"setUserInfo",value:function(e,t){this._profileName.textContent=e,this._profileInfo.textContent=t}},{key:"setUserAvatar",value:function(e){this._avatar.src=e}},{key:"saveUserInfo",value:function(e){this._userInfo=e}}],n&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function B(){B=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),a=new S(r||[]);return i._invoke=function(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=g(a,n);if(u){if(u===l)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=s(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(e,n,a),i}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var l={};function f(){}function p(){}function h(){}var d={};u(d,o,(function(){return this}));var y=Object.getPrototypeOf,v=y&&y(y(E([])));v&&v!==t&&n.call(v,o)&&(d=v);var m=h.prototype=f.prototype=Object.create(d);function _(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){function r(o,i,a,u){var c=s(e[o],e,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==R(f)&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,a,u)}),(function(e){r("throw",e,a,u)})):t.resolve(f).then((function(e){l.value=e,a(l)}),(function(e){return r("throw",e,a,u)}))}u(c.arg)}var o;this._invoke=function(e,n){function i(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(i,i):i()}}function g(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,g(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=s(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,l;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function E(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=h,u(m,"constructor",h),u(h,"constructor",p),p.displayName=u(h,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,u(e,a,"GeneratorFunction")),e.prototype=Object.create(m),e},e.awrap=function(e){return{__await:e}},_(b.prototype),u(b.prototype,i,(function(){return this})),e.AsyncIterator=b,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new b(c(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},_(m),u(m,a,"Generator"),u(m,o,(function(){return this})),u(m,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=E,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),k(n),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:E(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},e}function T(e,t,n,r,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}function U(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){T(i,r,o,a,u,"next",e)}function u(e){T(i,r,o,a,u,"throw",e)}a(void 0)}))}}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var V=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n,r,o,i,a,u;return t=e,n=[{key:"getUserProfile",value:(u=U(B().mark((function e(){var t,n;return B().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(this._baseUrl,"/cohort-49/users/me"),{headers:this._headers});case 3:return t=e.sent,e.next=6,this._getResponse(t);case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.log("Не удалось получить данные профиля!");case 13:case"end":return e.stop()}}),e,this,[[0,10]])}))),function(){return u.apply(this,arguments)})},{key:"getInitialCards",value:(a=U(B().mark((function e(){var t,n;return B().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(this._baseUrl,"/cohort-49/cards"),{headers:this._headers});case 3:return t=e.sent,e.next=6,this._getResponse(t);case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.log("Не удалось получить данные карточек!");case 13:case"end":return e.stop()}}),e,this,[[0,10]])}))),function(){return a.apply(this,arguments)})},{key:"setUserProfile",value:(i=U(B().mark((function e(t){var n,r;return B().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(this._baseUrl,"/cohort-49/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.about})});case 3:return n=e.sent,e.next=6,this._getResponse(n);case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.log("Не удалось отправить данные!=(");case 13:case"end":return e.stop()}}),e,this,[[0,10]])}))),function(e){return i.apply(this,arguments)})},{key:"postCard",value:(o=U(B().mark((function e(t){var n,r;return B().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(this._baseUrl,"/cohort-49/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.name,link:t.link})});case 3:return n=e.sent,e.next=6,this._getResponse(n);case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.log("Не удалось отправить карточку!=(");case 13:case"end":return e.stop()}}),e,this,[[0,10]])}))),function(e){return o.apply(this,arguments)})},{key:"deleteCard",value:(r=U(B().mark((function e(t){var n,r;return B().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(this._baseUrl,"/cohort-49/cards/").concat(t),{method:"DELETE",headers:this._headers});case 3:return n=e.sent,e.next=6,this._getResponse(n);case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.log("Не удалось удалить карточку!");case 13:case"end":return e.stop()}}),e,this,[[0,10]])}))),function(e){return r.apply(this,arguments)})},{key:"_getResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}}],n&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function F(e){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(e)}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(){return D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=G(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},D.apply(this,arguments)}function G(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=J(e)););return e}function H(e,t){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},H(e,t)}function M(e,t){if(t&&("object"===F(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function J(e){return J=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},J(e)}var Y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&H(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=J(r);if(o){var n=J(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return M(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleFormSubmit=r,t._setEventListeners(),t}return t=a,(n=[{key:"_setEventListeners",value:function(){var e=this;this._form=this._popup.querySelector(".popup__form"),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e.deleteCard,e.id)})),D(J(a.prototype),"setEventListeners",this).call(this)}},{key:"open",value:function(e,t){D(J(a.prototype),"open",this).call(this),this.deleteCard=e,this.id=t}}])&&N(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(d);function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var $=new o(c,f);$.enableValidation();var K=new o(c,p);K.enableValidation();var Q=new a({data:u,renderer:function(e){Q.addItem(oe(e))}},".elements"),W=new k(".popup-image"),X=new Y({popupSelector:".popup-confirm",handleFormSubmit:function(e,t){ne.deleteCard(t).then((function(){X.close()}))}}),Z=new x({popupSelector:".popup-newitem",handleFormSubmit:function(e){ne.postCard(e).then((function(e){Q.addItem(oe(e))}))}}),ee=new x({popupSelector:".popup-edit",handleFormSubmit:function(e){ne.setUserProfile(e).then((function(e){te.setUserInfo(e.name,e.about),ee.close()}))}}),te=new q(".profile__name",".profile__description",".profile__avatar"),ne=new V({baseUrl:"https://mesto.nomoreparties.co/v1",headers:{authorization:"a708ea48-103c-4b33-ba20-afa3b6d8d32c","Content-Type":"application/json"}});function re(e,t){W.open(e,t)}function oe(e){return new n(e,".card-template_type_default",re,X.open.bind(X),te.getSavedInfo()).generateCard()}Promise.all([ne.getUserProfile(),ne.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];te.saveUserInfo(o),te.setUserInfo(o.name,o.about),te.setUserAvatar(o.avatar),Q.renderItems(i)})),s.addEventListener("click",(function(){Z.open(),$.disableButton(),$.resetValidation()})),l.addEventListener("click",(function(){var e;ee.open(),e=te.getUserInfo(),ee.setInputValues(e),K.resetValidation()}))})();