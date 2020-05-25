import React from "react";
import Header from "./Header";
import KegControl from "./KegControl";

function App(){
  return (
    <React.Fragment>
      <Header />
     {/* KegList /> */}
     <KegControl />
    </React.Fragment>
  );
}

export default App;