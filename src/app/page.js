"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GlobeDemo } from "./components/globe/globe";
import { TypewriterEffect } from "./components/ui/typewriter-effect";
import { AuthProvider } from "./context/authContext";

export default function Home() {
  const router = useRouter();

  const words = [
    { text: "Where" },
    { text: "every" },
    { text: "blood" },
    { text: "meet" },
    { text: "its" },
    {
      text: "Match.",
      className: "text-blue-500",
    },
  ];

  const handleGetStarted = () => {
    router.push("/login");
  };

  return (
    <AuthProvider>
      <div className="relative flex-col h-screen pt-10 md:pt-14 bg-gradient-to-r from-cyan-200 to-white">
        <button
          href="/login"
          onClick={handleGetStarted}
          className="absolute top-4 right-4 shadow-[0_0_0_3px_#06b6d4_inset] px-6 py-2 bg-transparent border border-turquoise-500 text-turquoise-500 rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
        >
          Get Started
        </button>

        <h1 className="relative mx-auto w-2/3 z-10 text-lg md:text-5xl text-center font-sans font-bold text-turquoise-700">
          Welcome To the world
          <TypewriterEffect
            words={words}
            className="text-3xl md:text-3xl text-turquoise-500"
          />
        </h1>
        <div className="flex ">
          <h2 className="w-4/5 flex items-center text-2xl font-bold font-sans px-6 ml-6">
            The platform addresses the critical issue of blood shortages by
            creating a seamless connection between blood donors and those in
            need. It simplifies the donation process, making it more accessible
            and efficient. The platform also leverages predictive analytics to
            anticipate blood demand, ensuring timely donations and reducing
            shortages. Additionally, it fosters community engagement by
            encouraging users to participate in blood donation drives and share
            the cause, thus broadening the donor base and increasing overall
            donations. This comprehensive approach not only saves lives but also
            improves the efficiency of blood collection and distribution.
          </h2>
          <GlobeDemo />
        </div>
      </div>
    </AuthProvider>
  );
}
