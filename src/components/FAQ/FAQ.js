import React, { useState } from "react";
import FAQItem from "./FAQItem";
import "./FAQ.css";
import ReadMore1 from "./ReadMore1";

function FAQ() {
  const [value, setValue] = useState()
  

  return (
    <div>
     <h1 className="faq-title">FAQ Section</h1>
    <div className="faq">
      <h2>FAQ</h2>
      <FAQItem post={{id: 1, title: 'How do i get funded by Funding Pips'}} />
      <FAQItem post={{id: 2, title: 'Are there any running promotions or discounts?'}} />
      <FAQItem post={{id: 3, title: 'How does the Payout System work for accounts??'}} />
      <FAQItem post={{id: 4, title: 'How long can I be inactive on a trading account?'}} />
      <FAQItem post={{id: 5, title: 'How long do I have to complete the evaluation process, aka "Trading Period"?'}} />
    </div>
    </div>
  );
};

export default FAQ;
