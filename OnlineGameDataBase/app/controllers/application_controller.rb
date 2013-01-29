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
  

  
  #def set_locale
   # I18n.locale = params[:locale]
  #end
  
  #def default_url_options(options={})
  #  { locale: I18.locale}
  #end
  
  helper_method :user_signed_in?
  helper_method :current_user
  
end
