import Header from "./components/Header"
import Form from "./components/Form"
import { List } from "./components/List"
import { useState } from "react";

function App() {

  const[itemsList, setItemsList] = useState([]); 

  return (
    <main>
      <Header/>
      <section>
        <Form itemsList={itemsList} setItemsList={setItemsList}/>
        <List itemsList={itemsList}/>
      </section>
    </main>
  )
}

export default App
