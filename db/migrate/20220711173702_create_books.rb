class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author 
      t.text :description 
      t.integer :user_id
      t.integer :review_id 
      t.integer :genre_id 
      t.boolean :can_claim
      
      t.timestamps
    end
  end
end
