"use client";

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"



const WelcomeOverlay = () => {
    const [showOverlay, setShowOverlay] = useState(false)

    useEffect(() => {
        let timer: NodeJS.Timeout
        if (showOverlay) {
            timer = setTimeout(() => {
                setShowOverlay(false)
            }, 5000)
        }
        return () => clearTimeout(timer)
    }, [showOverlay])

    return (<div>

        <AnimatePresence initial={false}>
            {showOverlay ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="fixed inset-0 bg-white z-50 flex items-center justify-center"
                >
                    <div className="text-black text-center w-full h-full flex flex-col justify-between py-12">

                        <Image src={"/assets/texas-logo.png"} alt="texas logo" width={200} height={100} className="fixed top-2" />

                        <div>
                            <h2 className="text-4xl font-bold mb-8">Welcome 🙏</h2>
                            <h2 className="text-5xl font-bold mb-8">Texas International College</h2>
                        </div>

                        <div className="flex flex-col flex-1 items-center justify-center gap-4">
                            <div className="flex flex-col gap-3">
                                <p className="text-2xl">Number of Attending Students</p>
                                <p className="text-6xl font-bold">1,234</p>
                            </div>
                            <div className="flex relative w-1/2 rounded-md h-full justify-center">
                                    <Image
                                        src="/assets/dummy.jpg"
                                        alt="School Image"
                                        fill
                                        objectFit="contain"
                                    />
                            </div>

                        </div>
                    </div>
                </motion.div>
            ) : null}
        </AnimatePresence>
        <motion.button
            onClick={() => setShowOverlay(!showOverlay)}
            whileTap={{ y: 1 }}
        >
            {showOverlay ? "Hide" : "Show"}
        </motion.button>
    </div>
    )
}

export default WelcomeOverlay;