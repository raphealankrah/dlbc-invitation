"use client";

import React, { useState, useEffect } from "react";
// import { QRCodeSVG } from "qrcode.react";
// import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import NextSundayDate from "./NextSundayDate";
import Image from "next/image";

const encouragements = [
  "Hebrews 10:25 - Not giving up meeting together, as some are in the habit of doing, but encouraging one another...",
  "Psalm 122:1 - I was glad when they said unto me, Let us go into the house of the Lord.",
  "Matthew 18:20 - For where two or three gather in my name, there am I with them.",
  "Acts 2:42 – They devoted themselves to the apostles&apos; teaching and to fellowship, to the breaking of bread and to prayer.",
  "1 Corinthians 12:27 – Now you are the body of Christ, and each one of you is a part of it.",
  "Romans 12:5 – So in Christ we, though many, form one body, and each member belongs to all the others.",
  "1 Thessalonians 5:11 – Therefore encourage one another and build each other up, just as in fact you are doing.",
  "Galatians 6:2 – Carry each other&apos;s burdens, and in this way you will fulfill the law of Christ.",
  "Ecclesiastes 4:9–10 – Two are better than one, because they have a good return for their labor: If either of them falls down, one can help the other up...",
];

const RandomVerse: React.FC = () => {
  const [verse, setVerse] = useState("");

  useEffect(() => {
    const random =
      encouragements[Math.floor(Math.random() * encouragements.length)];
    setVerse(random);
  }, []);

  return (
    <div className="p-4 rounded-xl mt-4 text-center">
      <p className="main-ponnala mt-2 main-color whitespace-pre-line sm:whitespace-normal text-xs sm:text-sm leading-tight">
        {verse}
      </p>
    </div>
  );
};

const App: React.FC = () => {
  const locationUrl =
    "https://www.google.com/maps/place//data=!4m2!3m1!1s0x4780158aeb084b07:0xe7162b4f59991e08?sa=X&ved=1t:8290&ictx=111";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio> */}

      <div className="max-w-xl w-full bg-church-gradient p-8 rounded-xl shadow-lg">
        {/* <h1 className="text-center text-7xl font-extrabold mb-4 bg-church-gradient-alt text-gradient">
          INVITATION
        </h1> */}
        <div className="flex justify-center">
          <Image
            src="/INVITATION.svg"
            alt="Invitation"
            width={384}
            height={90}
            className="object-contain"
          />
        </div>
        <div className="flex justify-center">
          {/* <Image
            src="/Rectangle.svg"
            alt="Video Preview"
            width={384}
            height={400}
            className="object-contain mt-5"
          /> */}

          <video
            src="/Invite.mp4"
            autoPlay
            loop
            playsInline
            width={384}
            height={400}
            muted
            className="rounded-xl shadow-lg mt-5 w-[327px] h-[404px] object-cover border-0 outline-none"
            style={{
              border: 'none',
              outline: 'none',
              borderWidth: '0',
              borderStyle: 'none',
              borderColor: 'transparent'
            }}
          />
        </div>

        <div>
          <RandomVerse />
        </div>

        <div className="text-center font-playfair">
          <h1
            className="text-2xl font-black main-playfair main-color tracking-tighter mb-2"
          // style={{ fontWeight: "300" }}
          >
            YOU ARE INVITED!
          </h1>
          <p className="text-xs sm:whitespace-normal text-white main-ponnala leading-4 mb-1">
            Don&apos;t miss our impactful Sunday service.
          </p>
          <p className="main-playfair font-bold text-2xl text-white mt-[-9] whitespace-nowrap">
            <NextSundayDate /> | 10:00AM
          </p>
          {/* <p>
            <strong>Time:</strong> 10:00 AM
          </p> */}
          {/* <p className="main-color text-sm sm:text-xs mt-2">
            <strong>Location:</strong> Deeper Life Bible Church - Parma Branch
          </p> */}
        </div>
        {/* <div className="mt-4 flex gap-4 justify-center">
          <a
            href="https://facebook.com/yourchurch"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} className="text-blue-600" />
          </a>
          <a
            href="https://instagram.com/yourchurch"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} className="text-pink-500" />
          </a>
          <a
            href="https://youtube.com/yourchurch"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={24} className="text-red-600" />
          </a>
        </div> */}

        <div className="mt-8 text-center">
          {/* <p>Scan for directions:</p>
          <QRCodeSVG value={locationUrl} size={128} className="mx-auto" /> */}
          <div className="mt-[-16]">
            <a
              href={locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-church-gradient-alt text-white font-semibold rounded-full hover: transition"
            >
              Get Directions
            </a>
            <div style={{ position: "relative", width: "100%", height: "50px" }} className="mb-7">
              <Image
                src="/dlbc.png"
                alt="church-logo"
                fill
                className="object-contain mt-5"
              />
            </div>
            <p className="text-xs main-color mt-4 leading-3">
              <strong>DEEPER LIFE BIBLE CHURCH</strong> - PARMA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
