goog.provide('data_binding_cljs.core');
goog.require('cljs.core');
goog.require('hiccups.runtime');
goog.require('jayq.core');
/**
* @param {...*} var_args
*/
data_binding_cljs.core.log = (function() { 
var log__delegate = function (stuff){
return console.log(cljs.core.apply.call(null,cljs.core.str,stuff));
};
var log = function (var_args){
var stuff = null;
if (goog.isDef(var_args)) {
  stuff = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log__delegate.call(this, stuff);
};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__24221){
var stuff = cljs.core.seq(arglist__24221);;
return log__delegate(stuff);
});
log.cljs$lang$arity$variadic = log__delegate;
return log;
})()
;
/**
* returns true, if x is neither null nor undefined
* @param {...*} var_args
*/
data_binding_cljs.core.exist_QMARK_ = (function() {
var exist_QMARK_ = null;
var exist_QMARK___1 = (function() { 
var G__24222__delegate = function (xs){
return cljs.core.every_QMARK_.call(null,exist_QMARK_,xs);
};
var G__24222 = function (var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__24222__delegate.call(this, xs);
};
G__24222.cljs$lang$maxFixedArity = 0;
G__24222.cljs$lang$applyTo = (function (arglist__24223){
var xs = cljs.core.seq(arglist__24223);;
return G__24222__delegate(xs);
});
G__24222.cljs$lang$arity$variadic = G__24222__delegate;
return G__24222;
})()
;
exist_QMARK_ = function(var_args){
var xs = var_args;
switch(arguments.length){
default:
return exist_QMARK___1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
exist_QMARK_.cljs$lang$maxFixedArity = 1;
exist_QMARK_.cljs$lang$applyTo = exist_QMARK___1.cljs$lang$applyTo;
exist_QMARK_.cljs$lang$arity$variadic = exist_QMARK___1.cljs$lang$arity$variadic;
return exist_QMARK_;
})()
;
data_binding_cljs.core.re_render_template = (function re_render_template(template_id,template_fn){
var old_content = jayq.core.$.call(null,[cljs.core.str("[data-templateuuid='"),cljs.core.str(template_id),cljs.core.str("']")].join(''));
return old_content.replaceWith((function (){
var template_id__14476__auto__ = cljs.core.name.call(null,cljs.core.gensym.call(null));
var _STAR_template_id_STAR_24227 = data_binding_cljs.core._STAR_template_id_STAR_;
var _STAR_template_fn_STAR_24228 = data_binding_cljs.core._STAR_template_fn_STAR_;
try{data_binding_cljs.core._STAR_template_id_STAR_ = template_id__14476__auto__;
data_binding_cljs.core._STAR_template_fn_STAR_ = template_fn;
return jayq.core.attr.call(null,jayq.core.$.call(null,template_fn.call(null)),"\uFDD0'data-templateuuid",template_id__14476__auto__);
}finally {data_binding_cljs.core._STAR_template_fn_STAR_ = _STAR_template_fn_STAR_24228;
data_binding_cljs.core._STAR_template_id_STAR_ = _STAR_template_id_STAR_24227;
}}));
});
data_binding_cljs.core.IBindable = {};
data_binding_cljs.core._get = (function _get(this$){
if((function (){var and__3822__auto__ = this$;
if(and__3822__auto__)
{return this$.data_binding_cljs$core$IBindable$_get$arity$1;
} else
{return and__3822__auto__;
}
})())
{return this$.data_binding_cljs$core$IBindable$_get$arity$1(this$);
} else
{var x__2390__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3824__auto__ = (data_binding_cljs.core._get[goog.typeOf(x__2390__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (data_binding_cljs.core._get["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IBindable.-get",this$);
}
}
})().call(null,this$);
}
});
data_binding_cljs.core._set = (function _set(this$,value){
if((function (){var and__3822__auto__ = this$;
if(and__3822__auto__)
{return this$.data_binding_cljs$core$IBindable$_set$arity$2;
} else
{return and__3822__auto__;
}
})())
{return this$.data_binding_cljs$core$IBindable$_set$arity$2(this$,value);
} else
{var x__2390__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3824__auto__ = (data_binding_cljs.core._set[goog.typeOf(x__2390__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (data_binding_cljs.core._set["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IBindable.-set",this$);
}
}
})().call(null,this$,value);
}
});
goog.provide('data_binding_cljs.core.Bindable');

/**
* @constructor
*/
data_binding_cljs.core.Bindable = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2690809856;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
data_binding_cljs.core.Bindable.cljs$lang$type = true;
data_binding_cljs.core.Bindable.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"data-binding-cljs.core/Bindable");
});
data_binding_cljs.core.Bindable.cljs$lang$ctorPrWriter = (function (this__2330__auto__,writer__2331__auto__,opt__2332__auto__){
return cljs.core._write.call(null,writer__2331__auto__,"data-binding-cljs.core/Bindable");
});
data_binding_cljs.core.Bindable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
return goog.getUid(this$);
});
data_binding_cljs.core.Bindable.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var G__24230 = cljs.core.seq.call(null,self__.watches);
while(true){
if(G__24230)
{var vec__24231 = cljs.core.first.call(null,G__24230);
var key = cljs.core.nth.call(null,vec__24231,0,null);
var f = cljs.core.nth.call(null,vec__24231,1,null);
f.call(null,key,this$,oldval,newval);
{
var G__24232 = cljs.core.next.call(null,G__24230);
G__24230 = G__24232;
continue;
}
} else
{return null;
}
break;
}
});
data_binding_cljs.core.Bindable.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
return this$.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
data_binding_cljs.core.Bindable.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
return this$.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
data_binding_cljs.core.Bindable.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
cljs.core._write.call(null,writer,"#<Bindable: ");
cljs.core._pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
data_binding_cljs.core.Bindable.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var self__ = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Bindable: "], true),cljs.core._pr_seq.call(null,self__.state,opts),">");
});
data_binding_cljs.core.Bindable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
return self__.meta;
});
data_binding_cljs.core.Bindable.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
if(cljs.core.truth_(data_binding_cljs.core.exist_QMARK_.call(null,data_binding_cljs.core._STAR_template_fn_STAR_,data_binding_cljs.core._STAR_template_id_STAR_)))
{var watch_key_24233 = cljs.core.symbol.call(null,data_binding_cljs.core._STAR_template_id_STAR_);
var template_id_24234 = data_binding_cljs.core._STAR_template_id_STAR_;
var template_fn_24235 = data_binding_cljs.core._STAR_template_fn_STAR_;
cljs.core.add_watch.call(null,this$,watch_key_24233,(function (){
cljs.core.remove_watch.call(null,this$,watch_key_24233);
return data_binding_cljs.core.re_render_template.call(null,template_id_24234,template_fn_24235);
}));
} else
{}
return self__.state;
});
data_binding_cljs.core.Bindable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
return (o === other);
});
data_binding_cljs.core.binding_type = (function binding_type(node,_){
var tag = cljs.core.keyword.call(null,node.tagName);
if(cljs.core._EQ_.call(null,tag,"\uFDD0'INPUT"))
{return cljs.core.PersistentVector.fromArray(["\uFDD0'INPUT",cljs.core.keyword.call(null,jayq.core.attr.call(null,jayq.core.$.call(null,node),"type"))], true);
} else
{if("\uFDD0'otherwise")
{return tag;
} else
{return null;
}
}
});
data_binding_cljs.core.apply_single_binding = (function (){var method_table__2562__auto__ = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var prefer_table__2563__auto__ = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var method_cache__2564__auto__ = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var cached_hierarchy__2565__auto__ = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var hierarchy__2566__auto__ = cljs.core._lookup.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'default"],{"\uFDD0'default":"\uFDD0'default"}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);
return (new cljs.core.MultiFn("apply-single-binding",data_binding_cljs.core.binding_type,"\uFDD0'default",hierarchy__2566__auto__,method_table__2562__auto__,prefer_table__2563__auto__,method_cache__2564__auto__,cached_hierarchy__2565__auto__));
})();
cljs.core._add_method.call(null,data_binding_cljs.core.apply_single_binding,cljs.core.PersistentVector.fromArray(["\uFDD0'INPUT","\uFDD0'text"], true),(function (node,bound){
var current = cljs.core.deref.call(null,bound);
return jayq.core.on.call(null,jayq.core.val.call(null,jayq.core.$.call(null,node),current),"\uFDD0'change",(function (e){
var newval = jayq.core.val.call(null,jayq.core.$.call(null,node));
return cljs.core.reset_BANG_.call(null,bound,newval);
}));
}));
cljs.core._add_method.call(null,data_binding_cljs.core.apply_single_binding,cljs.core.PersistentVector.fromArray(["\uFDD0'INPUT","\uFDD0'checkbox"], true),(function (node,bound){
var current = cljs.core.deref.call(null,bound);
return jayq.core.on.call(null,jayq.core.attr.call(null,jayq.core.$.call(null,node),"\uFDD0'checked",current),"\uFDD0'change",(function (e){
var newval = jayq.core.attr.call(null,jayq.core.$.call(null,node),"checked");
return cljs.core.reset_BANG_.call(null,bound,newval);
}));
}));
cljs.core._add_method.call(null,data_binding_cljs.core.apply_single_binding,"\uFDD0'default",(function (node,bound){
var current = cljs.core.deref.call(null,bound);
return jayq.core.text.call(null,jayq.core.$.call(null,node),current);
}));
data_binding_cljs.core.apply_binding = (function apply_binding(node_set,bound){
var G__24237 = cljs.core.seq.call(null,node_set);
while(true){
if(G__24237)
{var node = cljs.core.first.call(null,G__24237);
data_binding_cljs.core.apply_single_binding.call(null,node,bound);
{
var G__24238 = cljs.core.next.call(null,G__24237);
G__24237 = G__24238;
continue;
}
} else
{return null;
}
break;
}
});
/**
* @param {...*} var_args
*/
data_binding_cljs.core.bindable = (function() {
var bindable = null;
var bindable__1 = (function (x){
return (new data_binding_cljs.core.Bindable(x,null,null,null));
});
var bindable__2 = (function() { 
var G__24242__delegate = function (x,p__24239){
var map__24241 = p__24239;
var map__24241__$1 = ((cljs.core.seq_QMARK_.call(null,map__24241))?cljs.core.apply.call(null,cljs.core.hash_map,map__24241):map__24241);
var validator = cljs.core._lookup.call(null,map__24241__$1,"\uFDD0'validator",null);
var meta = cljs.core._lookup.call(null,map__24241__$1,"\uFDD0'meta",null);
return (new data_binding_cljs.core.Bindable(x,meta,validator,null));
};
var G__24242 = function (x,var_args){
var p__24239 = null;
if (goog.isDef(var_args)) {
  p__24239 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__24242__delegate.call(this, x, p__24239);
};
G__24242.cljs$lang$maxFixedArity = 1;
G__24242.cljs$lang$applyTo = (function (arglist__24243){
var x = cljs.core.first(arglist__24243);
var p__24239 = cljs.core.rest(arglist__24243);
return G__24242__delegate(x, p__24239);
});
G__24242.cljs$lang$arity$variadic = G__24242__delegate;
return G__24242;
})()
;
bindable = function(x,var_args){
var p__24239 = var_args;
switch(arguments.length){
case 1:
return bindable__1.call(this,x);
default:
return bindable__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bindable.cljs$lang$maxFixedArity = 1;
bindable.cljs$lang$applyTo = bindable__2.cljs$lang$applyTo;
bindable.cljs$lang$arity$1 = bindable__1;
bindable.cljs$lang$arity$variadic = bindable__2.cljs$lang$arity$variadic;
return bindable;
})()
;
data_binding_cljs.core.mk_uid = (function mk_uid(model){
return cljs.core.name.call(null,cljs.core.gensym.call(null,model));
});
goog.provide('data_binding_cljs.core.TodoItem');

/**
* @constructor
* @param {*} uid
* @param {*} desc
* @param {*} done_QMARK_
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
data_binding_cljs.core.TodoItem = (function (uid,desc,done_QMARK_,__meta,__extmap){
this.uid = uid;
this.desc = desc;
this.done_QMARK_ = done_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
data_binding_cljs.core.TodoItem.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__2343__auto__){
var self__ = this;
var h__2211__auto__ = self__.__hash;
if(!((h__2211__auto__ == null)))
{return h__2211__auto__;
} else
{var h__2211__auto____$1 = cljs.core.hash_imap.call(null,this__2343__auto__);
self__.__hash = h__2211__auto____$1;
return h__2211__auto____$1;
}
});
data_binding_cljs.core.TodoItem.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2348__auto__,k__2349__auto__){
var self__ = this;
return this__2348__auto__.cljs$core$ILookup$_lookup$arity$3(this__2348__auto__,k__2349__auto__,null);
});
data_binding_cljs.core.TodoItem.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2350__auto__,k24245,else__2351__auto__){
var self__ = this;
if((k24245 === "\uFDD0'uid"))
{return self__.uid;
} else
{if((k24245 === "\uFDD0'desc"))
{return self__.desc;
} else
{if((k24245 === "\uFDD0'done?"))
{return self__.done_QMARK_;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,self__.__extmap,k24245,else__2351__auto__);
} else
{return null;
}
}
}
}
});
data_binding_cljs.core.TodoItem.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2355__auto__,k__2356__auto__,G__24244){
var self__ = this;
var pred__24247 = cljs.core.identical_QMARK_;
var expr__24248 = k__2356__auto__;
if(pred__24247.call(null,"\uFDD0'uid",expr__24248))
{return (new data_binding_cljs.core.TodoItem(G__24244,self__.desc,self__.done_QMARK_,self__.__meta,self__.__extmap,null));
} else
{if(pred__24247.call(null,"\uFDD0'desc",expr__24248))
{return (new data_binding_cljs.core.TodoItem(self__.uid,G__24244,self__.done_QMARK_,self__.__meta,self__.__extmap,null));
} else
{if(pred__24247.call(null,"\uFDD0'done?",expr__24248))
{return (new data_binding_cljs.core.TodoItem(self__.uid,self__.desc,G__24244,self__.__meta,self__.__extmap,null));
} else
{return (new data_binding_cljs.core.TodoItem(self__.uid,self__.desc,self__.done_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__2356__auto__,G__24244),null));
}
}
}
});
data_binding_cljs.core.TodoItem.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__2362__auto__,writer__2363__auto__,opts__2364__auto__){
var self__ = this;
var pr_pair__2365__auto__ = (function (keyval__2366__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__2363__auto__,cljs.core.pr_writer,""," ","",opts__2364__auto__,keyval__2366__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__2363__auto__,pr_pair__2365__auto__,[cljs.core.str("#"),cljs.core.str("TodoItem"),cljs.core.str("{")].join(''),", ","}",opts__2364__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'uid",self__.uid),cljs.core.vector.call(null,"\uFDD0'desc",self__.desc),cljs.core.vector.call(null,"\uFDD0'done?",self__.done_QMARK_)], true),self__.__extmap));
});
data_binding_cljs.core.TodoItem.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2353__auto__,entry__2354__auto__){
var self__ = this;
if(cljs.core.vector_QMARK_.call(null,entry__2354__auto__))
{return this__2353__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2353__auto__,cljs.core._nth.call(null,entry__2354__auto__,0),cljs.core._nth.call(null,entry__2354__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2353__auto__,entry__2354__auto__);
}
});
data_binding_cljs.core.TodoItem.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2360__auto__){
var self__ = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'uid",self__.uid),cljs.core.vector.call(null,"\uFDD0'desc",self__.desc),cljs.core.vector.call(null,"\uFDD0'done?",self__.done_QMARK_)], true),self__.__extmap));
});
data_binding_cljs.core.TodoItem.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2352__auto__){
var self__ = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});
data_binding_cljs.core.TodoItem.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2344__auto__,other__2345__auto__){
var self__ = this;
if(cljs.core.truth_((function (){var and__3822__auto__ = other__2345__auto__;
if(cljs.core.truth_(and__3822__auto__))
{var and__3822__auto____$1 = (this__2344__auto__.constructor === other__2345__auto__.constructor);
if(and__3822__auto____$1)
{return cljs.core.equiv_map.call(null,this__2344__auto__,other__2345__auto__);
} else
{return and__3822__auto____$1;
}
} else
{return and__3822__auto__;
}
})()))
{return true;
} else
{return false;
}
});
data_binding_cljs.core.TodoItem.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2347__auto__,G__24244){
var self__ = this;
return (new data_binding_cljs.core.TodoItem(self__.uid,self__.desc,self__.done_QMARK_,G__24244,self__.__extmap,self__.__hash));
});
data_binding_cljs.core.TodoItem.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2346__auto__){
var self__ = this;
return self__.__meta;
});
data_binding_cljs.core.TodoItem.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2357__auto__,k__2358__auto__){
var self__ = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'desc","\uFDD0'uid","\uFDD0'done?"]),k__2358__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2357__auto__),self__.__meta),k__2358__auto__);
} else
{return (new data_binding_cljs.core.TodoItem(self__.uid,self__.desc,self__.done_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__2358__auto__)),null));
}
});
data_binding_cljs.core.TodoItem.cljs$lang$type = true;
data_binding_cljs.core.TodoItem.cljs$lang$ctorPrSeq = (function (this__2383__auto__){
return cljs.core.list.call(null,"data-binding-cljs.core/TodoItem");
});
data_binding_cljs.core.TodoItem.cljs$lang$ctorPrWriter = (function (this__2383__auto__,writer__2384__auto__){
return cljs.core._write.call(null,writer__2384__auto__,"data-binding-cljs.core/TodoItem");
});
data_binding_cljs.core.__GT_TodoItem = (function __GT_TodoItem(uid,desc,done_QMARK_){
return (new data_binding_cljs.core.TodoItem(uid,desc,done_QMARK_));
});
data_binding_cljs.core.map__GT_TodoItem = (function map__GT_TodoItem(G__24246){
return (new data_binding_cljs.core.TodoItem((new cljs.core.Keyword("\uFDD0'uid")).call(null,G__24246),(new cljs.core.Keyword("\uFDD0'desc")).call(null,G__24246),(new cljs.core.Keyword("\uFDD0'done?")).call(null,G__24246),null,cljs.core.dissoc.call(null,G__24246,"\uFDD0'uid","\uFDD0'desc","\uFDD0'done?")));
});
data_binding_cljs.core.todo = (function todo(desc,done_QMARK_){
return (new data_binding_cljs.core.TodoItem(data_binding_cljs.core.mk_uid.call(null,"todo"),data_binding_cljs.core.bindable.call(null,desc),data_binding_cljs.core.bindable.call(null,done_QMARK_)));
});
data_binding_cljs.core.done_QMARK_ = (function done_QMARK_(t){
return cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'done?")).call(null,t));
});
data_binding_cljs.core.todo_template = (function todo_template(td){
var node__14468__auto__ = jayq.core.$.call(null,[cljs.core.str("<div><input id=\"done\" type=\"checkbox\" /><input id=\"desc\" type=\"text\" /></div>")].join(''));
var G__24256_24258 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.fromArray(["#desc",(new cljs.core.Keyword("\uFDD0'desc")).call(null,td),"#done",(new cljs.core.Keyword("\uFDD0'done?")).call(null,td)], true)));
while(true){
if(G__24256_24258)
{var vec__24257_24259 = cljs.core.first.call(null,G__24256_24258);
var selector__14469__auto___24260 = cljs.core.nth.call(null,vec__24257_24259,0,null);
var bound__14470__auto___24261 = cljs.core.nth.call(null,vec__24257_24259,1,null);
data_binding_cljs.core.apply_binding.call(null,jayq.core.find.call(null,node__14468__auto__,selector__14469__auto___24260),bound__14470__auto___24261);
{
var G__24262 = cljs.core.next.call(null,G__24256_24258);
G__24256_24258 = G__24262;
continue;
}
} else
{}
break;
}
return node__14468__auto__;
});
data_binding_cljs.core.todo_items = data_binding_cljs.core.bindable.call(null,cljs.core.list.call(null,data_binding_cljs.core.todo.call(null,"Write data-binding framework",true),data_binding_cljs.core.todo.call(null,"Make todo app example",false),data_binding_cljs.core.todo.call(null,"Extend data-binding framework",false)));
data_binding_cljs.core.$main = jayq.core.$.call(null,"#main");
data_binding_cljs.core.todo_list_template = (function todo_list_template(todo_list){
var wrapper = jayq.core.$.call(null,[cljs.core.str("<div></div>")].join(''));
var G__24268_24269 = cljs.core.seq.call(null,cljs.core.deref.call(null,todo_list));
while(true){
if(G__24268_24269)
{var todo_item_24270 = cljs.core.first.call(null,G__24268_24269);
jayq.core.append.call(null,wrapper,data_binding_cljs.core.todo_template.call(null,todo_item_24270));
{
var G__24271 = cljs.core.next.call(null,G__24268_24269);
G__24268_24269 = G__24271;
continue;
}
} else
{}
break;
}
return wrapper;
});
data_binding_cljs.core.todo_list_summary = (function todo_list_summary(todo_list){
return [cljs.core.str((function (){var attrs24273 = [cljs.core.str(cljs.core.count.call(null,cljs.core.filter.call(null,data_binding_cljs.core.done_QMARK_,cljs.core.deref.call(null,todo_list)))),cljs.core.str(" items finished")].join('');
if(cljs.core.map_QMARK_.call(null,attrs24273))
{return [cljs.core.str("<h1"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs24273))),cljs.core.str(">"),cljs.core.str("</h1>")].join('');
} else
{return [cljs.core.str("<h1>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs24273)),cljs.core.str("</h1>")].join('');
}
})())].join('');
});
var summary_node_24280 = (function (){var template_id__14476__auto__ = cljs.core.name.call(null,cljs.core.gensym.call(null));
var _STAR_template_id_STAR_24274 = data_binding_cljs.core._STAR_template_id_STAR_;
var _STAR_template_fn_STAR_24275 = data_binding_cljs.core._STAR_template_fn_STAR_;
try{data_binding_cljs.core._STAR_template_id_STAR_ = template_id__14476__auto__;
data_binding_cljs.core._STAR_template_fn_STAR_ = (function (){
return data_binding_cljs.core.todo_list_summary.call(null,data_binding_cljs.core.todo_items);
});
return jayq.core.attr.call(null,jayq.core.$.call(null,data_binding_cljs.core.todo_list_summary.call(null,data_binding_cljs.core.todo_items)),"\uFDD0'data-templateuuid",template_id__14476__auto__);
}finally {data_binding_cljs.core._STAR_template_fn_STAR_ = _STAR_template_fn_STAR_24275;
data_binding_cljs.core._STAR_template_id_STAR_ = _STAR_template_id_STAR_24274;
}})();
var list_node_24281 = (function (){var template_id__14476__auto__ = cljs.core.name.call(null,cljs.core.gensym.call(null));
var _STAR_template_id_STAR_24277 = data_binding_cljs.core._STAR_template_id_STAR_;
var _STAR_template_fn_STAR_24278 = data_binding_cljs.core._STAR_template_fn_STAR_;
try{data_binding_cljs.core._STAR_template_id_STAR_ = template_id__14476__auto__;
data_binding_cljs.core._STAR_template_fn_STAR_ = (function (){
return data_binding_cljs.core.todo_list_template.call(null,data_binding_cljs.core.todo_items);
});
return jayq.core.attr.call(null,jayq.core.$.call(null,data_binding_cljs.core.todo_list_template.call(null,data_binding_cljs.core.todo_items)),"\uFDD0'data-templateuuid",template_id__14476__auto__);
}finally {data_binding_cljs.core._STAR_template_fn_STAR_ = _STAR_template_fn_STAR_24278;
data_binding_cljs.core._STAR_template_id_STAR_ = _STAR_template_id_STAR_24277;
}})();
jayq.core.append.call(null,jayq.core.append.call(null,data_binding_cljs.core.$main,summary_node_24280),list_node_24281);
