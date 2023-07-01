import { useEffect, useState } from "react";
import api from '../../services/api';

function Home() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {

        async function loadFilmes() {
            const response = await api.get("/movie/now_playing", {
                params: {
                    api_key: '65c5a8c3fbf30cb8934edc85464da2dd',
                    language: "pt-BR",
                    page: 1,
                }
            });

            console.log(response.data.results);
        }

        loadFilmes();

    }, [])

    return (
        <div>
            BEM VINDO A HOME!
        </div>
    )
}

export default Home;