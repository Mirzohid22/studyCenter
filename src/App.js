import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import SiteNavbar from "./components/navbar/navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <SiteNavbar />
        <div className="content">This is a content</div>
      </>
    );
  }
}
export default App;
