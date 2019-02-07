import React from 'react';


const Display = (props) => (
    <div className="articles">
    
    {
        <section className = "article">
            <img src={props.article1Img} alt=""/>
            <div className = "info"> 
               <a href={props.article1url}> <h2 className = "article_title">{props.article1Title}</h2></a>
                <h4 className = "description">
                {props.article1} </h4>
                <blockquote className = "author">By:{props.article1Author}</blockquote>
            
            </div>
        
        </section>
    
    }
    {
        <section className="article">
            <img src={props.article2Img} alt= ""/>
            <div className = "info"> 
            <a href={props.article2url}><h2 className = "article_title">{props.article2Title}</h2></a>
                <h4 className = "description">
                {props.article2} </h4>
                <blockquote className = "author">By:{props.article2Author}</blockquote>
    
            </div>
        </section>
    }
    {
        <section className = "article">
            <img src={props.article3Img} alt = ""/>
            <div className = "info"> 
                <a href={props.article3url}><h2 className="article_title">{props.article3Title}</h2></a>
                <h4 className = "description">
                {props.article3} </h4>
                <blockquote className = "author">By: {props.article3Author}</blockquote>
    
            </div>
        </section>
    }
    
    </div>
    
    )
    
    export default Display;
    