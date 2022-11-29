import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import { ConnectWallet } from "@thirdweb-dev/react";
import { HiOutlineExternalLink } from "react-icons/hi";
import toast, { Toaster } from "react-hot-toast";

import { useAddress, useContract } from "@thirdweb-dev/react";

export default function Hero() {
  const [count, setCount] = useState(1);
  const [claimedSupply, setClaimedSupply] = useState(null);
  const [totalSupply, setTotalSupply] = useState(null);
  const [loading, setLoading] = useState(true);
  const [priceInEth, setPriceInEth] = useState("");

  const address = useAddress();
  const { contract } = useContract(
    "0x5fd120e8f0121ed1ba5824b813340245164fddd0",
    "nft-drop"
  );

  useEffect(() => {
    if (!contract) return;

    const fetchNFTDropData = async () => {
      setLoading(true);
      const claimedNFT = await contract.totalClaimedSupply();
      const totalSupply = await contract.totalSupply();

      setClaimedSupply(claimedNFT);
      setTotalSupply(totalSupply);

      setLoading(false);
    };

    const fetchPrice = async () => {
      const claimeConditions = await contract.claimConditions.getActive();
      setPriceInEth(claimeConditions?.currencyMetadata.displayValue);
    };

    fetchNFTDropData();
    fetchPrice();
  }, [contract]);

  const mintNFT = async () => {
    if (!contract || !address) return;

    setLoading(true);
    const notify = toast.loading("...Minting", {
      style: {
        background: "#131313",
        color: "#22B573",
        fontFamily: "Poppins",
        fontWeight: "bolder",
        padding: "20px",
      },
    });

    await contract
      ?.claimTo(address, count)
      .then(async () => {
        toast("Welcome To The Community. You Successfully Minted", {
          duration: 5000,
          style: {
            background: "#22B573",
            color: "white",
            fontFamily: "Poppins",
            fontWeight: "bolder",
            padding: "20px",
          },
        });
      })
      .catch((err) => {
        console.log(err);

        toast("Ooops..something went wrong! Try again", {
          style: {
            background: "red",
            color: "white",
            fontFamily: "Poppins",
            fontWeight: "bolder",
            padding: "20px",
          },
        });
      })
      .finally(() => {
        setLoading(false);
        toast.dismiss(notify);
      });
  };

  return (
    <section className="w-full min-h-screen lg:px-20 px-5 py-2 bg-mainBG">
      <Navbar />
      <Toaster position="top-center" />

      <section className="lg:flex lg:flex-col lg:h-screen lg:justify-center w-full my-20">
        <div className="lg:flex lg:flex-row lg:justify-between lg:items-center w-full lg:gap-32">
          {/* Image */}
          <div className="lg:w-1/2 w-full flex lg:flex-row lg:justify-start justify-center">
            <Image
              src={
                "https://gateway.ipfscdn.io/ipfs/QmPA8x9KweqyLGLw1kmAibX59sqScbfqAh4KQkdJ9DZopK/0.gif"
              }
              alt={"Comrades Gif"}
              width={400}
              height={400}
              priority
            />
          </div>

          {/* Descriptions and mint button */}
          <div className="lg:w-1/2 w-full flex-col lg:items-end my-10 text-center lg:text-left">
            <h1 className="text-mainPink text-[2rem] font-bold italic">
              Become A Member Of Our Community
            </h1>

            <h3 className="text-white font-normal text-[1.2rem] my-10 leading-8">
              The population quota is 5500 Comrades. Mint atleast 1 (One) and at
              most 3 (Three) Comrade to become a member of the community.
            </h3>

            {/* MINT & CONNECT BUTTON */}
            <div className="flex flex-row w-full gap-10 justify-center lg:justify-start">
              {/* count */}
              {address ? (
                <div className="flex flex-row gap-10 w-1/2 justify-start">
                  <div className="flex bg-mainGrey w-[50px] h-[50px] justify-center items-center text-[1.2rem]">
                    {count}
                  </div>
                  <div className="flex flex-row gap-5">
                    <button
                      className={`w-[50px] h-[50px] bg-mainGreen ${
                        count === 1 ? "hover:bg-mainGreen" : `hover:bg-mainPink`
                      } justify-center items-center text-[1.5rem]`}
                      onClick={() => {
                        if (count === 1) return;
                        setCount(count - 1);
                      }}
                    >
                      -
                    </button>
                    <button
                      className={`w-[50px] h-[50px] bg-mainGreen ${
                        count === 3 ? `hover:bg-mainGreen` : `hover:bg-mainPink`
                      } justify-center items-center text-[1.5rem]`}
                      onClick={() => {
                        if (count === 3) return;
                        setCount(count + 1);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              ) : null}

              {/* Connect and Mint Button */}
              <div className="w-1/2">
                <ConnectWallet accentColor="#22B573" colorMode="dark" />
              </div>
            </div>

            {/* Mint Button */}
            {address ? (
              <button
                onClick={mintNFT}
                disabled={
                  !address ||
                  totalSupply?.toNumber() === claimedSupply?.toNumber() ||
                  loading
                }
                className="w-full bg-mainGreen rounded-sm mt-10 py-4 font-bold disabled:bg-gray-400"
              >
                {loading
                  ? "...loading"
                  : totalSupply?.toNumber() === claimedSupply?.toNumber()
                  ? "Sold Out"
                  : `Mint ${priceInEth * count} ETH`}
              </button>
            ) : null}
          </div>
        </div>

        {/* Statistics */}
        <div className="w-full lg:flex lg:flex-row lg:justify-between lg:items-center mt-20">
          {/* unclaimed comrades */}
          <div className="lg:w-1/3 w-full text-mainPink text-[1.1rem] font-semibold lg:flex lg:flex-row lg:justify-center text-center">
            {loading ? (
              <p className="text-mainGreen animate-bounce text-[1.2rem] font-semibold">
                ...Loading NFT Data
              </p>
            ) : (
              <p>
                {claimedSupply?.toString()} / {totalSupply?.toString()} claimed
                Comrades
              </p>
            )}
          </div>

          {/* contract address etherscan */}
          <div className="lg:w-1/3 w-full text-mainPink text-[1.1rem] font-semibold flex flex-row justify-center my-10 ">
            <p>Smart Contract</p>
            <span className="relative left-2">
              <Link
                target="_blank"
                href={
                  "https://etherscan.io/address/0x5fD120E8F0121ed1BA5824B813340245164fDdd0"
                }
              >
                <HiOutlineExternalLink color="#22B573" size={22} />
              </Link>
            </span>
          </div>

          {/* View all the comrades */}
          <div className="lg:w-1/3 w-full text-mainPink text-[1.1rem] font-semibold flex flex-row justify-center ">
            <p>View Comrades</p>
            <span className="relative left-2">
              <Link
                target="_blank"
                href={
                  "https://drive.google.com/drive/folders/1ctNt_NPOQNN8X2CuqUdfb12TLXOFEYqo"
                }
              >
                <HiOutlineExternalLink color="#22B573" size={22} />
              </Link>
            </span>
          </div>
        </div>
      </section>
    </section>
  );
}
