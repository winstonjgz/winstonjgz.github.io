/* Codigo habilitado Fuente: Codepen.io "Responsive Circular Progress Bar | coders kamrul" readaptado por Winston J Guzman*/

let options = {
    startAngle: -1.55,
    size: 150,
    value: 0.85,
    fill: {gradient: ['#07E6ED', '#07E6ED']}
  }
  $(".circle .bar").circleProgress(options).on('circle-animation-progress',
  function(event, progress, stepValue){
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
  });
  $(".js .bar").circleProgress({
    value: 0.80
  });
  $(".node .bar").circleProgress({
    value: 0.65
  });      
  $(".react .bar").circleProgress({
    value: 0.50
  });
  $(".ingles .bar").circleProgress({
    value: 0.70
  });
  $(".Liderazgo .bar").circleProgress({
    value: 0.95
  });
  $(".Comunicacion .bar").circleProgress({
    value: 0.95
  });
  $(".Empatia .bar").circleProgress({
    value: 0.90
  });$(".ResolucionC .bar").circleProgress({
    value: 0.90
  });