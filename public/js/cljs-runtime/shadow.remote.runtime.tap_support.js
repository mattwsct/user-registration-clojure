goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__51056,p__51057){
var map__51060 = p__51056;
var map__51060__$1 = (((((!((map__51060 == null))))?(((((map__51060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51060):map__51060);
var svc = map__51060__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51060__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51060__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51060__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__51061 = p__51057;
var map__51061__$1 = (((((!((map__51061 == null))))?(((((map__51061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51061):map__51061);
var msg = map__51061__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51061__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51061__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51061__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51061__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__51070,p__51071){
var map__51073 = p__51070;
var map__51073__$1 = (((((!((map__51073 == null))))?(((((map__51073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51073):map__51073);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51073__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__51074 = p__51071;
var map__51074__$1 = (((((!((map__51074 == null))))?(((((map__51074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51074):map__51074);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51074__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__51083,p__51084){
var map__51085 = p__51083;
var map__51085__$1 = (((((!((map__51085 == null))))?(((((map__51085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51085):map__51085);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51085__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51085__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__51086 = p__51084;
var map__51086__$1 = (((((!((map__51086 == null))))?(((((map__51086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51086):map__51086);
var msg = map__51086__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51086__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__51096,tid){
var map__51098 = p__51096;
var map__51098__$1 = (((((!((map__51098 == null))))?(((((map__51098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51098):map__51098);
var svc = map__51098__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51098__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__51111 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__51112 = null;
var count__51113 = (0);
var i__51114 = (0);
while(true){
if((i__51114 < count__51113)){
var vec__51124 = chunk__51112.cljs$core$IIndexed$_nth$arity$2(null,i__51114);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51124,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51124,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__51140 = seq__51111;
var G__51141 = chunk__51112;
var G__51142 = count__51113;
var G__51143 = (i__51114 + (1));
seq__51111 = G__51140;
chunk__51112 = G__51141;
count__51113 = G__51142;
i__51114 = G__51143;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51111);
if(temp__5804__auto__){
var seq__51111__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51111__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51111__$1);
var G__51144 = cljs.core.chunk_rest(seq__51111__$1);
var G__51145 = c__4556__auto__;
var G__51146 = cljs.core.count(c__4556__auto__);
var G__51147 = (0);
seq__51111 = G__51144;
chunk__51112 = G__51145;
count__51113 = G__51146;
i__51114 = G__51147;
continue;
} else {
var vec__51130 = cljs.core.first(seq__51111__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51130,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51130,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__51148 = cljs.core.next(seq__51111__$1);
var G__51149 = null;
var G__51150 = (0);
var G__51151 = (0);
seq__51111 = G__51148;
chunk__51112 = G__51149;
count__51113 = G__51150;
i__51114 = G__51151;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__51101_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__51101_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__51102_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__51102_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__51103_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__51103_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__51104_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__51104_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__51136){
var map__51137 = p__51136;
var map__51137__$1 = (((((!((map__51137 == null))))?(((((map__51137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51137):map__51137);
var svc = map__51137__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51137__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51137__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
