
import ProfilePicture from "../../public/me.jpeg";

const HeroSection = () => (
    <div className="hero mt-5 mb-5">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img
                src={ProfilePicture.src}
                alt="Author's profile picture"
                className="max-w-sm rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl" />
            <div className="text-center">
                <h1 className="text-5xl">Chandan Bangalore Shankar Denanath</h1>
                <p className="py-6">Yep, that&aposs a huge name</p>
            </div>
        </div>
    </div>
);

export default HeroSection;
