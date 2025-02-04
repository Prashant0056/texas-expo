'use client'

import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

interface Message {
  image: string
}

export function DisplayCarousel({ images }: { images: Message[] }) {
  return (
    <Carousel autoplay className="relative h-[35vh] w-full">
      <CarouselContent>
        {images.map((feature, index) => (
          <CarouselItem key={index}>
            <Image
              src={feature.image}
              alt="Department Head Message"
              width={1400}
              height={1000}
              className="w-auto h-auto object-center object-cover"
              priority
            />
          </CarouselItem>
        ))}
      </CarouselContent>{' '}
    </Carousel>
  )
}
