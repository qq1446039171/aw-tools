import{saveAs as e}from"file-saver";import t from"xlsx";function r(){if(!(this instanceof r))return new r;this.SheetNames=[],this.Sheets={}}function n(e){for(var t=new ArrayBuffer(e.length),r=new Uint8Array(t),n=0;n!=e.length;++n)r[n]=255&e.charCodeAt(n);return t}function o({multiHeader:o=[],header:a,data:l,fileName:s,merges:h=[],autoWidth:c=!0,bookType:i="xlsx"}={}){s=s||"excel-list",(l=[...l]).unshift(a);for(let e=o.length-1;e>-1;e--)l.unshift(o[e]);var f="SheetJS",u=new r,g=function(e,r){for(var n,o={},a={s:{c:1e7,r:1e7},e:{c:0,r:0}},l=0;l!=e.length;++l)for(var s=0;s!=e[l].length;++s){a.s.r>l&&(a.s.r=l),a.s.c>s&&(a.s.c=s),a.e.r<l&&(a.e.r=l),a.e.c<s&&(a.e.c=s);var h={v:e[l][s]};if(null!=h.v){var c=t.utils.encode_cell({c:s,r:l});"number"==typeof h.v?h.t="n":"boolean"==typeof h.v?h.t="b":h.v instanceof Date?(h.t="n",h.z=t.SSF._table[14],h.v=(n=h.v,(Date.parse(n)-new Date(Date.UTC(1899,11,30)))/864e5)):h.t="s",o[c]=h}}return a.s.c<1e7&&(o["!ref"]=t.utils.encode_range(a)),o}(l);if(h.length>0&&(g["!merges"]||(g["!merges"]=[]),h.forEach((e=>{g["!merges"].push(t.utils.decode_range(e))}))),c){const e=l.map((e=>e.map((e=>null==e?{wch:10}:e.toString().charCodeAt(0)>255?{wch:2*e.toString().length}:{wch:e.toString().length}))));let t=e[0];for(let r=1;r<e.length;r++)for(let n=0;n<e[r].length;n++)t[n].wch<e[r][n].wch&&(t[n].wch=e[r][n].wch);g["!cols"]=t}u.SheetNames.push(f),u.Sheets.SheetJS=g;var m=t.write(u,{bookType:i,bookSST:!1,type:"binary"});e(new Blob([n(m)],{type:"application/octet-stream"}),`${s}.${i}`)}function a(e){o(e)}export{a as default};
