import React, { Component } from "react";
import PropTypes from "prop-types";
import presence from "assets/images/presence.jpg";
import automatize from "assets/images/automatize.jpg";
import handshake from "assets/images/handshake.jpg";
import MouesIcon from "assets/icons/MouseIcon.js";
import {
  HeaderTitleWrapper,
  Wrapper,
  OuterWraper,
  MouseIconWrapper
} from "./styles";
import { ParallaxBanner } from "react-scroll-parallax";
import ImagesLoader from "./ImagesLoader";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { currentImage: presence, currentText: presence };
  }
  componentDidMount() {
    this.changeTimer();
  }

  changeTimer() {
    setTimeout(() => {
      if (this.state.currentImage === handshake) {
        this.changeImageAndText(presence);
      } else if (this.state.currentImage === presence) {
        this.changeImageAndText(automatize);
      } else {
        this.changeImageAndText(handshake);
      }
      this.changeTimer();
    }, 3000);
  }

  changeImageAndText(image) {
    this.setState({ currentImage: image }, () =>
      this.setState({ currentText: image })
    );
  }

  render() {
    return (
      <OuterWraper>
        <ImagesLoader images={[handshake, presence, automatize]} />
        <ParallaxBanner
          style={{ height: "100vh" }}
          layers={[
            {
              image: this.state.currentImage,
              amount: 0.05,
              expandend: true
            }
          ]}
        >
          <Wrapper>
            <HeaderTitleWrapper
              style={{
                display: this.state.currentText !== presence && "none"
              }}
            >
              {"Enhance your online presence"}
            </HeaderTitleWrapper>
            <HeaderTitleWrapper
              style={{
                display: this.state.currentText !== automatize && "none"
              }}
            >
              {"Automatize"}
            </HeaderTitleWrapper>
            <HeaderTitleWrapper
              style={{
                display: this.state.currentText !== handshake && "none"
              }}
            >
              {"Improve your business"}
            </HeaderTitleWrapper>
            <MouseIconWrapper show={this.props.top}>
              <MouesIcon size={120} />
            </MouseIconWrapper>
          </Wrapper>
        </ParallaxBanner>
      </OuterWraper>
    );
  }
}

Home.propTypes = {
  top: PropTypes.bool
};
