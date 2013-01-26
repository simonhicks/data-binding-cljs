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
log.cljs$lang$applyTo = (function (arglist__58706){
var stuff = cljs.core.seq(arglist__58706);;
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
var G__58707__delegate = function (xs){
return cljs.core.every_QMARK_.call(null,exist_QMARK_,xs);
};
var G__58707 = function (var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__58707__delegate.call(this, xs);
};
G__58707.cljs$lang$maxFixedArity = 0;
G__58707.cljs$lang$applyTo = (function (arglist__58708){
var xs = cljs.core.seq(arglist__58708);;
return G__58707__delegate(xs);
});
G__58707.cljs$lang$arity$variadic = G__58707__delegate;
return G__58707;
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
var template_id__42152__auto__ = cljs.core.name.call(null,cljs.core.gensym.call(null));
var _STAR_template_id_STAR_58712 = data_binding_cljs.core._STAR_template_id_STAR_;
var _STAR_template_fn_STAR_58713 = data_binding_cljs.core._STAR_template_fn_STAR_;
try{data_binding_cljs.core._STAR_template_id_STAR_ = template_id__42152__auto__;
data_binding_cljs.core._STAR_template_fn_STAR_ = template_fn;
return jayq.core.attr.call(null,jayq.core.$.call(null,template_fn.call(null)),"\uFDD0'data-templateuuid",template_id__42152__auto__);
}finally {data_binding_cljs.core._STAR_template_fn_STAR_ = _STAR_template_fn_STAR_58713;
data_binding_cljs.core._STAR_template_id_STAR_ = _STAR_template_id_STAR_58712;
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
{var x__2611__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3824__auto__ = (data_binding_cljs.core._get[goog.typeOf(x__2611__auto__)]);
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
{var x__2611__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3824__auto__ = (data_binding_cljs.core._set[goog.typeOf(x__2611__auto__)]);
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
data_binding_cljs.core.Bindable.cljs$lang$ctorPrSeq = (function (this__2551__auto__){
return cljs.core.list.call(null,"data-binding-cljs.core/Bindable");
});
data_binding_cljs.core.Bindable.cljs$lang$ctorPrWriter = (function (this__2551__auto__,writer__2552__auto__,opt__2553__auto__){
return cljs.core._write.call(null,writer__2552__auto__,"data-binding-cljs.core/Bindable");
});
data_binding_cljs.core.Bindable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
return goog.getUid(this$);
});
data_binding_cljs.core.Bindable.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var G__58715 = cljs.core.seq.call(null,self__.watches);
while(true){
if(G__58715)
{var vec__58716 = cljs.core.first.call(null,G__58715);
var key = cljs.core.nth.call(null,vec__58716,0,null);
var f = cljs.core.nth.call(null,vec__58716,1,null);
f.call(null,key,this$,oldval,newval);
{
var G__58717 = cljs.core.next.call(null,G__58715);
G__58715 = G__58717;
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
{var watch_key_58718 = cljs.core.symbol.call(null,data_binding_cljs.core._STAR_template_id_STAR_);
var template_id_58719 = data_binding_cljs.core._STAR_template_id_STAR_;
var template_fn_58720 = data_binding_cljs.core._STAR_template_fn_STAR_;
cljs.core.add_watch.call(null,this$,watch_key_58718,(function (){
cljs.core.remove_watch.call(null,this$,watch_key_58718);
return data_binding_cljs.core.re_render_template.call(null,template_id_58719,template_fn_58720);
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
data_binding_cljs.core.apply_single_binding = (function (){var method_table__2783__auto__ = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var prefer_table__2784__auto__ = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var method_cache__2785__auto__ = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var cached_hierarchy__2786__auto__ = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var hierarchy__2787__auto__ = cljs.core._lookup.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'default"],{"\uFDD0'default":"\uFDD0'default"}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);
return (new cljs.core.MultiFn("apply-single-binding",data_binding_cljs.core.binding_type,"\uFDD0'default",hierarchy__2787__auto__,method_table__2783__auto__,prefer_table__2784__auto__,method_cache__2785__auto__,cached_hierarchy__2786__auto__));
})();
cljs.core._add_method.call(null,data_binding_cljs.core.apply_single_binding,cljs.core.PersistentVector.fromArray(["\uFDD0'INPUT","\uFDD0'text"], true),(function (node,bound){
var current = cljs.core.deref.call(null,bound);
return jayq.core.on.call(null,jayq.core.val.call(null,jayq.core.$.call(null,node),current),"\uFDD0'change",(function (e){
var newval = jayq.core.val.call(null,jayq.core.$.call(null,node));
return cljs.core.reset_BANG_.call(null,bound,newval);
}));
}));
cljs.core._add_method.call(null,data_binding_cljs.core.apply_single_binding,"\uFDD0'default",(function (node,bound){
var current = cljs.core.deref.call(null,bound);
return jayq.core.text.call(null,jayq.core.$.call(null,node),current);
}));
data_binding_cljs.core.apply_binding = (function apply_binding(node_set,bound){
var G__58722 = cljs.core.seq.call(null,node_set);
while(true){
if(G__58722)
{var node = cljs.core.first.call(null,G__58722);
data_binding_cljs.core.apply_single_binding.call(null,node,bound);
{
var G__58723 = cljs.core.next.call(null,G__58722);
G__58722 = G__58723;
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
var G__58727__delegate = function (x,p__58724){
var map__58726 = p__58724;
var map__58726__$1 = ((cljs.core.seq_QMARK_.call(null,map__58726))?cljs.core.apply.call(null,cljs.core.hash_map,map__58726):map__58726);
var validator = cljs.core._lookup.call(null,map__58726__$1,"\uFDD0'validator",null);
var meta = cljs.core._lookup.call(null,map__58726__$1,"\uFDD0'meta",null);
return (new data_binding_cljs.core.Bindable(x,meta,validator,null));
};
var G__58727 = function (x,var_args){
var p__58724 = null;
if (goog.isDef(var_args)) {
  p__58724 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__58727__delegate.call(this, x, p__58724);
};
G__58727.cljs$lang$maxFixedArity = 1;
G__58727.cljs$lang$applyTo = (function (arglist__58728){
var x = cljs.core.first(arglist__58728);
var p__58724 = cljs.core.rest(arglist__58728);
return G__58727__delegate(x, p__58724);
});
G__58727.cljs$lang$arity$variadic = G__58727__delegate;
return G__58727;
})()
;
bindable = function(x,var_args){
var p__58724 = var_args;
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
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
data_binding_cljs.core.Person = (function (first,last,__meta,__extmap){
this.first = first;
this.last = last;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
data_binding_cljs.core.Person.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__2564__auto__){
var self__ = this;
var h__2432__auto__ = self__.__hash;
if(!((h__2432__auto__ == null)))
{return h__2432__auto__;
} else
{var h__2432__auto____$1 = cljs.core.hash_imap.call(null,this__2564__auto__);
self__.__hash = h__2432__auto____$1;
return h__2432__auto____$1;
}
});
data_binding_cljs.core.Person.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2569__auto__,k__2570__auto__){
var self__ = this;
return this__2569__auto__.cljs$core$ILookup$_lookup$arity$3(this__2569__auto__,k__2570__auto__,null);
});
data_binding_cljs.core.Person.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2571__auto__,k58730,else__2572__auto__){
var self__ = this;
if((k58730 === "\uFDD0'first"))
{return self__.first;
} else
{if((k58730 === "\uFDD0'last"))
{return self__.last;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,self__.__extmap,k58730,else__2572__auto__);
} else
{return null;
}
}
}
});
data_binding_cljs.core.Person.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2576__auto__,k__2577__auto__,G__58729){
var self__ = this;
var pred__58732 = cljs.core.identical_QMARK_;
var expr__58733 = k__2577__auto__;
if(pred__58732.call(null,"\uFDD0'first",expr__58733))
{return (new data_binding_cljs.core.Person(G__58729,self__.last,self__.__meta,self__.__extmap,null));
} else
{if(pred__58732.call(null,"\uFDD0'last",expr__58733))
{return (new data_binding_cljs.core.Person(self__.first,G__58729,self__.__meta,self__.__extmap,null));
} else
{return (new data_binding_cljs.core.Person(self__.first,self__.last,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__2577__auto__,G__58729),null));
}
}
});
data_binding_cljs.core.Person.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__2583__auto__,writer__2584__auto__,opts__2585__auto__){
var self__ = this;
var pr_pair__2586__auto__ = (function (keyval__2587__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__2584__auto__,cljs.core.pr_writer,""," ","",opts__2585__auto__,keyval__2587__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__2584__auto__,pr_pair__2586__auto__,[cljs.core.str("#"),cljs.core.str("Person"),cljs.core.str("{")].join(''),", ","}",opts__2585__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'first",self__.first),cljs.core.vector.call(null,"\uFDD0'last",self__.last)], true),self__.__extmap));
});
data_binding_cljs.core.Person.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2574__auto__,entry__2575__auto__){
var self__ = this;
if(cljs.core.vector_QMARK_.call(null,entry__2575__auto__))
{return this__2574__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2574__auto__,cljs.core._nth.call(null,entry__2575__auto__,0),cljs.core._nth.call(null,entry__2575__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2574__auto__,entry__2575__auto__);
}
});
data_binding_cljs.core.Person.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2581__auto__){
var self__ = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'first",self__.first),cljs.core.vector.call(null,"\uFDD0'last",self__.last)], true),self__.__extmap));
});
data_binding_cljs.core.Person.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2573__auto__){
var self__ = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});
data_binding_cljs.core.Person.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2565__auto__,other__2566__auto__){
var self__ = this;
if(cljs.core.truth_((function (){var and__3822__auto__ = other__2566__auto__;
if(cljs.core.truth_(and__3822__auto__))
{var and__3822__auto____$1 = (this__2565__auto__.constructor === other__2566__auto__.constructor);
if(and__3822__auto____$1)
{return cljs.core.equiv_map.call(null,this__2565__auto__,other__2566__auto__);
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
data_binding_cljs.core.Person.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2568__auto__,G__58729){
var self__ = this;
return (new data_binding_cljs.core.Person(self__.first,self__.last,G__58729,self__.__extmap,self__.__hash));
});
data_binding_cljs.core.Person.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2567__auto__){
var self__ = this;
return self__.__meta;
});
data_binding_cljs.core.Person.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2578__auto__,k__2579__auto__){
var self__ = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'last","\uFDD0'first"]),k__2579__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2578__auto__),self__.__meta),k__2579__auto__);
} else
{return (new data_binding_cljs.core.Person(self__.first,self__.last,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__2579__auto__)),null));
}
});
data_binding_cljs.core.Person.cljs$lang$type = true;
data_binding_cljs.core.Person.cljs$lang$ctorPrSeq = (function (this__2604__auto__){
return cljs.core.list.call(null,"data-binding-cljs.core/Person");
});
data_binding_cljs.core.Person.cljs$lang$ctorPrWriter = (function (this__2604__auto__,writer__2605__auto__){
return cljs.core._write.call(null,writer__2605__auto__,"data-binding-cljs.core/Person");
});
data_binding_cljs.core.__GT_Person = (function __GT_Person(first,last){
return (new data_binding_cljs.core.Person(first,last));
});
data_binding_cljs.core.map__GT_Person = (function map__GT_Person(G__58731){
return (new data_binding_cljs.core.Person((new cljs.core.Keyword("\uFDD0'first")).call(null,G__58731),(new cljs.core.Keyword("\uFDD0'last")).call(null,G__58731),null,cljs.core.dissoc.call(null,G__58731,"\uFDD0'first","\uFDD0'last")));
});
data_binding_cljs.core.full_name = (function full_name(person){
return [cljs.core.str(cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'first")).call(null,person))),cljs.core.str(" "),cljs.core.str(cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'last")).call(null,person)))].join('');
});
data_binding_cljs.core.greeting_template = (function greeting_template(person){
var node__42144__auto__ = jayq.core.$.call(null,[cljs.core.str("<div"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str("<span><input id=\"first\" type=\"text\" /><input id=\"last\" type=\"text\" /></span>"),cljs.core.str((function (){var attrs58742 = [cljs.core.str("Hello, "),cljs.core.str(data_binding_cljs.core.full_name.call(null,person)),cljs.core.str("!")].join('');
if(cljs.core.map_QMARK_.call(null,attrs58742))
{return [cljs.core.str("<h1"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":null,"\uFDD0'class":null}),attrs58742))),cljs.core.str(">"),cljs.core.str("</h1>")].join('');
} else
{return [cljs.core.str("<h1>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs58742)),cljs.core.str("</h1>")].join('');
}
})()),cljs.core.str("</div>")].join(''));
var G__58743_58745 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.fromArray(["#first",(new cljs.core.Keyword("\uFDD0'first")).call(null,person),"#last",(new cljs.core.Keyword("\uFDD0'last")).call(null,person)], true)));
while(true){
if(G__58743_58745)
{var vec__58744_58746 = cljs.core.first.call(null,G__58743_58745);
var selector__42145__auto___58747 = cljs.core.nth.call(null,vec__58744_58746,0,null);
var bound__42146__auto___58748 = cljs.core.nth.call(null,vec__58744_58746,1,null);
data_binding_cljs.core.apply_binding.call(null,jayq.core.find.call(null,node__42144__auto__,selector__42145__auto___58747),bound__42146__auto___58748);
{
var G__58749 = cljs.core.next.call(null,G__58743_58745);
G__58743_58745 = G__58749;
continue;
}
} else
{}
break;
}
return node__42144__auto__;
});
data_binding_cljs.core.$main = jayq.core.$.call(null,"#main");
data_binding_cljs.core.me = (new data_binding_cljs.core.Person(data_binding_cljs.core.bindable.call(null,"Simon"),data_binding_cljs.core.bindable.call(null,"Hicks"),1));
data_binding_cljs.core.princess = (new data_binding_cljs.core.Person(data_binding_cljs.core.bindable.call(null,"Linda"),data_binding_cljs.core.bindable.call(null,"Guyse"),2));
var node1_58756 = (function (){var template_id__42152__auto__ = cljs.core.name.call(null,cljs.core.gensym.call(null));
var _STAR_template_id_STAR_58750 = data_binding_cljs.core._STAR_template_id_STAR_;
var _STAR_template_fn_STAR_58751 = data_binding_cljs.core._STAR_template_fn_STAR_;
try{data_binding_cljs.core._STAR_template_id_STAR_ = template_id__42152__auto__;
data_binding_cljs.core._STAR_template_fn_STAR_ = (function (){
return data_binding_cljs.core.greeting_template.call(null,data_binding_cljs.core.me);
});
return jayq.core.attr.call(null,jayq.core.$.call(null,data_binding_cljs.core.greeting_template.call(null,data_binding_cljs.core.me)),"\uFDD0'data-templateuuid",template_id__42152__auto__);
}finally {data_binding_cljs.core._STAR_template_fn_STAR_ = _STAR_template_fn_STAR_58751;
data_binding_cljs.core._STAR_template_id_STAR_ = _STAR_template_id_STAR_58750;
}})();
var node2_58757 = (function (){var template_id__42152__auto__ = cljs.core.name.call(null,cljs.core.gensym.call(null));
var _STAR_template_id_STAR_58753 = data_binding_cljs.core._STAR_template_id_STAR_;
var _STAR_template_fn_STAR_58754 = data_binding_cljs.core._STAR_template_fn_STAR_;
try{data_binding_cljs.core._STAR_template_id_STAR_ = template_id__42152__auto__;
data_binding_cljs.core._STAR_template_fn_STAR_ = (function (){
return data_binding_cljs.core.greeting_template.call(null,data_binding_cljs.core.princess);
});
return jayq.core.attr.call(null,jayq.core.$.call(null,data_binding_cljs.core.greeting_template.call(null,data_binding_cljs.core.princess)),"\uFDD0'data-templateuuid",template_id__42152__auto__);
}finally {data_binding_cljs.core._STAR_template_fn_STAR_ = _STAR_template_fn_STAR_58754;
data_binding_cljs.core._STAR_template_id_STAR_ = _STAR_template_id_STAR_58753;
}})();
jayq.core.append.call(null,jayq.core.append.call(null,data_binding_cljs.core.$main,node1_58756),node2_58757);
