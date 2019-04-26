
$(document).ready(function (){
  $('#new_vendas_produto').submit(function (){
     $.post($(this).attr('action'), $(this).serialize(), null, "script");
     return false;
   });
 });

function VendasProdutoTotalDolar(){
  var total = eval( parseFloat( document.getElementById('vendas_produto_unitario_dolar').value.replace(/\./g, "").replace(",", ".") ) * parseFloat( document.getElementById('vendas_produto_quantidade').value.replace(/\./g, "").replace(",", ".") ) )  ;
  document.getElementById('vendas_produto_total_dolar').value = ( number_format(total,2, ',', '.') );
}

function VendasProdutoTotalReal(){
  var total = eval( parseFloat( document.getElementById('vendas_produto_unitario_real').value.replace(/\./g, "").replace(",", ".") ) * parseFloat( document.getElementById('vendas_produto_quantidade').value.replace(/\./g, "").replace(",", ".") ) )  ;
  document.getElementById('vendas_produto_total_real').value = ( number_format(total,2, ',', '.') );
}

function VendasProdutoTotalGs(){
  var total = eval( parseFloat( document.getElementById('vendas_produto_unitario_guarani').value.replace(/\./g, "").replace(",", ".") ) * parseFloat( document.getElementById('vendas_produto_quantidade').value.replace(/\./g, "").replace(",", ".") ) )  ;
  document.getElementById('vendas_produto_total_guarani').value = ( number_format(total,0, ',', '.') );

  var unit = document.getElementById('vendas_produto_unitario_guarani').value.replace(/\./g, "").replace(",", ".");
  var fixo = document.getElementById('vendas_produto_preco_guarani').value.replace(/\./g, "").replace(",", ".");
  if(unit < fixo){
    desc = (unit / fixo) * 100
    $("#vendas_produto_desconto").val(number_format(100 - desc, 2, ',', '.'))
  }
}

function DescProdutoGs(){
  var qtd        = parseFloat($("#vendas_produto_quantidade").val().replace(/\./g, "").replace(",", "."));
  var preco_fixo = parseFloat($("#vendas_produto_preco_guarani").val().replace(/\./g, "").replace(",", "."));
  var desc       = parseFloat($("#vendas_produto_desconto").val().replace(/\./g, "").replace(",", "."));
  var total      = eval(preco_fixo - (preco_fixo * (desc / 100)))

  $("#vendas_produto_unitario_guarani").val(number_format(total,0, ',', '.'))
  $("#vendas_produto_total_guarani").val(number_format((total * qtd),0, ',', '.'))
} 


