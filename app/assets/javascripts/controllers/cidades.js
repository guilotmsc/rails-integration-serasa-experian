App.cidades = App.cidades = {};

var find_estado = $("#cidade_paise_id").change(function() {
    var data=$('#cidade_paise_id').val();
    $.ajax({
      type: "GET",
       url: "/cidades/dynamic_estados/"+data,
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

var find_cidade = $("#cidade_estado_id").change(function() {
	  var data=$('#cidade_estado_id').val();
	  $.ajax({
	    type: "GET",
	     url: "/cidades/dynamic_regioes/"+data,
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

App.cidades.new = function() {
	var find_estado;
	var find_cidade;   

 	jQuery.validator.setDefaults({
    success: "valid"
  });

  $('.btn').prop('disabled', 'disabled');   // disables button
  $('form').validate({
      rules: {
        "cidade[pais_id]": {required: true},
        "cidade[estado_id]": {required: true},
        "cidade[nome]": {required: true},
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

App.cidades.edit = function() {
	var find_estado;
	var find_cidade;
  $('.btn').prop('disabled', 'disabled');   // disables button
  $('form').validate({
      rules: {
        "cidade[pais_id]": {required: true},
        "cidade[estado_id]": {required: true},
        "cidade[nome]": {required: true},
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
