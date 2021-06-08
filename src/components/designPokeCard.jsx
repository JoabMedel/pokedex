import React from 'react'
class PokeDesignCard extends React.Component{
    constructor(){
        super();
        this.cardMoveEffect = React.createRef();
        this.cardMoveOnTouch = React.createRef();
        this.numberPokemon = React.createRef();
        this.namePokemon = React.createRef();
        this.PokemonStats = React.createRef();
        this.imagePokemon = React.createRef();
        this.japaneseText = React.createRef();
        this.showFeatures = React.createRef();
    }
    //effect move 3d
    moveCardContainer = (event) => {
        let xAxis = (window.innerWidth / 2 - event.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - event.pageY) / 25;
        this.cardMoveEffect.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }
    //animate In
    animateIn = () => {
        this.cardMoveEffect.current.style.transition = "none";
        //popOut
        // this.namePokemon.current.style.transform = 'translateZ(70px)';
        this.numberPokemon.current.style.transform = 'translateZ(25px)';
        this.PokemonStats.current.style.transform = 'translateZ(50px)';
        this.imagePokemon.current.style.transform = 'translateZ(120px)';
        this.japaneseText.current.style.transform = 'translateZ(80px)';
    }
    //Animate Out 
    AnimateOut = () => {
        this.cardMoveEffect.current.style.transition = "all 0.5s ease";
        this.cardMoveEffect.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
        this.namePokemon.current.style.transform = 'translateZ(0px)';
        this.numberPokemon.current.style.transform = 'translateZ(0px)';
        this.PokemonStats.current.style.transform = 'translateZ(0px)';
        this.imagePokemon.current.style.transform = 'translateZ(0px)';
        this.japaneseText.current.style.transform = 'translateZ(0px)';
    }


    render(){
        return(
            <div 
                className="containerCardPoke" 
                onMouseMove={this.moveCardContainer} 
                onMouseEnter={this.animateIn} 
                onMouseLeave={this.AnimateOut}
                onTouchStart={this.animateIn}
                onTouchEnd={this.AnimateOut}
            >
                <div className={`${this.props.colorPokemon} CardPoke`} ref={this.cardMoveEffect}> 
                    <div className="container-number-pokemon" ref={this.numberPokemon}>
                        <div className="number-pokemon">#{this.props.numberPokemon}</div>
                    </div>
                    <div className="poke-name-container" ref={this.namePokemon}>
                        <h2>{this.props.namePokemon}</h2>
                    </div>
                    <div className="preview-stats-pokemon" ref={this.PokemonStats}>
                        <div className="type-pokemon">
                            {this.props.type}
                        </div>
                        <div className="pokemon-stats">
                            <div className="space-text-stats">
                                <span className="bold-prop">Height: </span>
                                <span>{this.props.Height}</span>
                            </div>
                            <div>
                                <span className="bold-prop">Weigth: </span>
                                <span>{this.props.weight}</span>
                            </div>
                        </div>
                    </div>
                    <div className="pokemon-image" ref={this.imagePokemon}>
                        <img 
                            src={this.props.imagePokemon}
                            alt={this.props.namePokemon}
                            onClick={this.props.showFeatures}
                        />
                    </div>
                    <div>
                        <div className="japanese-text" ref={this.japaneseText}>{this.props.japanAbiliti}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PokeDesignCard;