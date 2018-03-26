var doc = document, bod = doc.body;
function E(e){
  return doc.getElementById(e);
}
function inArray(value, array){
  for(var i=0,l=array.length; i<l; i++){
    if(array[i] === value){
      return true;
    }
  }
  return false;
}
function wow(string, outputElement, beforeArray, afterArray){
  var s = string.split('');
  for(var i=0,l=s.length; i<l; i++){
    (function(i){
      var sp = doc.creatElement('span'), t = s[i];
      sp.innerHTML = t;
      sp.onmouseover = function(ev){
        var e = ev || event;
        var rt = e.relatedTarget;
        while(rt && rt !== sp){
          rt = rt.parentNode;
        }
        if(rt !== sp && inArray(t, beforeArray) && afterArray[beforeArray.indexOf(t)]){
          sp.innerHTML = afterArray[beforeArray.indexOf(t)];
        }
      }
      sp.onmouseout = function(ev){
        var e = ev || event;
        var rt = e.relatedTarget;
        while(rt && rt !== sp){
          rt = rt.parentNode;
        }
        if(rt !== sp){
          sp.innerHTML = t;
        }
      }
      outputElement.appendChild(sp);
    })(i);
  }
}