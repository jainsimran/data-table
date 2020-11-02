import './App.css';
import React, {useState, useEffect}  from 'react';

function App() {
  const [result, setResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const link = 'https://jsonmock.hackerrank.com/api/countries?page=';

  useEffect(() => {
    fetch(link + currentPage)
      .then(res => res.json())
      .then(res => {
        setTotalPage(res.total_pages);
        setResult(res.data);
      })
  }, [currentPage])

  return (
    <div>
      {/* currentPage= {currentPage} */}
      <table>
        <tr>
          <th>Name</th>
          <th>Capital</th>
          <th>Region</th>
          <th>Population</th>
        </tr>
          {/* {JSON.stringify(result)} */}
          {result.map(result =>
            <tr>
              <td>{result.name}</td>
              <td>{result.capital}</td>
              <td>{result.region}</td>
              <td>{result.population}</td>
            </tr>
          )}
      </table>
      <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1 ? true : false}>First</button>
      <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1 ? true : false}>Previous</button>
      <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage >= totalPage ? true : false}>Next</button>
      <button onClick={() => setCurrentPage(totalPage)} disabled={currentPage >= totalPage ? true : false}>Last</button>
    </div>
  );
}

export default App;
