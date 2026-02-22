import HeadLine from "./Headline";
import HeroBtn from "./Hero-btn";

function HeroSection () {
    return (
        <section className="relative bg-gradient-to-br from-primary/10 via-white to-ivory py-20 md:py-32 overflow-hidden">
            <HeadLine/>
            <HeroBtn />
        </section>
    )
}
export default HeroSection;