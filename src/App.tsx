import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer";
import { client } from "./lib/apollo";
import { Router } from "./Router";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router/>
        <Footer/>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App;