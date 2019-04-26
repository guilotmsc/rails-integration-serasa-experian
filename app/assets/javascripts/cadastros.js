// DATA DE HOJE IMPUT----------------------------------------------------------------
var montharray=new Array("01","02","03","04","05","06","07","08","09","10","11","12");


var mydate=new Date();
var year=mydate.getYear();
if ( year < 1900 );
year+=1900;
var day=mydate.getDay();
var month=mydate.getMonth();
var daym=mydate.getDate();

//change font size here
var cdate=""+daym+"/"+montharray[month]+"/"+year+""

//FIM DATA DE HOJE IMPUT----------------------------------------------------------------

function EnterTab(event,id)
{
    if( event.keyCode == 13 )
    {
        var wow = document.getElementById(id);
        wow.focus();
    }
}


function VendaFinancaTipoEnterTab(event)
{
    if( event.keyCode == 13 )
    {
        //contado
        if( document.getElementById('tipo_venda').value == 0)
        {
            var wow = document.getElementById('recebido');
            wow.focus();

        }
        //credito
        if( document.getElementById('tipo_venda').value == 1)
        {
            var wow1 = document.getElementById('vendas_financa_valor_guarani_credito') ;
            wow1.focus();
            document.getElementById('vendas_financa_valor_guarani_credito').value = '';


        }
        //ordem
        if( document.getElementById('tipo_venda').value == 2)
        {
            var wow2 = document.getElementById('vendas_financa_cheque');
            wow2.focus();

        }

    }
}


function bloqEnter(objEvent) {
    var iKeyCode;
    iKeyCode = objEvent.keyCode;
    if(iKeyCode == 13) return false;
    return true;
}



function Formatadata(Campo, teclapres)  //
{
    var tecla = teclapres.keyCode;
    var vr = new String(Campo.value);
    vr = vr.replace("/", "");
    vr = vr.replace("/", "");
    vr = vr.replace("/", "");
    tam = vr.length + 1;
    if (tecla != 8 && tecla != 8)
    {
        if (tam > 0 && tam < 2)
            Campo.value = vr.substr(0, 2) ;
        if (tam > 2 && tam < 4)
            Campo.value = vr.substr(0, 2) + '/' + vr.substr(2, 2);
        if (tam > 4 && tam < 7)
            Campo.value = vr.substr(0, 2) + '/' + vr.substr(2, 2) + '/' + vr.substr(4, 7);
    }
}

function FormataCodContabil(){
v = document.getElementById("plano_de_conta_codigo").value;
v=v.replace(/\D/g,"") //Remove tudo o que não é dígito
v=v.replace(/^(\d{2})(\d)/,"$1.$2") //Coloca ponto entre o segundo e o terceiro dígitos
v=v.replace(/^(\d{2})\.(\d{2})(\d)/,"$1.$2.$3") //Coloca ponto entre o quinto e o sexto dígitos
v=v.replace(/\.(\d{2})(\d)/,".$1.$2") //Coloca uma barra entre o oitavo e o nono dígitos
v=v.replace(/(\d{3})(\d)/,"$1.$2") //Coloca um hífen depois do bloco de quatro dígitos
document.getElementById("plano_de_conta_codigo").value = v;
}

function DataInicio()                   //
{
    document.getElementById('inicio').value = cdate;

}

function DataFinal()                    //
{
    document.getElementById('final').value = cdate;

}

function DataField(campo)                    //
{
    document.getElementById(campo).value = cdate;

}


//PULAR IMPUT------------------------------------------
function proximoCampo(atual,proximo)    //
{
    if(atual.value.length >= atual.maxLength){
        document.getElementById(proximo).focus();
    }
}
//FIM PULAR IMPUT


//UPCASE------------------------------------------------------------------------
function f(o)                           //
{
    o.value=o.value.toUpperCase().replace(/([^0-9A-Z.,-/])/g," ");
}
// FIM UPCASE-------------------------------------------------------------------

// EDIT GRID--------------------------------------------------------------------
function cidades(id)                    //
{
    location.href="/cidades/edit/"+ id;
}

function clases(id)                     //
{
    location.href="/clases/edit/"+ id;
}

function produtos(id)                   //
{
    location.href="/produtos/"+ id;
}

function contas(id)                     //
{

    location.href="/contas/edit/"+ id;
}

function personas(id)                   //
{

    location.href="/personas/edit/"+ id;
}

function grupos(id)                     //
{

    location.href="/grupos/edit/"+ id;
}

function sub_grupos(id)                 //
{

    location.href="/sub_grupos/edit/"+ id;
}

function estados(id)                    //
{

    location.href="/estados/edit/"+ id;
}

function paises(id)                     //
{

    location.href="/paises/edit/"+ id;
}

function TabelaPrecoProdutoEdit(id)     //
{
    location.href="/produtos/edit_tabela_preco_produto/"+ id;
}

function PoliticaStockEdit(id)          //
{
    location.href="/produtos/edit_politica_stock/"+ id;
}

function AbrirHistoricoPreco(id)        //
{
    window.open('/produtos/historico_preco_produto/'+ id , 'Pagina', ' SCROLLBARS=YES, TOP=10, LEFT=10, WIDTH=1200, HEIGHT=400');
}

function PopUpEditCompra(id)            //
{
    window.open('/compras_produtos/'+ id +'/edit', 'Pagina', ' SCROLLBARS=YES, TOP=10, LEFT=10, WIDTH=1000, HEIGHT=400');
}

function PopUpPrintRelatorioStock(url)  //
{
    window.open(url, 'Pagina', ' SCROLLBARS=YES, TOP=250, LEFT=500, WIDTH=600, HEIGHT=400');
    window.print(url, 'Pagina', ' SCROLLBARS=YES, TOP=250, LEFT=500, WIDTH=600, HEIGHT=400');
}

function FiltroProduto()                //
{
    window.open('/grupos/filtro_produto?busca='+ document.getElementById('prod').value, 'Pagina', ' SCROLLBARS=YES, TOP=250, LEFT=500, WIDTH=600, HEIGHT=400');
}


function DetalheProduto(id)                //
{
    window.open('/vendas/detalhes_produto?id='+ id, 'Pagina', ' SCROLLBARS=YES, TOP=250, LEFT=500, WIDTH=600, HEIGHT=400');
}


//FIM  EDIT GRID----------------------------------------------------------------

//ABRE  E FECHA DIV-------------------------------------------------------------
function toggleDiv(divid)               //
{
    if(document.getElementById(divid).style.display == 'none'){
        document.getElementById(divid).style.display = 'block';
    }else{
        document.getElementById(divid).style.display = 'none';
    }
}
//FIM ABRE  E FECHA DIV---------------------------------------------------------

//FOCO CAMPO--------------------------------------------------------------------

function Login()                        //
{
    document.getElementById("campo_unidade").focus();
}


function CampoBusca()                   //
{
    document.getElementById("busca").focus();
}

function CampoBuscaTipo()               //
{
    document.getElementById("tipo").focus();
}

function CampoCompraDoc(id)             //
{
    document.getElementById("compras_documento_persona_id").value = id;
    document.getElementById("compras_documento_persona_id").focus();
}

function CampoCompraFin(id,d,m,y)             //
{
    document.getElementById("compras_financa_persona_id").value = id;
    document.getElementById("compras_financa_persona_id").focus();
    document.getElementById("compras_financa_data_3i").value = d;
    document.getElementById("compras_financa_data_2i").value = m;
    document.getElementById("compras_financa_data_1i").value = y;

}


function CampoProduto()                 //
{
    document.getElementById("codigo").focus();
}

function CampoProdutoE01()              //
{
    document.getElementById("codigo").focus();
}

//FOCO CAMPO COMPRA-------------------------------------------------------------

function FechamentoTurnoData()          //
{
    document.getElementById("fechamento_turno_data_3i").focus();
}


function CampoInicio()             //
{
    document.getElementById("inicio").focus();
}

function CampoInicioFatura()             //
{
    document.getElementById("inicio_faturacao").focus();
}


function CampoTipo()               //
{
    document.getElementById("tipo").focus();
}

function CampoCompra()             //
{
    document.getElementById("compra_data_3i").focus();
}

function CampoCompraProduto()      //
{
    document.getElementById("key").focus();
}

function CampoCotacao(valor)       //
{
    document.getElementById("compras_produto_cotacao").value = valor;
}

function DataCompra()              //
{
    document.getElementById("key").value = document.getElementById("compra_data_3i").value+'/'+ document.getElementById("compra_data_2i").value+'/'+document.getElementById("compra_data_1i").value;

}

// FIM FOCO CAMPO COMPRA--------------------------------------------------------


// CALCULO COMPRA---------------------------------------------------------------
function CompraUnitGs()             //
{
    varcotacao = ( parseFloat( document.getElementById('compras_produto_unitario_dolar').value ) * parseFloat( document.getElementById('compras_produto_cotacao').value ) )  ;
    document.getElementById('compras_produto_unitario_guarani').value = varcotacao.toFixed(0);
}

function CompraUnitDolar()          //
{
    varcotacao = ( parseFloat( document.getElementById('compras_produto_unitario_guarani').value ) / parseFloat( document.getElementById('compras_produto_cotacao').value ) )  ;
    document.getElementById('compras_produto_unitario_dolar').value = varcotacao.toFixed(2);
}

function CompraTotalDolar()         //
{
    v = document.getElementById('compras_produto_unitario_dolar').value;
    v=v.replace(/\D/g,"")  //permite digitar apenas números
    v=v.replace(/[0-9]{12}/,"inválido")   //limita pra máximo 999.999.999,99
    v=v.replace(/(\d{1})(\d{1,2})$/,"$1.$2")        //coloca virgula antes dos últimos 2 digitos
    document.getElementById('compras_produto_unitario_dolar').value = v;

    vartotal = ( parseFloat( document.getElementById('compras_produto_unitario_dolar').value ) * parseFloat( document.getElementById('compras_produto_quantidade').value ) )  ;
    document.getElementById('compras_produto_total_dolar').value = vartotal.toFixed(2);
}

function CompraTotalGs()            //
{
    vartotal = ( parseFloat( document.getElementById('compras_produto_unitario_guarani').value ) * parseFloat( document.getElementById('compras_produto_quantidade').value ) )  ;
    document.getElementById('compras_produto_total_guarani').value = vartotal.toFixed(0);
}

function CompraIvaDolar()           //
{
    taxa = ( ( parseFloat( document.getElementById('compras_produto_iva_taxa').value ) / 100 ) + 1.00 );
    vartotal = ( parseFloat( document.getElementById('compras_produto_total_dolar').value ) / taxa );
    vartotal = ( ( ( vartotal * parseFloat( document.getElementById('compras_produto_iva_taxa').value ) ) / 100 )  / parseFloat( document.getElementById('compras_produto_quantidade').value ) );
    document.getElementById('compras_produto_iva_dolar').value = vartotal.toFixed(6);
}

function CompraIvaGs()              //
{
    taxa = ( ( parseFloat( document.getElementById('compras_produto_iva_taxa').value ) / 100 ) + 1.00 );
    vartotal = ( parseFloat( document.getElementById('compras_produto_total_guarani').value ) / taxa );
    vartotal = ( ( ( vartotal * parseFloat( document.getElementById('compras_produto_iva_taxa').value ) ) / 100 ) / parseFloat( document.getElementById('compras_produto_quantidade').value ) );
    document.getElementById('compras_produto_iva_guarani').value = vartotal.toFixed(6);
}

function LimpaCampoCompraImportacao()//
{
    if ( document.getElementById('compras_produto_tipo_compra').value == '2' )
    {
        document.getElementById("compras_produto_iva_taxa").value = '0';
    }
}


//CALCULO COMPRAS FINANCAS------------------------------------------------------
function CompraUnitFinancaGs()      //
{
    varcotacao = ( parseFloat( document.getElementById('compras_financa_valor_dolar').value ) * parseFloat( document.getElementById('compras_financa_cotacao').value ) )  ;
    document.getElementById('compras_financa_valor_guarani').value = varcotacao.toFixed(0);
}

function CompraUnitFinancaDolar()   //
{
    varcotacao = ( parseFloat( document.getElementById('compras_financa_valor_guarani').value ) / parseFloat( document.getElementById('compras_financa_cotacao').value ) )  ;
    document.getElementById('compras_financa_valor_dolar').value = varcotacao.toFixed(2);
}

//FIM CALCULO COMPRAS FINANCAS------------------------------------------------------


//FIM CALCULO COMPRA------------------------------------------------------------



// FOCO CAMPO VENDA-------------------------------------------------------------

function DataVenda()                //
{
    document.getElementById("key").value = document.getElementById("venda_data_3i").value+'/'+ document.getElementById("venda_data_2i").value+'/'+document.getElementById("venda_data_1i").value;

}

function CampoVenda()               //
{
    document.getElementById("venda_cotacao").focus();
}
//FIM FOCO CAMPO VENDA----------------------------------------------------------------


// CALCULO VENDA PRODUTOS-------------------------------------------------------

function VendaUnitGs()             //

{
    v = document.getElementById('vendas_produto_unitario_dolar').value;
    v=v.replace(/\D/g,"")  //permite digitar apenas números
    v=v.replace(/[0-9]{12}/,"inválido")   //limita pra máximo 999.999.999,99
    v=v.replace(/(\d{1})(\d{1,2})$/,"$1.$2")        //coloca virgula antes dos últimos 2 digitos
    document.getElementById('vendas_produto_unitario_dolar').value = v;

    vartotal = ( parseFloat( document.getElementById('vendas_produto_unitario_dolar').value ) * parseFloat( document.getElementById('vendas_produto_cotacao').value ) )  ;
    document.getElementById('vendas_produto_unitario_guarani').value = vartotal.toFixed(2);
}

function VendaUnitDolar()          //
{
    vartotal = ( parseFloat( document.getElementById('vendas_produto_unitario_guarani').value ) / parseFloat( document.getElementById('vendas_produto_cotacao').value ) )  ;
    document.getElementById('vendas_produto_unitario_dolar').value = vartotal.toFixed(2);
}

function VendaTotalDolar()         //
{
    vartotal = ( parseFloat( document.getElementById('vendas_produto_unitario_dolar').value ) * parseFloat( document.getElementById('vendas_produto_quantidade').value ) )  ;
    document.getElementById('vendas_produto_total_dolar').value = vartotal.toFixed(2);
}

function VendaTotalGs()            //
{
    vartotal = ( parseFloat( document.getElementById('vendas_produto_unitario_guarani').value ) * parseFloat( document.getElementById('vendas_produto_quantidade').value ) )  ;
    document.getElementById('vendas_produto_total_guarani').value = vartotal.toFixed(0);
}

function VendaIvaDolar()           //
{
    taxa = ( ( parseFloat( document.getElementById('vendas_produto_taxa').value ) / 100 ) + 1.00 );
    vartotal = ( parseFloat( document.getElementById('vendas_produto_total_dolar').value ) / taxa );
    vartotal = ( ( ( vartotal * parseFloat( document.getElementById('vendas_produto_taxa').value ) ) / 100 ) / parseFloat( document.getElementById('vendas_produto_quantidade').value ) );
    document.getElementById('vendas_produto_iva_dolar').value = vartotal.toFixed(6);
}

function VendaIvaGs()              //
{
    taxa = ( ( parseFloat( document.getElementById('vendas_produto_taxa').value ) / 100 ) + 1.00 );
    vartotal = ( parseFloat( document.getElementById('vendas_produto_total_guarani').value ) / taxa );
    vartotal = ( ( ( vartotal * parseFloat( document.getElementById('vendas_produto_taxa').value ) ) / 100 ) / parseFloat( document.getElementById('vendas_produto_quantidade').value ) );
    document.getElementById('vendas_produto_iva_guarani').value = vartotal.toFixed(6);
}


function VendaPersona()            //
{
    document.getElementById('vendas_financa_persona_nome').value = document.getElementById('vendas_financa_persona_busca_').value ;
}

function VendaTotalDolarQuantidade()         //
{
    vartotal = ( parseFloat( document.getElementById('vendas_produto_total_guarani').value ) / parseFloat( document.getElementById('vendas_produto_cotacao').value ) )  ;
    document.getElementById('vendas_produto_total_dolar').value = vartotal.toFixed(2);
}

function VendaTotalGsQuantidade()            //
{
    vartotal = ( parseFloat( document.getElementById('vendas_produto_total_guarani').value ) / parseFloat( document.getElementById('vendas_produto_unitario_guarani').value ) )  ;
    document.getElementById('vendas_produto_quantidade').value = vartotal;
}

//FIM CALCULO VENDA------------------------------------------------------------




//VALIDACAO BOTAO SEGUIR COMPRA----------------------------------------------------
function SeguirCompraProduto(count)   //
{
    if ( count == 0  )
    {
        alert ('Adicione un Producto!');
        return false;
    }
    else
    {
        location.href="/compras/compras_financa/"+ document.getElementById('id').value;
    }
}

function SeguirCompraFinanca(count)   //
{
    if ( count == 0  )
    {
        alert ('Adicione una Cota!');
        return false;
    }
    else
    {
        location.href="/compras/compras_documento/"+ document.getElementById('id').value;
    }
}

//FIM VALIDACAO BOTAO SEGUIR COMPRA----------------------------------------------------




// FOCO CAMPO VENDA-------------------------------------------------------------

function DataProdutoCotacao()               //
{
    document.getElementById("key").value = document.getElementById("produto_data_3i").value+'/'+ document.getElementById("produto_data_2i").value+'/'+document.getElementById("produto_data_1i").value;

}

function CampoProdutoCotacao()              //
{
    document.getElementById("produto_cotacao").focus();
}
//FIM FOCO CAMPO VENDA----------------------------------------------------------------


//CALCULO COMPRAS FINANCAS------------------------------------------------------
function ProdutoGs()      //
{
    varcotacao = ( parseFloat( document.getElementById('produto_preco_venda_dolar').value ) * parseFloat( document.getElementById('produto_cotacao').value ) )  ;
    document.getElementById('produto_preco_venda_guarani').value = varcotacao.toFixed(0);
}

function ProdutoDolar()   //
{
    varcotacao = ( parseFloat( document.getElementById('produto_preco_venda_guarani').value ) / parseFloat( document.getElementById('produto_cotacao').value ) )  ;
    document.getElementById('produto_preco_venda_dolar').value = varcotacao.toFixed(2);
}

//FIM CALCULO COMPRAS FINANCAS------------------------------------------------------
//
//
/////////////////////////////////////////////////////


//CALCULO VENDA FINANCAS------------------------------------------------------

function CompraDocumentoTipo(valor)      //

{
    document.getElementById('tipo').value = valor
}



function MascaraMoeda(f)                 //
{
    v = f.value;
    v=v.replace(/\D/g,"")  //permite digitar apenas números
    v=v.replace(/[0-9]{12}/,"inválido")   //limita pra máximo 999.999.999,99
    v=v.replace(/(\d{1})(\d{1,2})$/,"$1.$2")        //coloca virgula antes dos últimos 2 digitos
    f.value = v;

}


//EXIBE DIV VENDA FINANZA-------------------------------------------------------


function ExibeDivCompra()   //
{

    if ( document.getElementById('tipomoeda').value == 'DOLAR' )
    {
        document.getElementById('DOLAR').style.display = "inline";
        document.getElementById('GUARANI').style.display = "none";
    }

    if ( document.getElementById('tipomoeda').value == 'GUARANI' )
    {
        document.getElementById('GUARANI').style.display = "inline";
        document.getElementById('DOLAR').style.display = "none";
    }

}
//EXIBE DIV VENDA FINANZA-------------------------------------------------------


// COBRO COTACAO-------------------------------------------------------------

function DataCobro()                      //
{
    document.getElementById("key").value = document.getElementById("cobro_data_3i").value+'/'+ document.getElementById("cobro_data_2i").value+'/'+document.getElementById("cobro_data_1i").value;

}

function CampoCobro()                     //
{
    document.getElementById("cobro_cotacao").focus();
}

function CotacaoCobroGs()                 //
{
    v = document.getElementById('cobros_detalhe_cobro_dolar').value;
    v=v.replace(/\D/g,"")  //permite digitar apenas números
    v=v.replace(/[0-9]{12}/,"inválido")   //limita pra máximo 999.999.999,99
    v=v.replace(/(\d{1})(\d{1,2})$/,"$1.$2")        //coloca virgula antes dos últimos 2 digitos
    document.getElementById('cobros_detalhe_cobro_dolar').value = v;

    varcotacao = ( parseFloat( document.getElementById('cobros_detalhe_cobro_dolar').value ) * parseFloat( document.getElementById('cotacao').value ) )  ;
    document.getElementById('cobros_detalhe_cobro_guarani').value = varcotacao.toFixed(0);
}

function CotacaoCobroDolar()              //
{
    varcotacao = ( parseFloat( document.getElementById('cobros_detalhe_cobro_guarani').value ) / parseFloat( document.getElementById('cotacao').value ) )  ;
    document.getElementById('cobros_detalhe_cobro_dolar').value = varcotacao.toFixed(2);
}

function CotacaoCobroFinalGs()            //
{
    v = document.getElementById('cobro_valor_dolar').value;
    v=v.replace(/\D/g,"")  //permite digitar apenas números
    v=v.replace(/[0-9]{12}/,"inválido")   //limita pra máximo 999.999.999,99
    v=v.replace(/(\d{1})(\d{1,2})$/,"$1.$2")        //coloca virgula antes dos últimos 2 digitos
    document.getElementById('cobro_valor_dolar').value = v;

    varcotacao = ( parseFloat( document.getElementById('cobro_valor_dolar').value ) * parseFloat( document.getElementById('cotacao').value ) )  ;
    document.getElementById('cobro_valor_guarani').value = varcotacao.toFixed(0);
}

function CotacaoCobroFinalDolar()         //
{
    varcotacao = ( parseFloat( document.getElementById('cobro_valor_guarani').value ) / parseFloat( document.getElementById('cotacao').value ) )  ;
    document.getElementById('cobro_valor_dolar').value = varcotacao.toFixed(2);
}


//FIM CAMBIO COTACAO-------------------------------------------------------------



//  PAGO COTACAO-------------------------------------------------------------

function DataPago()                      //
{
    document.getElementById("key").value = document.getElementById("pago_data_3i").value+'/'+ document.getElementById("pago_data_2i").value+'/'+document.getElementById("pago_data_1i").value;

}

function CampoPago()                     //
{
    document.getElementById("pago_cotacao").focus();
}

function CotacaoPagoGs()                 //
{
    v = document.getElementById('pagos_detalhe_pago_dolar').value;
    v=v.replace(/\D/g,"")  //permite digitar apenas números
    v=v.replace(/[0-9]{12}/,"inválido")   //limita pra máximo 999.999.999,99
    v=v.replace(/(\d{1})(\d{1,2})$/,"$1.$2")        //coloca virgula antes dos últimos 2 digitos
    document.getElementById('pagos_detalhe_pago_dolar').value = v;

    varcotacao = ( parseFloat( document.getElementById('pagos_detalhe_pago_dolar').value ) * parseFloat( document.getElementById('cotacao').value ) )  ;
    document.getElementById('pagos_detalhe_pago_guarani').value = varcotacao.toFixed(0);
}

function CotacaoPagoDolar()              //
{
    varcotacao = ( parseFloat( document.getElementById('pagos_detalhe_pago_guarani').value ) / parseFloat( document.getElementById('cotacao').value ) )  ;
    document.getElementById('pagos_detalhe_pago_dolar').value = varcotacao.toFixed(2);
}

function CotacaoPagoFinalGs()            //
{
    v = document.getElementById('pago_valor_dolar').value;
    v=v.replace(/\D/g,"")  //permite digitar apenas números
    v=v.replace(/[0-9]{12}/,"inválido")   //limita pra máximo 999.999.999,99
    v=v.replace(/(\d{1})(\d{1,2})$/,"$1.$2")        //coloca virgula antes dos últimos 2 digitos
    document.getElementById('pago_valor_dolar').value = v;

    varcotacao = ( parseFloat( document.getElementById('pago_valor_dolar').value ) * parseFloat( document.getElementById('cotacao').value ) )  ;
    document.getElementById('pago_valor_guarani').value = varcotacao.toFixed(0);
}

function CotacaoPagoFinalDolar()         //
{
    varcotacao = ( parseFloat( document.getElementById('pago_valor_guarani').value ) / parseFloat( document.getElementById('cotacao').value ) )  ;
    document.getElementById('pago_valor_dolar').value = varcotacao.toFixed(2);
}


//FIM FOCO CAMPO VENDA----------------------------------------------------------


//  CUSTO PRODUTO  -------------------------------------------------------------

function PrecoMinoristaProduto()         //
{
    varmargem   = ( parseFloat( document.getElementById('produto_margem_minorista').value ) / 100 )  ;
    varminoristad = ( ( varmargem  *  parseFloat( document.getElementById('produto_custo_produto_dolar_iva').value ) )  + parseFloat( document.getElementById('produto_custo_produto_dolar_iva').value ) )
    document.getElementById('produto_preco_minorista_dolar').value   = varminoristad.toFixed(2);
    varminoristag =  ( varminoristad * document.getElementById('produto_cotacao').value )
    document.getElementById('produto_preco_minorista_guarani').value   = varminoristag.toFixed(0);
}

function PrecoMaioristaProduto()         //
{
    varmargem   = ( parseFloat( document.getElementById('produto_margem_maiorista').value ) / 100 )  ;
    varminoristad = ( ( varmargem  *  parseFloat( document.getElementById('produto_custo_produto_dolar_iva').value ) )  + parseFloat( document.getElementById('produto_custo_produto_dolar_iva').value ) )
    document.getElementById('produto_preco_maiorista_dolar').value   = varminoristad.toFixed(2);
    varminoristag =  ( varminoristad * document.getElementById('produto_cotacao').value )
    document.getElementById('produto_preco_maiorista_guarani').value   = varminoristag.toFixed(0);
}

//  FIM CUSTO PRODUTO  ---------------------------------------------------------



// FOCO CAMPO ORDEM SERVICO-------------------------------------------------------------

function DataOrdem()                //
{
    document.getElementById("key").value = document.getElementById("ordem_servico_data_3i").value+'/'+ document.getElementById("ordem_servico_data_2i").value+'/'+document.getElementById("ordem_servico_data_1i").value;

}

function CampoOrdem()               //
{
    document.getElementById("ordem_servico_cotacao").focus();
}
//FIM FOCO CAMPO VENDA----------------------------------------------------------------



//CALCULO VENDA FINANCAS------------------------------------------------------
function UnitFinancaGsOrdem()            //
{
    v = document.getElementById('ordem_servicos_financa_valor_dolar').value;
    v=v.replace(/\D/g,"")  //permite digitar apenas números
    v=v.replace(/[0-9]{12}/,"inválido")   //limita pra máximo 999.999.999,99
    v=v.replace(/(\d{1})(\d{1,2})$/,"$1.$2")        //coloca virgula antes dos últimos 2 digitos
    document.getElementById('ordem_servicos_financa_valor_dolar').value = v;

    varcotacao = ( parseFloat( document.getElementById('ordem_servicos_financa_valor_dolar').value ) * parseFloat( document.getElementById('ordem_servicos_financa_cotacao').value ) )  ;
    document.getElementById('ordem_servicos_financa_valor_guarani').value = varcotacao.toFixed(0);
}

function UnitFinancaDolarOrdem()         //
{
    varcotacao = ( parseFloat( document.getElementById('ordem_servicos_financa_valor_guarani').value ) / parseFloat( document.getElementById('ordem_servicos_financa_cotacao').value ) )  ;
    document.getElementById('ordem_servicos_financa_valor_dolar').value = varcotacao.toFixed(2);
}

//CALCULO VENDA FINANCAS------------------------------------------------------


//PRINT VENDAS------------------------------------------------------------------
function PrintPreNotaVenda(url)                     //
{
    window.open(url, 'Pagina', ' SCROLLBARS=YES, TOP=250, LEFT=500, WIDTH=600, HEIGHT=400');
}


//ABRE  E FECHA DIV-------------------------------------------------------------
function toggleDiv(divid)          //
{
    if(document.getElementById(divid).style.display == 'none'){
        document.getElementById(divid).style.display = 'block';
    }else{
        document.getElementById(divid).style.display = 'none';
    }
}
//FIM ABRE  E FECHA DIV---------------------------------------------------------

//FOCO CAMPO--------------------------------------------------------------------


function CampoTipoVendaFinanca()   //
{
    if ( document.getElementById('cota').value == 1 )
    {
        document.getElementById("tipo").focus();
    }

}

//FOCO CAMPO COMPRA-------------------------------------------------------------


function CampoBusca()              //
{
    document.getElementById("busca").focus();
}


function CampoCompraProduto()      //
{
    document.getElementById("key").focus();
}

function CampoCotacao(valor)       //
{
    document.getElementById("compras_produto_cotacao").value = valor;
}

function DataCompra()              //
{
    document.getElementById("key").value = document.getElementById("compra_data_3i").value+'/'+ document.getElementById("compra_data_2i").value+'/'+document.getElementById("compra_data_1i").value;

}

// FIM FOCO CAMPO COMPRA--------------------------------------------------------


// FOCO CAMPO VENDA-------------------------------------------------------------

function DataVenda()               //
{
    document.getElementById("key").value = document.getElementById("venda_data_3i").value+'/'+ document.getElementById("venda_data_2i").value+'/'+document.getElementById("venda_data_1i").value;

}

function CampoVenda()              //
{
    document.getElementById("venda_cotacao").focus();
}
//FIM FOCO CAMPO VENDA----------------------------------------------------------------


//CALCULO COMPRAS FINANCAS------------------------------------------------------
function CompraUnitFinancaGs()      //
{

    varcotacao = eval( parseFloat( document.getElementById('compras_financa_valor_dolar').value.replace(/\./g, "").replace(",", ".") ) * document.getElementById('compras_financa_cotacao').value  )  ;
    document.getElementById('compras_financa_valor_guarani').value = ( number_format(varcotacao ,0, ',', '.') );
}

function CompraUnitFinancaDolar()   //
{
    varcotacao = ( parseFloat( document.getElementById('compras_financa_valor_guarani').value.replace(/\./g, "").replace(",", ".") ) /  document.getElementById('compras_financa_cotacao').value  )  ;
    document.getElementById('compras_financa_valor_dolar').value = ( number_format(varcotacao ,2, ',', '.') );
}

//FIM CALCULO COMPRAS FINANCAS------------------------------------------------------

//VALIDACAO BOTAO SEGUIR COMPRA----------------------------------------------------
function SeguirCompraProduto(count)   //
{
    if ( count == 0  )
    {
        alert ('Adicione un Producto!');
        return false;
    }
    else
    {
        location.href="http://localhost:3000/compras/compras_financa/"+ document.getElementById('id').value;
    }
}

function SeguirCompraFinanca(count)   //
{
    if ( count == 0  )
    {
        alert ('Adicione una Cota!');
        return false;
    }
    else
    {
        location.href="http://localhost:3000/compras/compras_documento/"+ document.getElementById('id').value;
    }
}

function SeguirCompraDocumento(count) //
{
    if ( count == 0  )
    {
        alert ('Adicione un Documento!');
        return false;
    }
    else
    {
        location.href="http://localhost:3000/compras";
    }
}
//FIM VALIDACAO BOTAO SEGUIR COMPRA----------------------------------------------------




// FOCO CAMPO VENDA-------------------------------------------------------------

function DataProdutoCotacao()               //
{
    document.getElementById("key").value = document.getElementById("produto_data_3i").value+'/'+ document.getElementById("produto_data_2i").value+'/'+document.getElementById("produto_data_1i").value;

}

function CampoProdutoCotacao()              //
{
    document.getElementById("produto_cotacao").focus();
}
//FIM FOCO CAMPO VENDA----------------------------------------------------------------


//CALCULO COMPRAS FINANCAS------------------------------------------------------
function ProdutoGs()      //
{
    varcotacao = ( parseFloat( document.getElementById('produto_preco_venda_dolar').value ) * parseFloat( document.getElementById('produto_cotacao').value ) )  ;
    document.getElementById('produto_preco_venda_guarani').value = varcotacao.toFixed(0);
}

function ProdutoDolar()   //
{
    varcotacao = ( parseFloat( document.getElementById('produto_preco_venda_guarani').value ) / parseFloat( document.getElementById('produto_cotacao').value ) )  ;
    document.getElementById('produto_preco_venda_dolar').value = varcotacao.toFixed(2);
}

//FIM CALCULO COMPRAS FINANCAS------------------------------------------------------


    function MoedaVendaFinanca(d)                 //

    {
        document.getElementById('tipo_troco').value = d
    }



function TrocoProdutoFinanca()      //
{
    if ( document.getElementById('tipo_troco').value == 0 )
    {
        v = document.getElementById('recebido').value;
        v=v.replace(/\D/g,"")  //permite digitar apenas números
        v=v.replace(/[0-9]{12}/,"inválido")   //limita pra máximo 999.999.999,99
        v=v.replace(/(\d{1})(\d{8})$/,"$1.$2")  //coloca ponto antes dos últimos 8 digitos
        v=v.replace(/(\d{1})(\d{5})$/,"$1.$2")  //coloca ponto antes dos últimos 5 digitos
        v=v.replace(/(\d{1})(\d{1,2})$/,"$1.$2")        //coloca virgula antes dos últimos 2 digitos
        document.getElementById('recebido').value = v;

        vartrocod = ( parseFloat( document.getElementById('recebido').value ) - parseFloat( document.getElementById('valor_dolar_contado').value ) )  ;
        document.getElementById('troco_dolar').value = vartrocod.toFixed(2);
        document.getElementById('mostra_dolar').innerHTML  = '<span>'+vartrocod.toFixed(2)+'</span>';

        varcotacaod = ( parseFloat( document.getElementById('troco_dolar').value ) * parseFloat( document.getElementById('vendas_financa_cotacao').value ) )  ;
        document.getElementById('troco_guarani').value = varcotacaod.toFixed(0);
        document.getElementById('mostra_guarani').innerHTML  = '<span>'+varcotacaod.toFixed(0)+'</span>';

        document.getElementById('cotacao_dolar').value = parseFloat( document.getElementById('recebido').value )

        varcotacaogd = ( parseFloat( document.getElementById('recebido').value ) * parseFloat( document.getElementById('vendas_financa_cotacao').value ) )  ;
        document.getElementById('cotacao_guarani').value = varcotacaogd.toFixed(0);

    }
    else
    {
        vartrocog = ( parseFloat( document.getElementById('recebido').value ) - parseFloat( document.getElementById('valor_guarani_contado').value ) )  ;
        document.getElementById('troco_guarani').value = vartrocog.toFixed(2);
        document.getElementById('mostra_guarani').innerHTML  = '<span>'+vartrocog.toFixed(0)+'</span>';

        varcotacaog = ( parseFloat( document.getElementById('troco_guarani').value ) / parseFloat( document.getElementById('vendas_financa_cotacao').value ) )  ;
        document.getElementById('troco_dolar').value = varcotacaog.toFixed(2);
        document.getElementById('mostra_dolar').innerHTML  = '<span>'+varcotacaog.toFixed(2)+'</span>';

        document.getElementById('cotacao_guarani').value = parseFloat( document.getElementById('recebido').value )

        varcotacaodg = ( parseFloat( document.getElementById('recebido').value ) / parseFloat( document.getElementById('vendas_financa_cotacao').value ) )  ;
        document.getElementById('cotacao_dolar').value = varcotacaodg.toFixed(2);

    }
}
//FIM CALCULO VENDA FINANCAS------------------------------------------------------


//CALCULO VENDA FINANCAS------------------------------------------------------
function UnitFinancaGsVenda()            //
{

    varcotacao = ( parseFloat( document.getElementById('vendas_financa_valor_dolar_credito').value ) * parseFloat( document.getElementById('vendas_financa_cotacao').value ) )  ;
    document.getElementById('vendas_financa_valor_guarani_credito').value = varcotacao.toFixed(0);
}

function UnitFinancaDolarVenda()         //
{
    varcotacao = ( parseFloat( document.getElementById('vendas_financa_valor_guarani_credito').value ) / parseFloat( document.getElementById('vendas_financa_cotacao').value ) )  ;
    document.getElementById('vendas_financa_valor_dolar_credito').value = varcotacao.toFixed(4);
}

//EXIBE DIV VENDA FINANZA-------------------------------------------------------


function CotaMaiorExibeDivVendaCota()   //
{
    if ( document.getElementById('cota').value != 1 )
    {
        if ( document.getElementById('tipo_venda').value == 0 )
        {
            document.getElementById('CONTADO').style.display = "inline";
            document.getElementById('CREDITO').style.display = "none";
            document.getElementById('vendas_financa_tipo').value = '0'
        }

        if ( document.getElementById('tipo_venda').value == 1 )
        {
            document.getElementById('CREDITO').style.display = "inline";
            document.getElementById('CONTADO').style.display = "none";
            document.getElementById('vendas_financa_tipo').value = '1'
        }
    }
}

//EXIBE DIV VENDA FINANZA-------------------------------------------------------

// FOCO CAMPO COBRO COTACAO-------------------------------------------------------------

function DataCobro()               //
{
    document.getElementById("key").value = document.getElementById("cobro_data_3i").value+'/'+ document.getElementById("cobro_data_2i").value+'/'+document.getElementById("cobro_data_1i").value;

}

function CampoCobro()              //
{
    document.getElementById("cobro_cotacao").focus();
}
//FIM FOCO CAMPO VENDA----------------------------------------------------------------


// CAMBIO COTACAO-------------------------------------------------------------

function CotacaoCobroGs()            //
{
    v = document.getElementById('cobros_detalhe_cobro_dolar').value;
    v=v.replace(/\D/g,"")  //permite digitar apenas números
    v=v.replace(/[0-9]{12}/,"inválido")   //limita pra máximo 999.999.999,99
    v=v.replace(/(\d{1})(\d{8})$/,"$1.$2")  //coloca ponto antes dos últimos 8 digitos
    v=v.replace(/(\d{1})(\d{5})$/,"$1.$2")  //coloca ponto antes dos últimos 5 digitos
    v=v.replace(/(\d{1})(\d{1,2})$/,"$1.$2")        //coloca virgula antes dos últimos 2 digitos
    document.getElementById('cobros_detalhe_cobro_dolar').value = v;

    varcotacao = ( parseFloat( document.getElementById('cobros_detalhe_cobro_dolar').value ) * parseFloat( document.getElementById('cotacao').value ) )  ;
    document.getElementById('cobros_detalhe_cobro_guarani').value = varcotacao.toFixed(0);
}

function CotacaoCobroDolar()         //
{
    varcotacao = ( parseFloat( document.getElementById('cobros_detalhe_cobro_guarani').value ) / parseFloat( document.getElementById('cotacao').value ) )  ;
    document.getElementById('cobros_detalhe_cobro_dolar').value = varcotacao.toFixed(2);
}

function CotacaoCobroFinalGs()            //
{
    v = document.getElementById('cobro_valor_dolar').value;
    v=v.replace(/\D/g,"")  //permite digitar apenas números
    v=v.replace(/[0-9]{12}/,"inválido")   //limita pra máximo 999.999.999,99
    v=v.replace(/(\d{1})(\d{8})$/,"$1.$2")  //coloca ponto antes dos últimos 8 digitos
    v=v.replace(/(\d{1})(\d{5})$/,"$1.$2")  //coloca ponto antes dos últimos 5 digitos
    v=v.replace(/(\d{1})(\d{1,2})$/,"$1.$2")        //coloca virgula antes dos últimos 2 digitos
    document.getElementById('cobro_valor_dolar').value = v;

    varcotacao = ( parseFloat( document.getElementById('cobro_valor_dolar').value ) * parseFloat( document.getElementById('cotacao').value ) )  ;
    document.getElementById('cobro_valor_guarani').value = varcotacao.toFixed(0);
}

function CotacaoCobroFinalDolar()         //
{
    varcotacao = ( parseFloat( document.getElementById('cobro_valor_guarani').value ) / parseFloat( document.getElementById('cotacao').value ) )  ;
    document.getElementById('cobro_valor_dolar').value = varcotacao.toFixed(2);
}


//FIM CAMBIO COTACAO-------------------------------------------------------------





// FOCO CAMPO PAGO COTACAO-------------------------------------------------------------

function DataPago()               //
{
    document.getElementById("key").value = document.getElementById("pago_data_3i").value+'/'+ document.getElementById("pago_data_2i").value+'/'+document.getElementById("pago_data_1i").value;

}

function CampoPago()              //
{
    document.getElementById("pago_cotacao").focus();
}

function CotacaoPagoGs()            //
{
    v = document.getElementById('pagos_detalhe_pago_dolar').value;
    v=v.replace(/\D/g,"")  //permite digitar apenas números
    v=v.replace(/[0-9]{12}/,"inválido")   //limita pra máximo 999.999.999,99
    v=v.replace(/(\d{1})(\d{8})$/,"$1.$2")  //coloca ponto antes dos últimos 8 digitos
    v=v.replace(/(\d{1})(\d{5})$/,"$1.$2")  //coloca ponto antes dos últimos 5 digitos
    v=v.replace(/(\d{1})(\d{1,2})$/,"$1.$2")        //coloca virgula antes dos últimos 2 digitos
    document.getElementById('pagos_detalhe_pago_dolar').value = v;

    varcotacao = ( parseFloat( document.getElementById('pagos_detalhe_pago_dolar').value ) * parseFloat( document.getElementById('cotacao').value ) )  ;
    document.getElementById('pagos_detalhe_pago_guarani').value = varcotacao.toFixed(0);
}

function CotacaoPagoDolar()         //
{
    varcotacao = ( parseFloat( document.getElementById('pagos_detalhe_pago_guarani').value ) / parseFloat( document.getElementById('cotacao').value ) )  ;
    document.getElementById('pagos_detalhe_pago_dolar').value = varcotacao.toFixed(2);
}

function CotacaoPagoFinalGs()            //
{
    v = document.getElementById('pago_valor_dolar').value;
    v=v.replace(/\D/g,"")  //permite digitar apenas números
    v=v.replace(/[0-9]{12}/,"inválido")   //limita pra máximo 999.999.999,99
    v=v.replace(/(\d{1})(\d{8})$/,"$1.$2")  //coloca ponto antes dos últimos 8 digitos
    v=v.replace(/(\d{1})(\d{5})$/,"$1.$2")  //coloca ponto antes dos últimos 5 digitos
    v=v.replace(/(\d{1})(\d{1,2})$/,"$1.$2")        //coloca virgula antes dos últimos 2 digitos
    document.getElementById('pago_valor_dolar').value = v;

    varcotacao = ( parseFloat( document.getElementById('pago_valor_dolar').value ) * parseFloat( document.getElementById('cotacao').value ) )  ;
    document.getElementById('pago_valor_guarani').value = varcotacao.toFixed(0);
}

function CotacaoPagoFinalDolar()         //
{
    varcotacao = ( parseFloat( document.getElementById('pago_valor_guarani').value ) / parseFloat( document.getElementById('cotacao').value ) )  ;
    document.getElementById('pago_valor_dolar').value = varcotacao.toFixed(2);
}


//FIM FOCO CAMPO VENDA----------------------------------------------------------------


function MoedaCompra(d)                //

{
    document.getElementById('moeda').value = d
}

function TipoCompra(d)                 //

{
    document.getElementById('tipo').value = d
}


function ExibeDivCompraFinanca()       //
{

    if ( document.getElementById('moeda').value == '0' && document.getElementById('tipo').value == '0')
    {
        document.getElementById('TIPO_CONTADO').style.display  = "inline";
        document.getElementById('TIPO_CREDITO').style.display  = "none";
        document.getElementById('compra_documento_id').value   = 2
    }
    else if ( document.getElementById('moeda').value == '1' && document.getElementById('tipo').value == '0')
    {
        document.getElementById('TIPO_CONTADO').style.display  = "inline";
        document.getElementById('TIPO_CREDITO').style.display  = "none";
        document.getElementById('compra_documento_id').value   = 2
    }



    else if ( document.getElementById('moeda').value == '0' && document.getElementById('tipo').value == '1')
    {
        document.getElementById('TIPO_CONTADO').style.display  = "none";
        document.getElementById('TIPO_CREDITO').style.display  = "inline";
        document.getElementById('CREDITO_PARCELA_DOLAR').style.display    = "inline";
        document.getElementById('CREDITO_MOEDA_DOLAR_01').style.display   = "inline";
        document.getElementById('CREDITO_MOEDA_DOLAR_02').style.display   = "inline";
        document.getElementById('CREDITO_MOEDA_DOLAR_03').style.display   = "inline";
        document.getElementById('CREDITO_MOEDA_DOLAR_04').style.display   = "inline";
        document.getElementById('CREDITO_MOEDA_DOLAR_05').style.display   = "inline";
        document.getElementById('CREDITO_MOEDA_DOLAR_06').style.display   = "inline";
        document.getElementById('CREDITO_PARCELA_GUARANI').style.display  = "none";
        document.getElementById('CREDITO_MOEDA_GUARANI_02').style.display = "none";
        document.getElementById('CREDITO_MOEDA_GUARANI_03').style.display = "none";
        document.getElementById('CREDITO_MOEDA_GUARANI_04').style.display = "none";
        document.getElementById('CREDITO_MOEDA_GUARANI_05').style.display = "none";
        document.getElementById('CREDITO_MOEDA_GUARANI_06').style.display = "none";
        document.getElementById('compra_documento_id').value   = 3
    }
    else if ( document.getElementById('moeda').value == '1' && document.getElementById('tipo').value == '1')
    {
        document.getElementById('TIPO_CONTADO').style.display  = "none";
        document.getElementById('TIPO_CREDITO').style.display  = "inline";
        document.getElementById('CREDITO_PARCELA_DOLAR').style.display       = "none";
        document.getElementById('CREDITO_MOEDA_DOLAR_01').style.display      = "none";
        document.getElementById('CREDITO_MOEDA_DOLAR_02').style.display      = "none";
        document.getElementById('CREDITO_MOEDA_DOLAR_03').style.display      = "none";
        document.getElementById('CREDITO_MOEDA_DOLAR_04').style.display      = "none";
        document.getElementById('CREDITO_MOEDA_DOLAR_05').style.display      = "none";
        document.getElementById('CREDITO_MOEDA_DOLAR_06').style.display      = "none";
        document.getElementById('CREDITO_PARCELA_GUARANI').style.display     = "inline";
        document.getElementById('CREDITO_MOEDA_GUARANI_01').style.display    = "inline";
        document.getElementById('CREDITO_MOEDA_GUARANI_02').style.display    = "inline";
        document.getElementById('CREDITO_MOEDA_GUARANI_03').style.display    = "inline";
        document.getElementById('CREDITO_MOEDA_GUARANI_04').style.display    = "inline";
        document.getElementById('CREDITO_MOEDA_GUARANI_05').style.display    = "inline";
        document.getElementById('CREDITO_MOEDA_GUARANI_06').style.display    = "inline";
        document.getElementById('compra_documento_id').value   = 3
    }

}


function CompraTipoDocumento()       //
{

    if ( document.getElementById('tipo').value == '0' )
    {
        document.getElementById('compra_documento_id').value   = 2
    }
    else {
        document.getElementById('compra_documento_id').value   = 3
    }


}



function EnterTabMoedaCompra(event)
{
    if( event.keyCode == 13 )
    {
    if ( document.getElementById('moeda').value == '0' ){
	        var wow = document.getElementById('compra_exentas_dolar');
    	    wow.focus();
    		
    	}

    	else if( document.getElementById('moeda').value == '1' ){
	        var wow = document.getElementById('compra_exentas_guarani');
    	    wow.focus();
    		
    	}
    	else
	        var wow = document.getElementById('compra_exentas_real');
    	    wow.focus();
    		
   }
}


function EnterTabTipoCompraFinanca(event)
{
    if( event.keyCode == 13 )
    {
    if ( document.getElementById('tipo').value == '0' ){
	        var wow = document.getElementById('compras_financa_conta_id');
    	    wow.focus();
    		
    	}

    	else if( document.getElementById('tipo').value == '1' ){
	        var wow = document.getElementById('compras_financa_cota');
    	    wow.focus();    		
    	}
}

}
//COMPRA========================================================================

function CompraGravada05Gs()        //
{
    var vartotal = eval( parseFloat( document.getElementById( 'compra_gravadas_05_guarani' ).value.replace(/\./g, "").replace(",", ".") ) / 1.05 );
    document.getElementById( 'compra_imposto_05_guarani' ).value = ( number_format(vartotal * 0.05,0, ',', '.') );
}

function CompraGravada05Dolar(grv,imp)     //
{
    var vartotal = eval( parseFloat( document.getElementById( grv ).value.replace(/\./g, "").replace(",", ".") ) / 1.05 );
    document.getElementById( imp ).value = ( number_format(vartotal * 0.05,2, ',', '.') );
}

function CompraGravada10Gs()        //
{

    var vartotal = eval( parseFloat( document.getElementById( 'compra_gravadas_10_guarani' ).value.replace(/\./g, "").replace(",", ".") ) / 1.1 );
    document.getElementById( 'compra_imposto_10_guarani' ).value = ( number_format(vartotal * 0.10,0, ',', '.') );

    var imposto10Gs = parseFloat( document.getElementById('compra_gravadas_10_guarani').value.replace(/\./g, "").replace(",", ".") )
    var imposto05Gs = parseFloat( document.getElementById('compra_gravadas_05_guarani').value.replace(/\./g, "").replace(",", ".") )
    var exentas     = parseFloat( document.getElementById('compra_exentas_guarani').value.replace(/\./g, "").replace(",", ".") )
    var total       = eval( imposto10Gs + imposto05Gs + exentas )
    document.getElementById( 'compra_total_guarani' ).value = ( number_format(total,0, ',', '.') )
}

function CompraGravada10Dolar(grv10,grv05,ext,imp,tot)     //
{
    var vartotal = eval( parseFloat( document.getElementById( grv10 ).value.replace(/\./g, "").replace(",", ".") ) / 1.1 );
    document.getElementById( imp ).value = ( number_format(vartotal * 0.10,2, ',', '.') );

    var imposto10Dolar = parseFloat( document.getElementById(grv10).value.replace(/\./g, "").replace(",", ".") )
    var imposto05Dolar = parseFloat( document.getElementById(grv05).value.replace(/\./g, "").replace(",", ".") )
    var exentas        = parseFloat( document.getElementById(ext).value.replace(/\./g, "").replace(",", ".") )
    var total          = eval( imposto10Dolar + imposto05Dolar + exentas )
    document.getElementById( tot ).value =  ( number_format(total,2, ',', '.') )

}

//GASTOS========================================================================


function CompraGastoGravada05Gs()        //
{
    var vartotal = eval( parseFloat( document.getElementById( 'compras_gasto_gravadas_05_guarani' ).value.replace(/\./g, "").replace(",", ".") ) / 1.05 );
    document.getElementById( 'compras_gasto_imposto_05_guarani' ).value = ( number_format(vartotal * 0.05,0, ',', '.') );
}

function CompraGastoGravada05Dolar()     //
{
    var vartotal = eval( parseFloat( document.getElementById( 'compras_gasto_gravadas_05_dolar' ).value.replace(/\./g, "").replace(",", ".") ) / 1.05 );
    document.getElementById( 'compras_gasto_imposto_05_dolar' ).value = ( number_format(vartotal * 0.05,0, ',', '.') );
}

function CompraGastoGravada05Real()     //
{
    var vartotal = eval( parseFloat( document.getElementById( 'compras_gasto_gravadas_05_real' ).value.replace(/\./g, "").replace(",", ".") ) / 1.05 );
    document.getElementById( 'compras_gasto_imposto_05_real' ).value = ( number_format(vartotal * 0.05,0, ',', '.') );
}


function CompraGastoGravada10Gs()        //
{

    var vartotal = eval( parseFloat( document.getElementById( 'compras_gasto_gravadas_10_guarani' ).value.replace(/\./g, "").replace(",", ".") ) / 1.1 );
    document.getElementById( 'compras_gasto_imposto_10_guarani' ).value = ( number_format(vartotal * 0.10,0, ',', '.') );

    var imposto10Gs = parseFloat( document.getElementById('compras_gasto_gravadas_10_guarani').value.replace(/\./g, "").replace(",", ".") )
    var imposto05Gs = parseFloat( document.getElementById('compras_gasto_gravadas_05_guarani').value.replace(/\./g, "").replace(",", ".") )
    var exentas     = parseFloat( document.getElementById('compras_gasto_exentas_guarani').value.replace(/\./g, "").replace(",", ".") )
    var total       = eval( imposto10Gs + imposto05Gs + exentas )
    document.getElementById( 'compras_gasto_total_guarani' ).value = ( number_format(total,0, ',', '.') )
}

function CompraGastoGravada10Dolar()     //
{
    var vartotal = eval( parseFloat( document.getElementById( 'compras_gasto_gravadas_10_dolar' ).value.replace(/\./g, "").replace(",", ".") ) / 1.1 );
    document.getElementById( 'compras_gasto_imposto_10_dolar' ).value = ( number_format(vartotal * 0.10,0, ',', '.') );

    var imposto10Dolar = parseFloat( document.getElementById('compras_gasto_gravadas_10_dolar').value.replace(/\./g, "").replace(",", ".") )
    var imposto05Dolar = parseFloat( document.getElementById('compras_gasto_gravadas_05_dolar').value.replace(/\./g, "").replace(",", ".") )
    var exentas        = parseFloat( document.getElementById('compras_gasto_exentas_dolar').value.replace(/\./g, "").replace(",", ".") )
    var total          = eval( imposto10Dolar + imposto05Dolar + exentas )
    document.getElementById( 'compras_gasto_total_dolar' ).value =  ( number_format(total,2, ',', '.') )

}

function CompraGastoGravada10Real()     //
{
    var vartotal = eval( parseFloat( document.getElementById( 'compras_gasto_gravadas_10_real' ).value.replace(/\./g, "").replace(",", ".") ) / 1.1 );
    document.getElementById( 'compras_gasto_imposto_10_real' ).value = ( number_format(vartotal * 0.10,0, ',', '.') );

    var imposto10Dolar = parseFloat( document.getElementById('compras_gasto_gravadas_10_real').value.replace(/\./g, "").replace(",", ".") )
    var imposto05Dolar = parseFloat( document.getElementById('compras_gasto_gravadas_05_real').value.replace(/\./g, "").replace(",", ".") )
    var exentas        = parseFloat( document.getElementById('compras_gasto_exentas_real').value.replace(/\./g, "").replace(",", ".") )
    var total          = eval( imposto10Dolar + imposto05Dolar + exentas )
    document.getElementById( 'compras_gasto_total_real' ).value =  ( number_format(total,2, ',', '.') )

}


function SeguirCompraFinanca()             //
{
    if ( document.getElementById('tipo').value == 0  ){
        if ( parseInt( document.getElementById('fatura_total_dolar').value) != parseInt(document.getElementById('produto_total_dolar').value )  )
        {
            alert ('El total de la factura no corresponde a los productos totales');
            return false;
        }
        else
        {
            if ( document.getElementById('adcionais').value == 0 )
            {
               location.href='/compras/compras_financa/'+document.getElementById('id').value;
            }
            else
            {
                location.href='/compras/compras_documento/'+document.getElementById('id').value;
            }

        }

    }
    else
    {
        if ( parseInt(document.getElementById('fatura_total_guarani').value) != parseInt(document.getElementById('produto_total_guarani').value)  )
        {
            alert ('El total de la factura no corresponde a los productos totales');
            return false;
        }
        else
        {
            if ( document.getElementById('adcionais').value == 0 )
            {
               location.href='/compras/compras_financa/'+document.getElementById('id').value;
            }
            else
            {
                location.href='/compras/compras_documento/'+document.getElementById('id').value;
            }
        }
    }
}

function SeguirCompraGastoFinanca()        //
{
    if ( document.getElementById('tipo').value == 0  )
    {
        if ( parseInt(document.getElementById('fatura_total_dolar').value) != parseInt(document.getElementById('produto_total_dolar').value)  )
        {
            alert ('El total de la factura no corresponde a los productos totales');
            return false;
        }
        else
        {
            location.href="/compras/index_gasto" ;
        }

    }
    else
    {
        if ( parseInt(document.getElementById('fatura_total_guarani').value) != parseInt(document.getElementById('produto_total_guarani').value)  )
        {
            alert ('El total de la factura no corresponde a los productos totales');
            return false;
        }
        else
        {
            location.href="/compras/index_gasto" ;
        }
    }
}

function AcrecentaNumeroCompraFactura1()   //
{
    document.getElementById( 'compra_documento_numero_01' ).value = '00' + document.getElementById( 'compra_documento_numero_01' ).value
}

function AcrecentaNumeroCompraFactura2()   //
{
    if (document.getElementById( 'compra_documento_numero_02' ).value == ""){
    document.getElementById( 'compra_documento_numero_02' ).value = '00' + document.getElementById( 'compra_documento_numero_02' ).value
    }

}

function EntregaCompraCreditoDolar(e)      //
{
    document.getElementById( 'entrega_dolar' ).value = e
}

function CalculoCotasCompraCreditoDolar()  //
{
    if ( document.getElementById( 'entrega_dolar' ).value == 0 )
    {
        total_dolar = document.getElementById( 'compra_total_dolar' ).value
        parcela     = document.getElementById( 'parcela_dolar' ).value

        cota_01      = document.getElementById( 'compra_cota_dolar_01' ).value = ( total_dolar / parcela ).toFixed(2);
        cota_02      = document.getElementById( 'compra_cota_dolar_02' ).value = ( ( total_dolar - cota_01 ) / ( parcela - 1 ) ).toFixed(2);
        cota_03      = document.getElementById( 'compra_cota_dolar_03' ).value = ( ( total_dolar - cota_01 - cota_02 ) / ( parcela - 2 ) ).toFixed(2);
        cota_04      = document.getElementById( 'compra_cota_dolar_04' ).value = ( ( total_dolar - cota_01 - cota_02 - cota_03 ) / ( parcela -3 ) ).toFixed(2);
        cota_05      = document.getElementById( 'compra_cota_dolar_05' ).value = ( ( total_dolar - cota_01 - cota_02 - cota_03 - cota_04 ) / ( parcela - 4 ) ).toFixed(2);
        cota_06      = document.getElementById( 'compra_cota_dolar_06' ).value = ( ( total_dolar - cota_01 - cota_02 - cota_03 - cota_04 - cota_05 ) / ( parcela -5 ) ).toFixed(2);
    }
    else
    {
        total_dolar = document.getElementById( 'compra_total_dolar' ).value
        parcela     = document.getElementById( 'parcela_dolar' ).value

        cota_01      = document.getElementById( 'compra_cota_dolar_01' ).value
        cota_02      = document.getElementById( 'compra_cota_dolar_02' ).value = ( ( total_dolar - cota_01 ) / ( parcela - 1 ) ).toFixed(2);
        cota_03      = document.getElementById( 'compra_cota_dolar_03' ).value = ( ( total_dolar - cota_01 - cota_02 ) / ( parcela - 2 ) ).toFixed(2);
        cota_04      = document.getElementById( 'compra_cota_dolar_04' ).value = ( ( total_dolar - cota_01 - cota_02 - cota_03 ) / ( parcela -3 ) ).toFixed(2);
        cota_05      = document.getElementById( 'compra_cota_dolar_05' ).value = ( ( total_dolar - cota_01 - cota_02 - cota_03 - cota_04 ) / ( parcela - 4 ) ).toFixed(2);
        cota_06      = document.getElementById( 'compra_cota_dolar_06' ).value = ( ( total_dolar - cota_01 - cota_02 - cota_03 - cota_04 - cota_05 ) / ( parcela -5 ) ).toFixed(2);

    }
    if ( cota_01 == "NaN" || cota_01 == "-Infinity" || cota_01 == "Infinity" )
    {
        document.getElementById( 'compra_cota_dolar_01' ).value = 0
    }
    if ( cota_02 == "NaN" || cota_02 == "-Infinity" || cota_02 == "Infinity" )
    {
        document.getElementById( 'compra_cota_dolar_02' ).value = 0
    }
    if ( cota_03 == "NaN" || cota_03 == "-Infinity" || cota_03 == "Infinity" )
    {
        document.getElementById( 'compra_cota_dolar_03' ).value = 0
    }
    if ( cota_04 == "NaN" || cota_04 == "-Infinity" || cota_04 == "Infinity" )
    {
        document.getElementById( 'compra_cota_dolar_04' ).value = 0
    }
    if ( cota_05 == "NaN" || cota_05 == "-Infinity" || cota_05 == "Infinity" )
    {
        document.getElementById( 'compra_cota_dolar_05' ).value = 0
    }
    if ( cota_06 == "NaN" || cota_06 == "-Infinity" || cota_06 == "Infinity" )
    {
        document.getElementById( 'compra_cota_dolar_06' ).value = 0
    }

}

function EntregaCompraCreditoGuarani(e)    //
{
    document.getElementById( 'entrega_guarani' ).value = e
}

function CalculoCotasCompraCreditoGuarani()//
{
    if ( document.getElementById( 'entrega_guarani' ).value == 0 )
    {
        total_dolar = document.getElementById( 'compra_total_guarani' ).value
        parcela     = document.getElementById( 'parcela_guarani' ).value

        cota_01      = document.getElementById( 'compra_cota_guarani_01' ).value = ( total_dolar / parcela ).toFixed(0);
        cota_02      = document.getElementById( 'compra_cota_guarani_02' ).value = ( ( total_dolar - cota_01 ) / ( parcela - 1 ) ).toFixed(0);
        cota_03      = document.getElementById( 'compra_cota_guarani_03' ).value = ( ( total_dolar - cota_01 - cota_02 ) / ( parcela - 2 ) ).toFixed(0);
        cota_04      = document.getElementById( 'compra_cota_guarani_04' ).value = ( ( total_dolar - cota_01 - cota_02 - cota_03 ) / ( parcela -3 ) ).toFixed(0);
        cota_05      = document.getElementById( 'compra_cota_guarani_05' ).value = ( ( total_dolar - cota_01 - cota_02 - cota_03 - cota_04 ) / ( parcela - 4 ) ).toFixed(0);
        cota_06      = document.getElementById( 'compra_cota_guarani_06' ).value = ( ( total_dolar - cota_01 - cota_02 - cota_03 - cota_04 - cota_05 ) / ( parcela -5 ) ).toFixed(0);
    }
    else
    {
        total_dolar = document.getElementById( 'compra_total_guarani' ).value
        parcela     = document.getElementById( 'parcela_guarani' ).value
        cota_01      = document.getElementById( 'compra_cota_guarani_01' ).value
        cota_02      = document.getElementById( 'compra_cota_guarani_02' ).value = ( ( total_dolar - cota_01 ) / ( parcela - 1 ) ).toFixed(0);
        cota_03      = document.getElementById( 'compra_cota_guarani_03' ).value = ( ( total_dolar - cota_01 - cota_02 ) / ( parcela - 2 ) ).toFixed(0);
        cota_04      = document.getElementById( 'compra_cota_guarani_04' ).value = ( ( total_dolar - cota_01 - cota_02 - cota_03 ) / ( parcela -3 ) ).toFixed(0);
        cota_05      = document.getElementById( 'compra_cota_guarani_05' ).value = ( ( total_dolar - cota_01 - cota_02 - cota_03 - cota_04 ) / ( parcela - 4 ) ).toFixed(0);
        cota_06      = document.getElementById( 'compra_cota_guarani_06' ).value = ( ( total_dolar - cota_01 - cota_02 - cota_03 - cota_04 - cota_05 ) / ( parcela -5 ) ).toFixed(0);

    }
    if ( cota_01 == "NaN" || cota_01 == "-Infinity" || cota_01 == "Infinity" )
    {
        document.getElementById( 'compra_cota_guarani_01' ).value = 0
    }
    if ( cota_02 == "NaN" || cota_02 == "-Infinity" || cota_02 == "Infinity" )
    {
        document.getElementById( 'compra_cota_guarani_02' ).value = 0
    }
    if ( cota_03 == "NaN" || cota_03 == "-Infinity" || cota_03 == "Infinity" )
    {
        document.getElementById( 'compra_cota_guarani_03' ).value = 0
    }
    if ( cota_04 == "NaN" || cota_04 == "-Infinity" || cota_04 == "Infinity" )
    {
        document.getElementById( 'compra_cota_guarani_04' ).value = 0
    }
    if ( cota_05 == "NaN" || cota_05 == "-Infinity" || cota_05 == "Infinity" )
    {
        document.getElementById( 'compra_cota_guarani_05' ).value = 0
    }
    if ( cota_06 == "NaN" || cota_06 == "-Infinity" || cota_06 == "Infinity" )
    {
        document.getElementById( 'compra_cota_guarani_06' ).value = 0
    }

}


function ExibeDivDadosContaEntregaDolar()   //
{

    if ( document.getElementById('entrega_dolar').value == '0' )
    {
        document.getElementById('TIPO_CONTADO').style.display    = "none";
    }
    else if ( document.getElementById('entrega_dolar').value == '1' )
    {
        document.getElementById('TIPO_CONTADO').style.display    = "inline";

    }

}

function ExibeDivDadosContaEntregaGuarani() //
{

    if ( document.getElementById('entrega_guarani').value == '0' )
    {
        document.getElementById('TIPO_CONTADO').style.display    = "none";
    }
    else if ( document.getElementById('entrega_guarani').value == '1' )
    {
        document.getElementById('TIPO_CONTADO').style.display    = "inline";

    }

}


function DataNota()                //
{
    document.getElementById("key").value = document.getElementById("nota_credito_data_3i").value+'/'+ document.getElementById("nota_credito_data_2i").value+'/'+document.getElementById("nota_credito_data_1i").value;

}

function CampoNota()               //
{
    document.getElementById("nota_credito_cotacao").focus();
}

function Tipo(d)                 //

{
    document.getElementById('tipo').value = d
}

//COTACAO INGRESSO

function IngressoDataCotacao()     //
{
    document.getElementById("key").value = document.getElementById("ingresso_data_3i").value+'/'+ document.getElementById("ingresso_data_2i").value+'/'+document.getElementById("ingresso_data_1i").value;
}

function IngressoGuaraniDolar()    //
{
    varcotacao = ( parseFloat( document.getElementById('ingresso_valor_guarani').value ) / parseFloat( document.getElementById('ingresso_cotacao').value ) )  ;
    document.getElementById('ingresso_valor_dolar').value = varcotacao.toFixed(2);
}

function IngressoDolarGuarani()    //
{
    varcotacao = ( parseFloat( document.getElementById('ingresso_valor_dolar').value ) * parseFloat( document.getElementById('ingresso_cotacao').value ) )  ;
    document.getElementById('ingresso_valor_guarani').value = varcotacao.toFixed(0);
}

//DIARIO
function DiarioFocoData()        //
{
    document.getElementById("diario_data_3i").focus();
}

function DiarioDataCotacao()     //
{
    document.getElementById("key").value = document.getElementById("diario_data_3i").value+'/'+ document.getElementById("diario_data_2i").value+'/'+document.getElementById("diario_data_1i").value;
}

function DiarioGuaraniDolar()    //
{
    varcotacao = ( parseFloat( document.getElementById('diario_debe_valor_guarani').value ) / parseFloat( document.getElementById('diario_debe_cotacao').value ) )  ;
    document.getElementById('diario_debe_valor_dolar').value = varcotacao.toFixed(2);
}

function DiarioDolarGuarani()    //
{
    varcotacao = ( parseFloat( document.getElementById('diario_debe_valor_dolar').value ) * parseFloat( document.getElementById('diario_debe_cotacao').value ) )  ;
    document.getElementById('diario_debe_valor_guarani').value = varcotacao.toFixed(0);
}


function DiarioHaberGuaraniDolar()    //
{
    varcotacao = ( parseFloat( document.getElementById('diario_haber_valor_guarani').value ) / parseFloat( document.getElementById('diario_haber_cotacao').value ) )  ;
    document.getElementById('diario_haber_valor_dolar').value = varcotacao.toFixed(2);
}

function DiarioHaberDolarGuarani()    //
{
    varcotacao = ( parseFloat( document.getElementById('diario_haber_valor_dolar').value ) * parseFloat( document.getElementById('diario_haber_cotacao').value ) )  ;
    document.getElementById('diario_haber_valor_guarani').value = varcotacao.toFixed(0);
}


function DiarioSeguirComprovante(id) //
{
        if ( document.getElementById('debe').value != document.getElementById('haber').value  )
        {
            alert ('Verifique los totales totales');
            return false;
        }
        else
        {
            location.href="/diarios/comprovante_diario/"+ id ;
        }
}

function DiarioDebeCampoKey()    //
{
document.getElementById('key').value = document.getElementById('diario_debe_rubro_id').value
}


function DiarioHaberCampoKey()    //
{
document.getElementById('key').value = document.getElementById('diario_haber_rubro_id').value
}


//COTACAO TRANSFERENCIA
function TransferenciaFocoData()        //
{
    document.getElementById("transferencia_conta_data_3i").focus();
}

function TransferenciaDataCotacao()     //
{
    document.getElementById("key").value = document.getElementById("transferencia_conta_data_3i").value+'/'+ document.getElementById("transferencia_conta_data_2i").value+'/'+document.getElementById("transferencia_conta_data_1i").value;
}

//SOBRANTES FALTANTES
function SobranteFaltanteFocoData()        //
{
    document.getElementById("sobrantes_faltante_data_3i").focus();
}

function SobranteFaltanteDataCotacao()     //
{
    document.getElementById("key").value = document.getElementById("sobrantes_faltante_data_3i").value+'/'+ document.getElementById("sobrantes_faltante_data_2i").value+'/'+document.getElementById("sobrantes_faltante_data_1i").value;
}

function SobranteFaltanteGuaraniDolar()    //
{
    varcotacao = ( parseFloat( document.getElementById('sobrantes_faltante_unitario_guarani').value ) / parseFloat( document.getElementById('sobrantes_faltante_cotacao').value ) )  ;
    document.getElementById('sobrantes_faltante_unitario_dolar').value = varcotacao.toFixed(2);
}

function SobranteFaltanteDolarGuarani()    //
{
    varcotacao = ( parseFloat( document.getElementById('sobrantes_faltante_unitario_dolar').value ) * parseFloat( document.getElementById('sobrantes_faltante_cotacao').value ) )  ;
    document.getElementById('sobrantes_faltante_unitario_guarani').value = varcotacao.toFixed(0);
}

function SobranteFaltanteQuantidadeUnitarioGs()    //
{
    varcotacao = ( parseFloat( document.getElementById('sobrantes_faltante_quantidade').value ) * parseFloat( document.getElementById('sobrantes_faltante_unitario_dolar').value ) )  ;
    document.getElementById('sobrantes_faltante_total_dolar').value = varcotacao.toFixed(2);
}

function SobranteFaltanteQuantidadeUnitarioUs()    //
{
    varcotacao = ( parseFloat( document.getElementById('sobrantes_faltante_quantidade').value ) * parseFloat( document.getElementById('sobrantes_faltante_unitario_guarani').value ) )  ;
    document.getElementById('sobrantes_faltante_total_guarani').value = varcotacao.toFixed(2);
}

function ProventosCampoDescripcion()       //
{
    document.getElementById("provento_descripcion").focus();
}

//DIARIO
function SueldoDetalheFocoData()        //
{
    document.getElementById("sueldos_detalhe_data_3i").focus();
}

function SueldoDetalheCotacao()     //
{
    document.getElementById("key").value = document.getElementById("sueldos_detalhe_data_3i").value+'/'+ document.getElementById("sueldos_detalhe_data_2i").value+'/'+document.getElementById("sueldos_detalhe_data_1i").value;
}

function SueldoDetalheGuaraniDolar()    //
{
    varcotacao = ( parseFloat( document.getElementById('sueldos_detalhe_valor_guarani').value ) / parseFloat( document.getElementById('sueldos_detalhe_cotacao').value ) )  ;
    document.getElementById('sueldos_detalhe_valor_dolar').value = varcotacao.toFixed(2);
}

function SueldoDetalheDolarGuarani()    //
{
    varcotacao = ( parseFloat( document.getElementById('sueldos_detalhe_valor_dolar').value ) * parseFloat( document.getElementById('sueldos_detalhe_cotacao').value ) )  ;
    document.getElementById('sueldos_detalhe_valor_guarani').value = varcotacao.toFixed(0);
}

function PersonaExibeDiv(id) {
	if(document.getElementById(id).style.display=="none") {
		document.getElementById(id).style.display = "inline";
	}
	else {
		document.getElementById(id).style.display = "none";
	}
}

function GastoCotacao()          //
{
    document.getElementById("key").value = document.getElementById("compra_data_3i").value+'/'+ document.getElementById("compra_data_2i").value+'/'+document.getElementById("compra_data_1i").value;
}

function CobroDifeirdoData()     //
{

    document.getElementById("cobros_financa_diferido_3i").value = document.getElementById("data").value
    document.getElementById("cobros_financa_diferido_2i").value = document.getElementById("mes").value
    document.getElementById("cobros_financa_diferido_1i").value = document.getElementById("ano").value
    document.getElementById("cobros_financa_moeda_0").focus();
}

function VendaFinancasDifeirdoData()     //
{
    document.getElementById("vendas_financa_diferido_3i").value = document.getElementById("data").value
    document.getElementById("vendas_financa_diferido_2i").value = document.getElementById("mes").value
    document.getElementById("vendas_financa_diferido_1i").value = document.getElementById("ano").value
}

function VendaFinancasAlertCreditoCosumidorFinal()     //
{
       credito = document.getElementById("vendas_financa_tipo").value
       persona = document.getElementById("codigo").value
    if( credito == 1 && persona == 11  )
    {
        alert('No es Permitido Venta a CREDITO para este cliente!')
        document.getElementById("codigo").value = ''
    }
}

function VendaFinancasAlertContadoValor()     //
{
       credito = document.getElementById("vendas_financa_tipo").value
       total   = document.getElementById("vendas_financa_valor_guarani_contado").value
    if( credito == 0 &&  (total <= 0 || total == 'NaN' )   )
    {
        alert('Por Favor, lo Valor tiene que ser Maior que 0 ou No es ao Contado !')
    }
}

function CalculoDeIps()    //
{
    varips = ( parseFloat( document.getElementById('persona_salario_minimo').value ) * 0.09)
    document.getElementById('persona_ips').value = varips.toFixed(0);
}

function SueldoSetaValor()    //
{
    document.getElementById('compra_rubro_id').value = "99";
}

function VendaSetaVendedor()    //
{
    document.getElementById('venda_vendedor_id').value = document.getElementById('vendedor').value;
    document.getElementById('venda_conta_nome').value  = document.getElementById('conta').value;
    document.getElementById('venda_turno_nome').value  = document.getElementById('turno').value;
}

function ProdutoDataCotacao()     //
{
    document.getElementById("key").value = document.getElementById("produto_data_3i").value+'/'+ document.getElementById("produto_data_2i").value+'/'+document.getElementById("produto_data_1i").value;
}

function MayorBuscaCodContabilInicio(){
 document.getElementById('codigo_inicio').value = document.getElementById('busca_descricao_inicio').value
}

function MayorBuscaCodContabilFinal(){
 document.getElementById('codigo_final').value = document.getElementById('busca_descricao_final').value
}

function StockCotacao()          //
{
    document.getElementById("key").value = document.getElementById("stock_data_3i").value+'/'+ document.getElementById("stock_data_2i").value+'/'+document.getElementById("stock_data_1i").value;
}

function StockGuaraniDolar()    //
{
    varcotacao = ( parseFloat( document.getElementById('stock_unitario_guarani').value ) / parseFloat( document.getElementById('stock_cotacao').value ) )  ;
    document.getElementById('stock_unitario_dolar').value = varcotacao.toFixed(2);
}

function StockDolarGuarani()    //
{
    varcotacao = ( parseFloat( document.getElementById('stock_unitario_dolar').value ) * parseFloat( document.getElementById('stock_cotacao').value ) )  ;
    document.getElementById('stock_unitario_guarani').value = varcotacao.toFixed(0);
}

function StockIvaDolar()              //
{
    vardolartotal = ( parseFloat( document.getElementById('stock_unitario_dolar').value ) *  parseFloat( document.getElementById('stock_entrada').value ));
    taxa = ( ( parseFloat( document.getElementById('stock_taxa').value ) / 100 ) + 1.00 );
    vartotal = ( vardolartotal / taxa );
    vartotal = ( ( vartotal * parseFloat( document.getElementById('stock_taxa').value ) ) / 100 );
    document.getElementById('stock_iva_dolar').value = vartotal.toFixed(6);
}

function StockIvaGs()                 //
{
    vardolartotal = ( parseFloat( document.getElementById('stock_unitario_guarani').value ) *  parseFloat( document.getElementById('stock_entrada').value ));
    taxa = ( ( parseFloat( document.getElementById('stock_taxa').value ) / 100 ) + 1.00 );
    vartotal = ( vardolartotal / taxa );
    vartotal = ( ( vartotal * parseFloat( document.getElementById('stock_taxa').value ) ) / 100 );
    document.getElementById('stock_iva_guarani').value = vartotal.toFixed(6);
}

function ProdutoGs()                  //
{
    varcotacao = ( parseFloat( document.getElementById('produto_preco_venda_dolar').value ) * parseFloat( document.getElementById('produto_cotacao').value ) )  ;
    document.getElementById('produto_preco_venda_guarani').value = varcotacao.toFixed(0);
}

function ProdutoDolar()               //
{
    varcotacao = ( parseFloat( document.getElementById('produto_preco_venda_guarani').value ) / parseFloat( document.getElementById('produto_cotacao').value ) )  ;
    document.getElementById('produto_preco_venda_dolar').value = varcotacao.toFixed(2);
}

function ProdutoMinoristaGs()         //
{
    varcotacao = ( parseFloat( document.getElementById('produto_preco_minorista_dolar').value ) * parseFloat( document.getElementById('produto_cotacao').value ) )  ;
    document.getElementById('produto_preco_minorista_guarani').value = varcotacao.toFixed(0);
}

function ProdutoMinoristaDolar()      //
{
    varcotacao = ( parseFloat( document.getElementById('produto_preco_minorista_guarani').value ) / parseFloat( document.getElementById('produto_cotacao').value ) )  ;
    document.getElementById('produto_preco_minorista_dolar').value = varcotacao.toFixed(2);
}

function ProdutoMaioristaGs()         //
{
    varcotacao = ( parseFloat( document.getElementById('produto_preco_maiorista_dolar').value ) * parseFloat( document.getElementById('produto_cotacao').value ) )  ;
    document.getElementById('produto_preco_maiorista_guarani').value = varcotacao.toFixed(0);
}

function ProdutoMaioristaDolar()      //
{
    varcotacao = ( parseFloat( document.getElementById('produto_preco_maiorista_guarani').value ) / parseFloat( document.getElementById('produto_cotacao').value ) )  ;
    document.getElementById('produto_preco_maiorista_dolar').value = varcotacao.toFixed(2);
}

function NotaRemicaoSetaMotivo(d)     //

{
    document.getElementById('motivo').value = d
}

function NotaRemicaoExibeDivDestino() //
{

    if ( document.getElementById('motivo').value == '0')
    {
        document.getElementById('UNIDADE').style.display  = "inline";
        document.getElementById('PERSONA').style.display  = "none";
    }
    else
    {
        document.getElementById('UNIDADE').style.display  = "none";
        document.getElementById('PERSONA').style.display  = "inline";
    }

}

function ContaBuscaCodContabil()      //
{
    document.getElementById("conta_cod_contabil").value = document.getElementById("conta_rubro_nome").value
}

function UnidadeBuscaCodContabil()    //
{
    document.getElementById("unidade_cod_contabil").value = document.getElementById("unidade_rubro_nome").value
}

function DocTipoCompra  (d)           //

{
    document.getElementById('tipomoeda').value = d
}

function ExibeDivCompra()             //
{

    if ( document.getElementById('tipomoeda').value == '0' )
    {
        document.getElementById('DOLAR').style.display = "inline";
        document.getElementById('GUARANI').style.display = "none";
    }

    if ( document.getElementById('tipomoeda').value == '1' )
    {
        document.getElementById('GUARANI').style.display = "inline";
        document.getElementById('DOLAR').style.display = "none";
    }

}

function TipoDocumentoCompra()        //
{

    if ( document.getElementById('tipo').value == '0')
    {
        document.getElementById('compras_documento_documento_id').value   = 2
    }

    else
    {
        document.getElementById('compras_documento_documento_id').value   = 3
    }

}

function CustoProdutoCompra(url)      //
{
    window.open(url, 'Pagina', ' SCROLLBARS=NO, TOP=350, LEFT=500, WIDTH=1000, HEIGHT=320');
}

function EgressoDataCotacao()         //
{
    document.getElementById("key").value = document.getElementById("egresso_data_3i").value+'/'+ document.getElementById("egresso_data_2i").value+'/'+document.getElementById("egresso_data_1i").value;
    document.getElementById("egresso_diferido_3i").value = document.getElementById("egresso_data_3i").value
    document.getElementById("egresso_diferido_2i").value = document.getElementById("egresso_data_2i").value
    document.getElementById("egresso_diferido_1i").value = document.getElementById("egresso_data_1i").value
}

function EgressoGuaraniDolar()        //
{
    varcotacao = ( parseFloat( document.getElementById('egresso_valor_guarani').value ) / parseFloat( document.getElementById('egresso_cotacao').value ) )  ;
    document.getElementById('egresso_valor_dolar').value = varcotacao.toFixed(2);
}

function EgressoDolarGuarani()        //
{
    varcotacao = ( parseFloat( document.getElementById('egresso_valor_dolar').value ) * parseFloat( document.getElementById('egresso_cotacao').value ) )  ;
    document.getElementById('egresso_valor_guarani').value = varcotacao.toFixed(0);
}


//RECEPCAO - NOTA REMICAO---

function RecepcaoNotaRemicaoSetaMotivo(d)     //

{
    document.getElementById('motivo').value = d
}

function RecepcaoNotaRemicaoExibeDivDestino() //
{

    if ( document.getElementById('motivo').value == '0')
    {
        document.getElementById('UNIDADE').style.display  = "inline";
        document.getElementById('PERSONA').style.display  = "none";
    }
    else
    {
        document.getElementById('UNIDADE').style.display  = "none";
        document.getElementById('PERSONA').style.display  = "inline";
    }

}

function PersonaSetaTipo(d)     //

{
    document.getElementById('tipo').value = d
}

function PersonaExibeDivTipo() //
{

    if ( document.getElementById('tipo').value == '0')
    {
        document.getElementById('FISICO').style.display  = "inline";
        document.getElementById('JURIDICO').style.display  = "none";
    }
    else
    {
        document.getElementById('FISICO').style.display  = "none";
        document.getElementById('JURIDICO').style.display  = "inline";
    }

}

//COTACAO INGRESSO

function AdelantoDataCotacao()     //
{
    document.getElementById("key").value = document.getElementById("adelanto_data_3i").value+'/'+ document.getElementById("adelanto_data_2i").value+'/'+document.getElementById("adelanto_data_1i").value;
    document.getElementById("adelanto_diferido_3i").value = document.getElementById("adelanto_data_3i").value
    document.getElementById("adelanto_diferido_2i").value = document.getElementById("adelanto_data_2i").value
    document.getElementById("adelanto_diferido_1i").value = document.getElementById("adelanto_data_1i").value
}

function AdelantoGuaraniDolar()    //
{
    varcotacao = ( parseFloat( document.getElementById('adelanto_valor_guarani').value ) / parseFloat( document.getElementById('adelanto_cotacao').value ) )  ;
    document.getElementById('adelanto_valor_dolar').value = varcotacao.toFixed(2);
}

function AdelantoDolarGuarani()    //
{
    varcotacao = ( parseFloat( document.getElementById('adelanto_valor_dolar').value ) * parseFloat( document.getElementById('adelanto_cotacao').value ) )  ;
    document.getElementById('adelanto_valor_guarani').value = varcotacao.toFixed(0);
}


function TipoFinancaCompra()        //
{

    if ( document.getElementById('tipo').value == '0')
    {
        document.getElementById('compras_financa_documento_id').value   = 2
        document.getElementById('CONTADO').style.display = "inline";
        document.getElementById('CREDITO').style.display = "none";

    }

    else
    {
        document.getElementById('compras_financa_documento_id').value   = 3
        document.getElementById('CONTADO').style.display = "none";
        document.getElementById('CREDITO').style.display = "inline";

    }

}



//COMPRAS_PRODUTOS============================================================//
function ComprasProdutoUnitGs()                                         //
{
    var cotz = document.getElementById('compras_produto_cotacao').value 
    var unit = eval( parseFloat( document.getElementById('compras_produto_unitario_dolar').value.replace(/\./g, "").replace(",", ".") ) * cotz)  ;
    document.getElementById('compras_produto_unitario_guarani').value = ( number_format(unit,0, ',', '.') );

    var tot = eval( parseFloat( document.getElementById('compras_produto_total_dolar').value.replace(/\./g, "").replace(",", ".") ) * cotz)  ;
    document.getElementById('compras_produto_total_guarani').value = ( number_format(tot,0, ',', '.') );

    var iva = eval( parseFloat( document.getElementById('compras_produto_iva_dolar').value.replace(/\./g, "").replace(",", ".") ) * cotz)  ;
    document.getElementById('compras_produto_iva_guarani').value = ( number_format(iva,0, ',', '.') );

}

function ComprasProdutoUnitDolar()                                      //
{
    var cotz = document.getElementById('compras_produto_cotacao').value 
    var unit = eval( parseFloat( document.getElementById('compras_produto_unitario_guarani').value.replace(/\./g, "").replace(",", ".") ) / cotz)  ;
    document.getElementById('compras_produto_unitario_dolar').value = ( number_format(unit,2, ',', '.') );

    var tot = eval( parseFloat( document.getElementById('compras_produto_total_guarani').value.replace(/\./g, "").replace(",", ".") ) / cotz)  ;
    document.getElementById('compras_produto_total_dolar').value = ( number_format(tot,2, ',', '.') );

    var iva = eval( parseFloat( document.getElementById('compras_produto_iva_guarani').value.replace(/\./g, "").replace(",", ".") ) / cotz)  ;
    document.getElementById('compras_produto_iva_dolar').value = ( number_format(iva,2, ',', '.') );
}

function ComprasProdutoTotalDolar()                                     //
{   
    var unit  = parseFloat( document.getElementById('compras_produto_unitario_dolar').value.replace(/\./g, "").replace(",", ".") )
    var total = ( ( unit ) * parseFloat( document.getElementById('compras_produto_quantidade').value.replace(/\./g, "").replace(",", ".") ) )  ;
    document.getElementById('compras_produto_total_dolar').value = ( number_format(total,2, ',', '.') );
    document.getElementById('compras_produto_custo_dolar').value = ( number_format(unit,2, ',', '.') );

    var cambio = eval( parseFloat( document.getElementById('compras_produto_unitario_dolar').value.replace(/\./g, "").replace(",", ".") ) * document.getElementById('compras_produto_cotacao').value )  ;
    document.getElementById('compras_produto_custo_guarani').value = ( number_format(cambio,0, ',', '.') );

}

function ComprasProdutoTotalGs()                                        //
{
    var unit  = parseFloat( document.getElementById('compras_produto_unitario_guarani').value.replace(/\./g, "").replace(",", ".") )
    var total = eval( ( unit ) * parseFloat( document.getElementById('compras_produto_quantidade').value.replace(/\./g, "").replace(",", ".") ) )  ;
    document.getElementById('compras_produto_total_guarani').value = ( number_format(total,0, ',', '.') );
    document.getElementById('compras_produto_custo_guarani').value = ( number_format(unit,0, ',', '.') );

    var cambio = eval( parseFloat( document.getElementById('compras_produto_unitario_guarani').value.replace(/\./g, "").replace(",", ".") ) / document.getElementById('compras_produto_cotacao').value  )  ;
    document.getElementById('compras_produto_custo_dolar').value = ( number_format(cambio,2, ',', '.') );

}

function ComprasProdutoIvaDolar()                                       //
{
    var cambio = document.getElementById('compras_produto_cotacao').value  ;

	if ( document.getElementById('compras_produto_iva_taxa').value == '80' ){

	    var taxa_exenta  = ( ( parseFloat( document.getElementById('compras_produto_custo_dolar').value.replace(/\./g, "").replace(",", ".") ) / 1.02 ) * 0.80 )
		var taxa_10 = ( parseFloat( document.getElementById('compras_produto_custo_dolar').value.replace(/\./g, "").replace(",", ".") )- taxa_exenta )

	    iva     = eval( ( taxa_10 / 11 ) );
    	document.getElementById('compras_produto_iva_dolar').value = ( number_format(iva,3, ',', '.') );

	    document.getElementById('compras_produto_custo_contabil_dolar').value = ( number_format((unit - iva),2, ',', '.') );
	    document.getElementById('compras_produto_custo_contabil_guarani').value = ( number_format( ( ( unit - iva ) * cambio),0, ',', '.') );

	}
	else{

    var unit  = parseFloat( document.getElementById('compras_produto_custo_dolar').value.replace(/\./g, "").replace(",", ".") )
        
    var taxa  = ( ( parseFloat( document.getElementById('compras_produto_iva_taxa').value ) / 100 ) + 1.00 ) * 10;
    iva     = eval( ( unit / taxa ) );
    document.getElementById('compras_produto_iva_dolar').value = ( number_format(iva,3, ',', '.') );

    document.getElementById('compras_produto_custo_contabil_dolar').value = ( number_format((unit - iva),2, ',', '.') );
    document.getElementById('compras_produto_custo_contabil_guarani').value = ( number_format( ( ( unit - iva ) * cambio),0, ',', '.') );
	}

}

function ComprasProdutoIvaGs()                                          //
{
    var cambio = document.getElementById('compras_produto_cotacao').value  ;

	if ( document.getElementById('compras_produto_iva_taxa').value == '80' ) {

	    var taxa_exenta  = ( ( parseFloat( document.getElementById('compras_produto_custo_guarani').value.replace(/\./g, "").replace(",", ".") ) / 1.02 ) * 0.80 )
		var taxa_10 = ( parseFloat( document.getElementById('compras_produto_custo_guarani').value.replace(/\./g, "").replace(",", ".") )- taxa_exenta )

	    iva     = eval( ( taxa_10 / 11 ) );
    	document.getElementById('compras_produto_iva_guarani').value = ( number_format(iva,3, ',', '.') );

    document.getElementById('compras_produto_custo_contabil_guarani').value = ( number_format( (unit - iva),0, ',', '.') );
    document.getElementById('compras_produto_custo_contabil_dolar').value = ( number_format( ( (unit - iva) / cambio),2, ',', '.') );

	}
	else{
    var unit  = parseFloat( document.getElementById('compras_produto_custo_guarani').value.replace(/\./g, "").replace(",", ".") )

    var taxa  = ( ( parseInt( document.getElementById('compras_produto_iva_taxa').value ) / 100 ) + 1.00 ) * 10;
    iva     = eval( ( unit / taxa ) );
    document.getElementById('compras_produto_iva_guarani').value = ( number_format(iva,0, ',', '.') );

    document.getElementById('compras_produto_custo_contabil_guarani').value = ( number_format( (unit - iva),0, ',', '.') );
    document.getElementById('compras_produto_custo_contabil_dolar').value = ( number_format( ( (unit - iva) / cambio),2, ',', '.') );
 }
}


//COMPRAS_DOCUMENTOS============================================================//
function CompraDocGravada05Gs()                                         //
{
        var total = eval( parseFloat( document.getElementById( 'compras_documento_gravadas_05_guarani' ).value.replace(/\./g, "").replace(",", ".") ) / 1.05 );
        document.getElementById( 'compras_documento_imposto_05_guarani' ).value = ( number_format( total * 0.05,0, ',', '.') )
}

function CompraDocGravada05Dolar()                                      //
{
        var total = ( parseFloat( document.getElementById( 'compras_documento_gravadas_05_dolar' ).value.replace(/\./g, "").replace(",", ".") ) / 1.05 );
        document.getElementById( 'compras_documento_imposto_05_dolar' ).value = ( number_format( total * 0.05,2, ',', '.') )
}

function CompraDocGravada10Gs()                                         //
{
    var total = eval( parseFloat( document.getElementById( 'compras_documento_gravadas_10_guarani' ).value.replace(/\./g, "").replace(",", ".") ) / 1.1 );
    document.getElementById( 'compras_documento_imposto_10_guarani' ).value = ( number_format( total * 0.10,0, ',', '.') )

    var gr10Gs  = parseFloat( document.getElementById('compras_documento_gravadas_10_guarani').value.replace(/\./g, "").replace(",", ".") )
    var imp10Gs = parseFloat( document.getElementById('compras_documento_imposto_10_guarani').value.replace(/\./g, "").replace(",", ".") )
    var gr05Gs  = parseFloat( document.getElementById('compras_documento_gravadas_05_guarani').value.replace(/\./g, "").replace(",", ".") )
    var imp05Gs = parseFloat( document.getElementById('compras_documento_imposto_05_guarani').value.replace(/\./g, "").replace(",", ".") )
    var exentas = parseFloat( document.getElementById('compras_documento_exentas_guarani').value.replace(/\./g, "").replace(",", ".") )
    var totalgs = document.getElementById( 'compras_documento_total_guarani' ).value = ( number_format( gr10Gs + gr05Gs + exentas,0, ',', '.') )

    var cotacao = document.getElementById( 'compras_documento_cotacao' ).value

    document.getElementById( 'compras_documento_total_dolar' ).value       = ( number_format( (totalgs.replace(/\./g, "").replace(",", ".") / cotacao),2, ',', '.') )
    document.getElementById( 'compras_documento_exentas_dolar' ).value     = ( number_format( (exentas / cotacao),2, ',', '.') )
    document.getElementById( 'compras_documento_gravadas_10_dolar' ).value = ( number_format( (gr10Gs / cotacao),2, ',', '.') )
    document.getElementById( 'compras_documento_imposto_10_dolar' ).value  = ( number_format( (imp10Gs / cotacao),2, ',', '.') )
    document.getElementById( 'compras_documento_gravadas_05_dolar' ).value = ( number_format( (gr05Gs / cotacao),2, ',', '.') )
    document.getElementById( 'compras_documento_imposto_05_dolar' ).value  = ( number_format( (imp05Gs / cotacao),2, ',', '.') )


}

function CompraDocGravada10Dolar()                                      //
{
    var total = ( parseFloat( document.getElementById( 'compras_documento_gravadas_10_dolar' ).value.replace(/\./g, "").replace(",", ".") ) / 1.1 );
    document.getElementById( 'compras_documento_imposto_10_dolar' ).value = ( number_format( total * 0.10,2, ',', '.') )

    var gr10Dolar  = parseFloat( document.getElementById('compras_documento_gravadas_10_dolar').value.replace(/\./g, "").replace(",", ".") )
    var imp10Dolar = parseFloat( document.getElementById('compras_documento_imposto_10_dolar').value.replace(/\./g, "").replace(",", ".") )
    var gr05Dolar  = parseFloat( document.getElementById('compras_documento_gravadas_05_dolar').value.replace(/\./g, "").replace(",", ".") )
    var imp05Dolar = parseFloat( document.getElementById('compras_documento_imposto_05_dolar').value.replace(/\./g, "").replace(",", ".") )
    var exentas    = parseFloat( document.getElementById('compras_documento_exentas_dolar').value.replace(/\./g, "").replace(",", ".") )
    var totalus    = document.getElementById( 'compras_documento_total_dolar' ).value = ( number_format( gr10Dolar + gr05Dolar + exentas,2, ',', '.') )

    var cotacao = document.getElementById( 'compras_documento_cotacao' ).value

    document.getElementById( 'compras_documento_total_guarani' ).value       = ( number_format( (totalus.replace(/\./g, "").replace(",", ".") * cotacao),0, ',', '.') )
    document.getElementById( 'compras_documento_exentas_guarani' ).value     = ( number_format( (exentas * cotacao),0, ',', '.') )
    document.getElementById( 'compras_documento_gravadas_10_guarani' ).value = ( number_format( (gr10Dolar * cotacao),0, ',', '.') )
    document.getElementById( 'compras_documento_imposto_10_guarani' ).value  = ( number_format( (imp10Dolar * cotacao),0, ',', '.') )
    document.getElementById( 'compras_documento_gravadas_05_guarani' ).value = ( number_format( (gr05Dolar * cotacao),0, ',', '.') )
    document.getElementById( 'compras_documento_imposto_05_guarani' ).value  = ( number_format( (imp05Dolar * cotacao),0, ',', '.') )
}

//COMPRAS_PRORATEO============================================================//
function CompraProrateoUsToGs(us,gs)                                    //
{
        var cambio = eval( parseFloat( document.getElementById(us).value.replace(/\./g, "").replace(",", ".") ) * document.getElementById('compra_cotacao').value )  ;
        document.getElementById(gs).value = ( number_format( cambio,0, ',', '.') )
}

function CompraProrateoGsToUs(gs,us)                                    //
{
        var cambio = eval( parseFloat( document.getElementById(gs).value.replace(/\./g, "").replace(",", ".") ) / document.getElementById('compra_cotacao').value )  ;
        document.getElementById(us).value = ( number_format( cambio,2, ',', '.') )
}

function CompraTotalDespachoGs()                                        //
{
    var despacho = eval( parseFloat( document.getElementById('total_documento_guarani').value.replace(/\./g, "").replace(",", ".") ) + ( parseFloat( document.getElementById('compra_iva_despacho_guarani').value.replace(/\./g, "").replace(",", ".") ) ) )  ;
    document.getElementById('compra_despacho_guarani').value = ( number_format( despacho,0, ',', '.') )

    var cambiodesp = eval( document.getElementById('compra_despacho_guarani').value.replace(/\./g, "").replace(",", ".") / document.getElementById('compra_cotacao').value );
    document.getElementById('compra_despacho_dolar').value = ( number_format( cambiodesp,2, ',', '.') )

    var cambioiva = ( document.getElementById('compra_iva_despacho_guarani').value.replace(/\./g, "").replace(",", ".") / document.getElementById('compra_cotacao').value );
    document.getElementById('compra_iva_despacho_dolar').value = ( number_format( cambioiva,2, ',', '.') )
}

function CompraTotalDespachoDolar()                                     //
{

    var despacho = eval( parseFloat( document.getElementById('total_documento_dolar').value.replace(/\./g, "").replace(",", ".") ) + ( parseFloat( document.getElementById('compra_iva_despacho_dolar').value.replace(/\./g, "").replace(",", ".") ) ) )  ;
    document.getElementById('compra_despacho_dolar').value = ( number_format( despacho,2, ',', '.') )

    var cambiodesp = eval( document.getElementById('compra_despacho_dolar').value.replace(/\./g, "").replace(",", ".") * document.getElementById('compra_cotacao').value );
    document.getElementById('compra_despacho_guarani').value = ( number_format( cambiodesp,0, ',', '.') )

    var cambioiva = ( document.getElementById('compra_iva_despacho_dolar').value.replace(/\./g, "").replace(",", ".") * document.getElementById('compra_cotacao').value );
    document.getElementById('compra_iva_despacho_guarani').value = ( number_format( cambioiva,0, ',', '.') )
}

//CAMBIO======================================================================//


function UsToGsRs(ct,ctrs,us,gs,rs)                                               //
{
        var cambio = eval( parseFloat( document.getElementById(us).value.replace(/\./g, "").replace(",", ".") ) * parseFloat( document.getElementById(ct).value ) ) ;
        document.getElementById(gs).value = ( number_format( cambio,0, ',', '.') )
        var cambiors = eval( parseFloat( document.getElementById(gs).value.replace(/\./g, "") ) / parseFloat( document.getElementById(ctrs).value.replace(/\./g, "").replace(",", ".") ) )  ;
        document.getElementById(rs).value = ( number_format( cambiors,2, ',', '.') )

}

function GsToUsRs(ct,ctrs,gs,us,rs)                                               //
{
        var cambio = eval( parseFloat( document.getElementById(gs).value.replace(/\./g, "") ) / parseFloat( document.getElementById(ct).value.replace(/\./g, "") ) )  ;
        document.getElementById(us).value = ( number_format( cambio,2, ',', '.') )
        var cambiors = eval( parseFloat( document.getElementById(gs).value.replace(/\./g, "") ) / parseFloat( document.getElementById(ctrs).value.replace(/\./g, "").replace(",", ".") ) )  ;
        document.getElementById(rs).value = ( number_format( cambiors,2, ',', '.') )
}


function RsToUsGs(ct,ctrs,gs,us,rs)                                               //
{
        var cambio = eval( parseFloat( document.getElementById(rs).value.replace(/\./g, "").replace(",", ".") ) * parseFloat( document.getElementById(ctrs).value.replace(/\./g, "").replace(",", ".") ) )  ;
        document.getElementById(gs).value = ( number_format( cambio,0, ',', '.') )

        var cambiors = eval( parseFloat( document.getElementById(gs).value.replace(/\./g, "") ) / parseFloat( document.getElementById(ct).value.replace(/\./g, "")) )  ;
        document.getElementById(us).value = ( number_format( cambiors,2, ',', '.') )

}


function QtdToTotUs(qtd,unit,tot)                                               //
{
        var result = eval( parseFloat( document.getElementById(qtd).value.replace(/\./g, "").replace(",", ".") ) ) * eval( parseFloat( document.getElementById(unit).value.replace(/\./g, "").replace(",", ".") ) )  ;
        document.getElementById(tot).value = ( number_format( result,2, ',', '.') )
}

function QtdToTotGs(qtd,unit,tot)                                               //
{
        var result = eval( parseFloat( document.getElementById(qtd).value.replace(/\./g, "").replace(",", ".") ) ) * eval( parseFloat( document.getElementById(unit).value.replace(/\./g, "").replace(",", ".") ) )  ;
        document.getElementById(tot).value = ( number_format( result,0, ',', '.') )
}


function VueltoChequeGs()                                               //
{
    var cotacao = ( parseFloat( document.getElementById('cobros_financa_valor_guarani').value ) - parseFloat( document.getElementById('cobros_financa_valor_cheque_guarani').value ) )  ;
    document.getElementById('cobros_financa_vuelto_guarani').value = cotacao.toFixed(0);

    var chequeus = parseFloat( document.getElementById('cobros_financa_valor_cheque_guarani').value ) / parseFloat( document.getElementById('cotacao').value);
   document.getElementById('cobros_financa_valor_cheque_dolar').value = chequeus.toFixed(2)

    var vueltous = parseFloat( document.getElementById('cobros_financa_vuelto_guarani').value ) / parseFloat( document.getElementById('cotacao').value);
   document.getElementById('cobros_financa_vueldo_dolar').value = vueltous.toFixed(2)
}

function VueltoChequeUs()                                               //
{
    var cotacao = ( parseFloat( document.getElementById('cobros_financa_valor_dolar').value ) - parseFloat( document.getElementById('cobros_financa_valor_cheque_dolar').value ) )  ;
    document.getElementById('cobros_financa_vuelto_dolar').value = cotacao.toFixed(0);

    var chequeus = parseFloat( document.getElementById('cobros_financa_valor_cheque_dolar').value ) * parseFloat( document.getElementById('cotacao').value);
   document.getElementById('cobros_financa_valor_cheque_guarani').value = chequeus.toFixed(0)

    var vueltous = parseFloat( document.getElementById('cobros_financa_vuelto_dolar').value ) * parseFloat( document.getElementById('cotacao').value);
   document.getElementById('cobros_financa_vueldo_guarani').value = vueltous.toFixed(0)
}

//FOCO IMPUT=================================================================//

function ImputFocus(i)                                                  //
{
document.getElementById(i).focus();
}

function DataCotacao(d,m,y)                                             //
{
    document.getElementById("key").value = document.getElementById(d).value+'/'+ document.getElementById(m).value+'/'+document.getElementById(y).value;
}


function NotaCreditoUnitUs(){

    var total = eval( parseFloat( document.getElementById('nota_creditos_detalhe_unitario_dolar').value.replace(/\./g, "").replace(",", ".") ) * parseFloat( document.getElementById('nota_creditos_detalhe_quantidade').value.replace(/\./g, "").replace(",", ".") ) )  ;
    document.getElementById('nota_creditos_detalhe_total_dolar').value = ( number_format(total,2, ',', '.') );
}

function NotaCreditoUnitGs(){

    var total = eval( parseFloat( document.getElementById('nota_creditos_detalhe_unitario_guarani').value.replace(/\./g, "").replace(",", ".") ) * parseFloat( document.getElementById('nota_creditos_detalhe_quantidade').value.replace(/\./g, "").replace(",", ".") ) )  ;
    document.getElementById('nota_creditos_detalhe_total_guarani').value = ( number_format(total,0, ',', '.') );
}

function NotaCreditoIvaUs(){

    taxa = ( ( parseFloat( document.getElementById('nota_creditos_detalhe_taxa').value ) / 100 ) + 1.00 );

    vartotal = eval( parseFloat( document.getElementById('nota_creditos_detalhe_total_dolar').value.replace(/\./g, "").replace(",", ".") ) / taxa );
    vartotal = eval( ( ( vartotal * parseFloat( document.getElementById('nota_creditos_detalhe_taxa').value.replace(/\./g, "").replace(",", ".") ) ) / 100 ) / parseFloat( document.getElementById('nota_creditos_detalhe_quantidade').value.replace(/\./g, "").replace(",", ".") ) );
    document.getElementById('nota_creditos_detalhe_iva_dolar').value = ( number_format(vartotal ,6, ',', '.') );


    var total = eval( parseFloat( document.getElementById('nota_creditos_detalhe_unitario_dolar').value.replace(/\./g, "").replace(",", ".") ) * parseFloat( document.getElementById('nota_creditos_detalhe_quantidade').value.replace(/\./g, "").replace(",", ".") ) )  ;
    document.getElementById('nota_creditos_detalhe_total_dolar').value = ( number_format(total,2, ',', '.') );
}


function NotaCreditoIvaGs(){

    taxa = ( ( parseFloat( document.getElementById('nota_creditos_detalhe_taxa').value ) / 100 ) + 1.00 );

    vartotal = eval( parseFloat( document.getElementById('nota_creditos_detalhe_total_guarani').value.replace(/\./g, "").replace(",", ".") ) / taxa );
    vartotal = eval( ( ( vartotal * parseFloat( document.getElementById('nota_creditos_detalhe_taxa').value.replace(/\./g, "").replace(",", ".") ) ) / 100 ) / parseFloat( document.getElementById('nota_creditos_detalhe_quantidade').value.replace(/\./g, "").replace(",", ".") ) );
    document.getElementById('nota_creditos_detalhe_iva_guarani').value = ( number_format(vartotal ,6, ',', '.') );


    var total = eval( parseFloat( document.getElementById('nota_creditos_detalhe_unitario_guarani').value.replace(/\./g, "").replace(",", ".") ) * parseFloat( document.getElementById('nota_creditos_detalhe_quantidade').value.replace(/\./g, "").replace(",", ".") ) )  ;
    document.getElementById('nota_creditos_detalhe_total_guarani').value = ( number_format(total,0, ',', '.') );
}



//CONSUMICAO INTERNA==============================================================//

function ConsumicaoInternaUnitGs()                                          //
{
    var total = eval( parseFloat( document.getElementById('consumicao_interna_produto_unitario_dolar').value.replace(/\./g, "").replace(",", ".") ) * document.getElementById('consumicao_interna_produto_cotacao').value  )  ;
    document.getElementById('consumicao_interna_produto_unitario_guarani').value = ( number_format(total,0, ',', '.') )
}

function ConsumicaoInternaUnitUs()                                       //
{
    var total = eval( parseFloat( document.getElementById('consumicao_interna_produto_unitario_guarani').value.replace(/\./g, "").replace(",", ".") ) / document.getElementById('consumicao_interna_produto_cotacao').value  )  ;
    document.getElementById('consumicao_interna_produto_unitario_dolar').value = ( number_format(total,2, ',', '.') )
}

function ConsumicaoInternaTotalDolar()                                      //
{
    var total = eval( parseFloat( document.getElementById('consumicao_interna_produto_unitario_dolar').value.replace(/\./g, "").replace(",", ".") ) * parseFloat( document.getElementById('consumicao_interna_produto_quantidade').value.replace(/\./g, "").replace(",", ".") ) )  ;
    document.getElementById('consumicao_interna_produto_total_dolar').value = ( number_format(total,2, ',', '.') );
}

function ConsumicaoInternaTotalGs()                                         //
{
    var total = eval( parseFloat( document.getElementById('consumicao_interna_produto_unitario_guarani').value.replace(/\./g, "").replace(",", ".") ) * parseFloat( document.getElementById('consumicao_interna_produto_quantidade').value.replace(/\./g, "").replace(",", ".") ) )  ;
    document.getElementById('consumicao_interna_produto_total_guarani').value = ( number_format(total,0, ',', '.') );
}

function ConsumicaoInternaIvaDolar()                                        //
{
    taxa = ( ( parseFloat( document.getElementById('consumicao_interna_produto_taxa').value ) / 100 ) + 1.00 );

    vartotal = eval( parseFloat( document.getElementById('consumicao_interna_produto_total_dolar').value.replace(/\./g, "").replace(",", ".") ) / taxa );
    vartotal = eval( ( ( vartotal * parseFloat( document.getElementById('consumicao_interna_produto_taxa').value.replace(/\./g, "").replace(",", ".") ) ) / 100 ) / parseFloat( document.getElementById('consumicao_interna_produto_quantidade').value.replace(/\./g, "").replace(",", ".") ) );
    document.getElementById('consumicao_interna_produto_iva_dolar').value = ( number_format(vartotal ,6, ',', '.') );
}

function ConsumicaoInternaIvaGs()                                           //
{
    taxa = ( ( parseFloat( document.getElementById('consumicao_interna_produto_taxa').value ) / 100 ) + 1.00 );

    vartotal = eval( parseFloat( document.getElementById('consumicao_interna_produto_total_guarani').value.replace(/\./g, "").replace(",", ".") ) / taxa );
    vartotal = eval( ( ( vartotal * parseFloat( document.getElementById('consumicao_interna_produto_taxa').value.replace(/\./g, "").replace(",", ".") ) ) / 100 ) / parseFloat( document.getElementById('consumicao_interna_produto_quantidade').value.replace(/\./g, "").replace(",", ".") ) );
    document.getElementById('consumicao_interna_produto_iva_guarani').value = ( number_format(vartotal ,6, ',', '.') );
}




//FATURA========================================================================

function FaturaGravada05Gs()        //
{
    var vartotal = eval( parseFloat( document.getElementById( 'fatura_gravadas_05_guarani' ).value.replace(/\./g, "").replace(",", ".") ) / 1.05 );
    document.getElementById( 'fatura_imposto_05_guarani' ).value = ( number_format(vartotal * 0.05,0, ',', '.') );
}

function FaturaGravada05Dolar()     //
{
    var vartotal = eval( parseFloat( document.getElementById( 'fatura_gravadas_05_dolar' ).value.replace(/\./g, "").replace(",", ".") ) / 1.05 );
    document.getElementById( 'fatura_imposto_05_dolar' ).value = ( number_format(vartotal * 0.05,2, ',', '.') );
}

function FaturaGravada10Gs()        //
{

    var vartotal = eval( parseFloat( document.getElementById( 'fatura_gravadas_10_guarani' ).value.replace(/\./g, "").replace(",", ".") ) / 1.1 );
    document.getElementById( 'fatura_imposto_10_guarani' ).value = ( number_format(vartotal * 0.10,0, ',', '.') );

    var imposto10Gs = parseFloat( document.getElementById('fatura_gravadas_10_guarani').value.replace(/\./g, "").replace(",", ".") )
    var imposto05Gs = parseFloat( document.getElementById('fatura_gravadas_05_guarani').value.replace(/\./g, "").replace(",", ".") )
    var exentas     = parseFloat( document.getElementById('fatura_exentas_guarani').value.replace(/\./g, "").replace(",", ".") )
    var total       = eval( imposto10Gs + imposto05Gs + exentas )
    document.getElementById( 'fatura_total_guarani' ).value = ( number_format(total,0, ',', '.') )
}

function FaturaGravada10Dolar()     //
{
    var vartotal = eval( parseFloat( document.getElementById( 'fatura_gravadas_10_dolar' ).value.replace(/\./g, "").replace(",", ".") ) / 1.1 );
    document.getElementById( 'fatura_imposto_10_dolar' ).value = ( number_format(vartotal * 0.10,2, ',', '.') );

    var imposto10Dolar = parseFloat( document.getElementById('fatura_gravadas_10_dolar').value.replace(/\./g, "").replace(",", ".") )
    var imposto05Dolar = parseFloat( document.getElementById('fatura_gravadas_05_dolar').value.replace(/\./g, "").replace(",", ".") )
    var exentas        = parseFloat( document.getElementById('fatura_exentas_dolar').value.replace(/\./g, "").replace(",", ".") )
    var total          = eval( imposto10Dolar + imposto05Dolar + exentas )
    document.getElementById( 'fatura_total_dolar' ).value =  ( number_format(total,2, ',', '.') )

}



function CalcQtdDescimal(unit,qtd,tot)                                      //
{
    var total = eval( parseFloat( document.getElementById(unit).value.replace(/\./g, "").replace(",", ".") ) * parseFloat( document.getElementById(qtd).value.replace(/\./g, "").replace(",", ".") ) )  ;
    document.getElementById(tot).value = ( number_format(total,2, ',', '.') );
}

function CalcQtd(unit,qtd,tot)                                      //
{
    var total = eval( parseFloat( document.getElementById(unit).value.replace(/\./g, "").replace(",", ".") ) * parseFloat( document.getElementById(qtd).value.replace(/\./g, "").replace(",", ".") ) )  ;
    document.getElementById(tot).value = ( number_format(total,0, ',', '.') );
}


function VendaPorcentagemGs()               //

{
    varmargem   = ( eval( parseFloat( document.getElementById('compras_produto_porcentagem').value.replace(/\./g, "").replace(",", ".") ) ) / 100 )  ;
    varcalc     = ( ( varmargem  *  eval( parseFloat( document.getElementById('compras_produto_unitario_guarani').value.replace(/\./g, "").replace(",", ".") ) ) )  + eval( parseFloat( document.getElementById('compras_produto_unitario_guarani').value.replace(/\./g, "").replace(",", ".") ) ) )
    document.getElementById('compras_produto_preco_venda_guarani').value   =  ( number_format( varcalc,0, ',', '.') );
}

function VendaPorcentagemInversa()          //
{
    varmargem   = ( ( ( parseFloat( eval( document.getElementById('compras_produto_preco_venda_guarani').value.replace(/\./g, "").replace(",", ".") )  - eval( document.getElementById('compras_produto_unitario_guarani').value.replace(/\./g, "").replace(",", ".") ) ) ) * 100 )  / document.getElementById('compras_produto_unitario_guarani').value.replace(/\./g, "").replace(",", ".") ) ;
    document.getElementById('compras_produto_porcentagem').value   = varmargem;
}


function VendaPorcentagemMayoriGs()               //

{
    varmargem   = ( eval( parseFloat( document.getElementById('compras_produto_porc_maiorista').value.replace(/\./g, "").replace(",", ".") ) ) / 100 )  ;
    varcalc     = ( ( varmargem  *  eval( parseFloat( document.getElementById('compras_produto_unitario_guarani').value.replace(/\./g, "").replace(",", ".") ) ) )  + eval( parseFloat( document.getElementById('compras_produto_unitario_guarani').value.replace(/\./g, "").replace(",", ".") ) ) )
    document.getElementById('compras_produto_preco_maiorista_guarani').value   =  ( number_format( varcalc,0, ',', '.') );
}

function VendaPorcentagemMayoriInversa()          //
{
    varmargem   = ( ( ( parseFloat( eval( document.getElementById('compras_produto_maiorista_guarani').value.replace(/\./g, "").replace(",", ".") )  - eval( document.getElementById('compras_produto_unitario_guarani').value.replace(/\./g, "").replace(",", ".") ) ) ) * 100 )  / document.getElementById('compras_produto_unitario_guarani').value.replace(/\./g, "").replace(",", ".") ) ;
    document.getElementById('compras_produto_porc_maiorista').value   = varmargem;
}


function VendaPorcentagemMinorGs()               //

{
    varmargem   = ( eval( parseFloat( document.getElementById('compras_produto_porc_minorista').value.replace(/\./g, "").replace(",", ".") ) ) / 100 )  ;
    varcalc     = ( ( varmargem  *  eval( parseFloat( document.getElementById('compras_produto_unitario_guarani').value.replace(/\./g, "").replace(",", ".") ) ) )  + eval( parseFloat( document.getElementById('compras_produto_unitario_guarani').value.replace(/\./g, "").replace(",", ".") ) ) )
    document.getElementById('compras_produto_preco_minorista_guarani').value   =  ( number_format( varcalc,0, ',', '.') );
}

function VendaPorcentagemMinorInversa()          //
{
    varmargem   = ( ( ( parseFloat( eval( document.getElementById('compras_produto_minorista_guarani').value.replace(/\./g, "").replace(",", ".") )  - eval( document.getElementById('compras_produto_unitario_guarani').value.replace(/\./g, "").replace(",", ".") ) ) ) * 100 )  / document.getElementById('compras_produto_unitario_guarani').value.replace(/\./g, "").replace(",", ".") ) ;
    document.getElementById('compras_produto_porc_minorista').value   = varmargem;
}


//porcetagem dolar

function VendaPorcentagemUs()               //

{
	if (document.getElementById('compras_produto_porcentagem').value > 0){  
       varmargem   = ( eval( parseFloat( document.getElementById('compras_produto_porcentagem').value.replace(/\./g, "").replace(",", ".") ) ) / 100 )  ;
       varcalc     = ( ( varmargem  *  eval( parseFloat( document.getElementById('compras_produto_unitario_dolar').value.replace(/\./g, "").replace(",", ".") ) ) )  + eval( parseFloat( document.getElementById('compras_produto_unitario_dolar').value.replace(/\./g, "").replace(",", ".") ) ) )
       document.getElementById('compras_produto_preco_venda_dolar').value   =  ( number_format( varcalc,2, ',', '.') );
      }
    else{
       document.getElementById('compras_produto_preco_venda_dolar').value   =  0;
    }  
}

function VendaPorcentagemInversaUs()          //
{
	if ( parseFloat( document.getElementById('compras_produto_preco_venda_dolar').value ) > 0 ){  
        varmargem   = ( ( ( parseFloat( eval( document.getElementById('compras_produto_preco_venda_dolar').value.replace(/\./g, "").replace(",", ".") )  - eval( document.getElementById('compras_produto_unitario_dolar').value.replace(/\./g, "").replace(",", ".") ) ) ) * 100 )  / document.getElementById('compras_produto_unitario_dolar').value.replace(/\./g, "").replace(",", ".") ) ;
        document.getElementById('compras_produto_porcentagem').value   = varmargem.toFixed(0);
       }
   else {
   	   document.getElementById('compras_produto_porcentagem').value   = 0;
   }    
}

function VendaPorcentagemMayoriUs()               //

{
	if (document.getElementById('compras_produto_porc_maiorista').value > 0){  

    varmargem   = ( eval( parseFloat( document.getElementById('compras_produto_porc_maiorista').value.replace(/\./g, "").replace(",", ".") ) ) / 100 )  ;
    varcalc     = ( ( varmargem  *  eval( parseFloat( document.getElementById('compras_produto_unitario_dolar').value.replace(/\./g, "").replace(",", ".") ) ) )  + eval( parseFloat( document.getElementById('compras_produto_unitario_dolar').value.replace(/\./g, "").replace(",", ".") ) ) )
    document.getElementById('compras_produto_preco_maiorista_dolar').value   =  ( number_format( varcalc,2, ',', '.') );
   }
   else {
    document.getElementById('compras_produto_preco_maiorista_dolar').value   =  0;   	
   }
}

function VendaPorcentagemMayoriInversaUs()          //
{
	if (document.getElementById('compras_produto_preco_maiorista_dolar').value != 0){  
       varmargem   = ( ( ( parseFloat( eval( document.getElementById('compras_produto_preco_maiorista_dolar').value.replace(/\./g, "").replace(",", ".") )  - eval( document.getElementById('compras_produto_unitario_dolar').value.replace(/\./g, "").replace(",", ".") ) ) ) * 100 )  / document.getElementById('compras_produto_unitario_dolar').value.replace(/\./g, "").replace(",", ".") ) ;
       document.getElementById('compras_produto_porc_maiorista').value   = varmargem.toFixed(0);
      }
    else{
 	       document.getElementById('compras_produto_porc_maiorista').value   = 0;
    }
}


function VendaPorcentagemMinorUs()               //

{
	if (document.getElementById('compras_produto_porc_minorista').value > 0){  
       varmargem   = ( eval( parseFloat( document.getElementById('compras_produto_porc_minorista').value.replace(/\./g, "").replace(",", ".") ) ) / 100 )  ;
       varcalc     = ( ( varmargem  *  eval( parseFloat( document.getElementById('compras_produto_unitario_dolar').value.replace(/\./g, "").replace(",", ".") ) ) )  + eval( parseFloat( document.getElementById('compras_produto_unitario_dolar').value.replace(/\./g, "").replace(",", ".") ) ) )
       document.getElementById('compras_produto_preco_minorista_dolar').value   =  ( number_format( varcalc,2, ',', '.') );
   }
   else{
       document.getElementById('compras_produto_preco_minorista_dolar').value   =  0;   	
   }
}

function VendaPorcentagemMinorInversaUs()          //
{
	if (document.getElementById('compras_produto_preco_minorista_dolar').value != 0){  
       varmargem   = ( ( ( parseFloat( eval( document.getElementById('compras_produto_preco_minorista_dolar').value.replace(/\./g, "").replace(",", ".") )  - eval( document.getElementById('compras_produto_unitario_dolar').value.replace(/\./g, "").replace(",", ".") ) ) ) * 100 )  / document.getElementById('compras_produto_unitario_dolar').value.replace(/\./g, "").replace(",", ".") ) ;
       document.getElementById('compras_produto_porc_minorista').value   = varmargem.toFixed(0);
      }
    else{
       document.getElementById('compras_produto_porc_minorista').value   = 0;    	
    }
}


function NcProvProdutoQuant()                                     //
{   
    var quant   = parseFloat( document.getElementById('nota_credito_proveedor_produto_quantidade').value.replace(/\./g, "").replace(",", ".") )
    var totalus = ( ( quant ) * parseFloat( document.getElementById('nota_credito_proveedor_produto_unitario_dolar').value.replace(/\./g, "").replace(",", ".") ) )  ;
    document.getElementById('nota_credito_proveedor_produto_total_dolar').value = ( number_format(totalus,2, ',', '.') );

    var totalgs = ( ( quant ) * parseFloat( document.getElementById('nota_credito_proveedor_produto_unitario_guarani').value.replace(/\./g, "").replace(",", ".") ) )  ;
    document.getElementById('nota_credito_proveedor_produto_total_guarani').value = ( number_format(totalgs,2, ',', '.') );

}


function CobrosVultos()                                           //
{
        vartrocog = eval( parseFloat( document.getElementById('cobros_financa_cheque_valor_dolar').value.replace(/\./g, "").replace(",", ".") ) - parseFloat( document.getElementById('cobros_financa_valor_dolar').value.replace(/\./g, "").replace(",", ".") ) )  ;
        document.getElementById('cobros_financa_vuelto_valor_dolar').value = ( number_format(vartrocog,2, ',', '.') );

        vartrocog = eval( parseFloat( document.getElementById('cobros_financa_cheque_valor_guarani').value.replace(/\./g, "").replace(",", ".") ) - parseFloat( document.getElementById('cobros_financa_valor_guarani').value.replace(/\./g, "").replace(",", ".") ) )  ;
        document.getElementById('cobros_financa_vuelto_valor_guarani').value = ( number_format(vartrocog,0, ',', '.') );

}


