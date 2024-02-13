import React, { useState, useEffect, useRef } from 'react'
import News from './News';

function NewsApp() {
    const url = 'f0ea9c6da07b45d7993d5f76c0966def';

    const [news, setNews] = useState([]);
    const [query, setQuery] = useState('us');
    const inputNews = useRef(null);
    const apiURL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f0ea9c6da07b45d7993d5f76c0966def`;


    useEffect(() => {
        fetchData();
    }, [query])

    async function fetchData() {
        try {
            const res = await fetch(apiURL);
            const jsondata = await res.json();
            setNews(jsondata.articles);
        } catch (error) {
            console.log(error, "error");
        }

    }
    function handleSubmit(event) {
        event.preventDefault();
        const getInputNews = query.target.value;
        setQuery(getInputNews);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputNews} />
                <input type="submit" onClick={handleSubmit} />
            </form>
            <div
                style={{
                    display: 'grid',
                    justifyContent: 'space-between',
                    gridTemplateColumns: 'repeat(3, 30%)',
                    rowGap: '20px'
                }}>
                {news.map((nws, url) => {
                    return <News key={nws.url} props={nws} />
                })}
            </div>
        </div>
    );
}

export default NewsApp