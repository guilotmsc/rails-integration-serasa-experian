class RemoveCpfFromPessoa < ActiveRecord::Migration[5.1]
  def change
    remove_column :pessoas, :cpf, :string
  end
end
