'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Coordinates {
  x: string;
  y: string;
}

export default function Home() {
  const [image, setImage] = useState(false);
  const [coord, setCoords] = useState<Coordinates | null>(null);
  const [response, setResponse] = useState('No');

  const handleNoBtn = () => {
    const x = Math.random() * 60;
    const y = Math.random() * 60;

    setCoords({ x: `${x}%`, y: `${y}%` });

    const phrases = [
      "wrong button xx",
      "are you sure?",
      "nah u buggin twin 🫣?",
      "poo bum fart 💔",
      "OOPIE POOPIE🥺👉👈",
      "can't catch me lmao"
    ]

    const randomIndex = Math.floor(Math.random() * phrases.length);
    setResponse(phrases[randomIndex]);
  }

  const handleYesBtn = () => {
    setImage(!image);
  }

  return (
    <div className="container">
      <section>
        <div>
          <p>will you be my valentine beb xxxxxxxx?</p>
        </div>
        <div className="img-container">
          {image ? (
            <Image src="/heppi.gif" alt="cat spinning with sparkles" width={270} height={200} className="cat" />

          ) : (
            <Image src="/joah-cut.mp4" alt="two animals asking each other to be their valentine gif" width={340} height={200} priority />
          )}
        </div>
        <div className="button-section">
          <Link href='/success'>
            <button
              className="yes-button button-base button-green"
              onMouseOver={handleYesBtn} onMouseOut={handleYesBtn}
            >
              Yes
            </button>
          </Link>
          <button className='no-button button-base button-red' style={coord ? { position: 'absolute', top: coord.x, right: coord.y } : undefined}
            onClick={handleNoBtn} onMouseOver={handleNoBtn}
          >{response}</button>
        </div>
      </section>
    </div >
  );
}
