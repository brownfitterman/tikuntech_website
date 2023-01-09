(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
var wl;

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=960){cw++;}if(w>=1200){cw++;}if(w>=1920){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
ldsrcset=function(t){var e,r=document.querySelectorAll(t);for(e=0;e<r.length;e++){var c=r[e].getAttribute("data-srcset");r[e].setAttribute("srcset",c)}},ldsrc=function(t){var e=document.querySelector(t);if(e){var r=e.getAttribute("data-src");e.setAttribute("src",r)}};ldv=function(t){var e=document.querySelector(t);if(e){var r=document.querySelector(t+" source"),c=r.getAttribute("data-src");r.setAttribute("src",c),e.load()}};!function(){if("Promise"in window&&void 0!==window.performance){var e,t,r=document,n=function(){return r.createElement("link")},o=new Set,a=n(),i=a.relList&&a.relList.supports&&a.relList.supports("prefetch"),s=location.href.replace(/#[^#]+$/,"");o.add(s);var c=function(e){var t=location,r="http:",n="https:";if(e&&e.href&&e.origin==t.origin&&[r,n].includes(e.protocol)&&(e.protocol!=r||t.protocol!=n)){var o=e.pathname;if(!(e.hash&&o+e.search==t.pathname+t.search||"?preload=no"==e.search.substr(-11)||".html"!=o.substr(-5)&&".html"!=o.substr(-5)&&"/"!=o.substr(-1)))return!0}},u=function(e){var t=e.replace(/#[^#]+$/,"");if(!o.has(t)){if(i){var a=n();a.rel="prefetch",a.href=t,r.head.appendChild(a)}else{var s=new XMLHttpRequest;s.open("GET",t,s.withCredentials=!0),s.send()}o.add(t)}},p=function(e){return e.target.closest("a")},f=function(t){var r=t.relatedTarget;r&&p(t)==r.closest("a")||e&&(clearTimeout(e),e=void 0)},d={capture:!0,passive:!0};r.addEventListener("touchstart",function(e){t=performance.now();var r=p(e);c(r)&&u(r.href)},d),r.addEventListener("mouseover",function(r){if(!(performance.now()-t<1200)){var n=p(r);c(n)&&(n.addEventListener("mouseout",f,{passive:!0}),e=setTimeout(function(){u(n.href),e=void 0},80))}},d)}}();

$(function(){
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1920){var e=document.querySelector('.un171');e.setAttribute('src','images/ideate_icon-316-1.png');
var e=document.querySelector('.un172');e.setAttribute('src','images/design_icon-316-1.png');
var e=document.querySelector('.un173');e.setAttribute('src','images/webd_icon-316-1.png');
var a='data-src';var e=document.querySelector('.un174');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/appd_icon-316-1.png');
var a='data-src';var e=document.querySelector('.un175');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/businessg_icon-316-1.png');
var a='data-src';var e=document.querySelector('.un177');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/digitalm_icon-316-1.png');
var a='data-src';var e=document.querySelector('.un178');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/exclude-170-1.png');
var a='data-src';var e=document.querySelector('.un179');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/officemap-728.png');}else if($(window).width()>=1200){var e=document.querySelector('.un171');e.setAttribute('src','images/ideate_icon-197.png');
var e=document.querySelector('.un172');e.setAttribute('src','images/design_icon-197.png');
var e=document.querySelector('.un173');e.setAttribute('src','images/webd_icon-197.png');
var a='data-src';var e=document.querySelector('.un174');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/appd_icon-197.png');
var a='data-src';var e=document.querySelector('.un175');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/businessg_icon-197.png');
var a='data-src';var e=document.querySelector('.un177');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/digitalm_icon-197.png');
var a='data-src';var e=document.querySelector('.un178');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/exclude-106.png');
var a='data-src';var e=document.querySelector('.un179');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/officemap-455.png');}else if($(window).width()>=960){var e=document.querySelector('.un171');e.setAttribute('src','images/ideate_icon-158.png');
var e=document.querySelector('.un172');e.setAttribute('src','images/design_icon-158.png');
var e=document.querySelector('.un173');e.setAttribute('src','images/webd_icon-158.png');
var a='data-src';var e=document.querySelector('.un174');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/appd_icon-158.png');
var a='data-src';var e=document.querySelector('.un175');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/businessg_icon-158.png');
var a='data-src';var e=document.querySelector('.un177');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/digitalm_icon-158.png');
var a='data-src';var e=document.querySelector('.un178');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/exclude-170.png':'images/exclude-85.png');
var a='data-src';var e=document.querySelector('.un179');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/officemap-364.png');}else if($(window).width()>=768){var e=document.querySelector('.un171');e.setAttribute('src','images/ideate_icon-126.png');
var e=document.querySelector('.un172');e.setAttribute('src','images/design_icon-126.png');
var e=document.querySelector('.un173');e.setAttribute('src','images/webd_icon-126.png');
var a='data-src';var e=document.querySelector('.un174');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/appd_icon-126.png');
var a='data-src';var e=document.querySelector('.un175');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/businessg_icon-126.png');
var a='data-src';var e=document.querySelector('.un177');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/digitalm_icon-126.png');
var a='data-src';var e=document.querySelector('.un178');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/exclude-136.png':'images/exclude-68.png');
var a='data-src';var e=document.querySelector('.un179');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/officemap-582.png':'images/officemap-291.png');}else if($(window).width()>=480){var e=document.querySelector('.un171');e.setAttribute('src',(dpi>1)?'images/ideate_icon-160.png':'images/ideate_icon-80.png');
var e=document.querySelector('.un172');e.setAttribute('src',(dpi>1)?'images/design_icon-160.png':'images/design_icon-80.png');
var e=document.querySelector('.un173');e.setAttribute('src',(dpi>1)?'images/webd_icon-160.png':'images/webd_icon-80.png');
var a='data-src';var e=document.querySelector('.un174');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/appd_icon-160.png':'images/appd_icon-80.png');
var a='data-src';var e=document.querySelector('.un175');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/businessg_icon-160.png':'images/businessg_icon-80.png');
var a='data-src';var e=document.querySelector('.un177');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/digitalm_icon-160.png':'images/digitalm_icon-80.png');
var a='data-src';var e=document.querySelector('.un178');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/exclude-84.png':'images/exclude-42.png');
var a='data-src';var e=document.querySelector('.un179');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/officemap-364-1.png':'images/officemap-182.png');}else{var e=document.querySelector('.un171');e.setAttribute('src',(dpi>1)?'images/ideate_icon-106.png':'images/ideate_icon-53.png');
var e=document.querySelector('.un172');e.setAttribute('src',(dpi>1)?'images/design_icon-106.png':'images/design_icon-53.png');
var e=document.querySelector('.un173');e.setAttribute('src',(dpi>1)?'images/webd_icon-106.png':'images/webd_icon-53.png');
var a='data-src';var e=document.querySelector('.un174');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/appd_icon-106.png':'images/appd_icon-53.png');
var a='data-src';var e=document.querySelector('.un175');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/businessg_icon-106.png':'images/businessg_icon-53.png');
var a='data-src';var e=document.querySelector('.un177');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/digitalm_icon-106.png':'images/digitalm_icon-53.png');
var a='data-src';var e=document.querySelector('.un178');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/exclude-56.png':'images/exclude-28.png');
var a='data-src';var e=document.querySelector('.un179');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/officemap-242.png':'images/officemap-121.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
!function(){var e=document.querySelectorAll('a[href^="#"]');[].forEach.call(e,function(e){e.addEventListener("click",function(t){var o=0;if(e.hash.length>1){var n=parseFloat(getComputedStyle(document.body).getPropertyValue("zoom"));n||(n=1);var r=document.querySelectorAll('[name="'+e.hash.slice(1)+'"]')[0];if(!r)return;var l=/chrome/i.test(navigator.userAgent);o=l?r.getBoundingClientRect().top*n+pageYOffset:(r.getBoundingClientRect().top+pageYOffset)*n}if("scrollBehavior"in document.documentElement.style)scroll({top:o,left:0,behavior:"smooth"});else if("requestAnimationFrame"in window){var a=pageYOffset,i=null;requestAnimationFrame(function e(t){i||(i=t);var n=t-i;scrollTo(0,a<o?(o-a)*n/400+a:a-(a-o)*n/400),n<400?requestAnimationFrame(e):scrollTo(0,o)})}else scrollTo(0,o);t.preventDefault()},!1)})}();
setTimeout(function(){$('.un169').prop('disabled',false);if($("input[name='tfrcivym']").attr('value')==undefined){$("input[name='tfrcivym']").attr('value', 'lltixyrsptsuiitrj');}},2000);
var bot=function(o){o(navigator.webdriver||window.chrome&&(window.chrome.app&&!window.chrome.app.installState||void 0!==window.mozInnerScreenX)?1:0)};
bot(function(bt){var i=document.querySelectorAll("input[name='uaswtsq']");for(j=0;j<i.length;++j){i[j].value=bt;}});initMenu($('#m1')[0]);
initMenu($('#m2')[0]);
if(location.hash){var e=location.hash.replace("#",""),o=function(){var t=document.querySelectorAll('[name="'+e+'"]')[0];t&&t.scrollIntoView(),"0px"===window.getComputedStyle(document.body).getPropertyValue("min-width")&&setTimeout(o,100)};o()}

});lfn=function(){ldsrcset('.un246 source');ldsrcset('.un247 source');ldsrcset('.un248 source');ldsrcset('.un249 source');ldsrcset('.un250 source');};if(document.readyState=="complete"){lfn();}else{$(window).on("load",lfn);}