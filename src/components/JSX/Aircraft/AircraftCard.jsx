export default function AircraftCard({ ...props }) {
  return (
    <div
      className="aircraft-card"
      id={`aircraft-card-${props.jet.id}`}
      key={props.jet.id}
      style={{ backgroundImage: `url(${props.jet.png})` }}
      onClick={() => props.setCurrentOpenAircraftHero(props.jet.id)}
    >
      <div className="jet-name-div">
        <div className="jet-name">{props.jet.name}</div>
        <div className="jet-nickname">{`Aka: "${props.jet.nickname}"`}</div>
      </div>
      <div>
        <div id="overlay-aircraft-likes-container">
          <div id="overlay-aircraft-likes"></div>
        </div>
      </div>
    </div>
  );
}
