(window.webpackJsonp=window.webpackJsonp||[]).push([[29,30,32,34],{182:function(t,e,n){"use strict";n.d(e,"d",(function(){return s})),n.d(e,"a",(function(){return r})),n.d(e,"j",(function(){return a})),n.d(e,"i",(function(){return o})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return u})),n.d(e,"h",(function(){return c})),n.d(e,"c",(function(){return f})),n.d(e,"b",(function(){return h})),n.d(e,"e",(function(){return d})),n.d(e,"k",(function(){return m}));const s=/#.*$/u,i=/\.(md|html)$/u,r=/\/$/u,a=/^[a-z]+:/iu,o=t=>decodeURI(t).replace(s,"").replace(i,""),l=t=>a.test(t),u=t=>t.startsWith("mailto:"),c=t=>t.startsWith("tel:"),f=t=>{if(l(t))return t;const e=s.exec(t),n=e?e[0]:"",i=o(t);return i.endsWith("/")?t:`${i}.html${n}`},h=t=>/(\.html|\/)$/u.test(t)?t:t+"/",d=(t,e)=>{const n=decodeURIComponent(t.hash),i=(t=>{const e=s.exec(t);return e?e[0]:""})(e);if(i&&n!==i)return!1;return o(t.path)===o(e)},m=(t,e,n)=>{if(l(t))return t;const s=t.charAt(0);if("/"===s)return t;if("?"===s||"#"===s)return`${e}${t}`;const i=e.split("/");n&&i[i.length-1]||i.pop();const r=t.replace(/^\//u,"").split("/");for(let t=0;t<r.length;t++){const e=r[t];".."===e?i.pop():"."!==e&&i.push(e)}return""!==i[0]&&i.unshift(""),i.join("/")}},184:function(t,e,n){"use strict";n.r(e);var s=n(0),i=n(182),r=s.a.extend({name:"NavLink",props:{item:{type:Object,required:!0}},computed:{link(){return Object(i.c)(this.item.link)},active(){return this.$site.locales&&Object.keys(this.$site.locales).some(t=>t===this.link)||"/"===this.link?this.$route.path===this.link:this.$route.path.startsWith(this.link)},isNonHttpURI(){return Object(i.g)(this.link)||Object(i.h)(this.link)},isBlankTarget(){return"_blank"===this.target},isInternal(){return!Object(i.f)(this.link)&&!this.isBlankTarget},target(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(i.f)(this.link)?"_blank":""},rel(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction(){this.$emit("focusout")}}}),a=(n(199),n(1)),o=Object(a.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return t.isInternal?e("RouterLink",{staticClass:"nav-link",class:{active:t.active},attrs:{to:t.link},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t.item.icon?e("i",{class:`iconfont ${t.$themeConfig.iconPrefix}${t.item.icon}`}):t._e(),t._v("\n  "+t._s(t.item.text)+"\n")]):e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t.item.icon?e("i",{class:`iconfont ${t.$themeConfig.iconPrefix}${t.item.icon}`}):t._e(),t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?e("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.default=o.exports},188:function(t,e,n){"use strict";n.r(e);var s=n(0).a.extend({name:"MyTransition",props:{delay:{type:Number,default:0},duration:{type:Number,default:.25}},methods:{setStyle(t){t.style.transition=`transform ${this.duration}s ease-in-out ${this.delay}s, opacity ${this.duration}s ease-in-out ${this.delay}s`,t.style.transform="translateY(-20px)",t.style.opacity="0"},unsetStyle(t){t.style.transform="translateY(0)",t.style.opacity="1"}}}),i=(n(227),n(1)),r=Object(i.a)(s,(function(){var t=this._self._c;this._self._setupProxy;return t("transition",{attrs:{name:"drop",appear:""},on:{appear:this.setStyle,"after-appear":this.unsetStyle,enter:this.setStyle,"after-enter":this.unsetStyle,"before-leave":this.setStyle}},[this._t("default")],2)}),[],!1,null,null,null);e.default=r.exports},189:function(t,e,n){},191:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));const s=(t,e,n)=>{if(t)if(t.startsWith("/"))n.path!==t&&e.push(t);else if(t.startsWith("http://")||t.startsWith("https://")||t.startsWith("mailto:"))window&&window.open(t);else{const s=n.path.slice(0,n.path.lastIndexOf("/"));e.push(`${s}/${encodeURI(t)}`)}}},194:function(t,e,n){},199:function(t,e,n){"use strict";n(189)},227:function(t,e,n){"use strict";n(194)},456:function(t,e,n){},485:function(t,e,n){"use strict";n(456)},527:function(t,e,n){"use strict";n.r(e);var s=n(0),i=n(188),r=n(184),a=n(191),o=s.a.extend({name:"Home",components:{MyTransition:i.default,NavLink:r.default},computed:{actionLinks(){const{action:t}=this.$frontmatter;return Array.isArray(t)?t:[t]}},methods:{navigate(t){Object(a.a)(t,this.$router,this.$route)}}}),l=(n(485),n(1)),u=Object(l.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.$frontmatter.heroText?"main-title":null}},[e("header",{staticClass:"hero"},[e("MyTransition",[t.$frontmatter.heroImage?e("img",{key:"light",class:{light:Boolean(t.$frontmatter.darkHeroImage)},attrs:{src:t.$withBase(t.$frontmatter.heroImage),alt:t.$frontmatter.heroAlt||"HomeLogo"}}):t._e()]),t._v(" "),e("MyTransition",[t.$frontmatter.darkHeroImage?e("img",{key:"dark",staticClass:"dark",attrs:{src:t.$withBase(t.$frontmatter.darkHeroImage),alt:t.$frontmatter.heroAlt||"HomeLogo"}}):t._e()]),t._v(" "),e("div",{staticClass:"hero-info"},[e("MyTransition",{attrs:{delay:.04}},[!1!==t.$frontmatter.heroText?e("h1",{attrs:{id:"main-title"},domProps:{textContent:t._s(t.$frontmatter.heroText||t.$title||"Hello")}}):t._e()]),t._v(" "),e("MyTransition",{attrs:{delay:.08}},[e("p",{staticClass:"description",domProps:{textContent:t._s(t.$frontmatter.tagline||t.$description||"Welcome to your VuePress site")}})]),t._v(" "),e("MyTransition",{attrs:{delay:.12}},[t.$frontmatter.action?e("p",{staticClass:"action"},t._l(t.actionLinks,(function(t){return e("NavLink",{key:t.text,staticClass:"action-button",class:t.type||"",attrs:{item:t}})})),1):t._e()])],1)],1),t._v(" "),e("MyTransition",{attrs:{delay:.16}},[t.$frontmatter.features&&t.$frontmatter.features.length?e("div",{staticClass:"features"},[t._l(t.$frontmatter.features,(function(n,s){return[n.link?e("div",{key:s,staticClass:"feature link",class:"feature"+s%9,attrs:{tabindex:"0",role:"navigation"},on:{click:function(e){return t.navigate(n.link)}}},[e("h2",[t._v(t._s(n.title))]),t._v(" "),e("p",[t._v(t._s(n.details))])]):e("div",{key:s,staticClass:"feature",class:"feature"+s%9},[e("h2",[t._v(t._s(n.title))]),t._v(" "),e("p",[t._v(t._s(n.details))])])]}))],2):t._e()]),t._v(" "),e("MyTransition",{attrs:{delay:.24}},[e("Content",{staticClass:"theme-default-content custom"})],1)],1)}),[],!1,null,null,null);e.default=u.exports}}]);