"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Stall } from "@/payload-types";

interface IStallsProps {
    stallsData: Stall[] | undefined;
}

const StallsDetails = ({ stallsData }: IStallsProps) => {

    const groupedStalls = stallsData?.reduce((acc, stall, index) => {
        const groupIndex = Math.floor(index / 6);
        if (!acc[groupIndex]) {
            acc[groupIndex] = [];
        }
        acc[groupIndex].push(stall);

        // Sort the group by stallNo after pushing the stall
        acc[groupIndex].sort((a, b) => parseInt(a.stallNo) - parseInt(b.stallNo));

        return acc;
    }, [] as Stall[][]);

    return (
        <Carousel autoplay delayLength={6000} className="relative h-[35vh]">
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
                                                    <p key={project.id} className="flex-1 flex gap-4 text-xl font-semibold">
                                                        <p>

                                                            {index + 1}.
                                                        </p>
                                                        <p>

                                                            {project.title}</p>
                                                    </p>
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

