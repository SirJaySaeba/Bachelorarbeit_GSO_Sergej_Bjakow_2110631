# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130409140804) do

  create_table "gamerelations", :force => true do |t|
    t.integer  "followed_id"
    t.integer  "follower_id"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  add_index "gamerelations", ["followed_id", "follower_id"], :name => "index_gamerelations_on_followed_id_and_follower_id", :unique => true
  add_index "gamerelations", ["followed_id"], :name => "index_gamerelations_on_followed_id"
  add_index "gamerelations", ["follower_id"], :name => "index_gamerelations_on_follower_id"

  create_table "games", :force => true do |t|
    t.string   "title"
    t.string   "developer"
    t.date     "release"
    t.string   "system"
    t.datetime "created_at",         :null => false
    t.datetime "updated_at",         :null => false
    t.string   "title_org"
    t.string   "subtitle"
    t.string   "subtitle_org"
    t.integer  "usk"
    t.string   "medium"
    t.boolean  "indizierung"
    t.string   "publisher"
    t.string   "cover_file_name"
    t.string   "cover_content_type"
    t.integer  "cover_file_size"
    t.datetime "cover_updated_at"
    t.string   "genre"
  end

  create_table "ratings", :force => true do |t|
    t.integer  "game_id"
    t.integer  "user_id"
    t.integer  "value"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "reviews", :force => true do |t|
    t.text     "content"
    t.integer  "user_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
    t.integer  "game_id"
  end

  add_index "reviews", ["game_id"], :name => "index_reviews_on_game_id"
  add_index "reviews", ["user_id", "created_at"], :name => "index_reviews_on_user_id_and_created_at"

  create_table "users", :force => true do |t|
    t.string   "name"
    t.string   "email"
    t.datetime "created_at",                         :null => false
    t.datetime "updated_at",                         :null => false
    t.string   "password_digest"
    t.string   "remember_token"
    t.boolean  "admin",           :default => false
  end

  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["remember_token"], :name => "index_users_on_remember_token"

end
