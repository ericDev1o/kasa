import { createContext } from "react";

type HostType = {
    name: string,
    picture: string
}

interface HousingType {
    title: string,
    cover: string,
    pictures: string[],
    description: string,
    host: HostType,
    rating: string,
    location: string,
    equipements: string[],
    tags: string[]
}

export const HousingContext = createContext<HousingType | null>(null);