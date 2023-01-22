import Canada from "./Canada";
import China from "./China"

function CountryPage(props) {
  
  if (props.country == "Canada") {
    return <Canada></Canada>
  } else if (props.country == "China") {
    return <China></China>
  } else {
    return (
      <div>
        <h1>Welcome to {props.country}</h1>
        <p>these are our notes</p>
        <countrypage></countrypage>
      </div>
    );
  }

}

export default CountryPage;
