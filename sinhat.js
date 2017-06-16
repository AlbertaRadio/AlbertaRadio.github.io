<!DOCTYPE HTML>
<html>
  <head>
  </head>

  <body>
    <canvas id="myCanvas" width="1024" height="600"</canvas>

    <script>
      
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      var r = 5;
      var t = 0;
      
      var av = 20;        
      var lw = 1;  
      var ls = 5;  
      
      
      
      function SinHat() {
        
       dr=3.1415/180       
       x = r*Math.cos(t*dr) | 0;
       y = r*Math.sin(r*dr)| 0;
       z = r*Math.sin(t*dr)| 0;
       xp = x+(Math.cos(av*dr)*z)  | 0;
       yp = y+(Math.sin(av*dr)*z) | 0;
       xp = xp+512;
       yp = 180-yp;
     
            
       if ((r==5 && t==0) || (t==0)) 
            {
              context.beginPath();
              context.moveTo(xp, yp);
            }
       else {
              context.lineTo(xp, yp);
            }
        
       t=t+5;

       if (t>360) 
            {
            t=0;
            context.closePath();
            context.lineWidth=lw
            context.stroke();
              
            r=r+ls;
            if (r>330) { clearInterval(h); h=0;}            
            }
          
      }
        
      
          var h=setInterval("SinHat();",0);
      
    </script>
     
  </body>
</html>
