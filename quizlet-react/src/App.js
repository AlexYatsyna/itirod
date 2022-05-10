import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Auth from "./components/Auth/Auth";
import Register from "./components/Auth/Register";
import Coment from "./components/main/Coment";
import './App.css'
import Add from "./components/main/Add";
import { Route, Routes } from "react-router-dom";
import CategoryForm from "./components/main/CategoryForm";


const App = () => {
    return (
      <div>
        <Header />
          <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/category/:id" element= {<CategoryForm />} />
                <Route path="/new-card" element={<Add />} />
                <Route path="/new-comment" element={<Coment />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<Main />} />
          </Routes>
        <Footer />
      </div>
    );
  }

export default App;
