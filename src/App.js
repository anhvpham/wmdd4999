import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Search from './Components/Search';
import Tabs from './Components/Tabs';
import Display from './Components/Display';


const API_KEY = '7d7a2a941a834f21a608f9739532f6c6'

class App extends Component {
    getCountryNews = async (e) => {
        let country_key =""
        let country = e.target.innerText

        if(country=== 'JAPAN'){
            console.log(country)
            country_key="jp"
        }else if (country=== 'CANADA'){
            console.log(country)
            country_key="ca"
        }else if (country=== 'AUSTRALIA'){
            console.log(country)
            country_key="au"
        }else if (country=== 'UNITED KINGDOM'){
            console.log(country)
            country_key="uk"
        }
        const url = `https://newsapi.org/v2/top-headlines?country=${country_key}&language=en&apiKey=${API_KEY}`
        
        const api_call = await fetch(url)
        const data = await api_call.json()
        this.setState({
            // article 1
          article1: data.articles[0].content,
          article1Img: data.articles[0].urlToImage,
          article1Title: data.articles[0].title,
          article1Author: data.articles[0].author,
          article1url: data.articles[0].url,

            // article 2
          article2: data.articles[1].content,
          article2Img: data.articles[1].urlToImage,
          article2Title: data.articles[1].title,
          article2Author: data.articles[1].author,
          article2url:data.articles[1].url,

            //article 3
          article3: data.articles[2].content,
          article3Img: data.articles[2].urlToImage,
          article3Title: data.articles[2].title,
          article3Author: data.articles[2].author ,
          article3url:data.articles[2].url 
        })
    }
    
    
        getNews = async (event) => {
            event.preventDefault()
            const {search} = event.target.elements
    
            const url = `https://newsapi.org/v2/evrything?q=${search.value}&from=2018-12-31&sortBy=publishedAt&language=en&apiKey=7d7a2a941a834f21a608f9739532f6c6`
    
            const api_call = await fetch(url)
            const data = await api_call.json()
            console.log(data)
    
            if({search} !== '404'&& {search}!=='400'){
            this.setState({
                // article 1
                article1: data.articles[0].content,
                article1Img: data.articles[0].urlToImage,
                article1Title: data.articles[0].title,
                article1Author: data.articles[0].author,
                article1url: data.articles[0].url,
                // article 2
                article2: data.articles[1].content,
                article2Img: data.articles[1].urlToImage,
                article2Title: data.articles[1].title,
                article2Author: data.articles[1].author,
                article2url:data.articles[1].url,
                // article 3
                article3: data.articles[2].content,
                article3Img: data.articles[2].urlToImage,
                article3Title: data.articles[2].title,
                article3Author: data.articles[2].author , 
                article3url:data.articles[2].url 
            })
        }else if (search){
            this.setState({
                // article 1
                article1: null,
                article1Img: null,
                article1Title: null,
                article1Author: null,
                article1url: null,
                //article 2
                article2: null,
                article2Img: null,
                article2Title: null,
                article2Author: null,
                article2url: null,
                //article 3
                article3: null,
                article3Img: null,
                article3Title: null,
                article3Author: null,
                article3url: null,
    
            })
        }else {
          this.setState({
              //article 1
            article1: null,
            article1Img: null,
            article1Title: null,
            article1Author: null,
            article1url: null,
            //article 2
            article2: null,
            article2Img: null,
            article2Title: null,
            article2Author: null,
            article2url: null,
            //article 3
            article3: null,
            article3Img: null,
            article3Title: null,
            article3Author: null,
            article3url: null,
    
        })
        }
    
    }
    render() {
        return (
    
            <div className = "wrapper">
                <div width = "100%" className = "main"> 
                    <h1 className= "title"> React News Apps</h1>
                    <p className= "subtitle"> by Vu Pham</p>
                    <Grid 
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    >
                    <Search 
                    getNews={this.getNews}/>
                   </Grid>
                   <Grid >
                   <Tabs
                 
                  getCountryNews={this.getCountryNews}
                  />
                   </Grid>
                 <Display
                //  article 1
                 article1={this.state.article1}
                 article1Img={this.state.article1Img}
                 article1Author={this.state.article1Author}
                 article1Title={this.state.article1Title}
                 article1url={this.state.article1url}
                //  article 2
                 article2={this.state.article2}
                 article2Img={this.state.article2Img}
                 article2Author={this.state.article2Author}
                 article2Title={this.state.article2Title}
                 article2url={this.state.article2url}
                 //article 3
                 article3={this.state.article3}
                 article3Img={this.state.article3Img}
                 article3Author={this.state.article3Author}
                 article3Title={this.state.article3Title}
                 article3url={this.state.article3url}
                 />
                   </div>
                 </div>
               );
             }
           }
           
           export default App;