"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[545],{2017:function(n,e,t){var r=t(4836);e.Z=void 0;var o=r(t(5649)),i=t(184),a=(0,o.default)((0,i.jsx)("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");e.Z=a},3466:function(n,e,t){t.d(e,{Z:function(){return k}});var r=t(4942),o=t(3366),i=t(7462),a=t(2791),s=t(3733),c=t(4419),u=t(4036),l=t(890),d=t(3840),v=t(2930),f=t(6934),p=t(5878),m=t(1217);function h(n){return(0,m.Z)("MuiInputAdornment",n)}var g,Z=(0,p.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),b=t(1402),w=t(184),E=["children","className","component","disablePointerEvents","disableTypography","position","variant"],x=(0,f.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState;return[e.root,e["position".concat((0,u.Z)(t.position))],!0===t.disablePointerEvents&&e.disablePointerEvents,e[t.variant]]}})((function(n){var e=n.theme,t=n.ownerState;return(0,i.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active},"filled"===t.variant&&(0,r.Z)({},"&.".concat(Z.positionStart,"&:not(.").concat(Z.hiddenLabel,")"),{marginTop:16}),"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})})),k=a.forwardRef((function(n,e){var t=(0,b.Z)({props:n,name:"MuiInputAdornment"}),r=t.children,f=t.className,p=t.component,m=void 0===p?"div":p,Z=t.disablePointerEvents,k=void 0!==Z&&Z,L=t.disableTypography,C=void 0!==L&&L,y=t.position,P=t.variant,S=(0,o.Z)(t,E),R=(0,v.Z)()||{},M=P;P&&R.variant,R&&!M&&(M=R.variant);var O=(0,i.Z)({},t,{hiddenLabel:R.hiddenLabel,size:R.size,disablePointerEvents:k,position:y,variant:M}),T=function(n){var e=n.classes,t=n.disablePointerEvents,r=n.hiddenLabel,o=n.position,i=n.size,a=n.variant,s={root:["root",t&&"disablePointerEvents",o&&"position".concat((0,u.Z)(o)),a,r&&"hiddenLabel",i&&"size".concat((0,u.Z)(i))]};return(0,c.Z)(s,h,e)}(O);return(0,w.jsx)(d.Z.Provider,{value:null,children:(0,w.jsx)(x,(0,i.Z)({as:m,ownerState:O,className:(0,s.Z)(T.root,f),ref:e},S,{children:"string"!==typeof r||C?(0,w.jsxs)(a.Fragment,{children:["start"===y?g||(g=(0,w.jsx)("span",{className:"notranslate",children:"\u200b"})):null,r]}):(0,w.jsx)(l.Z,{color:"text.secondary",children:r})}))})}))},3543:function(n,e,t){t.d(e,{Z:function(){return I}});var r=t(9439),o=t(4942),i=t(3366),a=t(7462),s=t(2791),c=t(4419),u=t(9543),l=t(6117),d=t(7054),v=t(4913),f=t(184);function p(n){return n.substring(2).toLowerCase()}function m(n){var e=n.children,t=n.disableReactTree,r=void 0!==t&&t,o=n.mouseEvent,i=void 0===o?"onClick":o,a=n.onClickAway,c=n.touchEvent,u=void 0===c?"onTouchEnd":c,m=s.useRef(!1),h=s.useRef(null),g=s.useRef(!1),Z=s.useRef(!1);s.useEffect((function(){return setTimeout((function(){g.current=!0}),0),function(){g.current=!1}}),[]);var b=(0,l.Z)(e.ref,h),w=(0,d.Z)((function(n){var e=Z.current;Z.current=!1;var t=(0,v.Z)(h.current);!g.current||!h.current||"clientX"in n&&function(n,e){return e.documentElement.clientWidth<n.clientX||e.documentElement.clientHeight<n.clientY}(n,t)||(m.current?m.current=!1:(n.composedPath?n.composedPath().indexOf(h.current)>-1:!t.documentElement.contains(n.target)||h.current.contains(n.target))||!r&&e||a(n))})),E=function(n){return function(t){Z.current=!0;var r=e.props[n];r&&r(t)}},x={ref:b};return!1!==u&&(x[u]=E(u)),s.useEffect((function(){if(!1!==u){var n=p(u),e=(0,v.Z)(h.current),t=function(){m.current=!0};return e.addEventListener(n,w),e.addEventListener("touchmove",t),function(){e.removeEventListener(n,w),e.removeEventListener("touchmove",t)}}}),[w,u]),!1!==i&&(x[i]=E(i)),s.useEffect((function(){if(!1!==i){var n=p(i),e=(0,v.Z)(h.current);return e.addEventListener(n,w),function(){e.removeEventListener(n,w)}}}),[w,i]),(0,f.jsx)(s.Fragment,{children:s.cloneElement(e,x)})}var h=t(2086);var g=t(6934),Z=t(3967),b=t(1402),w=t(4036),E=t(3208),x=t(3733),k=t(2065),L=t(5527),C=t(5878),y=t(1217);function P(n){return(0,y.Z)("MuiSnackbarContent",n)}(0,C.Z)("MuiSnackbarContent",["root","message","action"]);var S=["action","className","message","role"],R=(0,g.ZP)(L.Z,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:function(n,e){return e.root}})((function(n){var e=n.theme,t="light"===e.palette.mode?.8:.98,r=(0,k._4)(e.palette.background.default,t);return(0,a.Z)({},e.typography.body2,(0,o.Z)({color:e.vars?e.vars.palette.SnackbarContent.color:e.palette.getContrastText(r),backgroundColor:e.vars?e.vars.palette.SnackbarContent.bg:r,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288}))})),M=(0,g.ZP)("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:function(n,e){return e.message}})({padding:"8px 0"}),O=(0,g.ZP)("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:function(n,e){return e.action}})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),T=s.forwardRef((function(n,e){var t=(0,b.Z)({props:n,name:"MuiSnackbarContent"}),r=t.action,o=t.className,s=t.message,u=t.role,l=void 0===u?"alert":u,d=(0,i.Z)(t,S),v=t,p=function(n){var e=n.classes;return(0,c.Z)({root:["root"],action:["action"],message:["message"]},P,e)}(v);return(0,f.jsxs)(R,(0,a.Z)({role:l,square:!0,elevation:6,className:(0,x.Z)(p.root,o),ownerState:v,ref:e},d,{children:[(0,f.jsx)(M,{className:p.message,ownerState:v,children:s}),r?(0,f.jsx)(O,{className:p.action,ownerState:v,children:r}):null]}))}));function z(n){return(0,y.Z)("MuiSnackbar",n)}(0,C.Z)("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);var j=["onEnter","onExited"],A=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],N=(0,g.ZP)("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState;return[e.root,e["anchorOrigin".concat((0,w.Z)(t.anchorOrigin.vertical)).concat((0,w.Z)(t.anchorOrigin.horizontal))]]}})((function(n){var e=n.theme,t=n.ownerState;return(0,a.Z)({zIndex:(e.vars||e).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},"top"===t.anchorOrigin.vertical?{top:8}:{bottom:8},"left"===t.anchorOrigin.horizontal&&{justifyContent:"flex-start"},"right"===t.anchorOrigin.horizontal&&{justifyContent:"flex-end"},(0,o.Z)({},e.breakpoints.up("sm"),(0,a.Z)({},"top"===t.anchorOrigin.vertical?{top:24}:{bottom:24},"center"===t.anchorOrigin.horizontal&&{left:"50%",right:"auto",transform:"translateX(-50%)"},"left"===t.anchorOrigin.horizontal&&{left:24,right:"auto"},"right"===t.anchorOrigin.horizontal&&{right:24,left:"auto"})))})),B=s.forwardRef((function(n,e){var t=(0,b.Z)({props:n,name:"MuiSnackbar"}),o=(0,Z.Z)(),l={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},v=t.action,p=t.anchorOrigin,g=(p=void 0===p?{vertical:"bottom",horizontal:"left"}:p).vertical,x=p.horizontal,k=t.autoHideDuration,L=void 0===k?null:k,C=t.children,y=t.className,P=t.ClickAwayListenerProps,S=t.ContentProps,R=t.disableWindowBlurListener,M=void 0!==R&&R,O=t.message,B=t.open,I=t.TransitionComponent,D=void 0===I?E.Z:I,H=t.transitionDuration,W=void 0===H?l:H,_=t.TransitionProps,F=(_=void 0===_?{}:_).onEnter,X=_.onExited,G=(0,i.Z)(t.TransitionProps,j),q=(0,i.Z)(t,A),K=(0,a.Z)({},t,{anchorOrigin:{vertical:g,horizontal:x},autoHideDuration:L,disableWindowBlurListener:M,TransitionComponent:D,transitionDuration:W}),Y=function(n){var e=n.classes,t=n.anchorOrigin,r={root:["root","anchorOrigin".concat((0,w.Z)(t.vertical)).concat((0,w.Z)(t.horizontal))]};return(0,c.Z)(r,z,e)}(K),J=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.autoHideDuration,t=void 0===e?null:e,r=n.disableWindowBlurListener,o=void 0!==r&&r,i=n.onClose,c=n.open,u=n.resumeHideDuration,l=s.useRef();s.useEffect((function(){if(c)return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)};function n(n){n.defaultPrevented||"Escape"!==n.key&&"Esc"!==n.key||null==i||i(n,"escapeKeyDown")}}),[c,i]);var v=(0,d.Z)((function(n,e){null==i||i(n,e)})),f=(0,d.Z)((function(n){i&&null!=n&&(clearTimeout(l.current),l.current=setTimeout((function(){v(null,"timeout")}),n))}));s.useEffect((function(){return c&&f(t),function(){clearTimeout(l.current)}}),[c,t,f]);var p=function(n){null==i||i(n,"clickaway")},m=function(){clearTimeout(l.current)},g=s.useCallback((function(){null!=t&&f(null!=u?u:.5*t)}),[t,u,f]),Z=function(n){return function(e){var t=n.onBlur;null==t||t(e),g()}},b=function(n){return function(e){var t=n.onFocus;null==t||t(e),m()}},w=function(n){return function(e){var t=n.onMouseEnter;null==t||t(e),m()}},E=function(n){return function(e){var t=n.onMouseLeave;null==t||t(e),g()}};s.useEffect((function(){if(!o&&c)return window.addEventListener("focus",g),window.addEventListener("blur",m),function(){window.removeEventListener("focus",g),window.removeEventListener("blur",m)}}),[o,g,c]);var x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,a.Z)({},(0,h._)(n),(0,h._)(e));return(0,a.Z)({role:"presentation"},e,t,{onBlur:Z(t),onFocus:b(t),onMouseEnter:w(t),onMouseLeave:E(t)})};return{getRootProps:x,onClickAway:p}}((0,a.Z)({},K)),Q=J.getRootProps,U=J.onClickAway,V=s.useState(!0),$=(0,r.Z)(V,2),nn=$[0],en=$[1],tn=(0,u.y)({elementType:N,getSlotProps:Q,externalForwardedProps:q,ownerState:K,additionalProps:{ref:e},className:[Y.root,y]});return!B&&nn?null:(0,f.jsx)(m,(0,a.Z)({onClickAway:U},P,{children:(0,f.jsx)(N,(0,a.Z)({},tn,{children:(0,f.jsx)(D,(0,a.Z)({appear:!0,in:B,timeout:W,direction:"top"===g?"down":"up",onEnter:function(n,e){en(!1),F&&F(n,e)},onExited:function(n){en(!0),X&&X(n)}},G,{children:C||(0,f.jsx)(T,(0,a.Z)({message:O,action:v},S))}))}))}))})),I=B}}]);
//# sourceMappingURL=545.e157b504.chunk.js.map