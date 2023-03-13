goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__44216 = arguments.length;
switch (G__44216) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44218 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44218 = (function (f,blockable,meta44219){
this.f = f;
this.blockable = blockable;
this.meta44219 = meta44219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44220,meta44219__$1){
var self__ = this;
var _44220__$1 = this;
return (new cljs.core.async.t_cljs$core$async44218(self__.f,self__.blockable,meta44219__$1));
}));

(cljs.core.async.t_cljs$core$async44218.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44220){
var self__ = this;
var _44220__$1 = this;
return self__.meta44219;
}));

(cljs.core.async.t_cljs$core$async44218.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44218.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44218.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async44218.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async44218.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44219","meta44219",1953189520,null)], null);
}));

(cljs.core.async.t_cljs$core$async44218.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44218.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44218");

(cljs.core.async.t_cljs$core$async44218.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44218");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44218.
 */
cljs.core.async.__GT_t_cljs$core$async44218 = (function cljs$core$async$__GT_t_cljs$core$async44218(f__$1,blockable__$1,meta44219){
return (new cljs.core.async.t_cljs$core$async44218(f__$1,blockable__$1,meta44219));
});

}

return (new cljs.core.async.t_cljs$core$async44218(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__44250 = arguments.length;
switch (G__44250) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__44273 = arguments.length;
switch (G__44273) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__44301 = arguments.length;
switch (G__44301) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_47158 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47158) : fn1.call(null,val_47158));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47158) : fn1.call(null,val_47158));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__44324 = arguments.length;
switch (G__44324) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___47175 = n;
var x_47177 = (0);
while(true){
if((x_47177 < n__4613__auto___47175)){
(a[x_47177] = x_47177);

var G__47178 = (x_47177 + (1));
x_47177 = G__47178;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44349 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44349 = (function (flag,meta44350){
this.flag = flag;
this.meta44350 = meta44350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44351,meta44350__$1){
var self__ = this;
var _44351__$1 = this;
return (new cljs.core.async.t_cljs$core$async44349(self__.flag,meta44350__$1));
}));

(cljs.core.async.t_cljs$core$async44349.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44351){
var self__ = this;
var _44351__$1 = this;
return self__.meta44350;
}));

(cljs.core.async.t_cljs$core$async44349.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44349.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44349.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44349.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async44349.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44350","meta44350",-727644750,null)], null);
}));

(cljs.core.async.t_cljs$core$async44349.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44349.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44349");

(cljs.core.async.t_cljs$core$async44349.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44349");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44349.
 */
cljs.core.async.__GT_t_cljs$core$async44349 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44349(flag__$1,meta44350){
return (new cljs.core.async.t_cljs$core$async44349(flag__$1,meta44350));
});

}

return (new cljs.core.async.t_cljs$core$async44349(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44358 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44358 = (function (flag,cb,meta44359){
this.flag = flag;
this.cb = cb;
this.meta44359 = meta44359;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44360,meta44359__$1){
var self__ = this;
var _44360__$1 = this;
return (new cljs.core.async.t_cljs$core$async44358(self__.flag,self__.cb,meta44359__$1));
}));

(cljs.core.async.t_cljs$core$async44358.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44360){
var self__ = this;
var _44360__$1 = this;
return self__.meta44359;
}));

(cljs.core.async.t_cljs$core$async44358.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44358.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44358.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44358.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async44358.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44359","meta44359",1350410839,null)], null);
}));

(cljs.core.async.t_cljs$core$async44358.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44358.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44358");

(cljs.core.async.t_cljs$core$async44358.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44358");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44358.
 */
cljs.core.async.__GT_t_cljs$core$async44358 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44358(flag__$1,cb__$1,meta44359){
return (new cljs.core.async.t_cljs$core$async44358(flag__$1,cb__$1,meta44359));
});

}

return (new cljs.core.async.t_cljs$core$async44358(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44370_SHARP_){
var G__44391 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44370_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44391) : fret.call(null,G__44391));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44371_SHARP_){
var G__44393 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44371_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44393) : fret.call(null,G__44393));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__47198 = (i + (1));
i = G__47198;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___47201 = arguments.length;
var i__4737__auto___47202 = (0);
while(true){
if((i__4737__auto___47202 < len__4736__auto___47201)){
args__4742__auto__.push((arguments[i__4737__auto___47202]));

var G__47203 = (i__4737__auto___47202 + (1));
i__4737__auto___47202 = G__47203;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44400){
var map__44401 = p__44400;
var map__44401__$1 = (((((!((map__44401 == null))))?(((((map__44401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44401):map__44401);
var opts = map__44401__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44396){
var G__44397 = cljs.core.first(seq44396);
var seq44396__$1 = cljs.core.next(seq44396);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44397,seq44396__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__44411 = arguments.length;
switch (G__44411) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__44112__auto___47211 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44113__auto__ = (function (){var switch__44035__auto__ = (function (state_44440){
var state_val_44441 = (state_44440[(1)]);
if((state_val_44441 === (7))){
var inst_44435 = (state_44440[(2)]);
var state_44440__$1 = state_44440;
var statearr_44452_47212 = state_44440__$1;
(statearr_44452_47212[(2)] = inst_44435);

(statearr_44452_47212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44441 === (1))){
var state_44440__$1 = state_44440;
var statearr_44454_47214 = state_44440__$1;
(statearr_44454_47214[(2)] = null);

(statearr_44454_47214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44441 === (4))){
var inst_44418 = (state_44440[(7)]);
var inst_44418__$1 = (state_44440[(2)]);
var inst_44419 = (inst_44418__$1 == null);
var state_44440__$1 = (function (){var statearr_44458 = state_44440;
(statearr_44458[(7)] = inst_44418__$1);

return statearr_44458;
})();
if(cljs.core.truth_(inst_44419)){
var statearr_44459_47216 = state_44440__$1;
(statearr_44459_47216[(1)] = (5));

} else {
var statearr_44460_47218 = state_44440__$1;
(statearr_44460_47218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44441 === (13))){
var state_44440__$1 = state_44440;
var statearr_44472_47220 = state_44440__$1;
(statearr_44472_47220[(2)] = null);

(statearr_44472_47220[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44441 === (6))){
var inst_44418 = (state_44440[(7)]);
var state_44440__$1 = state_44440;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44440__$1,(11),to,inst_44418);
} else {
if((state_val_44441 === (3))){
var inst_44437 = (state_44440[(2)]);
var state_44440__$1 = state_44440;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44440__$1,inst_44437);
} else {
if((state_val_44441 === (12))){
var state_44440__$1 = state_44440;
var statearr_44478_47228 = state_44440__$1;
(statearr_44478_47228[(2)] = null);

(statearr_44478_47228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44441 === (2))){
var state_44440__$1 = state_44440;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44440__$1,(4),from);
} else {
if((state_val_44441 === (11))){
var inst_44428 = (state_44440[(2)]);
var state_44440__$1 = state_44440;
if(cljs.core.truth_(inst_44428)){
var statearr_44479_47229 = state_44440__$1;
(statearr_44479_47229[(1)] = (12));

} else {
var statearr_44480_47230 = state_44440__$1;
(statearr_44480_47230[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44441 === (9))){
var state_44440__$1 = state_44440;
var statearr_44481_47234 = state_44440__$1;
(statearr_44481_47234[(2)] = null);

(statearr_44481_47234[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44441 === (5))){
var state_44440__$1 = state_44440;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44482_47236 = state_44440__$1;
(statearr_44482_47236[(1)] = (8));

} else {
var statearr_44484_47237 = state_44440__$1;
(statearr_44484_47237[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44441 === (14))){
var inst_44433 = (state_44440[(2)]);
var state_44440__$1 = state_44440;
var statearr_44485_47239 = state_44440__$1;
(statearr_44485_47239[(2)] = inst_44433);

(statearr_44485_47239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44441 === (10))){
var inst_44425 = (state_44440[(2)]);
var state_44440__$1 = state_44440;
var statearr_44488_47240 = state_44440__$1;
(statearr_44488_47240[(2)] = inst_44425);

(statearr_44488_47240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44441 === (8))){
var inst_44422 = cljs.core.async.close_BANG_(to);
var state_44440__$1 = state_44440;
var statearr_44490_47241 = state_44440__$1;
(statearr_44490_47241[(2)] = inst_44422);

(statearr_44490_47241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44036__auto__ = null;
var cljs$core$async$state_machine__44036__auto____0 = (function (){
var statearr_44491 = [null,null,null,null,null,null,null,null];
(statearr_44491[(0)] = cljs$core$async$state_machine__44036__auto__);

(statearr_44491[(1)] = (1));

return statearr_44491;
});
var cljs$core$async$state_machine__44036__auto____1 = (function (state_44440){
while(true){
var ret_value__44037__auto__ = (function (){try{while(true){
var result__44038__auto__ = switch__44035__auto__(state_44440);
if(cljs.core.keyword_identical_QMARK_(result__44038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44038__auto__;
}
break;
}
}catch (e44495){var ex__44039__auto__ = e44495;
var statearr_44499_47243 = state_44440;
(statearr_44499_47243[(2)] = ex__44039__auto__);


if(cljs.core.seq((state_44440[(4)]))){
var statearr_44500_47244 = state_44440;
(statearr_44500_47244[(1)] = cljs.core.first((state_44440[(4)])));

} else {
throw ex__44039__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47247 = state_44440;
state_44440 = G__47247;
continue;
} else {
return ret_value__44037__auto__;
}
break;
}
});
cljs$core$async$state_machine__44036__auto__ = function(state_44440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44036__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44036__auto____1.call(this,state_44440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44036__auto____0;
cljs$core$async$state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44036__auto____1;
return cljs$core$async$state_machine__44036__auto__;
})()
})();
var state__44114__auto__ = (function (){var statearr_44505 = f__44113__auto__();
(statearr_44505[(6)] = c__44112__auto___47211);

return statearr_44505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44114__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__44518){
var vec__44519 = p__44518;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44519,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44519,(1),null);
var job = vec__44519;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__44112__auto___47252 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44113__auto__ = (function (){var switch__44035__auto__ = (function (state_44527){
var state_val_44528 = (state_44527[(1)]);
if((state_val_44528 === (1))){
var state_44527__$1 = state_44527;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44527__$1,(2),res,v);
} else {
if((state_val_44528 === (2))){
var inst_44524 = (state_44527[(2)]);
var inst_44525 = cljs.core.async.close_BANG_(res);
var state_44527__$1 = (function (){var statearr_44532 = state_44527;
(statearr_44532[(7)] = inst_44524);

return statearr_44532;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44527__$1,inst_44525);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44036__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44036__auto____0 = (function (){
var statearr_44539 = [null,null,null,null,null,null,null,null];
(statearr_44539[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44036__auto__);

(statearr_44539[(1)] = (1));

return statearr_44539;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44036__auto____1 = (function (state_44527){
while(true){
var ret_value__44037__auto__ = (function (){try{while(true){
var result__44038__auto__ = switch__44035__auto__(state_44527);
if(cljs.core.keyword_identical_QMARK_(result__44038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44038__auto__;
}
break;
}
}catch (e44540){var ex__44039__auto__ = e44540;
var statearr_44541_47272 = state_44527;
(statearr_44541_47272[(2)] = ex__44039__auto__);


if(cljs.core.seq((state_44527[(4)]))){
var statearr_44543_47274 = state_44527;
(statearr_44543_47274[(1)] = cljs.core.first((state_44527[(4)])));

} else {
throw ex__44039__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47277 = state_44527;
state_44527 = G__47277;
continue;
} else {
return ret_value__44037__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44036__auto__ = function(state_44527){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44036__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44036__auto____1.call(this,state_44527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44036__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44036__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44036__auto__;
})()
})();
var state__44114__auto__ = (function (){var statearr_44547 = f__44113__auto__();
(statearr_44547[(6)] = c__44112__auto___47252);

return statearr_44547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44114__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__44548){
var vec__44549 = p__44548;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44549,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44549,(1),null);
var job = vec__44549;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___47282 = n;
var __47283 = (0);
while(true){
if((__47283 < n__4613__auto___47282)){
var G__44552_47284 = type;
var G__44552_47285__$1 = (((G__44552_47284 instanceof cljs.core.Keyword))?G__44552_47284.fqn:null);
switch (G__44552_47285__$1) {
case "compute":
var c__44112__auto___47288 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47283,c__44112__auto___47288,G__44552_47284,G__44552_47285__$1,n__4613__auto___47282,jobs,results,process,async){
return (function (){
var f__44113__auto__ = (function (){var switch__44035__auto__ = ((function (__47283,c__44112__auto___47288,G__44552_47284,G__44552_47285__$1,n__4613__auto___47282,jobs,results,process,async){
return (function (state_44569){
var state_val_44570 = (state_44569[(1)]);
if((state_val_44570 === (1))){
var state_44569__$1 = state_44569;
var statearr_44571_47289 = state_44569__$1;
(statearr_44571_47289[(2)] = null);

(statearr_44571_47289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44570 === (2))){
var state_44569__$1 = state_44569;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44569__$1,(4),jobs);
} else {
if((state_val_44570 === (3))){
var inst_44567 = (state_44569[(2)]);
var state_44569__$1 = state_44569;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44569__$1,inst_44567);
} else {
if((state_val_44570 === (4))){
var inst_44559 = (state_44569[(2)]);
var inst_44560 = process(inst_44559);
var state_44569__$1 = state_44569;
if(cljs.core.truth_(inst_44560)){
var statearr_44572_47292 = state_44569__$1;
(statearr_44572_47292[(1)] = (5));

} else {
var statearr_44573_47293 = state_44569__$1;
(statearr_44573_47293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44570 === (5))){
var state_44569__$1 = state_44569;
var statearr_44574_47294 = state_44569__$1;
(statearr_44574_47294[(2)] = null);

(statearr_44574_47294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44570 === (6))){
var state_44569__$1 = state_44569;
var statearr_44575_47295 = state_44569__$1;
(statearr_44575_47295[(2)] = null);

(statearr_44575_47295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44570 === (7))){
var inst_44565 = (state_44569[(2)]);
var state_44569__$1 = state_44569;
var statearr_44576_47296 = state_44569__$1;
(statearr_44576_47296[(2)] = inst_44565);

(statearr_44576_47296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47283,c__44112__auto___47288,G__44552_47284,G__44552_47285__$1,n__4613__auto___47282,jobs,results,process,async))
;
return ((function (__47283,switch__44035__auto__,c__44112__auto___47288,G__44552_47284,G__44552_47285__$1,n__4613__auto___47282,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44036__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44036__auto____0 = (function (){
var statearr_44577 = [null,null,null,null,null,null,null];
(statearr_44577[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44036__auto__);

(statearr_44577[(1)] = (1));

return statearr_44577;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44036__auto____1 = (function (state_44569){
while(true){
var ret_value__44037__auto__ = (function (){try{while(true){
var result__44038__auto__ = switch__44035__auto__(state_44569);
if(cljs.core.keyword_identical_QMARK_(result__44038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44038__auto__;
}
break;
}
}catch (e44578){var ex__44039__auto__ = e44578;
var statearr_44579_47297 = state_44569;
(statearr_44579_47297[(2)] = ex__44039__auto__);


if(cljs.core.seq((state_44569[(4)]))){
var statearr_44581_47298 = state_44569;
(statearr_44581_47298[(1)] = cljs.core.first((state_44569[(4)])));

} else {
throw ex__44039__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47300 = state_44569;
state_44569 = G__47300;
continue;
} else {
return ret_value__44037__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44036__auto__ = function(state_44569){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44036__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44036__auto____1.call(this,state_44569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44036__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44036__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44036__auto__;
})()
;})(__47283,switch__44035__auto__,c__44112__auto___47288,G__44552_47284,G__44552_47285__$1,n__4613__auto___47282,jobs,results,process,async))
})();
var state__44114__auto__ = (function (){var statearr_44584 = f__44113__auto__();
(statearr_44584[(6)] = c__44112__auto___47288);

return statearr_44584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44114__auto__);
});})(__47283,c__44112__auto___47288,G__44552_47284,G__44552_47285__$1,n__4613__auto___47282,jobs,results,process,async))
);


break;
case "async":
var c__44112__auto___47301 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47283,c__44112__auto___47301,G__44552_47284,G__44552_47285__$1,n__4613__auto___47282,jobs,results,process,async){
return (function (){
var f__44113__auto__ = (function (){var switch__44035__auto__ = ((function (__47283,c__44112__auto___47301,G__44552_47284,G__44552_47285__$1,n__4613__auto___47282,jobs,results,process,async){
return (function (state_44598){
var state_val_44599 = (state_44598[(1)]);
if((state_val_44599 === (1))){
var state_44598__$1 = state_44598;
var statearr_44606_47308 = state_44598__$1;
(statearr_44606_47308[(2)] = null);

(statearr_44606_47308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44599 === (2))){
var state_44598__$1 = state_44598;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44598__$1,(4),jobs);
} else {
if((state_val_44599 === (3))){
var inst_44596 = (state_44598[(2)]);
var state_44598__$1 = state_44598;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44598__$1,inst_44596);
} else {
if((state_val_44599 === (4))){
var inst_44588 = (state_44598[(2)]);
var inst_44589 = async(inst_44588);
var state_44598__$1 = state_44598;
if(cljs.core.truth_(inst_44589)){
var statearr_44607_47313 = state_44598__$1;
(statearr_44607_47313[(1)] = (5));

} else {
var statearr_44608_47314 = state_44598__$1;
(statearr_44608_47314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44599 === (5))){
var state_44598__$1 = state_44598;
var statearr_44609_47316 = state_44598__$1;
(statearr_44609_47316[(2)] = null);

(statearr_44609_47316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44599 === (6))){
var state_44598__$1 = state_44598;
var statearr_44611_47317 = state_44598__$1;
(statearr_44611_47317[(2)] = null);

(statearr_44611_47317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44599 === (7))){
var inst_44594 = (state_44598[(2)]);
var state_44598__$1 = state_44598;
var statearr_44612_47323 = state_44598__$1;
(statearr_44612_47323[(2)] = inst_44594);

(statearr_44612_47323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47283,c__44112__auto___47301,G__44552_47284,G__44552_47285__$1,n__4613__auto___47282,jobs,results,process,async))
;
return ((function (__47283,switch__44035__auto__,c__44112__auto___47301,G__44552_47284,G__44552_47285__$1,n__4613__auto___47282,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44036__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44036__auto____0 = (function (){
var statearr_44616 = [null,null,null,null,null,null,null];
(statearr_44616[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44036__auto__);

(statearr_44616[(1)] = (1));

return statearr_44616;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44036__auto____1 = (function (state_44598){
while(true){
var ret_value__44037__auto__ = (function (){try{while(true){
var result__44038__auto__ = switch__44035__auto__(state_44598);
if(cljs.core.keyword_identical_QMARK_(result__44038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44038__auto__;
}
break;
}
}catch (e44617){var ex__44039__auto__ = e44617;
var statearr_44618_47330 = state_44598;
(statearr_44618_47330[(2)] = ex__44039__auto__);


if(cljs.core.seq((state_44598[(4)]))){
var statearr_44619_47331 = state_44598;
(statearr_44619_47331[(1)] = cljs.core.first((state_44598[(4)])));

} else {
throw ex__44039__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47332 = state_44598;
state_44598 = G__47332;
continue;
} else {
return ret_value__44037__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44036__auto__ = function(state_44598){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44036__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44036__auto____1.call(this,state_44598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44036__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44036__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44036__auto__;
})()
;})(__47283,switch__44035__auto__,c__44112__auto___47301,G__44552_47284,G__44552_47285__$1,n__4613__auto___47282,jobs,results,process,async))
})();
var state__44114__auto__ = (function (){var statearr_44620 = f__44113__auto__();
(statearr_44620[(6)] = c__44112__auto___47301);

return statearr_44620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44114__auto__);
});})(__47283,c__44112__auto___47301,G__44552_47284,G__44552_47285__$1,n__4613__auto___47282,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44552_47285__$1)].join('')));

}

var G__47333 = (__47283 + (1));
__47283 = G__47333;
continue;
} else {
}
break;
}

var c__44112__auto___47337 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44113__auto__ = (function (){var switch__44035__auto__ = (function (state_44644){
var state_val_44645 = (state_44644[(1)]);
if((state_val_44645 === (7))){
var inst_44639 = (state_44644[(2)]);
var state_44644__$1 = state_44644;
var statearr_44648_47338 = state_44644__$1;
(statearr_44648_47338[(2)] = inst_44639);

(statearr_44648_47338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44645 === (1))){
var state_44644__$1 = state_44644;
var statearr_44649_47340 = state_44644__$1;
(statearr_44649_47340[(2)] = null);

(statearr_44649_47340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44645 === (4))){
var inst_44623 = (state_44644[(7)]);
var inst_44623__$1 = (state_44644[(2)]);
var inst_44624 = (inst_44623__$1 == null);
var state_44644__$1 = (function (){var statearr_44654 = state_44644;
(statearr_44654[(7)] = inst_44623__$1);

return statearr_44654;
})();
if(cljs.core.truth_(inst_44624)){
var statearr_44655_47345 = state_44644__$1;
(statearr_44655_47345[(1)] = (5));

} else {
var statearr_44659_47349 = state_44644__$1;
(statearr_44659_47349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44645 === (6))){
var inst_44628 = (state_44644[(8)]);
var inst_44623 = (state_44644[(7)]);
var inst_44628__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_44630 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44631 = [inst_44623,inst_44628__$1];
var inst_44632 = (new cljs.core.PersistentVector(null,2,(5),inst_44630,inst_44631,null));
var state_44644__$1 = (function (){var statearr_44664 = state_44644;
(statearr_44664[(8)] = inst_44628__$1);

return statearr_44664;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44644__$1,(8),jobs,inst_44632);
} else {
if((state_val_44645 === (3))){
var inst_44641 = (state_44644[(2)]);
var state_44644__$1 = state_44644;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44644__$1,inst_44641);
} else {
if((state_val_44645 === (2))){
var state_44644__$1 = state_44644;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44644__$1,(4),from);
} else {
if((state_val_44645 === (9))){
var inst_44636 = (state_44644[(2)]);
var state_44644__$1 = (function (){var statearr_44665 = state_44644;
(statearr_44665[(9)] = inst_44636);

return statearr_44665;
})();
var statearr_44666_47354 = state_44644__$1;
(statearr_44666_47354[(2)] = null);

(statearr_44666_47354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44645 === (5))){
var inst_44626 = cljs.core.async.close_BANG_(jobs);
var state_44644__$1 = state_44644;
var statearr_44667_47356 = state_44644__$1;
(statearr_44667_47356[(2)] = inst_44626);

(statearr_44667_47356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44645 === (8))){
var inst_44628 = (state_44644[(8)]);
var inst_44634 = (state_44644[(2)]);
var state_44644__$1 = (function (){var statearr_44668 = state_44644;
(statearr_44668[(10)] = inst_44634);

return statearr_44668;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44644__$1,(9),results,inst_44628);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44036__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44036__auto____0 = (function (){
var statearr_44669 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44669[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44036__auto__);

(statearr_44669[(1)] = (1));

return statearr_44669;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44036__auto____1 = (function (state_44644){
while(true){
var ret_value__44037__auto__ = (function (){try{while(true){
var result__44038__auto__ = switch__44035__auto__(state_44644);
if(cljs.core.keyword_identical_QMARK_(result__44038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44038__auto__;
}
break;
}
}catch (e44671){var ex__44039__auto__ = e44671;
var statearr_44672_47371 = state_44644;
(statearr_44672_47371[(2)] = ex__44039__auto__);


if(cljs.core.seq((state_44644[(4)]))){
var statearr_44675_47375 = state_44644;
(statearr_44675_47375[(1)] = cljs.core.first((state_44644[(4)])));

} else {
throw ex__44039__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47376 = state_44644;
state_44644 = G__47376;
continue;
} else {
return ret_value__44037__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44036__auto__ = function(state_44644){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44036__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44036__auto____1.call(this,state_44644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44036__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44036__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44036__auto__;
})()
})();
var state__44114__auto__ = (function (){var statearr_44677 = f__44113__auto__();
(statearr_44677[(6)] = c__44112__auto___47337);

return statearr_44677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44114__auto__);
}));


var c__44112__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44113__auto__ = (function (){var switch__44035__auto__ = (function (state_44715){
var state_val_44716 = (state_44715[(1)]);
if((state_val_44716 === (7))){
var inst_44711 = (state_44715[(2)]);
var state_44715__$1 = state_44715;
var statearr_44721_47390 = state_44715__$1;
(statearr_44721_47390[(2)] = inst_44711);

(statearr_44721_47390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44716 === (20))){
var state_44715__$1 = state_44715;
var statearr_44722_47392 = state_44715__$1;
(statearr_44722_47392[(2)] = null);

(statearr_44722_47392[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44716 === (1))){
var state_44715__$1 = state_44715;
var statearr_44723_47394 = state_44715__$1;
(statearr_44723_47394[(2)] = null);

(statearr_44723_47394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44716 === (4))){
var inst_44680 = (state_44715[(7)]);
var inst_44680__$1 = (state_44715[(2)]);
var inst_44681 = (inst_44680__$1 == null);
var state_44715__$1 = (function (){var statearr_44727 = state_44715;
(statearr_44727[(7)] = inst_44680__$1);

return statearr_44727;
})();
if(cljs.core.truth_(inst_44681)){
var statearr_44729_47400 = state_44715__$1;
(statearr_44729_47400[(1)] = (5));

} else {
var statearr_44731_47401 = state_44715__$1;
(statearr_44731_47401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44716 === (15))){
var inst_44693 = (state_44715[(8)]);
var state_44715__$1 = state_44715;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44715__$1,(18),to,inst_44693);
} else {
if((state_val_44716 === (21))){
var inst_44706 = (state_44715[(2)]);
var state_44715__$1 = state_44715;
var statearr_44736_47402 = state_44715__$1;
(statearr_44736_47402[(2)] = inst_44706);

(statearr_44736_47402[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44716 === (13))){
var inst_44708 = (state_44715[(2)]);
var state_44715__$1 = (function (){var statearr_44737 = state_44715;
(statearr_44737[(9)] = inst_44708);

return statearr_44737;
})();
var statearr_44738_47403 = state_44715__$1;
(statearr_44738_47403[(2)] = null);

(statearr_44738_47403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44716 === (6))){
var inst_44680 = (state_44715[(7)]);
var state_44715__$1 = state_44715;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44715__$1,(11),inst_44680);
} else {
if((state_val_44716 === (17))){
var inst_44701 = (state_44715[(2)]);
var state_44715__$1 = state_44715;
if(cljs.core.truth_(inst_44701)){
var statearr_44739_47404 = state_44715__$1;
(statearr_44739_47404[(1)] = (19));

} else {
var statearr_44740_47405 = state_44715__$1;
(statearr_44740_47405[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44716 === (3))){
var inst_44713 = (state_44715[(2)]);
var state_44715__$1 = state_44715;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44715__$1,inst_44713);
} else {
if((state_val_44716 === (12))){
var inst_44690 = (state_44715[(10)]);
var state_44715__$1 = state_44715;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44715__$1,(14),inst_44690);
} else {
if((state_val_44716 === (2))){
var state_44715__$1 = state_44715;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44715__$1,(4),results);
} else {
if((state_val_44716 === (19))){
var state_44715__$1 = state_44715;
var statearr_44744_47407 = state_44715__$1;
(statearr_44744_47407[(2)] = null);

(statearr_44744_47407[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44716 === (11))){
var inst_44690 = (state_44715[(2)]);
var state_44715__$1 = (function (){var statearr_44745 = state_44715;
(statearr_44745[(10)] = inst_44690);

return statearr_44745;
})();
var statearr_44746_47408 = state_44715__$1;
(statearr_44746_47408[(2)] = null);

(statearr_44746_47408[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44716 === (9))){
var state_44715__$1 = state_44715;
var statearr_44751_47411 = state_44715__$1;
(statearr_44751_47411[(2)] = null);

(statearr_44751_47411[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44716 === (5))){
var state_44715__$1 = state_44715;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44752_47414 = state_44715__$1;
(statearr_44752_47414[(1)] = (8));

} else {
var statearr_44753_47415 = state_44715__$1;
(statearr_44753_47415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44716 === (14))){
var inst_44693 = (state_44715[(8)]);
var inst_44693__$1 = (state_44715[(2)]);
var inst_44694 = (inst_44693__$1 == null);
var inst_44695 = cljs.core.not(inst_44694);
var state_44715__$1 = (function (){var statearr_44757 = state_44715;
(statearr_44757[(8)] = inst_44693__$1);

return statearr_44757;
})();
if(inst_44695){
var statearr_44758_47416 = state_44715__$1;
(statearr_44758_47416[(1)] = (15));

} else {
var statearr_44760_47417 = state_44715__$1;
(statearr_44760_47417[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44716 === (16))){
var state_44715__$1 = state_44715;
var statearr_44763_47418 = state_44715__$1;
(statearr_44763_47418[(2)] = false);

(statearr_44763_47418[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44716 === (10))){
var inst_44687 = (state_44715[(2)]);
var state_44715__$1 = state_44715;
var statearr_44765_47419 = state_44715__$1;
(statearr_44765_47419[(2)] = inst_44687);

(statearr_44765_47419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44716 === (18))){
var inst_44698 = (state_44715[(2)]);
var state_44715__$1 = state_44715;
var statearr_44766_47420 = state_44715__$1;
(statearr_44766_47420[(2)] = inst_44698);

(statearr_44766_47420[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44716 === (8))){
var inst_44684 = cljs.core.async.close_BANG_(to);
var state_44715__$1 = state_44715;
var statearr_44767_47421 = state_44715__$1;
(statearr_44767_47421[(2)] = inst_44684);

(statearr_44767_47421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44036__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44036__auto____0 = (function (){
var statearr_44771 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44771[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44036__auto__);

(statearr_44771[(1)] = (1));

return statearr_44771;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44036__auto____1 = (function (state_44715){
while(true){
var ret_value__44037__auto__ = (function (){try{while(true){
var result__44038__auto__ = switch__44035__auto__(state_44715);
if(cljs.core.keyword_identical_QMARK_(result__44038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44038__auto__;
}
break;
}
}catch (e44773){var ex__44039__auto__ = e44773;
var statearr_44774_47423 = state_44715;
(statearr_44774_47423[(2)] = ex__44039__auto__);


if(cljs.core.seq((state_44715[(4)]))){
var statearr_44775_47424 = state_44715;
(statearr_44775_47424[(1)] = cljs.core.first((state_44715[(4)])));

} else {
throw ex__44039__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47425 = state_44715;
state_44715 = G__47425;
continue;
} else {
return ret_value__44037__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44036__auto__ = function(state_44715){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44036__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44036__auto____1.call(this,state_44715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44036__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44036__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44036__auto__;
})()
})();
var state__44114__auto__ = (function (){var statearr_44776 = f__44113__auto__();
(statearr_44776[(6)] = c__44112__auto__);

return statearr_44776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44114__auto__);
}));

return c__44112__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__44787 = arguments.length;
switch (G__44787) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__44798 = arguments.length;
switch (G__44798) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__44819 = arguments.length;
switch (G__44819) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__44112__auto___47441 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44113__auto__ = (function (){var switch__44035__auto__ = (function (state_44858){
var state_val_44859 = (state_44858[(1)]);
if((state_val_44859 === (7))){
var inst_44854 = (state_44858[(2)]);
var state_44858__$1 = state_44858;
var statearr_44860_47444 = state_44858__$1;
(statearr_44860_47444[(2)] = inst_44854);

(statearr_44860_47444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44859 === (1))){
var state_44858__$1 = state_44858;
var statearr_44861_47452 = state_44858__$1;
(statearr_44861_47452[(2)] = null);

(statearr_44861_47452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44859 === (4))){
var inst_44830 = (state_44858[(7)]);
var inst_44830__$1 = (state_44858[(2)]);
var inst_44831 = (inst_44830__$1 == null);
var state_44858__$1 = (function (){var statearr_44864 = state_44858;
(statearr_44864[(7)] = inst_44830__$1);

return statearr_44864;
})();
if(cljs.core.truth_(inst_44831)){
var statearr_44865_47459 = state_44858__$1;
(statearr_44865_47459[(1)] = (5));

} else {
var statearr_44866_47460 = state_44858__$1;
(statearr_44866_47460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44859 === (13))){
var state_44858__$1 = state_44858;
var statearr_44869_47463 = state_44858__$1;
(statearr_44869_47463[(2)] = null);

(statearr_44869_47463[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44859 === (6))){
var inst_44830 = (state_44858[(7)]);
var inst_44837 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44830) : p.call(null,inst_44830));
var state_44858__$1 = state_44858;
if(cljs.core.truth_(inst_44837)){
var statearr_44870_47466 = state_44858__$1;
(statearr_44870_47466[(1)] = (9));

} else {
var statearr_44871_47467 = state_44858__$1;
(statearr_44871_47467[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44859 === (3))){
var inst_44856 = (state_44858[(2)]);
var state_44858__$1 = state_44858;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44858__$1,inst_44856);
} else {
if((state_val_44859 === (12))){
var state_44858__$1 = state_44858;
var statearr_44874_47477 = state_44858__$1;
(statearr_44874_47477[(2)] = null);

(statearr_44874_47477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44859 === (2))){
var state_44858__$1 = state_44858;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44858__$1,(4),ch);
} else {
if((state_val_44859 === (11))){
var inst_44830 = (state_44858[(7)]);
var inst_44842 = (state_44858[(2)]);
var state_44858__$1 = state_44858;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44858__$1,(8),inst_44842,inst_44830);
} else {
if((state_val_44859 === (9))){
var state_44858__$1 = state_44858;
var statearr_44881_47484 = state_44858__$1;
(statearr_44881_47484[(2)] = tc);

(statearr_44881_47484[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44859 === (5))){
var inst_44834 = cljs.core.async.close_BANG_(tc);
var inst_44835 = cljs.core.async.close_BANG_(fc);
var state_44858__$1 = (function (){var statearr_44889 = state_44858;
(statearr_44889[(8)] = inst_44834);

return statearr_44889;
})();
var statearr_44890_47486 = state_44858__$1;
(statearr_44890_47486[(2)] = inst_44835);

(statearr_44890_47486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44859 === (14))){
var inst_44852 = (state_44858[(2)]);
var state_44858__$1 = state_44858;
var statearr_44896_47488 = state_44858__$1;
(statearr_44896_47488[(2)] = inst_44852);

(statearr_44896_47488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44859 === (10))){
var state_44858__$1 = state_44858;
var statearr_44899_47489 = state_44858__$1;
(statearr_44899_47489[(2)] = fc);

(statearr_44899_47489[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44859 === (8))){
var inst_44847 = (state_44858[(2)]);
var state_44858__$1 = state_44858;
if(cljs.core.truth_(inst_44847)){
var statearr_44911_47490 = state_44858__$1;
(statearr_44911_47490[(1)] = (12));

} else {
var statearr_44913_47491 = state_44858__$1;
(statearr_44913_47491[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44036__auto__ = null;
var cljs$core$async$state_machine__44036__auto____0 = (function (){
var statearr_44918 = [null,null,null,null,null,null,null,null,null];
(statearr_44918[(0)] = cljs$core$async$state_machine__44036__auto__);

(statearr_44918[(1)] = (1));

return statearr_44918;
});
var cljs$core$async$state_machine__44036__auto____1 = (function (state_44858){
while(true){
var ret_value__44037__auto__ = (function (){try{while(true){
var result__44038__auto__ = switch__44035__auto__(state_44858);
if(cljs.core.keyword_identical_QMARK_(result__44038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44038__auto__;
}
break;
}
}catch (e44922){var ex__44039__auto__ = e44922;
var statearr_44923_47500 = state_44858;
(statearr_44923_47500[(2)] = ex__44039__auto__);


if(cljs.core.seq((state_44858[(4)]))){
var statearr_44924_47502 = state_44858;
(statearr_44924_47502[(1)] = cljs.core.first((state_44858[(4)])));

} else {
throw ex__44039__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47506 = state_44858;
state_44858 = G__47506;
continue;
} else {
return ret_value__44037__auto__;
}
break;
}
});
cljs$core$async$state_machine__44036__auto__ = function(state_44858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44036__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44036__auto____1.call(this,state_44858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44036__auto____0;
cljs$core$async$state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44036__auto____1;
return cljs$core$async$state_machine__44036__auto__;
})()
})();
var state__44114__auto__ = (function (){var statearr_44927 = f__44113__auto__();
(statearr_44927[(6)] = c__44112__auto___47441);

return statearr_44927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44114__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__44112__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44113__auto__ = (function (){var switch__44035__auto__ = (function (state_44952){
var state_val_44953 = (state_44952[(1)]);
if((state_val_44953 === (7))){
var inst_44948 = (state_44952[(2)]);
var state_44952__$1 = state_44952;
var statearr_44957_47510 = state_44952__$1;
(statearr_44957_47510[(2)] = inst_44948);

(statearr_44957_47510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44953 === (1))){
var inst_44931 = init;
var inst_44932 = inst_44931;
var state_44952__$1 = (function (){var statearr_44958 = state_44952;
(statearr_44958[(7)] = inst_44932);

return statearr_44958;
})();
var statearr_44959_47511 = state_44952__$1;
(statearr_44959_47511[(2)] = null);

(statearr_44959_47511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44953 === (4))){
var inst_44935 = (state_44952[(8)]);
var inst_44935__$1 = (state_44952[(2)]);
var inst_44936 = (inst_44935__$1 == null);
var state_44952__$1 = (function (){var statearr_44960 = state_44952;
(statearr_44960[(8)] = inst_44935__$1);

return statearr_44960;
})();
if(cljs.core.truth_(inst_44936)){
var statearr_44961_47518 = state_44952__$1;
(statearr_44961_47518[(1)] = (5));

} else {
var statearr_44962_47519 = state_44952__$1;
(statearr_44962_47519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44953 === (6))){
var inst_44935 = (state_44952[(8)]);
var inst_44932 = (state_44952[(7)]);
var inst_44939 = (state_44952[(9)]);
var inst_44939__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_44932,inst_44935) : f.call(null,inst_44932,inst_44935));
var inst_44940 = cljs.core.reduced_QMARK_(inst_44939__$1);
var state_44952__$1 = (function (){var statearr_44963 = state_44952;
(statearr_44963[(9)] = inst_44939__$1);

return statearr_44963;
})();
if(inst_44940){
var statearr_44964_47522 = state_44952__$1;
(statearr_44964_47522[(1)] = (8));

} else {
var statearr_44965_47527 = state_44952__$1;
(statearr_44965_47527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44953 === (3))){
var inst_44950 = (state_44952[(2)]);
var state_44952__$1 = state_44952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44952__$1,inst_44950);
} else {
if((state_val_44953 === (2))){
var state_44952__$1 = state_44952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44952__$1,(4),ch);
} else {
if((state_val_44953 === (9))){
var inst_44939 = (state_44952[(9)]);
var inst_44932 = inst_44939;
var state_44952__$1 = (function (){var statearr_44968 = state_44952;
(statearr_44968[(7)] = inst_44932);

return statearr_44968;
})();
var statearr_44970_47531 = state_44952__$1;
(statearr_44970_47531[(2)] = null);

(statearr_44970_47531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44953 === (5))){
var inst_44932 = (state_44952[(7)]);
var state_44952__$1 = state_44952;
var statearr_44972_47533 = state_44952__$1;
(statearr_44972_47533[(2)] = inst_44932);

(statearr_44972_47533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44953 === (10))){
var inst_44946 = (state_44952[(2)]);
var state_44952__$1 = state_44952;
var statearr_44976_47534 = state_44952__$1;
(statearr_44976_47534[(2)] = inst_44946);

(statearr_44976_47534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44953 === (8))){
var inst_44939 = (state_44952[(9)]);
var inst_44942 = cljs.core.deref(inst_44939);
var state_44952__$1 = state_44952;
var statearr_44977_47541 = state_44952__$1;
(statearr_44977_47541[(2)] = inst_44942);

(statearr_44977_47541[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__44036__auto__ = null;
var cljs$core$async$reduce_$_state_machine__44036__auto____0 = (function (){
var statearr_44978 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44978[(0)] = cljs$core$async$reduce_$_state_machine__44036__auto__);

(statearr_44978[(1)] = (1));

return statearr_44978;
});
var cljs$core$async$reduce_$_state_machine__44036__auto____1 = (function (state_44952){
while(true){
var ret_value__44037__auto__ = (function (){try{while(true){
var result__44038__auto__ = switch__44035__auto__(state_44952);
if(cljs.core.keyword_identical_QMARK_(result__44038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44038__auto__;
}
break;
}
}catch (e44980){var ex__44039__auto__ = e44980;
var statearr_44981_47545 = state_44952;
(statearr_44981_47545[(2)] = ex__44039__auto__);


if(cljs.core.seq((state_44952[(4)]))){
var statearr_44986_47546 = state_44952;
(statearr_44986_47546[(1)] = cljs.core.first((state_44952[(4)])));

} else {
throw ex__44039__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47547 = state_44952;
state_44952 = G__47547;
continue;
} else {
return ret_value__44037__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__44036__auto__ = function(state_44952){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__44036__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__44036__auto____1.call(this,state_44952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__44036__auto____0;
cljs$core$async$reduce_$_state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__44036__auto____1;
return cljs$core$async$reduce_$_state_machine__44036__auto__;
})()
})();
var state__44114__auto__ = (function (){var statearr_44991 = f__44113__auto__();
(statearr_44991[(6)] = c__44112__auto__);

return statearr_44991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44114__auto__);
}));

return c__44112__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__44112__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44113__auto__ = (function (){var switch__44035__auto__ = (function (state_45003){
var state_val_45004 = (state_45003[(1)]);
if((state_val_45004 === (1))){
var inst_44995 = cljs.core.async.reduce(f__$1,init,ch);
var state_45003__$1 = state_45003;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45003__$1,(2),inst_44995);
} else {
if((state_val_45004 === (2))){
var inst_44997 = (state_45003[(2)]);
var inst_45001 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_44997) : f__$1.call(null,inst_44997));
var state_45003__$1 = state_45003;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45003__$1,inst_45001);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__44036__auto__ = null;
var cljs$core$async$transduce_$_state_machine__44036__auto____0 = (function (){
var statearr_45015 = [null,null,null,null,null,null,null];
(statearr_45015[(0)] = cljs$core$async$transduce_$_state_machine__44036__auto__);

(statearr_45015[(1)] = (1));

return statearr_45015;
});
var cljs$core$async$transduce_$_state_machine__44036__auto____1 = (function (state_45003){
while(true){
var ret_value__44037__auto__ = (function (){try{while(true){
var result__44038__auto__ = switch__44035__auto__(state_45003);
if(cljs.core.keyword_identical_QMARK_(result__44038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44038__auto__;
}
break;
}
}catch (e45021){var ex__44039__auto__ = e45021;
var statearr_45022_47552 = state_45003;
(statearr_45022_47552[(2)] = ex__44039__auto__);


if(cljs.core.seq((state_45003[(4)]))){
var statearr_45023_47553 = state_45003;
(statearr_45023_47553[(1)] = cljs.core.first((state_45003[(4)])));

} else {
throw ex__44039__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47554 = state_45003;
state_45003 = G__47554;
continue;
} else {
return ret_value__44037__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__44036__auto__ = function(state_45003){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__44036__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__44036__auto____1.call(this,state_45003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__44036__auto____0;
cljs$core$async$transduce_$_state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__44036__auto____1;
return cljs$core$async$transduce_$_state_machine__44036__auto__;
})()
})();
var state__44114__auto__ = (function (){var statearr_45028 = f__44113__auto__();
(statearr_45028[(6)] = c__44112__auto__);

return statearr_45028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44114__auto__);
}));

return c__44112__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__45031 = arguments.length;
switch (G__45031) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__44112__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44113__auto__ = (function (){var switch__44035__auto__ = (function (state_45061){
var state_val_45062 = (state_45061[(1)]);
if((state_val_45062 === (7))){
var inst_45040 = (state_45061[(2)]);
var state_45061__$1 = state_45061;
var statearr_45065_47559 = state_45061__$1;
(statearr_45065_47559[(2)] = inst_45040);

(statearr_45065_47559[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45062 === (1))){
var inst_45034 = cljs.core.seq(coll);
var inst_45035 = inst_45034;
var state_45061__$1 = (function (){var statearr_45066 = state_45061;
(statearr_45066[(7)] = inst_45035);

return statearr_45066;
})();
var statearr_45068_47561 = state_45061__$1;
(statearr_45068_47561[(2)] = null);

(statearr_45068_47561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45062 === (4))){
var inst_45035 = (state_45061[(7)]);
var inst_45038 = cljs.core.first(inst_45035);
var state_45061__$1 = state_45061;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45061__$1,(7),ch,inst_45038);
} else {
if((state_val_45062 === (13))){
var inst_45052 = (state_45061[(2)]);
var state_45061__$1 = state_45061;
var statearr_45069_47567 = state_45061__$1;
(statearr_45069_47567[(2)] = inst_45052);

(statearr_45069_47567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45062 === (6))){
var inst_45043 = (state_45061[(2)]);
var state_45061__$1 = state_45061;
if(cljs.core.truth_(inst_45043)){
var statearr_45070_47568 = state_45061__$1;
(statearr_45070_47568[(1)] = (8));

} else {
var statearr_45071_47569 = state_45061__$1;
(statearr_45071_47569[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45062 === (3))){
var inst_45056 = (state_45061[(2)]);
var state_45061__$1 = state_45061;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45061__$1,inst_45056);
} else {
if((state_val_45062 === (12))){
var state_45061__$1 = state_45061;
var statearr_45073_47571 = state_45061__$1;
(statearr_45073_47571[(2)] = null);

(statearr_45073_47571[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45062 === (2))){
var inst_45035 = (state_45061[(7)]);
var state_45061__$1 = state_45061;
if(cljs.core.truth_(inst_45035)){
var statearr_45074_47572 = state_45061__$1;
(statearr_45074_47572[(1)] = (4));

} else {
var statearr_45075_47574 = state_45061__$1;
(statearr_45075_47574[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45062 === (11))){
var inst_45049 = cljs.core.async.close_BANG_(ch);
var state_45061__$1 = state_45061;
var statearr_45076_47576 = state_45061__$1;
(statearr_45076_47576[(2)] = inst_45049);

(statearr_45076_47576[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45062 === (9))){
var state_45061__$1 = state_45061;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45077_47577 = state_45061__$1;
(statearr_45077_47577[(1)] = (11));

} else {
var statearr_45078_47578 = state_45061__$1;
(statearr_45078_47578[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45062 === (5))){
var inst_45035 = (state_45061[(7)]);
var state_45061__$1 = state_45061;
var statearr_45082_47581 = state_45061__$1;
(statearr_45082_47581[(2)] = inst_45035);

(statearr_45082_47581[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45062 === (10))){
var inst_45054 = (state_45061[(2)]);
var state_45061__$1 = state_45061;
var statearr_45083_47582 = state_45061__$1;
(statearr_45083_47582[(2)] = inst_45054);

(statearr_45083_47582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45062 === (8))){
var inst_45035 = (state_45061[(7)]);
var inst_45045 = cljs.core.next(inst_45035);
var inst_45035__$1 = inst_45045;
var state_45061__$1 = (function (){var statearr_45088 = state_45061;
(statearr_45088[(7)] = inst_45035__$1);

return statearr_45088;
})();
var statearr_45089_47586 = state_45061__$1;
(statearr_45089_47586[(2)] = null);

(statearr_45089_47586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44036__auto__ = null;
var cljs$core$async$state_machine__44036__auto____0 = (function (){
var statearr_45090 = [null,null,null,null,null,null,null,null];
(statearr_45090[(0)] = cljs$core$async$state_machine__44036__auto__);

(statearr_45090[(1)] = (1));

return statearr_45090;
});
var cljs$core$async$state_machine__44036__auto____1 = (function (state_45061){
while(true){
var ret_value__44037__auto__ = (function (){try{while(true){
var result__44038__auto__ = switch__44035__auto__(state_45061);
if(cljs.core.keyword_identical_QMARK_(result__44038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44038__auto__;
}
break;
}
}catch (e45091){var ex__44039__auto__ = e45091;
var statearr_45092_47588 = state_45061;
(statearr_45092_47588[(2)] = ex__44039__auto__);


if(cljs.core.seq((state_45061[(4)]))){
var statearr_45094_47590 = state_45061;
(statearr_45094_47590[(1)] = cljs.core.first((state_45061[(4)])));

} else {
throw ex__44039__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47592 = state_45061;
state_45061 = G__47592;
continue;
} else {
return ret_value__44037__auto__;
}
break;
}
});
cljs$core$async$state_machine__44036__auto__ = function(state_45061){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44036__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44036__auto____1.call(this,state_45061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44036__auto____0;
cljs$core$async$state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44036__auto____1;
return cljs$core$async$state_machine__44036__auto__;
})()
})();
var state__44114__auto__ = (function (){var statearr_45096 = f__44113__auto__();
(statearr_45096[(6)] = c__44112__auto__);

return statearr_45096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44114__auto__);
}));

return c__44112__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__45130 = arguments.length;
switch (G__45130) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_47594 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_47594(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_47596 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_47596(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_47599 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_47599(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_47602 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_47602(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45170 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45170 = (function (ch,cs,meta45171){
this.ch = ch;
this.cs = cs;
this.meta45171 = meta45171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45172,meta45171__$1){
var self__ = this;
var _45172__$1 = this;
return (new cljs.core.async.t_cljs$core$async45170(self__.ch,self__.cs,meta45171__$1));
}));

(cljs.core.async.t_cljs$core$async45170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45172){
var self__ = this;
var _45172__$1 = this;
return self__.meta45171;
}));

(cljs.core.async.t_cljs$core$async45170.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45170.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45170.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45170.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async45170.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async45170.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async45170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45171","meta45171",-429118718,null)], null);
}));

(cljs.core.async.t_cljs$core$async45170.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45170.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45170");

(cljs.core.async.t_cljs$core$async45170.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45170");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45170.
 */
cljs.core.async.__GT_t_cljs$core$async45170 = (function cljs$core$async$mult_$___GT_t_cljs$core$async45170(ch__$1,cs__$1,meta45171){
return (new cljs.core.async.t_cljs$core$async45170(ch__$1,cs__$1,meta45171));
});

}

return (new cljs.core.async.t_cljs$core$async45170(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__44112__auto___47606 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44113__auto__ = (function (){var switch__44035__auto__ = (function (state_45362){
var state_val_45364 = (state_45362[(1)]);
if((state_val_45364 === (7))){
var inst_45350 = (state_45362[(2)]);
var state_45362__$1 = state_45362;
var statearr_45370_47607 = state_45362__$1;
(statearr_45370_47607[(2)] = inst_45350);

(statearr_45370_47607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (20))){
var inst_45223 = (state_45362[(7)]);
var inst_45244 = cljs.core.first(inst_45223);
var inst_45255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45244,(0),null);
var inst_45256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45244,(1),null);
var state_45362__$1 = (function (){var statearr_45371 = state_45362;
(statearr_45371[(8)] = inst_45255);

return statearr_45371;
})();
if(cljs.core.truth_(inst_45256)){
var statearr_45372_47612 = state_45362__$1;
(statearr_45372_47612[(1)] = (22));

} else {
var statearr_45373_47614 = state_45362__$1;
(statearr_45373_47614[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (27))){
var inst_45181 = (state_45362[(9)]);
var inst_45286 = (state_45362[(10)]);
var inst_45284 = (state_45362[(11)]);
var inst_45291 = (state_45362[(12)]);
var inst_45291__$1 = cljs.core._nth(inst_45284,inst_45286);
var inst_45292 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45291__$1,inst_45181,done);
var state_45362__$1 = (function (){var statearr_45383 = state_45362;
(statearr_45383[(12)] = inst_45291__$1);

return statearr_45383;
})();
if(cljs.core.truth_(inst_45292)){
var statearr_45385_47615 = state_45362__$1;
(statearr_45385_47615[(1)] = (30));

} else {
var statearr_45390_47616 = state_45362__$1;
(statearr_45390_47616[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (1))){
var state_45362__$1 = state_45362;
var statearr_45392_47622 = state_45362__$1;
(statearr_45392_47622[(2)] = null);

(statearr_45392_47622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (24))){
var inst_45223 = (state_45362[(7)]);
var inst_45261 = (state_45362[(2)]);
var inst_45262 = cljs.core.next(inst_45223);
var inst_45190 = inst_45262;
var inst_45191 = null;
var inst_45192 = (0);
var inst_45193 = (0);
var state_45362__$1 = (function (){var statearr_45400 = state_45362;
(statearr_45400[(13)] = inst_45191);

(statearr_45400[(14)] = inst_45190);

(statearr_45400[(15)] = inst_45193);

(statearr_45400[(16)] = inst_45261);

(statearr_45400[(17)] = inst_45192);

return statearr_45400;
})();
var statearr_45401_47623 = state_45362__$1;
(statearr_45401_47623[(2)] = null);

(statearr_45401_47623[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (39))){
var state_45362__$1 = state_45362;
var statearr_45415_47625 = state_45362__$1;
(statearr_45415_47625[(2)] = null);

(statearr_45415_47625[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (4))){
var inst_45181 = (state_45362[(9)]);
var inst_45181__$1 = (state_45362[(2)]);
var inst_45182 = (inst_45181__$1 == null);
var state_45362__$1 = (function (){var statearr_45416 = state_45362;
(statearr_45416[(9)] = inst_45181__$1);

return statearr_45416;
})();
if(cljs.core.truth_(inst_45182)){
var statearr_45418_47634 = state_45362__$1;
(statearr_45418_47634[(1)] = (5));

} else {
var statearr_45419_47635 = state_45362__$1;
(statearr_45419_47635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (15))){
var inst_45191 = (state_45362[(13)]);
var inst_45190 = (state_45362[(14)]);
var inst_45193 = (state_45362[(15)]);
var inst_45192 = (state_45362[(17)]);
var inst_45217 = (state_45362[(2)]);
var inst_45219 = (inst_45193 + (1));
var tmp45406 = inst_45191;
var tmp45407 = inst_45190;
var tmp45408 = inst_45192;
var inst_45190__$1 = tmp45407;
var inst_45191__$1 = tmp45406;
var inst_45192__$1 = tmp45408;
var inst_45193__$1 = inst_45219;
var state_45362__$1 = (function (){var statearr_45420 = state_45362;
(statearr_45420[(13)] = inst_45191__$1);

(statearr_45420[(14)] = inst_45190__$1);

(statearr_45420[(18)] = inst_45217);

(statearr_45420[(15)] = inst_45193__$1);

(statearr_45420[(17)] = inst_45192__$1);

return statearr_45420;
})();
var statearr_45421_47640 = state_45362__$1;
(statearr_45421_47640[(2)] = null);

(statearr_45421_47640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (21))){
var inst_45265 = (state_45362[(2)]);
var state_45362__$1 = state_45362;
var statearr_45427_47644 = state_45362__$1;
(statearr_45427_47644[(2)] = inst_45265);

(statearr_45427_47644[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (31))){
var inst_45291 = (state_45362[(12)]);
var inst_45295 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45291);
var state_45362__$1 = state_45362;
var statearr_45431_47645 = state_45362__$1;
(statearr_45431_47645[(2)] = inst_45295);

(statearr_45431_47645[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (32))){
var inst_45286 = (state_45362[(10)]);
var inst_45283 = (state_45362[(19)]);
var inst_45285 = (state_45362[(20)]);
var inst_45284 = (state_45362[(11)]);
var inst_45297 = (state_45362[(2)]);
var inst_45298 = (inst_45286 + (1));
var tmp45422 = inst_45283;
var tmp45423 = inst_45285;
var tmp45424 = inst_45284;
var inst_45283__$1 = tmp45422;
var inst_45284__$1 = tmp45424;
var inst_45285__$1 = tmp45423;
var inst_45286__$1 = inst_45298;
var state_45362__$1 = (function (){var statearr_45433 = state_45362;
(statearr_45433[(10)] = inst_45286__$1);

(statearr_45433[(21)] = inst_45297);

(statearr_45433[(19)] = inst_45283__$1);

(statearr_45433[(20)] = inst_45285__$1);

(statearr_45433[(11)] = inst_45284__$1);

return statearr_45433;
})();
var statearr_45434_47656 = state_45362__$1;
(statearr_45434_47656[(2)] = null);

(statearr_45434_47656[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (40))){
var inst_45315 = (state_45362[(22)]);
var inst_45320 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45315);
var state_45362__$1 = state_45362;
var statearr_45442_47657 = state_45362__$1;
(statearr_45442_47657[(2)] = inst_45320);

(statearr_45442_47657[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (33))){
var inst_45301 = (state_45362[(23)]);
var inst_45303 = cljs.core.chunked_seq_QMARK_(inst_45301);
var state_45362__$1 = state_45362;
if(inst_45303){
var statearr_45448_47658 = state_45362__$1;
(statearr_45448_47658[(1)] = (36));

} else {
var statearr_45449_47659 = state_45362__$1;
(statearr_45449_47659[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (13))){
var inst_45207 = (state_45362[(24)]);
var inst_45214 = cljs.core.async.close_BANG_(inst_45207);
var state_45362__$1 = state_45362;
var statearr_45452_47660 = state_45362__$1;
(statearr_45452_47660[(2)] = inst_45214);

(statearr_45452_47660[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (22))){
var inst_45255 = (state_45362[(8)]);
var inst_45258 = cljs.core.async.close_BANG_(inst_45255);
var state_45362__$1 = state_45362;
var statearr_45453_47662 = state_45362__$1;
(statearr_45453_47662[(2)] = inst_45258);

(statearr_45453_47662[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (36))){
var inst_45301 = (state_45362[(23)]);
var inst_45305 = cljs.core.chunk_first(inst_45301);
var inst_45307 = cljs.core.chunk_rest(inst_45301);
var inst_45308 = cljs.core.count(inst_45305);
var inst_45283 = inst_45307;
var inst_45284 = inst_45305;
var inst_45285 = inst_45308;
var inst_45286 = (0);
var state_45362__$1 = (function (){var statearr_45458 = state_45362;
(statearr_45458[(10)] = inst_45286);

(statearr_45458[(19)] = inst_45283);

(statearr_45458[(20)] = inst_45285);

(statearr_45458[(11)] = inst_45284);

return statearr_45458;
})();
var statearr_45459_47669 = state_45362__$1;
(statearr_45459_47669[(2)] = null);

(statearr_45459_47669[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (41))){
var inst_45301 = (state_45362[(23)]);
var inst_45322 = (state_45362[(2)]);
var inst_45323 = cljs.core.next(inst_45301);
var inst_45283 = inst_45323;
var inst_45284 = null;
var inst_45285 = (0);
var inst_45286 = (0);
var state_45362__$1 = (function (){var statearr_45461 = state_45362;
(statearr_45461[(10)] = inst_45286);

(statearr_45461[(25)] = inst_45322);

(statearr_45461[(19)] = inst_45283);

(statearr_45461[(20)] = inst_45285);

(statearr_45461[(11)] = inst_45284);

return statearr_45461;
})();
var statearr_45465_47672 = state_45362__$1;
(statearr_45465_47672[(2)] = null);

(statearr_45465_47672[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (43))){
var state_45362__$1 = state_45362;
var statearr_45466_47674 = state_45362__$1;
(statearr_45466_47674[(2)] = null);

(statearr_45466_47674[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (29))){
var inst_45337 = (state_45362[(2)]);
var state_45362__$1 = state_45362;
var statearr_45471_47675 = state_45362__$1;
(statearr_45471_47675[(2)] = inst_45337);

(statearr_45471_47675[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (44))){
var inst_45347 = (state_45362[(2)]);
var state_45362__$1 = (function (){var statearr_45476 = state_45362;
(statearr_45476[(26)] = inst_45347);

return statearr_45476;
})();
var statearr_45477_47676 = state_45362__$1;
(statearr_45477_47676[(2)] = null);

(statearr_45477_47676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (6))){
var inst_45275 = (state_45362[(27)]);
var inst_45274 = cljs.core.deref(cs);
var inst_45275__$1 = cljs.core.keys(inst_45274);
var inst_45276 = cljs.core.count(inst_45275__$1);
var inst_45277 = cljs.core.reset_BANG_(dctr,inst_45276);
var inst_45282 = cljs.core.seq(inst_45275__$1);
var inst_45283 = inst_45282;
var inst_45284 = null;
var inst_45285 = (0);
var inst_45286 = (0);
var state_45362__$1 = (function (){var statearr_45487 = state_45362;
(statearr_45487[(28)] = inst_45277);

(statearr_45487[(10)] = inst_45286);

(statearr_45487[(19)] = inst_45283);

(statearr_45487[(20)] = inst_45285);

(statearr_45487[(11)] = inst_45284);

(statearr_45487[(27)] = inst_45275__$1);

return statearr_45487;
})();
var statearr_45492_47677 = state_45362__$1;
(statearr_45492_47677[(2)] = null);

(statearr_45492_47677[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (28))){
var inst_45301 = (state_45362[(23)]);
var inst_45283 = (state_45362[(19)]);
var inst_45301__$1 = cljs.core.seq(inst_45283);
var state_45362__$1 = (function (){var statearr_45493 = state_45362;
(statearr_45493[(23)] = inst_45301__$1);

return statearr_45493;
})();
if(inst_45301__$1){
var statearr_45494_47684 = state_45362__$1;
(statearr_45494_47684[(1)] = (33));

} else {
var statearr_45495_47685 = state_45362__$1;
(statearr_45495_47685[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (25))){
var inst_45286 = (state_45362[(10)]);
var inst_45285 = (state_45362[(20)]);
var inst_45288 = (inst_45286 < inst_45285);
var inst_45289 = inst_45288;
var state_45362__$1 = state_45362;
if(cljs.core.truth_(inst_45289)){
var statearr_45496_47686 = state_45362__$1;
(statearr_45496_47686[(1)] = (27));

} else {
var statearr_45497_47687 = state_45362__$1;
(statearr_45497_47687[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (34))){
var state_45362__$1 = state_45362;
var statearr_45498_47688 = state_45362__$1;
(statearr_45498_47688[(2)] = null);

(statearr_45498_47688[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (17))){
var state_45362__$1 = state_45362;
var statearr_45499_47693 = state_45362__$1;
(statearr_45499_47693[(2)] = null);

(statearr_45499_47693[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (3))){
var inst_45353 = (state_45362[(2)]);
var state_45362__$1 = state_45362;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45362__$1,inst_45353);
} else {
if((state_val_45364 === (12))){
var inst_45270 = (state_45362[(2)]);
var state_45362__$1 = state_45362;
var statearr_45500_47695 = state_45362__$1;
(statearr_45500_47695[(2)] = inst_45270);

(statearr_45500_47695[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (2))){
var state_45362__$1 = state_45362;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45362__$1,(4),ch);
} else {
if((state_val_45364 === (23))){
var state_45362__$1 = state_45362;
var statearr_45505_47698 = state_45362__$1;
(statearr_45505_47698[(2)] = null);

(statearr_45505_47698[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (35))){
var inst_45335 = (state_45362[(2)]);
var state_45362__$1 = state_45362;
var statearr_45507_47703 = state_45362__$1;
(statearr_45507_47703[(2)] = inst_45335);

(statearr_45507_47703[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (19))){
var inst_45223 = (state_45362[(7)]);
var inst_45235 = cljs.core.chunk_first(inst_45223);
var inst_45236 = cljs.core.chunk_rest(inst_45223);
var inst_45237 = cljs.core.count(inst_45235);
var inst_45190 = inst_45236;
var inst_45191 = inst_45235;
var inst_45192 = inst_45237;
var inst_45193 = (0);
var state_45362__$1 = (function (){var statearr_45511 = state_45362;
(statearr_45511[(13)] = inst_45191);

(statearr_45511[(14)] = inst_45190);

(statearr_45511[(15)] = inst_45193);

(statearr_45511[(17)] = inst_45192);

return statearr_45511;
})();
var statearr_45512_47707 = state_45362__$1;
(statearr_45512_47707[(2)] = null);

(statearr_45512_47707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (11))){
var inst_45190 = (state_45362[(14)]);
var inst_45223 = (state_45362[(7)]);
var inst_45223__$1 = cljs.core.seq(inst_45190);
var state_45362__$1 = (function (){var statearr_45513 = state_45362;
(statearr_45513[(7)] = inst_45223__$1);

return statearr_45513;
})();
if(inst_45223__$1){
var statearr_45514_47709 = state_45362__$1;
(statearr_45514_47709[(1)] = (16));

} else {
var statearr_45515_47710 = state_45362__$1;
(statearr_45515_47710[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (9))){
var inst_45272 = (state_45362[(2)]);
var state_45362__$1 = state_45362;
var statearr_45516_47711 = state_45362__$1;
(statearr_45516_47711[(2)] = inst_45272);

(statearr_45516_47711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (5))){
var inst_45188 = cljs.core.deref(cs);
var inst_45189 = cljs.core.seq(inst_45188);
var inst_45190 = inst_45189;
var inst_45191 = null;
var inst_45192 = (0);
var inst_45193 = (0);
var state_45362__$1 = (function (){var statearr_45520 = state_45362;
(statearr_45520[(13)] = inst_45191);

(statearr_45520[(14)] = inst_45190);

(statearr_45520[(15)] = inst_45193);

(statearr_45520[(17)] = inst_45192);

return statearr_45520;
})();
var statearr_45521_47718 = state_45362__$1;
(statearr_45521_47718[(2)] = null);

(statearr_45521_47718[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (14))){
var state_45362__$1 = state_45362;
var statearr_45522_47719 = state_45362__$1;
(statearr_45522_47719[(2)] = null);

(statearr_45522_47719[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (45))){
var inst_45344 = (state_45362[(2)]);
var state_45362__$1 = state_45362;
var statearr_45523_47722 = state_45362__$1;
(statearr_45523_47722[(2)] = inst_45344);

(statearr_45523_47722[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (26))){
var inst_45275 = (state_45362[(27)]);
var inst_45339 = (state_45362[(2)]);
var inst_45340 = cljs.core.seq(inst_45275);
var state_45362__$1 = (function (){var statearr_45525 = state_45362;
(statearr_45525[(29)] = inst_45339);

return statearr_45525;
})();
if(inst_45340){
var statearr_45526_47728 = state_45362__$1;
(statearr_45526_47728[(1)] = (42));

} else {
var statearr_45529_47729 = state_45362__$1;
(statearr_45529_47729[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (16))){
var inst_45223 = (state_45362[(7)]);
var inst_45233 = cljs.core.chunked_seq_QMARK_(inst_45223);
var state_45362__$1 = state_45362;
if(inst_45233){
var statearr_45531_47730 = state_45362__$1;
(statearr_45531_47730[(1)] = (19));

} else {
var statearr_45533_47731 = state_45362__$1;
(statearr_45533_47731[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (38))){
var inst_45328 = (state_45362[(2)]);
var state_45362__$1 = state_45362;
var statearr_45538_47733 = state_45362__$1;
(statearr_45538_47733[(2)] = inst_45328);

(statearr_45538_47733[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (30))){
var state_45362__$1 = state_45362;
var statearr_45539_47734 = state_45362__$1;
(statearr_45539_47734[(2)] = null);

(statearr_45539_47734[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (10))){
var inst_45191 = (state_45362[(13)]);
var inst_45193 = (state_45362[(15)]);
var inst_45206 = cljs.core._nth(inst_45191,inst_45193);
var inst_45207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45206,(0),null);
var inst_45212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45206,(1),null);
var state_45362__$1 = (function (){var statearr_45544 = state_45362;
(statearr_45544[(24)] = inst_45207);

return statearr_45544;
})();
if(cljs.core.truth_(inst_45212)){
var statearr_45545_47738 = state_45362__$1;
(statearr_45545_47738[(1)] = (13));

} else {
var statearr_45546_47739 = state_45362__$1;
(statearr_45546_47739[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (18))){
var inst_45268 = (state_45362[(2)]);
var state_45362__$1 = state_45362;
var statearr_45547_47740 = state_45362__$1;
(statearr_45547_47740[(2)] = inst_45268);

(statearr_45547_47740[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (42))){
var state_45362__$1 = state_45362;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45362__$1,(45),dchan);
} else {
if((state_val_45364 === (37))){
var inst_45315 = (state_45362[(22)]);
var inst_45181 = (state_45362[(9)]);
var inst_45301 = (state_45362[(23)]);
var inst_45315__$1 = cljs.core.first(inst_45301);
var inst_45316 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45315__$1,inst_45181,done);
var state_45362__$1 = (function (){var statearr_45549 = state_45362;
(statearr_45549[(22)] = inst_45315__$1);

return statearr_45549;
})();
if(cljs.core.truth_(inst_45316)){
var statearr_45554_47742 = state_45362__$1;
(statearr_45554_47742[(1)] = (39));

} else {
var statearr_45556_47743 = state_45362__$1;
(statearr_45556_47743[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (8))){
var inst_45193 = (state_45362[(15)]);
var inst_45192 = (state_45362[(17)]);
var inst_45199 = (inst_45193 < inst_45192);
var inst_45200 = inst_45199;
var state_45362__$1 = state_45362;
if(cljs.core.truth_(inst_45200)){
var statearr_45559_47748 = state_45362__$1;
(statearr_45559_47748[(1)] = (10));

} else {
var statearr_45560_47749 = state_45362__$1;
(statearr_45560_47749[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__44036__auto__ = null;
var cljs$core$async$mult_$_state_machine__44036__auto____0 = (function (){
var statearr_45576 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45576[(0)] = cljs$core$async$mult_$_state_machine__44036__auto__);

(statearr_45576[(1)] = (1));

return statearr_45576;
});
var cljs$core$async$mult_$_state_machine__44036__auto____1 = (function (state_45362){
while(true){
var ret_value__44037__auto__ = (function (){try{while(true){
var result__44038__auto__ = switch__44035__auto__(state_45362);
if(cljs.core.keyword_identical_QMARK_(result__44038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44038__auto__;
}
break;
}
}catch (e45580){var ex__44039__auto__ = e45580;
var statearr_45581_47760 = state_45362;
(statearr_45581_47760[(2)] = ex__44039__auto__);


if(cljs.core.seq((state_45362[(4)]))){
var statearr_45583_47761 = state_45362;
(statearr_45583_47761[(1)] = cljs.core.first((state_45362[(4)])));

} else {
throw ex__44039__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47762 = state_45362;
state_45362 = G__47762;
continue;
} else {
return ret_value__44037__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__44036__auto__ = function(state_45362){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__44036__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__44036__auto____1.call(this,state_45362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__44036__auto____0;
cljs$core$async$mult_$_state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__44036__auto____1;
return cljs$core$async$mult_$_state_machine__44036__auto__;
})()
})();
var state__44114__auto__ = (function (){var statearr_45587 = f__44113__auto__();
(statearr_45587[(6)] = c__44112__auto___47606);

return statearr_45587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44114__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__45601 = arguments.length;
switch (G__45601) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_47768 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_47768(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_47770 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_47770(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_47775 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_47775(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_47778 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_47778(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_47786 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_47786(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___47793 = arguments.length;
var i__4737__auto___47794 = (0);
while(true){
if((i__4737__auto___47794 < len__4736__auto___47793)){
args__4742__auto__.push((arguments[i__4737__auto___47794]));

var G__47795 = (i__4737__auto___47794 + (1));
i__4737__auto___47794 = G__47795;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45627){
var map__45628 = p__45627;
var map__45628__$1 = (((((!((map__45628 == null))))?(((((map__45628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45628):map__45628);
var opts = map__45628__$1;
var statearr_45630_47797 = state;
(statearr_45630_47797[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_45631_47798 = state;
(statearr_45631_47798[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_45632_47799 = state;
(statearr_45632_47799[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45617){
var G__45618 = cljs.core.first(seq45617);
var seq45617__$1 = cljs.core.next(seq45617);
var G__45619 = cljs.core.first(seq45617__$1);
var seq45617__$2 = cljs.core.next(seq45617__$1);
var G__45620 = cljs.core.first(seq45617__$2);
var seq45617__$3 = cljs.core.next(seq45617__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45618,G__45619,G__45620,seq45617__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45637 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45637 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45638){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta45638 = meta45638;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45639,meta45638__$1){
var self__ = this;
var _45639__$1 = this;
return (new cljs.core.async.t_cljs$core$async45637(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45638__$1));
}));

(cljs.core.async.t_cljs$core$async45637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45639){
var self__ = this;
var _45639__$1 = this;
return self__.meta45638;
}));

(cljs.core.async.t_cljs$core$async45637.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45637.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async45637.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45637.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45637.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45637.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45637.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45637.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45637.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta45638","meta45638",-757973906,null)], null);
}));

(cljs.core.async.t_cljs$core$async45637.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45637.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45637");

(cljs.core.async.t_cljs$core$async45637.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45637");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45637.
 */
cljs.core.async.__GT_t_cljs$core$async45637 = (function cljs$core$async$mix_$___GT_t_cljs$core$async45637(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45638){
return (new cljs.core.async.t_cljs$core$async45637(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45638));
});

}

return (new cljs.core.async.t_cljs$core$async45637(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44112__auto___47815 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44113__auto__ = (function (){var switch__44035__auto__ = (function (state_45763){
var state_val_45764 = (state_45763[(1)]);
if((state_val_45764 === (7))){
var inst_45671 = (state_45763[(2)]);
var state_45763__$1 = state_45763;
var statearr_45766_47817 = state_45763__$1;
(statearr_45766_47817[(2)] = inst_45671);

(statearr_45766_47817[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45764 === (20))){
var inst_45683 = (state_45763[(7)]);
var state_45763__$1 = state_45763;
var statearr_45767_47822 = state_45763__$1;
(statearr_45767_47822[(2)] = inst_45683);

(statearr_45767_47822[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45764 === (27))){
var state_45763__$1 = state_45763;
var statearr_45768_47827 = state_45763__$1;
(statearr_45768_47827[(2)] = null);

(statearr_45768_47827[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45764 === (1))){
var inst_45658 = (state_45763[(8)]);
var inst_45658__$1 = calc_state();
var inst_45660 = (inst_45658__$1 == null);
var inst_45661 = cljs.core.not(inst_45660);
var state_45763__$1 = (function (){var statearr_45769 = state_45763;
(statearr_45769[(8)] = inst_45658__$1);

return statearr_45769;
})();
if(inst_45661){
var statearr_45770_47848 = state_45763__$1;
(statearr_45770_47848[(1)] = (2));

} else {
var statearr_45771_47849 = state_45763__$1;
(statearr_45771_47849[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45764 === (24))){
var inst_45719 = (state_45763[(9)]);
var inst_45710 = (state_45763[(10)]);
var inst_45733 = (state_45763[(11)]);
var inst_45733__$1 = (inst_45710.cljs$core$IFn$_invoke$arity$1 ? inst_45710.cljs$core$IFn$_invoke$arity$1(inst_45719) : inst_45710.call(null,inst_45719));
var state_45763__$1 = (function (){var statearr_45772 = state_45763;
(statearr_45772[(11)] = inst_45733__$1);

return statearr_45772;
})();
if(cljs.core.truth_(inst_45733__$1)){
var statearr_45773_47856 = state_45763__$1;
(statearr_45773_47856[(1)] = (29));

} else {
var statearr_45774_47857 = state_45763__$1;
(statearr_45774_47857[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45764 === (4))){
var inst_45674 = (state_45763[(2)]);
var state_45763__$1 = state_45763;
if(cljs.core.truth_(inst_45674)){
var statearr_45775_47862 = state_45763__$1;
(statearr_45775_47862[(1)] = (8));

} else {
var statearr_45779_47863 = state_45763__$1;
(statearr_45779_47863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45764 === (15))){
var inst_45704 = (state_45763[(2)]);
var state_45763__$1 = state_45763;
if(cljs.core.truth_(inst_45704)){
var statearr_45780_47864 = state_45763__$1;
(statearr_45780_47864[(1)] = (19));

} else {
var statearr_45781_47870 = state_45763__$1;
(statearr_45781_47870[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45764 === (21))){
var inst_45709 = (state_45763[(12)]);
var inst_45709__$1 = (state_45763[(2)]);
var inst_45710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45709__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45709__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45709__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45763__$1 = (function (){var statearr_45784 = state_45763;
(statearr_45784[(10)] = inst_45710);

(statearr_45784[(13)] = inst_45711);

(statearr_45784[(12)] = inst_45709__$1);

return statearr_45784;
})();
return cljs.core.async.ioc_alts_BANG_(state_45763__$1,(22),inst_45712);
} else {
if((state_val_45764 === (31))){
var inst_45741 = (state_45763[(2)]);
var state_45763__$1 = state_45763;
if(cljs.core.truth_(inst_45741)){
var statearr_45785_47873 = state_45763__$1;
(statearr_45785_47873[(1)] = (32));

} else {
var statearr_45788_47874 = state_45763__$1;
(statearr_45788_47874[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45764 === (32))){
var inst_45718 = (state_45763[(14)]);
var state_45763__$1 = state_45763;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45763__$1,(35),out,inst_45718);
} else {
if((state_val_45764 === (33))){
var inst_45709 = (state_45763[(12)]);
var inst_45683 = inst_45709;
var state_45763__$1 = (function (){var statearr_45795 = state_45763;
(statearr_45795[(7)] = inst_45683);

return statearr_45795;
})();
var statearr_45796_47876 = state_45763__$1;
(statearr_45796_47876[(2)] = null);

(statearr_45796_47876[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45764 === (13))){
var inst_45683 = (state_45763[(7)]);
var inst_45693 = inst_45683.cljs$lang$protocol_mask$partition0$;
var inst_45694 = (inst_45693 & (64));
var inst_45695 = inst_45683.cljs$core$ISeq$;
var inst_45696 = (cljs.core.PROTOCOL_SENTINEL === inst_45695);
var inst_45697 = ((inst_45694) || (inst_45696));
var state_45763__$1 = state_45763;
if(cljs.core.truth_(inst_45697)){
var statearr_45797_47877 = state_45763__$1;
(statearr_45797_47877[(1)] = (16));

} else {
var statearr_45798_47878 = state_45763__$1;
(statearr_45798_47878[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45764 === (22))){
var inst_45719 = (state_45763[(9)]);
var inst_45718 = (state_45763[(14)]);
var inst_45717 = (state_45763[(2)]);
var inst_45718__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45717,(0),null);
var inst_45719__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45717,(1),null);
var inst_45720 = (inst_45718__$1 == null);
var inst_45721 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45719__$1,change);
var inst_45722 = ((inst_45720) || (inst_45721));
var state_45763__$1 = (function (){var statearr_45803 = state_45763;
(statearr_45803[(9)] = inst_45719__$1);

(statearr_45803[(14)] = inst_45718__$1);

return statearr_45803;
})();
if(cljs.core.truth_(inst_45722)){
var statearr_45804_47884 = state_45763__$1;
(statearr_45804_47884[(1)] = (23));

} else {
var statearr_45805_47885 = state_45763__$1;
(statearr_45805_47885[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45764 === (36))){
var inst_45709 = (state_45763[(12)]);
var inst_45683 = inst_45709;
var state_45763__$1 = (function (){var statearr_45806 = state_45763;
(statearr_45806[(7)] = inst_45683);

return statearr_45806;
})();
var statearr_45807_47888 = state_45763__$1;
(statearr_45807_47888[(2)] = null);

(statearr_45807_47888[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45764 === (29))){
var inst_45733 = (state_45763[(11)]);
var state_45763__$1 = state_45763;
var statearr_45811_47890 = state_45763__$1;
(statearr_45811_47890[(2)] = inst_45733);

(statearr_45811_47890[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45764 === (6))){
var state_45763__$1 = state_45763;
var statearr_45812_47894 = state_45763__$1;
(statearr_45812_47894[(2)] = false);

(statearr_45812_47894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45764 === (28))){
var inst_45729 = (state_45763[(2)]);
var inst_45730 = calc_state();
var inst_45683 = inst_45730;
var state_45763__$1 = (function (){var statearr_45813 = state_45763;
(statearr_45813[(7)] = inst_45683);

(statearr_45813[(15)] = inst_45729);

return statearr_45813;
})();
var statearr_45814_47897 = state_45763__$1;
(statearr_45814_47897[(2)] = null);

(statearr_45814_47897[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45764 === (25))){
var inst_45755 = (state_45763[(2)]);
var state_45763__$1 = state_45763;
var statearr_45815_47901 = state_45763__$1;
(statearr_45815_47901[(2)] = inst_45755);

(statearr_45815_47901[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45764 === (34))){
var inst_45753 = (state_45763[(2)]);
var state_45763__$1 = state_45763;
var statearr_45817_47903 = state_45763__$1;
(statearr_45817_47903[(2)] = inst_45753);

(statearr_45817_47903[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45764 === (17))){
var state_45763__$1 = state_45763;
var statearr_45820_47905 = state_45763__$1;
(statearr_45820_47905[(2)] = false);

(statearr_45820_47905[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45764 === (3))){
var state_45763__$1 = state_45763;
var statearr_45822_47907 = state_45763__$1;
(statearr_45822_47907[(2)] = false);

(statearr_45822_47907[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45764 === (12))){
var inst_45757 = (state_45763[(2)]);
var state_45763__$1 = state_45763;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45763__$1,inst_45757);
} else {
if((state_val_45764 === (2))){
var inst_45658 = (state_45763[(8)]);
var inst_45663 = inst_45658.cljs$lang$protocol_mask$partition0$;
var inst_45664 = (inst_45663 & (64));
var inst_45665 = inst_45658.cljs$core$ISeq$;
var inst_45666 = (cljs.core.PROTOCOL_SENTINEL === inst_45665);
var inst_45667 = ((inst_45664) || (inst_45666));
var state_45763__$1 = state_45763;
if(cljs.core.truth_(inst_45667)){
var statearr_45824_47908 = state_45763__$1;
(statearr_45824_47908[(1)] = (5));

} else {
var statearr_45825_47910 = state_45763__$1;
(statearr_45825_47910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45764 === (23))){
var inst_45718 = (state_45763[(14)]);
var inst_45724 = (inst_45718 == null);
var state_45763__$1 = state_45763;
if(cljs.core.truth_(inst_45724)){
var statearr_45826_47911 = state_45763__$1;
(statearr_45826_47911[(1)] = (26));

} else {
var statearr_45827_47912 = state_45763__$1;
(statearr_45827_47912[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45764 === (35))){
var inst_45744 = (state_45763[(2)]);
var state_45763__$1 = state_45763;
if(cljs.core.truth_(inst_45744)){
var statearr_45828_47916 = state_45763__$1;
(statearr_45828_47916[(1)] = (36));

} else {
var statearr_45829_47917 = state_45763__$1;
(statearr_45829_47917[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45764 === (19))){
var inst_45683 = (state_45763[(7)]);
var inst_45706 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45683);
var state_45763__$1 = state_45763;
var statearr_45834_47918 = state_45763__$1;
(statearr_45834_47918[(2)] = inst_45706);

(statearr_45834_47918[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45764 === (11))){
var inst_45683 = (state_45763[(7)]);
var inst_45689 = (inst_45683 == null);
var inst_45690 = cljs.core.not(inst_45689);
var state_45763__$1 = state_45763;
if(inst_45690){
var statearr_45836_47923 = state_45763__$1;
(statearr_45836_47923[(1)] = (13));

} else {
var statearr_45837_47924 = state_45763__$1;
(statearr_45837_47924[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45764 === (9))){
var inst_45658 = (state_45763[(8)]);
var state_45763__$1 = state_45763;
var statearr_45838_47929 = state_45763__$1;
(statearr_45838_47929[(2)] = inst_45658);

(statearr_45838_47929[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45764 === (5))){
var state_45763__$1 = state_45763;
var statearr_45840_47936 = state_45763__$1;
(statearr_45840_47936[(2)] = true);

(statearr_45840_47936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45764 === (14))){
var state_45763__$1 = state_45763;
var statearr_45841_47937 = state_45763__$1;
(statearr_45841_47937[(2)] = false);

(statearr_45841_47937[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45764 === (26))){
var inst_45719 = (state_45763[(9)]);
var inst_45726 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_45719);
var state_45763__$1 = state_45763;
var statearr_45844_47939 = state_45763__$1;
(statearr_45844_47939[(2)] = inst_45726);

(statearr_45844_47939[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45764 === (16))){
var state_45763__$1 = state_45763;
var statearr_45846_47940 = state_45763__$1;
(statearr_45846_47940[(2)] = true);

(statearr_45846_47940[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45764 === (38))){
var inst_45749 = (state_45763[(2)]);
var state_45763__$1 = state_45763;
var statearr_45847_47950 = state_45763__$1;
(statearr_45847_47950[(2)] = inst_45749);

(statearr_45847_47950[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45764 === (30))){
var inst_45719 = (state_45763[(9)]);
var inst_45710 = (state_45763[(10)]);
var inst_45711 = (state_45763[(13)]);
var inst_45736 = cljs.core.empty_QMARK_(inst_45710);
var inst_45737 = (inst_45711.cljs$core$IFn$_invoke$arity$1 ? inst_45711.cljs$core$IFn$_invoke$arity$1(inst_45719) : inst_45711.call(null,inst_45719));
var inst_45738 = cljs.core.not(inst_45737);
var inst_45739 = ((inst_45736) && (inst_45738));
var state_45763__$1 = state_45763;
var statearr_45849_47956 = state_45763__$1;
(statearr_45849_47956[(2)] = inst_45739);

(statearr_45849_47956[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45764 === (10))){
var inst_45658 = (state_45763[(8)]);
var inst_45679 = (state_45763[(2)]);
var inst_45680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45679,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45681 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45679,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45682 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45679,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45683 = inst_45658;
var state_45763__$1 = (function (){var statearr_45850 = state_45763;
(statearr_45850[(16)] = inst_45682);

(statearr_45850[(7)] = inst_45683);

(statearr_45850[(17)] = inst_45681);

(statearr_45850[(18)] = inst_45680);

return statearr_45850;
})();
var statearr_45851_47965 = state_45763__$1;
(statearr_45851_47965[(2)] = null);

(statearr_45851_47965[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45764 === (18))){
var inst_45701 = (state_45763[(2)]);
var state_45763__$1 = state_45763;
var statearr_45853_47967 = state_45763__$1;
(statearr_45853_47967[(2)] = inst_45701);

(statearr_45853_47967[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45764 === (37))){
var state_45763__$1 = state_45763;
var statearr_45854_47970 = state_45763__$1;
(statearr_45854_47970[(2)] = null);

(statearr_45854_47970[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45764 === (8))){
var inst_45658 = (state_45763[(8)]);
var inst_45676 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45658);
var state_45763__$1 = state_45763;
var statearr_45855_47974 = state_45763__$1;
(statearr_45855_47974[(2)] = inst_45676);

(statearr_45855_47974[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__44036__auto__ = null;
var cljs$core$async$mix_$_state_machine__44036__auto____0 = (function (){
var statearr_45857 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45857[(0)] = cljs$core$async$mix_$_state_machine__44036__auto__);

(statearr_45857[(1)] = (1));

return statearr_45857;
});
var cljs$core$async$mix_$_state_machine__44036__auto____1 = (function (state_45763){
while(true){
var ret_value__44037__auto__ = (function (){try{while(true){
var result__44038__auto__ = switch__44035__auto__(state_45763);
if(cljs.core.keyword_identical_QMARK_(result__44038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44038__auto__;
}
break;
}
}catch (e45858){var ex__44039__auto__ = e45858;
var statearr_45859_47982 = state_45763;
(statearr_45859_47982[(2)] = ex__44039__auto__);


if(cljs.core.seq((state_45763[(4)]))){
var statearr_45860_47987 = state_45763;
(statearr_45860_47987[(1)] = cljs.core.first((state_45763[(4)])));

} else {
throw ex__44039__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47995 = state_45763;
state_45763 = G__47995;
continue;
} else {
return ret_value__44037__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__44036__auto__ = function(state_45763){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__44036__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__44036__auto____1.call(this,state_45763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__44036__auto____0;
cljs$core$async$mix_$_state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__44036__auto____1;
return cljs$core$async$mix_$_state_machine__44036__auto__;
})()
})();
var state__44114__auto__ = (function (){var statearr_45863 = f__44113__auto__();
(statearr_45863[(6)] = c__44112__auto___47815);

return statearr_45863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44114__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_48009 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_48009(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_48015 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_48015(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_48027 = (function() {
var G__48028 = null;
var G__48028__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__48028__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__48028 = function(p,v){
switch(arguments.length){
case 1:
return G__48028__1.call(this,p);
case 2:
return G__48028__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48028.cljs$core$IFn$_invoke$arity$1 = G__48028__1;
G__48028.cljs$core$IFn$_invoke$arity$2 = G__48028__2;
return G__48028;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__45889 = arguments.length;
switch (G__45889) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_48027(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_48027(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__45893 = arguments.length;
switch (G__45893) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__45891_SHARP_){
if(cljs.core.truth_((p1__45891_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45891_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__45891_SHARP_.call(null,topic)))){
return p1__45891_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45891_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45903 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45903 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45904){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45904 = meta45904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45905,meta45904__$1){
var self__ = this;
var _45905__$1 = this;
return (new cljs.core.async.t_cljs$core$async45903(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45904__$1));
}));

(cljs.core.async.t_cljs$core$async45903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45905){
var self__ = this;
var _45905__$1 = this;
return self__.meta45904;
}));

(cljs.core.async.t_cljs$core$async45903.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45903.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45903.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45903.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async45903.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async45903.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async45903.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async45903.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45904","meta45904",2104415370,null)], null);
}));

(cljs.core.async.t_cljs$core$async45903.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45903.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45903");

(cljs.core.async.t_cljs$core$async45903.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async45903");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45903.
 */
cljs.core.async.__GT_t_cljs$core$async45903 = (function cljs$core$async$__GT_t_cljs$core$async45903(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45904){
return (new cljs.core.async.t_cljs$core$async45903(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45904));
});

}

return (new cljs.core.async.t_cljs$core$async45903(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44112__auto___48089 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44113__auto__ = (function (){var switch__44035__auto__ = (function (state_45986){
var state_val_45987 = (state_45986[(1)]);
if((state_val_45987 === (7))){
var inst_45982 = (state_45986[(2)]);
var state_45986__$1 = state_45986;
var statearr_45988_48091 = state_45986__$1;
(statearr_45988_48091[(2)] = inst_45982);

(statearr_45988_48091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45987 === (20))){
var state_45986__$1 = state_45986;
var statearr_45991_48093 = state_45986__$1;
(statearr_45991_48093[(2)] = null);

(statearr_45991_48093[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45987 === (1))){
var state_45986__$1 = state_45986;
var statearr_45992_48096 = state_45986__$1;
(statearr_45992_48096[(2)] = null);

(statearr_45992_48096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45987 === (24))){
var inst_45965 = (state_45986[(7)]);
var inst_45974 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_45965);
var state_45986__$1 = state_45986;
var statearr_45993_48098 = state_45986__$1;
(statearr_45993_48098[(2)] = inst_45974);

(statearr_45993_48098[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45987 === (4))){
var inst_45917 = (state_45986[(8)]);
var inst_45917__$1 = (state_45986[(2)]);
var inst_45918 = (inst_45917__$1 == null);
var state_45986__$1 = (function (){var statearr_45996 = state_45986;
(statearr_45996[(8)] = inst_45917__$1);

return statearr_45996;
})();
if(cljs.core.truth_(inst_45918)){
var statearr_45997_48100 = state_45986__$1;
(statearr_45997_48100[(1)] = (5));

} else {
var statearr_45998_48101 = state_45986__$1;
(statearr_45998_48101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45987 === (15))){
var inst_45959 = (state_45986[(2)]);
var state_45986__$1 = state_45986;
var statearr_46008_48104 = state_45986__$1;
(statearr_46008_48104[(2)] = inst_45959);

(statearr_46008_48104[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45987 === (21))){
var inst_45979 = (state_45986[(2)]);
var state_45986__$1 = (function (){var statearr_46010 = state_45986;
(statearr_46010[(9)] = inst_45979);

return statearr_46010;
})();
var statearr_46011_48112 = state_45986__$1;
(statearr_46011_48112[(2)] = null);

(statearr_46011_48112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45987 === (13))){
var inst_45941 = (state_45986[(10)]);
var inst_45943 = cljs.core.chunked_seq_QMARK_(inst_45941);
var state_45986__$1 = state_45986;
if(inst_45943){
var statearr_46018_48113 = state_45986__$1;
(statearr_46018_48113[(1)] = (16));

} else {
var statearr_46020_48114 = state_45986__$1;
(statearr_46020_48114[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45987 === (22))){
var inst_45971 = (state_45986[(2)]);
var state_45986__$1 = state_45986;
if(cljs.core.truth_(inst_45971)){
var statearr_46022_48116 = state_45986__$1;
(statearr_46022_48116[(1)] = (23));

} else {
var statearr_46024_48117 = state_45986__$1;
(statearr_46024_48117[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45987 === (6))){
var inst_45967 = (state_45986[(11)]);
var inst_45917 = (state_45986[(8)]);
var inst_45965 = (state_45986[(7)]);
var inst_45965__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_45917) : topic_fn.call(null,inst_45917));
var inst_45966 = cljs.core.deref(mults);
var inst_45967__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45966,inst_45965__$1);
var state_45986__$1 = (function (){var statearr_46027 = state_45986;
(statearr_46027[(11)] = inst_45967__$1);

(statearr_46027[(7)] = inst_45965__$1);

return statearr_46027;
})();
if(cljs.core.truth_(inst_45967__$1)){
var statearr_46030_48120 = state_45986__$1;
(statearr_46030_48120[(1)] = (19));

} else {
var statearr_46031_48121 = state_45986__$1;
(statearr_46031_48121[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45987 === (25))){
var inst_45976 = (state_45986[(2)]);
var state_45986__$1 = state_45986;
var statearr_46033_48123 = state_45986__$1;
(statearr_46033_48123[(2)] = inst_45976);

(statearr_46033_48123[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45987 === (17))){
var inst_45941 = (state_45986[(10)]);
var inst_45950 = cljs.core.first(inst_45941);
var inst_45951 = cljs.core.async.muxch_STAR_(inst_45950);
var inst_45952 = cljs.core.async.close_BANG_(inst_45951);
var inst_45953 = cljs.core.next(inst_45941);
var inst_45927 = inst_45953;
var inst_45928 = null;
var inst_45929 = (0);
var inst_45930 = (0);
var state_45986__$1 = (function (){var statearr_46037 = state_45986;
(statearr_46037[(12)] = inst_45930);

(statearr_46037[(13)] = inst_45927);

(statearr_46037[(14)] = inst_45952);

(statearr_46037[(15)] = inst_45929);

(statearr_46037[(16)] = inst_45928);

return statearr_46037;
})();
var statearr_46039_48127 = state_45986__$1;
(statearr_46039_48127[(2)] = null);

(statearr_46039_48127[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45987 === (3))){
var inst_45984 = (state_45986[(2)]);
var state_45986__$1 = state_45986;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45986__$1,inst_45984);
} else {
if((state_val_45987 === (12))){
var inst_45961 = (state_45986[(2)]);
var state_45986__$1 = state_45986;
var statearr_46041_48130 = state_45986__$1;
(statearr_46041_48130[(2)] = inst_45961);

(statearr_46041_48130[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45987 === (2))){
var state_45986__$1 = state_45986;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45986__$1,(4),ch);
} else {
if((state_val_45987 === (23))){
var state_45986__$1 = state_45986;
var statearr_46042_48133 = state_45986__$1;
(statearr_46042_48133[(2)] = null);

(statearr_46042_48133[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45987 === (19))){
var inst_45967 = (state_45986[(11)]);
var inst_45917 = (state_45986[(8)]);
var inst_45969 = cljs.core.async.muxch_STAR_(inst_45967);
var state_45986__$1 = state_45986;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45986__$1,(22),inst_45969,inst_45917);
} else {
if((state_val_45987 === (11))){
var inst_45941 = (state_45986[(10)]);
var inst_45927 = (state_45986[(13)]);
var inst_45941__$1 = cljs.core.seq(inst_45927);
var state_45986__$1 = (function (){var statearr_46047 = state_45986;
(statearr_46047[(10)] = inst_45941__$1);

return statearr_46047;
})();
if(inst_45941__$1){
var statearr_46049_48137 = state_45986__$1;
(statearr_46049_48137[(1)] = (13));

} else {
var statearr_46051_48138 = state_45986__$1;
(statearr_46051_48138[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45987 === (9))){
var inst_45963 = (state_45986[(2)]);
var state_45986__$1 = state_45986;
var statearr_46056_48140 = state_45986__$1;
(statearr_46056_48140[(2)] = inst_45963);

(statearr_46056_48140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45987 === (5))){
var inst_45924 = cljs.core.deref(mults);
var inst_45925 = cljs.core.vals(inst_45924);
var inst_45926 = cljs.core.seq(inst_45925);
var inst_45927 = inst_45926;
var inst_45928 = null;
var inst_45929 = (0);
var inst_45930 = (0);
var state_45986__$1 = (function (){var statearr_46059 = state_45986;
(statearr_46059[(12)] = inst_45930);

(statearr_46059[(13)] = inst_45927);

(statearr_46059[(15)] = inst_45929);

(statearr_46059[(16)] = inst_45928);

return statearr_46059;
})();
var statearr_46060_48146 = state_45986__$1;
(statearr_46060_48146[(2)] = null);

(statearr_46060_48146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45987 === (14))){
var state_45986__$1 = state_45986;
var statearr_46066_48151 = state_45986__$1;
(statearr_46066_48151[(2)] = null);

(statearr_46066_48151[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45987 === (16))){
var inst_45941 = (state_45986[(10)]);
var inst_45945 = cljs.core.chunk_first(inst_45941);
var inst_45946 = cljs.core.chunk_rest(inst_45941);
var inst_45947 = cljs.core.count(inst_45945);
var inst_45927 = inst_45946;
var inst_45928 = inst_45945;
var inst_45929 = inst_45947;
var inst_45930 = (0);
var state_45986__$1 = (function (){var statearr_46068 = state_45986;
(statearr_46068[(12)] = inst_45930);

(statearr_46068[(13)] = inst_45927);

(statearr_46068[(15)] = inst_45929);

(statearr_46068[(16)] = inst_45928);

return statearr_46068;
})();
var statearr_46069_48160 = state_45986__$1;
(statearr_46069_48160[(2)] = null);

(statearr_46069_48160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45987 === (10))){
var inst_45930 = (state_45986[(12)]);
var inst_45927 = (state_45986[(13)]);
var inst_45929 = (state_45986[(15)]);
var inst_45928 = (state_45986[(16)]);
var inst_45935 = cljs.core._nth(inst_45928,inst_45930);
var inst_45936 = cljs.core.async.muxch_STAR_(inst_45935);
var inst_45937 = cljs.core.async.close_BANG_(inst_45936);
var inst_45938 = (inst_45930 + (1));
var tmp46063 = inst_45927;
var tmp46064 = inst_45929;
var tmp46065 = inst_45928;
var inst_45927__$1 = tmp46063;
var inst_45928__$1 = tmp46065;
var inst_45929__$1 = tmp46064;
var inst_45930__$1 = inst_45938;
var state_45986__$1 = (function (){var statearr_46070 = state_45986;
(statearr_46070[(12)] = inst_45930__$1);

(statearr_46070[(13)] = inst_45927__$1);

(statearr_46070[(17)] = inst_45937);

(statearr_46070[(15)] = inst_45929__$1);

(statearr_46070[(16)] = inst_45928__$1);

return statearr_46070;
})();
var statearr_46071_48189 = state_45986__$1;
(statearr_46071_48189[(2)] = null);

(statearr_46071_48189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45987 === (18))){
var inst_45956 = (state_45986[(2)]);
var state_45986__$1 = state_45986;
var statearr_46072_48191 = state_45986__$1;
(statearr_46072_48191[(2)] = inst_45956);

(statearr_46072_48191[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45987 === (8))){
var inst_45930 = (state_45986[(12)]);
var inst_45929 = (state_45986[(15)]);
var inst_45932 = (inst_45930 < inst_45929);
var inst_45933 = inst_45932;
var state_45986__$1 = state_45986;
if(cljs.core.truth_(inst_45933)){
var statearr_46077_48199 = state_45986__$1;
(statearr_46077_48199[(1)] = (10));

} else {
var statearr_46078_48202 = state_45986__$1;
(statearr_46078_48202[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44036__auto__ = null;
var cljs$core$async$state_machine__44036__auto____0 = (function (){
var statearr_46080 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46080[(0)] = cljs$core$async$state_machine__44036__auto__);

(statearr_46080[(1)] = (1));

return statearr_46080;
});
var cljs$core$async$state_machine__44036__auto____1 = (function (state_45986){
while(true){
var ret_value__44037__auto__ = (function (){try{while(true){
var result__44038__auto__ = switch__44035__auto__(state_45986);
if(cljs.core.keyword_identical_QMARK_(result__44038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44038__auto__;
}
break;
}
}catch (e46081){var ex__44039__auto__ = e46081;
var statearr_46082_48211 = state_45986;
(statearr_46082_48211[(2)] = ex__44039__auto__);


if(cljs.core.seq((state_45986[(4)]))){
var statearr_46083_48216 = state_45986;
(statearr_46083_48216[(1)] = cljs.core.first((state_45986[(4)])));

} else {
throw ex__44039__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48220 = state_45986;
state_45986 = G__48220;
continue;
} else {
return ret_value__44037__auto__;
}
break;
}
});
cljs$core$async$state_machine__44036__auto__ = function(state_45986){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44036__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44036__auto____1.call(this,state_45986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44036__auto____0;
cljs$core$async$state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44036__auto____1;
return cljs$core$async$state_machine__44036__auto__;
})()
})();
var state__44114__auto__ = (function (){var statearr_46086 = f__44113__auto__();
(statearr_46086[(6)] = c__44112__auto___48089);

return statearr_46086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44114__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__46093 = arguments.length;
switch (G__46093) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__46105 = arguments.length;
switch (G__46105) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__46118 = arguments.length;
switch (G__46118) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__44112__auto___48254 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44113__auto__ = (function (){var switch__44035__auto__ = (function (state_46178){
var state_val_46179 = (state_46178[(1)]);
if((state_val_46179 === (7))){
var state_46178__$1 = state_46178;
var statearr_46185_48261 = state_46178__$1;
(statearr_46185_48261[(2)] = null);

(statearr_46185_48261[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46179 === (1))){
var state_46178__$1 = state_46178;
var statearr_46186_48262 = state_46178__$1;
(statearr_46186_48262[(2)] = null);

(statearr_46186_48262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46179 === (4))){
var inst_46133 = (state_46178[(7)]);
var inst_46136 = (state_46178[(8)]);
var inst_46140 = (inst_46136 < inst_46133);
var state_46178__$1 = state_46178;
if(cljs.core.truth_(inst_46140)){
var statearr_46191_48268 = state_46178__$1;
(statearr_46191_48268[(1)] = (6));

} else {
var statearr_46193_48269 = state_46178__$1;
(statearr_46193_48269[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46179 === (15))){
var inst_46164 = (state_46178[(9)]);
var inst_46169 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_46164);
var state_46178__$1 = state_46178;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46178__$1,(17),out,inst_46169);
} else {
if((state_val_46179 === (13))){
var inst_46164 = (state_46178[(9)]);
var inst_46164__$1 = (state_46178[(2)]);
var inst_46165 = cljs.core.some(cljs.core.nil_QMARK_,inst_46164__$1);
var state_46178__$1 = (function (){var statearr_46196 = state_46178;
(statearr_46196[(9)] = inst_46164__$1);

return statearr_46196;
})();
if(cljs.core.truth_(inst_46165)){
var statearr_46197_48278 = state_46178__$1;
(statearr_46197_48278[(1)] = (14));

} else {
var statearr_46198_48279 = state_46178__$1;
(statearr_46198_48279[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46179 === (6))){
var state_46178__$1 = state_46178;
var statearr_46199_48281 = state_46178__$1;
(statearr_46199_48281[(2)] = null);

(statearr_46199_48281[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46179 === (17))){
var inst_46171 = (state_46178[(2)]);
var state_46178__$1 = (function (){var statearr_46207 = state_46178;
(statearr_46207[(10)] = inst_46171);

return statearr_46207;
})();
var statearr_46209_48283 = state_46178__$1;
(statearr_46209_48283[(2)] = null);

(statearr_46209_48283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46179 === (3))){
var inst_46176 = (state_46178[(2)]);
var state_46178__$1 = state_46178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46178__$1,inst_46176);
} else {
if((state_val_46179 === (12))){
var _ = (function (){var statearr_46213 = state_46178;
(statearr_46213[(4)] = cljs.core.rest((state_46178[(4)])));

return statearr_46213;
})();
var state_46178__$1 = state_46178;
var ex46206 = (state_46178__$1[(2)]);
var statearr_46216_48290 = state_46178__$1;
(statearr_46216_48290[(5)] = ex46206);


if((ex46206 instanceof Object)){
var statearr_46222_48291 = state_46178__$1;
(statearr_46222_48291[(1)] = (11));

(statearr_46222_48291[(5)] = null);

} else {
throw ex46206;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46179 === (2))){
var inst_46130 = cljs.core.reset_BANG_(dctr,cnt);
var inst_46133 = cnt;
var inst_46136 = (0);
var state_46178__$1 = (function (){var statearr_46223 = state_46178;
(statearr_46223[(11)] = inst_46130);

(statearr_46223[(7)] = inst_46133);

(statearr_46223[(8)] = inst_46136);

return statearr_46223;
})();
var statearr_46225_48294 = state_46178__$1;
(statearr_46225_48294[(2)] = null);

(statearr_46225_48294[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46179 === (11))){
var inst_46143 = (state_46178[(2)]);
var inst_46144 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_46178__$1 = (function (){var statearr_46228 = state_46178;
(statearr_46228[(12)] = inst_46143);

return statearr_46228;
})();
var statearr_46232_48303 = state_46178__$1;
(statearr_46232_48303[(2)] = inst_46144);

(statearr_46232_48303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46179 === (9))){
var inst_46136 = (state_46178[(8)]);
var _ = (function (){var statearr_46234 = state_46178;
(statearr_46234[(4)] = cljs.core.cons((12),(state_46178[(4)])));

return statearr_46234;
})();
var inst_46150 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_46136) : chs__$1.call(null,inst_46136));
var inst_46151 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_46136) : done.call(null,inst_46136));
var inst_46152 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_46150,inst_46151);
var ___$1 = (function (){var statearr_46238 = state_46178;
(statearr_46238[(4)] = cljs.core.rest((state_46178[(4)])));

return statearr_46238;
})();
var state_46178__$1 = state_46178;
var statearr_46239_48312 = state_46178__$1;
(statearr_46239_48312[(2)] = inst_46152);

(statearr_46239_48312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46179 === (5))){
var inst_46162 = (state_46178[(2)]);
var state_46178__$1 = (function (){var statearr_46241 = state_46178;
(statearr_46241[(13)] = inst_46162);

return statearr_46241;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46178__$1,(13),dchan);
} else {
if((state_val_46179 === (14))){
var inst_46167 = cljs.core.async.close_BANG_(out);
var state_46178__$1 = state_46178;
var statearr_46243_48326 = state_46178__$1;
(statearr_46243_48326[(2)] = inst_46167);

(statearr_46243_48326[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46179 === (16))){
var inst_46174 = (state_46178[(2)]);
var state_46178__$1 = state_46178;
var statearr_46245_48331 = state_46178__$1;
(statearr_46245_48331[(2)] = inst_46174);

(statearr_46245_48331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46179 === (10))){
var inst_46136 = (state_46178[(8)]);
var inst_46155 = (state_46178[(2)]);
var inst_46156 = (inst_46136 + (1));
var inst_46136__$1 = inst_46156;
var state_46178__$1 = (function (){var statearr_46248 = state_46178;
(statearr_46248[(8)] = inst_46136__$1);

(statearr_46248[(14)] = inst_46155);

return statearr_46248;
})();
var statearr_46250_48333 = state_46178__$1;
(statearr_46250_48333[(2)] = null);

(statearr_46250_48333[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46179 === (8))){
var inst_46160 = (state_46178[(2)]);
var state_46178__$1 = state_46178;
var statearr_46251_48338 = state_46178__$1;
(statearr_46251_48338[(2)] = inst_46160);

(statearr_46251_48338[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44036__auto__ = null;
var cljs$core$async$state_machine__44036__auto____0 = (function (){
var statearr_46253 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46253[(0)] = cljs$core$async$state_machine__44036__auto__);

(statearr_46253[(1)] = (1));

return statearr_46253;
});
var cljs$core$async$state_machine__44036__auto____1 = (function (state_46178){
while(true){
var ret_value__44037__auto__ = (function (){try{while(true){
var result__44038__auto__ = switch__44035__auto__(state_46178);
if(cljs.core.keyword_identical_QMARK_(result__44038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44038__auto__;
}
break;
}
}catch (e46254){var ex__44039__auto__ = e46254;
var statearr_46255_48343 = state_46178;
(statearr_46255_48343[(2)] = ex__44039__auto__);


if(cljs.core.seq((state_46178[(4)]))){
var statearr_46256_48346 = state_46178;
(statearr_46256_48346[(1)] = cljs.core.first((state_46178[(4)])));

} else {
throw ex__44039__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48349 = state_46178;
state_46178 = G__48349;
continue;
} else {
return ret_value__44037__auto__;
}
break;
}
});
cljs$core$async$state_machine__44036__auto__ = function(state_46178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44036__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44036__auto____1.call(this,state_46178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44036__auto____0;
cljs$core$async$state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44036__auto____1;
return cljs$core$async$state_machine__44036__auto__;
})()
})();
var state__44114__auto__ = (function (){var statearr_46257 = f__44113__auto__();
(statearr_46257[(6)] = c__44112__auto___48254);

return statearr_46257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44114__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__46264 = arguments.length;
switch (G__46264) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44112__auto___48370 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44113__auto__ = (function (){var switch__44035__auto__ = (function (state_46298){
var state_val_46300 = (state_46298[(1)]);
if((state_val_46300 === (7))){
var inst_46276 = (state_46298[(7)]);
var inst_46277 = (state_46298[(8)]);
var inst_46276__$1 = (state_46298[(2)]);
var inst_46277__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46276__$1,(0),null);
var inst_46278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46276__$1,(1),null);
var inst_46279 = (inst_46277__$1 == null);
var state_46298__$1 = (function (){var statearr_46306 = state_46298;
(statearr_46306[(9)] = inst_46278);

(statearr_46306[(7)] = inst_46276__$1);

(statearr_46306[(8)] = inst_46277__$1);

return statearr_46306;
})();
if(cljs.core.truth_(inst_46279)){
var statearr_46307_48392 = state_46298__$1;
(statearr_46307_48392[(1)] = (8));

} else {
var statearr_46308_48393 = state_46298__$1;
(statearr_46308_48393[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46300 === (1))){
var inst_46265 = cljs.core.vec(chs);
var inst_46266 = inst_46265;
var state_46298__$1 = (function (){var statearr_46309 = state_46298;
(statearr_46309[(10)] = inst_46266);

return statearr_46309;
})();
var statearr_46310_48398 = state_46298__$1;
(statearr_46310_48398[(2)] = null);

(statearr_46310_48398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46300 === (4))){
var inst_46266 = (state_46298[(10)]);
var state_46298__$1 = state_46298;
return cljs.core.async.ioc_alts_BANG_(state_46298__$1,(7),inst_46266);
} else {
if((state_val_46300 === (6))){
var inst_46293 = (state_46298[(2)]);
var state_46298__$1 = state_46298;
var statearr_46314_48402 = state_46298__$1;
(statearr_46314_48402[(2)] = inst_46293);

(statearr_46314_48402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46300 === (3))){
var inst_46295 = (state_46298[(2)]);
var state_46298__$1 = state_46298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46298__$1,inst_46295);
} else {
if((state_val_46300 === (2))){
var inst_46266 = (state_46298[(10)]);
var inst_46269 = cljs.core.count(inst_46266);
var inst_46270 = (inst_46269 > (0));
var state_46298__$1 = state_46298;
if(cljs.core.truth_(inst_46270)){
var statearr_46321_48412 = state_46298__$1;
(statearr_46321_48412[(1)] = (4));

} else {
var statearr_46322_48415 = state_46298__$1;
(statearr_46322_48415[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46300 === (11))){
var inst_46266 = (state_46298[(10)]);
var inst_46286 = (state_46298[(2)]);
var tmp46315 = inst_46266;
var inst_46266__$1 = tmp46315;
var state_46298__$1 = (function (){var statearr_46323 = state_46298;
(statearr_46323[(10)] = inst_46266__$1);

(statearr_46323[(11)] = inst_46286);

return statearr_46323;
})();
var statearr_46324_48423 = state_46298__$1;
(statearr_46324_48423[(2)] = null);

(statearr_46324_48423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46300 === (9))){
var inst_46277 = (state_46298[(8)]);
var state_46298__$1 = state_46298;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46298__$1,(11),out,inst_46277);
} else {
if((state_val_46300 === (5))){
var inst_46291 = cljs.core.async.close_BANG_(out);
var state_46298__$1 = state_46298;
var statearr_46331_48437 = state_46298__$1;
(statearr_46331_48437[(2)] = inst_46291);

(statearr_46331_48437[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46300 === (10))){
var inst_46289 = (state_46298[(2)]);
var state_46298__$1 = state_46298;
var statearr_46332_48441 = state_46298__$1;
(statearr_46332_48441[(2)] = inst_46289);

(statearr_46332_48441[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46300 === (8))){
var inst_46266 = (state_46298[(10)]);
var inst_46278 = (state_46298[(9)]);
var inst_46276 = (state_46298[(7)]);
var inst_46277 = (state_46298[(8)]);
var inst_46281 = (function (){var cs = inst_46266;
var vec__46272 = inst_46276;
var v = inst_46277;
var c = inst_46278;
return (function (p1__46261_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__46261_SHARP_);
});
})();
var inst_46282 = cljs.core.filterv(inst_46281,inst_46266);
var inst_46266__$1 = inst_46282;
var state_46298__$1 = (function (){var statearr_46341 = state_46298;
(statearr_46341[(10)] = inst_46266__$1);

return statearr_46341;
})();
var statearr_46342_48457 = state_46298__$1;
(statearr_46342_48457[(2)] = null);

(statearr_46342_48457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44036__auto__ = null;
var cljs$core$async$state_machine__44036__auto____0 = (function (){
var statearr_46350 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46350[(0)] = cljs$core$async$state_machine__44036__auto__);

(statearr_46350[(1)] = (1));

return statearr_46350;
});
var cljs$core$async$state_machine__44036__auto____1 = (function (state_46298){
while(true){
var ret_value__44037__auto__ = (function (){try{while(true){
var result__44038__auto__ = switch__44035__auto__(state_46298);
if(cljs.core.keyword_identical_QMARK_(result__44038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44038__auto__;
}
break;
}
}catch (e46355){var ex__44039__auto__ = e46355;
var statearr_46359_48466 = state_46298;
(statearr_46359_48466[(2)] = ex__44039__auto__);


if(cljs.core.seq((state_46298[(4)]))){
var statearr_46360_48467 = state_46298;
(statearr_46360_48467[(1)] = cljs.core.first((state_46298[(4)])));

} else {
throw ex__44039__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48475 = state_46298;
state_46298 = G__48475;
continue;
} else {
return ret_value__44037__auto__;
}
break;
}
});
cljs$core$async$state_machine__44036__auto__ = function(state_46298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44036__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44036__auto____1.call(this,state_46298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44036__auto____0;
cljs$core$async$state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44036__auto____1;
return cljs$core$async$state_machine__44036__auto__;
})()
})();
var state__44114__auto__ = (function (){var statearr_46361 = f__44113__auto__();
(statearr_46361[(6)] = c__44112__auto___48370);

return statearr_46361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44114__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__46371 = arguments.length;
switch (G__46371) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44112__auto___48491 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44113__auto__ = (function (){var switch__44035__auto__ = (function (state_46396){
var state_val_46397 = (state_46396[(1)]);
if((state_val_46397 === (7))){
var inst_46377 = (state_46396[(7)]);
var inst_46377__$1 = (state_46396[(2)]);
var inst_46378 = (inst_46377__$1 == null);
var inst_46379 = cljs.core.not(inst_46378);
var state_46396__$1 = (function (){var statearr_46401 = state_46396;
(statearr_46401[(7)] = inst_46377__$1);

return statearr_46401;
})();
if(inst_46379){
var statearr_46402_48498 = state_46396__$1;
(statearr_46402_48498[(1)] = (8));

} else {
var statearr_46403_48503 = state_46396__$1;
(statearr_46403_48503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46397 === (1))){
var inst_46372 = (0);
var state_46396__$1 = (function (){var statearr_46404 = state_46396;
(statearr_46404[(8)] = inst_46372);

return statearr_46404;
})();
var statearr_46405_48507 = state_46396__$1;
(statearr_46405_48507[(2)] = null);

(statearr_46405_48507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46397 === (4))){
var state_46396__$1 = state_46396;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46396__$1,(7),ch);
} else {
if((state_val_46397 === (6))){
var inst_46390 = (state_46396[(2)]);
var state_46396__$1 = state_46396;
var statearr_46406_48511 = state_46396__$1;
(statearr_46406_48511[(2)] = inst_46390);

(statearr_46406_48511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46397 === (3))){
var inst_46392 = (state_46396[(2)]);
var inst_46393 = cljs.core.async.close_BANG_(out);
var state_46396__$1 = (function (){var statearr_46407 = state_46396;
(statearr_46407[(9)] = inst_46392);

return statearr_46407;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46396__$1,inst_46393);
} else {
if((state_val_46397 === (2))){
var inst_46372 = (state_46396[(8)]);
var inst_46374 = (inst_46372 < n);
var state_46396__$1 = state_46396;
if(cljs.core.truth_(inst_46374)){
var statearr_46409_48518 = state_46396__$1;
(statearr_46409_48518[(1)] = (4));

} else {
var statearr_46412_48519 = state_46396__$1;
(statearr_46412_48519[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46397 === (11))){
var inst_46372 = (state_46396[(8)]);
var inst_46382 = (state_46396[(2)]);
var inst_46383 = (inst_46372 + (1));
var inst_46372__$1 = inst_46383;
var state_46396__$1 = (function (){var statearr_46413 = state_46396;
(statearr_46413[(8)] = inst_46372__$1);

(statearr_46413[(10)] = inst_46382);

return statearr_46413;
})();
var statearr_46414_48524 = state_46396__$1;
(statearr_46414_48524[(2)] = null);

(statearr_46414_48524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46397 === (9))){
var state_46396__$1 = state_46396;
var statearr_46416_48525 = state_46396__$1;
(statearr_46416_48525[(2)] = null);

(statearr_46416_48525[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46397 === (5))){
var state_46396__$1 = state_46396;
var statearr_46418_48529 = state_46396__$1;
(statearr_46418_48529[(2)] = null);

(statearr_46418_48529[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46397 === (10))){
var inst_46387 = (state_46396[(2)]);
var state_46396__$1 = state_46396;
var statearr_46419_48531 = state_46396__$1;
(statearr_46419_48531[(2)] = inst_46387);

(statearr_46419_48531[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46397 === (8))){
var inst_46377 = (state_46396[(7)]);
var state_46396__$1 = state_46396;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46396__$1,(11),out,inst_46377);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44036__auto__ = null;
var cljs$core$async$state_machine__44036__auto____0 = (function (){
var statearr_46425 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46425[(0)] = cljs$core$async$state_machine__44036__auto__);

(statearr_46425[(1)] = (1));

return statearr_46425;
});
var cljs$core$async$state_machine__44036__auto____1 = (function (state_46396){
while(true){
var ret_value__44037__auto__ = (function (){try{while(true){
var result__44038__auto__ = switch__44035__auto__(state_46396);
if(cljs.core.keyword_identical_QMARK_(result__44038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44038__auto__;
}
break;
}
}catch (e46428){var ex__44039__auto__ = e46428;
var statearr_46430_48542 = state_46396;
(statearr_46430_48542[(2)] = ex__44039__auto__);


if(cljs.core.seq((state_46396[(4)]))){
var statearr_46434_48543 = state_46396;
(statearr_46434_48543[(1)] = cljs.core.first((state_46396[(4)])));

} else {
throw ex__44039__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48547 = state_46396;
state_46396 = G__48547;
continue;
} else {
return ret_value__44037__auto__;
}
break;
}
});
cljs$core$async$state_machine__44036__auto__ = function(state_46396){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44036__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44036__auto____1.call(this,state_46396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44036__auto____0;
cljs$core$async$state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44036__auto____1;
return cljs$core$async$state_machine__44036__auto__;
})()
})();
var state__44114__auto__ = (function (){var statearr_46435 = f__44113__auto__();
(statearr_46435[(6)] = c__44112__auto___48491);

return statearr_46435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44114__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46443 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46443 = (function (f,ch,meta46444){
this.f = f;
this.ch = ch;
this.meta46444 = meta46444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46445,meta46444__$1){
var self__ = this;
var _46445__$1 = this;
return (new cljs.core.async.t_cljs$core$async46443(self__.f,self__.ch,meta46444__$1));
}));

(cljs.core.async.t_cljs$core$async46443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46445){
var self__ = this;
var _46445__$1 = this;
return self__.meta46444;
}));

(cljs.core.async.t_cljs$core$async46443.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46443.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46443.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46443.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46443.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46459 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46459 = (function (f,ch,meta46444,_,fn1,meta46460){
this.f = f;
this.ch = ch;
this.meta46444 = meta46444;
this._ = _;
this.fn1 = fn1;
this.meta46460 = meta46460;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46461,meta46460__$1){
var self__ = this;
var _46461__$1 = this;
return (new cljs.core.async.t_cljs$core$async46459(self__.f,self__.ch,self__.meta46444,self__._,self__.fn1,meta46460__$1));
}));

(cljs.core.async.t_cljs$core$async46459.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46461){
var self__ = this;
var _46461__$1 = this;
return self__.meta46460;
}));

(cljs.core.async.t_cljs$core$async46459.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46459.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async46459.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46459.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__46440_SHARP_){
var G__46472 = (((p1__46440_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__46440_SHARP_) : self__.f.call(null,p1__46440_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__46472) : f1.call(null,G__46472));
});
}));

(cljs.core.async.t_cljs$core$async46459.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46444","meta46444",1533396293,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46443","cljs.core.async/t_cljs$core$async46443",-2079914218,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46460","meta46460",375906038,null)], null);
}));

(cljs.core.async.t_cljs$core$async46459.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46459.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46459");

(cljs.core.async.t_cljs$core$async46459.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46459");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46459.
 */
cljs.core.async.__GT_t_cljs$core$async46459 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46459(f__$1,ch__$1,meta46444__$1,___$2,fn1__$1,meta46460){
return (new cljs.core.async.t_cljs$core$async46459(f__$1,ch__$1,meta46444__$1,___$2,fn1__$1,meta46460));
});

}

return (new cljs.core.async.t_cljs$core$async46459(self__.f,self__.ch,self__.meta46444,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__46491 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__46491) : self__.f.call(null,G__46491));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async46443.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46443.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async46443.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46444","meta46444",1533396293,null)], null);
}));

(cljs.core.async.t_cljs$core$async46443.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46443.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46443");

(cljs.core.async.t_cljs$core$async46443.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46443");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46443.
 */
cljs.core.async.__GT_t_cljs$core$async46443 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46443(f__$1,ch__$1,meta46444){
return (new cljs.core.async.t_cljs$core$async46443(f__$1,ch__$1,meta46444));
});

}

return (new cljs.core.async.t_cljs$core$async46443(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46512 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46512 = (function (f,ch,meta46513){
this.f = f;
this.ch = ch;
this.meta46513 = meta46513;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46514,meta46513__$1){
var self__ = this;
var _46514__$1 = this;
return (new cljs.core.async.t_cljs$core$async46512(self__.f,self__.ch,meta46513__$1));
}));

(cljs.core.async.t_cljs$core$async46512.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46514){
var self__ = this;
var _46514__$1 = this;
return self__.meta46513;
}));

(cljs.core.async.t_cljs$core$async46512.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46512.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46512.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46512.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46512.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46512.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async46512.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46513","meta46513",-1391333588,null)], null);
}));

(cljs.core.async.t_cljs$core$async46512.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46512.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46512");

(cljs.core.async.t_cljs$core$async46512.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46512");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46512.
 */
cljs.core.async.__GT_t_cljs$core$async46512 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46512(f__$1,ch__$1,meta46513){
return (new cljs.core.async.t_cljs$core$async46512(f__$1,ch__$1,meta46513));
});

}

return (new cljs.core.async.t_cljs$core$async46512(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46531 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46531 = (function (p,ch,meta46532){
this.p = p;
this.ch = ch;
this.meta46532 = meta46532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46533,meta46532__$1){
var self__ = this;
var _46533__$1 = this;
return (new cljs.core.async.t_cljs$core$async46531(self__.p,self__.ch,meta46532__$1));
}));

(cljs.core.async.t_cljs$core$async46531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46533){
var self__ = this;
var _46533__$1 = this;
return self__.meta46532;
}));

(cljs.core.async.t_cljs$core$async46531.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46531.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46531.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46531.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46531.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46531.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46531.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async46531.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46532","meta46532",450425117,null)], null);
}));

(cljs.core.async.t_cljs$core$async46531.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46531.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46531");

(cljs.core.async.t_cljs$core$async46531.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async46531");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46531.
 */
cljs.core.async.__GT_t_cljs$core$async46531 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46531(p__$1,ch__$1,meta46532){
return (new cljs.core.async.t_cljs$core$async46531(p__$1,ch__$1,meta46532));
});

}

return (new cljs.core.async.t_cljs$core$async46531(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__46571 = arguments.length;
switch (G__46571) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44112__auto___48675 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44113__auto__ = (function (){var switch__44035__auto__ = (function (state_46600){
var state_val_46603 = (state_46600[(1)]);
if((state_val_46603 === (7))){
var inst_46595 = (state_46600[(2)]);
var state_46600__$1 = state_46600;
var statearr_46608_48681 = state_46600__$1;
(statearr_46608_48681[(2)] = inst_46595);

(statearr_46608_48681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46603 === (1))){
var state_46600__$1 = state_46600;
var statearr_46610_48682 = state_46600__$1;
(statearr_46610_48682[(2)] = null);

(statearr_46610_48682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46603 === (4))){
var inst_46578 = (state_46600[(7)]);
var inst_46578__$1 = (state_46600[(2)]);
var inst_46579 = (inst_46578__$1 == null);
var state_46600__$1 = (function (){var statearr_46611 = state_46600;
(statearr_46611[(7)] = inst_46578__$1);

return statearr_46611;
})();
if(cljs.core.truth_(inst_46579)){
var statearr_46612_48693 = state_46600__$1;
(statearr_46612_48693[(1)] = (5));

} else {
var statearr_46613_48695 = state_46600__$1;
(statearr_46613_48695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46603 === (6))){
var inst_46578 = (state_46600[(7)]);
var inst_46584 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46578) : p.call(null,inst_46578));
var state_46600__$1 = state_46600;
if(cljs.core.truth_(inst_46584)){
var statearr_46620_48703 = state_46600__$1;
(statearr_46620_48703[(1)] = (8));

} else {
var statearr_46624_48705 = state_46600__$1;
(statearr_46624_48705[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46603 === (3))){
var inst_46598 = (state_46600[(2)]);
var state_46600__$1 = state_46600;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46600__$1,inst_46598);
} else {
if((state_val_46603 === (2))){
var state_46600__$1 = state_46600;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46600__$1,(4),ch);
} else {
if((state_val_46603 === (11))){
var inst_46588 = (state_46600[(2)]);
var state_46600__$1 = state_46600;
var statearr_46633_48713 = state_46600__$1;
(statearr_46633_48713[(2)] = inst_46588);

(statearr_46633_48713[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46603 === (9))){
var state_46600__$1 = state_46600;
var statearr_46634_48720 = state_46600__$1;
(statearr_46634_48720[(2)] = null);

(statearr_46634_48720[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46603 === (5))){
var inst_46581 = cljs.core.async.close_BANG_(out);
var state_46600__$1 = state_46600;
var statearr_46635_48728 = state_46600__$1;
(statearr_46635_48728[(2)] = inst_46581);

(statearr_46635_48728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46603 === (10))){
var inst_46591 = (state_46600[(2)]);
var state_46600__$1 = (function (){var statearr_46636 = state_46600;
(statearr_46636[(8)] = inst_46591);

return statearr_46636;
})();
var statearr_46637_48736 = state_46600__$1;
(statearr_46637_48736[(2)] = null);

(statearr_46637_48736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46603 === (8))){
var inst_46578 = (state_46600[(7)]);
var state_46600__$1 = state_46600;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46600__$1,(11),out,inst_46578);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44036__auto__ = null;
var cljs$core$async$state_machine__44036__auto____0 = (function (){
var statearr_46639 = [null,null,null,null,null,null,null,null,null];
(statearr_46639[(0)] = cljs$core$async$state_machine__44036__auto__);

(statearr_46639[(1)] = (1));

return statearr_46639;
});
var cljs$core$async$state_machine__44036__auto____1 = (function (state_46600){
while(true){
var ret_value__44037__auto__ = (function (){try{while(true){
var result__44038__auto__ = switch__44035__auto__(state_46600);
if(cljs.core.keyword_identical_QMARK_(result__44038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44038__auto__;
}
break;
}
}catch (e46640){var ex__44039__auto__ = e46640;
var statearr_46648_48744 = state_46600;
(statearr_46648_48744[(2)] = ex__44039__auto__);


if(cljs.core.seq((state_46600[(4)]))){
var statearr_46650_48746 = state_46600;
(statearr_46650_48746[(1)] = cljs.core.first((state_46600[(4)])));

} else {
throw ex__44039__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48748 = state_46600;
state_46600 = G__48748;
continue;
} else {
return ret_value__44037__auto__;
}
break;
}
});
cljs$core$async$state_machine__44036__auto__ = function(state_46600){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44036__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44036__auto____1.call(this,state_46600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44036__auto____0;
cljs$core$async$state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44036__auto____1;
return cljs$core$async$state_machine__44036__auto__;
})()
})();
var state__44114__auto__ = (function (){var statearr_46658 = f__44113__auto__();
(statearr_46658[(6)] = c__44112__auto___48675);

return statearr_46658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44114__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__46663 = arguments.length;
switch (G__46663) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__44112__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44113__auto__ = (function (){var switch__44035__auto__ = (function (state_46743){
var state_val_46744 = (state_46743[(1)]);
if((state_val_46744 === (7))){
var inst_46739 = (state_46743[(2)]);
var state_46743__$1 = state_46743;
var statearr_46748_48753 = state_46743__$1;
(statearr_46748_48753[(2)] = inst_46739);

(statearr_46748_48753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (20))){
var inst_46704 = (state_46743[(7)]);
var inst_46718 = (state_46743[(2)]);
var inst_46719 = cljs.core.next(inst_46704);
var inst_46688 = inst_46719;
var inst_46689 = null;
var inst_46690 = (0);
var inst_46691 = (0);
var state_46743__$1 = (function (){var statearr_46750 = state_46743;
(statearr_46750[(8)] = inst_46688);

(statearr_46750[(9)] = inst_46718);

(statearr_46750[(10)] = inst_46690);

(statearr_46750[(11)] = inst_46689);

(statearr_46750[(12)] = inst_46691);

return statearr_46750;
})();
var statearr_46751_48764 = state_46743__$1;
(statearr_46751_48764[(2)] = null);

(statearr_46751_48764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (1))){
var state_46743__$1 = state_46743;
var statearr_46752_48765 = state_46743__$1;
(statearr_46752_48765[(2)] = null);

(statearr_46752_48765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (4))){
var inst_46677 = (state_46743[(13)]);
var inst_46677__$1 = (state_46743[(2)]);
var inst_46678 = (inst_46677__$1 == null);
var state_46743__$1 = (function (){var statearr_46754 = state_46743;
(statearr_46754[(13)] = inst_46677__$1);

return statearr_46754;
})();
if(cljs.core.truth_(inst_46678)){
var statearr_46757_48770 = state_46743__$1;
(statearr_46757_48770[(1)] = (5));

} else {
var statearr_46758_48771 = state_46743__$1;
(statearr_46758_48771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (15))){
var state_46743__$1 = state_46743;
var statearr_46766_48774 = state_46743__$1;
(statearr_46766_48774[(2)] = null);

(statearr_46766_48774[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (21))){
var state_46743__$1 = state_46743;
var statearr_46774_48776 = state_46743__$1;
(statearr_46774_48776[(2)] = null);

(statearr_46774_48776[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (13))){
var inst_46688 = (state_46743[(8)]);
var inst_46690 = (state_46743[(10)]);
var inst_46689 = (state_46743[(11)]);
var inst_46691 = (state_46743[(12)]);
var inst_46700 = (state_46743[(2)]);
var inst_46701 = (inst_46691 + (1));
var tmp46760 = inst_46688;
var tmp46761 = inst_46690;
var tmp46762 = inst_46689;
var inst_46688__$1 = tmp46760;
var inst_46689__$1 = tmp46762;
var inst_46690__$1 = tmp46761;
var inst_46691__$1 = inst_46701;
var state_46743__$1 = (function (){var statearr_46780 = state_46743;
(statearr_46780[(8)] = inst_46688__$1);

(statearr_46780[(10)] = inst_46690__$1);

(statearr_46780[(14)] = inst_46700);

(statearr_46780[(11)] = inst_46689__$1);

(statearr_46780[(12)] = inst_46691__$1);

return statearr_46780;
})();
var statearr_46781_48789 = state_46743__$1;
(statearr_46781_48789[(2)] = null);

(statearr_46781_48789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (22))){
var state_46743__$1 = state_46743;
var statearr_46786_48790 = state_46743__$1;
(statearr_46786_48790[(2)] = null);

(statearr_46786_48790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (6))){
var inst_46677 = (state_46743[(13)]);
var inst_46686 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46677) : f.call(null,inst_46677));
var inst_46687 = cljs.core.seq(inst_46686);
var inst_46688 = inst_46687;
var inst_46689 = null;
var inst_46690 = (0);
var inst_46691 = (0);
var state_46743__$1 = (function (){var statearr_46787 = state_46743;
(statearr_46787[(8)] = inst_46688);

(statearr_46787[(10)] = inst_46690);

(statearr_46787[(11)] = inst_46689);

(statearr_46787[(12)] = inst_46691);

return statearr_46787;
})();
var statearr_46792_48791 = state_46743__$1;
(statearr_46792_48791[(2)] = null);

(statearr_46792_48791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (17))){
var inst_46704 = (state_46743[(7)]);
var inst_46708 = cljs.core.chunk_first(inst_46704);
var inst_46709 = cljs.core.chunk_rest(inst_46704);
var inst_46711 = cljs.core.count(inst_46708);
var inst_46688 = inst_46709;
var inst_46689 = inst_46708;
var inst_46690 = inst_46711;
var inst_46691 = (0);
var state_46743__$1 = (function (){var statearr_46797 = state_46743;
(statearr_46797[(8)] = inst_46688);

(statearr_46797[(10)] = inst_46690);

(statearr_46797[(11)] = inst_46689);

(statearr_46797[(12)] = inst_46691);

return statearr_46797;
})();
var statearr_46802_48797 = state_46743__$1;
(statearr_46802_48797[(2)] = null);

(statearr_46802_48797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (3))){
var inst_46741 = (state_46743[(2)]);
var state_46743__$1 = state_46743;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46743__$1,inst_46741);
} else {
if((state_val_46744 === (12))){
var inst_46728 = (state_46743[(2)]);
var state_46743__$1 = state_46743;
var statearr_46803_48800 = state_46743__$1;
(statearr_46803_48800[(2)] = inst_46728);

(statearr_46803_48800[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (2))){
var state_46743__$1 = state_46743;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46743__$1,(4),in$);
} else {
if((state_val_46744 === (23))){
var inst_46737 = (state_46743[(2)]);
var state_46743__$1 = state_46743;
var statearr_46812_48801 = state_46743__$1;
(statearr_46812_48801[(2)] = inst_46737);

(statearr_46812_48801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (19))){
var inst_46723 = (state_46743[(2)]);
var state_46743__$1 = state_46743;
var statearr_46814_48806 = state_46743__$1;
(statearr_46814_48806[(2)] = inst_46723);

(statearr_46814_48806[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (11))){
var inst_46688 = (state_46743[(8)]);
var inst_46704 = (state_46743[(7)]);
var inst_46704__$1 = cljs.core.seq(inst_46688);
var state_46743__$1 = (function (){var statearr_46815 = state_46743;
(statearr_46815[(7)] = inst_46704__$1);

return statearr_46815;
})();
if(inst_46704__$1){
var statearr_46817_48810 = state_46743__$1;
(statearr_46817_48810[(1)] = (14));

} else {
var statearr_46819_48811 = state_46743__$1;
(statearr_46819_48811[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (9))){
var inst_46730 = (state_46743[(2)]);
var inst_46732 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_46743__$1 = (function (){var statearr_46820 = state_46743;
(statearr_46820[(15)] = inst_46730);

return statearr_46820;
})();
if(cljs.core.truth_(inst_46732)){
var statearr_46823_48812 = state_46743__$1;
(statearr_46823_48812[(1)] = (21));

} else {
var statearr_46824_48813 = state_46743__$1;
(statearr_46824_48813[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (5))){
var inst_46680 = cljs.core.async.close_BANG_(out);
var state_46743__$1 = state_46743;
var statearr_46825_48814 = state_46743__$1;
(statearr_46825_48814[(2)] = inst_46680);

(statearr_46825_48814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (14))){
var inst_46704 = (state_46743[(7)]);
var inst_46706 = cljs.core.chunked_seq_QMARK_(inst_46704);
var state_46743__$1 = state_46743;
if(inst_46706){
var statearr_46831_48819 = state_46743__$1;
(statearr_46831_48819[(1)] = (17));

} else {
var statearr_46833_48820 = state_46743__$1;
(statearr_46833_48820[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (16))){
var inst_46726 = (state_46743[(2)]);
var state_46743__$1 = state_46743;
var statearr_46834_48825 = state_46743__$1;
(statearr_46834_48825[(2)] = inst_46726);

(statearr_46834_48825[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (10))){
var inst_46689 = (state_46743[(11)]);
var inst_46691 = (state_46743[(12)]);
var inst_46697 = cljs.core._nth(inst_46689,inst_46691);
var state_46743__$1 = state_46743;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46743__$1,(13),out,inst_46697);
} else {
if((state_val_46744 === (18))){
var inst_46704 = (state_46743[(7)]);
var inst_46716 = cljs.core.first(inst_46704);
var state_46743__$1 = state_46743;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46743__$1,(20),out,inst_46716);
} else {
if((state_val_46744 === (8))){
var inst_46690 = (state_46743[(10)]);
var inst_46691 = (state_46743[(12)]);
var inst_46694 = (inst_46691 < inst_46690);
var inst_46695 = inst_46694;
var state_46743__$1 = state_46743;
if(cljs.core.truth_(inst_46695)){
var statearr_46838_48826 = state_46743__$1;
(statearr_46838_48826[(1)] = (10));

} else {
var statearr_46840_48827 = state_46743__$1;
(statearr_46840_48827[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__44036__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__44036__auto____0 = (function (){
var statearr_46842 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46842[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__44036__auto__);

(statearr_46842[(1)] = (1));

return statearr_46842;
});
var cljs$core$async$mapcat_STAR__$_state_machine__44036__auto____1 = (function (state_46743){
while(true){
var ret_value__44037__auto__ = (function (){try{while(true){
var result__44038__auto__ = switch__44035__auto__(state_46743);
if(cljs.core.keyword_identical_QMARK_(result__44038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44038__auto__;
}
break;
}
}catch (e46843){var ex__44039__auto__ = e46843;
var statearr_46844_48840 = state_46743;
(statearr_46844_48840[(2)] = ex__44039__auto__);


if(cljs.core.seq((state_46743[(4)]))){
var statearr_46846_48847 = state_46743;
(statearr_46846_48847[(1)] = cljs.core.first((state_46743[(4)])));

} else {
throw ex__44039__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48848 = state_46743;
state_46743 = G__48848;
continue;
} else {
return ret_value__44037__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__44036__auto__ = function(state_46743){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__44036__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__44036__auto____1.call(this,state_46743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__44036__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__44036__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__44036__auto__;
})()
})();
var state__44114__auto__ = (function (){var statearr_46850 = f__44113__auto__();
(statearr_46850[(6)] = c__44112__auto__);

return statearr_46850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44114__auto__);
}));

return c__44112__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46854 = arguments.length;
switch (G__46854) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__46858 = arguments.length;
switch (G__46858) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__46861 = arguments.length;
switch (G__46861) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44112__auto___48881 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44113__auto__ = (function (){var switch__44035__auto__ = (function (state_46887){
var state_val_46888 = (state_46887[(1)]);
if((state_val_46888 === (7))){
var inst_46882 = (state_46887[(2)]);
var state_46887__$1 = state_46887;
var statearr_46889_48882 = state_46887__$1;
(statearr_46889_48882[(2)] = inst_46882);

(statearr_46889_48882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (1))){
var inst_46864 = null;
var state_46887__$1 = (function (){var statearr_46890 = state_46887;
(statearr_46890[(7)] = inst_46864);

return statearr_46890;
})();
var statearr_46891_48888 = state_46887__$1;
(statearr_46891_48888[(2)] = null);

(statearr_46891_48888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (4))){
var inst_46867 = (state_46887[(8)]);
var inst_46867__$1 = (state_46887[(2)]);
var inst_46868 = (inst_46867__$1 == null);
var inst_46869 = cljs.core.not(inst_46868);
var state_46887__$1 = (function (){var statearr_46892 = state_46887;
(statearr_46892[(8)] = inst_46867__$1);

return statearr_46892;
})();
if(inst_46869){
var statearr_46893_48893 = state_46887__$1;
(statearr_46893_48893[(1)] = (5));

} else {
var statearr_46894_48896 = state_46887__$1;
(statearr_46894_48896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (6))){
var state_46887__$1 = state_46887;
var statearr_46895_48897 = state_46887__$1;
(statearr_46895_48897[(2)] = null);

(statearr_46895_48897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (3))){
var inst_46884 = (state_46887[(2)]);
var inst_46885 = cljs.core.async.close_BANG_(out);
var state_46887__$1 = (function (){var statearr_46896 = state_46887;
(statearr_46896[(9)] = inst_46884);

return statearr_46896;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46887__$1,inst_46885);
} else {
if((state_val_46888 === (2))){
var state_46887__$1 = state_46887;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46887__$1,(4),ch);
} else {
if((state_val_46888 === (11))){
var inst_46867 = (state_46887[(8)]);
var inst_46876 = (state_46887[(2)]);
var inst_46864 = inst_46867;
var state_46887__$1 = (function (){var statearr_46898 = state_46887;
(statearr_46898[(7)] = inst_46864);

(statearr_46898[(10)] = inst_46876);

return statearr_46898;
})();
var statearr_46900_48908 = state_46887__$1;
(statearr_46900_48908[(2)] = null);

(statearr_46900_48908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (9))){
var inst_46867 = (state_46887[(8)]);
var state_46887__$1 = state_46887;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46887__$1,(11),out,inst_46867);
} else {
if((state_val_46888 === (5))){
var inst_46864 = (state_46887[(7)]);
var inst_46867 = (state_46887[(8)]);
var inst_46871 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46867,inst_46864);
var state_46887__$1 = state_46887;
if(inst_46871){
var statearr_46914_48909 = state_46887__$1;
(statearr_46914_48909[(1)] = (8));

} else {
var statearr_46915_48910 = state_46887__$1;
(statearr_46915_48910[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (10))){
var inst_46879 = (state_46887[(2)]);
var state_46887__$1 = state_46887;
var statearr_46920_48911 = state_46887__$1;
(statearr_46920_48911[(2)] = inst_46879);

(statearr_46920_48911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46888 === (8))){
var inst_46864 = (state_46887[(7)]);
var tmp46909 = inst_46864;
var inst_46864__$1 = tmp46909;
var state_46887__$1 = (function (){var statearr_46927 = state_46887;
(statearr_46927[(7)] = inst_46864__$1);

return statearr_46927;
})();
var statearr_46928_48918 = state_46887__$1;
(statearr_46928_48918[(2)] = null);

(statearr_46928_48918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44036__auto__ = null;
var cljs$core$async$state_machine__44036__auto____0 = (function (){
var statearr_46930 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46930[(0)] = cljs$core$async$state_machine__44036__auto__);

(statearr_46930[(1)] = (1));

return statearr_46930;
});
var cljs$core$async$state_machine__44036__auto____1 = (function (state_46887){
while(true){
var ret_value__44037__auto__ = (function (){try{while(true){
var result__44038__auto__ = switch__44035__auto__(state_46887);
if(cljs.core.keyword_identical_QMARK_(result__44038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44038__auto__;
}
break;
}
}catch (e46931){var ex__44039__auto__ = e46931;
var statearr_46932_48931 = state_46887;
(statearr_46932_48931[(2)] = ex__44039__auto__);


if(cljs.core.seq((state_46887[(4)]))){
var statearr_46933_48933 = state_46887;
(statearr_46933_48933[(1)] = cljs.core.first((state_46887[(4)])));

} else {
throw ex__44039__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48934 = state_46887;
state_46887 = G__48934;
continue;
} else {
return ret_value__44037__auto__;
}
break;
}
});
cljs$core$async$state_machine__44036__auto__ = function(state_46887){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44036__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44036__auto____1.call(this,state_46887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44036__auto____0;
cljs$core$async$state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44036__auto____1;
return cljs$core$async$state_machine__44036__auto__;
})()
})();
var state__44114__auto__ = (function (){var statearr_46935 = f__44113__auto__();
(statearr_46935[(6)] = c__44112__auto___48881);

return statearr_46935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44114__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__46943 = arguments.length;
switch (G__46943) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44112__auto___48948 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44113__auto__ = (function (){var switch__44035__auto__ = (function (state_46985){
var state_val_46986 = (state_46985[(1)]);
if((state_val_46986 === (7))){
var inst_46981 = (state_46985[(2)]);
var state_46985__$1 = state_46985;
var statearr_46988_48950 = state_46985__$1;
(statearr_46988_48950[(2)] = inst_46981);

(statearr_46988_48950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46986 === (1))){
var inst_46946 = (new Array(n));
var inst_46947 = inst_46946;
var inst_46948 = (0);
var state_46985__$1 = (function (){var statearr_46989 = state_46985;
(statearr_46989[(7)] = inst_46948);

(statearr_46989[(8)] = inst_46947);

return statearr_46989;
})();
var statearr_46990_48957 = state_46985__$1;
(statearr_46990_48957[(2)] = null);

(statearr_46990_48957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46986 === (4))){
var inst_46951 = (state_46985[(9)]);
var inst_46951__$1 = (state_46985[(2)]);
var inst_46952 = (inst_46951__$1 == null);
var inst_46953 = cljs.core.not(inst_46952);
var state_46985__$1 = (function (){var statearr_46994 = state_46985;
(statearr_46994[(9)] = inst_46951__$1);

return statearr_46994;
})();
if(inst_46953){
var statearr_46995_48959 = state_46985__$1;
(statearr_46995_48959[(1)] = (5));

} else {
var statearr_46996_48960 = state_46985__$1;
(statearr_46996_48960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46986 === (15))){
var inst_46975 = (state_46985[(2)]);
var state_46985__$1 = state_46985;
var statearr_46999_48965 = state_46985__$1;
(statearr_46999_48965[(2)] = inst_46975);

(statearr_46999_48965[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46986 === (13))){
var state_46985__$1 = state_46985;
var statearr_47000_48971 = state_46985__$1;
(statearr_47000_48971[(2)] = null);

(statearr_47000_48971[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46986 === (6))){
var inst_46948 = (state_46985[(7)]);
var inst_46971 = (inst_46948 > (0));
var state_46985__$1 = state_46985;
if(cljs.core.truth_(inst_46971)){
var statearr_47001_48975 = state_46985__$1;
(statearr_47001_48975[(1)] = (12));

} else {
var statearr_47002_48976 = state_46985__$1;
(statearr_47002_48976[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46986 === (3))){
var inst_46983 = (state_46985[(2)]);
var state_46985__$1 = state_46985;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46985__$1,inst_46983);
} else {
if((state_val_46986 === (12))){
var inst_46947 = (state_46985[(8)]);
var inst_46973 = cljs.core.vec(inst_46947);
var state_46985__$1 = state_46985;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46985__$1,(15),out,inst_46973);
} else {
if((state_val_46986 === (2))){
var state_46985__$1 = state_46985;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46985__$1,(4),ch);
} else {
if((state_val_46986 === (11))){
var inst_46964 = (state_46985[(2)]);
var inst_46965 = (new Array(n));
var inst_46947 = inst_46965;
var inst_46948 = (0);
var state_46985__$1 = (function (){var statearr_47003 = state_46985;
(statearr_47003[(10)] = inst_46964);

(statearr_47003[(7)] = inst_46948);

(statearr_47003[(8)] = inst_46947);

return statearr_47003;
})();
var statearr_47004_49000 = state_46985__$1;
(statearr_47004_49000[(2)] = null);

(statearr_47004_49000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46986 === (9))){
var inst_46947 = (state_46985[(8)]);
var inst_46962 = cljs.core.vec(inst_46947);
var state_46985__$1 = state_46985;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46985__$1,(11),out,inst_46962);
} else {
if((state_val_46986 === (5))){
var inst_46951 = (state_46985[(9)]);
var inst_46948 = (state_46985[(7)]);
var inst_46956 = (state_46985[(11)]);
var inst_46947 = (state_46985[(8)]);
var inst_46955 = (inst_46947[inst_46948] = inst_46951);
var inst_46956__$1 = (inst_46948 + (1));
var inst_46957 = (inst_46956__$1 < n);
var state_46985__$1 = (function (){var statearr_47005 = state_46985;
(statearr_47005[(12)] = inst_46955);

(statearr_47005[(11)] = inst_46956__$1);

return statearr_47005;
})();
if(cljs.core.truth_(inst_46957)){
var statearr_47006_49019 = state_46985__$1;
(statearr_47006_49019[(1)] = (8));

} else {
var statearr_47007_49024 = state_46985__$1;
(statearr_47007_49024[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46986 === (14))){
var inst_46978 = (state_46985[(2)]);
var inst_46979 = cljs.core.async.close_BANG_(out);
var state_46985__$1 = (function (){var statearr_47013 = state_46985;
(statearr_47013[(13)] = inst_46978);

return statearr_47013;
})();
var statearr_47018_49035 = state_46985__$1;
(statearr_47018_49035[(2)] = inst_46979);

(statearr_47018_49035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46986 === (10))){
var inst_46968 = (state_46985[(2)]);
var state_46985__$1 = state_46985;
var statearr_47019_49041 = state_46985__$1;
(statearr_47019_49041[(2)] = inst_46968);

(statearr_47019_49041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46986 === (8))){
var inst_46956 = (state_46985[(11)]);
var inst_46947 = (state_46985[(8)]);
var tmp47012 = inst_46947;
var inst_46947__$1 = tmp47012;
var inst_46948 = inst_46956;
var state_46985__$1 = (function (){var statearr_47024 = state_46985;
(statearr_47024[(7)] = inst_46948);

(statearr_47024[(8)] = inst_46947__$1);

return statearr_47024;
})();
var statearr_47025_49053 = state_46985__$1;
(statearr_47025_49053[(2)] = null);

(statearr_47025_49053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44036__auto__ = null;
var cljs$core$async$state_machine__44036__auto____0 = (function (){
var statearr_47027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47027[(0)] = cljs$core$async$state_machine__44036__auto__);

(statearr_47027[(1)] = (1));

return statearr_47027;
});
var cljs$core$async$state_machine__44036__auto____1 = (function (state_46985){
while(true){
var ret_value__44037__auto__ = (function (){try{while(true){
var result__44038__auto__ = switch__44035__auto__(state_46985);
if(cljs.core.keyword_identical_QMARK_(result__44038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44038__auto__;
}
break;
}
}catch (e47028){var ex__44039__auto__ = e47028;
var statearr_47029_49075 = state_46985;
(statearr_47029_49075[(2)] = ex__44039__auto__);


if(cljs.core.seq((state_46985[(4)]))){
var statearr_47030_49079 = state_46985;
(statearr_47030_49079[(1)] = cljs.core.first((state_46985[(4)])));

} else {
throw ex__44039__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49087 = state_46985;
state_46985 = G__49087;
continue;
} else {
return ret_value__44037__auto__;
}
break;
}
});
cljs$core$async$state_machine__44036__auto__ = function(state_46985){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44036__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44036__auto____1.call(this,state_46985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44036__auto____0;
cljs$core$async$state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44036__auto____1;
return cljs$core$async$state_machine__44036__auto__;
})()
})();
var state__44114__auto__ = (function (){var statearr_47032 = f__44113__auto__();
(statearr_47032[(6)] = c__44112__auto___48948);

return statearr_47032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44114__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47034 = arguments.length;
switch (G__47034) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44112__auto___49112 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44113__auto__ = (function (){var switch__44035__auto__ = (function (state_47080){
var state_val_47081 = (state_47080[(1)]);
if((state_val_47081 === (7))){
var inst_47076 = (state_47080[(2)]);
var state_47080__$1 = state_47080;
var statearr_47085_49124 = state_47080__$1;
(statearr_47085_49124[(2)] = inst_47076);

(statearr_47085_49124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47081 === (1))){
var inst_47036 = [];
var inst_47037 = inst_47036;
var inst_47038 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47080__$1 = (function (){var statearr_47086 = state_47080;
(statearr_47086[(7)] = inst_47038);

(statearr_47086[(8)] = inst_47037);

return statearr_47086;
})();
var statearr_47087_49151 = state_47080__$1;
(statearr_47087_49151[(2)] = null);

(statearr_47087_49151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47081 === (4))){
var inst_47041 = (state_47080[(9)]);
var inst_47041__$1 = (state_47080[(2)]);
var inst_47043 = (inst_47041__$1 == null);
var inst_47044 = cljs.core.not(inst_47043);
var state_47080__$1 = (function (){var statearr_47088 = state_47080;
(statearr_47088[(9)] = inst_47041__$1);

return statearr_47088;
})();
if(inst_47044){
var statearr_47089_49157 = state_47080__$1;
(statearr_47089_49157[(1)] = (5));

} else {
var statearr_47090_49160 = state_47080__$1;
(statearr_47090_49160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47081 === (15))){
var inst_47070 = (state_47080[(2)]);
var state_47080__$1 = state_47080;
var statearr_47094_49162 = state_47080__$1;
(statearr_47094_49162[(2)] = inst_47070);

(statearr_47094_49162[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47081 === (13))){
var state_47080__$1 = state_47080;
var statearr_47098_49166 = state_47080__$1;
(statearr_47098_49166[(2)] = null);

(statearr_47098_49166[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47081 === (6))){
var inst_47037 = (state_47080[(8)]);
var inst_47065 = inst_47037.length;
var inst_47066 = (inst_47065 > (0));
var state_47080__$1 = state_47080;
if(cljs.core.truth_(inst_47066)){
var statearr_47099_49172 = state_47080__$1;
(statearr_47099_49172[(1)] = (12));

} else {
var statearr_47100_49173 = state_47080__$1;
(statearr_47100_49173[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47081 === (3))){
var inst_47078 = (state_47080[(2)]);
var state_47080__$1 = state_47080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47080__$1,inst_47078);
} else {
if((state_val_47081 === (12))){
var inst_47037 = (state_47080[(8)]);
var inst_47068 = cljs.core.vec(inst_47037);
var state_47080__$1 = state_47080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47080__$1,(15),out,inst_47068);
} else {
if((state_val_47081 === (2))){
var state_47080__$1 = state_47080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47080__$1,(4),ch);
} else {
if((state_val_47081 === (11))){
var inst_47041 = (state_47080[(9)]);
var inst_47046 = (state_47080[(10)]);
var inst_47056 = (state_47080[(2)]);
var inst_47059 = [];
var inst_47060 = inst_47059.push(inst_47041);
var inst_47037 = inst_47059;
var inst_47038 = inst_47046;
var state_47080__$1 = (function (){var statearr_47102 = state_47080;
(statearr_47102[(11)] = inst_47060);

(statearr_47102[(7)] = inst_47038);

(statearr_47102[(12)] = inst_47056);

(statearr_47102[(8)] = inst_47037);

return statearr_47102;
})();
var statearr_47103_49186 = state_47080__$1;
(statearr_47103_49186[(2)] = null);

(statearr_47103_49186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47081 === (9))){
var inst_47037 = (state_47080[(8)]);
var inst_47054 = cljs.core.vec(inst_47037);
var state_47080__$1 = state_47080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47080__$1,(11),out,inst_47054);
} else {
if((state_val_47081 === (5))){
var inst_47038 = (state_47080[(7)]);
var inst_47041 = (state_47080[(9)]);
var inst_47046 = (state_47080[(10)]);
var inst_47046__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47041) : f.call(null,inst_47041));
var inst_47047 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47046__$1,inst_47038);
var inst_47048 = cljs.core.keyword_identical_QMARK_(inst_47038,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47049 = ((inst_47047) || (inst_47048));
var state_47080__$1 = (function (){var statearr_47105 = state_47080;
(statearr_47105[(10)] = inst_47046__$1);

return statearr_47105;
})();
if(cljs.core.truth_(inst_47049)){
var statearr_47106_49200 = state_47080__$1;
(statearr_47106_49200[(1)] = (8));

} else {
var statearr_47107_49201 = state_47080__$1;
(statearr_47107_49201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47081 === (14))){
var inst_47073 = (state_47080[(2)]);
var inst_47074 = cljs.core.async.close_BANG_(out);
var state_47080__$1 = (function (){var statearr_47109 = state_47080;
(statearr_47109[(13)] = inst_47073);

return statearr_47109;
})();
var statearr_47110_49204 = state_47080__$1;
(statearr_47110_49204[(2)] = inst_47074);

(statearr_47110_49204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47081 === (10))){
var inst_47063 = (state_47080[(2)]);
var state_47080__$1 = state_47080;
var statearr_47111_49206 = state_47080__$1;
(statearr_47111_49206[(2)] = inst_47063);

(statearr_47111_49206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47081 === (8))){
var inst_47041 = (state_47080[(9)]);
var inst_47046 = (state_47080[(10)]);
var inst_47037 = (state_47080[(8)]);
var inst_47051 = inst_47037.push(inst_47041);
var tmp47108 = inst_47037;
var inst_47037__$1 = tmp47108;
var inst_47038 = inst_47046;
var state_47080__$1 = (function (){var statearr_47112 = state_47080;
(statearr_47112[(7)] = inst_47038);

(statearr_47112[(8)] = inst_47037__$1);

(statearr_47112[(14)] = inst_47051);

return statearr_47112;
})();
var statearr_47113_49216 = state_47080__$1;
(statearr_47113_49216[(2)] = null);

(statearr_47113_49216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44036__auto__ = null;
var cljs$core$async$state_machine__44036__auto____0 = (function (){
var statearr_47116 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47116[(0)] = cljs$core$async$state_machine__44036__auto__);

(statearr_47116[(1)] = (1));

return statearr_47116;
});
var cljs$core$async$state_machine__44036__auto____1 = (function (state_47080){
while(true){
var ret_value__44037__auto__ = (function (){try{while(true){
var result__44038__auto__ = switch__44035__auto__(state_47080);
if(cljs.core.keyword_identical_QMARK_(result__44038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44038__auto__;
}
break;
}
}catch (e47117){var ex__44039__auto__ = e47117;
var statearr_47121_49224 = state_47080;
(statearr_47121_49224[(2)] = ex__44039__auto__);


if(cljs.core.seq((state_47080[(4)]))){
var statearr_47122_49225 = state_47080;
(statearr_47122_49225[(1)] = cljs.core.first((state_47080[(4)])));

} else {
throw ex__44039__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49227 = state_47080;
state_47080 = G__49227;
continue;
} else {
return ret_value__44037__auto__;
}
break;
}
});
cljs$core$async$state_machine__44036__auto__ = function(state_47080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44036__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44036__auto____1.call(this,state_47080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44036__auto____0;
cljs$core$async$state_machine__44036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44036__auto____1;
return cljs$core$async$state_machine__44036__auto__;
})()
})();
var state__44114__auto__ = (function (){var statearr_47123 = f__44113__auto__();
(statearr_47123[(6)] = c__44112__auto___49112);

return statearr_47123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44114__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
