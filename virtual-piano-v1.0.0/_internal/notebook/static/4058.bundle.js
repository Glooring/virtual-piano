"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[4058],{84058:(e,t,s)=>{s.r(t),s.d(t,{RenderedPDF:()=>d,default:()=>c,rendererFactory:()=>r});var a=s(20998),o=s(2549),i=s(63485);const n="application/pdf";class d extends i.Widget{constructor(){super(),this._base64="",this._disposable=null,this._ready=new a.PromiseDelegate,this.addClass("jp-PDFContainer");const e=document.createElement("iframe");this.node.appendChild(e),e.onload=()=>{const t=e.contentWindow.document.createElement("body");t.style.margin="0px",e.contentWindow.document.body=t,this._object=e.contentWindow.document.createElement("object"),window.safari||(this._object.type=n),this._object.width="100%",this._object.height="100%",t.appendChild(this._object),this._ready.resolve(void 0)}}async renderModel(e){await this._ready.promise;const t=e.data[n];if(!t||t.length===this._base64.length&&t===this._base64){if(e.metadata.fragment&&this._object.data){const t=this._object.data;this._object.data=`${t.split("#")[0]}${e.metadata.fragment}`}return l.IS_FIREFOX&&(this._object.data=this._object.data),Promise.resolve(void 0)}this._base64=t;const s=l.b64toBlob(t,n);this._disposable&&this._disposable.dispose();let a=URL.createObjectURL(s);e.metadata.fragment&&(a+=e.metadata.fragment),this._object.data=a,this._disposable=new o.DisposableDelegate((()=>{try{URL.revokeObjectURL(a)}catch(e){}}))}onBeforeHide(){l.IS_FIREFOX&&(this._object.data=this._object.data.split("#")[0])}dispose(){this._disposable&&this._disposable.dispose(),super.dispose()}}const r={safe:!1,mimeTypes:[n],defaultRank:100,createRenderer:e=>new d},c=[{id:"@jupyterlab/pdf-extension:factory",description:"Adds renderer for PDF content.",rendererFactory:r,dataType:"string",documentWidgetFactoryOptions:{name:"PDF",modelName:"base64",primaryFileType:"PDF",fileTypes:["PDF"],defaultFor:["PDF"]}}];var l;!function(e){e.IS_FIREFOX=/Firefox/.test(navigator.userAgent),e.b64toBlob=function(e,t="",s=512){const a=atob(e),o=[];for(let e=0;e<a.length;e+=s){const t=a.slice(e,e+s),i=new Array(t.length);for(let e=0;e<t.length;e++)i[e]=t.charCodeAt(e);const n=new Uint8Array(i);o.push(n)}return new Blob(o,{type:t})}}(l||(l={}))}}]);