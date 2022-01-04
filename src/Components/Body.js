
export default function Body() {
    return (
      <div className="card mt-3 ">
        <div className="card-body d-flex flex-column align-content-center ">
          <h5 className="card-title text-center"> Post </h5>
          <img src="https://www.picsum.photos/200" />
          <p className="card-text">
            Captain Kapil Dev led a team from India, seen as underdogs, to bring
            home the country’s first-ever World Cup title in the year 1983. Kabir
            Khan’s ‘83'.
          </p>
          <input type="button" value="Click here" className="btn btn-primary" />
        </div>
      </div>
    );
  }