seajs.use(["jquery","scValidator"],function(a,b){a(function(){(new b.register({form:".scr-wrapper",id:"#username",mail:"#mail",password:"#password",password2:"#password2",agree:"#remember",submit:"#register",submitIng:"#register-ing"})).initialize()})});seajs.use(["jquery","scPlaceholder"],function(a,b){a(function(){a(".ipt, .pwd").each(function(d,c){b(a(c),{width:312,height:30,top:0,left:0,textIndent:"7px"})})})});
