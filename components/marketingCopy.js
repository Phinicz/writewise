import { FaCheckCircle } from "react-icons/fa";

export default function MarketingCopy(props) {
  const { displayedText, session, signIn } = props;
  return (
    <marketingcopyinseconds className=" text-white md:flex md:items-center lg:p-20">
      <div className="p-10  md:flex-1 lg:flex-1 xl:flex-1 2xl:flex1 max-w-xl">
        <h1 className="text-7xl mb-10 ">Marketing copy in seconds</h1>
        <div className="text-gray-300 text-2xl mb-20 leading-10 h-300px md:h-32 lg:h-32  ">
          {displayedText}{" "}
          <span className="w-1 h-6 bg-gray-300 animate-pulse_fast ">..</span>
          {!session &&
            displayedText ===
              "we are helping people automating their social media scalability by automating the post-creation streamline. your social media manager assistant is a click away check this live demo and experience the future!" && (
              <ul className="flex justify-around mt-6 pb-10">
                <li>
                  <a
                    onClick={() => signIn()}
                    href="#"
                    className="text-pink-500 rounded-lg p-2 text-base border-solid border-2 px-8 border-pink-500 hover:border-white hover:text-white md:px-4 lg:px-6 xl:px-8"
                  >
                    FREE TRIAL
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => signIn("google")}
                    href="#"
                    className="bg-myBlue text-white rounded-lg p-2 text-base px-5 hover:bg-white hover:text-myBlue md:px-2 lg:px-4 xl:px-6"
                  >
                    SING UP WITH GOOGLE
                  </a>
                </li>
              </ul>
            )}
        </div>
      </div>
      <div className="px-12 mt-5 pb-10 md:flex-3 lg:flex-3 xl:flex-3 2xl:flex-3">
        <ul>
          <li className="flex items-center text-2xl mb-5 shadow-lg bg-myGray rounded-xl p-5">
            <FaCheckCircle className="mr-5 text-3xl" />
            <p>GPT integration</p>
          </li>
          <li className="flex items-center text-2xl mb-5 shadow-lg bg-myGray rounded-xl p-5">
            <FaCheckCircle className="mr-5 text-3xl" />
            <p>20+ Buisness Catagories</p>
          </li>
          <li className="flex items-center text-2xl mb-5 shadow-lg bg-myGray rounded-xl p-5 ">
            <FaCheckCircle className="mr-5 text-3xl" />
            <p>real-world impact</p>
          </li>
        </ul>
      </div>
    </marketingcopyinseconds>
  );
}
