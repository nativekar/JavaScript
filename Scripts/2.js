import React from "react";
class ShowsListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: this.props.showSelected,
      // declare "showList" and assign "showSelected" props
    };
  }

  viewDetails = (selObj) => {
    // send "selObj" value as a prop to ShowsComponent
  };

  render() {
    const { showList } = this.state;
    return (
      <div className="col-sm-4">
        <div
          className="content card text-white bg-dark mb-3"
          style={{ height: "400px", marginLeft: "60px", width: "320px" }}
        >
          <div className="card-header">
            <img
              src={"imageURL to be added here"}
              className="card-img-top"
              alt="Not Found"
            />
          </div>
          <div className="card-body text-justify">
            <p className="card-title text-center">
              <strong>SHOW NAME TO BE ADDED HERE</strong>
            </p>
            <p className="card-text">SHOWLIST DESCRIPTION TO BE ADDED HERE</p>
            <button
              className="btn btn-info col-sm-12"
              onClick={() => this.viewDetails(showList)}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default ShowsListComponent;
