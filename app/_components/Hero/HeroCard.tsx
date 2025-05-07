"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import LandingImage2 from "@/_assets/images/landing12.jpg"
import LandingImage3 from "@/_assets/images/landing123.jpg"
import LandingImage from "@/_assets/images/landing.jpg"

const carouselImages = [
  {
    src: LandingImage,
    alt: "Landing Image 1",
    className: "object-cover object-bottom", // Default styling
  },
  {
    src: LandingImage2,
    alt: "Landing Image 3",
    className: "object-cover object-top brightness-110", // Top position with brightness adjustment
  },
  {
    src: LandingImage3,
    alt: "Landing Image 3",
    className: "object-cover object-top brightness-110", // Top position with brightness adjustment
  },
]

export default function HeroComponent() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1))
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoPlaying) {
      interval = setInterval(() => {
        goToNext()
      }, 3000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoPlaying, currentIndex])

  const handleInteraction = () => {
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }


  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="relative h-full w-full">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              priority={index === currentIndex}
              className={image.className} // Use the custom className from the image object
              sizes="100vw"
            />
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          goToPrevious()
          handleInteraction()
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={() => {
          goToNext()
          handleInteraction()
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              goToSlide(index)
              handleInteraction()
            }}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}