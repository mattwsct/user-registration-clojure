goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51750 = arguments.length;
var i__4737__auto___51751 = (0);
while(true){
if((i__4737__auto___51751 < len__4736__auto___51750)){
args__4742__auto__.push((arguments[i__4737__auto___51751]));

var G__51752 = (i__4737__auto___51751 + (1));
i__4737__auto___51751 = G__51752;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq51479){
var G__51480 = cljs.core.first(seq51479);
var seq51479__$1 = cljs.core.next(seq51479);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51480,seq51479__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__51484 = cljs.core.seq(sources);
var chunk__51485 = null;
var count__51486 = (0);
var i__51487 = (0);
while(true){
if((i__51487 < count__51486)){
var map__51500 = chunk__51485.cljs$core$IIndexed$_nth$arity$2(null,i__51487);
var map__51500__$1 = (((((!((map__51500 == null))))?(((((map__51500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51500):map__51500);
var src = map__51500__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51500__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51500__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51500__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51500__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e51506){var e_51757 = e51506;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51757);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51757.message)].join('')));
}

var G__51758 = seq__51484;
var G__51759 = chunk__51485;
var G__51760 = count__51486;
var G__51761 = (i__51487 + (1));
seq__51484 = G__51758;
chunk__51485 = G__51759;
count__51486 = G__51760;
i__51487 = G__51761;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51484);
if(temp__5804__auto__){
var seq__51484__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51484__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51484__$1);
var G__51762 = cljs.core.chunk_rest(seq__51484__$1);
var G__51763 = c__4556__auto__;
var G__51764 = cljs.core.count(c__4556__auto__);
var G__51765 = (0);
seq__51484 = G__51762;
chunk__51485 = G__51763;
count__51486 = G__51764;
i__51487 = G__51765;
continue;
} else {
var map__51513 = cljs.core.first(seq__51484__$1);
var map__51513__$1 = (((((!((map__51513 == null))))?(((((map__51513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51513):map__51513);
var src = map__51513__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51513__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51513__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51513__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51513__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e51516){var e_51766 = e51516;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51766);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51766.message)].join('')));
}

var G__51767 = cljs.core.next(seq__51484__$1);
var G__51768 = null;
var G__51769 = (0);
var G__51770 = (0);
seq__51484 = G__51767;
chunk__51485 = G__51768;
count__51486 = G__51769;
i__51487 = G__51770;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__51531 = cljs.core.seq(js_requires);
var chunk__51532 = null;
var count__51533 = (0);
var i__51534 = (0);
while(true){
if((i__51534 < count__51533)){
var js_ns = chunk__51532.cljs$core$IIndexed$_nth$arity$2(null,i__51534);
var require_str_51771 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51771);


var G__51772 = seq__51531;
var G__51773 = chunk__51532;
var G__51774 = count__51533;
var G__51775 = (i__51534 + (1));
seq__51531 = G__51772;
chunk__51532 = G__51773;
count__51533 = G__51774;
i__51534 = G__51775;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51531);
if(temp__5804__auto__){
var seq__51531__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51531__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51531__$1);
var G__51777 = cljs.core.chunk_rest(seq__51531__$1);
var G__51778 = c__4556__auto__;
var G__51779 = cljs.core.count(c__4556__auto__);
var G__51780 = (0);
seq__51531 = G__51777;
chunk__51532 = G__51778;
count__51533 = G__51779;
i__51534 = G__51780;
continue;
} else {
var js_ns = cljs.core.first(seq__51531__$1);
var require_str_51781 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51781);


var G__51782 = cljs.core.next(seq__51531__$1);
var G__51783 = null;
var G__51784 = (0);
var G__51785 = (0);
seq__51531 = G__51782;
chunk__51532 = G__51783;
count__51533 = G__51784;
i__51534 = G__51785;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__51560){
var map__51562 = p__51560;
var map__51562__$1 = (((((!((map__51562 == null))))?(((((map__51562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51562):map__51562);
var msg = map__51562__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51562__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51562__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51573(s__51574){
return (new cljs.core.LazySeq(null,(function (){
var s__51574__$1 = s__51574;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__51574__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__51583 = cljs.core.first(xs__6360__auto__);
var map__51583__$1 = (((((!((map__51583 == null))))?(((((map__51583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51583):map__51583);
var src = map__51583__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51583__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51583__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__51574__$1,map__51583,map__51583__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__51562,map__51562__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51573_$_iter__51575(s__51576){
return (new cljs.core.LazySeq(null,((function (s__51574__$1,map__51583,map__51583__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__51562,map__51562__$1,msg,info,reload_info){
return (function (){
var s__51576__$1 = s__51576;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__51576__$1);
if(temp__5804__auto____$1){
var s__51576__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51576__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__51576__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__51578 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__51577 = (0);
while(true){
if((i__51577 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__51577);
cljs.core.chunk_append(b__51578,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__51789 = (i__51577 + (1));
i__51577 = G__51789;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51578),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51573_$_iter__51575(cljs.core.chunk_rest(s__51576__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51578),null);
}
} else {
var warning = cljs.core.first(s__51576__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51573_$_iter__51575(cljs.core.rest(s__51576__$2)));
}
} else {
return null;
}
break;
}
});})(s__51574__$1,map__51583,map__51583__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__51562,map__51562__$1,msg,info,reload_info))
,null,null));
});})(s__51574__$1,map__51583,map__51583__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__51562,map__51562__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51573(cljs.core.rest(s__51574__$1)));
} else {
var G__51790 = cljs.core.rest(s__51574__$1);
s__51574__$1 = G__51790;
continue;
}
} else {
var G__51791 = cljs.core.rest(s__51574__$1);
s__51574__$1 = G__51791;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__51598_51792 = cljs.core.seq(warnings);
var chunk__51599_51793 = null;
var count__51600_51794 = (0);
var i__51601_51795 = (0);
while(true){
if((i__51601_51795 < count__51600_51794)){
var map__51606_51796 = chunk__51599_51793.cljs$core$IIndexed$_nth$arity$2(null,i__51601_51795);
var map__51606_51797__$1 = (((((!((map__51606_51796 == null))))?(((((map__51606_51796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51606_51796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51606_51796):map__51606_51796);
var w_51798 = map__51606_51797__$1;
var msg_51799__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51606_51797__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51800 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51606_51797__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51606_51797__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51606_51797__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51802)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51800),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51801),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51799__$1)].join(''));


var G__51807 = seq__51598_51792;
var G__51808 = chunk__51599_51793;
var G__51809 = count__51600_51794;
var G__51810 = (i__51601_51795 + (1));
seq__51598_51792 = G__51807;
chunk__51599_51793 = G__51808;
count__51600_51794 = G__51809;
i__51601_51795 = G__51810;
continue;
} else {
var temp__5804__auto___51811 = cljs.core.seq(seq__51598_51792);
if(temp__5804__auto___51811){
var seq__51598_51812__$1 = temp__5804__auto___51811;
if(cljs.core.chunked_seq_QMARK_(seq__51598_51812__$1)){
var c__4556__auto___51813 = cljs.core.chunk_first(seq__51598_51812__$1);
var G__51814 = cljs.core.chunk_rest(seq__51598_51812__$1);
var G__51815 = c__4556__auto___51813;
var G__51816 = cljs.core.count(c__4556__auto___51813);
var G__51817 = (0);
seq__51598_51792 = G__51814;
chunk__51599_51793 = G__51815;
count__51600_51794 = G__51816;
i__51601_51795 = G__51817;
continue;
} else {
var map__51610_51818 = cljs.core.first(seq__51598_51812__$1);
var map__51610_51819__$1 = (((((!((map__51610_51818 == null))))?(((((map__51610_51818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51610_51818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51610_51818):map__51610_51818);
var w_51820 = map__51610_51819__$1;
var msg_51821__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51610_51819__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51610_51819__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51823 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51610_51819__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51824 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51610_51819__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51824)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51822),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51823),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51821__$1)].join(''));


var G__51825 = cljs.core.next(seq__51598_51812__$1);
var G__51826 = null;
var G__51827 = (0);
var G__51828 = (0);
seq__51598_51792 = G__51825;
chunk__51599_51793 = G__51826;
count__51600_51794 = G__51827;
i__51601_51795 = G__51828;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__51559_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__51559_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__51616){
var map__51617 = p__51616;
var map__51617__$1 = (((((!((map__51617 == null))))?(((((map__51617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51617):map__51617);
var msg = map__51617__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51617__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__51619 = cljs.core.seq(updates);
var chunk__51621 = null;
var count__51622 = (0);
var i__51623 = (0);
while(true){
if((i__51623 < count__51622)){
var path = chunk__51621.cljs$core$IIndexed$_nth$arity$2(null,i__51623);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51665_51830 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51669_51831 = null;
var count__51670_51832 = (0);
var i__51671_51833 = (0);
while(true){
if((i__51671_51833 < count__51670_51832)){
var node_51834 = chunk__51669_51831.cljs$core$IIndexed$_nth$arity$2(null,i__51671_51833);
if(cljs.core.not(node_51834.shadow$old)){
var path_match_51835 = shadow.cljs.devtools.client.browser.match_paths(node_51834.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51835)){
var new_link_51836 = (function (){var G__51677 = node_51834.cloneNode(true);
G__51677.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51835),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51677;
})();
(node_51834.shadow$old = true);

(new_link_51836.onload = ((function (seq__51665_51830,chunk__51669_51831,count__51670_51832,i__51671_51833,seq__51619,chunk__51621,count__51622,i__51623,new_link_51836,path_match_51835,node_51834,path,map__51617,map__51617__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51834);
});})(seq__51665_51830,chunk__51669_51831,count__51670_51832,i__51671_51833,seq__51619,chunk__51621,count__51622,i__51623,new_link_51836,path_match_51835,node_51834,path,map__51617,map__51617__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51835], 0));

goog.dom.insertSiblingAfter(new_link_51836,node_51834);


var G__51840 = seq__51665_51830;
var G__51841 = chunk__51669_51831;
var G__51842 = count__51670_51832;
var G__51843 = (i__51671_51833 + (1));
seq__51665_51830 = G__51840;
chunk__51669_51831 = G__51841;
count__51670_51832 = G__51842;
i__51671_51833 = G__51843;
continue;
} else {
var G__51844 = seq__51665_51830;
var G__51845 = chunk__51669_51831;
var G__51846 = count__51670_51832;
var G__51847 = (i__51671_51833 + (1));
seq__51665_51830 = G__51844;
chunk__51669_51831 = G__51845;
count__51670_51832 = G__51846;
i__51671_51833 = G__51847;
continue;
}
} else {
var G__51848 = seq__51665_51830;
var G__51849 = chunk__51669_51831;
var G__51850 = count__51670_51832;
var G__51851 = (i__51671_51833 + (1));
seq__51665_51830 = G__51848;
chunk__51669_51831 = G__51849;
count__51670_51832 = G__51850;
i__51671_51833 = G__51851;
continue;
}
} else {
var temp__5804__auto___51855 = cljs.core.seq(seq__51665_51830);
if(temp__5804__auto___51855){
var seq__51665_51856__$1 = temp__5804__auto___51855;
if(cljs.core.chunked_seq_QMARK_(seq__51665_51856__$1)){
var c__4556__auto___51857 = cljs.core.chunk_first(seq__51665_51856__$1);
var G__51858 = cljs.core.chunk_rest(seq__51665_51856__$1);
var G__51859 = c__4556__auto___51857;
var G__51860 = cljs.core.count(c__4556__auto___51857);
var G__51861 = (0);
seq__51665_51830 = G__51858;
chunk__51669_51831 = G__51859;
count__51670_51832 = G__51860;
i__51671_51833 = G__51861;
continue;
} else {
var node_51862 = cljs.core.first(seq__51665_51856__$1);
if(cljs.core.not(node_51862.shadow$old)){
var path_match_51863 = shadow.cljs.devtools.client.browser.match_paths(node_51862.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51863)){
var new_link_51864 = (function (){var G__51683 = node_51862.cloneNode(true);
G__51683.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51863),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51683;
})();
(node_51862.shadow$old = true);

(new_link_51864.onload = ((function (seq__51665_51830,chunk__51669_51831,count__51670_51832,i__51671_51833,seq__51619,chunk__51621,count__51622,i__51623,new_link_51864,path_match_51863,node_51862,seq__51665_51856__$1,temp__5804__auto___51855,path,map__51617,map__51617__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51862);
});})(seq__51665_51830,chunk__51669_51831,count__51670_51832,i__51671_51833,seq__51619,chunk__51621,count__51622,i__51623,new_link_51864,path_match_51863,node_51862,seq__51665_51856__$1,temp__5804__auto___51855,path,map__51617,map__51617__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51863], 0));

goog.dom.insertSiblingAfter(new_link_51864,node_51862);


var G__51865 = cljs.core.next(seq__51665_51856__$1);
var G__51866 = null;
var G__51867 = (0);
var G__51868 = (0);
seq__51665_51830 = G__51865;
chunk__51669_51831 = G__51866;
count__51670_51832 = G__51867;
i__51671_51833 = G__51868;
continue;
} else {
var G__51869 = cljs.core.next(seq__51665_51856__$1);
var G__51870 = null;
var G__51871 = (0);
var G__51872 = (0);
seq__51665_51830 = G__51869;
chunk__51669_51831 = G__51870;
count__51670_51832 = G__51871;
i__51671_51833 = G__51872;
continue;
}
} else {
var G__51873 = cljs.core.next(seq__51665_51856__$1);
var G__51874 = null;
var G__51875 = (0);
var G__51876 = (0);
seq__51665_51830 = G__51873;
chunk__51669_51831 = G__51874;
count__51670_51832 = G__51875;
i__51671_51833 = G__51876;
continue;
}
}
} else {
}
}
break;
}


var G__51877 = seq__51619;
var G__51878 = chunk__51621;
var G__51879 = count__51622;
var G__51880 = (i__51623 + (1));
seq__51619 = G__51877;
chunk__51621 = G__51878;
count__51622 = G__51879;
i__51623 = G__51880;
continue;
} else {
var G__51881 = seq__51619;
var G__51882 = chunk__51621;
var G__51883 = count__51622;
var G__51884 = (i__51623 + (1));
seq__51619 = G__51881;
chunk__51621 = G__51882;
count__51622 = G__51883;
i__51623 = G__51884;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51619);
if(temp__5804__auto__){
var seq__51619__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51619__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51619__$1);
var G__51885 = cljs.core.chunk_rest(seq__51619__$1);
var G__51886 = c__4556__auto__;
var G__51887 = cljs.core.count(c__4556__auto__);
var G__51888 = (0);
seq__51619 = G__51885;
chunk__51621 = G__51886;
count__51622 = G__51887;
i__51623 = G__51888;
continue;
} else {
var path = cljs.core.first(seq__51619__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51686_51889 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51690_51890 = null;
var count__51691_51891 = (0);
var i__51692_51892 = (0);
while(true){
if((i__51692_51892 < count__51691_51891)){
var node_51893 = chunk__51690_51890.cljs$core$IIndexed$_nth$arity$2(null,i__51692_51892);
if(cljs.core.not(node_51893.shadow$old)){
var path_match_51894 = shadow.cljs.devtools.client.browser.match_paths(node_51893.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51894)){
var new_link_51895 = (function (){var G__51700 = node_51893.cloneNode(true);
G__51700.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51894),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51700;
})();
(node_51893.shadow$old = true);

(new_link_51895.onload = ((function (seq__51686_51889,chunk__51690_51890,count__51691_51891,i__51692_51892,seq__51619,chunk__51621,count__51622,i__51623,new_link_51895,path_match_51894,node_51893,path,seq__51619__$1,temp__5804__auto__,map__51617,map__51617__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51893);
});})(seq__51686_51889,chunk__51690_51890,count__51691_51891,i__51692_51892,seq__51619,chunk__51621,count__51622,i__51623,new_link_51895,path_match_51894,node_51893,path,seq__51619__$1,temp__5804__auto__,map__51617,map__51617__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51894], 0));

goog.dom.insertSiblingAfter(new_link_51895,node_51893);


var G__51896 = seq__51686_51889;
var G__51897 = chunk__51690_51890;
var G__51898 = count__51691_51891;
var G__51899 = (i__51692_51892 + (1));
seq__51686_51889 = G__51896;
chunk__51690_51890 = G__51897;
count__51691_51891 = G__51898;
i__51692_51892 = G__51899;
continue;
} else {
var G__51900 = seq__51686_51889;
var G__51901 = chunk__51690_51890;
var G__51902 = count__51691_51891;
var G__51903 = (i__51692_51892 + (1));
seq__51686_51889 = G__51900;
chunk__51690_51890 = G__51901;
count__51691_51891 = G__51902;
i__51692_51892 = G__51903;
continue;
}
} else {
var G__51904 = seq__51686_51889;
var G__51905 = chunk__51690_51890;
var G__51906 = count__51691_51891;
var G__51907 = (i__51692_51892 + (1));
seq__51686_51889 = G__51904;
chunk__51690_51890 = G__51905;
count__51691_51891 = G__51906;
i__51692_51892 = G__51907;
continue;
}
} else {
var temp__5804__auto___51908__$1 = cljs.core.seq(seq__51686_51889);
if(temp__5804__auto___51908__$1){
var seq__51686_51909__$1 = temp__5804__auto___51908__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51686_51909__$1)){
var c__4556__auto___51910 = cljs.core.chunk_first(seq__51686_51909__$1);
var G__51911 = cljs.core.chunk_rest(seq__51686_51909__$1);
var G__51912 = c__4556__auto___51910;
var G__51913 = cljs.core.count(c__4556__auto___51910);
var G__51914 = (0);
seq__51686_51889 = G__51911;
chunk__51690_51890 = G__51912;
count__51691_51891 = G__51913;
i__51692_51892 = G__51914;
continue;
} else {
var node_51915 = cljs.core.first(seq__51686_51909__$1);
if(cljs.core.not(node_51915.shadow$old)){
var path_match_51916 = shadow.cljs.devtools.client.browser.match_paths(node_51915.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51916)){
var new_link_51917 = (function (){var G__51701 = node_51915.cloneNode(true);
G__51701.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51916),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51701;
})();
(node_51915.shadow$old = true);

(new_link_51917.onload = ((function (seq__51686_51889,chunk__51690_51890,count__51691_51891,i__51692_51892,seq__51619,chunk__51621,count__51622,i__51623,new_link_51917,path_match_51916,node_51915,seq__51686_51909__$1,temp__5804__auto___51908__$1,path,seq__51619__$1,temp__5804__auto__,map__51617,map__51617__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51915);
});})(seq__51686_51889,chunk__51690_51890,count__51691_51891,i__51692_51892,seq__51619,chunk__51621,count__51622,i__51623,new_link_51917,path_match_51916,node_51915,seq__51686_51909__$1,temp__5804__auto___51908__$1,path,seq__51619__$1,temp__5804__auto__,map__51617,map__51617__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51916], 0));

goog.dom.insertSiblingAfter(new_link_51917,node_51915);


var G__51918 = cljs.core.next(seq__51686_51909__$1);
var G__51919 = null;
var G__51920 = (0);
var G__51921 = (0);
seq__51686_51889 = G__51918;
chunk__51690_51890 = G__51919;
count__51691_51891 = G__51920;
i__51692_51892 = G__51921;
continue;
} else {
var G__51922 = cljs.core.next(seq__51686_51909__$1);
var G__51923 = null;
var G__51924 = (0);
var G__51925 = (0);
seq__51686_51889 = G__51922;
chunk__51690_51890 = G__51923;
count__51691_51891 = G__51924;
i__51692_51892 = G__51925;
continue;
}
} else {
var G__51926 = cljs.core.next(seq__51686_51909__$1);
var G__51927 = null;
var G__51928 = (0);
var G__51929 = (0);
seq__51686_51889 = G__51926;
chunk__51690_51890 = G__51927;
count__51691_51891 = G__51928;
i__51692_51892 = G__51929;
continue;
}
}
} else {
}
}
break;
}


var G__51930 = cljs.core.next(seq__51619__$1);
var G__51931 = null;
var G__51932 = (0);
var G__51933 = (0);
seq__51619 = G__51930;
chunk__51621 = G__51931;
count__51622 = G__51932;
i__51623 = G__51933;
continue;
} else {
var G__51934 = cljs.core.next(seq__51619__$1);
var G__51935 = null;
var G__51936 = (0);
var G__51937 = (0);
seq__51619 = G__51934;
chunk__51621 = G__51935;
count__51622 = G__51936;
i__51623 = G__51937;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__51704){
var map__51705 = p__51704;
var map__51705__$1 = (((((!((map__51705 == null))))?(((((map__51705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51705):map__51705);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51705__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__51714){
var map__51715 = p__51714;
var map__51715__$1 = (((((!((map__51715 == null))))?(((((map__51715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51715):map__51715);
var _ = map__51715__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51715__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__51718,done,error){
var map__51719 = p__51718;
var map__51719__$1 = (((((!((map__51719 == null))))?(((((map__51719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51719):map__51719);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51719__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__51721,done,error){
var map__51722 = p__51721;
var map__51722__$1 = (((((!((map__51722 == null))))?(((((map__51722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51722):map__51722);
var msg = map__51722__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51722__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51722__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51722__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__51724){
var map__51725 = p__51724;
var map__51725__$1 = (((((!((map__51725 == null))))?(((((map__51725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51725):map__51725);
var src = map__51725__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51725__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__51727 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__51727) : done.call(null,G__51727));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__51728){
var map__51729 = p__51728;
var map__51729__$1 = (((((!((map__51729 == null))))?(((((map__51729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51729):map__51729);
var msg__$1 = map__51729__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51729__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e51731){var ex = e51731;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__51732){
var map__51733 = p__51732;
var map__51733__$1 = (((((!((map__51733 == null))))?(((((map__51733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51733):map__51733);
var env = map__51733__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51733__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__51735){
var map__51736 = p__51735;
var map__51736__$1 = (((((!((map__51736 == null))))?(((((map__51736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51736):map__51736);
var msg = map__51736__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51736__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__51738){
var map__51739 = p__51738;
var map__51739__$1 = (((((!((map__51739 == null))))?(((((map__51739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51739):map__51739);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51739__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51739__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__51741){
var map__51742 = p__51741;
var map__51742__$1 = (((((!((map__51742 == null))))?(((((map__51742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51742):map__51742);
var svc = map__51742__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51742__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
