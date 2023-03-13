goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_48241 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_48241(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_48249 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_48249(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__47170 = coll;
var G__47171 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47170,G__47171) : shadow.dom.lazy_native_coll_seq.call(null,G__47170,G__47171));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__47194 = arguments.length;
switch (G__47194) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__47196 = arguments.length;
switch (G__47196) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__47200 = arguments.length;
switch (G__47200) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__47205 = arguments.length;
switch (G__47205) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__47215 = arguments.length;
switch (G__47215) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__47235 = arguments.length;
switch (G__47235) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e47242){if((e47242 instanceof Object)){
var e = e47242;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47242;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__47253 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47254 = null;
var count__47255 = (0);
var i__47256 = (0);
while(true){
if((i__47256 < count__47255)){
var el = chunk__47254.cljs$core$IIndexed$_nth$arity$2(null,i__47256);
var handler_48350__$1 = ((function (seq__47253,chunk__47254,count__47255,i__47256,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47253,chunk__47254,count__47255,i__47256,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48350__$1);


var G__48357 = seq__47253;
var G__48358 = chunk__47254;
var G__48359 = count__47255;
var G__48360 = (i__47256 + (1));
seq__47253 = G__48357;
chunk__47254 = G__48358;
count__47255 = G__48359;
i__47256 = G__48360;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47253);
if(temp__5804__auto__){
var seq__47253__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47253__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47253__$1);
var G__48362 = cljs.core.chunk_rest(seq__47253__$1);
var G__48363 = c__4556__auto__;
var G__48364 = cljs.core.count(c__4556__auto__);
var G__48365 = (0);
seq__47253 = G__48362;
chunk__47254 = G__48363;
count__47255 = G__48364;
i__47256 = G__48365;
continue;
} else {
var el = cljs.core.first(seq__47253__$1);
var handler_48368__$1 = ((function (seq__47253,chunk__47254,count__47255,i__47256,el,seq__47253__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47253,chunk__47254,count__47255,i__47256,el,seq__47253__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48368__$1);


var G__48377 = cljs.core.next(seq__47253__$1);
var G__48378 = null;
var G__48379 = (0);
var G__48380 = (0);
seq__47253 = G__48377;
chunk__47254 = G__48378;
count__47255 = G__48379;
i__47256 = G__48380;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__47291 = arguments.length;
switch (G__47291) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__47304 = cljs.core.seq(events);
var chunk__47305 = null;
var count__47306 = (0);
var i__47307 = (0);
while(true){
if((i__47307 < count__47306)){
var vec__47327 = chunk__47305.cljs$core$IIndexed$_nth$arity$2(null,i__47307);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47327,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47327,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48408 = seq__47304;
var G__48409 = chunk__47305;
var G__48410 = count__47306;
var G__48411 = (i__47307 + (1));
seq__47304 = G__48408;
chunk__47305 = G__48409;
count__47306 = G__48410;
i__47307 = G__48411;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47304);
if(temp__5804__auto__){
var seq__47304__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47304__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47304__$1);
var G__48416 = cljs.core.chunk_rest(seq__47304__$1);
var G__48417 = c__4556__auto__;
var G__48418 = cljs.core.count(c__4556__auto__);
var G__48419 = (0);
seq__47304 = G__48416;
chunk__47305 = G__48417;
count__47306 = G__48418;
i__47307 = G__48419;
continue;
} else {
var vec__47334 = cljs.core.first(seq__47304__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47334,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47334,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48431 = cljs.core.next(seq__47304__$1);
var G__48432 = null;
var G__48433 = (0);
var G__48434 = (0);
seq__47304 = G__48431;
chunk__47305 = G__48432;
count__47306 = G__48433;
i__47307 = G__48434;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__47341 = cljs.core.seq(styles);
var chunk__47342 = null;
var count__47343 = (0);
var i__47344 = (0);
while(true){
if((i__47344 < count__47343)){
var vec__47357 = chunk__47342.cljs$core$IIndexed$_nth$arity$2(null,i__47344);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47357,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47357,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48442 = seq__47341;
var G__48443 = chunk__47342;
var G__48444 = count__47343;
var G__48445 = (i__47344 + (1));
seq__47341 = G__48442;
chunk__47342 = G__48443;
count__47343 = G__48444;
i__47344 = G__48445;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47341);
if(temp__5804__auto__){
var seq__47341__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47341__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47341__$1);
var G__48449 = cljs.core.chunk_rest(seq__47341__$1);
var G__48450 = c__4556__auto__;
var G__48451 = cljs.core.count(c__4556__auto__);
var G__48452 = (0);
seq__47341 = G__48449;
chunk__47342 = G__48450;
count__47343 = G__48451;
i__47344 = G__48452;
continue;
} else {
var vec__47367 = cljs.core.first(seq__47341__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47367,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47367,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48458 = cljs.core.next(seq__47341__$1);
var G__48459 = null;
var G__48460 = (0);
var G__48461 = (0);
seq__47341 = G__48458;
chunk__47342 = G__48459;
count__47343 = G__48460;
i__47344 = G__48461;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__47393_48462 = key;
var G__47393_48463__$1 = (((G__47393_48462 instanceof cljs.core.Keyword))?G__47393_48462.fqn:null);
switch (G__47393_48463__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_48480 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_48480,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_48480,"aria-");
}
})())){
el.setAttribute(ks_48480,value);
} else {
(el[ks_48480] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47427){
var map__47428 = p__47427;
var map__47428__$1 = (((((!((map__47428 == null))))?(((((map__47428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47428):map__47428);
var props = map__47428__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47428__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47430 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47430,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47430,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47430,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47434 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47434,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47434;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47437 = arguments.length;
switch (G__47437) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47443){
var vec__47446 = p__47443;
var seq__47447 = cljs.core.seq(vec__47446);
var first__47448 = cljs.core.first(seq__47447);
var seq__47447__$1 = cljs.core.next(seq__47447);
var nn = first__47448;
var first__47448__$1 = cljs.core.first(seq__47447__$1);
var seq__47447__$2 = cljs.core.next(seq__47447__$1);
var np = first__47448__$1;
var nc = seq__47447__$2;
var node = vec__47446;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47457 = nn;
var G__47458 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47457,G__47458) : create_fn.call(null,G__47457,G__47458));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47461 = nn;
var G__47462 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47461,G__47462) : create_fn.call(null,G__47461,G__47462));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47469 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47469,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47469,(1),null);
var seq__47473_48549 = cljs.core.seq(node_children);
var chunk__47474_48550 = null;
var count__47475_48551 = (0);
var i__47476_48552 = (0);
while(true){
if((i__47476_48552 < count__47475_48551)){
var child_struct_48553 = chunk__47474_48550.cljs$core$IIndexed$_nth$arity$2(null,i__47476_48552);
var children_48554 = shadow.dom.dom_node(child_struct_48553);
if(cljs.core.seq_QMARK_(children_48554)){
var seq__47512_48555 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48554));
var chunk__47514_48556 = null;
var count__47515_48557 = (0);
var i__47516_48558 = (0);
while(true){
if((i__47516_48558 < count__47515_48557)){
var child_48559 = chunk__47514_48556.cljs$core$IIndexed$_nth$arity$2(null,i__47516_48558);
if(cljs.core.truth_(child_48559)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48559);


var G__48560 = seq__47512_48555;
var G__48561 = chunk__47514_48556;
var G__48562 = count__47515_48557;
var G__48563 = (i__47516_48558 + (1));
seq__47512_48555 = G__48560;
chunk__47514_48556 = G__48561;
count__47515_48557 = G__48562;
i__47516_48558 = G__48563;
continue;
} else {
var G__48564 = seq__47512_48555;
var G__48565 = chunk__47514_48556;
var G__48566 = count__47515_48557;
var G__48567 = (i__47516_48558 + (1));
seq__47512_48555 = G__48564;
chunk__47514_48556 = G__48565;
count__47515_48557 = G__48566;
i__47516_48558 = G__48567;
continue;
}
} else {
var temp__5804__auto___48568 = cljs.core.seq(seq__47512_48555);
if(temp__5804__auto___48568){
var seq__47512_48569__$1 = temp__5804__auto___48568;
if(cljs.core.chunked_seq_QMARK_(seq__47512_48569__$1)){
var c__4556__auto___48570 = cljs.core.chunk_first(seq__47512_48569__$1);
var G__48571 = cljs.core.chunk_rest(seq__47512_48569__$1);
var G__48572 = c__4556__auto___48570;
var G__48573 = cljs.core.count(c__4556__auto___48570);
var G__48574 = (0);
seq__47512_48555 = G__48571;
chunk__47514_48556 = G__48572;
count__47515_48557 = G__48573;
i__47516_48558 = G__48574;
continue;
} else {
var child_48575 = cljs.core.first(seq__47512_48569__$1);
if(cljs.core.truth_(child_48575)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48575);


var G__48579 = cljs.core.next(seq__47512_48569__$1);
var G__48580 = null;
var G__48581 = (0);
var G__48582 = (0);
seq__47512_48555 = G__48579;
chunk__47514_48556 = G__48580;
count__47515_48557 = G__48581;
i__47516_48558 = G__48582;
continue;
} else {
var G__48586 = cljs.core.next(seq__47512_48569__$1);
var G__48587 = null;
var G__48588 = (0);
var G__48589 = (0);
seq__47512_48555 = G__48586;
chunk__47514_48556 = G__48587;
count__47515_48557 = G__48588;
i__47516_48558 = G__48589;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48554);
}


var G__48590 = seq__47473_48549;
var G__48591 = chunk__47474_48550;
var G__48592 = count__47475_48551;
var G__48593 = (i__47476_48552 + (1));
seq__47473_48549 = G__48590;
chunk__47474_48550 = G__48591;
count__47475_48551 = G__48592;
i__47476_48552 = G__48593;
continue;
} else {
var temp__5804__auto___48595 = cljs.core.seq(seq__47473_48549);
if(temp__5804__auto___48595){
var seq__47473_48598__$1 = temp__5804__auto___48595;
if(cljs.core.chunked_seq_QMARK_(seq__47473_48598__$1)){
var c__4556__auto___48599 = cljs.core.chunk_first(seq__47473_48598__$1);
var G__48600 = cljs.core.chunk_rest(seq__47473_48598__$1);
var G__48601 = c__4556__auto___48599;
var G__48602 = cljs.core.count(c__4556__auto___48599);
var G__48603 = (0);
seq__47473_48549 = G__48600;
chunk__47474_48550 = G__48601;
count__47475_48551 = G__48602;
i__47476_48552 = G__48603;
continue;
} else {
var child_struct_48604 = cljs.core.first(seq__47473_48598__$1);
var children_48605 = shadow.dom.dom_node(child_struct_48604);
if(cljs.core.seq_QMARK_(children_48605)){
var seq__47535_48606 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48605));
var chunk__47537_48607 = null;
var count__47538_48608 = (0);
var i__47539_48609 = (0);
while(true){
if((i__47539_48609 < count__47538_48608)){
var child_48611 = chunk__47537_48607.cljs$core$IIndexed$_nth$arity$2(null,i__47539_48609);
if(cljs.core.truth_(child_48611)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48611);


var G__48613 = seq__47535_48606;
var G__48614 = chunk__47537_48607;
var G__48615 = count__47538_48608;
var G__48616 = (i__47539_48609 + (1));
seq__47535_48606 = G__48613;
chunk__47537_48607 = G__48614;
count__47538_48608 = G__48615;
i__47539_48609 = G__48616;
continue;
} else {
var G__48617 = seq__47535_48606;
var G__48618 = chunk__47537_48607;
var G__48619 = count__47538_48608;
var G__48620 = (i__47539_48609 + (1));
seq__47535_48606 = G__48617;
chunk__47537_48607 = G__48618;
count__47538_48608 = G__48619;
i__47539_48609 = G__48620;
continue;
}
} else {
var temp__5804__auto___48625__$1 = cljs.core.seq(seq__47535_48606);
if(temp__5804__auto___48625__$1){
var seq__47535_48626__$1 = temp__5804__auto___48625__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47535_48626__$1)){
var c__4556__auto___48627 = cljs.core.chunk_first(seq__47535_48626__$1);
var G__48628 = cljs.core.chunk_rest(seq__47535_48626__$1);
var G__48629 = c__4556__auto___48627;
var G__48630 = cljs.core.count(c__4556__auto___48627);
var G__48631 = (0);
seq__47535_48606 = G__48628;
chunk__47537_48607 = G__48629;
count__47538_48608 = G__48630;
i__47539_48609 = G__48631;
continue;
} else {
var child_48632 = cljs.core.first(seq__47535_48626__$1);
if(cljs.core.truth_(child_48632)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48632);


var G__48633 = cljs.core.next(seq__47535_48626__$1);
var G__48634 = null;
var G__48635 = (0);
var G__48636 = (0);
seq__47535_48606 = G__48633;
chunk__47537_48607 = G__48634;
count__47538_48608 = G__48635;
i__47539_48609 = G__48636;
continue;
} else {
var G__48637 = cljs.core.next(seq__47535_48626__$1);
var G__48638 = null;
var G__48639 = (0);
var G__48640 = (0);
seq__47535_48606 = G__48637;
chunk__47537_48607 = G__48638;
count__47538_48608 = G__48639;
i__47539_48609 = G__48640;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48605);
}


var G__48641 = cljs.core.next(seq__47473_48598__$1);
var G__48642 = null;
var G__48643 = (0);
var G__48644 = (0);
seq__47473_48549 = G__48641;
chunk__47474_48550 = G__48642;
count__47475_48551 = G__48643;
i__47476_48552 = G__48644;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__47563 = cljs.core.seq(node);
var chunk__47564 = null;
var count__47565 = (0);
var i__47566 = (0);
while(true){
if((i__47566 < count__47565)){
var n = chunk__47564.cljs$core$IIndexed$_nth$arity$2(null,i__47566);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48653 = seq__47563;
var G__48654 = chunk__47564;
var G__48655 = count__47565;
var G__48656 = (i__47566 + (1));
seq__47563 = G__48653;
chunk__47564 = G__48654;
count__47565 = G__48655;
i__47566 = G__48656;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47563);
if(temp__5804__auto__){
var seq__47563__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47563__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47563__$1);
var G__48657 = cljs.core.chunk_rest(seq__47563__$1);
var G__48658 = c__4556__auto__;
var G__48659 = cljs.core.count(c__4556__auto__);
var G__48660 = (0);
seq__47563 = G__48657;
chunk__47564 = G__48658;
count__47565 = G__48659;
i__47566 = G__48660;
continue;
} else {
var n = cljs.core.first(seq__47563__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48661 = cljs.core.next(seq__47563__$1);
var G__48662 = null;
var G__48663 = (0);
var G__48664 = (0);
seq__47563 = G__48661;
chunk__47564 = G__48662;
count__47565 = G__48663;
i__47566 = G__48664;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__47580 = arguments.length;
switch (G__47580) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__47591 = arguments.length;
switch (G__47591) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__47598 = arguments.length;
switch (G__47598) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48677 = arguments.length;
var i__4737__auto___48678 = (0);
while(true){
if((i__4737__auto___48678 < len__4736__auto___48677)){
args__4742__auto__.push((arguments[i__4737__auto___48678]));

var G__48680 = (i__4737__auto___48678 + (1));
i__4737__auto___48678 = G__48680;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__47608_48683 = cljs.core.seq(nodes);
var chunk__47609_48684 = null;
var count__47610_48685 = (0);
var i__47611_48686 = (0);
while(true){
if((i__47611_48686 < count__47610_48685)){
var node_48688 = chunk__47609_48684.cljs$core$IIndexed$_nth$arity$2(null,i__47611_48686);
fragment.appendChild(shadow.dom._to_dom(node_48688));


var G__48689 = seq__47608_48683;
var G__48690 = chunk__47609_48684;
var G__48691 = count__47610_48685;
var G__48692 = (i__47611_48686 + (1));
seq__47608_48683 = G__48689;
chunk__47609_48684 = G__48690;
count__47610_48685 = G__48691;
i__47611_48686 = G__48692;
continue;
} else {
var temp__5804__auto___48694 = cljs.core.seq(seq__47608_48683);
if(temp__5804__auto___48694){
var seq__47608_48696__$1 = temp__5804__auto___48694;
if(cljs.core.chunked_seq_QMARK_(seq__47608_48696__$1)){
var c__4556__auto___48697 = cljs.core.chunk_first(seq__47608_48696__$1);
var G__48699 = cljs.core.chunk_rest(seq__47608_48696__$1);
var G__48700 = c__4556__auto___48697;
var G__48701 = cljs.core.count(c__4556__auto___48697);
var G__48702 = (0);
seq__47608_48683 = G__48699;
chunk__47609_48684 = G__48700;
count__47610_48685 = G__48701;
i__47611_48686 = G__48702;
continue;
} else {
var node_48704 = cljs.core.first(seq__47608_48696__$1);
fragment.appendChild(shadow.dom._to_dom(node_48704));


var G__48709 = cljs.core.next(seq__47608_48696__$1);
var G__48710 = null;
var G__48711 = (0);
var G__48712 = (0);
seq__47608_48683 = G__48709;
chunk__47609_48684 = G__48710;
count__47610_48685 = G__48711;
i__47611_48686 = G__48712;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq47604){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47604));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__47627_48715 = cljs.core.seq(scripts);
var chunk__47628_48716 = null;
var count__47629_48717 = (0);
var i__47630_48718 = (0);
while(true){
if((i__47630_48718 < count__47629_48717)){
var vec__47641_48721 = chunk__47628_48716.cljs$core$IIndexed$_nth$arity$2(null,i__47630_48718);
var script_tag_48722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47641_48721,(0),null);
var script_body_48723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47641_48721,(1),null);
eval(script_body_48723);


var G__48724 = seq__47627_48715;
var G__48725 = chunk__47628_48716;
var G__48726 = count__47629_48717;
var G__48727 = (i__47630_48718 + (1));
seq__47627_48715 = G__48724;
chunk__47628_48716 = G__48725;
count__47629_48717 = G__48726;
i__47630_48718 = G__48727;
continue;
} else {
var temp__5804__auto___48729 = cljs.core.seq(seq__47627_48715);
if(temp__5804__auto___48729){
var seq__47627_48730__$1 = temp__5804__auto___48729;
if(cljs.core.chunked_seq_QMARK_(seq__47627_48730__$1)){
var c__4556__auto___48731 = cljs.core.chunk_first(seq__47627_48730__$1);
var G__48732 = cljs.core.chunk_rest(seq__47627_48730__$1);
var G__48733 = c__4556__auto___48731;
var G__48734 = cljs.core.count(c__4556__auto___48731);
var G__48735 = (0);
seq__47627_48715 = G__48732;
chunk__47628_48716 = G__48733;
count__47629_48717 = G__48734;
i__47630_48718 = G__48735;
continue;
} else {
var vec__47646_48737 = cljs.core.first(seq__47627_48730__$1);
var script_tag_48738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47646_48737,(0),null);
var script_body_48739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47646_48737,(1),null);
eval(script_body_48739);


var G__48740 = cljs.core.next(seq__47627_48730__$1);
var G__48741 = null;
var G__48742 = (0);
var G__48743 = (0);
seq__47627_48715 = G__48740;
chunk__47628_48716 = G__48741;
count__47629_48717 = G__48742;
i__47630_48718 = G__48743;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__47650){
var vec__47651 = p__47650;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47651,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47651,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__47671 = arguments.length;
switch (G__47671) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__47680 = cljs.core.seq(style_keys);
var chunk__47681 = null;
var count__47682 = (0);
var i__47683 = (0);
while(true){
if((i__47683 < count__47682)){
var it = chunk__47681.cljs$core$IIndexed$_nth$arity$2(null,i__47683);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48755 = seq__47680;
var G__48756 = chunk__47681;
var G__48757 = count__47682;
var G__48758 = (i__47683 + (1));
seq__47680 = G__48755;
chunk__47681 = G__48756;
count__47682 = G__48757;
i__47683 = G__48758;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47680);
if(temp__5804__auto__){
var seq__47680__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47680__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47680__$1);
var G__48760 = cljs.core.chunk_rest(seq__47680__$1);
var G__48761 = c__4556__auto__;
var G__48762 = cljs.core.count(c__4556__auto__);
var G__48763 = (0);
seq__47680 = G__48760;
chunk__47681 = G__48761;
count__47682 = G__48762;
i__47683 = G__48763;
continue;
} else {
var it = cljs.core.first(seq__47680__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48766 = cljs.core.next(seq__47680__$1);
var G__48767 = null;
var G__48768 = (0);
var G__48769 = (0);
seq__47680 = G__48766;
chunk__47681 = G__48767;
count__47682 = G__48768;
i__47683 = G__48769;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k47700,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__47712 = k47700;
var G__47712__$1 = (((G__47712 instanceof cljs.core.Keyword))?G__47712.fqn:null);
switch (G__47712__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47700,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__47714){
var vec__47715 = p__47714;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47715,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47715,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47699){
var self__ = this;
var G__47699__$1 = this;
return (new cljs.core.RecordIter((0),G__47699__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47701,other47702){
var self__ = this;
var this47701__$1 = this;
return (((!((other47702 == null)))) && ((this47701__$1.constructor === other47702.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47701__$1.x,other47702.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47701__$1.y,other47702.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47701__$1.__extmap,other47702.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__47699){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__47755 = cljs.core.keyword_identical_QMARK_;
var expr__47756 = k__4388__auto__;
if(cljs.core.truth_((pred__47755.cljs$core$IFn$_invoke$arity$2 ? pred__47755.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__47756) : pred__47755.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__47756)))){
return (new shadow.dom.Coordinate(G__47699,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47755.cljs$core$IFn$_invoke$arity$2 ? pred__47755.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__47756) : pred__47755.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__47756)))){
return (new shadow.dom.Coordinate(self__.x,G__47699,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__47699),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__47699){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__47699,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__47706){
var extmap__4419__auto__ = (function (){var G__47766 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47706,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__47706)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47766);
} else {
return G__47766;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__47706),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__47706),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k47772,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__47779 = k47772;
var G__47779__$1 = (((G__47779 instanceof cljs.core.Keyword))?G__47779.fqn:null);
switch (G__47779__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47772,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__47781){
var vec__47782 = p__47781;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47782,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47782,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47771){
var self__ = this;
var G__47771__$1 = this;
return (new cljs.core.RecordIter((0),G__47771__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47773,other47774){
var self__ = this;
var this47773__$1 = this;
return (((!((other47774 == null)))) && ((this47773__$1.constructor === other47774.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47773__$1.w,other47774.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47773__$1.h,other47774.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47773__$1.__extmap,other47774.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__47771){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__47804 = cljs.core.keyword_identical_QMARK_;
var expr__47805 = k__4388__auto__;
if(cljs.core.truth_((pred__47804.cljs$core$IFn$_invoke$arity$2 ? pred__47804.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__47805) : pred__47804.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__47805)))){
return (new shadow.dom.Size(G__47771,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47804.cljs$core$IFn$_invoke$arity$2 ? pred__47804.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__47805) : pred__47804.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__47805)))){
return (new shadow.dom.Size(self__.w,G__47771,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__47771),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__47771){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__47771,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__47776){
var extmap__4419__auto__ = (function (){var G__47809 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47776,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__47776)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47809);
} else {
return G__47809;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__47776),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__47776),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__48912 = (i + (1));
var G__48913 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48912;
ret = G__48913;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47858){
var vec__47859 = p__47858;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47859,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47859,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__47872 = arguments.length;
switch (G__47872) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__48946 = ps;
var G__48947 = (i + (1));
el__$1 = G__48946;
i = G__48947;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__47919 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47919,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47919,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47919,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__47925_48966 = cljs.core.seq(props);
var chunk__47926_48967 = null;
var count__47927_48968 = (0);
var i__47928_48969 = (0);
while(true){
if((i__47928_48969 < count__47927_48968)){
var vec__47952_48972 = chunk__47926_48967.cljs$core$IIndexed$_nth$arity$2(null,i__47928_48969);
var k_48973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47952_48972,(0),null);
var v_48974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47952_48972,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_48973);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48973),v_48974);


var G__48977 = seq__47925_48966;
var G__48978 = chunk__47926_48967;
var G__48979 = count__47927_48968;
var G__48980 = (i__47928_48969 + (1));
seq__47925_48966 = G__48977;
chunk__47926_48967 = G__48978;
count__47927_48968 = G__48979;
i__47928_48969 = G__48980;
continue;
} else {
var temp__5804__auto___48982 = cljs.core.seq(seq__47925_48966);
if(temp__5804__auto___48982){
var seq__47925_48987__$1 = temp__5804__auto___48982;
if(cljs.core.chunked_seq_QMARK_(seq__47925_48987__$1)){
var c__4556__auto___48988 = cljs.core.chunk_first(seq__47925_48987__$1);
var G__48989 = cljs.core.chunk_rest(seq__47925_48987__$1);
var G__48990 = c__4556__auto___48988;
var G__48991 = cljs.core.count(c__4556__auto___48988);
var G__48992 = (0);
seq__47925_48966 = G__48989;
chunk__47926_48967 = G__48990;
count__47927_48968 = G__48991;
i__47928_48969 = G__48992;
continue;
} else {
var vec__47962_48995 = cljs.core.first(seq__47925_48987__$1);
var k_48996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47962_48995,(0),null);
var v_48997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47962_48995,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_48996);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48996),v_48997);


var G__49001 = cljs.core.next(seq__47925_48987__$1);
var G__49002 = null;
var G__49003 = (0);
var G__49004 = (0);
seq__47925_48966 = G__49001;
chunk__47926_48967 = G__49002;
count__47927_48968 = G__49003;
i__47928_48969 = G__49004;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__47984 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47984,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47984,(1),null);
var seq__47989_49013 = cljs.core.seq(node_children);
var chunk__47991_49014 = null;
var count__47992_49015 = (0);
var i__47993_49016 = (0);
while(true){
if((i__47993_49016 < count__47992_49015)){
var child_struct_49018 = chunk__47991_49014.cljs$core$IIndexed$_nth$arity$2(null,i__47993_49016);
if((!((child_struct_49018 == null)))){
if(typeof child_struct_49018 === 'string'){
var text_49025 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49025),child_struct_49018].join(''));
} else {
var children_49026 = shadow.dom.svg_node(child_struct_49018);
if(cljs.core.seq_QMARK_(children_49026)){
var seq__48049_49028 = cljs.core.seq(children_49026);
var chunk__48051_49029 = null;
var count__48052_49030 = (0);
var i__48053_49031 = (0);
while(true){
if((i__48053_49031 < count__48052_49030)){
var child_49036 = chunk__48051_49029.cljs$core$IIndexed$_nth$arity$2(null,i__48053_49031);
if(cljs.core.truth_(child_49036)){
node.appendChild(child_49036);


var G__49037 = seq__48049_49028;
var G__49038 = chunk__48051_49029;
var G__49039 = count__48052_49030;
var G__49040 = (i__48053_49031 + (1));
seq__48049_49028 = G__49037;
chunk__48051_49029 = G__49038;
count__48052_49030 = G__49039;
i__48053_49031 = G__49040;
continue;
} else {
var G__49042 = seq__48049_49028;
var G__49043 = chunk__48051_49029;
var G__49044 = count__48052_49030;
var G__49045 = (i__48053_49031 + (1));
seq__48049_49028 = G__49042;
chunk__48051_49029 = G__49043;
count__48052_49030 = G__49044;
i__48053_49031 = G__49045;
continue;
}
} else {
var temp__5804__auto___49046 = cljs.core.seq(seq__48049_49028);
if(temp__5804__auto___49046){
var seq__48049_49047__$1 = temp__5804__auto___49046;
if(cljs.core.chunked_seq_QMARK_(seq__48049_49047__$1)){
var c__4556__auto___49048 = cljs.core.chunk_first(seq__48049_49047__$1);
var G__49049 = cljs.core.chunk_rest(seq__48049_49047__$1);
var G__49050 = c__4556__auto___49048;
var G__49051 = cljs.core.count(c__4556__auto___49048);
var G__49052 = (0);
seq__48049_49028 = G__49049;
chunk__48051_49029 = G__49050;
count__48052_49030 = G__49051;
i__48053_49031 = G__49052;
continue;
} else {
var child_49054 = cljs.core.first(seq__48049_49047__$1);
if(cljs.core.truth_(child_49054)){
node.appendChild(child_49054);


var G__49055 = cljs.core.next(seq__48049_49047__$1);
var G__49056 = null;
var G__49057 = (0);
var G__49058 = (0);
seq__48049_49028 = G__49055;
chunk__48051_49029 = G__49056;
count__48052_49030 = G__49057;
i__48053_49031 = G__49058;
continue;
} else {
var G__49059 = cljs.core.next(seq__48049_49047__$1);
var G__49060 = null;
var G__49061 = (0);
var G__49062 = (0);
seq__48049_49028 = G__49059;
chunk__48051_49029 = G__49060;
count__48052_49030 = G__49061;
i__48053_49031 = G__49062;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49026);
}
}


var G__49067 = seq__47989_49013;
var G__49068 = chunk__47991_49014;
var G__49069 = count__47992_49015;
var G__49070 = (i__47993_49016 + (1));
seq__47989_49013 = G__49067;
chunk__47991_49014 = G__49068;
count__47992_49015 = G__49069;
i__47993_49016 = G__49070;
continue;
} else {
var G__49071 = seq__47989_49013;
var G__49072 = chunk__47991_49014;
var G__49073 = count__47992_49015;
var G__49074 = (i__47993_49016 + (1));
seq__47989_49013 = G__49071;
chunk__47991_49014 = G__49072;
count__47992_49015 = G__49073;
i__47993_49016 = G__49074;
continue;
}
} else {
var temp__5804__auto___49076 = cljs.core.seq(seq__47989_49013);
if(temp__5804__auto___49076){
var seq__47989_49078__$1 = temp__5804__auto___49076;
if(cljs.core.chunked_seq_QMARK_(seq__47989_49078__$1)){
var c__4556__auto___49080 = cljs.core.chunk_first(seq__47989_49078__$1);
var G__49083 = cljs.core.chunk_rest(seq__47989_49078__$1);
var G__49084 = c__4556__auto___49080;
var G__49085 = cljs.core.count(c__4556__auto___49080);
var G__49086 = (0);
seq__47989_49013 = G__49083;
chunk__47991_49014 = G__49084;
count__47992_49015 = G__49085;
i__47993_49016 = G__49086;
continue;
} else {
var child_struct_49089 = cljs.core.first(seq__47989_49078__$1);
if((!((child_struct_49089 == null)))){
if(typeof child_struct_49089 === 'string'){
var text_49093 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49093),child_struct_49089].join(''));
} else {
var children_49095 = shadow.dom.svg_node(child_struct_49089);
if(cljs.core.seq_QMARK_(children_49095)){
var seq__48083_49097 = cljs.core.seq(children_49095);
var chunk__48085_49098 = null;
var count__48086_49099 = (0);
var i__48087_49100 = (0);
while(true){
if((i__48087_49100 < count__48086_49099)){
var child_49103 = chunk__48085_49098.cljs$core$IIndexed$_nth$arity$2(null,i__48087_49100);
if(cljs.core.truth_(child_49103)){
node.appendChild(child_49103);


var G__49105 = seq__48083_49097;
var G__49106 = chunk__48085_49098;
var G__49107 = count__48086_49099;
var G__49108 = (i__48087_49100 + (1));
seq__48083_49097 = G__49105;
chunk__48085_49098 = G__49106;
count__48086_49099 = G__49107;
i__48087_49100 = G__49108;
continue;
} else {
var G__49113 = seq__48083_49097;
var G__49114 = chunk__48085_49098;
var G__49115 = count__48086_49099;
var G__49116 = (i__48087_49100 + (1));
seq__48083_49097 = G__49113;
chunk__48085_49098 = G__49114;
count__48086_49099 = G__49115;
i__48087_49100 = G__49116;
continue;
}
} else {
var temp__5804__auto___49117__$1 = cljs.core.seq(seq__48083_49097);
if(temp__5804__auto___49117__$1){
var seq__48083_49122__$1 = temp__5804__auto___49117__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48083_49122__$1)){
var c__4556__auto___49123 = cljs.core.chunk_first(seq__48083_49122__$1);
var G__49125 = cljs.core.chunk_rest(seq__48083_49122__$1);
var G__49126 = c__4556__auto___49123;
var G__49127 = cljs.core.count(c__4556__auto___49123);
var G__49128 = (0);
seq__48083_49097 = G__49125;
chunk__48085_49098 = G__49126;
count__48086_49099 = G__49127;
i__48087_49100 = G__49128;
continue;
} else {
var child_49129 = cljs.core.first(seq__48083_49122__$1);
if(cljs.core.truth_(child_49129)){
node.appendChild(child_49129);


var G__49134 = cljs.core.next(seq__48083_49122__$1);
var G__49135 = null;
var G__49136 = (0);
var G__49137 = (0);
seq__48083_49097 = G__49134;
chunk__48085_49098 = G__49135;
count__48086_49099 = G__49136;
i__48087_49100 = G__49137;
continue;
} else {
var G__49138 = cljs.core.next(seq__48083_49122__$1);
var G__49139 = null;
var G__49140 = (0);
var G__49141 = (0);
seq__48083_49097 = G__49138;
chunk__48085_49098 = G__49139;
count__48086_49099 = G__49140;
i__48087_49100 = G__49141;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49095);
}
}


var G__49142 = cljs.core.next(seq__47989_49078__$1);
var G__49143 = null;
var G__49144 = (0);
var G__49145 = (0);
seq__47989_49013 = G__49142;
chunk__47991_49014 = G__49143;
count__47992_49015 = G__49144;
i__47993_49016 = G__49145;
continue;
} else {
var G__49147 = cljs.core.next(seq__47989_49078__$1);
var G__49148 = null;
var G__49149 = (0);
var G__49150 = (0);
seq__47989_49013 = G__49147;
chunk__47991_49014 = G__49148;
count__47992_49015 = G__49149;
i__47993_49016 = G__49150;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___49165 = arguments.length;
var i__4737__auto___49168 = (0);
while(true){
if((i__4737__auto___49168 < len__4736__auto___49165)){
args__4742__auto__.push((arguments[i__4737__auto___49168]));

var G__49169 = (i__4737__auto___49168 + (1));
i__4737__auto___49168 = G__49169;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq48124){
var G__48125 = cljs.core.first(seq48124);
var seq48124__$1 = cljs.core.next(seq48124);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48125,seq48124__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__48144 = arguments.length;
switch (G__48144) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__44112__auto___49192 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44113__auto__ = (function (){var switch__44035__auto__ = (function (state_48168){
var state_val_48169 = (state_48168[(1)]);
if((state_val_48169 === (1))){
var state_48168__$1 = state_48168;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48168__$1,(2),once_or_cleanup);
} else {
if((state_val_48169 === (2))){
var inst_48165 = (state_48168[(2)]);
var inst_48166 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48168__$1 = (function (){var statearr_48188 = state_48168;
(statearr_48188[(7)] = inst_48165);

return statearr_48188;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48168__$1,inst_48166);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__44036__auto__ = null;
var shadow$dom$state_machine__44036__auto____0 = (function (){
var statearr_48192 = [null,null,null,null,null,null,null,null];
(statearr_48192[(0)] = shadow$dom$state_machine__44036__auto__);

(statearr_48192[(1)] = (1));

return statearr_48192;
});
var shadow$dom$state_machine__44036__auto____1 = (function (state_48168){
while(true){
var ret_value__44037__auto__ = (function (){try{while(true){
var result__44038__auto__ = switch__44035__auto__(state_48168);
if(cljs.core.keyword_identical_QMARK_(result__44038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44038__auto__;
}
break;
}
}catch (e48193){var ex__44039__auto__ = e48193;
var statearr_48198_49207 = state_48168;
(statearr_48198_49207[(2)] = ex__44039__auto__);


if(cljs.core.seq((state_48168[(4)]))){
var statearr_48201_49217 = state_48168;
(statearr_48201_49217[(1)] = cljs.core.first((state_48168[(4)])));

} else {
throw ex__44039__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49221 = state_48168;
state_48168 = G__49221;
continue;
} else {
return ret_value__44037__auto__;
}
break;
}
});
shadow$dom$state_machine__44036__auto__ = function(state_48168){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__44036__auto____0.call(this);
case 1:
return shadow$dom$state_machine__44036__auto____1.call(this,state_48168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__44036__auto____0;
shadow$dom$state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__44036__auto____1;
return shadow$dom$state_machine__44036__auto__;
})()
})();
var state__44114__auto__ = (function (){var statearr_48203 = f__44113__auto__();
(statearr_48203[(6)] = c__44112__auto___49192);

return statearr_48203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44114__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
