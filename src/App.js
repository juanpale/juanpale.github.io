import React, { Component } from "react";
import "./App.css";
import Contact from "components/Contact";
import TopBanner from "components/TopBanner";
import Home from "components/Home";
import About from "components/About";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { topBannerWithBackground: false };
    this.wrapperRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("scroll", () => this.handleScroll());
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", () => this.handleScroll());
  }

  handleScroll() {
    this.setState({
      topBannerWithBackground: document.documentElement.scrollTop > 0
    });
  }

  render() {
    return (
      <div className="App">
        <div className="vertical">
          <TopBanner
            topBannerWithBackground={this.state.topBannerWithBackground}
          />
          <Home />
          <About />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
