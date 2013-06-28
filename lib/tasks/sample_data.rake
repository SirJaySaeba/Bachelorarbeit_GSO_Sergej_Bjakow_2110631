namespace :db do
  desc "Fill database with sample data"
  task populate: :environment do
    admin = User.create!(name: "Sir Jay",
                         email: "sirjaysan@gmx.de",
                         password: "000",
                         password_confirmation: "000")
    admin.toggle!(:admin)
    
    user = User.create!(name: "Example User",
                 email: "example@railstutorial.org",
                 password: "000",
                 password_confirmation: "000")
    99.times do |n|
      name  = Faker::Name.name
      email = "example-#{n+1}@railstutorial.org"
      password  = "password"
      User.create!(name: name,
                   email: email,
                   password: password,
                   password_confirmation: password)
                   
    end
  end
end