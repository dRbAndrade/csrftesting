import { TheScaffold } from "src/components";
import { HomeView, LoginView, SignupView, ProductDetailsView } from "src/views"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { GlobalProvider } from "src/store";

function App() {

  return (
    <Router>
      <GlobalProvider>
        <TheScaffold>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/signup" element={<SignupView />} />
            <Route path="/products/:id" element={<ProductDetailsView />} />
          </Routes>
        </TheScaffold>
      </GlobalProvider>
    </Router>
  );
}

export default App;
