(()=>{"use strict";function e(e,o){for(var n=0;n<o.length;n++){var r=o[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}var n=new(function(){function n(e){!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,n),o(this,"username",void 0),o(this,"email",void 0),o(this,"color",void 0),this.username=e.userName,this.email=e.Email,this.color=e.Color}var r,t;return r=n,(t=[{key:"getUsername",value:function(){console.log(this.username)}},{key:"getEmail",value:function(){console.log(this.email)}},{key:"getColor",value:function(){console.log(this.color)}}])&&e(r.prototype,t),n}())({userName:"ratan1",Email:"ratan@email.com",Color:"red"});n.getUsername(),n.getEmail(),n.getColor()})();