import styles from "./App.module.scss";
import { useEffect, useState } from "react";
import getSheetRow from "./services";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const sid = urlParams.get("sid");
    getSheetRow(sid).then(setData);
  }, []);
  return (
    <div className={styles.App}>
      <div>
        {data !== null && (
          <>
            <h2>{data.name}</h2>
            <p>
              <i>{data.email}</i>
            </p>
            <p>{data.wish}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
