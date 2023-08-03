import React from "react";
import blogData from "../data/blog.js";
import Header from "../components/Header.js";
import About from "../components/About.js";
import ArticleList from "../components/ArticleList.js";
// console.log(blogData);


function App() {
  return (
   
    <div className="App">
     <Header/>
     <About/>
     <ArticleList/>
   </div>
  );
}

export default App;