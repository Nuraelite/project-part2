  import React from 'react';
  import { Link } from 'react-router-dom'; 
  import './BuyChallenges.css'; 

  const BuyChallenges = () => {
    return (
      <div className="buy-challenges">
        <div className="buy-challenges-container">
          <h1 className="buy-challenges-title">Buy Challenges</h1>
          <table className="buy-challenges-table">
            <thead>
              <tr>
                <th>Subscription Type</th>
                <th>Trading Period</th>
                <th>Minimum Trading Days</th>
                <th>Maximum Daily Loss</th>
                <th>Profit Target</th>
                <th>Leverage</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="buy-challenges-card">
                <td>Student</td>
                <td>∞</td>
                <td>0 days</td>
                <td>5%</td>
                <td>$8,000 (8%)</td>
                <td>1:100</td>
                <td></td> 
              </tr>
              <tr className="buy-challenges-card">
                <td>Practitioner</td>
                <td>∞</td>
                <td>0 days</td>
                <td>5%</td>
                <td>$5,000 (5%)</td>
                <td>1:100</td>
                <td></td>
              </tr>
              <tr className="buy-challenges-card">
                <td>Master</td>
                <td>∞</td>
                <td>0 days</td>
                <td>Maximum Loss</td>
                <td>$5,000 (5%)</td>
                <td>1:100</td>
                <td></td>
              </tr>
              <tr className="buy-challenges-card">
                <td>Buy Challenge</td>
                <td>For 100K account</td>
                <td>Refund + Profit Splits: 10%</td>
                <td>1:100</td>
                <td>$399</td>
                <td>
                <a href="register.html" class="buy-button">Buy Now</a>
                </td> 
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  export default BuyChallenges;
