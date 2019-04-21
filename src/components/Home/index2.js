import React, { Component } from "react";
import challenge from "assets/images/challenge1.jpg";
import questions from "assets/images/questions.jpg";
import plan from "assets/images/plan.jpg";
import { HeaderTitleWrapper, Wrapper, OuterWraper } from "./styles";
import { ParallaxBanner } from "react-scroll-parallax";
import ImagesLoader from "./ImagesLoader";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { currentImage: questions, currentText: questions };
  }
  componentDidMount() {
    this.changeTimer();
  }

  changeTimer() {
    setTimeout(() => {
      if (this.state.currentImage === challenge) {
        this.changeImageAndText(questions);
      } else if (this.state.currentImage === questions) {
        this.changeImageAndText(plan);
      } else {
        this.changeImageAndText(challenge);
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
        <ImagesLoader />
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
            <HeaderTitleWrapper
              style={{
                display: this.state.currentText !== questions && "none"
              }}
            >
              {"Make questions"}
            </HeaderTitleWrapper>
            <HeaderTitleWrapper
              style={{ display: this.state.currentText !== plan && "none" }}
            >
              {"Plan"}
            </HeaderTitleWrapper>
            <HeaderTitleWrapper
              style={{
                display: this.state.currentText !== challenge && "none"
              }}
            >
              {"Face the challenge"}
            </HeaderTitleWrapper>
          </Wrapper>
        </ParallaxBanner>
      </OuterWraper>
    );
  }
}
