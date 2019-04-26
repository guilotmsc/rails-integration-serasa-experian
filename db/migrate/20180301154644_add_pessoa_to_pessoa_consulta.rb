class AddPessoaToPessoaConsulta < ActiveRecord::Migration[5.1]
  def change
    add_reference :pessoa_consulta, :pessoa, foreign_key: true
  end
end
