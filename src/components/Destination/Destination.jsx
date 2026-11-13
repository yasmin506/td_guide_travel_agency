import styles from "./destination.module.css";
/*import santorini from"../../assets/santorini.jpg";
function Destination() {
   return(
    <div className={styles.destination}>
        <img
            className={styles.image}
            src={santorini}
             alt="santorini"
           />
           <h2 className={styles.titre}>
            santorini
            </h2>
            <p className= {styles.pays}>
               Gréce 
               </p> 
               <p className ={styles.description}>decouvrez les maginifiques paysages des iles grescques</p>
               <h3 className={styles.prix}>1200DT</h3>
               </div>
               );
            }*/

    function Destination (props) {
    return(
        <div className={styles.destination}>
            <img
                src={props.image}
                alt={props.nom}
                className={styles.imagine}
            />
            <h2 className={styles.titre}>{props.nom}</h2>
            <h3 className={styles.pays}>{props.pays}</h3>
            <p className={styles.description}> {props.description} </p>
            <h3 className={styles.prix}> {props.prix} DT </h3>
        </div>
    )
}

export default Destination;
               