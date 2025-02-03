"use client"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"


const DisplayCarousel = () => {
  return (
    <div className="bg-red-600 rounded-xl">

      <Carousel plugins={[Autoplay({
        delay: 2000,
      }),]}
      className="bg-green-500 h-full rounded-xl"
      >
        <CarouselContent>
          <CarouselItem>item 1</CarouselItem>
          <CarouselItem>item 2</CarouselItem>
          <CarouselItem>item 3</CarouselItem>
          <CarouselItem>item 4</CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default DisplayCarousel;