import React, { Component } from "react";
import "./App.css";
import Contact from "components/Contact";
import TopBanner from "components/TopBanner";
import Home from "components/Home";
import About from "components/About";
import { colors } from "assets/colors";
import { Element } from "react-scroll";

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
        <div className="vertical" style={{ background: colors.background }}>
          <TopBanner
            topBannerWithBackground={this.state.topBannerWithBackground}
          />
          <Element name="Home">
            <Home />
          </Element>
          <Element name="About">
            <About />
          </Element>
          <Element name="Contact">
            <Contact />
          </Element>
        </div>
      </div>
    );
  }
}

export default App;
