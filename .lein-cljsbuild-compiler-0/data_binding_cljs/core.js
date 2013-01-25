goog.provide('data_binding_cljs.core');
goog.require('cljs.core');
goog.require('hiccups.runtime');
goog.require('jayq.core');
data_binding_cljs.core.$ = jayq.core.$;
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
log.cljs$lang$applyTo = (function (arglist__9645){
var stuff = cljs.core.seq(arglist__9645);;
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
var G__9646__delegate = function (xs){
return cljs.core.every_QMARK_.call(null,exist_QMARK_,xs);
};
var G__9646 = function (var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9646__delegate.call(this, xs);
};
G__9646.cljs$lang$maxFixedArity = 0;
G__9646.cljs$lang$applyTo = (function (arglist__9647){
var xs = cljs.core.seq(arglist__9647);;
return G__9646__delegate(xs);
});
G__9646.cljs$lang$arity$variadic = G__9646__delegate;
return G__9646;
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
data_binding_cljs.core.re_render_template = (function re_render_template(template_id,template_fn,template_args){
var selector = [cljs.core.str("[data-templateuuid='"),cljs.core.str(template_id),cljs.core.str("']")].join('');
return data_binding_cljs.core.$.call(null,selector).replaceWith((function (){
var template_id__9374__auto__ = cljs.core.name.call(null,cljs.core.gensym.call(null));
var _STAR_template_id_STAR_9652 = data_binding_cljs.core._STAR_template_id_STAR_;
var _STAR_template_fn_STAR_9653 = data_binding_cljs.core._STAR_template_fn_STAR_;
var _STAR_template_args_STAR_9654 = data_binding_cljs.core._STAR_template_args_STAR_;
try{data_binding_cljs.core._STAR_template_id_STAR_ = template_id__9374__auto__;
data_binding_cljs.core._STAR_template_fn_STAR_ = template_fn;
data_binding_cljs.core._STAR_template_args_STAR_ = cljs.core.apply.call(null,cljs.core.vector,template_args);
return jayq.core.attr.call(null,cljs.core.apply.call(null,template_fn,template_args),"\uFDD0'data-templateuuid",template_id__9374__auto__);
}finally {data_binding_cljs.core._STAR_template_args_STAR_ = _STAR_template_args_STAR_9654;
data_binding_cljs.core._STAR_template_fn_STAR_ = _STAR_template_fn_STAR_9653;
data_binding_cljs.core._STAR_template_id_STAR_ = _STAR_template_id_STAR_9652;
}}));
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
var G__9656 = cljs.core.seq.call(null,self__.watches);
while(true){
if(G__9656)
{var vec__9657 = cljs.core.first.call(null,G__9656);
var key = cljs.core.nth.call(null,vec__9657,0,null);
var f = cljs.core.nth.call(null,vec__9657,1,null);
f.call(null,key,this$,oldval,newval);
{
var G__9658 = cljs.core.next.call(null,G__9656);
G__9656 = G__9658;
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
if(cljs.core.truth_(data_binding_cljs.core.exist_QMARK_.call(null,data_binding_cljs.core._STAR_template_fn_STAR_,data_binding_cljs.core._STAR_template_id_STAR_,data_binding_cljs.core._STAR_template_args_STAR_)))
{var watch_key_9659 = cljs.core.symbol.call(null,data_binding_cljs.core._STAR_template_id_STAR_);
var template_id_9660 = data_binding_cljs.core._STAR_template_id_STAR_;
var template_fn_9661 = data_binding_cljs.core._STAR_template_fn_STAR_;
var template_args_9662 = data_binding_cljs.core._STAR_template_args_STAR_;
cljs.core.add_watch.call(null,this$,watch_key_9659,(function (){
cljs.core.remove_watch.call(null,this$,watch_key_9659);
return data_binding_cljs.core.re_render_template.call(null,template_id_9660,template_fn_9661,template_args_9662);
}));
} else
{}
return self__.state;
});
data_binding_cljs.core.Bindable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
return (o === other);
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
var G__9666__delegate = function (x,p__9663){
var map__9665 = p__9663;
var map__9665__$1 = ((cljs.core.seq_QMARK_.call(null,map__9665))?cljs.core.apply.call(null,cljs.core.hash_map,map__9665):map__9665);
var validator = cljs.core._lookup.call(null,map__9665__$1,"\uFDD0'validator",null);
var meta = cljs.core._lookup.call(null,map__9665__$1,"\uFDD0'meta",null);
return (new data_binding_cljs.core.Bindable(x,meta,validator,null));
};
var G__9666 = function (x,var_args){
var p__9663 = null;
if (goog.isDef(var_args)) {
  p__9663 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9666__delegate.call(this, x, p__9663);
};
G__9666.cljs$lang$maxFixedArity = 1;
G__9666.cljs$lang$applyTo = (function (arglist__9667){
var x = cljs.core.first(arglist__9667);
var p__9663 = cljs.core.rest(arglist__9667);
return G__9666__delegate(x, p__9663);
});
G__9666.cljs$lang$arity$variadic = G__9666__delegate;
return G__9666;
})()
;
bindable = function(x,var_args){
var p__9663 = var_args;
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
goog.provide('data_binding_cljs.core.Person');

/**
* @constructor
* @param {*} first
* @param {*} last
* @param {*} id
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
data_binding_cljs.core.Person = (function (first,last,id,__meta,__extmap){
this.first = first;
this.last = last;
this.id = id;
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
data_binding_cljs.core.Person.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__2343__auto__){
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
data_binding_cljs.core.Person.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2348__auto__,k__2349__auto__){
var self__ = this;
return this__2348__auto__.cljs$core$ILookup$_lookup$arity$3(this__2348__auto__,k__2349__auto__,null);
});
data_binding_cljs.core.Person.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2350__auto__,k9669,else__2351__auto__){
var self__ = this;
if((k9669 === "\uFDD0'first"))
{return self__.first;
} else
{if((k9669 === "\uFDD0'last"))
{return self__.last;
} else
{if((k9669 === "\uFDD0'id"))
{return self__.id;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,self__.__extmap,k9669,else__2351__auto__);
} else
{return null;
}
}
}
}
});
data_binding_cljs.core.Person.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2355__auto__,k__2356__auto__,G__9668){
var self__ = this;
var pred__9671 = cljs.core.identical_QMARK_;
var expr__9672 = k__2356__auto__;
if(pred__9671.call(null,"\uFDD0'first",expr__9672))
{return (new data_binding_cljs.core.Person(G__9668,self__.last,self__.id,self__.__meta,self__.__extmap,null));
} else
{if(pred__9671.call(null,"\uFDD0'last",expr__9672))
{return (new data_binding_cljs.core.Person(self__.first,G__9668,self__.id,self__.__meta,self__.__extmap,null));
} else
{if(pred__9671.call(null,"\uFDD0'id",expr__9672))
{return (new data_binding_cljs.core.Person(self__.first,self__.last,G__9668,self__.__meta,self__.__extmap,null));
} else
{return (new data_binding_cljs.core.Person(self__.first,self__.last,self__.id,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__2356__auto__,G__9668),null));
}
}
}
});
data_binding_cljs.core.Person.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__2362__auto__,writer__2363__auto__,opts__2364__auto__){
var self__ = this;
var pr_pair__2365__auto__ = (function (keyval__2366__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__2363__auto__,cljs.core.pr_writer,""," ","",opts__2364__auto__,keyval__2366__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__2363__auto__,pr_pair__2365__auto__,[cljs.core.str("#"),cljs.core.str("Person"),cljs.core.str("{")].join(''),", ","}",opts__2364__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'first",self__.first),cljs.core.vector.call(null,"\uFDD0'last",self__.last),cljs.core.vector.call(null,"\uFDD0'id",self__.id)], true),self__.__extmap));
});
data_binding_cljs.core.Person.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2353__auto__,entry__2354__auto__){
var self__ = this;
if(cljs.core.vector_QMARK_.call(null,entry__2354__auto__))
{return this__2353__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2353__auto__,cljs.core._nth.call(null,entry__2354__auto__,0),cljs.core._nth.call(null,entry__2354__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2353__auto__,entry__2354__auto__);
}
});
data_binding_cljs.core.Person.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2360__auto__){
var self__ = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'first",self__.first),cljs.core.vector.call(null,"\uFDD0'last",self__.last),cljs.core.vector.call(null,"\uFDD0'id",self__.id)], true),self__.__extmap));
});
data_binding_cljs.core.Person.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2352__auto__){
var self__ = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});
data_binding_cljs.core.Person.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2344__auto__,other__2345__auto__){
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
data_binding_cljs.core.Person.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2347__auto__,G__9668){
var self__ = this;
return (new data_binding_cljs.core.Person(self__.first,self__.last,self__.id,G__9668,self__.__extmap,self__.__hash));
});
data_binding_cljs.core.Person.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2346__auto__){
var self__ = this;
return self__.__meta;
});
data_binding_cljs.core.Person.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2357__auto__,k__2358__auto__){
var self__ = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'last","\uFDD0'first","\uFDD0'id"]),k__2358__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2357__auto__),self__.__meta),k__2358__auto__);
} else
{return (new data_binding_cljs.core.Person(self__.first,self__.last,self__.id,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__2358__auto__)),null));
}
});
data_binding_cljs.core.Person.cljs$lang$type = true;
data_binding_cljs.core.Person.cljs$lang$ctorPrSeq = (function (this__2383__auto__){
return cljs.core.list.call(null,"data-binding-cljs.core/Person");
});
data_binding_cljs.core.Person.cljs$lang$ctorPrWriter = (function (this__2383__auto__,writer__2384__auto__){
return cljs.core._write.call(null,writer__2384__auto__,"data-binding-cljs.core/Person");
});
data_binding_cljs.core.__GT_Person = (function __GT_Person(first,last,id){
return (new data_binding_cljs.core.Person(first,last,id));
});
data_binding_cljs.core.map__GT_Person = (function map__GT_Person(G__9670){
return (new data_binding_cljs.core.Person((new cljs.core.Keyword("\uFDD0'first")).call(null,G__9670),(new cljs.core.Keyword("\uFDD0'last")).call(null,G__9670),(new cljs.core.Keyword("\uFDD0'id")).call(null,G__9670),null,cljs.core.dissoc.call(null,G__9670,"\uFDD0'first","\uFDD0'last","\uFDD0'id")));
});
data_binding_cljs.core.full_name = (function full_name(person){
return [cljs.core.str(cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'first")).call(null,person))),cljs.core.str(" "),cljs.core.str(cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'last")).call(null,person)))].join('');
});
data_binding_cljs.core.greeting_template = (function greeting_template(person){
return jayq.core.$.call(null,[cljs.core.str("<div"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str((function (){var attrs9675 = [cljs.core.str("Hello, "),cljs.core.str(data_binding_cljs.core.full_name.call(null,person)),cljs.core.str("!")].join('');
if(cljs.core.map_QMARK_.call(null,attrs9675))
{return [cljs.core.str("<h1"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs9675))),cljs.core.str(">"),cljs.core.str("</h1>")].join('');
} else
{return [cljs.core.str("<h1>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs9675)),cljs.core.str("</h1>")].join('');
}
})()),cljs.core.str("</div>")].join(''));
});
data_binding_cljs.core.$main = data_binding_cljs.core.$.call(null,"#main");
data_binding_cljs.core.me = (new data_binding_cljs.core.Person(data_binding_cljs.core.bindable.call(null,"Simon"),data_binding_cljs.core.bindable.call(null,"Hicks"),1));
data_binding_cljs.core.princess = (new data_binding_cljs.core.Person(data_binding_cljs.core.bindable.call(null,"Linda"),data_binding_cljs.core.bindable.call(null,"Guyse"),2));
var node1_9684 = (function (){var template_id__9374__auto__ = cljs.core.name.call(null,cljs.core.gensym.call(null));
var _STAR_template_id_STAR_9676 = data_binding_cljs.core._STAR_template_id_STAR_;
var _STAR_template_fn_STAR_9677 = data_binding_cljs.core._STAR_template_fn_STAR_;
var _STAR_template_args_STAR_9678 = data_binding_cljs.core._STAR_template_args_STAR_;
try{data_binding_cljs.core._STAR_template_id_STAR_ = template_id__9374__auto__;
data_binding_cljs.core._STAR_template_fn_STAR_ = data_binding_cljs.core.greeting_template;
data_binding_cljs.core._STAR_template_args_STAR_ = cljs.core.apply.call(null,cljs.core.vector,cljs.core.PersistentVector.fromArray([data_binding_cljs.core.me], true));
return jayq.core.attr.call(null,cljs.core.apply.call(null,data_binding_cljs.core.greeting_template,cljs.core.PersistentVector.fromArray([data_binding_cljs.core.me], true)),"\uFDD0'data-templateuuid",template_id__9374__auto__);
}finally {data_binding_cljs.core._STAR_template_args_STAR_ = _STAR_template_args_STAR_9678;
data_binding_cljs.core._STAR_template_fn_STAR_ = _STAR_template_fn_STAR_9677;
data_binding_cljs.core._STAR_template_id_STAR_ = _STAR_template_id_STAR_9676;
}})();
var node2_9685 = (function (){var template_id__9374__auto__ = cljs.core.name.call(null,cljs.core.gensym.call(null));
var _STAR_template_id_STAR_9680 = data_binding_cljs.core._STAR_template_id_STAR_;
var _STAR_template_fn_STAR_9681 = data_binding_cljs.core._STAR_template_fn_STAR_;
var _STAR_template_args_STAR_9682 = data_binding_cljs.core._STAR_template_args_STAR_;
try{data_binding_cljs.core._STAR_template_id_STAR_ = template_id__9374__auto__;
data_binding_cljs.core._STAR_template_fn_STAR_ = data_binding_cljs.core.greeting_template;
data_binding_cljs.core._STAR_template_args_STAR_ = cljs.core.apply.call(null,cljs.core.vector,cljs.core.PersistentVector.fromArray([data_binding_cljs.core.princess], true));
return jayq.core.attr.call(null,cljs.core.apply.call(null,data_binding_cljs.core.greeting_template,cljs.core.PersistentVector.fromArray([data_binding_cljs.core.princess], true)),"\uFDD0'data-templateuuid",template_id__9374__auto__);
}finally {data_binding_cljs.core._STAR_template_args_STAR_ = _STAR_template_args_STAR_9682;
data_binding_cljs.core._STAR_template_fn_STAR_ = _STAR_template_fn_STAR_9681;
data_binding_cljs.core._STAR_template_id_STAR_ = _STAR_template_id_STAR_9680;
}})();
jayq.core.append.call(null,jayq.core.append.call(null,data_binding_cljs.core.$main,node1_9684),node2_9685);
