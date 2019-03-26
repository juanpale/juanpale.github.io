import React, { Component } from "react";
import challenge from "assets/challenge1.jpg";
import questions from "assets/questions.jpg";
import plan from "assets/plan.jpg";
import { HeaderTitleWrapper, Wrapper, OuterWraper } from "./styles";
import { ParallaxBanner } from "react-scroll-parallax";
export const imageTransitionSeconds = 0.8;

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
      setTimeout(
        () => this.setState({ currentText: image }),
        imageTransitionSeconds * 1000 * 0.5
      )
    );
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
            {this.state.currentText === questions && (
              <HeaderTitleWrapper>{"Make questions"}</HeaderTitleWrapper>
            )}
            {this.state.currentText === plan && (
              <HeaderTitleWrapper>{"Plan"}</HeaderTitleWrapper>
            )}
            {this.state.currentText === challenge && (
              <HeaderTitleWrapper>{"Face the challenge"}</HeaderTitleWrapper>
            )}
          </Wrapper>
        </ParallaxBanner>
      </OuterWraper>
    );
  }
}
