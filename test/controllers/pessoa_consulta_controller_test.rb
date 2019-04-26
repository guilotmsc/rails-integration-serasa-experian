require 'test_helper'

class PessoaConsultaControllerTest < ActionDispatch::IntegrationTest
  setup do
    @pessoa_consultum = pessoa_consulta(:one)
  end

  test "should get index" do
    get pessoa_consulta_url
    assert_response :success
  end

  test "should get new" do
    get new_pessoa_consultum_url
    assert_response :success
  end

  test "should create pessoa_consultum" do
    assert_difference('PessoaConsultum.count') do
      post pessoa_consulta_url, params: { pessoa_consultum: { data_situacao: @pessoa_consultum.data_situacao, descricao_rfb: @pessoa_consultum.descricao_rfb, documento: @pessoa_consultum.documento, fundacao: @pessoa_consultum.fundacao, nascimento: @pessoa_consultum.nascimento, nome: @pessoa_consultum.nome, nome_fantasia: @pessoa_consultum.nome_fantasia, nome_mae: @pessoa_consultum.nome_mae, ocorrencias: @pessoa_consultum.ocorrencias, pend_bacen: @pessoa_consultum.pend_bacen, pend_bacen_obs: @pessoa_consultum.pend_bacen_obs, pend_fin: @pessoa_consultum.pend_fin, pend_fin_obs: @pessoa_consultum.pend_fin_obs, pend_int_obs: @pessoa_consultum.pend_int_obs, pend_inter: @pessoa_consultum.pend_inter, situacao_rfb: @pessoa_consultum.situacao_rfb, valor_total: @pessoa_consultum.valor_total } }
    end

    assert_redirected_to pessoa_consultum_url(PessoaConsultum.last)
  end

  test "should show pessoa_consultum" do
    get pessoa_consultum_url(@pessoa_consultum)
    assert_response :success
  end

  test "should get edit" do
    get edit_pessoa_consultum_url(@pessoa_consultum)
    assert_response :success
  end

  test "should update pessoa_consultum" do
    patch pessoa_consultum_url(@pessoa_consultum), params: { pessoa_consultum: { data_situacao: @pessoa_consultum.data_situacao, descricao_rfb: @pessoa_consultum.descricao_rfb, documento: @pessoa_consultum.documento, fundacao: @pessoa_consultum.fundacao, nascimento: @pessoa_consultum.nascimento, nome: @pessoa_consultum.nome, nome_fantasia: @pessoa_consultum.nome_fantasia, nome_mae: @pessoa_consultum.nome_mae, ocorrencias: @pessoa_consultum.ocorrencias, pend_bacen: @pessoa_consultum.pend_bacen, pend_bacen_obs: @pessoa_consultum.pend_bacen_obs, pend_fin: @pessoa_consultum.pend_fin, pend_fin_obs: @pessoa_consultum.pend_fin_obs, pend_int_obs: @pessoa_consultum.pend_int_obs, pend_inter: @pessoa_consultum.pend_inter, situacao_rfb: @pessoa_consultum.situacao_rfb, valor_total: @pessoa_consultum.valor_total } }
    assert_redirected_to pessoa_consultum_url(@pessoa_consultum)
  end

  test "should destroy pessoa_consultum" do
    assert_difference('PessoaConsultum.count', -1) do
      delete pessoa_consultum_url(@pessoa_consultum)
    end

    assert_redirected_to pessoa_consulta_url
  end
end
