interface MobileMenuProps {
    isOpen : boolean;
}

function MobileMenu ({ isOpen }: MobileMenuProps) {
    return isOpen && (
        <div className="md:hidden bg-white boqrder-b">
          <div className="px-4 py-6 space-y-4">
            <a href="#" className="block text-gray-700 hover:text-primary">Khóa học</a>
            <a href="#" className="block text-gray-700 hover:text-primary">Giảng viên</a>
            <a href="#" className="block text-gray-700 hover:text-primary">Blog</a>
            <div className="pt-4 space-y-2">
              <button className="w-full py-2 text-primary border border-primary rounded-md">Đăng nhập</button>
              <button className="w-full py-2 bg-primary text-white rounded-md">Đăng ký</button>
            </div>
          </div>
        </div>
      )}
    
export default MobileMenu;