
function Etudiant() {
  const nom = "Ahmed";
  const prenom = "Ali";
  const age = 20;
  const filiere = "Informatique";

  return (
    <div>
      <h2>Informations de l'étudiant</h2>

      <p>Nom : {nom}</p>
      <p>Prénom : {prenom}</p>
      <p>Âge : {age}</p>
      <p>Filière : {filiere}</p>

      <p>Nom complet : {prenom} {nom}</p>
    </div>
  );
}

export default Etudiant;
