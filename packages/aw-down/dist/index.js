function e(e,n,t,o,s,i,r,d,a,c){"boolean"!=typeof r&&(a=d,d=r,r=!1);const f="function"==typeof t?t.options:t;let l;if(e&&e.render&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,s&&(f.functional=!0)),o&&(f._scopeId=o),i?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,a(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},f._ssrRegister=l):n&&(l=r?function(e){n.call(this,c(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,d(e))}),l)if(f.functional){const e=f.render;f.render=function(n,t){return l.call(t),e(n,t)}}else{const e=f.beforeCreate;f.beforeCreate=e?[].concat(e,l):[l]}return t}const n={name:"aw-ui-down"};var t=function(){var e=this,n=e.$createElement;return(e._self._c||n)("h1",{staticClass:"aw-down"},[e._v("hellow")])};t._withStripped=!0;const o=e({render:t,staticRenderFns:[]},undefined,n,undefined,false,undefined,!1,void 0,void 0,void 0);o.install=e=>{e.component(o.name,o)};export{o as default};