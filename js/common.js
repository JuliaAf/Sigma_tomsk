$(document).ready(function() {
  var toggle = $(".projects__nav-toggle");
    toggle.click(function(){
    var that = $(this),
        togglePosition = that.index(),
        item = $(".projects__item");

      toggle.removeClass("active");
      that.addClass("active");

      item.removeClass("active");
      item.eq(togglePosition).addClass("active");
    });

  /*sticky header*/
  $(window).scroll(function() {
    if ($(this).scrollTop() > 75){
      $(".header").addClass("header--sticky");
    }
    else{
      $(".header").removeClass("header--sticky");
    };
  });

  /*wow*/
  wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }
    )
    wow.init();


  $(".aims::after").addClass("wow slideInLeft");

  /*owl-carousel*/
  $(".index-carousel").owlCarousel({

    items : 1,
    singleItem : true,
    itemsScaleUp : false,

    slideSpeed : 200,
    paginationSpeed : 800,
    rewindSpeed : 1000,

    autoPlay : true,
    stopOnHover : false,

    navigation : false,
    navigationText : ["prev","next"],
    rewindNav : true,
    scrollPerPage : false,

    pagination : true,
    paginationNumbers: false,

    responsive: true,
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,

    baseClass : "owl-carousel",
    theme : "owl-theme",

    lazyLoad : false,
    lazyFollow : true,
    lazyEffect : "fade",

    autoHeight : false,

    jsonPath : false,
    jsonSuccess : false,

    dragBeforeAnimFinish : true,
    mouseDrag : true,
    touchDrag : true,

    transitionStyle : false,

    addClassActive : false,

    beforeUpdate : false,
    afterUpdate : false,
    beforeInit: false,
    afterInit: false,
    beforeMove: false,
    afterMove: false,
    afterAction: false,
    startDragging : false,
    afterLazyLoad : false

  });

  /*mobile nav*/
  $(".header__open-toggle").click(function(){
    $(".header__nav").slideToggle();
  })

});//ready-end
