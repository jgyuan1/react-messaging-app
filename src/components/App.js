import Login from "./Login";
import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Dashboard from "./Dashboard";
import { ContactsProvider } from "../contexts/ContactsProvider";
import { ConversationsProvider } from "../contexts/ConversationsProvider";

function App() {
  const [id, setId] = useLocalStorage("id");
  const dashboard = (
    <>
      <ContactsProvider id={id}>
        <ConversationsProvider>
          <Dashboard id={id}></Dashboard>
        </ConversationsProvider>
      </ContactsProvider>
    </>
  );
  return id ? dashboard : <Login onIdSubmit={setId} />;
}

export default App;
