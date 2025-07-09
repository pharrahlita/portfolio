import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <div>
          {/* main site goes here */}
          <h1>access granted: siany.dev</h1>
        </div>
      )}
    </>
  );
}

export default App;