class RemoveNomeFromPessoa < ActiveRecord::Migration[5.1]
  def change
    remove_column :pessoas, :nome, :string
  end
end
