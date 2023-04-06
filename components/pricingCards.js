import { IoMdRemoveCircleOutline } from "react-icons/io";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FcSupport } from "react-icons/fc";

export default function PricingCards() {
  return (
    <div className="Pricing-Cards p-10 md:mt-10 lg:mt-20 md:flex lg:flex justify-center items-center gap-4 lg:h-600px md:h-600px lg:p-0 ">
      <div className="Free-Card p-10 border-2 rounded-2xl shadow-lg mb-10  h-full">
        <h1 className="text-2xl font-bold text-center mb-10">Basic</h1>
        <h1 className="text-4xl font-bold text-center">0$</h1>
        <p className="text-center text-gray-500 py-5 mb-10">
          No Credit card required
        </p>
        <div className="flex items-center justify-center">
          <button className="text-pink-700 text-lg border-2 border-pink-700 p-2 px-10 rounded-3xl mb-10 hover:bg-pink-700 hover:text-white">
            Sign-up now -{">"}
          </button>
        </div>
        <ul className="text-lg leading-10">
          <li className="flex items-center">
            <IoMdAddCircleOutline className="mr-2" /> 500 words per month
          </li>
          <li className="flex items-center">
            <IoMdAddCircleOutline className="mr-2" /> 5 Image
          </li>
          <li className="flex items-center text-gray-500">
            <IoMdRemoveCircleOutline className="mr-2" />
            Unlimited Video
          </li>
          <li className="flex items-center text-gray-500">
            <IoMdRemoveCircleOutline className="mr-2" />
            viral content optimisation (VCP)
          </li>
        </ul>
      </div>
      <div className="Pro-Card p-10 border-2 border-pink-500 rounded-2xl shadow-lg shadow-purple-300 mb-10 h-full">
        <div className="relative">
          <h1 className="text-2xl font-bold text-center mb-10">Pro</h1>
          <h1 className="text-xs text-center mb-10 absolute right-0 top-0 text-white bg-black p-1 px-4 rounded-3xl">
            Popular
          </h1>
        </div>
        <h1 className="text-4xl font-bold text-center">15$</h1>
        <p className="text-center text-gray-500 pt-5 mb-10 max-w-200px mx-auto">
          20k words that's equvilent to a 305 page book !
        </p>
        <div className="flex items-center justify-center">
          <button className="text-white bg-pink-700 text-lg  p-2 px-10 rounded-3xl mb-10 hover:text-pink-700 hover:border-2 hover:border-pink-700 hover:bg-white">
            Sign-up now -{">"}
          </button>
        </div>
        <ul className="text-lg leading-10">
          <li className="flex items-center">
            <IoMdAddCircleOutline className="mr-2" /> 20,000 words per month
          </li>
          <li className="flex items-center">
            <IoMdAddCircleOutline className="mr-2" /> unlimited Image{" "}
          </li>
          <li className="flex items-center text-gray-500">
            <IoMdRemoveCircleOutline className="mr-2" />
            Unlimited Video
          </li>
          <li className="flex items-center text-gray-500">
            <IoMdRemoveCircleOutline className="mr-2" />
            viral content optimisation (VCP)
          </li>
        </ul>
      </div>
      <div className="Business-Card p-10 border-2 rounded-2xl shadow-lg mb-10 h-full">
        <h1 className="text-2xl font-bold text-center mb-10">Business</h1>
        <h1 className="text-4xl font-bold text-center">Contact Us</h1>
        <p className="text-center text-gray-500 py-5 mb-10">
          Boost up your business
        </p>
        <div className="flex items-center justify-center">
          <button className="text-pink-700 text-lg border-2 border-pink-700 p-2 px-10 rounded-3xl mb-10 hover:bg-pink-700 hover:text-white">
            Sign-up now -{">"}
          </button>
        </div>
        <ul className="text-lg leading-10">
          <li className="flex items-center">
            <IoMdAddCircleOutline className="mr-2" /> Unilimited words
          </li>
          <li className="flex items-center">
            <IoMdAddCircleOutline className="mr-2" /> Unlimited Image
          </li>
          <li className="flex items-center">
            <IoMdAddCircleOutline className="mr-2" /> Unlimited Video
          </li>
          <li className="flex items-center">
            <IoMdAddCircleOutline className="mr-2" /> viral content optimisation
            (VCP)
          </li>
          <li className="flex items-center">
            <IoMdAddCircleOutline className="mr-2" /> 24/7 support
            <FcSupport className="ml-2" />
          </li>
        </ul>
      </div>
    </div>
  );
}
