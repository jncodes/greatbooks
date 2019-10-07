class Api::ReviewsController < ApplicationController
    def create
        @review = Review.new(review_params)
        @review.user_id = current_user.id
        # @review.book_id = 
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 406
        end
    end

    def update
        @review = Review.find(params[:id])
        if @review.update(shelf_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 406
        end
    end
    
    def destroy
        @review = Review.find(params[:id])
    if @review.destroy
            render :show
        else
            render json: @review.errors.full_messages, status: 406
        end
    end

    private
    def review_params
        params.require(:review).permit(:rating, :review)
    end
end