function LoginBtn () {
    return (
          <div className="hidden md:flex space-x-4">
            <button className="px-4 py-2 text-primary border border-primary rounded-md hover:bg-primary/10">Đăng nhập</button>
            <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark">Đăng ký</button>
          </div>
    )
}
export default LoginBtn;