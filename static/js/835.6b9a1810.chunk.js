"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[835],{7835:function(e,t,n){n.r(t),n.d(t,{default:function(){return ne}});var a=n(1614),r=n(890),o=n(4554),i=n(9439),s=n(9658),d=n(493),c=n(4942),l=n(3366),u=n(7462),p=n(2791),m=n(3733),v=n(4419),y=n(627),g=n(2065),f=n(6934),b=n(1402),x=n(335),Z=n(9103),h=n(162),C=n(2071),j=n(6199),I=n(5878),S=n(1217);function w(e){return(0,S.Z)("MuiListItem",e)}var P=(0,I.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var L=(0,I.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function k(e){return(0,S.Z)("MuiListItemSecondaryAction",e)}(0,I.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var A=n(184),N=["className"],M=(0,f.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,u.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),T=p.forwardRef((function(e,t){var n=(0,b.Z)({props:e,name:"MuiListItemSecondaryAction"}),a=n.className,r=(0,l.Z)(n,N),o=p.useContext(j.Z),i=(0,u.Z)({},n,{disableGutters:o.disableGutters}),s=function(e){var t=e.disableGutters,n=e.classes,a={root:["root",t&&"disableGutters"]};return(0,v.Z)(a,k,n)}(i);return(0,A.jsx)(M,(0,u.Z)({className:(0,m.Z)(s.root,a),ownerState:i,ref:t},r))}));T.muiName="ListItemSecondaryAction";var G=T,R=["className"],F=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],O=(0,f.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,n=e.theme,a=e.ownerState;return(0,u.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!a.disablePadding&&(0,u.Z)({paddingTop:8,paddingBottom:8},a.dense&&{paddingTop:4,paddingBottom:4},!a.disableGutters&&{paddingLeft:16,paddingRight:16},!!a.secondaryAction&&{paddingRight:48}),!!a.secondaryAction&&(0,c.Z)({},"& > .".concat(L.root),{paddingRight:48}),(t={},(0,c.Z)(t,"&.".concat(P.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,c.Z)(t,"&.".concat(P.selected),(0,c.Z)({backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,g.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(P.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,g.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,c.Z)(t,"&.".concat(P.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),t),"flex-start"===a.alignItems&&{alignItems:"flex-start"},a.divider&&{borderBottom:"1px solid ".concat((n.vars||n).palette.divider),backgroundClip:"padding-box"},a.button&&(0,c.Z)({transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(P.selected,":hover"),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,g.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,g.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),a.hasSecondaryAction&&{paddingRight:48})})),B=(0,f.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),V=p.forwardRef((function(e,t){var n=(0,b.Z)({props:e,name:"MuiListItem"}),a=n.alignItems,r=void 0===a?"center":a,o=n.autoFocus,i=void 0!==o&&o,s=n.button,d=void 0!==s&&s,c=n.children,g=n.className,f=n.component,I=n.components,S=void 0===I?{}:I,L=n.componentsProps,k=void 0===L?{}:L,N=n.ContainerComponent,M=void 0===N?"li":N,T=n.ContainerProps,V=(T=void 0===T?{}:T).className,K=n.dense,q=void 0!==K&&K,z=n.disabled,D=void 0!==z&&z,_=n.disableGutters,E=void 0!==_&&_,H=n.disablePadding,W=void 0!==H&&H,X=n.divider,Y=void 0!==X&&X,J=n.focusVisibleClassName,Q=n.secondaryAction,U=n.selected,$=void 0!==U&&U,ee=n.slotProps,te=void 0===ee?{}:ee,ne=n.slots,ae=void 0===ne?{}:ne,re=(0,l.Z)(n.ContainerProps,R),oe=(0,l.Z)(n,F),ie=p.useContext(j.Z),se=p.useMemo((function(){return{dense:q||ie.dense||!1,alignItems:r,disableGutters:E}}),[r,ie.dense,q,E]),de=p.useRef(null);(0,h.Z)((function(){i&&de.current&&de.current.focus()}),[i]);var ce=p.Children.toArray(c),le=ce.length&&(0,Z.Z)(ce[ce.length-1],["ListItemSecondaryAction"]),ue=(0,u.Z)({},n,{alignItems:r,autoFocus:i,button:d,dense:se.dense,disabled:D,disableGutters:E,disablePadding:W,divider:Y,hasSecondaryAction:le,selected:$}),pe=function(e){var t=e.alignItems,n=e.button,a=e.classes,r=e.dense,o=e.disabled,i={root:["root",r&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",o&&"disabled",n&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,v.Z)(i,w,a)}(ue),me=(0,C.Z)(de,t),ve=ae.root||S.Root||O,ye=te.root||k.root||{},ge=(0,u.Z)({className:(0,m.Z)(pe.root,ye.className,g),disabled:D},oe),fe=f||"li";return d&&(ge.component=f||"div",ge.focusVisibleClassName=(0,m.Z)(P.focusVisible,J),fe=x.Z),le?(fe=ge.component||f?fe:"div","li"===M&&("li"===fe?fe="div":"li"===ge.component&&(ge.component="div")),(0,A.jsx)(j.Z.Provider,{value:se,children:(0,A.jsxs)(B,(0,u.Z)({as:M,className:(0,m.Z)(pe.container,V),ref:me,ownerState:ue},re,{children:[(0,A.jsx)(ve,(0,u.Z)({},ye,!(0,y.X)(ve)&&{as:fe,ownerState:(0,u.Z)({},ue,ye.ownerState)},ge,{children:ce})),ce.pop()]}))})):(0,A.jsx)(j.Z.Provider,{value:se,children:(0,A.jsxs)(ve,(0,u.Z)({},ye,{as:fe,ref:me},!(0,y.X)(ve)&&{ownerState:(0,u.Z)({},ue,ye.ownerState)},ge,{children:[ce,Q&&(0,A.jsx)(G,{children:Q})]}))})}));function K(e){return(0,S.Z)("MuiListItemText",e)}var q=(0,I.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),z=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],D=(0,f.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[(0,c.Z)({},"& .".concat(q.primary),t.primary),(0,c.Z)({},"& .".concat(q.secondary),t.secondary),t.root,n.inset&&t.inset,n.primary&&n.secondary&&t.multiline,n.dense&&t.dense]}})((function(e){var t=e.ownerState;return(0,u.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})})),_=p.forwardRef((function(e,t){var n=(0,b.Z)({props:e,name:"MuiListItemText"}),a=n.children,o=n.className,i=n.disableTypography,s=void 0!==i&&i,d=n.inset,c=void 0!==d&&d,y=n.primary,g=n.primaryTypographyProps,f=n.secondary,x=n.secondaryTypographyProps,Z=(0,l.Z)(n,z),h=p.useContext(j.Z).dense,C=null!=y?y:a,I=f,S=(0,u.Z)({},n,{disableTypography:s,inset:c,primary:!!C,secondary:!!I,dense:h}),w=function(e){var t=e.classes,n=e.inset,a=e.primary,r=e.secondary,o={root:["root",n&&"inset",e.dense&&"dense",a&&r&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,v.Z)(o,K,t)}(S);return null==C||C.type===r.Z||s||(C=(0,A.jsx)(r.Z,(0,u.Z)({variant:h?"body2":"body1",className:w.primary,component:null!=g&&g.variant?void 0:"span",display:"block"},g,{children:C}))),null==I||I.type===r.Z||s||(I=(0,A.jsx)(r.Z,(0,u.Z)({variant:"body2",className:w.secondary,color:"text.secondary",display:"block"},x,{children:I}))),(0,A.jsxs)(D,(0,u.Z)({className:(0,m.Z)(w.root,o),ownerState:S,ref:t},Z,{children:[C,I]}))})),E=n(3400),H=n(7247),W=n(9434),X=n(2996),Y=n(6351),J=function(){var e=(0,p.useState)([]),t=(0,i.Z)(e,2),n=t[0],a=t[1],c=(0,W.v9)(Y.K2),l=c.items,u=c.isLoading,m=c.error,v=(0,W.v9)(Y.zK),y=(0,W.I0)();(0,p.useEffect)((function(){y((0,X.yF)())}),[y]);return(0,p.useEffect)((function(){a(v&&l?l.filter((function(e){return e.name.toLowerCase().includes(v.toLowerCase())})):l)}),[v,l]),(0,A.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",gap:"8px",width:"370px"},children:[u&&(0,A.jsx)(r.Z,{variant:"overline",display:"block",gutterBottom:!0,children:"Loading contacts..."}),m&&(0,A.jsx)(s.Z,{sx:{marginTop:"8px"},severity:"warning",children:m}),(0,A.jsx)(d.Z,{sx:{width:"100%",maxWidth:300,bgcolor:"background.paper"},children:n&&n.map((function(e){return(0,A.jsxs)(V,{sx:{padding:"4px 16px",marginBottom:"1px",bgcolor:"#e3f2fd"},children:[(0,A.jsx)(_,{primary:e.name,secondary:(0,A.jsx)(p.Fragment,{children:(0,A.jsx)(r.Z,{sx:{display:"inline",marginLeft:"8px"},component:"span",variant:"body2",color:"text.primary",children:e.number})})}),(0,A.jsx)(E.Z,{edge:"end","aria-label":"delete",onClick:function(){return t=e.id,void y((0,X.GK)(t));var t},children:(0,A.jsx)(H.Z,{})})]},e.id)}))})]})},Q=n(4220),U=n(7940),$=function(){var e=(0,W.v9)(Y.zK),t=(0,W.I0)();return(0,A.jsxs)(o.Z,{sx:{marginTop:"24px"},children:[(0,A.jsx)(r.Z,{variant:"h6",gutterBottom:!0,children:"Find contacts by name"}),(0,A.jsx)(U.Z,{id:"contactsfilter-basic",variant:"outlined",size:"small",value:null!==e&&void 0!==e?e:"",onChange:function(e){return function(e){t((0,Q.Ks)(e))}(e.target.value)}})]})},ee=n(4294),te=function(){var e=(0,p.useState)(""),t=(0,i.Z)(e,2),n=t[0],a=t[1],r=(0,p.useState)(""),s=(0,i.Z)(r,2),d=s[0],c=s[1],l=(0,W.v9)(Y.K2).items,u=(0,W.I0)(),m=function(e,t){return e.find((function(e){return e.name===t}))};return(0,A.jsxs)(o.Z,{onSubmit:function(e){if(e.preventDefault(),l&&void 0!==m(l,n))return alert("".concat(n," is already in contacts."));var t;t={name:n,number:d},u((0,X.uK)(t)),a(""),c("")},component:"form",sx:{width:"220px",display:"flex",flexDirection:"column",gap:"14px"},children:[(0,A.jsx)(U.Z,{value:n,onChange:function(e){var t=e.target.value;a(t)},id:"name",label:"Name",variant:"standard",type:"text",required:!0}),(0,A.jsx)(U.Z,{value:d,onChange:function(e){var t=e.target.value;c(t)},id:"phone",label:"Phone",variant:"standard",type:"tel",required:!0}),(0,A.jsx)(ee.Z,{type:"submit",variant:"contained",children:"Add contact"})]})},ne=function(){return(0,A.jsxs)(a.Z,{sx:{padding:"14px 24px",margin:"0"},children:[(0,A.jsx)(r.Z,{variant:"h4",gutterBottom:!0,children:"Contacts"}),(0,A.jsx)(te,{}),(0,A.jsxs)(o.Z,{children:[(0,A.jsx)($,{}),(0,A.jsx)(J,{})]})]})}},7247:function(e,t,n){var a=n(4836);t.Z=void 0;var r=a(n(5649)),o=n(184),i=(0,r.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=i}}]);
//# sourceMappingURL=835.6b9a1810.chunk.js.map