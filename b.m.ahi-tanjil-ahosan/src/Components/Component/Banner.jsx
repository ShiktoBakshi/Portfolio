import my from '../../assets/portfolio.jpg'
import TypingAnimation from './Typed_Name';

const Banner = () => {
    return (
        <div id="home" >
        <div className="hero min-h-screen">
        <div className="hero-content  flex-col lg:gap-30 lg:flex-row-reverse ">
          <img
            src={my}
            className=" max-w-3xs rounded-full  shadow-cyan-500 shadow-xl "
          />
          <div>
            <TypingAnimation></TypingAnimation>
            <p className="py-6 text-2xl  font-bold text-cyan-500 font-mon">
             A passionate Frontend Developer crafting <br /> modern web experiences
            </p>
            <div className='flex justify-center lg:justify-start'>
                <button  className="bg-linear-to-r from-[#01393e] to-[#1bfff4] h-10 w-24  font-gri rounded-full font-bold text-black text-center "><a href="#about">More</a></button>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Banner;