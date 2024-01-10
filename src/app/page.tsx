"use client"

import gsap from "gsap"
import {MutableRefObject, useEffect, useRef} from "react"
import SplitType from "split-type"
import Spline from "@splinetool/react-spline";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    // @ts-ignore
    const split = new SplitType('#hero', { types: 'words, chars' })
    // @ts-ignore
    const desc = new SplitType('#desc', { types: 'words, chars' })

    gsap.from(split.chars, {
      opacity: 0,
      transform: 'translateY(6px)',
      stagger: {amount: 0.5},
      duration: 0.4,
      delay: 0.3
    })

    gsap.from(desc.chars, {
      opacity: 0,
      transform: 'translateY(6px)',
      stagger: {amount: 0.5},
      duration: 0.4,
      delay: 1
    })
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className='px-40 w-screen h-screen flex flex-col lg:gap-0 lg:flex-row items-center min-w-full'>
        {/* Left Donut */}
        <Spline style={{height: 'fit', width: 'fit'}} className='scale-[1.25]' scene="https://prod.spline.design/0lej-sFk3wliLQ0q/scene.splinecode" />

        {/* Right Hero Box */}
        <div className='lg:-translate-y-20 flex-grow flex flex-col items-center lg:items-start'>
          <h1 className='text-2xl md:text-8xl font-extrabold mix-blend-difference grad' id='hero'>Hello! I{"'"}m Kade</h1>
          <p className='mix-blend-difference min-w-full text-sm' id='desc'>Web Developer • Backend Developer • Embedded Systems Virtuoso • Passionate Cheat Developer</p>
        </div>
      </div>
    </main>
  )
}