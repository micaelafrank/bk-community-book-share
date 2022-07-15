class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :title 
      t.string :user_review 
      t.integer :book_id 
      t.string :user_id
      t.timestamps
    end
  end
end
