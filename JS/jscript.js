let options = {
    startAngle: -1.55,
    size: 150,
    value: 0.90,
    fill: {gradient: ['#07E6ED', '#07E6ED']}
  }
  $(".circle .bar").circleProgress(options).on('circle-animation-progress',
  function(event, progress, stepValue){
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
  });
  $(".js .bar").circleProgress({
    value: 0.90
  });
  $(".php .bar").circleProgress({
    value: 0.90
  });      
  $(".react .bar").circleProgress({
    value: 0.70
  });
  $(".ingles .bar").circleProgress({
    value: 0.90
  });
  $(".Liderazgo .bar").circleProgress({
    value: 0.95
  });
  $(".Comunicacion .bar").circleProgress({
    value: 0.95
  });
  $(".Empatia .bar").circleProgress({
    value: 0.90
  });
  $(".TrabEquipo .bar").circleProgress({
    value: 0.99
  });
  $(".CapAnyRes .bar").circleProgress({
    value: 0.99
  });
  $(".VBA .bar").circleProgress({
    value: 0.90
  });
  $(".bootstrap .bar").circleProgress({
    value: 0.85
  });
  $(".Java .bar").circleProgress({
    value: 0.85
  });
  $(".Python .bar").circleProgress({
    value: 0.90
  });
  $(".Angular .bar").circleProgress({
    value: 0.85
  });
  $(".GoogleSheets_Scripts .bar").circleProgress({
    value: 0.85
  });
  $(".MySQL .bar").circleProgress({
    value: 0.90
  });
  $(".ResolucionC .bar").circleProgress({
    value: 0.90
  });

  /* Codigo habilitado Fuente: Codepen.io "Responsive Circular Progress Bar | coders kamrul" readaptado por Winston J Guzman*/

