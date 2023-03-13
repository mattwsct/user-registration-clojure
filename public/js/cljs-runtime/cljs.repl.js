goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50453){
var map__50454 = p__50453;
var map__50454__$1 = (((((!((map__50454 == null))))?(((((map__50454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50454):map__50454);
var m = map__50454__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50454__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50454__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50456_50736 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50457_50737 = null;
var count__50458_50738 = (0);
var i__50459_50739 = (0);
while(true){
if((i__50459_50739 < count__50458_50738)){
var f_50740 = chunk__50457_50737.cljs$core$IIndexed$_nth$arity$2(null,i__50459_50739);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50740], 0));


var G__50741 = seq__50456_50736;
var G__50742 = chunk__50457_50737;
var G__50743 = count__50458_50738;
var G__50744 = (i__50459_50739 + (1));
seq__50456_50736 = G__50741;
chunk__50457_50737 = G__50742;
count__50458_50738 = G__50743;
i__50459_50739 = G__50744;
continue;
} else {
var temp__5804__auto___50745 = cljs.core.seq(seq__50456_50736);
if(temp__5804__auto___50745){
var seq__50456_50746__$1 = temp__5804__auto___50745;
if(cljs.core.chunked_seq_QMARK_(seq__50456_50746__$1)){
var c__4556__auto___50747 = cljs.core.chunk_first(seq__50456_50746__$1);
var G__50748 = cljs.core.chunk_rest(seq__50456_50746__$1);
var G__50749 = c__4556__auto___50747;
var G__50750 = cljs.core.count(c__4556__auto___50747);
var G__50751 = (0);
seq__50456_50736 = G__50748;
chunk__50457_50737 = G__50749;
count__50458_50738 = G__50750;
i__50459_50739 = G__50751;
continue;
} else {
var f_50752 = cljs.core.first(seq__50456_50746__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50752], 0));


var G__50753 = cljs.core.next(seq__50456_50746__$1);
var G__50754 = null;
var G__50755 = (0);
var G__50756 = (0);
seq__50456_50736 = G__50753;
chunk__50457_50737 = G__50754;
count__50458_50738 = G__50755;
i__50459_50739 = G__50756;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_50758 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_50758], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_50758)))?cljs.core.second(arglists_50758):arglists_50758)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50461_50764 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50462_50765 = null;
var count__50463_50766 = (0);
var i__50464_50767 = (0);
while(true){
if((i__50464_50767 < count__50463_50766)){
var vec__50477_50769 = chunk__50462_50765.cljs$core$IIndexed$_nth$arity$2(null,i__50464_50767);
var name_50770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50477_50769,(0),null);
var map__50480_50771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50477_50769,(1),null);
var map__50480_50772__$1 = (((((!((map__50480_50771 == null))))?(((((map__50480_50771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50480_50771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50480_50771):map__50480_50771);
var doc_50773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50480_50772__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50480_50772__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50770], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50774], 0));

if(cljs.core.truth_(doc_50773)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50773], 0));
} else {
}


var G__50782 = seq__50461_50764;
var G__50783 = chunk__50462_50765;
var G__50784 = count__50463_50766;
var G__50785 = (i__50464_50767 + (1));
seq__50461_50764 = G__50782;
chunk__50462_50765 = G__50783;
count__50463_50766 = G__50784;
i__50464_50767 = G__50785;
continue;
} else {
var temp__5804__auto___50786 = cljs.core.seq(seq__50461_50764);
if(temp__5804__auto___50786){
var seq__50461_50788__$1 = temp__5804__auto___50786;
if(cljs.core.chunked_seq_QMARK_(seq__50461_50788__$1)){
var c__4556__auto___50789 = cljs.core.chunk_first(seq__50461_50788__$1);
var G__50790 = cljs.core.chunk_rest(seq__50461_50788__$1);
var G__50791 = c__4556__auto___50789;
var G__50792 = cljs.core.count(c__4556__auto___50789);
var G__50793 = (0);
seq__50461_50764 = G__50790;
chunk__50462_50765 = G__50791;
count__50463_50766 = G__50792;
i__50464_50767 = G__50793;
continue;
} else {
var vec__50483_50794 = cljs.core.first(seq__50461_50788__$1);
var name_50795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50483_50794,(0),null);
var map__50486_50796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50483_50794,(1),null);
var map__50486_50797__$1 = (((((!((map__50486_50796 == null))))?(((((map__50486_50796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50486_50796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50486_50796):map__50486_50796);
var doc_50798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50486_50797__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50486_50797__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50795], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50799], 0));

if(cljs.core.truth_(doc_50798)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50798], 0));
} else {
}


var G__50801 = cljs.core.next(seq__50461_50788__$1);
var G__50802 = null;
var G__50803 = (0);
var G__50804 = (0);
seq__50461_50764 = G__50801;
chunk__50462_50765 = G__50802;
count__50463_50766 = G__50803;
i__50464_50767 = G__50804;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__50490 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50491 = null;
var count__50492 = (0);
var i__50493 = (0);
while(true){
if((i__50493 < count__50492)){
var role = chunk__50491.cljs$core$IIndexed$_nth$arity$2(null,i__50493);
var temp__5804__auto___50806__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___50806__$1)){
var spec_50807 = temp__5804__auto___50806__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50807)], 0));
} else {
}


var G__50808 = seq__50490;
var G__50809 = chunk__50491;
var G__50810 = count__50492;
var G__50811 = (i__50493 + (1));
seq__50490 = G__50808;
chunk__50491 = G__50809;
count__50492 = G__50810;
i__50493 = G__50811;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__50490);
if(temp__5804__auto____$1){
var seq__50490__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__50490__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50490__$1);
var G__50813 = cljs.core.chunk_rest(seq__50490__$1);
var G__50814 = c__4556__auto__;
var G__50815 = cljs.core.count(c__4556__auto__);
var G__50816 = (0);
seq__50490 = G__50813;
chunk__50491 = G__50814;
count__50492 = G__50815;
i__50493 = G__50816;
continue;
} else {
var role = cljs.core.first(seq__50490__$1);
var temp__5804__auto___50818__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___50818__$2)){
var spec_50822 = temp__5804__auto___50818__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50822)], 0));
} else {
}


var G__50823 = cljs.core.next(seq__50490__$1);
var G__50824 = null;
var G__50825 = (0);
var G__50826 = (0);
seq__50490 = G__50823;
chunk__50491 = G__50824;
count__50492 = G__50825;
i__50493 = G__50826;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__50830 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__50831 = cljs.core.ex_cause(t);
via = G__50830;
t = G__50831;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__50504 = datafied_throwable;
var map__50504__$1 = (((((!((map__50504 == null))))?(((((map__50504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50504):map__50504);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50504__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50504__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50504__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__50505 = cljs.core.last(via);
var map__50505__$1 = (((((!((map__50505 == null))))?(((((map__50505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50505):map__50505);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50505__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50505__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50505__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__50506 = data;
var map__50506__$1 = (((((!((map__50506 == null))))?(((((map__50506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50506):map__50506);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50506__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50506__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50506__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__50507 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__50507__$1 = (((((!((map__50507 == null))))?(((((map__50507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50507):map__50507);
var top_data = map__50507__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50507__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__50517 = phase;
var G__50517__$1 = (((G__50517 instanceof cljs.core.Keyword))?G__50517.fqn:null);
switch (G__50517__$1) {
case "read-source":
var map__50518 = data;
var map__50518__$1 = (((((!((map__50518 == null))))?(((((map__50518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50518):map__50518);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50518__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50518__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__50521 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__50521__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50521,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50521);
var G__50521__$2 = (cljs.core.truth_((function (){var fexpr__50523 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50523.cljs$core$IFn$_invoke$arity$1 ? fexpr__50523.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50523.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50521__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50521__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50521__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50521__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__50524 = top_data;
var G__50524__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50524,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50524);
var G__50524__$2 = (cljs.core.truth_((function (){var fexpr__50525 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50525.cljs$core$IFn$_invoke$arity$1 ? fexpr__50525.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50525.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50524__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50524__$1);
var G__50524__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50524__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50524__$2);
var G__50524__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50524__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50524__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50524__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50524__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__50527 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50527,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50527,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50527,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50527,(3),null);
var G__50530 = top_data;
var G__50530__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50530,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__50530);
var G__50530__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50530__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__50530__$1);
var G__50530__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50530__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__50530__$2);
var G__50530__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50530__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50530__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50530__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50530__$4;
}

break;
case "execution":
var vec__50533 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50533,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50533,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50533,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50533,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50503_SHARP_){
var or__4126__auto__ = (p1__50503_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__50537 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50537.cljs$core$IFn$_invoke$arity$1 ? fexpr__50537.cljs$core$IFn$_invoke$arity$1(p1__50503_SHARP_) : fexpr__50537.call(null,p1__50503_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__50542 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__50542__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50542,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__50542);
var G__50542__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50542__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50542__$1);
var G__50542__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50542__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__50542__$2);
var G__50542__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50542__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__50542__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50542__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50542__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50517__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__50563){
var map__50568 = p__50563;
var map__50568__$1 = (((((!((map__50568 == null))))?(((((map__50568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50568):map__50568);
var triage_data = map__50568__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50568__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50568__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50568__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50568__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50568__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50568__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50568__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50568__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__50591 = phase;
var G__50591__$1 = (((G__50591 instanceof cljs.core.Keyword))?G__50591.fqn:null);
switch (G__50591__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__50592 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__50593 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50594 = loc;
var G__50595 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50600_50850 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50601_50851 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50602_50852 = true;
var _STAR_print_fn_STAR__temp_val__50603_50853 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50602_50852);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50603_50853);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50560_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50560_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50601_50851);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50600_50850);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50592,G__50593,G__50594,G__50595) : format.call(null,G__50592,G__50593,G__50594,G__50595));

break;
case "macroexpansion":
var G__50631 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__50632 = cause_type;
var G__50633 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50634 = loc;
var G__50635 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50631,G__50632,G__50633,G__50634,G__50635) : format.call(null,G__50631,G__50632,G__50633,G__50634,G__50635));

break;
case "compile-syntax-check":
var G__50640 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__50641 = cause_type;
var G__50642 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50643 = loc;
var G__50644 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50640,G__50641,G__50642,G__50643,G__50644) : format.call(null,G__50640,G__50641,G__50642,G__50643,G__50644));

break;
case "compilation":
var G__50647 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__50648 = cause_type;
var G__50649 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50650 = loc;
var G__50651 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50647,G__50648,G__50649,G__50650,G__50651) : format.call(null,G__50647,G__50648,G__50649,G__50650,G__50651));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__50660 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__50661 = symbol;
var G__50662 = loc;
var G__50663 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50675_50865 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50676_50866 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50677_50867 = true;
var _STAR_print_fn_STAR__temp_val__50678_50868 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50677_50867);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50678_50868);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50561_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50561_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50676_50866);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50675_50865);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50660,G__50661,G__50662,G__50663) : format.call(null,G__50660,G__50661,G__50662,G__50663));
} else {
var G__50701 = "Execution error%s at %s(%s).\n%s\n";
var G__50702 = cause_type;
var G__50703 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50704 = loc;
var G__50705 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50701,G__50702,G__50703,G__50704,G__50705) : format.call(null,G__50701,G__50702,G__50703,G__50704,G__50705));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50591__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
