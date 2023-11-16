import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      var apiText = '';


      apiText = await( await fetch(`/api/message?name=Ali`)).json();
      console.log('apiText: ' + apiText);
      setData(apiText);
    })();
  });

  return <div>{data}</div>;
}

export default App;



/*

import React from 'react';

function App() {
  const value = 'World';
  return <div>Hello {value}</div>;
}

export default App;

*/