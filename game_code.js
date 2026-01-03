let huadom=true
let kztj=false

function creat_c(){
    c_dr.push(new circle_class())
  }

function xrc(){
    c_xr=true
    }
  function gameover(){
      yx=false
      if(ccc>zg){
        zg=ccc
      }
      document.getElementById("bcdf").innerHTML="本次得分:"+ccc
      ccc=0
      x=bc/2
      y=bc/2
      cc=0
      document.getElementById("ks").innerHTML="开始游戏"
      document.getElementById("zgfs").innerHTML="最高得分:"+zg
      dr=[]
      c_dr=[]
    }

    function circle_function() {
        c_dr.forEach((circle) => {
          //if(c_xr){
            //circle.ac=0.5
            //document.getElementById("xr").innerHTML="您已经削弱过了"
            //}
          const c_dx = x- circle.cx+red_w/2;
          const c_dy = y- circle.cy+red_w/2;
          const c_distance = Math.sqrt(c_dx * c_dx + c_dy * c_dy); // 修正变量名

          if(c_distance<(red_w+dr_w*2)/2 && !wd){
            gameover()
          }

          if (c_distance > 0) {
            const ax = (c_dx / c_distance) * circle.ac;
            const ay = (c_dy / c_distance) * circle.ac;
            circle.vx += ax;
            circle.vy += ay;
            circle.vx *= circle.fr;
            circle.vy *= circle.fr;
          }

          circle.cx += circle.vx;
          circle.cy += circle.vy;

          // 边界碰撞检测
          if (circle.cx - dr_w < 0) {
            circle.cx = dr_w;
            circle.vx *= -circle.bounceStrength;
          } else if (circle.cx + dr_w > canvas.width) {
            circle.cx = canvas.width - dr_w;
            circle.vx *= -circle.bounceStrength;
          }

          if (circle.cy - dr_w < 0) {
            circle.cy = dr_w;
            circle.vy *= -circle.bounceStrength;
          } else if (circle.cy + dr_w > canvas.height) {
            circle.cy = canvas.height - dr_w;
            circle.vy *= -circle.bounceStrength;
          }

          // 绘制圆
          //const ctx = canvas.getContext("2d");

        });
        //setTimeout(circle_function, 10);
      }

      window.addEventListener("orientationchange", function() {
          if (window.orientation === 90 || window.orientation === -90) {
            canvas_size=true
            document.getElementById("ck").style.width=null
          } else {
            canvas_size=false
            document.getElementById("ck").style.height=null
          }
        });
        function randomint(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }
          function shez(){
              ndd=document.getElementById("nd").value
            }
            class drc{
              constructor(){
                this.dx=randomint(0,bc)
                this.dy=randomint(0,400)
                this.ds=0
              }
            }
            class circle_class{
              constructor(){
                this.bounceStrength = 1;
                this.cx = randomint(0,bc);
                this.cy = randomint(0,100);
                this.ac = 1;
                this.fr = 0.99;
                this.vx = 0;
                this.vy = 0;
              }
            }
            function creat(){
                dr.push(new drc())
              }
              let c_xr=false
              let c_dr=[]
              let canvas_size=false
              let canvas=document.getElementById("ck")
              let bc=1200
              let red_w=10*(bc/400)
              let r_speed=6
              let dr_w=10*(bc/400)
              let ndd=0
              let wd=false
              let diyy=false
              let yx=false
              let dr=[]
              eeee=document.getElementById("ck")
              c=eeee.getContext("2d")
              let x=bc/2
              let y=bc/2
              let cc=0
              let ccc=0
              let zg=0
              let dx=290
              let dx1=80
              let kzz=document.getElementById("kz")
              let ygg=document.getElementById("yg")
              let lm=12
              ygg.addEventListener("touchstart",function(){
                  kztj=true
                  huadom=false
                })
                document.addEventListener("touchmove",function(event){
                    if(!huadom){
                      event.preventDefault();
                    }
                    let touch=event.touches[0]
                    let tx=touch.clientX
                    let ty=touch.clientY
                    let kzx=parseFloat(kz.style.left)
                    let kzy=parseFloat(kz.style.top)
                    if(diyy==false && kztj){
                      let s=Math.sqrt((tx-(kzx+50))**2+(ty-(kzy+50))**2)
                      // document.getElementById("cs").innerHTML=parseInt(s)+ygg.style.left+","+ygg.style.top
                      if(s<50){
                        ygg.style.left=tx-parseInt(kz.style.left)-50
                        ygg.style.top=ty-parseInt(kz.style.top)-50
                      } else{
                        deg=Math.atan2(ty-kzy-50,tx-kzx-50)
                        ygx=kzx-50*Math.cos(deg)
                        ygy=kzy-50*Math.sin(deg)
                        yg.style.left=kzx-ygx
                        yg.style.top=kzy-ygy
                      }
                    }
                    if(diyy && event.touches.length>0){
                      if(tx<window.innerWidth-100){
                        kzz.style.left=tx-50
                      }
                      if(ty<window.innerHeight-100){
                        kzz.style.top=ty-50
                      }
                    }
                  }, { passive: false })
                  document.addEventListener("touchend",function(){
                      ygg.style.left=0
                      ygg.style.top=0
                      kztj=false
                      huadom=true
                    })
                    document.addEventListener("touchstart",function(){
                        lmdlook.style.width=0+"px"
                        lmdlook.style.height=0+"px"})
                      lmd.oninput=function (){
                          lmdp.innerHTML="遥感灵敏度:"+this.value
                          lm=this.value
                          lmdlook.style.width=this.value*2
                          lmdlook.style.height=this.value*2
                          lmdlook.style.left=-this.value+parseFloat(kz.style.left)+50
                          lmdlook.style.top=-this.value+parseFloat(kz.style.top)+50
                        }
                        function d(){
                            //if(!xr.disabled){
                            //cs.innerHTML="setTimeout(circle_function,0);"
                            //}
                            document.getElementById("fs").innerHTML=ccc
                            if(document.getElementById("nd").value=="1145141919810"){
                            wd=true
                            }else{
                            wd=false
                            }
                            
                            //if(zg>10 && !c_xr){
                            //document.getElementById("xr").disabled="false"
                            
                            //}else{
                            //document.getElementById("xr").disabled="true"
                            
                            //}
                            
                            if(canvas_size){
                              document.getElementById("ck").style.height=dx1+"%"
                            } else{
                              document.getElementById("ck").style.width=dx1+"%"
                            }
                            c.clearRect(0,0,bc,bc)
                            c.fillStyle="rgb(225,105,0)"
                            c.fillRect(x,y,red_w,red_w)
                            if(yx){
                              setTimeout(circle_function,0);
                              dr.forEach((i) => {
                                jcx=x-i.dx+red_w/2
                                jcy=y-i.dy+red_w/2
                                jc=Math.sqrt(jcx**2+jcy**2)
                                if(jc<(red_w+dr_w*2)/2 && !wd){
                                  gameover()
                                }

                                c.fillStyle="rgb(0,255,0)"
                                c.beginPath()
                                c.arc(i.dx,i.dy,dr_w,0,3.141592653589793*2)
                                c.fill()

                                c_dr.forEach((circle)=>{
                                  c.fillStyle="orange"
                                  c.beginPath();
                                  c.arc(circle.cx, circle.cy, dr_w, 0, Math.PI * 2);
                                  c.fill();
                                })
                                i.ds+=0.6
                                i.dy+=i.ds+Number(ndd)
                                if(i.dy>(bc+dr_w*2)){
                                  i.dy=-dr_w*2
                                  i.dx=randomint(0,bc)
                                  cc+=1
                                  i.ds=0
                                  if(cc>=ccc || cc>=10){
                                    if(ccc<=10){
                                      creat()
                                    }
                                    if(ccc>=9 && (ccc%10)==0 && c_dr.length<=5){
                                    creat_c()
                                    }
                                    cc=0
                                    ccc=ccc+1
                                  }
                                }
                              })
                            }
                            
                            setTimeout(d,10);
                          }
                          d()


                          function kzf(){
                              if(parseFloat(ygg.style.left)<-lm){
                                xjpppp()
                              }
                              if(parseFloat(ygg.style.left)>lm){
                                xj()
                              }
                              if(parseFloat(ygg.style.top)<-lm){
                                yjpppp()
                              }
                              if(parseFloat(ygg.style.top)>lm){
                                yj()
                              }
                              setTimeout(kzf,10);
                            }
                            kzf()
                            function xj(){
                                if(x<(bc-red_w)){
                                  x=x+r_speed
                                }
                              }
                              function xjpppp(){
                                  if(x>0){
                                    x=x-r_speed
                                  }
                                }
                                function yj(){
                                    if(y<(bc-red_w)){
                                      y=y+r_speed
                                    }
                                  }function yjpppp(){
                                      if(y>0){
                                        y=y-r_speed
                                      }
                                    }