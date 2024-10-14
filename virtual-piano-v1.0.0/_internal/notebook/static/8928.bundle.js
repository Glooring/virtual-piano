"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[8928,7900],{67900:(t,e,i)=>{i.r(e),i.d(e,{IImageTracker:()=>r,ImageViewer:()=>l,ImageViewerFactory:()=>d});var s=i(20998);const r=new s.Token("@jupyterlab/imageviewer:IImageTracker","A widget tracker for images.\n  Use this if you want to be able to iterate over and interact with images\n  viewed by the application.");var a,o=i(68722),n=i(53312),c=i(65903),h=i(63485);class l extends h.Widget{constructor(t){super(),this._scale=1,this._matrix=[1,0,0,1],this._colorinversion=0,this._ready=new s.PromiseDelegate,this.context=t,this.node.tabIndex=0,this.addClass("jp-ImageViewer"),this._img=document.createElement("img"),this.node.appendChild(this._img),this._onTitleChanged(),t.pathChanged.connect(this._onTitleChanged,this),t.ready.then((()=>{if(this.isDisposed)return;const e=t.contentsModel;this._mimeType=e.mimetype,this._render(),t.model.contentChanged.connect(this.update,this),t.fileChanged.connect(this.update,this),this._ready.resolve(void 0)}))}[n.Printing.symbol](){return()=>n.Printing.printWidget(this)}get ready(){return this._ready.promise}get scale(){return this._scale}set scale(t){t!==this._scale&&(this._scale=t,this._updateStyle())}get colorinversion(){return this._colorinversion}set colorinversion(t){t!==this._colorinversion&&(this._colorinversion=t,this._updateStyle())}dispose(){this._img.src&&URL.revokeObjectURL(this._img.src||""),super.dispose()}resetRotationFlip(){this._matrix=[1,0,0,1],this._updateStyle()}rotateCounterclockwise(){this._matrix=a.prod(this._matrix,a.rotateCounterclockwiseMatrix),this._updateStyle()}rotateClockwise(){this._matrix=a.prod(this._matrix,a.rotateClockwiseMatrix),this._updateStyle()}flipHorizontal(){this._matrix=a.prod(this._matrix,a.flipHMatrix),this._updateStyle()}flipVertical(){this._matrix=a.prod(this._matrix,a.flipVMatrix),this._updateStyle()}onUpdateRequest(t){!this.isDisposed&&this.context.isReady&&this._render()}onActivateRequest(t){this.node.focus()}_onTitleChanged(){this.title.label=o.PathExt.basename(this.context.localPath)}_render(){const t=this.context,e=t.contentsModel;if(!e)return;const i=this._img.src||"";let s=t.model.toString();if("base64"===e.format)this._img.src=`data:${this._mimeType};base64,${s}`;else{const t=new Blob([s],{type:this._mimeType});this._img.src=URL.createObjectURL(t)}URL.revokeObjectURL(i)}_updateStyle(){const[t,e,i,s]=this._matrix,[r,o]=a.prodVec(this._matrix,[1,1]),n=`matrix(${t}, ${e}, ${i}, ${s}, 0, 0) translate(${r<0?-100:0}%, ${o<0?-100:0}%) `;this._img.style.transform=`scale(${this._scale}) ${n}`,this._img.style.filter=`invert(${this._colorinversion})`}}class d extends c.ABCWidgetFactory{createNewWidget(t){const e=new l(t);return new c.DocumentWidget({content:e,context:t})}}!function(t){t.prod=function([t,e,i,s],[r,a,o,n]){return[t*r+e*o,t*a+e*n,i*r+s*o,i*a+s*n]},t.prodVec=function([t,e,i,s],[r,a]){return[t*r+e*a,i*r+s*a]},t.rotateClockwiseMatrix=[0,1,-1,0],t.rotateCounterclockwiseMatrix=[0,-1,1,0],t.flipHMatrix=[-1,0,0,1],t.flipVMatrix=[1,0,0,-1]}(a||(a={}))}}]);