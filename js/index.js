charset = 'UTF-8';
$(function(){
  theaMsForm($('.sign-in'));
  // 五大优势
  function strengthSwitch(head, cont, classname) {
    $(head).each(function (i) {
      var that = this;

      $(that).click(function () {
        $(that).addClass(classname).siblings().removeClass(classname);
        $($(cont)[i]).addClass(classname).siblings().removeClass(classname);
      })
    });
  }
  strengthSwitch(".s-head .h-item", ".strength .c-item", "on");

  // 轮播图
  var mySwiper = new Swiper('.swiper-container', {
    // autoplay: true,//可选选项，自动滑动
    // 如果需要分页器
    pagination: '.swiper-pagination',
  })
});