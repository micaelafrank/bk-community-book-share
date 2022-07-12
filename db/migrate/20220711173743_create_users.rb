class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name 
      t.string :username
      t.string :password_digest
      t.integer :total_acquired_books
      t.integer :tokens 
      t.integer :zip
      t.integer :dropbox_id
      t.boolean :is_admin
      
      t.timestamps
    end
  end
end
