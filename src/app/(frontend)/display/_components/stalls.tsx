"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Stall } from "@/payload-types";

interface IStallsProps {
    stallsData: Stall[] | undefined;
}

const StallsDetails = ({ stallsData }: IStallsProps) => {

    const groupedStalls = stallsData?.reduce((acc, stall, index) => {
        const groupIndex = Math.floor(index / 6)
        if (!acc[groupIndex]) {
            acc[groupIndex] = []
        }
        acc[groupIndex].push(stall)
        return acc
    }, [] as Stall[][])

    return (
        <Carousel autoplay className="relative h-[35vh]">
            <CarouselContent>
                {groupedStalls?.map((group, groupIndex) => (
                    <CarouselItem key={groupIndex}>

                        <Table className="w-full">
                            <TableHeader className="bg-gray-600">
                                <TableRow>
                                    <TableHead className="text-xl text-white flex items-center justify-center font-semibold">Stall No</TableHead>
                                    <TableHead className="text-xl text-white pl-6 font-semibold">Projects</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {group.map((stall) => (
                                    <TableRow key={stall.id}>
                                        <TableCell className="font-medium justify-center flex items-center">
                                            <p className="bg-blue-600 px-4 py-2 rounded-md text-white">{stall.stallNo}</p>
                                        </TableCell>
                                        <TableCell className="">
                                            <div className="pl-5 flex ">
                                                {stall.projects.map((project, index) => (
                                                    <p key={project.id} className="flex-1">{index + 1}.{project.title}</p>
                                                ))}
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}



export default StallsDetails;

