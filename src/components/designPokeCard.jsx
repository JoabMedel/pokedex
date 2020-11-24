import React from 'react'
import Pikachu from './Pikachu.gif';
class PokeDesignCard extends React.Component{
    constructor(){
        super();
    }
    //effect move 3d
    moveCardContainer = (event) => {
        let xAxis = (window.innerWidth / 2 - event.pageX) / 15;
        let yAxis = (window.innerHeight / 2 - event.pageY) / 15;
        const card = document.querySelector(".CardPoke");
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }
    //animate In
    animateIn = () => {
        const card = document.querySelector(".CardPoke");
        card.style.transition = "none";
        //popOut
        const numberPokemon = document.querySelector(".container-number-pokemon");
        const namePokemon = document.querySelector(".poke-name-container");
        const PokemonStats = document.querySelector(".preview-stats-pokemon");
        const imagePokemon = document.querySelector(".pokemon-image");
        const japaneseNme = document.querySelector(".japanese-text");
        namePokemon.style.transform = 'translateZ(70px)';
        numberPokemon.style.transform = 'translateZ(50px)';
        PokemonStats.style.transform = 'translateZ(50px)';
        imagePokemon.style.transform = 'translateZ(80px)';
        japaneseNme.style.transform = 'translateZ(100px)';
    }
    //Animate Out 
    AnimateOut = () => {
        const card = document.querySelector(".CardPoke");
        card.style.transition = "all 0.5s ease";
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        const numberPokemon = document.querySelector(".container-number-pokemon");
        const namePokemon = document.querySelector(".poke-name-container");
        const PokemonStats = document.querySelector(".preview-stats-pokemon");
        const imagePokemon = document.querySelector(".pokemon-image");
        const japaneseNme = document.querySelector(".japanese-text");
        namePokemon.style.transform = 'translateZ(0px)';
        numberPokemon.style.transform = 'translateZ(0px)';
        PokemonStats.style.transform = 'translateZ(0px)';
        imagePokemon.style.transform = 'translateZ(0px)';
        japaneseNme.style.transform = 'translateZ(0px)';
    }
    render(){
        return(
            <div 
                className="containerCardPoke" 
                onMouseMove={this.moveCardContainer} 
                onMouseEnter={this.animateIn} 
                onMouseLeave={this.AnimateOut}
            >
                <div className="CardPoke">
                    <div className="container-number-pokemon">
                        <div className="number-pokemon">#100</div>
                        <div className="icon-show-more">show more</div>
                    </div>
                    <div className="poke-name-container">
                        <h2>Pikachu</h2>
                    </div>
                    <div className="preview-stats-pokemon">
                        <div className="type-pokemon">
                            Type pokemon
                        </div>
                        <div className="pokemon-stats">
                            <div className="space-text-stats">
                                <span className="bold-prop">Height: </span>
                                <span> 70cm</span>
                            </div>
                            <div>
                                <span className="bold-prop">Weigth: </span>
                                <span> 5.5kg</span>
                            </div>
                        </div>
                    </div>
                    <div className="pokemon-image">
                        <img src={Pikachu} alt="pikachu"/>
                        <div className="japanese-text">ピカチュウ</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PokeDesignCard;