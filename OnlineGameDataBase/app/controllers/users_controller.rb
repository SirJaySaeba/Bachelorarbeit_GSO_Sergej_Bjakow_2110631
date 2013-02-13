class UsersController < ApplicationController
  
  def new
    @user = User.new
  end
  
  def create
    @user = User.new(params[:user])
    if @user.save
      redirect_to startscreen_path,
                  notice: "Benutzer wurde angelegt"
    else
      render "new"
    end
  end
  
  def show
    @user = User.find(params[:id])

  end


  
end
