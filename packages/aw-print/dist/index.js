const t=function(e,n){if(!(this instanceof t))return new t(e,n);this.options=this.extend({noPrint:".no-print",onStart:function(){},onEnd:function(){}},n),this.dom="string"==typeof e?document.querySelector(e):e,this.init()};t.prototype={init:function(){let t=this.getStyle()+this.getHtml();this.writeIframe(t)},extend:function(t,e){for(let n in e)t[n]=e[n];return t},getStyle:function(){let t="",e=document.querySelectorAll("style,link");for(let n=0;n<e.length;n++)t+=e[n].outerHTML;return t+="<style>"+(this.options.noPrint?this.options.noPrint:".no-print")+"{display:none;}</style>",t},getHtml:function(){let t=document.querySelectorAll("input"),e=document.querySelectorAll("textarea"),n=document.querySelectorAll("select");for(let e in t)"checkbox"===t[e].type||"radio"===t[e].type?!0===t[e].checked?t[e].setAttribute("checked","checked"):t[e].removeAttribute("checked"):"text"===t[e].type&&t[e].setAttribute("value",t[e].value);for(let t in e)"textarea"===e[t].type&&(e[t].innerHTML=e[t].value);for(let t in n)if("select-one"===n[t].type){let e=n[t].children;for(let t in e)"OPTION"===e[t].tagName&&(!0===e[t].selected?e[t].setAttribute("selected","selected"):e[t].removeAttribute("selected"))}return this.dom.outerHTML},writeIframe:function(t){let e,n,o=document.createElement("iframe"),i=document.body.appendChild(o);o.id="myIframe",o.style="position:absolute;width:0;height:0;top:-10px;left:-10px;",e=i.contentWindow||i.contentDocument,n=i.contentDocument||i.contentWindow.document,n.open(),n.write(t),n.close(),this.toPrint(e,(function(){document.body.removeChild(o)}))},toPrint:function(t,e){let n=this;t.onload=function(){try{setTimeout((function(){t.focus(),"function"==typeof n.options.onStart&&n.options.onStart(),t.document.execCommand("print",!1,null)||t.print(),"function"==typeof n.options.onEnd&&n.options.onEnd(),t.close(),e&&e()}))}catch(t){console.log("err",t)}}}};const e=function(e){e.prototype.$print=t};export{e as default};
