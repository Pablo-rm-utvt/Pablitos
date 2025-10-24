import { useState, useEffect, useRef } from "react";
import { rickMortyApi } from "/home/pabl/Documentos/App_Movil/app/recursos/api/rickMortyApi";
import { NewRickMortyList, Welcome, Result } from "../interfaces/rickMortyInterface";


interface useRickMortyPaginated {
    isLoading: boolean;
    loadRickMorty: () => void;
    simpleRickMortyList: NewRickMortyList[];
}

export const useRickMortyPaginated = (): useRickMortyPaginated => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [simpleRickMortyList, setrickandmortylist] = useState<NewRickMortyList[]>([]);
    const nextPageUrl = useRef("https://rickandmortyapi.com/api/character");

    const loadRickMorty = async () => {
        setIsLoading(true);
        const respose = await rickMortyApi.get<Welcome>(nextPageUrl.current);
        nextPageUrl.current = respose.data.info.next;
        mapRickMortyList(respose.data.results)

    }

    const mapRickMortyList = (results: Result[]) => {
        const newRickMortyList: NewRickMortyList[] = results.map(({ id, species, image, name, url }) => {
            const urlParts = url.split("/");
            const id = urlParts[ urlParts.length - 2 ];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif`;
            return { name, id, picture, url };
            return { name, id, image, species, url };
        });

        setrickandmortylist((prevList) => [...prevList, ...newRickMortyList]);

        setIsLoading(false);
    }

    useEffect(() => {
        loadRickMorty();
    }, []);

    return { isLoading, loadRickMorty, simpleRickMortyList };

}