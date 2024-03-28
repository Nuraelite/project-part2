import React from "react";
import "./Home.css";
import scrollToBottom from "../components/scrollbottom/scrollToBottom";

const Home = () => {
  return (
    <div className="home">
      <div className="text-container">
        <h2>Your Skill Is</h2>
        <h2 className="blue-text">Our Capital.</h2>
        <p>We risk while you receive up to 90% of the Profit.</p>
        <button onClick={scrollToBottom} className="scroll-btn">
          <img src="https://cdn-icons-png.flaticon.com/512/7613/7613775.png" alt="Learn More"/>
        </button>
      </div>
      <img src="https://fundingpips.com/static/84deede54bceaaa879e1e27771531cd8/43568/hero-dashboard.webp" alt="Description" className="home-img"/>
      <div className="trading-rules">
        <h2>Trading Rules</h2>
        </div>
        <div>
        <p>We offer a Funding Pips Evaluation course which is based on two phases, student and practitioner, which you need to pass to become a Master trader aka funded trader. It's crucial that you have a dynamic trading system & risk management profile to pass the evaluation course. After you reach your profit target in Phase 2, your entire evaluation period will be manually reviewed by our Risk Team. This review process will be completed within two working days.

In the event of a breach of any of the rules referred to in this section, all positions on the broker's platform shall be closed immediately, the Customer’s Account will be closed and the right to payout will be revoked.

2.1. The Student Phase (Phase I)
The student phase is to test your trading skills while defining yourself as a trader. During the student phase, you must achieve a profit target of 8% without breaching any other rule.‍ Once passed, it takes 24 hours to receive your Phase 2 account.

2.2. The Practitioner Phase (Phase II)
The practitioner phase is just to confirm the results and outcomes of the student phase. During the practitioner phase, you must achieve a profit target of 5% without breaching any other rule.

‍2.3. 5% Maximum Daily Loss‍ Limit
The Maximum Daily Loss is the amount the trader is allowed to lose every day. For the purpose of this rule, the higher value between equity and balance will be used. This rule is set to 5% of the starting equity or balance every day. The rule states that the equity of the day, which is the result of the currently floating PnL (Profit and Loss) in sum with all closed positions of that day must not hit the Maximum Daily Loss Limit. The daily maximum loss resets at 00:00 CE(S)T/server every day.

‍2.4. 10% Maximum Loss Limit
The Maximum Loss Limit is the amount the equity or balance can't go below. This rule is set to 10% of the initial account size. For example, if the trader has a $100.000 account and the Maximum Loss Limit is 10%, the equity or balance can't go below $90.000 at any moment.

2.5. Allowed to hold trades during news and over the weekend

2.5.1. During the Evaluation (Student and Practitioner)
You are allowed to hold trades over the weekend and trade during the news in the evaluation stage.

2.5.2. During the Funded (Master only)
You are allowed to hold trades during news and over the weekend. Profit from trades that are opened 2 minutes prior to and after a high impact news event on the affected currency will not be counted. Our system will automatically close the affected trades that are opened within the prohibited time window. High impact News event trading will result in the deduction of any profits made from trades executed within the restricted 4-minute window. We use Forex Factory as our news calendar source. In the event any deductions result in the breach of the daily loss limit or maximum loss limit, the trader is responsible for the violation. Read more about news trading in our FAQ "Can I hold trades during news and over the weekend?"

Note: If there is a trade opened before the prohibited time window and closed in the prohibited time window, the trade will be counted.

2.6. Trading Strategy
Trade the way you want. Use an "EA", hold during news, hold trades over the weekend and trade lot sizes as big as the leverage allows for. However, Any Trading activities that are used to take advantage of MetaTrader inefficiencies (Gap trading, high frequency trading, server spamming, latency arbitrage, toxic trading flow, hedging, long short arbitrage, reverse arbitrage, tick scalping, server execution, opposite account trading) are all prohibited trading plus copy trading or account management by a third-party vendor will result in account termination, such activities with Funding Pips will result in account termination. Keep in mind that using a third-party Expert Advisor is allowed as long as it is a trade or risk manager. Using any other third-party Expert Advisor is not allowed. This will lead to a denial of the evaluation or payout and closure of the account.

Remember! YOUR IDEAS, OUR RISK. To get funded and grow as a trader you should be able to trade and have the right set of skills. YOU CANNOT CHEAT YOUR WAY IN.</p>
      </div>
      <img scr="https://fundingpips.com/static/e3fc965c874d5f340304accf626cf228/a0a2b/hero2-dashboard.webp" alt="Description" className="" />
    </div>
  );
};

export default Home;
