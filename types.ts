// Defino el tipo de datos Character
export type Character = {   
    id: string;
    name: string;
    episode: string[];
};

// Defino el tipo de datos Episode
export type Episode = {
    id: string;
    name: string;
    characters: Character[];
};