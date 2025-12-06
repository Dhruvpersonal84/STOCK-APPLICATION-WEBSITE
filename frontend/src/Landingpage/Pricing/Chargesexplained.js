export default function Charges() {
    return (
        <div className="container p-5 text-muted">
            <h3 className="fs-3" style={{marginLeft:"55px"}}>Charges explained</h3>
            <div className="row p-4 m-4 text-muted">
                <div className="col-6">
                    <h5 class="head">Securities/Commodities transaction tax</h5>
                    <p class="text">Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
                    <br></br>
                    <p class="text">When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>
                    <br></br>

                    <h5 class="head">Transaction/Turnover Charges</h5>
                    <p class="text">Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
                    <br></br>
                    <p class="text">BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
                    <br></br>
                    <p class="text">BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>
                    <br></br>
                    <p class="text">BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
                    <br></br>
                    <p class="text">BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>
                    <br></br>

                    <h5 class="head">Call & trade</h5>
                    <p class="text">Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>
                    <br></br>

                    <h5 class="head">Stamp charges</h5>
                    <p class="text">Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>
                    <br></br>

                    <h5 class="head">NRI brokerage charges</h5>
                    <ul class="text">
                        <li>For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is lower).</li>
                        <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                    </ul>
                    <br></br>

                    <h5 class="head">Account with debit balance</h5>
                    <p class="text">If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>
                    <br></br>

                    <h5 class="head">Charges for Investor's Protection Fund Trust (IPFT) by NSE</h5>
                    <ul class="text">
                        <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                        <li>Options - ₹50 per crore + GST traded value (premium value).</li>
                        <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
                    </ul>
                    <br></br>
                    <br></br>
                </div>

                <div className="col-6">
                    <h5 class="head">GST</h5>
                    <p class="text">Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>
                    <br></br>

                    <h5 class="head">SEBI Charges</h5>
                    <p class="text">Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>
                    <br></br>

                    <h5 class="head">DP (Depository participant) charges</h5>
                    <p class="text">₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
                    <p class="text">Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
                    <p class="text">Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>
                    <br></br>

                    <h5 class="head">Pledging charges</h5>
                    <p class="text">₹30 + GST per pledge request per ISIN.</p>
                    <br></br>

                    <h5 class="head">AMC (Account maintenance charges)</h5>
                    <p class="text">For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, Click here</p>
                    <p class="text">For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, Click here</p>
                    <br></br>

                    <h5 class="head">Corporate action order charges</h5>
                    <p class="text">₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>
                    <br></br>

                    <h5 class="head">Off-market transfer charges</h5>
                    <p class="text">₹25 per transaction.</p>
                    <br></br>

                    <h5 class="head">Physical CMR request</h5>
                    <p class="text">First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</p>
                    <br></br>

                    <h5 class="head">Payment gateway charges</h5>
                    <p class="text">₹9 + GST (Not levied on transfers done via UPI)</p>
                    <br></br>

                    <h5 class="head">Delayed Payment Charges</h5>
                    <p class="text">Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. Learn more.</p>
                    <br></br>

                    <h5 class="head">Trading using 3-in-1 account with block functionality</h5>
                    <ul>
                        <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
                        <li>Intraday Brokerage: 0.05% per executed order.</li>
                    </ul>
                    <br></br>
                </div>
            </div>
            <h5 class="head">Disclaimer</h5>
            <br></br>
            <p>For Delivery based trades, a minimum of ₹0.01 will be charged per 
                contract note. Clients who opt to receive physical contract notes 
                will be charged ₹20 per contract note plus courier charges. Brokerage
                 will not exceed the rates specified by SEBI and the exchanges. All 
                 statutory and regulatory charges will be levied at actuals. Brokerage 
                 is also charged on expired, exercised, and assigned options contracts. 
                 Free investments are available only for our retail individual clients. 
                 Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 
                 (whichever is less) as delivery brokerage. A brokerage of 0.25% of 
                 the contract value will be charged for contracts where physical delivery 
                 happens. For netted off positions in physically settled contracts, a brokerage 
                 of 0.1% will be charged.
            </p>
        </div>
    )
}