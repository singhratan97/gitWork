(()=>{"use strict";function e(e,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}var o=new(function(){function o(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),n(this,"username",void 0),n(this,"email",void 0),n(this,"color",void 0),this.username=e.userName,this.email=e.Email,this.color=e.Color}var r,t;return r=o,(t=[{key:"getUsername",value:function(){console.log(this.username)}},{key:"getEmail",value:function(){console.log(this.email)}},{key:"getColor",value:function(){console.log(this.color)}}])&&e(r.prototype,t),o}())({userName:"ratann",Email:"ratan@email.com",Color:"red"});o.getUsername(),o.getEmail(),o.getColor()})();