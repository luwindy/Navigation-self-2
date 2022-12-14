// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"epB2":[function(require,module,exports) {
var $siteList = $('.siteList');
var $lastLi = $siteList.find('.addSite');
var x = localStorage.getItem('x');
var xObject = JSON.parse(x);
var hashMap = xObject || [{ logo: 'A', url: 'https://www.acfun.cn' }, { logo: 'B', url: 'https://www.bilibili.com' }];

var simplifyUrl = function simplifyUrl(url) {
    return url.replace('https://', '').replace('http://', '').replace('www.', '').replace(/\/.*/, '').replace('.com', '');
};

var render = function render() {
    $siteList.find('li:not(.addSite)').remove(); /*????????????????????????li;???????????????????????????*/
    hashMap.forEach(function (node, index) {
        //node????????????????????????hashMap????????????
        // ?????????$?????????
        var $li = $('<li>                        \n                <div class="site">\n                    <div class="logo">' + node.logo[0] + '</div>\n                    <div class="link">' + simplifyUrl(node.url) + '</div>\n                    <div class="close">\xD7</div>\n                </div>\n                    </li>').insertBefore($lastLi);
        $li.on('click', function () {
            window.open(node.url);
        });
        $li.on('click', '.close', function (e) {
            e.stopPropagation(); //????????????
            hashMap.splice(index, 1); //???????????????????????????????????????????????????
            render();
        });
    });
};

render();

$('.addSite').on('click', function () {
    var url = window.prompt('??????????????????????????????????????????');
    if (url.indexOf('http') !== 0) {
        url = 'https://' + url;
    }
    hashMap.push({ logo: simplifyUrl(url)[0].toUpperCase(), logoType: 'text', url: url });
    render();
});

// ????????????????????????
window.onbeforeunload = function () {
    var string = JSON.stringify(hashMap);
    window.localStorage.setItem('x', string);
};

// ????????????
$(document).on('keypress', function (e) {
    var key = e.key; //?????????key=e.key

    for (var i = 0; i < hashMap.length; i++) {
        if (hashMap[i].logo === key.toUpperCase()) {
            window.open(hashMap[i].url);
        }
    }
});

/*__________??????????????????_______@????????????___*/

var Time = function Time() {
    console.log('fuck');
    var timeLocal = new Date();
    var newTime = timeLocal.toString().split(' ');
    var week = newTime[0];
    var months = newTime[1];
    var date = newTime[2];
    var splitTime = newTime[4].split(':');

    switch (months) {
        case 'Jan':
            months = "??????";
            break;
        case 'Feb':
            months = "??????";
            break;
        case 'Mar':
            months = "??????";
            break;
        case 'Apr':
            months = "??????";
            break;
        case 'May':
            months = "??????";
            break;
        case 'Jun':
            months = "??????";
            break;
        case 'Jul':
            months = "??????";
            break;
        case 'Aug':
            months = "??????";
            break;
        case 'Sept':
            months = "??????";
            break;
        case 'Oct':
            months = "??????";
            break;
        case 'Nov':
            months = "?????????";
            break;
        case 'Dec':
            months = "?????????";
            break;
    }
    switch (week) {
        case 'Mon':
            week = "??????";
            break;
        case 'Tues':
            week = "??????";
            break;
        case 'Wed':
            week = "??????";
            break;
        case 'Thur':
            week = "??????";
            break;
        case 'Fri':
            week = "??????";
            break;
        case 'Sat':
            week = "??????";
            break;
        case 'Sun':
            week = "??????";
            break;
    }
    document.getElementById('localTime').value = splitTime[0] + ':' + splitTime[1];
    document.getElementById('date').value = months + '     ' + date + '     ' + week;
};

Time();
setInterval(Time, 20000);

/*__________??????????????????_______@??????___*/

// $(
//     function(){
//     // ?????????????????????
//     let _Mark = localStorage.getItem("_Mark");
//     if(_Mark){
//         $(".box").html(_Mark);
//         auto_timer();
//     }
//     // ????????????????????????
//     document.oncontextmenu = function(){
//         return false;
//     }
//     // ??????????????????????????????
//     $(document).mousedown(function(e){
//         var key = e.which; // ??????????????????????????????3?????????1???????????????2???
//         if(key === 3){
//             var x = e.clientX;
//             var y = e.clientY;
//             $("#test").html("X = " + x + " : Y = " + y);
//             $(".menu").show().css({left:x,top:y});
//         }
//     });
//     // ????????????
//     // $(document).click(function(){
//     //     $(".menu").hide();
//     // });
//
// });
// // ???????????????
// function tz_menu(flag){
//     // ????????????
//     if(flag === 1){
//         // ????????????????????????????????????
//         var left = $(".menu").offset().left;
//         var top = $(".menu").offset().top;
//
//         // ??????1???3????????????
//         var random = Math.floor(Math.random()*3) + 1;
//
//         $(".box").append("<div class='b_list animated rollIn' style='left:"+left+"px;top:"+top+"px;'><img src='images/"+random+".png' alt='??????' width='294' height='310'/>"+
//             "<div class='b_content' contenteditable='true'></div>"+
//             "<p class='timer'><span>3</span>??????????????????</p></div>");
//         auto_timer();
//     }
//     // ????????????
//     if(flag === 2){
//         $(".b_list").removeClass("animated rollIn").addClass("animated bounceOut").fadeOut(1000);
//         // ????????????
//         localStorage.removeItem("_Mark");
//     }
// // }
// // // ??????????????????
// function auto_timer(){
//     var count = 3;
//     var timer = setInterval(function(){
//         if(count <= 0){
//             count = 3;
//             // ??????????????????
//             localStorage.setItem("_Mark",$(".box").html());   /*xing*/
//         }
//         $(".timer").find("span").text(count);
//         count--;
//     },1000);
// }
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.a2e54efe.map