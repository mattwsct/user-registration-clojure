goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__52098 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__52099 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__52099);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__52102 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__52103 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__52103);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__52102);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__52098);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__52112 = arguments.length;
switch (G__52112) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__52120 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52120,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52120,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__52130_52160 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__52131_52161 = null;
var count__52132_52162 = (0);
var i__52133_52163 = (0);
while(true){
if((i__52133_52163 < count__52132_52162)){
var vec__52142_52164 = chunk__52131_52161.cljs$core$IIndexed$_nth$arity$2(null,i__52133_52163);
var container_52165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52142_52164,(0),null);
var comp_52166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52142_52164,(1),null);
reagent.dom.re_render_component(comp_52166,container_52165);


var G__52168 = seq__52130_52160;
var G__52169 = chunk__52131_52161;
var G__52170 = count__52132_52162;
var G__52171 = (i__52133_52163 + (1));
seq__52130_52160 = G__52168;
chunk__52131_52161 = G__52169;
count__52132_52162 = G__52170;
i__52133_52163 = G__52171;
continue;
} else {
var temp__5804__auto___52172 = cljs.core.seq(seq__52130_52160);
if(temp__5804__auto___52172){
var seq__52130_52173__$1 = temp__5804__auto___52172;
if(cljs.core.chunked_seq_QMARK_(seq__52130_52173__$1)){
var c__4556__auto___52174 = cljs.core.chunk_first(seq__52130_52173__$1);
var G__52175 = cljs.core.chunk_rest(seq__52130_52173__$1);
var G__52176 = c__4556__auto___52174;
var G__52177 = cljs.core.count(c__4556__auto___52174);
var G__52178 = (0);
seq__52130_52160 = G__52175;
chunk__52131_52161 = G__52176;
count__52132_52162 = G__52177;
i__52133_52163 = G__52178;
continue;
} else {
var vec__52147_52179 = cljs.core.first(seq__52130_52173__$1);
var container_52180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52147_52179,(0),null);
var comp_52181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52147_52179,(1),null);
reagent.dom.re_render_component(comp_52181,container_52180);


var G__52182 = cljs.core.next(seq__52130_52173__$1);
var G__52183 = null;
var G__52184 = (0);
var G__52185 = (0);
seq__52130_52160 = G__52182;
chunk__52131_52161 = G__52183;
count__52132_52162 = G__52184;
i__52133_52163 = G__52185;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
