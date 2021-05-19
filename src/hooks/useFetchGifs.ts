import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

interface IGifs{
    id: string;
    title: string;
    url: string;
}

export interface IFetchGifs {
    data: IGifs[];
    loading: boolean;
}

export const useFetchGifs = (category:string) => {
    const [state, setState] = useState<IFetchGifs>({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category)
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            })
    }, [category])

    return state;
}