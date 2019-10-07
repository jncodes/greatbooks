class Api::UsersController < ApplicationController
    
    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            # Shelf::default_shelves(@user)
            # create 3 shelves in shelves table assigned to each new user
            render :show
        else
            render json: @user.errors.full_messages, status: 400
        end
    end
    
    private

    def user_params
        params.require(:user).permit(:name, :email, :password)
    end
    
end