import React from "react";
import Header from "./components/Header";
import Part1 from "./components/Part1";
import Part2 from "./components/Part2";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Header />
      <main className="container my-4">
        <Part1 />
        <Part2 />
      </main>
      <Footer />
    </>
  );
}

export default App;
