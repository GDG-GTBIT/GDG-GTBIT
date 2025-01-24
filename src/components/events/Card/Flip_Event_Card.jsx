/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

const Card = ({ headUp, headDown, Box1, Box2, ImgLink, Para, link, color }) => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleCardFlip = (event) => {
        const card = event.currentTarget;

        if (!isFlipped) {
            gsap.to(card.querySelector('.front'), {
                duration: 2.34,
                rotateY: 180,
                ease: 'elastic.out(1, 0.75)',
            });
            gsap.to(card.querySelector('.back'), {
                duration: 2.34,
                rotateY: 360,
                ease: 'elastic.out(1, 0.75)',
            });
        } else {
            if (isSmallScreen) {
                gsap.to(card.querySelector('.front'), {
                    duration: 2.34,
                    rotateY: 0,
                    ease: 'elastic.out(1, 0.75)',
                });
                gsap.to(card.querySelector('.back'), {
                    duration: 2.34,
                    rotateY: 180,
                    ease: 'elastic.out(1, 0.75)',
                });
            } else {
                gsap.to(card.querySelector('.front'), {
                    delay: 0.8,
                    duration: 2.34,
                    rotateY: 0,
                    ease: 'elastic.out(1, 0.75)',
                });
                gsap.to(card.querySelector('.back'), {
                    delay: 0.8,
                    duration: 2.34,
                    rotateY: 180,
                    ease: 'elastic.out(1, 0.75)',
                });
            }
        }
        setIsFlipped(!isFlipped);
    };

    const handleMouseEnter = (event) => {
        if (isSmallScreen) return;
        handleCardFlip(event);
    };

    const handleMouseLeave = (event) => {
        if (isSmallScreen) return;
        handleCardFlip(event);
    };

    return (
        <React.Fragment>
            <div className="parent">
                <div
                    className="card relative inline-block w-fit"
                    onClick={isSmallScreen ? handleCardFlip : null}
                    onMouseEnter={!isSmallScreen ? handleMouseEnter : null}
                    onMouseLeave={!isSmallScreen ? handleMouseLeave : null}
                >
                    {/* Front Card */}
                    <div className="front">
                        <div
                            className={`h-[65vh] text-[#111] sm:h-[85vh] md:h-[47vh] lg:h-[65vh] xl:h-[76vh] w-[80vw] md:w-[30vw] ${color}card rounded-2xl p-[5%] flex flex-col gap-[8%]`}
                        >
                            <div className="flex flex-col gap-[5%] h-[35%]">
                                <div>
                                    <h1 className="text-nowrap text-[7.6vw] md:text-[2.6vw] font-bold">
                                        {headUp}
                                    </h1>
                                    <h1 className="text-nowrap text-[7.6vw] md:text-[2.6vw] font-bold">
                                        {headDown}
                                    </h1>
                                </div>
                                <div className="flex items-center justify-start gap-4">
                                    <span className="md:px-[1.5vw] px-[4.5vw] md:py-[0.1vw] py-[0.8vw] border-black border-[0.2px] text-center md:border-[1.6px] scale-y-105 rounded-full text-[4.2vw] md:text-[1.15vw] uppercase">
                                        {Box1}
                                    </span>
                                    <span className="md:px-[1.5vw] px-[4.5vw] md:py-[0.1vw] py-[0.8vw] border-black border-[0.2px] text-center md:border-[1.6px] rounded-full scale-y-105 text-[4.2vw] md:text-[1.15vw] uppercase">
                                        {Box2}
                                    </span>
                                </div>
                            </div>
                            <div className="h-[65%]">
                                <img
                                    src={ImgLink}
                                    alt=""
                                    className="border-black border-[0.3px] md:border-[1.6px] z-50 w-[99.5%] h-[100%] rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Back Card */}
                    <div className="back absolute top-0">
                        <div className="h-[65vh] sm:h-[85vh] md:h-[47vh] lg:h-[65vh] xl:h-[76vh] w-[80vw] md:w-[30vw] bg-[#333] rounded-2xl p-[5%] text-[#e7e7e7] flex flex-col gap-[6%]">
                            <div className="flex flex-col gap-[5%] h-[30%]">
                                <div>
                                    <h1 className="text-nowrap text-[7.6vw] md:text-[2.6vw] font-bold">
                                        {headUp}
                                    </h1>
                                    <h1 className="text-nowrap text-[7.6vw] md:text-[2.6vw] font-bold">
                                        {headDown}
                                    </h1>
                                </div>
                                <div className="flex items-center justify-start gap-4">
                                    <span className="md:px-[1.5vw] px-[4.5vw] md:py-[0.1vw] py-[0.8vw] border-white border-[0.2px] text-center md:border-[1.6px] scale-y-105 rounded-full text-[4.2vw] md:text-[1.15vw] uppercase">
                                        {Box1}
                                    </span>
                                    <span className="md:px-[1.5vw] px-[4.5vw] md:py-[0.1vw] py-[0.8vw] border-white border-[0.2px] text-center md:border-[1.6px] rounded-full scale-y-105 text-[4.2vw] md:text-[1.15vw] uppercase">
                                        {Box2}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[2%] items-center justify-between h-[70%]">
                                <p className="text-pretty text-[3.5vw] md:text-[1.1vw] text-left">
                                    {Para}
                                </p>
                                <a href={link} className="w-full h-[25%]">
                                    <button className="w-full h-[100%] bg-[#e7e7e7] text-[#111] text-[7vw] md:text-[2.2vw] font-bold rounded-2xl">
                                        LEARN MORE
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Card;
