import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import SearchForm from "./components/SearchForm/SearchForm";
import CardContainer from "./components/CardContainer/CardContainer";

function App() {
    // Defines a new state variable called newsArticles to hold the data from the NewsAPI
    let [newsArticles, setNewsArticles] = useState();

    // Takes in two parameters which are passed in from the form in SearchForm.js
    // Fetches the NewsAPI and sets the data in state
    async function fetchNewsApiData(searchQuery) {
        if (searchQuery === "") {
            return alert("Search Term Required");
        }

        let newsData = await axios.get(
            `https://gnews.io/api/v3/search?q=${searchQuery}&image=required&token=${process.env.REACT_APP_NEWS_API_KEY}`
        );
        setNewsArticles(newsData.data.articles);
    }

    return (
        <div>
            <header>
                <SearchForm fetchNewsApiData={fetchNewsApiData} />
            </header>
            <main id='bodyContainer'>
                {
                    // If there are articles in state then map over them and return a Card for each one
                    newsArticles
                        ? newsArticles.map((article, index) => {
                              return <CardContainer key={index} {...article} />;
                          })
                        : null
                }
            </main>
        </div>
    );
}

export default App;
