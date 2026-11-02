
import './Resultat.css';

function Resultat() {
  const moyenne = 14;

  return (
    <div className={moyenne >= 10 ? 'admis' : 'refuse'}>
      <h2>Résultat de l'étudiant</h2>
      <p>Moyenne : {moyenne}</p>
      <p>{moyenne >= 10 ? 'Admis' : 'Refusé'}</p>
    </div>
  );
}

export default Resultat;