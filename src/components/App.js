import React, { Component } from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = (value) => {
    console.log(value, "value");
    this.setState((prevState) => ({
      [value]: prevState[value] + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = (total, positive) => {
    return Math.round((positive * 100) / total);
  };

  render() {
    const { good, neutral, bad } = this.state;

    const total = this.countTotalFeedback();
    const positivePercantage = this.countPositiveFeedbackPercentage(
      total,
      good
    );

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        {this.countTotalFeedback() > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercantage={positivePercantage}
            />
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
      </>
    );
  }
}
export default App;
