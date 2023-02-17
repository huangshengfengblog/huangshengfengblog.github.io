window.onload=function (){
    var obox=document.getElementById("content");
    var obj=obox.getElementsByClassName("randomcolor");
    //随机方法

    //随机颜色值
    function fanma(){
    var classes = ['bcolor1', 'bcolor2', 'bcolor3', 'bcolor3', 'bcolor4', 'bcolor5', 'bcolor6', 'bcolor7', 'bcolor8', 'bcolor9', 'bcolor10', 'bcolor11', 'bcolor12'];
      var str=classes[Math.floor(Math.random() * classes.length)];
      if(str.length<6){
        str="0"+str;
      }
      return str;
    }

    for( len=obj.length,i=len;i--;){
      obj[i].className="fanma-tag "+fanma();

    }
  }