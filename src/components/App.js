import React from "react";

const App = () => {
  let relativesList = ["Srikanth", "Rambabu", "Jaya Chandra", "Vishnu"];
  return (
    <div id="main">
      {/* Do not remove the main div */}
      <ol>
        {relativesList.map((ele, idx) => (
          <li key={`relativeListItem${idx + 1}`}>{ele}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;
