import React, { useState } from "react";

function ShowsDetailsComponent(props) {
  const { selectedObj } = props;
  const [selectedObjDetails, setSelectedObjDetails] = useState(selectedObj);
  // declare state variable with "selectObjDetails" with value as "selectedObj"
  // HINT: USE LIFE CYCLE HOOK

  const goBack = () => {
    // update "showSelected" of ShowsComponent to an empty object{}
    // HINT CHILD TO PARENT DATA COMMUNICATION
    const { showSelected } = this.state;
    this.setState({
      showSelected: {},
    });
  };

  return (
    <div className="row">
      <div className="cardStyle offset-sm-4 col-sm-5">
        <div className="card text-white bg-dark mb-3">
          <div className="card-header">
            <h4>SHOW NAME TO BE ADDED HERE</h4>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-6">
                <img
                  src={"imageURL from selectObjDetails to be added here"}
                  height={"200px"}
                  className="card-img-top"
                  alt="Not Found"
                />
              </div>
              <div className="col-sm-6">
                <p className="card-text text-justify">
                  <strong>Description: </strong>DESCRIPTION FROM
                  SELECTOBJDETAILS TO BE ADDED HERE
                </p>
                <p className="card-text">
                  <strong>No of episodes: </strong>EPISODE LENGTH FROM
                  SELECTOBJDETAILS TO BE ADDED HERE
                </p>
                {/* Create Subscribe Link here with className="btn btn-success" */}
                {/* Create a Link as 'back' with
                 * className="btn btn-info backBtn"
                 * and on clicking it, invoke with goBack()
                 */}
                <p className="btn btn-success">
                  <button
                    className="btn btn-info backBtn"
                    onClick={() => this.goBack}
                  >
                    Back
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowsDetailsComponent;
