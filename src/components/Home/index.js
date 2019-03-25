import React, { Component } from "react";
import image from "assets/image.jpg";
import city from "assets/city.jpg";
import { HeaderTitleWrapper, Wrapper, OuterWraper } from "./styles";
import { ParallaxBanner } from "react-scroll-parallax";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { currentImage: image };
  }
  componentDidMount() {
    this.changeImage();
  }

  changeImage() {
    setTimeout(() => {
      if (this.state.currentImage === image) {
        this.setState({ currentImage: city });
      } else {
        this.setState({ currentImage: image });
      }
      this.changeImage();
    }, 3000);
  }

  render() {
    return (
      <OuterWraper>
        <ParallaxBanner
          style={{ height: "100vh" }}
          layers={[
            {
              image: this.state.currentImage,
              amount: 0.3,
              expandend: true
            }
          ]}
        >
          <Wrapper>
            <HeaderTitleWrapper>
              {"Creating questions to resolve challenges"}
            </HeaderTitleWrapper>
          </Wrapper>
        </ParallaxBanner>
      </OuterWraper>
    );
  }
}
