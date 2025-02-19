import DetailedOrder from "qgaffney/uber-eats-dashboard/src/modules/DetailedOrder/";
import Orders from "qgaffney/uber-eats-dashboard/src/modules/Orders/";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="" element={<DetailedOrder />}/>
    </Routes>
  );
}



export default App;
