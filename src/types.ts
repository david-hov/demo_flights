export interface FilterFormValues {
    cabinClass: string;
    adults: string;
    originEntityId: string;
    destinationEntityId: string;
    date: string;
}

export interface Choice {
    id: string;
    name: string;
}

export interface CustomReferenceInputProps {
    source: string;
}

export interface PopularDestination {
    name: string;
    imageUrl: string;
}

export interface FavoriteItem {
    title: string;
    date: string;
    duration: string;
    imageUrl: string;
}

export interface ApiResponse {
    data: any[];
    total: number;
}
