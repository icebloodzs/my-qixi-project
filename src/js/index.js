$(function(){
// index游戏玩法活动说明
  $(".app_hdsm.yxwf").click(function(){
    event.stopPropagation();
    $(".app_fixedBox.yxwf").addClass("show")
  })

  $(".app_fixedBox_ok.yxwf,body").click(function(){
    event.stopPropagation();
    $(".app_fixedBox.yxwf").removeClass("show");
  })

  $(".app_fixedBox_con.yxwf").click(function(){
        event.stopPropagation();
  })
//lovecheck分享爱的支票
    $("body").click(function(){
      event.stopPropagation()
      $(".sharelove.love").addClass("hide")
    })

    $(".sharelovebgimg.img").click(function(event){
      event.stopPropagation()
    })
//writecheck 换一条看看
  var _data = [
    "支票在我手，还不跟我走？！",
    "听说今天求婚成功率很大，支票额度越高几率越大！",
    "请拿着这张支票速速找我提现，有效期一辈子",
    "不知道，我这张巨额支票能否登上你的那艘豪华游艇",
    "你玩貂蝉我玩吕布，你玩小乔我玩周瑜，你玩赵云我玩张飞，在此支票前立誓，你的王者段位被我承包了",
    "我想成为你签收这张支票的那只圆珠笔",
    "拿着这张支票，去挥霍，去浪费，去剁手，去发福，去旅行，反正别忘了带着我就行了",
    "我全部私房钱都在这张支票上了，我已经做好赖着你一辈子的准备了",
    "快数数这只票上有多少数字，这是我想跟你一起度过的日子",
    "支票和我，你一个都少不了",
  ];
  $(".page-text-changeit").click(function(){
    let n = Math.floor(Math.random()*10);
    $("#page-textarea").val(_data[n]);
  })
})