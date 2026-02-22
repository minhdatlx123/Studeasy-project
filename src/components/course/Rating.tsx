interface RatingProps {
    price: number;
    rating: number;
}

function Rating ({ price, rating } : RatingProps) {
    return (
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xl font-bold text-primary">{price.toLocaleString()}đ</span>
          <div className="flex items-center">
            <span className="text-yellow-500">★</span>
            <span className="ml-1 text-sm font-medium">{rating}</span>
          </div>
        </div>
    )
}
export default Rating;