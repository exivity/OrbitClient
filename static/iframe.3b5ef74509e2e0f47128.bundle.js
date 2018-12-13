(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{133:function(e,t,n){"use strict";var r=n(70),a=n.n(r),o=n(7),i=n.n(o),l=n(8),u=n.n(l),d=n(9),c=n.n(d),s=n(14),p=n.n(s),f=n(15),m=n.n(f),y=n(16),h=n.n(y),v=n(6),b=n.n(v),R=n(4),g=n.n(R),S=n(0),E=n.n(S),C=n(1),O=n.n(C),T=n(206),A=n(35),k=n.n(A),_=n(107),j=n.n(_),q=n(311),I=n(187),P=n.n(I),w=n(57),x=n.n(w),D=n(312),U=n.n(D),M=function(e){function t(){var e,n;u()(this,t);for(var r=arguments.length,a=Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=p()(this,(e=m()(t)).call.apply(e,[this].concat(a))),g()(b()(b()(n)),"build",function(){return n.props.buildRecord.apply(void 0,arguments)}),g()(b()(b()(n)),"add",U()(P.a.mark(function e(){var t,r,a,o,i,l,u,d,c,s,p=arguments;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t=n.props,r=t.beforeAdd,a=t.addRecord,o=t.onAdd,i=t.onError,l=p.length,u=Array(l),d=0;d<l;d++)u[d]=p[d];if(!r){e.next=10;break}return e.next=5,r.apply(void 0,u);case 5:c=e.sent,s=!0===c?u:c,c&&a.apply(void 0,x()(s)).then(o).catch(i),e.next=11;break;case 10:a.apply(void 0,u).then(o).catch(i);case 11:case"end":return e.stop()}},e,this)}))),g()(b()(b()(n)),"update",U()(P.a.mark(function e(){var t,r,a,o,i,l,u,d,c,s,p=arguments;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t=n.props,r=t.beforeUpdate,a=t.updateRecord,o=t.onUpdate,i=t.onError,l=p.length,u=Array(l),d=0;d<l;d++)u[d]=p[d];if(!r){e.next=10;break}return e.next=5,r.apply(void 0,u);case 5:c=e.sent,s=!0===c?u:c,c&&a.apply(void 0,x()(s)).then(o).catch(i),e.next=11;break;case 10:a.apply(void 0,u).then(o).catch(i);case 11:case"end":return e.stop()}},e,this)}))),g()(b()(b()(n)),"remove",U()(P.a.mark(function e(){var t,r,a,o,i,l,u,d,c,s,p=arguments;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t=n.props,r=t.beforeRemove,a=t.removeRecord,o=t.onRemove,i=t.onError,l=p.length,u=Array(l),d=0;d<l;d++)u[d]=p[d];if(!r){e.next=10;break}return e.next=5,r.apply(void 0,u);case 5:c=e.sent,s=!0===c?u:c,c&&a.apply(void 0,x()(s)).then(o).catch(i),e.next=11;break;case 10:a.apply(void 0,u).then(o).catch(i);case 11:case"end":return e.stop()}},e,this)}))),g()(b()(b()(n)),"state",{buildRecord:n.build,addRecord:n.add,updateRecord:n.update,removeRecord:n.remove}),n}return h()(t,e),c()(t,[{key:"render",value:function(){return this.props.children(this.state)}}]),t}(S.PureComponent);M.propTypes={children:O.a.func.isRequired,buildRecord:O.a.func,addRecord:O.a.func,updateRecord:O.a.func,removeRecord:O.a.func,onAdd:O.a.func,onUpdate:O.a.func,onRemove:O.a.func,beforeAdd:O.a.func,beforeUpdate:O.a.func,beforeRemove:O.a.func,onError:O.a.func},M.defaultProps={buildRecord:function(){},addRecord:function(){},updateRecord:function(){},removeRecord:function(){},onAdd:function(){},onUpdate:function(){},onRemove:function(){},onError:function(){}};var L=M;M.__docgenInfo={description:"",methods:[{name:"build",docblock:null,modifiers:[],params:[{name:"...args",type:null}],returns:null},{name:"add",docblock:null,modifiers:["async"],params:[{name:"...args",type:null}],returns:null},{name:"update",docblock:null,modifiers:["async"],params:[{name:"...args",type:null}],returns:null},{name:"remove",docblock:null,modifiers:["async"],params:[{name:"...args",type:null}],returns:null}],displayName:"Crud",props:{buildRecord:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"Function to build objectType."},addRecord:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"Function to add record."},updateRecord:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"Function to update record."},removeRecord:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"Function to remove record."},onAdd:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"Callback called when add() resolves. Provides added record."},onUpdate:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"Callback called when update() resolves. Provides updated record."},onRemove:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"Callback called when remove() resolves. Provides removed record."},onError:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:"Callback called when one of crud function catches"},children:{type:{name:"func"},required:!0,description:"Callback with build, add, update, remove promises."},beforeAdd:{type:{name:"func"},required:!1,description:"Callback called before add(). Takes a promise or function.\r\n   Return truthy value to proceed with add()"},beforeUpdate:{type:{name:"func"},required:!1,description:"Callback called before update(). Takes a promise or function.\r\n   Return truthy value to proceed with update()"},beforeRemove:{type:{name:"func"},required:!1,description:"Callback called before remove(). Takes a promise or function.\r\n   Return truthy value to proceed with remove()"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Crud.js"]={name:"Crud",docgenInfo:M.__docgenInfo,path:"src\\components\\Crud.js"});n(859);var B=function(e){var t=function(t){function n(){return u()(this,n),p()(this,m()(n).apply(this,arguments))}return h()(n,t),c()(n,[{key:"render",value:function(){var t=this.props,n=t.beforeAdd,r=t.onAdd,a=t.beforeUpdate,o=t.onUpdate,i=t.beforeRemove,l=t.onRemove,u=j()(t,["beforeAdd","onAdd","beforeUpdate","onUpdate","beforeRemove","onRemove"]);return E.a.createElement(q.a.Consumer,null,function(t){var d=t.schema,c=j()(t,["schema"]);return E.a.createElement(L,k()({},c,{beforeAdd:n,onAdd:r,beforeUpdate:a,onUpdate:o,beforeRemove:i,onRemove:l}),function(t){return E.a.createElement(e,k()({},u,{schema:d},t))})})}}]),n}(S.PureComponent);return t.displayName=function(e){return e.displayName||e.name||"OrbitModel"}(e),t},K=n(141);n.d(t,"c",function(){return N}),n.d(t,"a",function(){return z});var N=["id","type","related","relatedTo","children","queryStore","updateStore","buildRecord","addRecord","updateRecord","removeRecord","cache","queryOptions"],Y=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.every(function(e){return!!e})},z=function(e){return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return 2===n.length?"function"==typeof n[1]?function(t){return e(n[0],n[1](t))}:function(){return e.apply(void 0,n)}:function(t){return e(n[0],t)}}},Q=function(e){function t(e){var n;return u()(this,t),n=p()(this,m()(t).call(this,e)),g()(b()(b()(n)),"shouldQuery",function(){var e=n.props,t=e.cache,r=e.type,a=e.related,o=e.relatedTo,i=n.state,l=i.performedQuery,u=i[r],d=i.loading,c=i.error;return Y(a&&o,!a,!l,"only"!==t,!u,!d,!c)}),g()(b()(b()(n)),"query",function(e){var t=n.props,r=t.id,a=t.related,o=t.relatedTo,i=t.type;return a&&o?e.findRelatedRecord({type:o.type,id:o.id},i):e.findRecord({type:i,id:r})}),g()(b()(b()(n)),"queryStore",function(){n.props.queryStore(n.query,n.props.queryOptions).then(function(){return n.setState({performedQuery:!0,loading:!1})}).catch(function(e){return n.setState({loading:!1,error:e})})}),g()(b()(b()(n)),"findAndSetProperty",function(e,t,r){1===e.length?t[e[0]]=r:n.findAndSetProperty(e.slice(1),t[e[0]],r)}),g()(b()(b()(n)),"setPropertyByPath",function(e,t){var r=i()({},n.state[n.props.type]);return t?function(){n.findAndSetProperty(e,r,t),n.setState(g()({},n.props.type,r))}:function(t){n.findAndSetProperty(e,r,t),n.setState(g()({},n.props.type,r))}}),g()(b()(b()(n)),"hasRelationship",function(e){var t=n.state[n.props.type];return t.relationships&&!!t.relationships[e]}),g()(b()(b()(n)),"setAttribute",function(e,t){return n.setState(function(r){var a=r[n.props.type];return g()({},n.props.type,i()({},a,{attributes:i()({},a.attributes,g()({},e,t))}))})}),g()(b()(b()(n)),"setRelationship",function(e,t){return n.setState(function(r){var a=r[n.props.type];return g()({},n.props.type,i()({},a,{relationships:i()({},a.relationships,g()({},e,{data:t}))}))})}),g()(b()(b()(n)),"addRelationship",function(e){var t=n.props,r=t.schema,o=t.type,i=n.state[o],l=r.getModel(o),u=Object.entries(l.relationships).find(function(t){var n=a()(t,2);n[0];return n[1].model===e.type});if(!u)throw new Error("".concat(e.type," is not defined as a relation"));var d=a()(u,2),c=d[0],s=d[1];if("hasOne"===s.type&&n.setRelationship(c,e),"hasMany"===s.type)if(n.hasRelationship(c)){var p=i.relationships[c].data.concat([e]);n.setRelationship(c,p)}else n.setRelationship(c,[e])}),g()(b()(b()(n)),"removeRelationship",function(e){var t=n.props,r=t.schema,o=t.type,i=n.state[o],l=r.getModel(o),u=Object.entries(l.relationships).find(function(t){var n=a()(t,2);n[0];return n[1].model===e.type});if(!u)throw new Error("".concat(e.type," is not defined as a relation"));var d=a()(u,2),c=d[0],s=d[1];if("hasOne"===s.type&&n.setRelationship(c,null),"hasMany"===s.type&&n.hasRelationship(c)){var p=i.relationships[c].data.filter(function(t){return t.id!==e.id});n.setRelationship(c,p)}}),g()(b()(b()(n)),"resetAttributes",function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:void 0;e.map(function(e){return n.setAttribute(e,t)})}),g()(b()(b()(n)),"getRelatedIds",function(e){var t=n.state[n.props.type],r=t.relationships&&t.relationships[e];return r&&Array.isArray(r.data)?r.data.map(function(e){return e.id}):[]}),g()(b()(b()(n)),"getRelatedId",function(e){var t=n.state[n.props.type],r=t.relationships&&t.relationships[e];return r&&r.data&&r.data.id?r.data.id:null}),g()(b()(b()(n)),"relatedToRecord",function(){var e=n.props,t=e.relatedTo,r=e.type,a=n.state[r];return!t&&(null===a||void 0===a?void 0:a.id)?a:t}),g()(b()(b()(n)),"getExtendedRecord",function(){return Object(K.e)({props:n.props,state:n.state,setAttribute:n.setAttribute,setRelationship:n.setRelationship,addRelationship:n.addRelationship,removeRelationship:n.removeRelationship,resetAttributes:n.resetAttributes,setProperty:n.setPropertyByPath,getRelatedIds:n.getRelatedIds,getRelatedId:n.getRelatedId})}),g()(b()(b()(n)),"getRecordAndHelpers",function(){return Object(K.f)({props:n.props,state:n.state,record:n.getExtendedRecord()})}),n.state=e.related?{recordReference:null}:{idReference:null,recordReference:null},n}return h()(t,e),c()(t,[{key:"componentDidMount",value:function(){this.shouldQuery()&&this.queryStore()}},{key:"componentDidUpdate",value:function(){this.shouldQuery()&&this.queryStore()}},{key:"render",value:function(){var e=this.props,t=e.type,n=e.children,r=this.relatedToRecord();return"function"==typeof n?n(this.getRecordAndHelpers()):E.a.cloneElement(this.props.children,i()({key:"".concat(t,"-relatedTo-").concat(null===r||void 0===r?void 0:r.id)},this.getRecordAndHelpers(),{relatedTo:r}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.related?function(e,t){var n,r,a,o,i,l,u,d=!e.relatedTo,c=!!e.relatedTo&&!e[e.type],s=!!e[e.type]&&e[e.type]!==t.recordReference,p=!e[e.type],f="only"===e.cache,m=e.loading,y=!!e.error;return m||y?(n={recordReference:null},g()(n,e.type,null),g()(n,"loading",!!e.loading),g()(n,"error",e.error||!1),n):d?(r={recordReference:null},g()(r,e.type,null),g()(r,"performedQuery",!1),g()(r,"loading",!1),g()(r,"error",!1),r):c&&!e.required?f||t.performedQuery?(o={recordReference:null},g()(o,e.type,null),g()(o,"loading",!1),g()(o,"error",!1),o):(a={recordReference:null},g()(a,e.type,null),g()(a,"loading",!0),g()(a,"error",!1),a):p&&e.required?f||t.performedQuery?(l={recordReference:null},g()(l,e.type,null),g()(l,"loading",!1),g()(l,"error",{message:"Related ".concat(e.type," has not been found while being required")}),l):(i={recordReference:null},g()(i,e.type,null),g()(i,"loading",!0),g()(i,"error",!1),i):s?(u={recordReference:e[e.type]},g()(u,e.type,e[e.type]),g()(u,"performedQuery",!1),g()(u,"loading",!1),g()(u,"error",!1),u):null}(e,t):function(e,t){var n,r,a,o,i=!e.id&&e.id!==t.idReference,l=!!e.id&&e.id!==t.idReference,u=!!e[e.type]&&e[e.type]!==t.recordReference,d=!!e.id&&!e[e.type],c="only"===e.cache,s=e.loading,p=!!e.error;if(s||p)return n={recordReference:null},g()(n,e.type,null),g()(n,"loading",!!e.loading),g()(n,"error",e.error||!1),n;if(i){var f,m=e.buildRecord(e.type);return f={idReference:e.id,recordReference:m},g()(f,e.type,m),g()(f,"loading",!1),g()(f,"error",!1),f}return l?d?(a={idReference:e.id,recordReference:null},g()(a,e.type,null),g()(a,"loading",!c),g()(a,"error",!!c&&{message:"".concat(e.type," not found in cache")}),a):(r={idReference:e.id,recordReference:e[e.type]},g()(r,e.type,e[e.type]),g()(r,"loading",!1),g()(r,"error",!1),r):u?(o={idReference:e.id,recordReference:e[e.type]},g()(o,e.type,e[e.type]),g()(o,"loading",!1),g()(o,"error",!1),o):null}(e,t)}}]),t}(S.PureComponent),V=B(Q);t.b=Object(T.withData)(function(e){var t=e.id,n=e.type,r=e.related,a=e.relatedTo;return"skip"===e.cache?{}:t?g()({},n,function(e){return e.findRecord({type:n,id:t})}):r&&a?g()({},n,function(e){return e.findRelatedRecord({type:a.type,id:a.id},n)}):{}},function(e,t){return function(e){var t;return e.related&&(!(null!==(t=e.relatedTo)&&void 0!=t)||!t.relationships[e.type])}(t)?i()({},e,t,g()({},t.type,null)):t.id||t.related?i()({},t,e):i()({},e,t,g()({},t.type,null))})(V);Q.defaultProps={relatedTo:null,cache:"auto"},Q.propTypes={type:O.a.string,id:O.a.string,schema:O.a.object,cache:O.a.oneOf(["only","skip","auto"]),buildRecord:O.a.func.isRequired,addRecord:O.a.func.isRequired,updateRecord:O.a.func.isRequired,removeRecord:O.a.func.isRequired,related:O.a.bool,relatedTo:O.a.oneOfType([O.a.object,O.a.array]),required:O.a.bool},Q.__docgenInfo={description:"",methods:[{name:"getDerivedStateFromProps",docblock:null,modifiers:["static"],params:[{name:"props",type:null},{name:"state",type:null}],returns:null},{name:"shouldQuery",docblock:null,modifiers:[],params:[],returns:null},{name:"query",docblock:null,modifiers:[],params:[{name:"query",type:null}],returns:null},{name:"queryStore",docblock:null,modifiers:[],params:[],returns:null},{name:"findAndSetProperty",docblock:null,modifiers:[],params:[{name:"path",type:null},{name:"record",type:null},{name:"value",type:null}],returns:null},{name:"setPropertyByPath",docblock:null,modifiers:[],params:[{name:"path",type:null},{name:"value",type:null}],returns:null},{name:"hasRelationship",docblock:null,modifiers:[],params:[{name:"relationship",type:null}],returns:null},{name:"setAttribute",docblock:null,modifiers:[],params:[{name:"attribute",type:null},{name:"value",type:null}],returns:null},{name:"setRelationship",docblock:null,modifiers:[],params:[{name:"relationship",type:null},{name:"value",type:null}],returns:null},{name:"addRelationship",docblock:null,modifiers:[],params:[{name:"relatedRecord",type:null}],returns:null},{name:"removeRelationship",docblock:null,modifiers:[],params:[{name:"relatedRecord",type:null}],returns:null},{name:"resetAttributes",docblock:null,modifiers:[],params:[{name:"attributes",type:null},{name:"value",type:null}],returns:null},{name:"getRelatedIds",docblock:null,modifiers:[],params:[{name:"relationship",type:null}],returns:null},{name:"getRelatedId",docblock:null,modifiers:[],params:[{name:"relationship",type:null}],returns:null},{name:"relatedToRecord",docblock:null,modifiers:[],params:[],returns:null},{name:"getExtendedRecord",docblock:null,modifiers:[],params:[],returns:null},{name:"getRecordAndHelpers",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Record",props:{relatedTo:{defaultValue:{value:"null",computed:!1},type:{name:"union",value:[{name:"object"},{name:"array"}]},required:!1,description:""},cache:{defaultValue:{value:"'auto'",computed:!1},type:{name:"enum",value:[{value:"'only'",computed:!1},{value:"'skip'",computed:!1},{value:"'auto'",computed:!1}]},required:!1,description:""},type:{type:{name:"string"},required:!1,description:""},id:{type:{name:"string"},required:!1,description:""},schema:{type:{name:"object"},required:!1,description:""},buildRecord:{type:{name:"func"},required:!0,description:""},addRecord:{type:{name:"func"},required:!0,description:""},updateRecord:{type:{name:"func"},required:!0,description:""},removeRecord:{type:{name:"func"},required:!0,description:""},related:{type:{name:"bool"},required:!1,description:""},required:{type:{name:"bool"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Record.js"]={name:"Record",docgenInfo:Q.__docgenInfo,path:"src\\components\\Record.js"})},141:function(e,t,n){"use strict";n.d(t,"b",function(){return m}),n.d(t,"a",function(){return y}),n.d(t,"c",function(){return h}),n.d(t,"d",function(){return v}),n.d(t,"e",function(){return b}),n.d(t,"f",function(){return R});var r=n(4),a=n.n(r),o=n(7),i=n.n(o),l=n(57),u=n.n(l),d=n(274),c=n(205),s=n.n(c),p=n(207),f=n(133),m=function(e,t){return e.reduce(function(e,n){var r=n.relationships&&n.relationships[t]&&n.relationships[t].data.map(function(e){return e.id});return r?e.concat(r):e},[])},y=function(e,t){return e.filter(function(e){return t.includes(e.id)})},h=Object(d.a)(function(e){return e.ownProps.relatedTo},function(e){return e.record[e.pluralizedType]},function(e,t){var n=m(e);return y(t,n)}),v=Object(d.a)(function(e){return e.props},function(e){return e.state.loading},function(e){return e.state.error},function(e){return e.collection},function(e){return e.buildSaveTransforms},function(e){return e.buildRemoveTransforms},function(e){return e.pluralizedType},function(e,t,n,r,o,l,d){var c,f=s()(e,u()(p.b).concat([e.type])),m=!!e.loading||t,y=e.error||n;return i()({},f,(c={},a()(c,d,m||y?null:r),a()(c,"save",function(t){return e.updateStore(o(t))}),a()(c,"remove",function(t){return e.updateStore(l(t))}),a()(c,"loading",m),a()(c,"error",y),c))}),b=Object(d.a)(function(e){return e.state[e.props.type]},function(e){return e.props.addRecord},function(e){return e.props.updateRecord},function(e){return e.props.removeRecord},function(e){return e.setAttribute},function(e){return e.setRelationship},function(e){return e.addRelationship},function(e){return e.removeRelationship},function(e){return e.resetAttributes},function(e){return e.setProperty},function(e){return e.getRelatedIds},function(e){return e.getRelatedId},function(e,t,n,r,a,o,l,u,d,c,s,p){return e?i()({},e,{setAttribute:Object(f.a)(a),setRelationship:Object(f.a)(o),addRelationship:l,removeRelationship:u,resetAttributes:d,setProperty:c,getRelatedIds:s,getRelatedId:p,save:(null===e||void 0===e?void 0:e.id)?function(){for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];return n.apply(void 0,[i()({},e)].concat(r))}:function(){for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];return t.apply(void 0,[i()({},e)].concat(r))},remove:function(){for(var t=arguments.length,n=Array(t),a=0;a<t;a++)n[a]=arguments[a];return r.apply(void 0,[i()({},e)].concat(n))}}):null}),R=Object(d.a)(function(e){return e.props},function(e){return e.state.loading},function(e){return e.state.error},function(e){return e.record},function(e,t,n,r){var o=s()(e,u()(f.c).concat([e.type]));return i()(a()({},e.type,r),o,{loading:t,error:n})})},207:function(e,t,n){"use strict";var r=n(7),a=n.n(r),o=n(8),i=n.n(o),l=n(9),u=n.n(l),d=n(14),c=n.n(d),s=n(15),p=n.n(s),f=n(16),m=n.n(f),y=n(6),h=n.n(y),v=n(4),b=n.n(v),R=n(0),g=n.n(R),S=n(1),E=n.n(S),C=n(206),O=n(313),T=n.n(O),A=n(70),k=n.n(A),_=function(e,t){var n=Object.keys(t).reduce(function(e,n){return t[n]&&(e[n]=t[n]),e},{});return Object.entries(n).reduce(function(e,t){var n=k()(t,2),r=n[0],a=n[1];return function(){return e.apply(void 0,arguments)[r](a)}},e)},j=n(141);n.d(t,"b",function(){return q});var q=["id","type","related","relatedTo","children","queryStore","updateStore","plural","cache","filter","sort","page","queryOptions"],I=function(e){function t(e){var n,r;return i()(this,t),r=c()(this,p()(t).call(this,e)),b()(h()(h()(r)),"isControlled",function(e){return void 0===r.props[e]?r.state[e]:r.props[e]}),b()(h()(h()(r)),"isRelatedToCollection",function(){return!(!r.props.related||!Array.isArray(r.props.relatedTo))}),b()(h()(h()(r)),"checkRelations",function(e){var t=r.props,n=t.type,a=t.relatedTo;if(r.isRelatedToCollection()){var o=Object(j.b)(a,n);return Object(j.a)(e,o)}return e}),b()(h()(h()(r)),"startQuery",function(e){r.setState({loading:!0,error:!1},e)}),b()(h()(h()(r)),"query",function(e){var t=r.props,n=t.related,a=t.relatedTo,o=t.type;return n&&a&&!r.isRelatedToCollection()?e.findRelatedRecords({type:a.type,id:a.id},r.pluralizedType):e.findRecords(o)}),b()(h()(h()(r)),"queryStore",function(){r.props.queryStore(r.query,r.props.queryOptions).then(r.checkRelations).then(function(e){var t;return r.setState((t={},b()(t,r.pluralizedType,e),b()(t,"loading",!1),t))}).catch(function(e){r.setState({loading:!1,error:e})})}),b()(h()(h()(r)),"buildSaveTransforms",function(e){return function(t){return e.map(function(e){return e.id?t.replaceRecord(e):t.addRecord(e)})}}),b()(h()(h()(r)),"buildRemoveTransforms",function(e){return function(t){return e.map(function(e){return t.removeRecord(e)})}}),b()(h()(h()(r)),"getRelatedTo",function(){var e=r.props,t=e.related,n=e.relatedTo,a=r.isControlled(r.pluralizedType);return n||(t&&!n?null:t||n?void 0:a.length?a:null)}),b()(h()(h()(r)),"getCollectionAndHelpers",function(){return Object(j.d)({props:r.props,state:r.state,collection:r.isControlled(r.pluralizedType),buildSaveTransforms:r.buildSaveTransforms,buildRemoveTransforms:r.buildRemoveTransforms,pluralizedType:r.pluralizedType})}),r.pluralizedType=e.plural||T()(e.type),r.state=(n={},b()(n,r.pluralizedType,[]),b()(n,"loading",!1),b()(n,"error",!1),n),r}return m()(t,e),u()(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.related,n=e.relatedTo;return"only"===e.cache?null:void((t&&n||!t)&&this.startQuery(this.queryStore))}},{key:"render",value:function(){var e=this.getRelatedTo(),t=this.getCollectionAndHelpers();return"function"==typeof this.props.children?this.props.children(t):g.a.cloneElement(this.props.children,a()({},t,{relatedTo:e}))}}]),t}(R.PureComponent);t.a=Object(C.withData)(function(e){var t=e.type,n=e.plural,r=e.cache,a=e.related,o=e.relatedTo,i=e.sort,l=e.filter,u=e.page,d=n||T()(t);return"skip"===r?{}:a&&Array.isArray(o)?b()({},d,function(e){return e.findRecords(t)}):a&&o?b()({},d,function(e){return e.findRelatedRecords({type:o.type,id:o.id},d)}):a?{}:b()({},d,_(function(e){return e.findRecords(t)},{sort:i,filter:l,page:u}))},function(e,t){var n=t.plural||T()(t.type);if("skip"===t.cache)return a()({},e,t);if(t.related&&Array.isArray(t.relatedTo)){var r=Object(j.c)({ownProps:t,record:e,pluralizedType:n});return a()({},e,t,b()({},n,r))}return t.related&&!t.relatedTo?a()({},e,t,b()({},n,[])):a()({},e,t)})(I);I.displayName="Collection",I.defaultProps={cache:"skip"},I.propTypes={type:E.a.string,plural:E.a.string,related:E.a.bool,relatedTo:E.a.oneOfType([E.a.object,E.a.array]),cache:E.a.oneOf(["only","skip"]),queryStore:E.a.func.isRequired,updateStore:E.a.func.isRequired,sort:E.a.oneOfType([E.a.string,E.a.object]),filter:E.a.oneOfType([E.a.string,E.a.object]),page:E.a.oneOfType([E.a.number,E.a.object])},I.__docgenInfo={description:"",methods:[{name:"isControlled",docblock:null,modifiers:[],params:[{name:"prop",type:null}],returns:null},{name:"isRelatedToCollection",docblock:null,modifiers:[],params:[],returns:null},{name:"checkRelations",docblock:null,modifiers:[],params:[{name:"collection",type:null}],returns:null},{name:"startQuery",docblock:null,modifiers:[],params:[{name:"query",type:null}],returns:null},{name:"query",docblock:null,modifiers:[],params:[{name:"query",type:null}],returns:null},{name:"queryStore",docblock:null,modifiers:[],params:[],returns:null},{name:"buildSaveTransforms",docblock:null,modifiers:[],params:[{name:"collection",type:null}],returns:null},{name:"buildRemoveTransforms",docblock:null,modifiers:[],params:[{name:"collection",type:null}],returns:null},{name:"getRelatedTo",docblock:null,modifiers:[],params:[],returns:null},{name:"getCollectionAndHelpers",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Collection",props:{cache:{defaultValue:{value:"'skip'",computed:!1},type:{name:"enum",value:[{value:"'only'",computed:!1},{value:"'skip'",computed:!1}]},required:!1,description:""},type:{type:{name:"string"},required:!1,description:""},plural:{type:{name:"string"},required:!1,description:""},related:{type:{name:"bool"},required:!1,description:""},relatedTo:{type:{name:"union",value:[{name:"object"},{name:"array"}]},required:!1,description:""},queryStore:{type:{name:"func"},required:!0,description:""},updateStore:{type:{name:"func"},required:!0,description:""},sort:{type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1,description:""},filter:{type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1,description:""},page:{type:{name:"union",value:[{name:"number"},{name:"object"}]},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Collection.js"]={name:"Collection",docgenInfo:I.__docgenInfo,path:"src\\components\\Collection.js"})},273:function(e,t,n){"use strict";var r=n(748),a=n(310),o=new r.a({schema:a.a}),i={type:"sun",id:"theSun",attributes:{name:"The Sun",classification:"Fusion giant"}},l={type:"planet",id:"jupiter",attributes:{name:"Jupiter",classification:"gas giant",atmosphere:!0}},u={type:"planet",id:"earth",attributes:{name:"Earth",classification:"terrestrial",atmosphere:!0},relationships:{sun:{data:{type:"sun",id:"theSun"}}}},d={type:"planet",id:"venus",attributes:{name:"Venus",classification:"terrestrial",atmosphere:!0}},c={type:"moon",id:"io",attributes:{name:"Io"},relationships:{planet:{data:{type:"planet",id:"jupiter"}}}},s={type:"moon",id:"europa",attributes:{name:"Europa"},relationships:{planet:{data:{type:"planet",id:"jupiter"}}}},p={type:"moon",id:"undiscoveredMoon",attributes:{name:"Undiscovered Moon"}},f={type:"moon",id:"theMoon",attributes:{name:"The Moon"},relationships:{planet:{data:{type:"planet",id:"earth"}}}},m={type:"satellite",id:"deepImpact",attributes:{name:"Deep Impact",class:"spacecraft"},relationships:{sun:{data:{type:"sun",id:"theSun"}}}},y={type:"satellite",id:"kepler",attributes:{name:"Kepler",class:"spacecraft"},relationships:{sun:{data:{type:"sun",id:"theSun"}}}},h={type:"satellite",id:"artemis",attributes:{name:"ARTEMIS",class:"spacecraft"},relationships:{moon:{data:{type:"moon",id:"theMoon"}}}},v={type:"satellite",id:"juno",attributes:{name:"Juno",class:"spacecraft"},relationships:{planet:{data:{type:"planet",id:"jupiter"}}}},b={type:"satellite",id:"galileo",attributes:{name:"Galileo",class:"spacecraft"},relationships:{planet:{data:{type:"planet",id:"jupiter"}}}};o.update(function(e){return[e.addRecord(p),e.addRecord(i),e.addRecord(l),e.addRecord(u),e.addRecord(d),e.addRecord(c),e.addRecord(s),e.addRecord(f),e.addRecord(m),e.addRecord(y),e.addRecord(h),e.addRecord(v),e.addRecord(b)]}),t.a=o},310:function(e,t,n){"use strict";var r=new(n(17).d)({models:{planet:{attributes:{name:{type:"string"},classification:{type:"string"}},relationships:{sun:{type:"hasOne",model:"sun",inverse:"planets"},moons:{type:"hasMany",model:"moon",inverse:"planet"},satellites:{type:"hasMany",model:"satellites",inverse:"planet"}}},moon:{attributes:{name:{type:"string"}},relationships:{planet:{type:"hasOne",model:"planet",inverse:"moons"},satellites:{type:"hasMany",model:"satellites",inverse:"moon"}}},sun:{attributes:{name:{type:"string"},classification:{type:"string"}},relationships:{planets:{type:"hasMany",model:"planets",inverse:"sun"},satellites:{type:"hasMany",model:"satellites",inverse:"sun"}}},satellite:{attributes:{name:{type:"string"},class:{type:"string"}},relationships:{planet:{type:"hasOne",model:"planet",inverse:"satellites"},moon:{type:"hasOne",model:"moon",inverse:"satellites"},sun:{type:"hasOne",model:"sun",inverse:"satellites"}}}}});t.a=r},311:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)({});t.a=a},652:function(e,t,n){"use strict";var r=n(35),a=n.n(r),o=n(0),i=n.n(o),l=n(133),u=function(e){return i.a.createElement(l.b,a()({},e,{type:"planet"}))};t.a=u,u.__docgenInfo={description:"",methods:[],displayName:"Planet"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["orbitStories\\Planet.js"]={name:"Planet",docgenInfo:u.__docgenInfo,path:"orbitStories\\Planet.js"})},653:function(e,t,n){"use strict";var r=n(35),a=n.n(r),o=n(0),i=n.n(o),l=n(207),u=function(e){return i.a.createElement(l.a,a()({type:"planet"},e))};t.a=u,u.__docgenInfo={description:"",methods:[],displayName:"Planets"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["orbitStories\\Planets.js"]={name:"Planets",docgenInfo:u.__docgenInfo,path:"orbitStories\\Planets.js"})},744:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(745),i=n.n(o),l=function(e){var t=e.name,n=e.object,r=e.collapsed;return a.a.createElement(i.a,{name:t||n.type,src:n,collapsed:r,shouldCollapse:function(e){return["attributes","relationships","0","1","2"].includes(e.name)}})};t.a=l,l.__docgenInfo={description:"",methods:[],displayName:"Display"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".docz\\docs\\Display.js"]={name:"Display",docgenInfo:l.__docgenInfo,path:".docz\\docs\\Display.js"})},746:function(e,t,n){"use strict";var r=n(35),a=n.n(r),o=n(0),i=n.n(o),l=n(207),u=function(e){return i.a.createElement(l.a,a()({type:"moon"},e))};t.a=u,u.__docgenInfo={description:"",methods:[],displayName:"Moons"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["orbitStories\\Moons.js"]={name:"Moons",docgenInfo:u.__docgenInfo,path:"orbitStories\\Moons.js"})},747:function(e,t,n){"use strict";var r=n(35),a=n.n(r),o=n(0),i=n.n(o),l=n(133),u=function(e){return i.a.createElement(l.b,a()({type:"sun"},e))};t.a=u,u.__docgenInfo={description:"",methods:[],displayName:"Sun"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["orbitStories\\Sun.js"]={name:"Sun",docgenInfo:u.__docgenInfo,path:"orbitStories\\Sun.js"})},749:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(8),i=n.n(o),l=n(9),u=n.n(l),d=n(14),c=n.n(d),s=n(15),p=n.n(s),f=n(16),m=n.n(f),y=n(6),h=n.n(y),v=n(4),b=n.n(v),R=n(1),g=n.n(R),S=function(e){function t(e){var n;return i()(this,t),n=c()(this,p()(t).call(this,e)),b()(h()(h()(n)),"storeState",function(e){n.setState(e)}),n.state=e.store,n}return m()(t,e),u()(t,[{key:"render",value:function(){return this.props.children(this.state,this.storeState)}}]),t}(r.PureComponent),E=S;S.propTypes={children:g.a.func},S.__docgenInfo={description:"",methods:[{name:"storeState",docblock:null,modifiers:[],params:[{name:"value",type:null}],returns:null}],displayName:"StateContainer",props:{children:{type:{name:"func"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook\\StateContainer.js"]={name:"StateContainer",docgenInfo:S.__docgenInfo,path:".storybook\\StateContainer.js"}),n.d(t,"a",function(){return C});var C=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return function(t,n){return a.a.createElement(E,{store:e},function(e,r){return n.state=e,n.storeState=r,t()})}}},750:function(e,t,n){n(314),n(751),e.exports=n(752)},752:function(e,t,n){"use strict";n.r(t),function(e){var t=n(8),r=n.n(t),a=n(9),o=n.n(a),i=n(14),l=n.n(i),u=n(15),d=n.n(u),c=n(16),s=n.n(c),p=n(0),f=n.n(p),m=n(140),y=n(740),h=n(741),v=n(742),b=n(206),R=n(273),g=n(311),S={buildRecord:function(e){return function(e){return{type:e,id:void 0,attributes:{name:"",classification:"",atmosphere:!0}}}(e)},addRecord:function(e){return R.a.update(function(t){return t.addRecord(e)})},updateRecord:function(e){return R.a.update(function(t){return t.replaceRecord(e)})},removeRecord:function(e){return R.a.update(function(t){return t.removeRecord(e)})},schema:n(310).a},E=function(e){function t(e){var n;return r()(this,t),(n=l()(this,d()(t).call(this,e))).state={render:!1},n}return s()(t,e),o()(t,[{key:"componentDidMount",value:function(){var e=this;this.timeout=setTimeout(function(){return e.setState({render:!0})},300)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout)}},{key:"render",value:function(){return this.state.render?f.a.createElement(g.a.Provider,{value:S},f.a.createElement(b.DataProvider,{dataStore:R.a},this.props.story())):null}}]),t}(p.Component);Object(m.addDecorator)(y.withInfo),Object(m.addDecorator)(Object(h.withOptions)({name:"@exivity/orbit-client",url:"https://github.com/exivity/orbit-client",showAddonPanel:!0,addonPanelInRight:!0,hierarchySeparator:/\/|\./,hierarchyRootSeparator:/\|/})),Object(m.addDecorator)(function(e){return f.a.createElement("div",{style:{padding:"20px"}},f.a.createElement("style",null,"h1:first-child { margin-top: 0; }"),f.a.createElement(v.WithStyle,null,e()))}),Object(m.addDecorator)(function(e){return f.a.createElement(E,{story:e})});var C=n(855);Object(m.configure)(function(){C.keys().forEach(function(e){return C(e)})},e)}.call(this,n(280)(e))},767:function(e,t,n){var r={"./nestedObjectAssign":658,"./nestedObjectAssign.js":658};function a(e){var t=o(e);return n(t)}function o(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=767},855:function(e,t,n){var r={"./OrbitClient.stories.js":856};function a(e){var t=o(e);return n(t)}function o(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=855},856:function(e,t,n){"use strict";n.r(t),function(e){var t=n(8),r=n.n(t),a=n(9),o=n.n(a),i=n(14),l=n.n(i),u=n(15),d=n.n(u),c=n(16),s=n.n(c),p=n(0),f=n.n(p),m=n(140),y=n(749),h=n(744),v=n(652),b=n(653),R=n(746),g=n(747),S=function(e){var t=e.children;return f.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",width:1e3}},t)},E=function(e){var t=e.state,n=e.storeState;return f.a.createElement("div",null,f.a.createElement("label",null,"Id prop:"),f.a.createElement("input",{style:{marginLeft:10},value:t.planetId||"",onChange:function(e){return n({planetId:e.target.value,beforeAddCalled:!1,onAddCalled:!1,beforeUpdateCalled:!1,onUpdateCalled:!1,beforeRemoveCalled:!1,onRemoveCalled:!1})}}))},C=function(e){return e.target.value},O=function(e){return e.target.checked},T=function(e){var t=e.planet,n=e.state;return f.a.createElement("div",null,f.a.createElement("h3",null,"Planet"),f.a.createElement("form",{style:{display:"flex",flexDirection:"column",justifyContent:"space-around",height:500}},f.a.createElement("label",null,"Name:"),f.a.createElement("input",{value:t.attributes.name,onChange:t.setAttribute("name",C)}),f.a.createElement("label",null,"Classification:"),f.a.createElement("input",{value:t.attributes.classification,onChange:t.setAttribute("classification",C)}),f.a.createElement("label",null,"Atmosphere:"),f.a.createElement("input",{type:"checkbox",checked:t.attributes.atmosphere,onChange:t.setAttribute("atmosphere",O)}),f.a.createElement("button",{onClick:function(e){e.preventDefault(),t.save()}},"Save"),f.a.createElement("button",{onClick:function(e){e.preventDefault(),t.remove()}},"Delete"),f.a.createElement("h3",null,"Callbacks"),f.a.createElement("div",null,"beforeAdd called: ".concat(n.beforeAddCalled)),f.a.createElement("div",null,"onAdd called: ".concat(n.onAddCalled)),f.a.createElement("div",null,"beforeUpdate called: ".concat(n.beforeUpdateCalled)),f.a.createElement("div",null,"onUpdate called: ".concat(n.onUpdateCalled)),f.a.createElement("div",null,"beforeRemove called: ".concat(n.beforeRemoveCalled)),f.a.createElement("div",null,"onRemove called: ".concat(n.onRemoveCalled))))},A=function(e){var t=e.planet;return f.a.createElement("div",null,f.a.createElement("h3",null,"Active Record"),f.a.createElement(h.a,{name:"planet",object:t}))},k=function(e){function t(){return r()(this,t),l()(this,d()(t).apply(this,arguments))}return s()(t,e),o()(t,[{key:"render",value:function(){return f.a.createElement("div",null,f.a.createElement("h3",null,"All planet id's"),f.a.createElement(b.a,{cache:"only"},function(e){var t=e.planets;return f.a.createElement("ul",null,t.map(function(e){return f.a.createElement("li",{key:e.id},e.id)}))}))}}]),t}(p.PureComponent),_=function(e){function t(){return r()(this,t),l()(this,d()(t).apply(this,arguments))}return s()(t,e),o()(t,[{key:"render",value:function(){var e=this.props,t=e.moons,n=e.sun;return f.a.createElement("div",null,f.a.createElement("h3",null,"Related moons"),f.a.createElement("ul",null,t.map(function(e){return f.a.createElement("li",{key:e.id},e.id)})),f.a.createElement("h3",null,"Related sun"),f.a.createElement("ul",null,f.a.createElement("li",{key:n&&n.id},n&&n.id)))}}]),t}(p.PureComponent),j=function(){return new Promise(function(e){setTimeout(function(){return e(!0)},3e3)})};Object(m.storiesOf)("components|orbit-client",e).addDecorator(function(e){return f.a.createElement("div",{style:{width:400,border:1}},e())}).addDecorator(Object(y.a)({planetId:"earth",beforeAddCalled:!1,onAddCalled:!1,beforeUpdateCalled:!1,onUpdateCalled:!1,beforeRemoveCalled:!1,onRemoveCalled:!1,sortOrder:"ascending"})).add("Single entity",function(e){var t=e.state,n=e.storeState;return f.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},f.a.createElement(E,{state:t,storeState:n}),f.a.createElement(v.a,{id:t.planetId,beforeAdd:function(){return n({beforeAddCalled:!0}),j()},onAdd:function(e){return n({planetId:e.id,onAddCalled:!0})},beforeUpdate:function(){return n({beforeUpdateCalled:!0}),j()},onUpdate:function(e){return n({planetId:e.id,onUpdateCalled:!0})},beforeRemove:function(){return n({beforeRemoveCalled:!0}),j()},onRemove:function(e){n({planetId:e.id,onRemoveCalled:!0}),setTimeout(function(){return n({planetId:void 0})},2e3)},cache:"only"},function(e){var n=e.planet,r=e.loading,a=e.error;return a?a.message:r?"Loading":n?f.a.createElement(S,null,f.a.createElement(T,{planet:n,state:t}),f.a.createElement(A,{planet:n}),f.a.createElement(k,null)):"no record found in cache"}))}).add("Single entity with relations",function(e){var t=e.state,n=e.storeState;return f.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},f.a.createElement(E,{state:t,storeState:n}),f.a.createElement(v.a,{id:t.planetId,cache:"only"},f.a.createElement(R.a,{related:!0,cache:"only"},f.a.createElement(g.a,{related:!0,cache:"only"},function(e){var n=e.planet,r=e.moons,a=e.sun,o=e.loading,i=e.error;return i?i.message:o?"Loading":n?f.a.createElement(S,null,f.a.createElement(T,{planet:n,state:t}),f.a.createElement(A,{planet:n}),f.a.createElement(k,null),f.a.createElement(_,{moons:r,sun:a})):"no record found in cache"}))))}).add("Multiple entities",function(e){var t=e.state,n=e.storeState;return f.a.createElement("div",null,f.a.createElement("h3",null,"All planet id's"),f.a.createElement(b.a,{sort:{attribute:"name",order:t.sortOrder},cache:"only"},function(e){var r=e.planets,a=e.save,o=e.remove;return f.a.createElement("div",null,f.a.createElement("ul",null,r.map(function(e){return f.a.createElement("li",{key:e.id},e.id)})),f.a.createElement("button",{onClick:function(){return a([{type:"planet",id:"mars",attributes:{name:"Mars"}},{type:"planet",id:"exivity to the moon",attributes:{name:"Rocket"}},{type:"planet",id:"neptunus",attributes:{name:"Neptunusr"}}])}},"Create records"),f.a.createElement("button",{onClick:function(){return o(r)}},"Delete all records"),f.a.createElement("button",{onClick:function(){n({sortOrder:"ascending"===t.sortOrder?"descending":"ascending"})}},t.sortOrder))}))})}.call(this,n(280)(e))}},[[750,3,2]]]);
//# sourceMappingURL=iframe.3b5ef74509e2e0f47128.bundle.js.map