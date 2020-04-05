import React from 'react';
import Navbar from "../components/Navbar.component";
import Background from "../components/Background.component";
import ThemeState from "../contexts/theme/ThemeState";

const App = () => {
  return (
      <ThemeState>
          <Background>
              <Navbar name={'Empty react project'}/>
              <main className={'container text-center'}>
                  <h1>This is an empty react project <span className={'badge badge-success'}>v. 1.0</span></h1>
                  <h2>packets installed: <span className={'badge badge-primary'}>Bootstrap 4.4.1</span></h2>
                  <h2>features included: <span className={'badge badge-secondary'}>dark mode</span></h2>
              </main>
          </Background>
      </ThemeState>
  );
};

export default App;
