(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[906],{189:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[quadrant]",function(){return i(266)}])},1868:function(e,t,i){"use strict";i.d(t,{Ct:function(){return d},iP:function(){return o},wI:function(){return m}});var n=i(5893),s=i(7294),l=i(9453),r=i.n(l),a=i(8153),c=i(8603),u=i(9631),_=i(4733);function d(e){let{children:t,color:i,size:l="medium",selectable:a,selected:c,...u}=e,d=(0,s.useMemo)(()=>i?{"--badge":i}:void 0,[i]),o=u.onClick?"button":"span";return(0,n.jsx)(o,{...u,style:d,className:(0,_.cn)(u.className,r().badge,r()["size-".concat(l)],i&&r().colored,a&&r().selectable,c&&r().selected),children:t})}function o(e){let{ring:t,release:i,...s}=e,l=(0,a.VU)(t);if(!l)return null;let r=i?"".concat(l.title," | ").concat((0,c.vf)(i)):l.title;return(0,n.jsx)(d,{color:l.color,...s,children:r})}function m(e){let{flag:t,short:i,...s}=e;if(t===u.W.Default)return null;let l=(0,a.r0)(t);return l&&"color"in l&&"title"in l&&"titleShort"in l?(0,n.jsx)(d,{color:l.color,size:"small",...s,children:i?l.titleShort:l.title}):null}},5470:function(e,t,i){"use strict";i.d(t,{s:function(){return d}});var n=i(5893),s=i(1664),l=i.n(s),r=i(824),a=i.n(r),c=i(1868),u=i(8153),_=i(4733);function d(e){let{items:t,activeId:i,size:s="default",hideRing:r=!1,className:d}=e;return(0,n.jsx)("ul",{className:(0,_.cn)(a().list,d,{[a().isSmall]:"small"===s,[a().isLarge]:"large"===s}),children:t.map(e=>{var t;return(0,n.jsx)("li",{className:a().item,children:(0,n.jsxs)(l(),{className:(0,_.cn)(a().link,{[a().isFadedOut]:!e.featured,[a().isActive]:e.id===i}),href:"/".concat(e.quadrant,"/").concat(e.id),children:[(0,n.jsx)("span",{className:a().title,children:e.title}),(0,n.jsx)(c.wI,{className:a().flag,flag:e.flag,short:"small"==s}),"large"===s&&(0,n.jsxs)("div",{className:a().info,children:[(0,n.jsx)("span",{className:a().quadrant,children:null===(t=(0,u.VM)(e.quadrant))||void 0===t?void 0:t.title}),!r&&(0,n.jsx)(c.iP,{className:a().ring,ring:e.ring,size:"small"})]})]})},e.id)})})}},5118:function(e,t,i){"use strict";i.d(t,{f:function(){return _}});var n=i(5893),s=i(4936),l=i.n(s),r=i(1868),a=i(5470),c=i(8153),u=i(4733);function _(e){let{items:t,size:i}=e,s=(0,c.Y6)(t);return(0,n.jsx)("ul",{className:(0,u.cn)(l().rings,{[l().isSmall]:"small"==i}),children:Object.entries(s).map(e=>{let[t,s]=e;return(0,n.jsxs)("li",{className:l().ring,children:[(0,n.jsx)(r.iP,{className:l().badge,ring:t}),(0,n.jsx)(a.s,{className:l().list,items:s,size:i})]},t)})})}},9631:function(e,t,i){"use strict";var n,s;i.d(t,{W:function(){return n}}),(s=n||(n={})).New="new",s.Changed="changed",s.Default="default"},266:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return d}});var n=i(5893),s=i(9008),l=i.n(s),r=i(1163),a=i(7294),c=i(5118),u=i(8153),_=i(8603),d=!0;t.default=()=>{let{query:e}=(0,r.useRouter)(),t=(0,u.VM)(e.quadrant),i=(0,a.useMemo)(()=>(null==t?void 0:t.id)&&(0,u.kk)(t.id).sort(u.J7),[null==t?void 0:t.id]);return t&&i?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l(),{children:[(0,n.jsx)("title",{children:(0,_.Ui)(t.title)}),(0,n.jsx)("meta",{name:"description",content:t.description})]}),(0,n.jsx)("h1",{children:t.title}),(0,n.jsx)("h2",{children:t.description}),(0,n.jsx)(c.f,{items:i})]}):null}},9453:function(e){e.exports={badge:"Badge_badge__ohf_O","size-small":"Badge_size-small__teuB6","size-large":"Badge_size-large__DeqRJ",colored:"Badge_colored__mE0M_",selectable:"Badge_selectable__5w_Rj",selected:"Badge_selected__YN95i"}},824:function(e){e.exports={list:"ItemList_list__OfyPI",item:"ItemList_item__w1fOT",flag:"ItemList_flag__MHJJn",ring:"ItemList_ring__KNwTe",quadrant:"ItemList_quadrant__37v7e",info:"ItemList_info__hEN5c",link:"ItemList_link__vRvOH",isFadedOut:"ItemList_isFadedOut__WESte",isActive:"ItemList_isActive__r0pNl",isSmall:"ItemList_isSmall__CwDlJ",isLarge:"ItemList_isLarge__CNy_c"}},4936:function(e){e.exports={rings:"RingList_rings__3MavO",ring:"RingList_ring__WhWXi",badge:"RingList_badge__oMexe",isSmall:"RingList_isSmall__E_sHf"}},1163:function(e,t,i){e.exports=i(4546)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=189)}),_N_E=e.O()}]);