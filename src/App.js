import { Routes, Route, Navigate } from "react-router-dom";
import Quotes from "./components/Quotes/quotes";
import Header from "./components/UI/header";
import QuotesDetail from "./components/QuotesDetail/QuotesDetail";
import AddQuote from "./components/AddQuote/AddQuote";
import ContextProvider from "./store/context-provider";
import "./App.css";

function App() {

  return (
    <div className="App">
      <Header></Header>
      <ContextProvider>
        <main>
          <Routes>
            <Route path="/quotes" element={<Quotes></Quotes>} />

            <Route path="/addQuotes" element={<AddQuote />} />

            <Route
              path="quotes/:quoteID/*"
              element={<QuotesDetail></QuotesDetail>}
            />

            <Route path="/" element={<Navigate to="/quotes"></Navigate>} />
          </Routes>
        </main>
      </ContextProvider>
    </div>
  );
}

export default App;
