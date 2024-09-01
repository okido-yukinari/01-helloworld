/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function App() {
  return (
    <div className="App" css={center}>
      <h1>Hello World</h1>
    </div>
  );
}

const center = css({
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  height: `100vh`,
});

export default App;
