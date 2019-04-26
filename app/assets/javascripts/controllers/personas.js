App.personas = App.personas = {};  
  var find_pais =  $("#persona_paise_id").change(function() {
        var data=$('#persona_paise_id').val();
        $.ajax({
          type: "GET",
           url: "/personas/dynamic_estados/"+data,
          data: data,
          beforeSend: function()
          {
              $('#spinner').show();
          },

          success: function(response)
          {
            $('#spinner').hide();
          }

        });
    });

  var find_estado = $("#persona_estado_id").change(function() {
        var data=$('#persona_estado_id').val();
        $.ajax({
          type: "GET",
           url: "/personas/dynamic_regioes/"+data,
          data: data,
          beforeSend: function()
          {
              $('#spinner2').show();
          },

          success: function(response)
          {
            $('#spinner2').hide();
          }

        });
    });

  var find_regiao = $("#persona_regiao_id").change(function() {
        var data=$('#persona_regiao_id').val();
        $.ajax({
          type: "GET",
           url: "/personas/dynamic_cidades/"+data,
          data: data,
          beforeSend: function()
          {
              $('#spinner3').show();
          },

          success: function(response)
          {
            $('#spinner3').hide();
          }

        });
    });

  var find_cidade = $("#persona_cidade_id").change(function() {
        var data=$('#persona_cidade_id').val();
        $.ajax({
          type: "GET",
           url: "/personas/dynamic_areas/"+data,
          data: data,
          beforeSend: function()
          {
              $('#spinner4').show();
          },

          success: function(response)
          {
            $('#spinner4').hide();
          }

        });
    });

App.personas.new = function() {
  //= require jquery-multi-select/js/jquery.multi-select
  //= require jquery-multi-select/js/jquery.quicksearch

  $('#persona_forma_pago_ids').multiSelect();

  var find_pais
	var find_estado;
  var find_regiao
	var find_cidade;  
 	jQuery.validator.setDefaults({
    success: "valid"
  });

  $('.btn').prop('disabled', 'disabled');   // disables button
  $('form').validate({
      rules: {
        "persona[ruc]": {required: true},
        "persona[nome]": {required: true},
      }
  });

  $('form input').on('keyup blur', function () { // fires on every keyup & blur
      if ($('form').valid()) {                   // checks form for validity
          $('.btn').prop('disabled', false);        // enables button
      } else {
          $('.btn').prop('disabled', 'disabled');   // disables button
      }
  });

};

App.personas.edit = function() {
  //= require jquery-multi-select/js/jquery.multi-select
  //= require jquery-multi-select/js/jquery.quicksearch

  $('#persona_forma_pago_ids').multiSelect();

  var find_pais
  var find_estado;
  var find_regiao
  var find_cidade;  

  $('.btn').prop('disabled', 'disabled');   // disables button
  $('form').validate({
      rules: {
        "persona[ruc]": {required: true},
        "persona[nome]": {required: true},
      }
  });

  $('form input').on('keyup blur', function () { // fires on every keyup & blur
      if ($('form').valid()) {                   // checks form for validity
          $('.btn').prop('disabled', false);        // enables button
      } else {
          $('.btn').prop('disabled', 'disabled');   // disables button
      }
  });	
};
