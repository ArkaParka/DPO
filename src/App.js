import './App.css';
import AuthorizationButton from "./components/AuthorizationButton/AuthorizationButton";
import Modal from "./components/Modal/Modal";
import React, {useState} from "react";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data, setData] = useState({
        fields: [
            {value: 'Имя', name: 'firstName'},
            {value: 'Фамилия', name: 'lastName'},
            {value: 'Логин', name: 'username'},
            {value: 'Пароль', name: 'password'},
            {value: 'Email', name: 'email'},
        ]});

  return (
    <div className="App">
      <header className="App-header">
          <AuthorizationButton />
          { isModalOpen && <Modal data={data} /> }
      </header>
    </div>
  );
}

export default App;
