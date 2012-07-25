function loadData() {                        
   var output = $('#output');
   var drinkImageOutput = $('#drinkImage');
   /*var drinkIngredientOutput = $('#drinkIngredient');
   var drinkNameOutput = $('#drinkName');*/
   
   output.text('');
   
   debugger;
   
   $.ajax({
      url: 'http://molino.coolpage.biz/phonegap/landmarks.php',
      dataType: 'jsonp',
      jsonp: 'jsoncallback',
      timeout: 5000,
      success: function(data, status){
      $.each(data, function(i,item){
      
     /*var drinkName = item.name;
      var dringIngredient = item.id;*/
      var drinkImg = item.ruta;
      
      var landmark = '<li><a href="' + drinkImg + '" rel="external"><img src="' + drinkImg + '" width="100%"/></a></li>';/*+ 
      '<div id="drinkName">' + drinkName + '</div>' +
      '<div id="dringIngredient">' + dringIngredient + '</div>';*/
      
      
      output.append(landmark);
      
      });
      },
      error: function(){
      output.text('Verify your connection / Verifica tu conexion.');
      }
      });
         
}

