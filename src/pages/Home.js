import React from "react";
import "./Home.css";
import scrollToBottom from "../components/scrollbottom/scrollToBottom";

const Home = () => {
  const handleScrollToBottom = () => {
    scrollToBottom(); // Assuming scrollToBottom is a function to scroll to the bottom
  };

  return (
    <div className="home">
      <div className="text-container">
        <h2>Your Skill Is</h2>
        <h2 className="blue-text">Our Capital.</h2>
        <p>We risk while you receive up to 90% of the Profit.</p>
        <button onClick={handleScrollToBottom} className="scroll-btn">
          <img src="https://cdn-icons-png.flaticon.com/512/7613/7613775.png" alt="Learn More"/>
        </button>
      </div>
      <img src="https://fundingpips.com/static/84deede54bceaaa879e1e27771531cd8/43568/hero-dashboard.webp" alt="Description" className="home-img"/>
      <div className="trading-rules">
        <h2>Trading Rules</h2>
      </div>
      <div>
        <p>The Funding Pips Evaluation course consists of two phases: Student and Practitioner. Passing both phases is essential to becoming a Master trader. A dynamic trading system and solid risk management profile are crucial for success.

During the Student Phase, traders must achieve an 8% profit target without breaching any rules. Upon passing, they receive their Phase 2 account within 24 hours. The Practitioner Phase requires achieving a 5% profit target without rule violations.

Rules include a 5% Maximum Daily Loss limit based on starting equity or balance, and a 10% Maximum Loss Limit. Trading during news and over weekends is allowed, but certain restrictions apply, including profit deductions for trades during specific time windows around high-impact news events.

Traders are encouraged to trade as they see fit but are prohibited from exploiting MetaTrader inefficiencies or engaging in certain trading activities. Use of third-party Expert Advisors is limited to trade or risk management purposes only.

Remember: genuine trading skills are essential, and attempts to cheat will result in account termination.</p>
      </div>
      <img src="https://fundingpips.com/static/e3fc965c874d5f340304accf626cf228/a0a2b/hero2-dashboard.webp" alt="Description" className="home-img" />
    </div>
  );
};

export default Home;
