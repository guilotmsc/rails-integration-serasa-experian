json.extract! pessoa_consultum, :id, :documento, :nome, :nome_mae, :nome_fantasia, :nascimento, :fundacao, :situacao_rfb, :descricao_rfb, :data_situacao, :ocorrencias, :valor_total, :pend_inter, :pend_int_obs, :pend_fin, :pend_fin_obs, :pend_bacen, :pend_bacen_obs, :created_at, :updated_at
json.url pessoa_consultum_url(pessoa_consultum, format: :json)
