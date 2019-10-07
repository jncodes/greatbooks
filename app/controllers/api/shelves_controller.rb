class Api::ShelvesController < ApplicationController
    def create
        @shelf = Shelf.new(shelf_params)
        @shelf.user_id = current_user.id
        if @shelf.save
            render :show
        else
            render json: @shelf.errors.full_messages, status: 406
        end
    end

    def update
        @shelf = Shelf.find(params[:id])
        if @shelf.update(shelf_params)
            render :show
        else
            render json: @shelf.errors.full_messages, status: 406
        end
    end
    
    def destroy
        @shelf = Shelf.find(params[:id])
        if @shelf.exclusive = true
            render json: ['Cannot remove default table'], status: 403
        elsif @shelf.destroy
            render :show
        else
            render json: @shelf.errors.full_messages, status: 406
        end
    end

    private
    def shelf_params
        params.require(:shelf).permit(:name)
    end
end