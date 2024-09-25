import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <>
      <h1 style={{ color: "#8a959f" }}>Resorts Life</h1>
      <div className="country">
        <Card
<<<<<<< HEAD
          country="Indonesia"
=======
          country="Indonesia  "
>>>>>>> e5891ef4837b87eb0a47e568b292c701966cf12b
          name="Gili Air Hotel"
          image="src/assets/1.jpg"
          price="$589/night"
          rating="4.8 ★"
        />
        <Card
<<<<<<< HEAD
          country="Seychelles"
=======
          country="Seychelles  "
>>>>>>> e5891ef4837b87eb0a47e568b292c701966cf12b
          name="Hilton Resort"
          image="src/assets/2.jpg"
          price="$692/night"
          rating="4.2 ★"
        />
        <Card
          country="Us Virgin Island"
          name="Goa Resort"
          image="src/assets/3.jpg"
          price="$485/night"
          rating="3.5 ★ "
        />
        <Card
          country="Bahamas"
          name="Kuredu Resort"
          image="src/assets/4.jpg"
          price="$729/night"
          rating="4.1 ★"
        />
        <Card
          country="Mauritius"
          name="Trou D'eau Douce"
          image="src/assets/5.jpg"
          price="$877/night"
          rating="4.9★ "
        />
        <Card
          country="Bermuda"
          name="Staniel Cay Hotel"
          image="src/assets/6.jpg"
          price="$365/night"
          rating="3.2 ★"
        />
      </div>
    </>
  );
}

export default App;
