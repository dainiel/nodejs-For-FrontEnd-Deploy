define(function(c){var d=c("jquery"),n=c("scHelpClick"),k=c("data/question"),g=d("#sch-search-content");return function(a){var a=a.keyword,c=[],l=0,h=d("<ul class='sch-content-list'></ul>");if(a){for(var i=0,o=k.length;i<o;i++)for(var m=k[i].content,j=0,p=m.length;j<p;j++){var b=m[j],e=b.q,b=b.a,f=RegExp("("+a+")","g");show=!1;-1!=e.search(a)&&(e=e.replace(f,"<span class='key-word'>$1</span>"),show=!0);-1!=b.search(a)&&(b=b.replace(f,"<span class='key-word'>$1</span>"),show=!0);show&&(f=d("<li class='sch-content-item'></li>"),
e=d('<h4 class="question"><a href="#">'+ ++l+"."+e+"</a></h4>"),b=d('<p class="answer">'+b+"</p>"),f.append(e,b),c.push(f),n(f,h,l-1))}0==c.length?(a=d('<div class="no-result"><p class="line-one">\u5f88\u62b1\u6b49\u6ca1\u6709\u627e\u5230\u4e0e <span class="key-word">'+a+'</span> \u76f8\u5173\u7684\u5185\u5bb9</p><p class="line-two">\u5efa\u8bae\u60a8\u8f93\u5165\u5176\u4ed6\u5173\u952e\u5b57\u8bd5\u8bd5 </p></div>'),g.html(a)):(h.html(c),g.html(h))}else a=d('<div class="no-result"><p class="line-three">\u641c\u7d22\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a! </p></div>'),
g.html(a)}});
