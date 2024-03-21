(window.webpackJsonp=window.webpackJsonp||[]).push([[33,31,32,34],{182:function(t,n,e){"use strict";e.d(n,"d",(function(){return i})),e.d(n,"a",(function(){return r})),e.d(n,"j",(function(){return o})),e.d(n,"i",(function(){return a})),e.d(n,"f",(function(){return u})),e.d(n,"g",(function(){return l})),e.d(n,"h",(function(){return c})),e.d(n,"c",(function(){return f})),e.d(n,"b",(function(){return p})),e.d(n,"e",(function(){return h})),e.d(n,"k",(function(){return d}));const i=/#.*$/u,s=/\.(md|html)$/u,r=/\/$/u,o=/^[a-z]+:/iu,a=t=>decodeURI(t).replace(i,"").replace(s,""),u=t=>o.test(t),l=t=>t.startsWith("mailto:"),c=t=>t.startsWith("tel:"),f=t=>{if(u(t))return t;const n=i.exec(t),e=n?n[0]:"",s=a(t);return s.endsWith("/")?t:`${s}.html${e}`},p=t=>/(\.html|\/)$/u.test(t)?t:t+"/",h=(t,n)=>{const e=decodeURIComponent(t.hash),s=(t=>{const n=i.exec(t);return n?n[0]:""})(n);if(s&&e!==s)return!1;return a(t.path)===a(n)},d=(t,n,e)=>{if(u(t))return t;const i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return`${n}${t}`;const s=n.split("/");e&&s[s.length-1]||s.pop();const r=t.replace(/^\//u,"").split("/");for(let t=0;t<r.length;t++){const n=r[t];".."===n?s.pop():"."!==n&&s.push(n)}return""!==s[0]&&s.unshift(""),s.join("/")}},184:function(t,n,e){"use strict";e.r(n);var i=e(0),s=e(182),r=i.a.extend({name:"NavLink",props:{item:{type:Object,required:!0}},computed:{link(){return Object(s.c)(this.item.link)},active(){return this.$site.locales&&Object.keys(this.$site.locales).some(t=>t===this.link)||"/"===this.link?this.$route.path===this.link:this.$route.path.startsWith(this.link)},isNonHttpURI(){return Object(s.g)(this.link)||Object(s.h)(this.link)},isBlankTarget(){return"_blank"===this.target},isInternal(){return!Object(s.f)(this.link)&&!this.isBlankTarget},target(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(s.f)(this.link)?"_blank":""},rel(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction(){this.$emit("focusout")}}}),o=(e(199),e(1)),a=Object(o.a)(r,(function(){var t=this,n=t._self._c;t._self._setupProxy;return t.isInternal?n("RouterLink",{staticClass:"nav-link",class:{active:t.active},attrs:{to:t.link},nativeOn:{focusout:function(n){return t.focusoutAction.apply(null,arguments)}}},[t.item.icon?n("i",{class:`iconfont ${t.$themeConfig.iconPrefix}${t.item.icon}`}):t._e(),t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t.item.icon?n("i",{class:`iconfont ${t.$themeConfig.iconPrefix}${t.item.icon}`}):t._e(),t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,null,null);n.default=a.exports},189:function(t,n,e){},197:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));const i=(t,n="")=>{var e;const s=n+(t.prefix||""),r={...t};return s&&(void 0!==r.link&&(r.link=s+r.link),delete r.prefix),(null===(e=r.items)||void 0===e?void 0:e.length)?Object.assign(r,{type:"links",items:r.items.map(t=>i(t,s))}):r.type="link",r}},199:function(t,n,e){"use strict";e(189)},206:function(t,n,e){},224:function(t,n,e){},234:function(t,n,e){"use strict";e.r(n);var i=e(0),s=e(184),r=i.a.extend({name:"DropdownLink",components:{NavLink:s.default},props:{item:{type:Object,required:!0}},data:()=>({open:!1}),computed:{dropdownAriaLabel(){return this.item.ariaLabel||this.item.text}},watch:{$route(){this.open=!1}},methods:{setOpen(t){this.open=t},handleDropdown(t){0===t.detail&&this.setOpen(!this.open)},isLastItemOfArray:(t,n)=>!!Array.isArray(n)&&t===n[n.length-1]}}),o=(e(254),e(1)),a=Object(o.a)(r,(function(){var t=this,n=t._self._c;t._self._setupProxy;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.handleDropdown}},[t._t("title",(function(){return[n("span",{staticClass:"title"},[t.item.icon?n("i",{class:`iconfont ${t.$themeConfig.iconPrefix}${t.item.icon}`}):t._e(),t._v("\n        "+t._s(t.item.text)+"\n      ")])]})),t._v(" "),n("span",{staticClass:"arrow"})],2),t._v(" "),n("ul",{staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?[n("h4",{staticClass:"dropdown-subtitle"},[e.link?n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.children)&&0===e.children.length&&t.setOpen(!1)}}}):n("span",[t._v(t._s(e.text))])],1),t._v(" "),n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(i){return n("li",{key:i.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:i},on:{focusout:function(n){t.isLastItemOfArray(i,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0)]:n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],2)})),0)])}),[],!1,null,null,null);n.default=a.exports},254:function(t,n,e){"use strict";e(206)},278:function(t,n,e){"use strict";e(224)},288:function(t,n,e){"use strict";e.r(n);var i=e(0),s=e(234),r=e(184),o=e(197),a=i.a.extend({name:"NavLinks",components:{DropdownLink:s.default,NavLink:r.default},computed:{navLinks(){return(this.$themeLocaleConfig.nav||this.$themeConfig.nav||[]).map(t=>Object(o.a)(t))}}}),u=(e(278),e(1)),l=Object(u.a)(a,(function(){var t=this._self._c;this._self._setupProxy;return t("nav",{staticClass:"nav-links"},this._l(this.navLinks,(function(n){return t("div",{key:n.link,staticClass:"nav-item"},["links"===n.type?t("DropdownLink",{attrs:{item:n}}):t("NavLink",{attrs:{item:n}})],1)})),0)}),[],!1,null,null,null);n.default=l.exports}}]);