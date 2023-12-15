import {Character} from "../types.ts";
import {GraphQLError} from "graphql";

export const Episode = {

    characters: async (parent: typeof Episode): Promise<Character[]> => {       // Se define la función characters

        const characterPromise: Promise<Character[]> = parent.characters.map(async elem => {    // Se crea un array de promesas
        
            const response = await fetch(elem);   // Se hace la petición a la API

            if(!response){
                throw new GraphQLError("No character found with id: ${elem}");  // Si no hay respuesta, se lanza un error
            }

            const data = await response.json();  // Se obtiene la respuesta en formato JSON

            const character: Character = {  // Se crea el objeto Character
                id: data.id,    
                name: data.name,
                episode: data.episode,
            };

            return character;   // Se devuelve el objeto Character

        });

        const characters:Character[] = await Promise.all(characterPromise); // Se resuelven las promesas

        return characters;  // Se devuelve el array de objetos Character

    }
}