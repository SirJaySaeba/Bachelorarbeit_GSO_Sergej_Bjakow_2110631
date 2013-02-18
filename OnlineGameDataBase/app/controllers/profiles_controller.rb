class ProfilesController < ApplicationController
  
  before_filter :require_login
  
  def show
    #@profile = current_user.profile
    #@user = User.find(params[:username])

    @games = Game.all #search(params[:search])
    #@games = @user.games
    #@games = current_user.games
  end

  def new
    #@game = Game.new
    #@game = Game.find(params[:id])

  end
  
  def edit
    @profile = current_user.profile
  end
  
  def create
    @profile = current_user.profile.build(params[:profile])
    if @profile.save
      redirect_to @profile,
        notice: 'Profile updated!!!'
    else
      render action: "edit"
    end
  end
  
  def destroy
    @profile = current_user.profile
    @profile.destroy
    redirect_to root_url
  end
  
  
end
