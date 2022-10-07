import "./App.css";
const App = () => {
  const message: string = "Hello World";
  const handleClick = (name: string) => alert(`Bonjour ${name} !`);
  const handleClickSansPara = () => alert("WTF");
  return (
    <div>
      <p className="color-pink">{message}</p>
      <button onClick={() => handleClick("Nico")}>Test Nico</button>
      {/* Tention, avec parametre on est obligé de rappeler la fonction avec ()=> voir ligne au dessus */}
      <p>coucou</p>
      {/* liaison de l'evenement click avc l appel de la fonction hanlCickSansParam sans parametre */}
      <button onClick={handleClickSansPara}>Un autre boutton</button>
    </div>
  );
};

export default App;
