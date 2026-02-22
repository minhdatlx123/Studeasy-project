import { Menu, X } from 'lucide-react'

interface MobileMenuBtnProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}
function MobileMenuBtn ({ isOpen, setIsOpen }: MobileMenuBtnProps) {
    return (
                  <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
    )
}
export default MobileMenuBtn;