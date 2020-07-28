
//scroll to id 
  $("#mymenu a,#scrollt").click(function(){
    console.log(this);
    // console.log(who.offset().top);
    let who =  $(this).attr("href");
    //每個區塊的TOP值 - mymenu的高度(不然會擋住)
    let val  = $(who).offset().top - $("#mymenu").innerHeight()+1;
    //捲軸的位置
    $("html").animate({
      scrollTop:val
    },1000,"swing")
  })

  //scroll spy

  $(window).scroll(
    function(){
      spy();
    });

  spy();

  function spy(){
    let nowat = $(window).scrollTop();
    //要計算每個區域的scrollTop值

    ///每一個section都要做...事情
    $("section").each(function(){
        let id = $(this).attr("id"),
            offset = $(this).offset().top,
            height = $(this).innerHeight();
            console.log(id,offset,height);
            //如果offset 小於現在的位置而且
            if(offset < nowat && nowat < offset+height){
              $("#mymenu a").removeClass("active");
              $(`#mymenu a[href='#${id}]'`).addClass("active");
            }
      });

      let totalw = $(window).innerWidth();
      let adh = $("#lingslider").innerHeight();

      if(totalw > 768){
        if( nowat < adh+1){
          $("#mymenu").removeClass("bg-dark");
          $("#scrollt").removeClass("shown");
        }else{
          $("#mymenu").addClass("bg-dark");
          $("#scrollt").addClass("shown");
        }
      }

  }







