import { Provider } from "react-redux";
import TransactionHistory from "../features/transactions/TransactionHistory";
import Transactions from "../features/transactions/Transactions";

import "./app.css";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <main>
        <h1>Bank Account</h1>
        <Transactions />
        <TransactionHistory />
        </main>
    </Provider>
  );
}
