import { useState } from "react";

function App() {
  //declared usestate for bg color
  const [color, setColor] = useState("pink");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      > <h1 className="text-center text-2xl  text-white">Hi! Deepshikha here</h1>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
       
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
           
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-md"
              style={{ backgroundColor: "red" ,}}
              onClick={()=>setColor("red")}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-md"
              style={{ backgroundColor: "pink" }}
              onClick={()=>setColor("pink")}

            >
              Pink
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-md"
              style={{ backgroundColor: "black" }}
              onClick={()=>setColor("black")}
            >
              Black
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-md"
              style={{ backgroundColor: "green" }}
              onClick={()=>setColor("green")}
            >
              Green
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
