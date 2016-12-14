$(document).ready(function() {
 $(".projects__nav-toggle.active").after("<div class='projects__nav-line'></div>");
var toggle = $(".projects__nav-toggle");
  toggle.click(function(){
  var that = $(this),
      togglePosition = that.index(),
      item = $(".projects__item");

    toggle.removeClass("active");
    that.addClass("active");

    $(".projects__nav-line").remove();
    that.after("<div class='projects__nav-line'></div>");
    // $(".slider-toggle:last-child + .slider-line").remove();
    // $(".slider-item:last-child + .slider-line").remove();
    // $(".slider-toggle:last-child").next(".slider-line").remove();
    //
    item.removeClass("active");
    item.eq(togglePosition).addClass("active");
  });


  /*owl-carousel*/

  $(".index-carousel").owlCarousel({

    // Most important owl features
    items : 1,
    singleItem : true,
    itemsScaleUp : false,

    //Basic Speeds
    slideSpeed : 200,
    paginationSpeed : 800,
    rewindSpeed : 1000,

    //Autoplay
    autoPlay : true,
    stopOnHover : false,

    // Navigation
    navigation : false,
    navigationText : ["prev","next"],
    rewindNav : true,
    scrollPerPage : false,

    //Pagination
    pagination : true,
    paginationNumbers: false,

    // Responsive
    responsive: true,
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,

    // CSS Styles
    baseClass : "owl-carousel",
    theme : "owl-theme",

    //Lazy load
    lazyLoad : false,
    lazyFollow : true,
    lazyEffect : "fade",

    //Auto height
    autoHeight : false,

    //JSON
    jsonPath : false,
    jsonSuccess : false,

    //Mouse Events
    dragBeforeAnimFinish : true,
    mouseDrag : true,
    touchDrag : true,

    //Transitions
    transitionStyle : false,

    // Other
    addClassActive : false,

    //Callbacks
    beforeUpdate : false,
    afterUpdate : false,
    beforeInit: false,
    afterInit: false,
    beforeMove: false,
    afterMove: false,
    afterAction: false,
    startDragging : false,
    afterLazyLoad : false

})

});//ready-end
