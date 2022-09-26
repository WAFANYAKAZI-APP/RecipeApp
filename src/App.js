import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [search, setSearch] = useState("");
    const [container, setContainer] = useState([]);


    useEffect(() => {
        fetchMe()
    },[search])


    const onChanger = (e) => {
        setSearch(e.target.value)

    }

    const Submit = (e) => {
        e.preventDefault()
    }

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '731ab8b214mshe0c5b16ce21a7cbp1a3bdajsn84b6fabca573',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    };
    const fetchMe = () => {
        fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${search}`, options)
            .then(response => {
                return response.json();
            })
            .then(data => {
                return setContainer(data.d);
            })
            .catch(err => console.error(err));
    }
    return (
        <div className="App">

            <form onSubmit={Submit}>
                <input type="text" value={search} onChange={onChanger}/>
                <button type="submit">Submit</button>
            </form>
            <div className="container">

            {container.map((item)=>{
                return (
                    <div className="inside">
                    <p>{item.l}</p>
                        </div>
                )
            })}
                </div>


        </div>
    );
}

export default App;
