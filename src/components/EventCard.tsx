"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Pixelify_Sans } from 'next/font/google';

const pixelifySans = Pixelify_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const images = [
    "https://images.pexels.com/photos/14920849/pexels-photo-14920849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/30283283/pexels-photo-30283283/free-photo-of-dramatic-silhouette-of-ruins-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/30296391/pexels-photo-30296391/free-photo-of-small-bird-perched-on-dry-branches-at-dawn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/30175895/pexels-photo-30175895/free-photo-of-shadow-play-on-urban-building-facade.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/30278759/pexels-photo-30278759/free-photo-of-dramatic-lightning-storm-over-cityscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

]

function EventCard() {
    const [currentIndex, setCurrentIndex] = useState(2)

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }

    return (
        <div className="h-[300px] md:h-[400px] bg-black p-8">
            <div className="mx-auto max-w-6xl">

                <h1
                    className={`${pixelifySans.className} font-mono text-4xl md:text-6xl font-bold tracking-wider mb-4 bg-gradient-to-b from-white via-pink-300 to-pink-400 text-center text-transparent bg-clip-text`}
                >
                    OUR EVENTS
                </h1>

                <h2 className={` ${pixelifySans.className} text-white text-center text-lg md:text-xl mb-12`}>
                    Showcasing the Milestones of Innovation and Creativity
                </h2>


                <div className="relative h-[300px] md:h-[400px] mb-8">
                    {images.map((src, index) => {
                        const position = index - currentIndex
                        const zIndex = Math.abs(position) === 2 ? 1 : Math.abs(position) === 1 ? 2 : position === 0 ? 3 : 0
                        const opacity = Math.abs(position) === 2 ? 0.3 : Math.abs(position) === 1 ? 0.7 : 1

                        return (
                            <div
                                key={index}
                                className="absolute  items-center top-0 left-0 w-full h-full transition-all duration-500 ease-in-out"
                                style={{
                                    transform: `
                      translateX(${position * 30}%) 
                      scale(${1 - Math.abs(position) * 0.2})
                    `,
                                    zIndex,
                                    opacity,
                                }}
                            >
                                <div className="relative mr-auto ml-auto  max-w-screen-md h-full overflow-hidden rounded-3xl">
                                    <Image
                                        src={src}
                                        alt={`Event image ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        )
                    })}

                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-colors"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-colors"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                </div>

                <div className="flex justify-center gap-2 mb-8">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-purple-500 w-4" : "bg-gray-400 hover:bg-gray-300"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <h3 className={` ${pixelifySans.className} text-white text-center text-xl md:text-2xl font-medium`}>
                    Unveiling GDG GTBIT&apos;s Eventful Journey: Celebrating Ideas, Innovation, and Achievements
                </h3>
            </div>
        </div>
    )
}

export default EventCard