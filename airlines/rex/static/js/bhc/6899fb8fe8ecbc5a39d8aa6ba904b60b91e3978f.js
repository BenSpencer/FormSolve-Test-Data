if(booking.env.enable_scripts_tracking){booking.env.scripts_tracking.bhc={loaded:true,run:false}
}var booking=booking||{};
(function(){if(booking.jstmpl){return
}var r,e,q,l=42,a,x,d,E,J,s,w,c,D,n,o,G,g,C,f,u,I,B,p,y,F,k,i,j,z,v,K,H,A,t,b,m,h;
x=function(L){this.closure=L
};
d=function(L){var M=[];
s(M,L,0);
return M.length===1?M[0]:M.join("")
};
h=function(L){L=L||"BHCJS runtime issue";
if(booking&&booking.env&&booking.env.b_dev_server){throw L
}else{console.warn(L)
}};
J=function(M){if(typeof M!=="string"||M.indexOf("{")===-1){return M
}var L=[];
c(L,M,0);
return L.length===1?L[0]:L.join("")
};
n=new Array(l);
c=function(P,R,O){var T=0;
var M=R.length;
for(;
;
){var L=R.indexOf("{",T);
if(L===-1){if(T===0){P.push(R)
}else{P.push(R.substring(T))
}break
}else{if(L!==T){P.push(R.substring(T,L))
}}var N=R.indexOf("}",L+1);
if(N===L+1){continue
}if(N===-1){P.push(R.substring(T));
break
}for(var S=L+1;
S<N;
++S){var Q=R.charAt(S).toLowerCase();
if(!((Q>="0"&&Q<="9")||(Q>="a"&&Q<="z")||Q=="_"||Q=="/")){break
}}if(S===N){s(P,R.substring(L+1,N),O+1);
T=N+1
}else{P.push(R.substring(L,S));
T=S
}}};
s=function(P,N,Q){if(Q>0){if(Q>=l){console.warn("Detected excessive recursion in tag sequence: %s, returning '%s'",interpolate_tags.slice(1,l).join(" "),value);
P.push(N);
return
}else{if(N===n[Q-1]){console.warn("Detected self-referential tag '%s', returning '%s'",value,value);
P.push(N);
return
}}}n[Q]=N;
for(var O=0,L=q.length;
O<L;
++O){if(N in q[O]){var M=q[O][N];
if(typeof M==="string"&&M.indexOf("{")!==-1){c(P,M,Q+1)
}else{P.push(M)
}return
}}if(a&&N in a){M=a[N];
if(typeof M==="string"&&M.indexOf("{")!==-1){c(P,M,Q+1)
}else{P.push(M)
}return
}P.push("")
};
w=function(M){for(var N=0,L=q.length;
N<L;
++N){if(M in q[N]){return q[N][M]
}}return""
};
o=function(N){for(var O=0,L=q.length;
O<L;
++O){if(N in q[O]){var M=q[O][N];
return M instanceof Array?M.length:M==="0"?0:M
}}if(a&&N in a){return a[N]
}return false
};
C=function(L){return L==="0"?"":L?1:""
};
f=function(L){return L==="0"?1:!L?1:""
};
u=function(M){var L=parseFloat(M);
return isFinite(L)?L:0
};
g=function(L,M){q[q.length-1][L]=M
};
p=function(O,N,M){var L=[];
O=O||0;
N=N||0;
M=Math.abs(M||1);
if(/^[A-Za-z]$/.exec(O)||/^[A-Za-z]$/.exec(N)){if(O.length!==1||N.length!==1||(/[a-z]/.exec(O)&&!/[a-z]/.exec(N))||(/[A-Z]/.exec(O)&&!/[A-Z]/.exec(N))){h("Invalid range '"+O+"'-'"+N+"' in seq()")
}O=O.charCodeAt(0);
N=N.charCodeAt(0);
if(O<=N){while(O<=N){L.push({value:String.fromCharCode(O)});
O+=M
}}else{while(O>=N){L.push({value:String.fromCharCode(O)});
O-=M
}}}else{if(O<=N){while(O<=N){L.push({value:O});
O+=M
}}else{while(O>=N){L.push({value:O});
O-=M
}}}return L
};
I=function(Q,P){var O=[];
for(var N=0;
N<P;
++N){for(var M=0,L=Q.length;
M<L;
++M){O.push(Q[M])
}}return O
};
z=function(L){return L.charAt(0).toUpperCase()+L.substr(1)
};
v=function(L){return L.charAt(0).toLowerCase()+L.substr(1)
};
K=function(O){var N=O.split(/\s/);
for(var M=0,L=N.length;
M<L;
++M){N[M]=z(N[M])
}return N.join(" ")
};
A=function(M){var O=M.toString();
for(var N=1,L=arguments.length;
N<L;
++N){if(arguments[N].toString()===O){return 1
}}return 0
};
y=function(L){if(L===undefined){return Math.random()
}else{return Math.random()*L
}};
G=function(N,M,L,O){h("to use TMPL_TRANS/TMPL_TRANSLIST, pass 'get_trans' to setup()")
};
E=function(N,L,M){h("to use TMPL_TEXT, pass 'get_text' to setup()")
};
B=function(N,L,O,M){h("to use TMPL_STATIC_URL/TMPL_SCRIPT_URL, pass 'get_static_hostname' to setup()")
};
i=function(M,N,L){return M.substr(N,L)
};
j=function(){var L=[].slice.apply(arguments),N=L.splice(0,1)[0],M;
while(M=L.splice(0,1)[0]){N=N.replace(/%\w/,M)
}return N
};
F=function(L){return L!==undefined?1:0
};
H=function(){return +new Date()/1000
};
m={};
b={};
x.prototype={render:function(M,L){M=M||{};
q=[M];
return this.closure(q)
},fn:{FILTERS:m,GET_VAR:d,GET_V:w,GET_IF_VAR:o,INTERPOLATE:J,GET_TRANS:G,SET_VAR:g,GET_TEXT:E,PERL_BOOL:C,PERL_NOT:f,PARSE_FLOAT:u,REPEAT_ARRAY:I,STATIC_HOSTNAME:B,seq:p,defined:F,substr:i,sprintf:j,ucfirst:z,lcfirst:v,ucfirstword:K,rand:y,time:H,in_array:A}};
e=function(L){var M=function(O,N){if(!N){return
}for(var P in N){if(N.hasOwnProperty(P)){O[P]=N[P]
}}};
M(x.prototype.fn,L.fn);
M(x.prototype.fn.FILTERS,L.filters);
if("get_trans" in L){x.prototype.fn.GET_TRANS=L.get_trans
}if("get_text" in L){x.prototype.fn.GET_TEXT=L.get_text
}if("get_static_hostname" in L){x.prototype.fn.STATIC_HOSTNAME=L.get_static_hostname
}if("translations" in L){a=L.translations
}};
r=function(M,N){if(N===undefined){return M in b?b[M]:null
}else{var L=new x(N);
b[M]=L;
return L
}};
r.setup=e;
r.fn=x.prototype.fn;
booking.jstmpl=r
}());
(function(i){if(i.jstmpl.translations){return
}var f,g,h,b,c,d,e=i.jstmpl;
var f=function(l,j,k,p){var o=0;
if(p){if(/^[0-9]+$/.test(p)){o=parseInt(p,10)
}else{var m=j(p);
if(!/^[0-9]+$/.test(m)){console.warn("Trying to use a non-numeric template var for exception tool on copy '%s'",l)
}else{o=m
}}k("num",o)
}return h(l,j,k,o,!!p,false)
};
var h=function(w,v,p,l,m){var q=w.split("/");
var x;
if(q[0]===""){q.shift()
}if(q.length==1){var j=q[0];
if(j.charAt(0)==="{"&&j.charAt(j.length-1)==="}"){j=j.substr(1,j.length-2)
}q=["private",j,"name"]
}for(var r=0,u=q.length;
r<u;
++r){var j=q[r];
if(j.charAt(0)==="{"&&j.charAt(j.length-1)==="}"){q[r]=v(j.substr(1,j.length-2))
}}x=b(q[0],q[1],q[2]);
if(m){x=c(q,l)||x
}if(x){var t=x.match(/{.*?}/g);
if(!t){return x
}for(var r=0,u=t.length;
r<u;
++r){var o=t[r],k;
if(o.indexOf("/")===-1){k=v(o.substr(1,o.length-2))
}else{k=h(o,v,p,l,m)
}x=x.split(o).join(k)
}}return x||""
};
var b=function(k,l,j){if(k==="private"){return(d["private"]||{})[l]
}else{return((d[k]||{})[l]||{})[j||"name"]
}};
var c=function(m,j){var r="",p="language_exception_"+m[1]+"_";
if(m[0]!=="private"){r="_"+m[2]
}var s=[j];
if(j>=100){var k=j%100;
if(k<10){s.push("*0")
}s.push("*"+k)
}if(j>=10){s.push("*"+(j%10))
}for(var o=0,q=s.length;
o<q;
++o){var t=b(m[0],p+j+r,m[2]);
if(t){return t
}}return""
};
var g=function(j,l,k){if(k){throw"Can't use TMPL_TEXT on client-side templates"
}return f(j,e.fn.GET_VAR,e.fn.SET_VAR,l)
};
e.setup({get_trans:f,get_text:g});
var a=function(j){var j=j||{};
return{gv:function(k){return j[k]||""
},sv:function(k,l){j[k]=l
}}
};
e.translations=function(j,m,k){var l=a(k);
return f(j,l.gv,l.sv,m)
};
e.translations.set=function(j){if(j){d=j;
e.setup({translations:j["private"]||{}})
}return d
}
})(window.booking||{});
(function(){if(booking.jstmpl.fn.track_experiment){return
}var a,b;
a=function(c){booking.track.exp(c);
return booking.track.getVariant(c)
};
b=function(c){return booking.track.getVariant(c)
};
booking.jstmpl.setup({fn:{track_experiment:a,experiment_variant:b}})
})();
if(booking.env.enable_scripts_tracking){booking.env.scripts_tracking.bhc.run=true
};