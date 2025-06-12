import React, { useRef, useState, useEffect, JSX } from "react";
import Image from "next/image";

const cards = [
    {
        src: "https://c.animaapp.com/mbkp0yemyS6JOA/img/rectangle-2749.png",
        title: "How to Study at the University of Oxford",
        description: "Study at the University of Oxford with the Fully Funded Rhodes Scholarship (2025)..",
        readTime: "6 mins read",
        date: "April 15, 2025",
    },
    {
        src: "https://c.animaapp.com/mbkp0yemyS6JOA/img/rectangle-2749-1.png",
        title: "UK vs Canada: Where to Study in 2025?",
        description: "For international students, the UK and Canada have always been favourites as study overseas destinations...",
        readTime: "9 mins read",
        date: "May 21, 2025",
    },
    {
        src: "https://c.animaapp.com/mbkp0yemyS6JOA/img/rectangle-2749-2.png",
        title: "Which UK Universities Accept Transfer Students?",
        description: "Are you considering a transfer but not sure which UK universities accept transfer students? For the uninformed...",
        readTime: "4 mins read",
        date: "February 5, 2025",
    },
    {
        src: "https://c.animaapp.com/mbkp0yemyS6JOA/img/rectangle-2749-3.png",
        title: "MBA in UK: MBA in UK Fees, Requirements, Best Universities",
        description: "An MBA in UK is one of the most popular courses among international students. Depending on the university, course type, and mode of study..",
        readTime: "11 mins read",
        date: "February 4, 2025",
    },
    // You can add more if needed...
];

export const TrendingInDestination = (): JSX.Element => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-scroll effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % cards.length;
                containerRef.current?.scrollTo({
                    left: nextIndex * 296,
                    behavior: "smooth",
                });
                return nextIndex;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
        containerRef.current?.scrollTo({
            left: index * 296,
            behavior: "smooth",
        });
    };

    return (
        <div className="w-full px-4 md:px-6">
            <div
                ref={containerRef}
                className="flex overflow-x-scroll no-scrollbar scroll-smooth mb-5 snap-x snap-mandatory"
            >
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="snap-start flex-shrink-0 w-[296px] h-[428px] bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 mr-4"
                    >
                        <Image
                            src={card.src}
                            alt={card.title}
                            width={296}
                            height={205}
                            className="w-full h-[205px] object-cover"
                            priority={index === 0}
                            loading={index === 0 ? "eager" : "lazy"}
                        />
                        <div className="px-4 py-3">
                            <p className="font-semibold text-[#e8a302] text-sm leading-snug mb-2 line-clamp-2">
                                {card.title}
                            </p>
                            <p className="text-gray-600 text-xs leading-4 line-clamp-3">
                                {card.description}
                            </p>
                        </div>
                        <div className="px-4 flex justify-between text-primary text-[10px]">
                            <span>{card.readTime}</span>
                            <span>{card.date}</span>
                        </div>
                        <div className="flex justify-center py-3">
                            <button className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-[#fec849] rounded-md hover:bg-[#e8a302] transition duration-300">
                                <span className="text-white font-bold text-xs">Enroll Now</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-4 gap-2">
                {cards.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentIndex === index ? "bg-[#fec849]" : "bg-gray-300"
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};
