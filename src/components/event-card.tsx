'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Pixelify_Sans } from 'next/font/google';

const pixelifySans = Pixelify_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const images = [
  'https://images.pexels.com/photos/14920849/pexels-photo-14920849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/30283283/pexels-photo-30283283/free-photo-of-dramatic-silhouette-of-ruins-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/30296391/pexels-photo-30296391/free-photo-of-small-bird-perched-on-dry-branches-at-dawn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/30175895/pexels-photo-30175895/free-photo-of-shadow-play-on-urban-building-facade.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/30278759/pexels-photo-30278759/free-photo-of-dramatic-lightning-storm-over-cityscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

function EventCard() {
  const [currentIndex, setCurrentIndex] = useState(2);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen overflow-hidden bg-background p-8">
      <div className="mx-auto max-w-6xl">
        <h1
          className={`${pixelifySans.className} mb-4 text-center font-mono text-4xl font-bold tracking-wider text-primary md:text-6xl`}
        >
          OUR EVENTS
        </h1>

        <h2 className={`${pixelifySans.className} text-2lg mb-12 text-center text-muted-foreground md:text-3xl`}>
          Showcasing the Milestones of Innovation and Creativity
        </h2>

        <div className="relative mb-8 h-[300px] md:h-[400px]">
          {images.map((src, index) => {
            const position = index - currentIndex;
            const getZIndex = () => {
              if (Math.abs(position) === 2) return 1;
              if (Math.abs(position) === 1) return 2;
              return position === 0 ? 3 : 0;
            };
            const getOpacity = () => {
              if (Math.abs(position) === 2) return 0.3;
              return Math.abs(position) === 1 ? 0.7 : 1;
            };

            return (
              <div
                key={src}
                className="gdg-transition absolute left-0 top-0 h-full w-full items-center duration-500 ease-in-out"
                style={{
                  transform: `
                      translateX(${position * 30}%) 
                      scale(${1 - Math.abs(position) * 0.2})
                    `,
                  zIndex: getZIndex(),
                  opacity: getOpacity(),
                }}
              >
                <div className="relative ml-auto mr-auto h-full max-w-screen-md overflow-hidden rounded-3xl">
                  <Image src={src} alt={`Event image ${index + 1}`} fill className="object-cover" />
                </div>
              </div>
            );
          })}

          <button
            onClick={prevSlide}
            className="gdg-transition absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-accent p-2 backdrop-blur-sm hover:bg-accent/80"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-accent-foreground" />
          </button>
          <button
            onClick={nextSlide}
            className="gdg-transition absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-accent p-2 backdrop-blur-sm hover:bg-accent/80"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-accent-foreground" />
          </button>
        </div>

        <div className="mb-8 flex justify-center gap-2">
          {images.map((url, index) => (
            <button
              key={url}
              onClick={() => setCurrentIndex(index)}
              className={`gdg-transition h-2 w-2 rounded-full duration-300 ${
                currentIndex === index ? 'w-4 bg-primary' : 'bg-muted hover:bg-muted-foreground'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <h3 className={`${pixelifySans.className} text-center text-2xl font-medium text-primary md:text-3xl`}>
          Unveiling GDG GTBIT&apos;s Eventful Journey: Celebrating Ideas, Innovation, and Achievements
        </h3>
      </div>
    </div>
  );
}

export default EventCard;
