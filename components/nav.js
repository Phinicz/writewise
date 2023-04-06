import Image from "next/image";
import { useState } from "react";
export default function Nav(props) {
  const { session, setProfileClicked, profileClicked } = props;
  // const { myProfileClicked, setMyProfileClicked } = useState(false);
  return (
    <>
      <navbar className=" flex items-center p-10">
        <div className="w-screen flex justify-between text-white text-4xl">
          <h1>WriteWise</h1>
          {/* <FiChevronDown className="text-white animate-pulse_once hover:animate-pulse hover:cursor-pointer" /> */}
          {session ? (
            <Image
              src={session?.user?.image}
              alt="profile picture"
              width={40}
              height={40}
              priority
              className={`rounded-full hover:cursor-pointer `}
              onClick={() => {
                setProfileClicked(!profileClicked);
                // setMyProfileClicked(true);
                // setTimeout(setMyProfileClicked(false), 2000);
              }}
            />
          ) : (
            ""
          )}
        </div>
      </navbar>
      {profileClicked ? (
        <div className=" bg-gray-200/80 rounded-xl absolute right-3 top-24 p-2">
          <button
            onClick={() => signOut()}
            className="bg-white rounded-xl px-2 py-1 text-sm "
          >
            sign out
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
