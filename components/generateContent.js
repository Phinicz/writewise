import { useState } from "react";
import { amazon } from "../pages/env";
import { TiClipboard } from "react-icons/ti";
import Image from "next/image";
export default function GenerateContent(props) {
  const {
    generateText,
    myText,
    setGenerateClicked,
    setClipboardClicked,
    imgURL,
    generateClicked,
    clipboardClicked,
  } = props;

  const [prompt, setPrompt] = useState();
  return (
    <div className="border-solid border-2 rounded-2xl p-5 shadow-lg">
      <div className="flex justify-between items-center mb-5 border-b-2 pb-2">
        <textarea
          onChange={(e) => {
            e.target.style.height = "auto";
            e.target.scrollHeight > 350
              ? (e.target.style.height = "350px")
              : (e.target.style.height = e.target.scrollHeight + "px");
            setPrompt(e.target.value);
          }}
          className="grow min-h-100px border-none outline-none resize-none p-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 "
          placeholder={`Generate an Ad copy for this product in English and Spanish here's the product link: amazon.com/..`}
        ></textarea>
        <button
          onClick={() => {
            generateText(prompt);
            setGenerateClicked(true);
          }}
          className="min-w-fit text-sm text-white bg-gradient-to-bl from-lime-400 to-green-600 rounded-xl p-3 ml-5"
        >
          Generate
        </button>
      </div>
      <div className="relative">
        {myText === "Click Generate to get your post..." ? (
          ""
        ) : (
          <div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(myText);
                setClipboardClicked(true);
                setTimeout(() => setClipboardClicked(false), 2000);
              }}
              className="text-3xl right-0 top-0 absolute text-neutral-600 hover:text-neutral-900 mb-2"
            >
              <TiClipboard />
            </button>
            {clipboardClicked ? (
              <div className="bg-black/80 text-white text-xs inline-block rounded-lg p-1 absolute top-1 right-10">
                copied
              </div>
            ) : (
              ""
            )}
          </div>
        )}
        <div
          className={` text-sm ${
            myText === "Click Generate to get your post..."
              ? "text-gray-500"
              : "text-black"
          }`}
        >
          {myText.split("\n").map((line, index) => {
            return (
              <div key={index}>
                <p>{line}</p>
                <br />
              </div>
            );
          })}
          {imgURL ? (
            <Image
              src={imgURL}
              alt="failed to load image"
              width={300}
              height={300}
              priority
              className="mx-auto mt-10"
            />
          ) : generateClicked ? (
            <div className="w-[250px] h-[250x] bg-gray-400 animate-pulse"></div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
