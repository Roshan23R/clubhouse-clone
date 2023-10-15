import "./App.css";
import Welcome from "./pages/Welcome";
import PlanLayout from "./pages/Layouts/PlanLayout";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import CodeConfirm from "./pages/CodeConfirm";
import AllowNotification from "./pages/AllowNotification";
import AppLayout from "./pages/Layouts/AppLayout";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <PlanLayout>
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/invite" element={<PhoneConfirmation />} />
            <Route exact path="/code_confirm" element={<CodeConfirm />} />
            <Route
              exact
              path="/allow_notification"
              element={<AllowNotification />}
            />
          </Routes>
      </PlanLayout>
      <AppLayout>
        <Routes>
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
