class ApplicationController < ActionController::Base
  protect_from_forgery
  
  
  
  private
  
  def current_user
    if session[:user_id]
      @current_user ||= User.find(session[:user_id])

    end
  end
  
  def user_signed_in?
    current_user.present?
  end
  
    
  def require_login
    unless user_signed_in?
      #store_location
      redirect_to login_path,
        alert: "Erst anmelden bitte!"
    end
  end
 ########## 
  def store_location
    session[:return_to] = request.fullpath
  end

  def clear_stored_location
    session[:return_to] = nil
  end
  
  def redirect_to_target_or_default(default)
    redirect_to(session[:return_to] || default)
    session[:return_to] = nil
  end
 ############ 
  helper_method :user_signed_in?
  helper_method :current_user
  
end
