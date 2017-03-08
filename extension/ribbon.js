window.addEventListener("load", function() {
    var url = location.href;
    var ribbon;
    var b;
    if (url.match(/kumakoths|koz-h/)) {
        // Alignment left
        ribbon = '<style>#forkongithub a{background:#fff;color:#222;text-decoration:none;font-family:arial,sans-serif;text-align:center;font-weight:bold;padding:5px 40px;font-size:1rem;line-height:2rem;position:relative;transition:0.5s;}#forkongithub a:hover{background:#400B36;color:#fff;}#forkongithub a::before,#forkongithub a::after{content:"";width:100%;display:block;position:absolute;top:1px;left:0;height:1px;background:#aaa;}#forkongithub a::after{bottom:1px;top:auto;}@media screen and (min-width:100px){#forkongithub{position:fixed;display:block;top:0;left:0;width:200px;overflow:hidden;height:200px;z-index:9999;}#forkongithub a{width:200px;position:absolute;top:60px;left:-60px;transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);box-shadow:4px 4px 10px rgba(0,0,0,0.8);}}</style><span id="forkongithub"><a href="http://mainichi.jp/koshien/senbatsu/">第89回センバツ出場校</a></span>';
    } else {
        // Alignment right
        ribbon = '<style>#forkongithub a{background:#fff;color:#222;text-decoration:none;font-family:arial,sans-serif;text-align:center;font-weight:bold;padding:5px 40px;font-size:1rem;line-height:2rem;position:relative;transition:0.5s;}#forkongithub a:hover{background:#400b36;color:#fff;}#forkongithub a::before,#forkongithub a::after{content:"";width:100%;display:block;position:absolute;top:1px;left:0;height:1px;background:#aaa;}#forkongithub a::after{bottom:1px;top:auto;}@media screen and (min-width:800px){#forkongithub{position:fixed;display:block;top:0;right:0;width:200px;overflow:hidden;height:200px;z-index:9999;}#forkongithub a{width:200px;position:absolute;top:60px;right:-60px;transform:rotate(45deg);-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);box-shadow:4px 4px 10px rgba(0,0,0,0.8);}}</style><span id="forkongithub"><a href="http://mainichi.jp/koshien/senbatsu/">第89回センバツ出場校</a></span>';
    }
    if (url.match(/sendaiikuei|kumakoths|koz-h/)) {
        // For frame
        b = window.frames[0].document.body;
    } else {
        b = document.body;
    }
    b.innerHTML = b.innerHTML + ribbon;
}, false);
