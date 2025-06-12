'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState } from 'react';
import Flag from "react-world-flags";


const Countries = [
    {
        country_name: 'United Kingdom',
        country_code: 'GB',
    },
    // {
    //     country_name: 'United States',
    //     country_code: 'US',
    // },
    // {
    //     country_name: 'Canada',
    //     country_code: 'CA',
    // },
    // {
    //     country_name: 'Australia',
    //     country_code: 'AU',
    // },
    // {
    //     country_name: 'India',
    //     country_code: 'IN',
    // },
    // {
    //     country_name: 'Germany',
    //     country_code: 'DE',
    // },
    // {
    //     country_name: 'France',
    //     country_code: 'FR',
    // },
    // {
    //     country_name: 'Spain',
    //     country_code: 'ES',
    // },
]
const CircularLoader = () => {
    return (
        <div className="flex justify-center items-center h-10">
            <div className="loader"></div>
        </div>
    );
}

const DropdownMenu: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const dropdownVariants = {
        hidden: { y: -10, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut",
                staggerChildren: 0.1
            }
        },
    };

    const itemVariants = {
        hidden: { y: -5, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };


    return (
        <div ref={containerRef} className="navbar-dropdown-container flex flex-row items-center">
            <motion.li
                className="relative text-base sm:text-lg list-none px-2 sm:px-3 py-2 cursor-pointer hover:text-info transition-colors duration-200"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
            >
                <span className="flex items-center gap-1">
                    Destinations
                    <svg
                        className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
                <AnimatePresence>
                    {isDropdownOpen && (
                        <motion.ul
                            className={`absolute left-[-40px] top-full mt-1 z-30 ${Countries.length === 1 ? `lg:max-w-[150px]` : 'lg:max-w-[500px] sm:w-[350px] md:max-w-[500px]'} bg-white rounded-lg grid grid-cols-1 md:grid-cols-2 gap-2 p-3 shadow-xl border border-gray-200 max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100`}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={dropdownVariants}
                        >
                            {Countries.length > 0 ? (
                                Countries.map((destination) => (
                                    <motion.div
                                        key={destination.country_name}
                                        variants={itemVariants}
                                    >
                                        <Link
                                            href={`/destination/${destination.country_name.replace(/\s/g, "-").toLowerCase()}`}
                                            onClick={() => setIsDropdownOpen(false)}
                                            className="flex items-center p-3 hover:bg-gray-200 rounded-[0.5rem]"
                                        >
                                            <Flag
                                                code={destination.country_code}
                                                className="w-8 h-6 mr-3"
                                            />
                                            <span className="text-sm font-medium text-gray-700">
                                                {destination.country_name}
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))
                            ) : (
                                <motion.div
                                    variants={itemVariants}
                                    className="col-span-full"
                                >
                                    <CircularLoader />
                                </motion.div>
                            )}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </motion.li>
        </div>
    );
};

export default DropdownMenu;
