class UsersController < ApplicationController

  before_filter :require_login, only: [:edit, :update, :destroy]
  before_filter :correct_user,   only: [:edit, :update]
  before_filter :admin_user,     only: [:destroy]
  
  def show
    @user = User.find(params[:id])
    @reviews = @user.reviews.paginate(page: params[:page])
    
    #if user_signed_in?
      #@review = current_user.reviews.build
      #@feed_items = current_user.feed.paginate(page: params[:page])
    #end
    
  end

  def new
    @user = User.new
  end
  
  def index
    @users = User.paginate(page: params[:page], :per_page => 10)
  end
  
  def create
    @user = User.new(params[:user])
    if @user.save
      sign_in @user
      flash[:success] = "Welcome to the Sample App!"
      redirect_to @user
    else
      render 'new'
    end
  end
  
  def edit
    @user = User.find(params[:id])
  end
  
  def update
    @user = User.find(params[:id])
    if @user.update_attributes(params[:user])
      flash[:success] = "Profile updated"
      sign_in @user
      redirect_to @user
    else
      render 'edit'
    end
  end
  
  def destroy
    User.find(params[:id]).destroy
    flash[:success] = "User destroyed."
    redirect_to users_url
  end
  
  private
 
    def correct_user
      @user = User.find(params[:id])
      if !(current_user?(@user))
        redirect_to(root_path)
        flash[:error] = "That ain't your account!!"
      end
    end
    
end
