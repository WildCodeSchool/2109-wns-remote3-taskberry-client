import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./store/auth-context";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ProjectProvider } from "./providers/ProjectProvider";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <AuthContextProvider>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <ProjectProvider>
          <App />
        </ProjectProvider>
      </ApolloProvider>
    </BrowserRouter>
  </AuthContextProvider>,
  document.getElementById("root")
);
