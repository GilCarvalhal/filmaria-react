import { useEffect, useState } from "react";
import api from '../../services/api';
import { Link } from "react-router-dom";
import './home.css';

function Home() {
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadFilmes() {
            const response = await api.get("/movie/now_playing", {
                params: {
                    api_key: '65c5a8c3fbf30cb8934edc85464da2dd',
                    language: "pt-BR",
                    page: 1,
                }
            });

            // console.log(response.data.results.slice(0, 10));
            setFilmes(response.data.results.slice(0, 10));
            setLoading(false);
        }

        loadFilmes();

    }, [])

    if (loading) {
        return (
            <div className="loading">
                <h2>
                    Carregando filmes...
                </h2>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => {
                    return (
                        <article>
                            <strong key={filme.id}>
                                {filme.title}
                            </strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>
                                Acessar
                            </Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;