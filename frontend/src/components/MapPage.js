import Header from "./Header";
import HeaderParagraph from "./HeaderParagraph";
import MapChart from "./MapChart";

function MapPage() {
  return (
    <div
      className="MapPage"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#4169e1",
        fill: "#68C5D3",
        fontSize: "200",
      }}
    >
      <Header></Header>
      <HeaderParagraph></HeaderParagraph>
      <MapChart></MapChart>
    </div>
  );
}

export default MapPage;
