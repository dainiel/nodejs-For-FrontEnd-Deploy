define("scPlaceholder",function(g){var e=g("jquery"),h=!!("placeholder"in document.createElement("input"));return function(a,c){if(!h){var f=a.attr("placeholder");if(f){var d={width:c.width||a.outerWidth,height:c.height||a.outerHeight,left:c.left,top:c.top,textIndent:c.textIndent},b=e('<span class="placeholder"></span>');d.lineHeight=d.height+"px";b.on("click",function(b){e(b.target).hide();a.focus()});a.on("focus",function(){b.hide()});a.on("blur",function(){a.val()||b.show()});b.text(f);b.css(d);
a.after(b)}}}});