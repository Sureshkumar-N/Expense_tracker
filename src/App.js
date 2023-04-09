import React from "react";
import './App.css';
import  Header  from "./components/Header";
import Balance from "./components/Balance";
import Incomeexpenses from "./components/Incomeexpenses";
import TransactionList from "./components/TransactionList";
import Addtransaction from "./components/Addtransaction";
import GlobalProvider from "./context/GlobalState";
export default function App() {
  return(
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <Incomeexpenses />
        <TransactionList />
        <Addtransaction />
      </div>
    </GlobalProvider>
  );
}


