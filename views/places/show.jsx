const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <h1>{data.place.name}</h1>
        <div>
          <h2>Rating</h2>
          <p>Currently Unrated</p>
        </div>
        <div>
          <h2>Description</h2>
          <p>Located in {data.place.city} , {data.place.state} and serving {data.place.cuisines}</p>
        </div>
        <div>
          <h2>Comments</h2>
          <p>No comments yet!</p>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
