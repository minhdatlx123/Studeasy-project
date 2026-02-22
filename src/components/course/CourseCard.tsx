import DetailBtn from "./Detail-btn";
import Rating from "./Rating";


interface CourseProps {
  title: string;
  instructor: string;
  image: string;
  price: number;
  rating: number;
}

function CourseCard ({ title, instructor, image, price, rating }: CourseProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 line-clamp-2">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{instructor}</p>
        <Rating price={price} rating={rating} />
        <DetailBtn />
      </div>
    </div>
  );
}
export default CourseCard;