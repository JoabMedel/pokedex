import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Radar } from 'react-chartjs-2';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed"
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "7px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "90%",
    height: "auto"
  }
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false); 

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
    handleOpen()
  },[])

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose && props.offFeature}
        closeAfterTransition
        BackdropComponent={Backdrop}
        disableAutoFocus
        disableEnforceFocus
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className="container-features">
              <div className="container-details-features">
                <h2>{props.namePokemon}</h2>
                <div className="container-img-features">
                  <img src={props.imagePokemon} alt={props.namePokemon} className="image-pokemon-features"/>
                  <div className="Japan-text-features">{props.japanText}</div>
                </div>
                <div className="Extra-features-conteiner">
                  {
                    props.typePokemon.map((typePoke,index)=> {
                      const nameType = typePoke.type.name;
                      return(
                        <div className={`icon ${nameType.toUpperCase()}`} key={index}>
                          <img src={process.env.PUBLIC_URL + `/svg/${nameType}.svg`} alt={nameType}/>
                        </div>
                      )
                    })
                  }
                  <div className="Container-abilities">
                    <h3 className="Format-text-Abilities">Abilities</h3>
                    <div className="Container-all-abilities">
                      {
                        props.abilitiesPokemon.map((ability,index)=>{
                          return(
                            <p className="Text-ability" key={index}>{ability.ability.name}</p>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className="graphic-Pokemon">
                <Radar
                  data={{
                    labels: ['HP','Attack','Deffense','Special-Attack','Special-Defense','Speed'],
                    datasets: [
                      {
                        label:'Base Stats',
                        data:[
                          props.stats[0].base_stat,
                          props.stats[1].base_stat,
                          props.stats[2].base_stat,
                          props.stats[3].base_stat,
                          props.stats[4].base_stat,
                          props.stats[5].base_stat
                        ],
                        backgroundColor: [
                          'rgba(255, 99, 132, 0.2)',
                          'rgba(54, 162, 235, 0.2)',
                          'rgba(255, 206, 86, 0.2)',
                          'rgba(75, 192, 192, 0.2)',
                          'rgba(153, 102, 255, 0.2)',
                          'rgb(124, 252, 0, 0.2)'
                        ],
                        borderWidth: 3,
                      }
                    ],
                  }}
                  height={460}
                  width={465}
                  options={{
                    responsive: true,
                    scale: {
                      angleLines: {
                        display:false 
                      }
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}