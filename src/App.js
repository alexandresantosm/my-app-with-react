import React from 'react';

import TextCounter from './components/TextCounter';
import MyForm from './components/MyForm';
import MyForm2 from './components/MyForm2';

function App() {
  return (
    <>
      <TextCounter limit={20} />
      <MyForm />
      <hr />
      <MyForm2 />
    </>
  );
}

export default App;
