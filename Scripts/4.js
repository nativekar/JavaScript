import React from "react";

import ShowsListComponent from "./ShowList";
import ShowsDetailsComponent from "./ShowDetails";

class ShowsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showList: [], showSelected: {}, flag: false, errorMsg: "" };
  }

  componentDidMount() {
    // make backend calls here with path => http://localhost:4000/posts
    // on success store the data in showList state
    // error message to be set to errorMsg
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
    // render ShowsListComponent and ShowsDetailsComponent conditionally depending of flag state
    return (
      <div className="row">
        {/* If errorMsg is '', render ShowsListComponent by passing every element of 'showList' as a "showSelected" prop. HINT: USE map() METHOD HERE.
                    else invoke this.errorView()                    
                    DONOT REMOVE THE EXISTING PROP HERE  */}
        return (
        <ShowsListComponent
          showSelected={`each element of show array`}
          detailObj={(obj) => this.selectedObj(obj)}
        />
        )
      </div>
    );

    return (
      <div>
        {/* render ShowsDetailsComponent and 
                    pass state variable "showSelected" as a prop to ShowsDetailsComponent
                    DONOT REMOVE THE EXISTING PROP HERE */}

        <ShowsDetailsComponent selectedObj={""} goBack={() => this.goBack()} />
      </div>
    );
  }
}

export default ShowsComponent;
