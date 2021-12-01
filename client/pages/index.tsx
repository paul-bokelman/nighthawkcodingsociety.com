import React, { useState } from "react";
import type { NextPage } from "next";
import axios from "axios";

interface Greeting {
  id: number;
  content: string;
}

const Home: NextPage = () => {
  const [gPy, setGPY] = useState<Greeting | null>(null);
  const [gJava, setGJAVA] = useState<Greeting | null>(null);

  const greetPython = async () => {
    const response = await axios.get(
      "http://127.0.0.1:5000/greeting?name=USER_NAME"
    );
    console.log(response.data);
    setGPY(response.data);
  };

  const greetJava = async () => {
    const response = await axios.get(
      "http://localhost:8080/greeting?name=USER_NAME"
    );
    console.log(response.data);
    setGJAVA(response.data);
  };

  return (
    <div className="p-6">
      <div>
        <button
          className="px-2 py-1 bg-green-100 text-green-600 rounded-md font-bold"
          onClick={async () => await greetPython()}
        >
          greet python
        </button>
        {gPy && (
          <div className="mt-2">
            <p>
              <span className="font-bold">id:</span>{" "}
              <code className="">{gPy.id}</code>
            </p>
            <p>
              <span className="font-bold">content:</span>{" "}
              <code className="">{gPy.content}</code>
            </p>
          </div>
        )}
      </div>

      <div className="mt-4">
        <button
          className="px-2 py-1 bg-yellow-100 text-yellow-600 rounded-md font-bold"
          onClick={async () => await greetJava()}
        >
          greet java
        </button>
        {gJava && (
          <div className="mt-2">
            <p>
              <span className="font-bold">id:</span>{" "}
              <code className="">{gJava.id}</code>
            </p>
            <p>
              <span className="font-bold">content:</span>{" "}
              <code className="">{gJava.content}</code>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
