function HeroBtn () {
    return (
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-primary text-white text-lg font-semibold rounded-lg hover:bg-primary-dark shadow-lg">
            Khám phá khóa học
          </button>
          <button className="px-8 py-4 border-2 border-primary text-primary text-lg font-semibold rounded-lg hover:bg-primary/10">
            Trở thành giảng viên
          </button>
        </div>
    )
}
export default HeroBtn;