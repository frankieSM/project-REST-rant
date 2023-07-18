const React = require("react");
const Def = require("../default");

function show(data) {
  let comments = ( //CHECK COMMENTS ARRAY LENGTH TO SHOW COMMENT LENGTH
    <h3 classname='inactive'>
      No comments yet!
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong> 
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
  return (
    <Def>
<main>
  <div class="row">
    <div class="col-md-6">
      <img src={data.place.pic} alt={data.place.name} />
      <h3>
        Located in {data.place.city}, {data.place.state}
      </h3>
    </div>
    <div class="col-md-6">
      <h1>{data.place.name}</h1>
      <div>
        <h2>Rating</h2>
        <p>Currently Unrated</p>
      </div>
      <div>
        <h2>Description</h2>
        <h3>{data.place.showEstablished()}</h3>
        <h4>Serving {data.place.cuisines}</h4>
      </div>
      <a href={`/places/${data.id}/edit`} class="btn btn-warning">
        Edit
      </a>
      <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
        <button type="submit" class="btn btn-danger">
          Delete
        </button>
      </form>
    </div>
  </div>
  <div class="text-center">
    <h2>Comments</h2>
    {comments}
  </div>
</main>

    </Def>
  );
}

module.exports = show;

