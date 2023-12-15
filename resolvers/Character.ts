import {Episode} from "../types.ts";
import {GraphQLError} from "graphql";

export const Character = {

    episode: async (parent: Character): Promise<Episode[]> => {         // Se define la función episode

            const episodesPromise: Promise<Episode[]> = parent.episode.map(async elem => {   // Se crea un array de promesas
                
                const response = await fetch(elem);    // Se hace la petición a la API

                if(!response){
                    throw new GraphQLError("No episode found with id: ${elem}");    // Si no hay respuesta, se lanza un error
                }

                const data = await response.json();   // Se obtiene la respuesta en formato JSON

                const episode: Episode = {    // Se crea el objeto Episode
                    id: data.id,
                    name: data.name,
                    characters: data.characters,
                };

                return episode;    // Se devuelve el objeto Episode

            });

            const episodes:Episode[] = await Promise.all(episodesPromise);  // Se resuelven las promesas

            return episodes;    // Se devuelve el array de objetos Episode

    }
};