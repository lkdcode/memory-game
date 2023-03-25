$('#name-button').click(function(){
  $('#name-button').fadeOut("slow",function(){
    $("#name-container").fadeIn();
    TweenMax.from("#name-container", .4, { scale: 0, ease:Sine.easeInOut});
    TweenMax.to("#name-container", .4, { scale: 1, ease:Sine.easeInOut});
  });
});

$(".close-name-btn").click(function(){
  TweenMax.from("#name-container", .4, { scale: 1, ease:Sine.easeInOut});
  TweenMax.to("#name-container", .4, { left:"0px", scale: 0, ease:Sine.easeInOut});
  $("#name-container, #forgotten-container").fadeOut(800, function(){
    $("#name-button").fadeIn(800);
  });
});

