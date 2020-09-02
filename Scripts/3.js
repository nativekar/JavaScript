import React from "react";
import ShowsListComponent from "./ShowList";
import ShowsDetailsComponent from "./ShowDetails";

class ShowsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showList: [], showSelected: {}, flag: false, errorMsg: "" };
  }

  componentDidMount() {
    fetch("http://localhost:4000/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState = {
          showList: data,
        };
      })
      .catch((error) => {
        this.setState = {
          errorMsg: error,
        };
      });
    // make backend calls here with path => http://localhost:4000/posts
    // on success store the data in showList state
    // error message to be set to errorMsg
  }

  selectedObj = (obj) => {
    // state variable/s to be set here
  };

  goBack = () => {
    // state variable/s to be set here
  };

  errorView = () => {
    return (
      <div className="offset-sm-4 col-sm-5">
        <div className="card welcome">
          <div className="card-body">
            <span className="errorTextCenter offset-sm-4 col-sm-4">
              {this.state.errorMsg}
            </span>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { errorMsg, showList, showSelected } = this.state;

    // render ShowsListComponent and ShowsDetailsComponent conditionally depending of flag state
    if (errorMsg === "") {
      return (
        <div className="row">
          {/* If errorMsg is '', render ShowsListComponent by passing every element of 'showList' as 
          a "showSelected" prop. HINT: USE map() METHOD HERE.
                      else invoke this.errorView()                    
                      DONOT REMOVE THE EXISTING PROP HERE  */}

          {showList &&
            showList.map((show) => (
              <ShowsListComponent
                showSelected={show}
                detailObj={(obj) => this.selectedObj(obj)}
              />
            ))}
        </div>
      );
    }

    return (
      <div>
        {/* render ShowsDetailsComponent and 
                    pass state variable "showSelected" as a prop to ShowsDetailsComponent
                    DONOT REMOVE THE EXISTING PROP HERE */}

        <ShowsDetailsComponent
          selectedObj={showSelected}
          goBack={() => this.goBack()}
        />
      </div>
    );
  }
}

export default ShowsComponent;
