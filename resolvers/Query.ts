import { GraphQLError } from "graphql";
import { Character} from "../types.ts";
import { Episode } from "../types.ts";

export const Query = {

    character: async (_: unknown, args: {id: string}): Promise<Character> => {      // Personaje según ID

        const response = await fetch(`https://rickandmortyapi.com/api/character/${args.id}`);   // Se hace la petición a la API

        if(!response){
            throw new GraphQLError("No character found with id: ${args.id}");   // Si no hay respuesta, se lanza un error
        }

        const data = await response.json();    // Se obtiene la respuesta en formato JSON

        const character: Character = {       // Se crea el objeto Character
            id: data.id,
            name: data.name,
            episode: data.episode,
        };

        return character;   // Se devuelve el objeto Character

    },

    characterByID: async (_: unknown, args: {id: string}): Promise<Character> => {          // Array de personajes según sus IDs

        const IDs = args.IDs.join(",");       // Se unen los IDs en un string separados por comas

        const response = await fetch(`https://rickandmortyapi.com/api/character/${IDs}`);   // Se hace la petición a la API
        
        if(!response) {
            throw new GraphQLError(`No characters found with id ${IDs}`);   // Si no hay respuesta, se lanza un error
        }

        const data = await response.json();     // Se obtiene la respuesta en formato JSON

        return await data;      // Se devuelve la respuesta
    }
};