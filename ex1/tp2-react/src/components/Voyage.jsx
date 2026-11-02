
function Voyage() {
  const budget = 1500;

  return (
    <div>
      <h2>Choix du voyage</h2>

      {budget >= 2000
        ? "Voyage premium"
        : budget >= 1000
        ? "Voyage économique"
        : "Budget insuffisant"}
    </div>
  );
}

export default Voyage;

