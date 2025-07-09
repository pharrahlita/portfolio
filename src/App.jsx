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
          {/* your actual site content */}
        </div>
      )}
    </>
  );
}

export default App;