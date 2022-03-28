import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="text-center bg-white pb-10">
      <div className="w-80 mx-auto">
        <Image
          src={"/undraw_home_cinema_l7yl.png"}
          width="200"
          height="150"
          layout="responsive"
        />
        <h1 className="text-2xl text-gray-700 uppercase font-bold ">
          Welcome to watchme
        </h1>
        <p className="text-gray-500">
          Produce FILM feature, Television and GAME
        </p>
        <Link href="/contact">
          <button className="bg-gray-500 text-white py-3 px-6 rounded text-sm mt-4">
            Contact us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
