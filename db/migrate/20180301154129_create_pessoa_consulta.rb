class CreatePessoaConsulta < ActiveRecord::Migration[5.1]
  def change
    create_table :pessoa_consulta do |t|
      t.string :documento
      t.string :nome
      t.string :nome_mae
      t.string :nome_fantasia
      t.string :nascimento
      t.string :fundacao
      t.string :situacao_rfb
      t.string :descricao_rfb
      t.string :data_situacao
      t.integer :ocorrencias
      t.string :valor_total
      t.integer :pend_inter
      t.string :pend_int_obs
      t.integer :pend_fin
      t.string :pend_fin_obs
      t.integer :pend_bacen
      t.string :pend_bacen_obs

      t.timestamps
    end
  end
end
