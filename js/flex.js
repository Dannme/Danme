$(document).ready(function(){
  $('.poppin').mouseover(function(){
    $('.img1').css({"display":"block"});
    $('.poppin a').css({"color":"pink","font-size":"80px"});
  })
  $('.poppin').mouseout(function(){
    $('.img1').css({"display":"none"});
    $('.poppin a').css({"color":"#fff","font-size":"40px"});
  })

  $('.after').mouseover(function(){
    $('.img2').css({"display":"block"});
    $('.after a').css({"color":"red","font-size":"80px"});
  })
  $('.after').mouseout(function(){
    $('.img2').css({"display":"none"});
    $('.after a').css({"color":"#fff","font-size":"40px"});
  })

  $('.pastel').mouseover(function(){
    $('.img3').css({"display":"block"});
    $('.pastel a').css({"color":"lightgreen","font-size":"80px"});
  })
  $('.pastel').mouseout(function(){
    $('.img3').css({"display":"none"});
    $('.pastel a').css({"color":"#fff","font-size":"40px"});
  })

  $('.roselia').mouseover(function(){
    $('.img4').css({"display":"block"});
    $('.roselia a').css({"color":"purple","font-size":"80px"});
  })
  $('.roselia').mouseout(function(){
    $('.img4').css({"display":"none"});
    $('.roselia a').css({"color":"#fff","font-size":"40px"});
  })

  $('.hello').mouseover(function(){
    $('.img5').css({"display":"block"});
    $('.hello a').css({"color":"yellow","font-size":"80px"});
  })
  $('.hello').mouseout(function(){
    $('.img5').css({"display":"none"});
    $('.hello a').css({"color":"#fff","font-size":"40px"});
  })

  
})