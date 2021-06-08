// import React, {useState,useEffect} from 'react';
import ThisPokemons from './feedPokemons'

export default function PokemonCards (){
    // const [detectDivice,setDetctDivice] = useState("Desktop");
    // const [proof,setProof] = useState();

    // const movile = () => {
    //   return (
    //     <div> Estas en un dispositivo movil :) </div>
    //   )
    // }

    // const movileLandScape = () => {
    //   return (
    //     <div> Estas en modo LandScape desde tu dispositivo :) </div>
    //   )
    // }

    // const GetDivice = ()=> {
      // const myDivice = () => {
      //   const movileDivice = matchMedia('(max-width: 575.98px)').matches;
      //   const movil_landscape = matchMedia('(min-width: 576px) and (max-width: 900px)').matches;
      //   let defArray = "";
      //   if (movileDivice === true){
      //     defArray = "Movil";
      //   } else if(movil_landscape === true){
      //     defArray = "landScape";
      //   } else {
      //     defArray = "Desktop";
      //   }
      // }
    // }

    // const changeComponents = () => {
    //   if (detectDivice === "Desktop"){
    //     return <ThisPokemons />
    //   } else if (detectDivice === "Movil"){
    //     return movile();
    //   } else {
    //     return movileLandScape();
    //   }
    // }

    // useEffect(() => {
    //   setProof(false);
    // },[])

    return(
      <>
        <ThisPokemons />
      </>
    )
}