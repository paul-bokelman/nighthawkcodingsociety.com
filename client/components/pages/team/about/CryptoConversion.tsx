import React, { useEffect, useState } from "react";
import axios from "axios";
import { CgSpinner } from "react-icons/cg";

export const CryptoConversion = (): JSX.Element => {
  const [data, setData] = useState<{ eth: string; matic: string }>({
    eth: "",
    matic: "",
  });

  const getData = async () => {
    const eth = await axios.get(
      "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD"
    );
    const matic = await axios.get(
      "https://min-api.cryptocompare.com/data/price?fsym=MATIC&tsyms=USD"
    );

    setData({ eth: eth.data.USD, matic: matic.data.USD });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data.eth && data.matic ? (
        <div className="flex flex-row justify-between text-xs w-full md:w-1/2 lg:w-1/3 px-4 py-2 bg-gray-500/5 rounded-xl">
          <div>
            <span className="text-[#81A8F8]">1 ETH</span> ={" "}
            <span className="text-green-500">${data.eth}</span>
          </div>
          <div>
            <span className="text-[#8247E5]">1 MATIC</span> ={" "}
            <span className="text-green-500">${data.matic}</span>
          </div>
        </div>
      ) : (
        <div className="flex flex-row justify-center w-full md:w-1/2 lg:w-1/3 px-4 py-2 bg-gray-500/5 rounded-xl">
          <CgSpinner className="animate-spin" />
        </div>
      )}
    </div>
  );
};
