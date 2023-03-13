goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__51294__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__51294 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51296__i = 0, G__51296__a = new Array(arguments.length -  0);
while (G__51296__i < G__51296__a.length) {G__51296__a[G__51296__i] = arguments[G__51296__i + 0]; ++G__51296__i;}
  args = new cljs.core.IndexedSeq(G__51296__a,0,null);
} 
return G__51294__delegate.call(this,args);};
G__51294.cljs$lang$maxFixedArity = 0;
G__51294.cljs$lang$applyTo = (function (arglist__51297){
var args = cljs.core.seq(arglist__51297);
return G__51294__delegate(args);
});
G__51294.cljs$core$IFn$_invoke$arity$variadic = G__51294__delegate;
return G__51294;
})()
);

(o.error = (function() { 
var G__51298__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__51298 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51299__i = 0, G__51299__a = new Array(arguments.length -  0);
while (G__51299__i < G__51299__a.length) {G__51299__a[G__51299__i] = arguments[G__51299__i + 0]; ++G__51299__i;}
  args = new cljs.core.IndexedSeq(G__51299__a,0,null);
} 
return G__51298__delegate.call(this,args);};
G__51298.cljs$lang$maxFixedArity = 0;
G__51298.cljs$lang$applyTo = (function (arglist__51300){
var args = cljs.core.seq(arglist__51300);
return G__51298__delegate(args);
});
G__51298.cljs$core$IFn$_invoke$arity$variadic = G__51298__delegate;
return G__51298;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
