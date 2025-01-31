import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    setLoading(true);
    axios
      .get('http://api.quotable.io/random')
      .then((res) => {
        // console.log(res.data);
        setQuote(res.data.content);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ height: '100vh' }}
      >
        <div className="text-center">
          <h1>Generatore di Citazioni Casuali</h1>

          <div className="my-5">
            <button onClick={fetchQuote} className="btn btn-primary fs-5">
              Genera nuova citazione
            </button>
          </div>

          <div>
            <h3>{loading ? 'caricando...' : quote}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
