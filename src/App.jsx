import { useState } from "react";

function App() {
  const [wordCount, setWordCount] = useState(0);

  const handleKeyPress = (e) => {
    const text = e.target.value.trim(); // Remove leading and trailing spaces
    const wordCount = text === '' ? 0 : text.split(/\s+/).filter(Boolean).length;
    setWordCount(wordCount);
  };
  

  return (
    <>
      <div className="bg-gray-900 w-full h-screen flex flex-wrap place-content-center">
        <div className="border-3 bg-slate-200 rounded-lg">
          <div className="">
            <h1 className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font-serif font-bold text-white text-center text-2xl px-4 py-5 m-5 rounded-xl tracking-wide">
              Responsive Paragraph Word Counter
            </h1>
          </div>
          <div className="rounded-lg mx-3">
            <textarea
              className="border-2 hover:border-emerald-400 rounded-md m-2 p-2 "
              id="text"
              cols="80"
              rows="10"
              placeholder="Write your ideas..."
              onChange={handleKeyPress}
            ></textarea>
          </div>
          <div className="p-4">
            <p className="font-bold text-lg">Total word Count : {wordCount}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
