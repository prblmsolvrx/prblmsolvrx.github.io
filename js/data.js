const TIERS = [
  { id: 'beginner',     label: 'BEGINNER',     levels: [1,2,3,4,5],       color: '#6b6b80' },
  { id: 'foundation',   label: 'FOUNDATION',   levels: [6,7,8,9,10],      color: '#22d3ee' },
  { id: 'practitioner', label: 'PRACTITIONER', levels: [11,12,13,14,15],  color: '#00E5FF' },
  { id: 'advanced',     label: 'ADVANCED',     levels: [16,17,18,19,20],  color: '#38bdf8' },
  { id: 'expert',       label: 'EXPERT',       levels: [21,22,23,24,25],  color: '#818cf8' },
  { id: 'master',       label: 'MASTER',       levels: [26,27,28,29,30],  color: '#f59e0b' }
];

const LEVELS = [
  {
    id: 1, tier: 'beginner', module: 'Mindset Engine',
    title: 'Probabilistic Thinking & Trading Mindset',
    content: `<h2>Probabilistic Thinking & Trading Mindset</h2>
<p>Professional traders do not think in certainties — they think in distributions. Every trading decision is a bet on a probability-weighted outcome. The mindset shift from "I think X will happen" to "X has a 65% probability of happening and the payout is 2:1" is foundational to all quantitative work.</p>
<h3>Bayesian Reasoning</h3>
<p>Bayesian reasoning means continuously updating your beliefs as new evidence arrives. Start with a prior (your initial belief), observe evidence, and compute a posterior (updated belief). In markets, priors come from models; evidence comes from price action, order flow, and news. A trader who anchors to priors and ignores evidence gets destroyed by the market.</p>
<h3>Expected Value Parsing</h3>
<p>Every trade has an expected value: EV = Σ(probability_i × outcome_i). A positive EV trade is worth taking even if it loses most of the time, provided the wins are large enough. Understanding EV deeply prevents the gambler's fallacy and helps separate skill from luck over a large sample.</p>
<h3>Process Over Outcome</h3>
<p>In any single trade, variance dominates. A good process can produce bad outcomes; a bad process can produce lucky wins. Professionals evaluate decisions on process quality, not outcome. A losing trade made for the right reasons is better than a winning trade made for the wrong reasons.</p>
<h3>The Role of Uncertainty</h3>
<p>Markets are non-stationary, adversarial, and partially observable. Embracing uncertainty — rather than seeking false certainty — is what separates sustainable traders from gamblers. Risk management exists precisely because uncertainty cannot be eliminated, only quantified and bounded.</p>`,
    quiz: [
      { q: 'A trade wins 35% of the time but pays 3:1 when it wins. What is its expected value per $1 risked?',
        opts: ['$0.05 (positive EV)', '$0.35 (break-even)', '-$0.05 (negative EV)', '$1.05 (highly positive)'], a: 0 },
      { q: 'Bayesian reasoning requires you to:',
        opts: ['Commit to a single hypothesis and defend it', 'Update beliefs as new evidence arrives', 'Ignore prior knowledge when new data appears', 'Only act when probability exceeds 90%'], a: 1 },
      { q: 'Why is evaluating decisions on process rather than outcome important in trading?',
        opts: ['Outcomes are always wrong in the short run', 'Single-trade variance can make good decisions look bad', 'Process evaluation is required by regulators', 'It reduces emotional attachment to profits'], a: 1 },
      { q: 'A trader doubles down on a losing position because "it has to reverse." This is an example of:',
        opts: ['Bayesian updating', 'Expected value optimization', 'Anchoring to a prior, ignoring evidence', 'Correct risk management'], a: 2 },
      { q: 'Markets are described as non-stationary. This means:',
        opts: ['Prices never move', 'Statistical properties change over time', 'All assets are correlated', 'Models trained on old data always work'], a: 1 }
    ]
  },
  {
    id: 2, tier: 'beginner', module: 'Mindset Engine',
    title: 'Kelly Criterion & Bet Sizing',
    content: `<h2>Kelly Criterion & Bet Sizing</h2>
<p>The Kelly Criterion is the mathematically optimal fraction of capital to risk on each bet, given a known edge and payout structure. Over-betting leads to ruin; under-betting leaves money on the table. Kelly maximizes the geometric growth rate of a bankroll.</p>
<h3>The Kelly Formula</h3>
<p>For a bet with win probability p, loss probability q=(1-p), and odds b (win b units per 1 unit risked): <strong>f* = (bp - q) / b</strong>. For a 60% win rate at 1:1 odds: f* = (1×0.6 - 0.4)/1 = 0.2, so bet 20% of capital.</p>
<h3>Fractional Kelly</h3>
<p>Full Kelly is theoretically optimal but requires exact knowledge of p and b. In practice, these are estimated with error, so practitioners use half-Kelly or quarter-Kelly. This sacrifices some expected growth for dramatically reduced drawdown risk. Most institutional traders never exceed half-Kelly.</p>
<h3>Kelly in Continuous Markets</h3>
<p>In financial markets with continuous returns, Kelly extends to: f* = μ/σ² (mean return divided by variance). This is the Sharpe ratio scaled by volatility. High-Sharpe strategies can support higher position sizes; low-Sharpe strategies require smaller sizes to avoid ruin.</p>
<h3>Common Mistakes</h3>
<p>Over-betting Kelly — even by 2x — can reduce long-run growth to zero or produce ruin. The Kelly surface is asymmetric: under-betting costs you growth linearly, but over-betting costs you growth (and eventually capital) exponentially.</p>`,
    quiz: [
      { q: 'Using the Kelly formula, what is the optimal bet size when p=0.55, q=0.45, and b=1 (even odds)?',
        opts: ['5%', '10%', '15%', '20%'], a: 1 },
      { q: 'Why do most institutional traders use half-Kelly or less?',
        opts: ['Regulations require it', 'To reduce drawdown risk when p and b are estimated with error', 'Full Kelly is computationally too expensive', 'Exchanges limit position sizes'], a: 1 },
      { q: 'In continuous financial markets, the Kelly fraction is proportional to:',
        opts: ['Price volatility only', 'The Sharpe ratio divided by volatility', 'Mean return divided by variance (μ/σ²)', 'The reciprocal of the Sharpe ratio'], a: 2 },
      { q: 'Doubling your Kelly-optimal bet size will:',
        opts: ['Double your long-run growth rate', 'Have no effect since EV doubles too', 'Reduce long-run growth to zero or cause ruin', 'Halve your drawdown probability'], a: 2 },
      { q: 'The Kelly Criterion maximizes:',
        opts: ['Expected value of each bet', 'Probability of winning each bet', 'Geometric growth rate of bankroll', 'Sharpe ratio of the portfolio'], a: 2 }
    ]
  },
  {
    id: 3, tier: 'beginner', module: 'Quant Mathematics',
    title: 'Linear Algebra & Statistical Foundations',
    content: `<h2>Linear Algebra & Statistical Foundations</h2>
<p>Quantitative finance is built on linear algebra and statistics. Understanding these tools at a deep level enables everything from factor models to risk decomposition to portfolio optimization.</p>
<h3>Covariance Matrices</h3>
<p>The covariance matrix Σ encodes how asset returns move together. Its diagonal holds variances; off-diagonal elements hold covariances. Portfolio variance = w'Σw where w is the weight vector. Positive-semidefinite covariance matrices are required for valid portfolios — a negative eigenvalue signals a corrupted matrix.</p>
<h3>Eigendecomposition & PCA</h3>
<p>Eigendecomposition of Σ reveals the principal components of risk. The first eigenvector (largest eigenvalue) typically corresponds to the "market factor" — the systematic risk that cannot be diversified. PCA is used to decompose a portfolio's risk into uncorrelated factors.</p>
<h3>Regression & Factor Models</h3>
<p>Linear regression: y = Xβ + ε. In factor models, y is asset returns, X is factor exposures, β is factor loadings, and ε is idiosyncratic risk. OLS solves for β = (X'X)⁻¹X'y. The condition number of X'X matters: high condition numbers signal multicollinearity and unstable estimates.</p>
<h3>Statistical Hypothesis Testing</h3>
<p>t-tests, p-values, and confidence intervals are the language of quantitative research. A strategy's Sharpe ratio has a t-statistic: SR√T where T is the number of periods. With T=252 daily observations, a strategy needs SR > 2/√252 ≈ 0.126 to reject the null of zero edge at the 5% level.</p>`,
    quiz: [
      { q: 'Portfolio variance is computed as:',
        opts: ['w\'Σw where w is weights and Σ is covariance matrix', 'Sum of individual asset variances', 'The largest eigenvalue of Σ', 'Mean return divided by standard deviation'], a: 0 },
      { q: 'What does a negative eigenvalue in a covariance matrix indicate?',
        opts: ['A high-return opportunity', 'Strong correlations between assets', 'A corrupted or invalid covariance matrix', 'Low portfolio risk'], a: 2 },
      { q: 'In a factor model y = Xβ + ε, what does ε represent?',
        opts: ['Factor exposures', 'Systematic risk', 'Idiosyncratic (unexplained) risk', 'The market beta'], a: 2 },
      { q: 'For a daily strategy with T=252 observations, what minimum Sharpe ratio is needed to reject zero-edge at 5% significance?',
        opts: ['0.126', '0.5', '1.0', '2.0'], a: 0 },
      { q: 'High condition number in the X\'X matrix of a factor model indicates:',
        opts: ['The factors are orthogonal', 'Multicollinearity — unstable beta estimates', 'Strong predictive power', 'Low idiosyncratic risk'], a: 1 }
    ]
  },
  {
    id: 4, tier: 'beginner', module: 'Quant Mathematics',
    title: 'Stochastic Calculus & Itô Processes',
    content: `<h2>Stochastic Calculus & Itô Processes</h2>
<p>Option pricing, volatility modeling, and risk management all rest on stochastic calculus. Understanding Itô's lemma and Brownian motion is not optional for a derivatives trader.</p>
<h3>Brownian Motion</h3>
<p>Standard Brownian motion W(t) has: W(0)=0, increments W(t)-W(s) ~ N(0, t-s), independent increments, and continuous (but nowhere differentiable) paths. The quadratic variation of Brownian motion over [0,T] equals T — a key property that standard calculus cannot handle.</p>
<h3>Geometric Brownian Motion</h3>
<p>Asset prices are often modeled as dS = μS dt + σS dW (GBM). Under risk-neutral measure Q, μ is replaced by r (risk-free rate). Solving the SDE: S(T) = S(0)exp((μ - σ²/2)T + σW(T)). Note the Itô correction term -σ²/2 — missing this is a common and costly error.</p>
<h3>Itô's Lemma</h3>
<p>For a function f(S,t), Itô's lemma gives: df = (∂f/∂t + μS∂f/∂S + ½σ²S²∂²f/∂S²)dt + σS(∂f/∂S)dW. This is the stochastic chain rule. Applied to f = ln(S), it immediately yields the GBM solution. Applied to an option price, it gives Black-Scholes PDE.</p>
<h3>Risk-Neutral Pricing</h3>
<p>Under the risk-neutral measure, all assets grow at r. No-arbitrage implies E^Q[e^(-rT)f(S(T))] = price today. The Girsanov theorem transforms the real-world drift to risk-neutral drift, making W_Q(t) = W_P(t) + λt a Brownian motion under Q.</p>`,
    quiz: [
      { q: 'The quadratic variation of standard Brownian motion over [0,T] equals:',
        opts: ['0 (like regular calculus)', 'T', '√T', 'T²'], a: 1 },
      { q: 'In GBM dS = μS dt + σS dW, what is the Itô correction term in the solution for S(T)?',
        opts: ['+σ²/2', '-σ²/2', '+σ²', 'There is no correction term'], a: 1 },
      { q: 'Itô\'s lemma for f(S,t) includes a second-order term because:',
        opts: ['Asset prices are always positive', 'The quadratic variation of Brownian motion is non-zero (dW² = dt)', 'Volatility is always positive', 'Standard chain rule applies in stochastic calculus'], a: 1 },
      { q: 'Under the risk-neutral measure Q, all assets drift at:',
        opts: ['Their historical expected return μ', 'Zero (no drift)', 'The risk-free rate r', 'The Sharpe ratio'], a: 2 },
      { q: 'The Black-Scholes PDE is derived by applying Itô\'s lemma to:',
        opts: ['The asset price process directly', 'An option price as a function of S and t', 'The portfolio variance', 'The risk-neutral density'], a: 1 }
    ]
  },
  {
    id: 5, tier: 'beginner', module: 'Quant Mathematics',
    title: 'Statistical Arbitrage Foundations',
    content: `<h2>Statistical Arbitrage Foundations</h2>
<p>Statistical arbitrage (stat arb) exploits mean-reverting spreads between related instruments. The strategy generates alpha from temporary mispricings, not directional bets. Understanding cointegration and the Ornstein-Uhlenbeck process is essential.</p>
<h3>Cointegration vs Correlation</h3>
<p>Two correlated series can diverge permanently. Two cointegrated series have a long-run equilibrium — deviations are stationary and mean-revert. Test for cointegration with the Engle-Granger test: run regression y = βx + ε and test ε for stationarity using the ADF test. The hedge ratio β is your spread.</p>
<h3>The Ornstein-Uhlenbeck Process</h3>
<p>A cointegrated spread follows OU dynamics: dX = κ(μ-X)dt + σdW. κ is mean-reversion speed (half-life = ln(2)/κ), μ is equilibrium, σ is volatility. If κ is too small, mean-reversion is too slow to trade profitably given transaction costs. If σ is too large relative to κ, the spread wanders too much.</p>
<h3>Entry/Exit Rules</h3>
<p>Classic stat arb entries are z-score based: enter long spread when z < -2σ, enter short spread when z > +2σ, exit at z = 0. Optimal thresholds depend on transaction costs, mean-reversion speed, and risk tolerance. Kelly-optimal thresholds can be derived analytically for OU processes.</p>
<h3>Regime Risk & Model Risk</h3>
<p>Cointegration relationships break. A regime change (merger, fundamental divergence) can cause a previously cointegrated pair to permanently diverge. Position sizing must account for this tail risk. Never risk more than 1-2% of capital on a single pair even when the signal is strong.</p>`,
    quiz: [
      { q: 'What distinguishes cointegrated assets from merely correlated ones?',
        opts: ['Cointegrated assets always move together in the short run', 'Cointegrated assets have a stationary long-run spread that mean-reverts', 'Correlation is more statistically rigorous than cointegration', 'Cointegration requires the assets to be in the same sector'], a: 1 },
      { q: 'For an OU process with κ=0.1, what is the approximate half-life of mean reversion?',
        opts: ['6.9 days', '0.7 days', '10 days', '0.1 days'], a: 0 },
      { q: 'The Engle-Granger cointegration test checks:',
        opts: ['Whether two series have the same variance', 'Whether the residual of a linear regression between two series is stationary', 'Whether the correlation is statistically significant', 'Whether both series follow a random walk'], a: 1 },
      { q: 'A stat arb strategy uses z-score entry at ±2σ. Why might you use ±2.5σ instead?',
        opts: ['Higher z-scores guarantee faster mean reversion', 'To reduce false signals and transaction costs at the cost of fewer trades', 'Regulation requires wider entry bands', 'Lower z-scores would trigger too few trades'], a: 1 },
      { q: 'When a cointegration relationship permanently breaks (regime change), the position will:',
        opts: ['Mean-revert at a slower pace', 'Continue mean-reverting once the regime stabilizes', 'Diverge and never close — causing large losses if held', 'Immediately trigger stop-loss and close at breakeven'], a: 2 }
    ]
  },
  {
    id: 6, tier: 'foundation', module: 'Market Microstructure',
    title: 'Limit Order Book Mechanics',
    content: `<h2>Limit Order Book Mechanics</h2>
<p>The limit order book (LOB) is the central nervous system of electronic markets. All price formation happens inside the book. Mastering LOB physics is prerequisite to everything in HFT.</p>
<h3>Order Types</h3>
<p>Limit orders rest in the book at a specified price — they provide liquidity. Market orders execute immediately at the best available price — they consume liquidity. Immediate-or-cancel (IOC) orders execute what's available and cancel the rest. Fill-or-kill (FOK) executes fully or not at all. Understanding when to use each is fundamental to execution quality.</p>
<h3>Book Structure</h3>
<p>The book is a sorted list of (price, quantity, time) tuples on each side. The best bid is the highest buy price; best ask is the lowest sell price. Spread = ask - bid. Queue position at a given price level matters enormously — FIFO (first-in, first-out) matching means earlier orders execute first.</p>
<h3>Price Formation</h3>
<p>When a market buy order arrives, it matches against the lowest ask price (and quantity) in the book, then the next level if not fully filled. Each match reduces the book depth at that level. A large market order can "sweep" multiple price levels — this is a market impact event.</p>
<h3>Microstructure Observables</h3>
<p>Key LOB observables: mid-price (average of best bid and ask), microprice (quantity-weighted mid), bid-ask spread, order book imbalance (OBI = (bid_qty - ask_qty)/(bid_qty + ask_qty)), and depth-at-level. OBI is a short-horizon price predictor in most liquid markets.</p>`,
    quiz: [
      { q: 'A limit order to buy at $100.50 when the current ask is $100.60 will:',
        opts: ['Execute immediately against the ask', 'Rest in the book at $100.50, providing liquidity', 'Be rejected as invalid', 'Execute at $100.55 (midpoint)'], a: 1 },
      { q: 'In a FIFO matching engine, queue position matters because:',
        opts: ['Earlier orders get better prices', 'Earlier orders at a price level execute before later ones when a market order arrives', 'FIFO is required by regulation', 'Earlier orders have smaller spread costs'], a: 1 },
      { q: 'Order Book Imbalance (OBI) is calculated as:',
        opts: ['Ask qty - Bid qty', '(Bid qty - Ask qty) / (Bid qty + Ask qty)', 'Best bid - Best ask', 'Total depth / spread'], a: 1 },
      { q: 'A market buy order larger than the best-ask quantity will:',
        opts: ['Be cancelled for the unfilled portion', 'Execute only the available quantity at the best ask', 'Sweep multiple price levels until fully filled', 'Wait in the queue for more liquidity to arrive'], a: 2 },
      { q: 'Microprice differs from mid-price because it is:',
        opts: ['The average of all bid levels', 'Quantity-weighted, giving more weight to the side with more size', 'Always lower than mid-price', 'Used only for futures contracts'], a: 1 }
    ]
  },
  {
    id: 7, tier: 'foundation', module: 'Market Microstructure',
    title: 'Adverse Selection & Informed Trading',
    content: `<h2>Adverse Selection & Informed Trading</h2>
<p>Adverse selection is the primary cost of market making. An uninformed market maker who provides quotes is exploited by informed traders who know more about true value. Quantifying and managing adverse selection is the central challenge of all market making strategies.</p>
<h3>The Glosten-Milgrom Model</h3>
<p>Glosten-Milgrom (1985) models the spread as compensation for adverse selection. When a trader buys, the market maker updates their belief that the asset is undervalued. The bid-ask spread = 2 × probability of informed trading × expected mispricing. Higher information asymmetry → wider spreads.</p>
<h3>The Kyle Model</h3>
<p>Kyle (1985) introduces a single informed trader (the "insider") who optimally exploits their information advantage over multiple rounds. The key insight: the insider camouflages their trades in noise trader flow to avoid price impact. Market depth λ = σ_v / (2σ_u) where σ_v is information volatility and σ_u is noise trading volume. Higher noise = deeper market.</p>
<h3>Order Flow Toxicity</h3>
<p>VPIN (Volume-synchronized Probability of Informed Trading) measures order flow toxicity in real-time: VPIN = |buy_volume - sell_volume| / total_volume per bucket. High VPIN precedes price crashes and volatility events (validated around the 2010 Flash Crash). Market makers should widen spreads or reduce size when VPIN is elevated.</p>
<h3>Adverse Selection in Practice</h3>
<p>When a market maker is "picked off" (filled and immediately losing money to price movement), that fill was likely from an informed trader. Tracking the relationship between fills and subsequent price movement (fill quality analysis) is how firms detect adversely selected flow and adjust their quoting logic.</p>`,
    quiz: [
      { q: 'In the Glosten-Milgrom model, the bid-ask spread compensates the market maker for:',
        opts: ['Inventory risk only', 'Transaction processing costs', 'Adverse selection — losses to informed traders', 'Regulatory compliance costs'], a: 2 },
      { q: 'In Kyle\'s model, informed traders camouflage their orders because:',
        opts: ['Regulation requires order randomization', 'Trading too aggressively moves the price against them before they finish accumulating', 'Informed traders prefer market orders', 'Noise traders are the only counterparty'], a: 1 },
      { q: 'High VPIN readings indicate:',
        opts: ['Low volatility and tight spreads ahead', 'Elevated probability of informed trading — higher toxicity', 'The market is about to become more liquid', 'Price momentum is weakening'], a: 1 },
      { q: 'A market maker tracks "fill quality" by measuring:',
        opts: ['The speed of order execution', 'Price movement after each fill — adverse fills move against the market maker', 'Total volume traded per day', 'Number of unique counterparties'], a: 1 },
      { q: 'In Kyle\'s model, what increases market depth (reduces price impact)?',
        opts: ['Higher informed trader information quality', 'Less noise trader volume', 'More noise trader volume', 'Wider bid-ask spreads'], a: 2 }
    ]
  },
  {
    id: 8, tier: 'foundation', module: 'Market Microstructure',
    title: 'Queue Dynamics & Execution',
    content: `<h2>Queue Dynamics & Execution</h2>
<p>In FIFO limit order books, queue position determines fill probability. Understanding how queues evolve, how to model fill probability, and how to optimize order placement is essential for any electronic market participant.</p>
<h3>Queue Model</h3>
<p>At each price level, the queue is a line of limit orders waiting for execution. Your expected fill probability depends on: (1) how much volume ahead of you in queue gets executed (you need enough market orders to "eat through" all preceding orders), and (2) whether the price level gets cancelled before being reached. Queue models (e.g., Avellaneda-Stoikov) provide analytic formulas for fill probability as a function of queue position.</p>
<h3>Fill-Before-Move Probability</h3>
<p>The key quantity for a passive order: P(fill before adverse price move). If the price moves adversely before you're filled, you either miss the trade or fill at a disadvantaged price. Approximation: P(fill) ≈ Q_ahead / (Q_ahead + Q_behind + expected_new_arrivals). Front-running or co-location helps secure better queue position.</p>
<h3>Latency & Queue Priority</h3>
<p>Microsecond advantages in order submission translate directly into queue position, which translates into fill rates and adverse selection. This is why HFT firms invest in co-location, FPGA execution, and kernel bypass — each microsecond of latency improvement has measurable P&L value in competitive markets.</p>
<h3>Order Placement Strategy</h3>
<p>Optimal order placement balances fill probability against adverse selection. Placing at the touch (best bid/ask) maximizes fill probability but maximizes adverse selection exposure. Placing one tick inside the touch (joining the queue) reduces adverse selection at the cost of lower fill probability. The optimal level depends on your information horizon and alpha decay.</p>`,
    quiz: [
      { q: 'Queue position in a FIFO book matters because:',
        opts: ['Earlier orders get better prices than later orders', 'Earlier orders at a price level have higher fill probability when market orders arrive', 'FIFO books give priority to larger orders', 'Only the first order in the queue can be cancelled'], a: 1 },
      { q: 'Why does reduced latency have direct P&L value for market makers?',
        opts: ['Faster execution reduces regulatory obligations', 'Better latency secures better queue position → higher fill rates and lower adverse selection', 'Exchanges charge less for faster connections', 'Lower latency reduces slippage on market orders only'], a: 1 },
      { q: 'Placing a limit order one tick inside the touch (vs. at the touch) results in:',
        opts: ['Higher fill probability and less adverse selection', 'Lower fill probability but potentially less adverse selection', 'The same fill probability but better queue position', 'Immediate execution as a market order'], a: 1 },
      { q: 'The "fill-before-move" probability is lower when:',
        opts: ['The queue depth ahead of you is small', 'Volatility is high and adverse moves arrive faster than queue turnover', 'The asset trades with tight spreads', 'There is more noise trader volume'], a: 1 },
      { q: 'HFT firms use co-location primarily to:',
        opts: ['Avoid paying exchange fees', 'Minimize network latency to the exchange, improving queue position', 'Access dark pool liquidity', 'Reduce regulatory oversight'], a: 1 }
    ]
  },
  {
    id: 9, tier: 'foundation', module: 'Derivatives Market Making',
    title: 'Options Fundamentals & Black-Scholes',
    content: `<h2>Options Fundamentals & Black-Scholes</h2>
<p>Options are the most complex and most profitable instruments in financial markets. The Black-Scholes model, despite its limitations, is the lingua franca of options trading and the foundation for all more advanced models.</p>
<h3>Option Payoffs</h3>
<p>A European call option pays max(S(T)-K, 0) at expiry T. A European put pays max(K-S(T), 0). American options can be exercised early. The put-call parity: C - P = S - Ke^(-rT) — a model-free no-arbitrage relationship that must hold in any complete market.</p>
<h3>Black-Scholes Formula</h3>
<p>Under GBM assumptions: C = S·N(d₁) - K·e^(-rT)·N(d₂) where d₁ = [ln(S/K) + (r + σ²/2)T] / (σ√T) and d₂ = d₁ - σ√T. The key parameters are S (spot), K (strike), r (risk-free rate), T (time to expiry), and σ (implied volatility — the market's "price" of risk).</p>
<h3>Implied Volatility</h3>
<p>The Black-Scholes model gives a one-to-one mapping between option price and volatility (given other parameters). Implied volatility (IV) is the σ that makes the BS formula match the market price. IV is the market's forward-looking estimate of realized volatility over the option's life. The VIX is a 30-day IV index on S&P 500 options.</p>
<h3>Volatility Smile & Skew</h3>
<p>Under BS, IV should be constant across strikes. In reality, it varies — forming a "smile" (high IV at both wings) or "skew" (put IV > call IV, especially in equity markets). The skew reflects demand for downside protection (tail risk). Trading the smile is one of the most profitable activities in options market making.</p>`,
    quiz: [
      { q: 'Put-call parity states that:',
        opts: ['Call price always equals put price', 'C - P = S - Ke^(-rT) — model-free no-arbitrage relationship', 'Calls are always worth more than puts', 'Put price = Call price × implied volatility'], a: 1 },
      { q: 'In Black-Scholes, what is implied volatility?',
        opts: ['The historical volatility of the asset over the past year', 'The σ that makes the BS formula match the observed market option price', 'The expected future volatility from econometric models', 'The regulatory required volatility buffer'], a: 1 },
      { q: 'The volatility skew in equity markets (put IV > call IV) primarily reflects:',
        opts: ['Higher demand for upside calls from retail investors', 'Lower liquidity in the put market', 'Demand for downside protection — investors pay more for OTM puts', 'Black-Scholes model overstating call prices'], a: 2 },
      { q: 'Which parameter in Black-Scholes is NOT directly observable in the market?',
        opts: ['Spot price S', 'Strike price K', 'Risk-free rate r', 'Future realized volatility σ'], a: 3 },
      { q: 'An option has d₁ = 0.5. Under Black-Scholes, what is the approximate delta of this call?',
        opts: ['0.5 (since N(0.5) ≈ 0.69)', '0.50 exactly', '0.69 (since N(0.5) ≈ 0.69)', '0.31'], a: 2 }
    ]
  },
  {
    id: 10, tier: 'foundation', module: 'Derivatives Market Making',
    title: 'The Greeks: Delta, Gamma, Vega, Theta',
    content: `<h2>The Greeks: Delta, Gamma, Vega, Theta</h2>
<p>The Greeks measure how option prices change with respect to model inputs. They are the instruments of risk management for options books and the vocabulary of every options trader.</p>
<h3>Delta (Δ)</h3>
<p>Delta = ∂C/∂S — change in option price per $1 move in the underlying. A call has delta between 0 and 1; a put has delta between -1 and 0. ATM options have delta ≈ ±0.5. Delta is also the number of shares needed to hedge the option (delta-hedging portfolio).</p>
<h3>Gamma (Γ)</h3>
<p>Gamma = ∂²C/∂S² — rate of change of delta. Gamma is largest ATM near expiry. Long gamma means you profit from large moves (you buy low, sell high as you delta-hedge). Short gamma means you lose from large moves. Gamma is the "volatility exposure" — long gamma profits when realized vol > implied vol.</p>
<h3>Vega (ν)</h3>
<p>Vega = ∂C/∂σ — change in option price per 1% move in implied volatility. Longer-dated and ATM options have highest vega. Long options = long vega (profit if IV rises). Short options = short vega. Vega is your P&L exposure to volatility repricing events (earnings, macro events).</p>
<h3>Theta (Θ)</h3>
<p>Theta = ∂C/∂T — time decay per day. Theta is negative for long options (they lose value as time passes). Short options have positive theta — you collect premium as time decays. ATM options near expiry have the fastest theta decay. The gamma-theta tradeoff: gamma and theta have opposite signs; you pay theta to own gamma.</p>`,
    quiz: [
      { q: 'An ATM call option has delta ≈ 0.5. If the stock rises by $2, the option price increases by approximately:',
        opts: ['$0.50', '$1.00', '$2.00', '$0.25'], a: 1 },
      { q: 'A market maker who is short gamma will:',
        opts: ['Profit from large moves in the underlying', 'Lose money when the underlying makes a large move', 'Have no exposure to underlying moves', 'Profit only from implied volatility changes'], a: 1 },
      { q: 'If you are long vega, you profit when:',
        opts: ['The underlying price rises', 'Implied volatility increases', 'Time passes and options decay', 'The risk-free rate decreases'], a: 1 },
      { q: 'The gamma-theta tradeoff means:',
        opts: ['High gamma positions always have high vega', 'Long gamma positions pay theta decay; short gamma positions collect theta', 'Gamma and theta are always equal in magnitude', 'Theta decay is highest for deep ITM options'], a: 1 },
      { q: 'Which Greek measures sensitivity to implied volatility changes?',
        opts: ['Delta', 'Gamma', 'Vega', 'Theta'], a: 2 }
    ]
  },
  {
    id: 11, tier: 'practitioner', module: 'Derivatives Market Making',
    title: 'Volatility Surface & Vol Arbitrage',
    content: `<h2>Volatility Surface & Vol Arbitrage</h2>
<p>The volatility surface — IV as a function of strike and expiry — is the derivatives trader's primary trading instrument. Managing, modeling, and trading the vol surface is the core skill of an options market maker.</p>
<h3>Constructing the Vol Surface</h3>
<p>The vol surface is built from market prices of liquid options. Key constraints: no-arbitrage conditions include calendar spread non-negativity (vol cannot decrease with time for constant money-ness), butterfly non-negativity (vol smile cannot be too concave), and put-call parity. Violations signal arbitrage opportunities.</p>
<h3>SABR & Local Volatility Models</h3>
<p>SABR (Heston-Nandi variant): dF = σF^β dW₁, dσ = ασ dW₂, corr(dW₁,dW₂) = ρ. Controls smile shape via β (skew exponent), α (vol of vol), and ρ (spot-vol correlation). Local vol (Dupire): σ_local(S,t) constructed to match all market prices exactly. LV models fit perfectly but give poor delta hedges and unrealistic dynamics.</p>
<h3>Vol Arbitrage Strategies</h3>
<p>Vol arb trades mispricings in the vol surface. Common strategies: (1) calendar spreads when the term structure is mispriced; (2) vertical spreads when the smile skew is too steep or too flat; (3) vol of vol arb when realized vol of vol diverges from implied vol of vol (via VIX futures vs. realized VIX variance).</p>
<h3>Realized vs. Implied Vol</h3>
<p>The variance risk premium (VRP): implied vol consistently exceeds realized vol by 2-4 vol points on average. This means short vega positions (selling options) have positive expected P&L. However, the distribution of this premium is negatively skewed — small consistent gains interrupted by large losses during vol spikes.</p>`,
    quiz: [
      { q: 'A no-arbitrage condition requires that implied vol surface calendar spreads satisfy:',
        opts: ['IV must increase monotonically with strike', 'IV cannot decrease with time for constant moneyness (total variance must be non-decreasing)', 'All expiries must have the same IV', 'Near-term IV must exceed long-term IV'], a: 1 },
      { q: 'The SABR model\'s ρ parameter (spot-vol correlation) controls:',
        opts: ['The overall level of implied volatility', 'The vol of vol', 'The skew of the volatility smile', 'The smile curvature (butterfly)'], a: 2 },
      { q: 'Local volatility models fit the market vol surface perfectly but suffer from:',
        opts: ['Inability to match ATM options', 'Poor delta hedges and unrealistic forward vol dynamics', 'Computational intractability for standard options', 'Requiring negative correlations'], a: 1 },
      { q: 'The variance risk premium (VRP) implies:',
        opts: ['Implied vol consistently underestimates realized vol', 'Realized vol is always higher than implied vol', 'Implied vol exceeds realized vol on average — short vega has positive expected P&L', 'VRP is zero in efficient markets'], a: 2 },
      { q: 'A butterfly arbitrage violation occurs when:',
        opts: ['Implied vol is the same across all strikes', 'The vol smile is too concave (negative butterfly price = free money)', 'Put IV exceeds call IV at the same strike', 'The term structure is inverted'], a: 1 }
    ]
  },
  {
    id: 12, tier: 'practitioner', module: 'Derivatives Market Making',
    title: 'Options Market Making & Inventory',
    content: `<h2>Options Market Making & Inventory</h2>
<p>Options market making is a vega, gamma, and theta balancing act. A market maker quotes both sides of the market, earning the spread while managing Greeks exposures that accumulate as inventory builds.</p>
<h3>Avellaneda-Stoikov Framework</h3>
<p>The Avellaneda-Stoikov model for optimal market making: quote midprice = theoretical price - γ·q·σ² (inventory penalty), where q is inventory and γ is risk aversion. Optimal spread = γσ² + (2/γ)ln(1 + γ/k). The model shows market makers should skew their quotes to reduce inventory and control adverse selection simultaneously.</p>
<h3>Delta-Gamma Hedging</h3>
<p>A delta-hedged options book is still exposed to gamma (second-order moves) and vega (IV changes). Gamma hedging requires trading other options (the underlying has no gamma). A delta-gamma neutral book can be constructed by combining options with opposite gamma. The cost: gamma hedges often involve trading away some theta income.</p>
<h3>Skew Trading</h3>
<p>Market makers earn the bid-ask spread but must also manage their skew exposure. If you've sold many OTM puts (negative skew position), a market drop will hurt you more than your hedge implies because IV rises as the market falls. Skew trading is managing ∂IV/∂S — the change in implied vol per unit move in spot.</p>
<h3>Rebalancing Frequency</h3>
<p>Optimal delta-hedge rebalancing balances transaction costs against gamma risk. Rebalancing too frequently: large transaction costs eat your P&L. Rebalancing too infrequently: unhedged gamma accumulates and large moves cause losses. The Leland (1985) model quantifies this tradeoff.</p>`,
    quiz: [
      { q: 'In the Avellaneda-Stoikov model, a large positive inventory q causes the market maker to:',
        opts: ['Widen spreads on both sides equally', 'Quote lower bids and asks (skew down) to encourage selling', 'Increase position size to average down', 'Stop quoting until inventory normalizes'], a: 1 },
      { q: 'To hedge gamma on an options book, you must:',
        opts: ['Trade the underlying (stock, futures)', 'Trade other options with opposite gamma', 'Adjust your delta hedge more frequently', 'Reduce vega exposure first'], a: 1 },
      { q: 'A market maker with a large short put position (negative skew) faces additional risk because:',
        opts: ['Put prices fall when the market drops', 'Implied volatility rises as the market falls, increasing put prices beyond delta hedge', 'Short puts have positive gamma', 'Put options lose value faster than calls'], a: 1 },
      { q: 'Why is rebalancing a delta hedge too frequently suboptimal?',
        opts: ['Exchanges limit rebalancing frequency', 'Transaction costs from excessive rebalancing exceed the gamma risk reduction benefit', 'Frequent rebalancing increases gamma exposure', 'Regulators penalize high-frequency hedging'], a: 1 },
      { q: 'The Leland (1985) model addresses:',
        opts: ['Optimal option pricing with stochastic volatility', 'The optimal delta-hedge rebalancing frequency given transaction costs', 'Market maker inventory risk management', 'The Black-Scholes correction for dividend payments'], a: 1 }
    ]
  },
  {
    id: 13, tier: 'practitioner', module: 'Derivatives Market Making',
    title: 'Delta Hedging in Practice & ETF Arbitrage',
    content: `<h2>Delta Hedging in Practice & ETF Arbitrage</h2>
<p>Real-world delta hedging faces frictions absent from theory. ETF arbitrage — trading between ETFs and their underlying baskets — is a major source of volume in equity markets and a key application of derivatives market making skills.</p>
<h3>Hedging with Futures vs. Stock</h3>
<p>Delta hedges are typically executed with futures rather than stock for liquidity, cost, and speed advantages. Futures delta = option delta × (1 + basis adjustment). The basis (futures price - spot price) introduces additional risk (basis risk) that must be separately managed. Most equity vol desks hedge with e-mini futures.</p>
<h3>Pin Risk</h3>
<p>At expiry, options near the strike price (ATM) create "pin risk" — gamma explodes, the stock's closing price determines whether thousands of contracts are exercised, and the broker/market maker must either exercise or not without certainty about final price. Managing pin risk requires reducing gamma exposure before expiry or holding capital buffers.</p>
<h3>ETF Creation/Redemption Arbitrage</h3>
<p>ETFs maintain price parity with their NAV via the creation/redemption mechanism: authorized participants (APs) can create new ETF shares by delivering the underlying basket, or redeem ETF shares for the basket. If ETF price > NAV: APs buy the basket, deliver it, receive ETF shares, sell them at a profit. If ETF price < NAV: APs buy ETF shares, redeem for basket, sell basket. This arbitrage keeps ETF prices within ~1-2bps of NAV in liquid markets.</p>
<h3>Volatility ETPs</h3>
<p>VIX ETPs (like VXX) hold VIX futures and roll them forward. The roll cost (contango drag) means these products lose value over time in normal market conditions. Short VXX became famous as a carry trade. Understanding roll yield and term structure is essential for trading volatility products.</p>`,
    quiz: [
      { q: 'Why do equity vol desks typically delta-hedge with e-mini futures rather than stock?',
        opts: ['Futures are exempt from short-selling rules', 'Futures offer better liquidity, lower costs, and faster execution', 'Stock hedging is not permitted for options', 'Futures eliminate basis risk entirely'], a: 1 },
      { q: 'Pin risk occurs when:',
        opts: ['An option is deeply in-the-money at expiry', 'Options near the strike explode in gamma near expiry creating exercise uncertainty', 'Market makers are unable to hedge due to circuit breakers', 'ETF prices deviate from NAV'], a: 1 },
      { q: 'An authorized participant creates new ETF shares when:',
        opts: ['ETF price < NAV (buy ETF, redeem for basket, sell basket)', 'ETF price > NAV (buy basket, deliver it, receive ETF shares, sell at premium)', 'ETF volume is below a threshold', 'The ETF manager requests additional shares'], a: 1 },
      { q: 'Contango drag in VIX ETPs (like VXX) means:',
        opts: ['VXX gains value over time in normal markets', 'VXX loses value over time as futures are rolled from near-term to higher-priced far-term contracts', 'VXX is inversely correlated with VIX', 'VXX only trades during market hours'], a: 1 },
      { q: 'ETF creation/redemption arbitrage keeps ETF prices within:',
        opts: ['1-5% of NAV', 'Within ~1-2 basis points of NAV in liquid markets', 'Exactly at NAV at all times', 'Within the daily volume-weighted average price'], a: 1 }
    ]
  },
  {
    id: 14, tier: 'practitioner', module: 'Market Microstructure',
    title: 'Market Impact Models & Execution',
    content: `<h2>Market Impact Models & Execution</h2>
<p>Every large trade moves the market against the trader. Quantifying and minimizing market impact is a critical skill for both institutional execution and HFT strategy design.</p>
<h3>Temporary vs. Permanent Impact</h3>
<p>Temporary impact: price moves during execution but partially recovers (due to liquidity providers refilling the book). Permanent impact: information content of the order flow that permanently shifts the fair value. Almgren-Chriss model: temporary impact ∝ trade rate, permanent impact ∝ total volume. Risk-aversion controls the tradeoff between impact cost and execution risk.</p>
<h3>TWAP & VWAP Execution</h3>
<p>TWAP (time-weighted average price): execute equal slices over time. Ignores market conditions. VWAP (volume-weighted average price): execute proportionally to market volume over time. Both are "passive" algorithms. Implementation Shortfall (IS) algorithms minimize the difference between decision price and final average cost — they trade fast when favorable, slow when adverse.</p>
<h3>Price Impact Functions</h3>
<p>Empirical market impact: ΔP/σ ≈ Y × (Q/ADV)^0.5 where Q is order size, ADV is average daily volume, σ is daily vol, and Y ≈ 1 is a market-specific constant. The square-root law of market impact (Gabaix et al.) implies large orders have disproportionately large impact — halving order size reduces impact by √2, not 2.</p>
<h3>Optimal Execution</h3>
<p>Almgren-Chriss (2000) optimal execution: minimize E[cost] + λ·Var[cost]. For risk-neutral traders (λ=0): trade uniformly (TWAP). For risk-averse traders (λ>0): front-load execution (trade more at the start to reduce execution risk). The efficient frontier of execution quality trades off expected cost vs. variance of cost.</p>`,
    quiz: [
      { q: 'In the Almgren-Chriss model, temporary market impact differs from permanent impact because:',
        opts: ['Temporary impact is larger in magnitude', 'Temporary impact partially recovers after execution; permanent impact shifts fair value', 'Only permanent impact is relevant for optimal execution', 'Temporary impact only affects the buying side'], a: 1 },
      { q: 'The square-root law of market impact means that doubling your order size will:',
        opts: ['Double your market impact', 'Increase market impact by √2 (≈41%)', 'Quadruple your market impact', 'Have no additional impact beyond the first unit'], a: 1 },
      { q: 'A risk-averse trader using Almgren-Chriss optimal execution will:',
        opts: ['Trade uniformly (TWAP)', 'Front-load execution — trade more at the start', 'Execute everything immediately as a market order', 'Back-load execution to minimize permanent impact'], a: 1 },
      { q: 'Implementation Shortfall algorithms are designed to:',
        opts: ['Minimize execution cost by spreading orders over time uniformly', 'Minimize the gap between decision price and final average execution price', 'Execute only when volume is above daily average', 'Track the VWAP benchmark exactly'], a: 1 },
      { q: 'VWAP execution differs from TWAP execution because VWAP:',
        opts: ['Executes larger slices when market volume is higher', 'Always produces a better execution than TWAP', 'Ignores intraday volume patterns', 'Only works for equity markets'], a: 0 }
    ]
  },
  {
    id: 15, tier: 'practitioner', module: 'Market Microstructure',
    title: 'HFT Strategy Taxonomy',
    content: `<h2>HFT Strategy Taxonomy</h2>
<p>HFT is not a strategy — it's a technology that enables many different strategies. Understanding the taxonomy of HFT strategies is essential for firms deciding where to compete and how to manage risk.</p>
<h3>Electronic Market Making (EMM)</h3>
<p>EMM firms provide liquidity by quoting bid and ask, earning the spread. They compete on: (1) quote quality (tight spreads, large size), (2) fill rate management (avoid adverse selection), (3) inventory management (minimize risk exposure). Top EMM firms: Citadel Securities, Virtu, IMC, Optiver. Revenue source: spread income minus adverse selection losses.</p>
<h3>Latency Arbitrage</h3>
<p>Exploit price discrepancies between venues that arise due to latency differences. If NYSE quotes $100.00 and NASDAQ has not yet updated to reflect a trade on NYSE, a latency arb firm buys the stale NASDAQ quote. This practice is controversial — it extracts value without providing social benefit. Exchanges combat it with speed bumps (IEX D-limit orders).</p>
<h3>Statistical Arbitrage at Microsecond Scale</h3>
<p>Short-horizon stat arb exploits temporary mispricings between correlated instruments. Example: ES futures vs. SPY ETF. When ES futures price moves, SPY is predictably going to follow within milliseconds. Firms trade the spread during this convergence window. Alpha decays to zero within 1-2 seconds in competitive pairs.</p>
<h3>Momentum & Directional HFT</h3>
<p>Short-term momentum strategies: trade in the direction of recent price moves, expecting continuation. These strategies are more aggressive (take liquidity) and have higher market impact. Signals include order flow imbalance, short-term momentum, and LOB state features. Horizon: 100ms - 5 seconds.</p>`,
    quiz: [
      { q: 'Electronic market making firms generate revenue primarily from:',
        opts: ['Directional price prediction', 'Spread income minus adverse selection losses', 'Latency arbitrage between exchanges', 'Overnight position holding'], a: 1 },
      { q: 'Latency arbitrage exploits:',
        opts: ['Differences in bid-ask spreads across exchanges', 'Price discrepancies between venues caused by latency differences in information propagation', 'Statistical relationships between correlated assets', 'Overnight price gaps in futures markets'], a: 1 },
      { q: 'The IEX "speed bump" is designed to:',
        opts: ['Reduce overall market volatility', 'Level the playing field against latency arbitrageurs by introducing intentional delay', 'Increase market liquidity by attracting HFT firms', 'Prevent flash crashes'], a: 1 },
      { q: 'Alpha decay to zero within 1-2 seconds in microsecond stat arb means:',
        opts: ['The strategy is not profitable', 'The mispricing corrects quickly — only the fastest firms capture it', 'The strategy requires multi-day holding periods', 'Regulatory circuit breakers prevent exploitation'], a: 1 },
      { q: 'Short-term momentum HFT strategies typically:',
        opts: ['Provide liquidity as passive market makers', 'Take liquidity aggressively in the direction of recent price movement', 'Only trade around market open and close', 'Focus on overnight gaps rather than intraday moves'], a: 1 }
    ]
  },
  {
    id: 16, tier: 'advanced', module: 'Low-Latency Engineering',
    title: 'Low-Latency Systems Architecture',
    content: `<h2>Low-Latency Systems Architecture</h2>
<p>In HFT, nanoseconds matter. A 1-microsecond latency advantage over a competitor in a latency-arbitrage strategy is worth millions of dollars per year. Low-latency architecture is the application of computer science principles to minimize every source of delay.</p>
<h3>The Latency Stack</h3>
<p>Latency contributors: (1) network — NIC to kernel, PCIe, TCP/UDP stack; (2) OS — context switches, scheduler jitter, interrupt handling; (3) memory — DRAM access vs L1/L2/L3 cache; (4) code — branch mispredictions, cache misses, function call overhead. Total round-trip for a co-located HFT system: 1-10 microseconds. For microwave-connected firms: 300-500 microseconds Chicago-New York.</p>
<h3>Kernel Bypass (DPDK, RDMA, solarflare)</h3>
<p>Standard network stack: NIC → kernel driver → TCP stack → socket buffer → userspace. Each transition adds 1-5μs. Kernel bypass: NIC → userspace directly via DPDK (Data Plane Development Kit) or solarflare SolarCapture. Eliminates kernel involvement entirely. DPDK polls the NIC instead of waiting for interrupts (busy-wait loop) — burns one CPU core but reduces latency to sub-microsecond.</p>
<h3>CPU Isolation & NUMA Awareness</h3>
<p>HFT systems dedicate specific CPU cores to critical threads (core isolation via isolcpus kernel parameter). NUMA (non-uniform memory access) architecture means memory access time depends on which NUMA node the memory is on. Placing trading threads and their data on the same NUMA node eliminates cross-NUMA memory latency (50-100ns penalty per access).</p>
<h3>Lock-Free Data Structures</h3>
<p>Mutexes cause context switches and kernel involvement — unacceptable in the critical path. Lock-free data structures (single-producer single-consumer queues, compare-and-swap atomics) allow concurrent access without OS interaction. SPSC ring buffers are the workhorse of intra-process communication in HFT systems.</p>`,
    quiz: [
      { q: 'DPDK (Data Plane Development Kit) reduces network latency by:',
        opts: ['Compressing network packets for faster transmission', 'Bypassing the kernel network stack — NIC delivers packets directly to userspace', 'Using faster TCP protocol variants', 'Scheduling network packets with higher OS priority'], a: 1 },
      { q: 'Why does DPDK use busy-polling instead of interrupts?',
        opts: ['Interrupts are not supported on modern NICs', 'Interrupt handling introduces variable OS scheduling delays; polling eliminates this jitter', 'Busy-polling uses less CPU power', 'Regulatory requirements mandate polling'], a: 1 },
      { q: 'NUMA-aware memory placement in HFT systems reduces latency by:',
        opts: ['Compressing memory to fit in L1 cache', 'Ensuring trading threads access memory on their own NUMA node (50-100ns savings per access)', 'Disabling hyperthreading', 'Using ECC memory instead of standard DRAM'], a: 1 },
      { q: 'Mutexes are avoided in HFT critical paths because:',
        opts: ['They are not available on Linux systems', 'Mutex contention triggers kernel context switches — adding unpredictable latency', 'They increase memory bandwidth consumption', 'Mutexes cannot protect shared order book data'], a: 1 },
      { q: 'A microwave network Chicago-New York achieves ~300-500μs latency vs. ~65ms via fiber because:',
        opts: ['Microwave signals travel at the speed of light in a straight line; fiber follows geographic routes', 'Microwave avoids all routing equipment', 'Fiber has higher per-packet overhead', 'Microwave uses proprietary compression protocols'], a: 0 }
    ]
  },
  {
    id: 17, tier: 'advanced', module: 'Low-Latency Engineering',
    title: 'OS Tuning & Kernel Bypass',
    content: `<h2>OS Tuning & Kernel Bypass</h2>
<p>A default Linux installation introduces hundreds of microseconds of jitter through interrupts, scheduler decisions, and kernel services. HFT systems tune every OS parameter to eliminate non-deterministic latency.</p>
<h3>CPU Frequency Scaling & C-States</h3>
<p>Modern CPUs reduce frequency and enter sleep states (C1, C2, C3) to save power. Waking from C3 adds 50-200μs of latency. HFT systems disable C-states entirely (intel_idle.max_cstate=0) and force CPUs to maximum frequency (performance governor). The power cost is accepted for deterministic latency.</p>
<h3>IRQ Affinity & NAPI</h3>
<p>Network interrupts (IRQs) must be pinned to specific CPU cores away from trading cores. Without IRQ affinity, network interrupts can preempt trading threads on any core. NAPI (New API) batches interrupt processing — instead of per-packet interrupts, the kernel polls in bursts after the first interrupt. This reduces interrupt overhead but adds small batching latency.</p>
<h3>Huge Pages & TLB Optimization</h3>
<p>Standard page size: 4KB. Each memory access checks the TLB (translation lookaside buffer) for virtual→physical address mapping. TLB misses cause expensive page table walks. HFT systems use 2MB "huge pages" to reduce TLB pressure — 512× fewer TLB entries needed for the same memory range. Order book data structures are allocated on huge pages.</p>
<h3>Real-Time Kernel Patches</h3>
<p>PREEMPT_RT (real-time Linux kernel patch) converts most kernel spinlocks to mutexes, making the kernel fully preemptible. This reduces scheduling jitter to <10μs worst-case vs. 100μs+ on standard kernels. Many HFT firms run custom real-time kernels with additional patches for their specific hardware.</p>`,
    quiz: [
      { q: 'Why do HFT systems disable CPU C-states?',
        opts: ['C-states reduce trading accuracy', 'Waking from deep C-states adds 50-200μs of latency', 'C-states interfere with DPDK packet processing', 'Exchanges require constant CPU activity'], a: 1 },
      { q: 'IRQ affinity in HFT systems ensures:',
        opts: ['Network interrupts are processed faster', 'Network interrupts are pinned to non-trading cores, preventing preemption of trading threads', 'All interrupts are disabled during trading hours', 'IRQs are handled in userspace via DPDK'], a: 1 },
      { q: 'Huge pages (2MB) reduce TLB pressure because:',
        opts: ['They are stored in faster DRAM', 'Each 2MB page requires only one TLB entry vs. 512 entries for the same range of 4KB pages', 'Huge pages bypass the cache hierarchy', 'They enable direct memory mapping without page tables'], a: 1 },
      { q: 'The PREEMPT_RT kernel patch improves worst-case latency by:',
        opts: ['Enabling faster network card drivers', 'Making the kernel fully preemptible — reducing scheduling jitter to <10μs', 'Disabling all kernel modules except essential ones', 'Bypassing the TCP/IP stack'], a: 1 },
      { q: 'NAPI reduces interrupt overhead by:',
        opts: ['Sending fewer network packets', 'Batching interrupt processing rather than triggering one interrupt per packet', 'Moving interrupt handling to userspace', 'Disabling receive interrupts entirely and using polling only'], a: 1 }
    ]
  },
  {
    id: 18, tier: 'advanced', module: 'Low-Latency Engineering',
    title: 'Lock-Free Programming & Memory Models',
    content: `<h2>Lock-Free Programming & Memory Models</h2>
<p>Modern CPUs and compilers reorder instructions for performance. In concurrent code, this causes subtle, hard-to-reproduce bugs unless memory ordering is explicitly specified. Lock-free programming requires deep understanding of hardware memory models.</p>
<h3>CPU Memory Models</h3>
<p>x86 implements TSO (Total Store Order): stores are seen by all processors in program order (relative to other stores from the same processor), but loads can be reordered with respect to stores. ARM has a weaker memory model (relaxed ordering): both loads and stores can be aggressively reordered. Programs compiled for x86 may fail on ARM without explicit memory barriers.</p>
<h3>C++ Memory Ordering</h3>
<p>C++11 atomics provide explicit memory ordering: memory_order_relaxed (no ordering guarantee), memory_order_acquire (no reads/writes can be reordered before this), memory_order_release (no reads/writes can be reordered after this), memory_order_seq_cst (total sequential consistency). Relaxed atomics are fastest; seq_cst is safest but adds fence overhead.</p>
<h3>SPSC Ring Buffer Implementation</h3>
<p>Single-Producer Single-Consumer ring buffer: the most common lock-free structure in HFT. Producer writes to write_index, consumer reads from read_index. Both indices are atomic with appropriate ordering. Key: producer and consumer never race on the same index. Cache-line padding prevents false sharing — producer and consumer indices should be on separate cache lines (64-byte aligned).</p>
<h3>ABA Problem & Hazard Pointers</h3>
<p>ABA problem: thread reads value A, gets preempted, another thread changes A→B→A, first thread resumes and CAS succeeds despite value having changed. Solution: 64-bit pointers with embedded version counters (upper bits), or hazard pointers (mark a pointer as "in use" before dereferencing). Most HFT code avoids dynamic allocation entirely to sidestep this.</p>`,
    quiz: [
      { q: 'x86 TSO memory model guarantees that:',
        opts: ['All memory operations are sequentially consistent', 'Loads and stores can be freely reordered by the CPU', 'Stores are seen by all processors in program order relative to other stores from the same processor', 'No memory barriers are ever needed on x86'], a: 2 },
      { q: 'In an SPSC ring buffer, false sharing is prevented by:',
        opts: ['Using a single shared index for both producer and consumer', 'Cache-line padding — producer and consumer indices on separate 64-byte cache lines', 'Using mutex locks to prevent simultaneous access', 'Allocating the buffer on huge pages'], a: 1 },
      { q: 'C++ memory_order_acquire on a load means:',
        opts: ['The load is sequentially consistent with all other operations', 'No reads or writes can be reordered to before this load', 'The load happens before all subsequent stores', 'The load uses the fastest possible CPU instruction'], a: 1 },
      { q: 'The ABA problem in lock-free programming occurs when:',
        opts: ['Two threads write the same value simultaneously', 'A CAS succeeds on a value that has changed A→B→A, making it appear unchanged', 'Memory ordering causes stale reads on ARM processors', 'The producer and consumer access the same ring buffer index'], a: 1 },
      { q: 'Why do HFT critical paths avoid dynamic memory allocation (new/malloc)?',
        opts: ['Dynamic allocation requires root permissions', 'Allocator calls can invoke the kernel, adding non-deterministic latency', 'Dynamic memory cannot be placed on huge pages', 'C++ allocators are not thread-safe'], a: 1 }
    ]
  },
  {
    id: 19, tier: 'advanced', module: 'Systems Engineering',
    title: 'FPGA & Hardware Acceleration',
    content: `<h2>FPGA & Hardware Acceleration</h2>
<p>FPGAs (Field-Programmable Gate Arrays) represent the frontier of low-latency computing. By implementing trading logic directly in silicon, FPGA-based systems achieve 50-300 nanosecond tick-to-trade latencies that software systems cannot match.</p>
<h3>What is an FPGA?</h3>
<p>An FPGA is a reconfigurable integrated circuit containing programmable logic blocks and interconnects. Unlike CPUs (sequential, general-purpose), FPGAs execute logic in parallel hardware pipelines. A market data feed handler implemented in FPGA processes packets in hardware — parsing FIX/ITCH messages in 50-100ns vs. 5-10μs in software.</p>
<h3>FPGA in HFT: Use Cases</h3>
<p>(1) Market data parsing: decode UDP multicast feeds (ITCH, PITCH, FIX) in hardware. (2) Order entry: generate FIX/OUCH orders in hardware, bypassing the OS entirely. (3) Risk checks: pre-trade risk validation (position limits, rate limits) in FPGA before order submission. (4) Arbitrage logic: detect price discrepancy and fire order in a single clock cycle.</p>
<h3>Verilog/VHDL & HLS</h3>
<p>FPGAs are programmed in hardware description languages (HDL): Verilog or VHDL. These describe hardware at the register-transfer level (RTL) — clock cycles, flip-flops, combinational logic. HLS (High-Level Synthesis) tools (Xilinx Vitis, Intel OpenCL) compile C/C++ to HDL, trading some performance for faster development. Production HFT systems use hand-written RTL for critical paths.</p>
<h3>SmartNICs</h3>
<p>SmartNICs (Solarflare/Xilinx, Mellanox BlueField) combine a high-speed NIC with an integrated FPGA or ARM processor. They enable ultra-low-latency packet processing at the NIC level — order generation latency of 70-200ns from packet receipt to order transmission. Eliminates PCIe traversal for both receive and transmit paths.</p>`,
    quiz: [
      { q: 'FPGAs achieve lower latency than CPUs for HFT because:',
        opts: ['FPGAs have higher clock speeds than modern CPUs', 'FPGA logic executes in parallel hardware pipelines without OS or instruction fetch overhead', 'FPGAs are connected directly to exchanges', 'FPGA memory is faster than server DRAM'], a: 1 },
      { q: 'Which of these is a valid FPGA use case in HFT?',
        opts: ['Running Python backtesting frameworks', 'Market data parsing at 50-100ns (vs. 5-10μs in software)', 'Managing long-term investment portfolios', 'Hosting the trading firm website'], a: 1 },
      { q: 'HLS (High-Level Synthesis) compiles:',
        opts: ['VHDL to Verilog for portability', 'C/C++ code to hardware description language (HDL) for FPGA synthesis', 'FPGA designs to CPU-executable binaries', 'Python to FPGA-compatible assembly'], a: 1 },
      { q: 'Why do production HFT systems use hand-written RTL rather than HLS for critical paths?',
        opts: ['HLS is not commercially available', 'Hand-written RTL produces more efficient hardware with lower latency than HLS-generated code', 'HLS cannot generate Verilog output', 'Regulatory requirements mandate RTL'], a: 1 },
      { q: 'SmartNICs eliminate PCIe traversal latency by:',
        opts: ['Using wireless connections to the exchange', 'Placing FPGA/compute logic on the NIC itself — processing happens before PCIe transfer', 'Compressing packets to reduce PCIe bandwidth', 'Running the OS directly on the NIC'], a: 1 }
    ]
  },
  {
    id: 20, tier: 'advanced', module: 'Systems Engineering',
    title: 'C++ for HFT: Performance Patterns',
    content: `<h2>C++ for HFT: Performance Patterns</h2>
<p>Modern C++ enables writing trading systems with near-zero overhead abstraction. Knowing which C++ patterns accelerate and which introduce hidden costs is essential for writing sub-microsecond execution code.</p>
<h3>Branch Prediction & Branchless Code</h3>
<p>CPU branch predictors predict the next instruction. Misprediction penalty: 10-20 cycles (4-8ns at 3GHz). Hot paths should be structured so the branch predictor is almost always correct. Alternatively: branchless techniques using conditional moves (cmov), bit manipulation, and lookup tables eliminate branches entirely. Example: clamp without branch: result = min(max(x, lo), hi) compiles to cmov instructions.</p>
<h3>Cache-Friendly Data Structures</h3>
<p>Cache miss costs: L1 hit ~1ns, L2 ~4ns, L3 ~20ns, DRAM ~70ns. Arrays of structs (AoS) vs. structs of arrays (SoA): if you process one field of many objects, SoA groups that field in contiguous memory → better cache utilization. Order books stored in SoA layout for price-quantity processing outperform AoS by 3-5×.</p>
<h3>Template Metaprogramming & Inlining</h3>
<p>C++ templates enable compile-time polymorphism without virtual dispatch overhead (virtual call = indirect function pointer = branch misprediction + I-cache miss). Policy-based design (Curiously Recurring Template Pattern / CRTP) achieves zero-overhead abstraction. The compiler inlines template instantiations, eliminating function call overhead entirely.</p>
<h3>Memory Allocation & Object Pools</h3>
<p>std::allocator calls malloc/new — system calls with lock contention and non-deterministic latency. HFT code pre-allocates all objects at startup using memory pools and placement new. Object pools: allocate a large block, distribute from it in O(1) without system calls. Fixed-size allocators are entirely lock-free.</p>`,
    quiz: [
      { q: 'Branch misprediction penalty on modern CPUs is approximately:',
        opts: ['1-2 cycles', '10-20 cycles (4-8ns at 3GHz)', '100-200 cycles', 'Less than 1 cycle'], a: 1 },
      { q: 'Structs of Arrays (SoA) layout outperforms Arrays of Structs (AoS) when:',
        opts: ['You access all fields of each object together', 'You process one field across many objects — SoA keeps that field in contiguous cache lines', 'Object creation is the bottleneck', 'You need random access by object ID'], a: 1 },
      { q: 'CRTP (Curiously Recurring Template Pattern) eliminates:',
        opts: ['Compilation time', 'Virtual dispatch overhead — achieves runtime polymorphism with zero-overhead abstraction', 'Memory allocation for derived classes', 'The need for copy constructors'], a: 1 },
      { q: 'Why do HFT systems avoid std::allocator in the critical path?',
        opts: ['std::allocator is deprecated in C++17', 'malloc/new involve system calls with lock contention and non-deterministic latency', 'std::allocator is too slow for large allocations', 'Regulatory requirements ban dynamic allocation'], a: 1 },
      { q: 'DRAM access latency (~70ns) is how many times slower than L1 cache (~1ns)?',
        opts: ['7×', '70×', '700×', '7000×'], a: 1 }
    ]
  },
  {
    id: 21, tier: 'expert', module: 'Systems Engineering',
    title: 'Distributed Systems & Event-Driven Architecture',
    content: `<h2>Distributed Systems & Event-Driven Architecture</h2>
<p>A trading firm's technology stack is a distributed system. Order management, risk checks, market data, execution, and position tracking must all coordinate reliably at low latency. Understanding distributed systems failures and event-driven design is critical.</p>
<h3>Event-Driven Architecture</h3>
<p>Trading systems are event-driven: market data events trigger strategy evaluations, which trigger order events, which trigger risk checks, then execution. Each component is a stateful event processor connected by a message bus. LMAX Disruptor (ring buffer) is the gold standard for intra-process event passing: 6× faster than ArrayBlockingQueue, supports multi-producer multi-consumer without locks.</p>
<h3>Consistency vs. Latency Tradeoff</h3>
<p>CAP theorem: in a distributed system, you cannot simultaneously have Consistency, Availability, and Partition-tolerance. Trading systems choose CP (consistency + partition tolerance) over A: it's better to reject an order during a network partition than execute with stale position data. This is why FIX protocol sequences must be exactly in-order and retransmitted on gaps.</p>
<h3>State Management & Checkpointing</h3>
<p>Stateful trading components (position tracker, risk engine) must survive crashes. Techniques: (1) event sourcing — replay the event log to rebuild state; (2) periodic snapshots + log replay; (3) active-active replication with consensus (Raft/Paxos). Event sourcing is preferred for auditing (exchange-mandated audit trail) and fast crash recovery.</p>
<h3>Sequencer & Time Synchronization</h3>
<p>A global sequencer assigns monotonically increasing sequence numbers to all market data events — ensuring all strategy engines see the same event order. PTP (IEEE 1588 Precision Time Protocol) synchronizes clocks to sub-microsecond precision across the trading infrastructure. Without PTP, timestamps on events can be off by hundreds of microseconds, corrupting latency analysis.</p>`,
    quiz: [
      { q: 'Why does LMAX Disruptor outperform ArrayBlockingQueue for intra-process messaging?',
        opts: ['It uses direct memory access (DMA)', 'It uses a ring buffer without locks — producers and consumers update sequence numbers with cache-coherent atomics', 'It batches messages to reduce overhead', 'It bypasses the JVM garbage collector entirely'], a: 1 },
      { q: 'The CAP theorem states that a distributed system cannot simultaneously provide:',
        opts: ['Speed, Safety, and Simplicity', 'Consistency, Availability, and Partition-tolerance', 'Correctness, Atomicity, and Persistence', 'Concurrency, Accuracy, and Performance'], a: 1 },
      { q: 'Trading systems choose CP (Consistency + Partition tolerance) over Availability because:',
        opts: ['Availability is not required for trading', 'Executing orders with stale position data during a partition is worse than rejecting orders', 'Partition tolerance is free in co-located systems', 'Consistency is easier to implement'], a: 1 },
      { q: 'Event sourcing in trading infrastructure is valued for:',
        opts: ['Reducing storage requirements vs. database snapshots', 'Enabling state reconstruction via log replay — critical for audit trails and crash recovery', 'Eliminating the need for sequence numbers', 'Allowing concurrent writes without conflicts'], a: 1 },
      { q: 'PTP (Precision Time Protocol) achieves sub-microsecond clock synchronization to enable:',
        opts: ['Faster order execution by synchronizing exchange clocks', 'Accurate timestamping and latency measurement across distributed trading infrastructure', 'Regulatory compliance for order reporting', 'Elimination of network jitter in market data feeds'], a: 1 }
    ]
  },
  {
    id: 22, tier: 'expert', module: 'Data Center Architecture',
    title: 'Colocation & Network Infrastructure',
    content: `<h2>Colocation & Network Infrastructure</h2>
<p>The physical infrastructure of HFT — where servers live, how they connect, and how data travels — directly determines competitive latency. Colocation and network topology decisions are strategic advantages.</p>
<h3>Major Financial Data Centers</h3>
<p>The global financial network concentrates around key colocation facilities: NY4/NY5 (Equinix, Secaucus NJ) — hosts NYSE, NASDAQ, BATS; LD4 (Equinix, Slough UK) — hosts LSE, CBOE Europe, ICE; TY3 (Tokyo) — hosts TSE, OSE; CH2 (Chicago) — hosts CME, ICE Futures US. Colocation means your server is in the same building as the exchange matching engine — 1-5μs round trip vs. 300μs from Manhattan.</p>
<h3>Cross-Connects</h3>
<p>Within a data center, "cross-connects" are direct fiber or copper connections between cages. A cross-connect to the exchange's cage costs $500-2000/month but provides direct, deterministic latency. Without cross-connects, traffic traverses shared network infrastructure with variable latency. All HFT firms in the same data center have cross-connects to the exchanges they trade.</p>
<h3>Microwave & Millimeter-Wave Networks</h3>
<p>The Chicago-New York microwave network achieves ~8ms round-trip vs. ~13ms via fiber (light travels faster through air than glass, and microwave routes are straighter). Multiple firms operate competing microwave towers. Millimeter-wave (80GHz) networks achieve higher bandwidth but shorter range — used for shorter hops. Weather affects microwave reliability: rain fade and atmospheric ducting are managed with redundant routes.</p>
<h3>Network Hardware: RDMA & InfiniBand</h3>
<p>RDMA (Remote Direct Memory Access) allows a server to write directly to another server's memory without CPU involvement. InfiniBand provides RDMA with 100-200Gbps bandwidth and 1-2μs latency. Used within data centers for ultra-fast intra-firm communication (risk updates, order routing). Competitive with Ethernet for inter-server low-latency communication.</p>`,
    quiz: [
      { q: 'NY4 (Equinix, Secaucus NJ) hosts which exchanges?',
        opts: ['CME, ICE Futures US', 'LSE, CBOE Europe', 'NYSE, NASDAQ, BATS', 'TSE, OSE'], a: 2 },
      { q: 'A cross-connect in a data center provides:',
        opts: ['Wireless access to exchange servers', 'A direct, deterministic fiber/copper connection between your cage and the exchange cage', 'Internet bandwidth for order routing', 'A shared network with other firms in the building'], a: 1 },
      { q: 'Chicago-New York microwave achieves ~8ms vs. ~13ms fiber because:',
        opts: ['Microwave uses higher bandwidth protocols', 'Light travels faster through air than glass, and microwave routes are geometrically straighter', 'Fiber adds router processing overhead', 'Microwave avoids the curvature of the Earth'], a: 1 },
      { q: 'RDMA (Remote Direct Memory Access) allows:',
        opts: ['Accessing exchange market data without API limits', 'A server to write to another server\'s memory without CPU involvement', 'Direct memory access to NIC receive buffers', 'Bypassing PCIe for FPGA communication'], a: 1 },
      { q: 'Rain fade affects microwave networks by:',
        opts: ['Increasing signal speed during precipitation', 'Attenuating microwave signals during heavy rain, potentially causing packet loss', 'Improving signal reflection for longer range', 'Having no measurable effect on HFT networks'], a: 1 }
    ]
  },
  {
    id: 23, tier: 'expert', module: 'AI & Machine Learning',
    title: 'Deep Learning for Order Book Prediction',
    content: `<h2>Deep Learning for Order Book Prediction</h2>
<p>Machine learning for trading has matured significantly. Deep learning models for LOB prediction, especially architectures that capture temporal and spatial structure of the order book, are now used by leading quantitative trading firms.</p>
<h3>Input Features for LOB Models</h3>
<p>Standard LOB features: price and quantity at top N levels on each side (2N × 2 features), mid-price returns over multiple horizons, order book imbalance, spread, queue depth changes. Richer features: order arrival rates, cancellation rates, order size distributions. DeepLOB (Lobster dataset benchmark) uses 40 features (top-10 levels on each side).</p>
<h3>DeepLOB Architecture</h3>
<p>DeepLOB (Zhang et al., 2019): Conv1D layers to capture intra-level relationships, Inception modules for multi-scale time patterns, LSTM for temporal dependencies. Predicts: mid-price movement direction (up/neutral/down) over N future periods. Achieved ~80% accuracy on NASDAQ stocks — significantly better than LSTM-only baselines.</p>
<h3>Temporal Fusion Transformer (TFT)</h3>
<p>TFT extends attention mechanisms for multi-horizon time series. Key components: variable selection networks (feature importance), gated residual networks, multi-head attention for long-range dependencies. Outperforms LSTM and DeepLOB on multi-step ahead predictions but has higher inference latency — used for signal generation, not tick-level execution.</p>
<h3>Regime Detection & Meta-Learning</h3>
<p>Financial markets are non-stationary — a model trained on 2019 data may fail in 2022. Regime detection models (Hidden Markov Models, changepoint detection, or deep learning classifiers) identify market state and switch between regime-specific models. Meta-learning (MAML, Reptile) trains models to adapt quickly to new regimes with few samples.</p>`,
    quiz: [
      { q: 'DeepLOB uses which architecture components for LOB prediction?',
        opts: ['Random forest and gradient boosting only', 'Conv1D + Inception modules + LSTM', 'Transformer self-attention only', 'Recurrent neural network without convolutional layers'], a: 1 },
      { q: 'What prediction task does DeepLOB solve?',
        opts: ['Exact next-tick price prediction', 'Mid-price movement direction (up/neutral/down) over N future periods', 'Order arrival rate forecasting', 'Bid-ask spread prediction'], a: 1 },
      { q: 'Why is the Temporal Fusion Transformer (TFT) used for signal generation rather than tick-level execution?',
        opts: ['TFT cannot handle financial data', 'TFT has higher inference latency than DeepLOB/LSTM models', 'Exchanges prohibit transformer-based models', 'TFT only works for daily data'], a: 1 },
      { q: 'Regime detection is important in trading ML because:',
        opts: ['Models perform identically across market regimes', 'Financial time series are non-stationary — models fail when the regime changes', 'Regime detection is required by regulators', 'It reduces training time for deep learning models'], a: 1 },
      { q: 'Meta-learning (e.g., MAML) is applied to trading models to enable:',
        opts: ['Training on larger datasets without overfitting', 'Fast adaptation to new market regimes with few samples', 'Eliminating the need for hyperparameter tuning', 'Automatic feature engineering'], a: 1 }
    ]
  },
  {
    id: 24, tier: 'expert', module: 'AI & Machine Learning',
    title: 'Reinforcement Learning for Market Making',
    content: `<h2>Reinforcement Learning for Market Making</h2>
<p>Reinforcement learning (RL) provides a natural framework for market making: the agent observes market state, takes quoting actions, and receives P&L as reward. RL can discover quoting policies that outperform classical models in non-stationary markets.</p>
<h3>MDP Formulation</h3>
<p>Market making as MDP: State = (inventory, spread, LOB state, recent trades), Action = (bid offset, ask offset, order sizes), Reward = realized P&L minus inventory penalty, Transition = LOB dynamics. Discount factor γ controls how much future reward matters — γ near 1 for strategies with slow inventory clearance.</p>
<h3>Deep Q-Networks (DQN) for Discrete Actions</h3>
<p>DQN approximates Q(s,a) with a neural network. For market making with discrete quote levels (e.g., 5 tick levels on each side), DQN trains end-to-end from market state to optimal quote selection. Experience replay and target networks stabilize training. Limitation: assumes Markovian dynamics, which is only approximately true in real markets.</p>
<h3>Policy Gradient & PPO</h3>
<p>Proximal Policy Optimization (PPO) directly learns a policy π(a|s) rather than Q-values. PPO's clipped objective prevents destructive policy updates. For market making with continuous quote sizes, PPO outperforms DQN. Actor-Critic architectures (A3C, SAC) further improve sample efficiency by simultaneously learning a value function and policy.</p>
<h3>Challenges & Practical Considerations</h3>
<p>RL challenges in trading: (1) non-stationarity — market dynamics change, invalidating learned policies; (2) partial observability — the full state (all traders' intentions) is never observable; (3) reward sparsity — P&L has high variance especially with rare large events; (4) off-policy learning from historical data must account for distribution shift. Sim-to-real transfer: models trained in simulation must be calibrated to real market conditions.</p>`,
    quiz: [
      { q: 'In the MDP formulation of market making, the action space typically includes:',
        opts: ['The portfolio allocation weights', 'Bid offset, ask offset, and order sizes', 'The predicted future price direction', 'Whether to cancel all pending orders'], a: 1 },
      { q: 'Experience replay in DQN stabilizes training by:',
        opts: ['Increasing the learning rate over time', 'Breaking temporal correlations in the training data by sampling random mini-batches from a replay buffer', 'Reducing the number of required training episodes', 'Enabling multi-agent training'], a: 1 },
      { q: 'PPO\'s clipped objective is designed to:',
        opts: ['Limit the size of the neural network', 'Prevent large, destructive policy updates during training', 'Clip outlier rewards for numerical stability', 'Constrain the action space to valid quote levels'], a: 1 },
      { q: 'Non-stationarity is a fundamental RL challenge in trading because:',
        opts: ['Computers cannot handle non-stationary data', 'Market dynamics change over time, invalidating policies learned from historical data', 'RL algorithms require stationary inputs for convergence guarantees', 'Non-stationary markets have no profitable strategies'], a: 1 },
      { q: 'Sim-to-real transfer in trading RL refers to:',
        opts: ['Converting Python simulation code to C++ for production', 'Calibrating simulation-trained models to real market conditions before deployment', 'Simulating multiple traders to improve robustness', 'Using real data instead of synthetic data for training'], a: 1 }
    ]
  },
  {
    id: 25, tier: 'expert', module: 'Quant OS',
    title: 'Quant OS: Systems Design Principles',
    content: `<h2>Quant OS: Systems Design Principles</h2>
<p>The "Quant OS" is the operating environment for a quantitative trading firm — the combination of infrastructure, tooling, data management, and workflow that enables researchers to generate, test, and deploy trading strategies efficiently.</p>
<h3>Research Infrastructure</h3>
<p>A quant research stack: data lake (raw tick data, fundamental data, alternative data) → data pipeline (cleaning, normalization, corporate actions) → feature store (pre-computed factors with point-in-time correctness) → backtesting engine → strategy evaluation → production deployment. Each layer must be designed for correctness first, performance second.</p>
<h3>Point-in-Time Correctness</h3>
<p>The most common backtest error: look-ahead bias. Using data that was not available at the time of the decision. Examples: using revised earnings figures (not the original announcement), adjusted close prices (splits occur in the future), or analyst ratings that were updated after the trading signal date. Point-in-time databases store data as it was known at each historical timestamp.</p>
<h3>The Backtest Stack</h3>
<p>Production-grade backtester: event-driven (handles corporate actions, delistings, partial fills), realistic transaction cost model (bid-ask spread + market impact + commission + borrow cost for shorts), position tracking, P&L attribution (factor attribution vs. alpha), and drawdown analysis. Vectorized backtests are fast but miss many edge cases that cost real money in production.</p>
<h3>Alpha Decay Analysis</h3>
<p>Alpha decay: a factor's predictive power decreases as you hold longer. Measure: IC (information coefficient) = correlation between factor values and forward returns at horizon h. IC vs. h curve: steep decay means short-horizon strategy (requires low transaction costs); slow decay enables longer-horizon strategies (lower turnover, lower costs). Target IC > 0.05 for statistical significance.</p>`,
    quiz: [
      { q: 'Look-ahead bias in backtesting occurs when:',
        opts: ['The backtest uses too much historical data', 'A decision uses data that was not available at the historical decision time', 'The backtester runs too slowly', 'Transaction costs are underestimated'], a: 1 },
      { q: 'Point-in-time databases address look-ahead bias by:',
        opts: ['Using only end-of-day prices', 'Storing data as it was known at each historical timestamp, not revised versions', 'Removing all revised data from the dataset', 'Auditing backtest results before publication'], a: 1 },
      { q: 'Why do event-driven backtests outperform vectorized backtests for production-grade strategy evaluation?',
        opts: ['Event-driven backtests are always faster', 'Event-driven backtests correctly handle corporate actions, partial fills, and order queuing that vectorized backtests miss', 'Vectorized backtests cannot handle multiple assets', 'Regulators require event-driven frameworks'], a: 1 },
      { q: 'Alpha decay analysis using IC vs. horizon curves helps determine:',
        opts: ['Whether the strategy is statistically significant', 'Optimal holding period — fast-decaying IC suggests short-horizon; slow-decaying IC suggests longer-horizon', 'Whether to use long or short positions', 'How much capital to allocate to the strategy'], a: 1 },
      { q: 'A feature store with point-in-time correctness is important because:',
        opts: ['It speeds up factor computation during research', 'Pre-computed factors must be joined at the exact historical timestamp to prevent future data from leaking into the signal', 'Feature stores are required by financial regulators', 'It allows researchers to share code more easily'], a: 1 }
    ]
  },
  {
    id: 26, tier: 'master', module: 'Software Engineering',
    title: 'Production C++ & Rust for Trading Systems',
    content: `<h2>Production C++ & Rust for Trading Systems</h2>
<p>Production trading code must be not only fast but also correct, maintainable, and testable. The software engineering practices around low-latency C++ and Rust separate sustainable trading firms from those that blow up due to code bugs.</p>
<h3>C++20 Features for HFT</h3>
<p>C++20 adds coroutines (zero-overhead async), concepts (compile-time type constraints), ranges (composable algorithms), and modules (faster compilation). For HFT: coroutines enable structured concurrency in async I/O paths; concepts enforce that template parameters satisfy latency guarantees at compile-time; std::atomic<T> with wait/notify replaces SPSC polling in some architectures.</p>
<h3>Rust's Safety Guarantees in Finance</h3>
<p>Rust's ownership model eliminates data races, use-after-free, and buffer overflows at compile time. For trading systems: unsafe Rust with careful isolation allows performance equivalent to C++ while guaranteeing safety in the larger codebase. Rust's async ecosystem (tokio) achieves comparable throughput to C++ for network-bound code. Zero-cost abstractions mean high-level Rust compiles to the same machine code as hand-written C.</p>
<h3>Testing & Property-Based Testing</h3>
<p>Critical path code needs: unit tests (deterministic behavior), integration tests (component interactions), fuzz tests (randomized inputs to find edge cases), and simulation tests (replay historical market data against the strategy). Property-based testing (QuickCheck/proptest in Rust) generates thousands of random inputs and checks invariants — essential for finding order matching bugs that deterministic tests miss.</p>
<h3>Observability & Tracing</h3>
<p>Production trading systems need nanosecond-resolution traces. Tools: RDTSC (CPU timestamp counter) for sub-nanosecond measurements, perf (Linux performance counters) for profiling, eBPF (extended Berkeley Packet Filter) for kernel-level tracing without modifying application code. Distributed tracing correlates latency across components: from market data receipt to order execution, every microsecond is tracked and attributed.</p>`,
    quiz: [
      { q: 'C++20 concepts (not to be confused with the concept of understanding) are useful in HFT because:',
        opts: ['They eliminate virtual dispatch', 'They enforce compile-time type constraints — ensuring template parameters satisfy latency or interface requirements', 'They replace RAII for resource management', 'They enable runtime type introspection'], a: 1 },
      { q: 'Rust\'s ownership model eliminates which class of bugs at compile time?',
        opts: ['Logic errors and off-by-one errors', 'Data races, use-after-free, and buffer overflows', 'Arithmetic overflow and underflow', 'Null pointer exceptions in all cases'], a: 1 },
      { q: 'Property-based testing (e.g., proptest in Rust) is valuable for order matching systems because:',
        opts: ['It generates documentation for the matching engine', 'It generates thousands of random inputs and checks invariants — finding edge cases that deterministic tests miss', 'It simulates market conditions better than historical replay', 'It is required for exchange certification'], a: 1 },
      { q: 'RDTSC is used in HFT profiling to:',
        opts: ['Synchronize clocks across the trading infrastructure', 'Measure time with sub-nanosecond resolution using the CPU\'s timestamp counter', 'Trigger hardware interrupts at precise times', 'Count the number of cache misses in a function'], a: 1 },
      { q: 'eBPF for trading system observability enables:',
        opts: ['Hardware-level FPGA tracing', 'Kernel-level tracing and profiling without modifying application code', 'Bypassing the kernel for network operations', 'Compiling C++ programs to BPF bytecode'], a: 1 }
    ]
  },
  {
    id: 27, tier: 'master', module: 'Quant OS',
    title: 'CI/CD & Infrastructure as Code',
    content: `<h2>CI/CD & Infrastructure as Code</h2>
<p>A trading firm's infrastructure must be reproducible, auditable, and deployable in minutes. CI/CD and Infrastructure as Code (IaC) ensure that code changes are tested rigorously before reaching production and that the environment is version-controlled alongside the code.</p>
<h3>CI Pipeline for Trading Systems</h3>
<p>A trading system CI pipeline: (1) compile with address sanitizer, undefined behavior sanitizer, thread sanitizer — catch memory bugs and data races before they hit prod; (2) run unit tests + integration tests; (3) run simulation backtests with regression checks (strategy P&L should not change by >1% from commit to commit); (4) performance benchmarks — catch latency regressions before deployment. All steps run in Docker for reproducibility.</p>
<h3>Deployment: Canary & Blue-Green</h3>
<p>Blue-green deployment: run two identical production environments (blue = current, green = new). Switch traffic from blue to green atomically. If green shows problems (via monitoring), switch back to blue in seconds. Canary deployment: route a small percentage of traffic (5-10%) to the new version, monitor, and gradually increase if healthy. Both strategies eliminate zero-downtime deployment risk.</p>
<h3>Infrastructure as Code: Kubernetes & Terraform</h3>
<p>Trading infrastructure as code: Terraform for cloud/bare-metal provisioning, Kubernetes for container orchestration (non-latency-critical services), Ansible for OS configuration (kernel parameters, NUMA settings, huge pages). Critical latency path services run on bare metal (not containers) — container overhead (~5μs) is unacceptable for sub-microsecond systems.</p>
<h3>Secrets Management & Security</h3>
<p>Trading firms handle API keys, SSH keys, FIX credentials, and exchange certificates. Secrets management: HashiCorp Vault rotates credentials automatically, logs every access, and integrates with Kubernetes service accounts. Exchange credentials must never be in code or environment variables — always in a secrets store with audit logging.</p>`,
    quiz: [
      { q: 'Thread sanitizer in a CI pipeline helps trading systems by:',
        opts: ['Optimizing thread scheduling', 'Detecting data races before they reach production code', 'Measuring thread context switch overhead', 'Pinning threads to specific CPU cores'], a: 1 },
      { q: 'Blue-green deployment enables:',
        opts: ['Simultaneous operation of multiple strategy versions', 'Zero-downtime deployments with instant rollback by switching traffic between two identical environments', 'Gradual feature rollout to 10% of order flow', 'Running CI/CD pipelines in parallel'], a: 1 },
      { q: 'Why do sub-microsecond latency trading systems run on bare metal rather than containers?',
        opts: ['Containers don\'t support C++ applications', 'Container overhead (~5μs) is unacceptable for sub-microsecond critical paths', 'Containers cannot run DPDK kernel bypass', 'Exchange co-location doesn\'t support containerized deployments'], a: 1 },
      { q: 'Why should exchange credentials never be stored in environment variables?',
        opts: ['Environment variables are not accessible to processes', 'Environment variables can be leaked via /proc, logs, and crash dumps — secrets stores provide proper access control and audit trails', 'Exchanges don\'t accept credentials from environment variables', 'Environment variables cannot store certificates'], a: 1 },
      { q: 'A performance benchmark gate in CI prevents:',
        opts: ['Incorrect strategy logic from reaching production', 'Latency regressions — commits that increase execution latency are caught before deployment', 'Memory leaks in long-running processes', 'Unauthorized changes to trading parameters'], a: 1 }
    ]
  },
  {
    id: 28, tier: 'master', module: 'Building a Firm',
    title: 'Prime Brokers, Clearing & Regulation',
    content: `<h2>Prime Brokers, Clearing & Regulation</h2>
<p>Operating a trading firm requires navigating a complex regulatory and clearing infrastructure. Prime brokerage relationships, clearing arrangements, and regulatory compliance are not optional — they determine what you can trade, how much leverage you get, and what reporting you must file.</p>
<h3>Prime Brokerage</h3>
<p>Prime brokers (Goldman Sachs PB, Morgan Stanley, JPMorgan) provide: securities lending (to enable short selling), margin financing, custody (holding your securities), trade clearing and settlement, capital introduction (connecting hedge funds with investors), and risk reporting. PB relationships are crucial — without a prime broker, you cannot short stocks or access leverage efficiently.</p>
<h3>Clearing & Central Counterparties (CCPs)</h3>
<p>CCPs (Depository Trust & Clearing Corporation / DTCC in the US, LCH in Europe) become the buyer to every seller and seller to every buyer — eliminating bilateral counterparty risk. In exchange-traded markets, your trades are automatically cleared through the CCP. OTC derivatives must be centrally cleared under Dodd-Frank/EMIR regulations. CCP membership requires posting initial margin and contributing to a default fund.</p>
<h3>Regulatory Framework</h3>
<p>US HFT regulation: SEC (equities, options), CFTC (futures, swaps), FINRA (broker-dealer compliance). Key rules: SEC Rule 15c3-5 (Market Access Rule — risk controls pre-trade), Regulation SHO (short selling rules, locate requirements), MiFID II (EU — best execution, transaction reporting). Registration as a broker-dealer or investment adviser triggers extensive compliance obligations.</p>
<h3>Compliance Infrastructure</h3>
<p>Pre-trade risk controls (mandated by Rule 15c3-5): position limits, order rate limits (messages per second), fat-finger checks (max order size), credit checks. Post-trade: transaction reporting (CAT — Consolidated Audit Trail), trade confirmation, regulatory capital calculations. FINRA inspections examine whether controls are actually enforced, not just documented.</p>`,
    quiz: [
      { q: 'A prime broker\'s "securities lending" service enables trading firms to:',
        opts: ['Access faster order execution', 'Short sell by borrowing securities from the prime broker\'s inventory', 'Access alternative data for research', 'Trade on margin without collateral'], a: 1 },
      { q: 'CCPs eliminate bilateral counterparty risk by:',
        opts: ['Requiring all trades to be fully collateralized upfront', 'Becoming buyer to every seller and seller to every buyer — guaranteeing trade settlement', 'Insuring trades against losses', 'Preventing participants from defaulting'], a: 1 },
      { q: 'SEC Rule 15c3-5 (Market Access Rule) requires:',
        opts: ['Firms to report all trades within 10 seconds', 'Pre-trade risk controls — position limits, order rate limits, and fat-finger checks', 'Annual audits of trading algorithms', 'Disclosure of trading strategies to regulators'], a: 1 },
      { q: 'Under Dodd-Frank, OTC derivatives must be:',
        opts: ['Traded exclusively on registered exchanges', 'Centrally cleared through CCPs (for eligible instruments)', 'Reported to the SEC within 15 minutes', 'Prohibited unless traded by CFTC-registered firms'], a: 1 },
      { q: 'The Consolidated Audit Trail (CAT) is used for:',
        opts: ['Real-time surveillance of HFT activity', 'Transaction reporting — creating a complete audit trail of all US equity and options orders', 'Calculating regulatory capital requirements', 'Monitoring prime broker credit exposure'], a: 1 }
    ]
  },
  {
    id: 29, tier: 'master', module: 'Building a Firm',
    title: 'Funding, Team Building & Operations',
    content: `<h2>Funding, Team Building & Operations</h2>
<p>Building a profitable trading strategy is necessary but not sufficient. Turning it into a firm requires capital allocation, talent acquisition, legal structure, and operational infrastructure. Most trading firms fail not because their strategies stop working, but because of operational failures.</p>
<h3>Capital Structure & Funding</h3>
<p>Early-stage HFT: self-funded or friends/family. Seed stage: prop trading desks at banks or boutiques (incubator model). Series A: institutional investors (family offices, funds of funds) investing $10-50M in exchange for a share of profits or equity. Key metrics investors evaluate: Sharpe ratio (must exceed 2.0), maximum drawdown (<15%), win rate consistency, strategy capacity (how much AUM before alpha degrades).</p>
<h3>Team Structure</h3>
<p>A lean HFT firm: (1) quant researchers (PhD-level, math/physics background) develop and backtest strategies; (2) trading engineers (C++/Rust, distributed systems) build execution infrastructure; (3) operations (risk monitoring, trade reconciliation, regulatory filings); (4) general counsel (legal, compliance). Early firms often have researcher-engineers who do both strategy and systems — this is unsustainable above $100M AUM.</p>
<h3>LP Structures & Fund Accounting</h3>
<p>Most HFT firms structure as LLCs with limited partners (LPs) contributing capital. Management fee: 2% AUM per year. Performance fee: 20% of profits above a high-water mark. The high-water mark prevents charging performance fees until all previous losses are recovered — a key LP protection. Fund administration (NAV calculation, investor reporting) is typically outsourced to a fund administrator.</p>
<h3>Operational Risk</h3>
<p>Most trading firm failures stem from: (1) technology failures during high-volatility events (market open, economic releases); (2) rogue algorithms that miss risk controls; (3) counterparty failures (PB or CCP default); (4) regulatory action. Knight Capital (2012) lost $440M in 45 minutes due to a software deployment error — the canonical example of operational risk in HFT.</p>`,
    quiz: [
      { q: 'Institutional investors evaluating an HFT firm at Series A typically require minimum Sharpe ratio of:',
        opts: ['0.5', '1.0', '2.0 or above', '5.0 or above'], a: 2 },
      { q: 'The "high-water mark" in fund accounting protects LPs by:',
        opts: ['Limiting total leverage to a multiple of NAV', 'Preventing performance fees from being charged until all previous losses are recovered', 'Setting a maximum drawdown before the fund liquidates', 'Guaranteeing a minimum return to LPs'], a: 1 },
      { q: 'The Knight Capital incident (2012) illustrates which operational risk?',
        opts: ['Counterparty failure from a prime broker default', 'A rogue algorithm deployed via a software error causing $440M loss in 45 minutes', 'Regulatory shutdown of an unlicensed trading firm', 'A cyberattack on the exchange infrastructure'], a: 1 },
      { q: 'Strategy capacity in HFT refers to:',
        opts: ['The maximum number of orders per second the system can handle', 'The maximum AUM before alpha degrades — larger orders cause more market impact', 'The number of instruments the strategy can trade simultaneously', 'The maximum drawdown acceptable to investors'], a: 1 },
      { q: 'An HFT firm LLC with 2/20 fee structure charges:',
        opts: ['2% performance fee and 20% management fee', '2% of AUM per year plus 20% of profits above the high-water mark', '20% performance fee and 2% performance fee on all gains', 'Fixed $2M fee plus 20 basis points per trade'], a: 1 }
    ]
  },
  {
    id: 30, tier: 'master', module: 'Building a Firm',
    title: 'Launching a High-Frequency Trading Firm',
    content: `<h2>Launching a High-Frequency Trading Firm</h2>
<p>This final level integrates every concept in the curriculum into a single coherent picture: what it takes to build, fund, operate, and scale a high-frequency trading firm from zero to institutional quality.</p>
<h3>The 7 Production Projects</h3>
<p>The Circle curriculum's 7 production systems form the backbone of an HFT firm's technology stack: (1) Tick-Level Backtester (Python/C++) — validates strategies on real tick data; (2) DPDK UDP Multicast Capturer — captures exchange market data at full speed; (3) Zero-Copy FIX Parser (Rust) — parses market data without heap allocation; (4) Market Data Normalizer (C++17) — normalizes feeds across venues; (5) Price-Time Matching Engine (C++17) — internal exchange for simulated execution; (6) Limit Order Book (C++20) — the core trading data structure; (7) Lock-Free SPSC Queue (C11) — the backbone of all intra-process communication.</p>
<h3>Competitive Moats in HFT</h3>
<p>In HFT, moats are: (1) technology moat — proprietary low-latency infrastructure that competitors cannot easily replicate; (2) data moat — exclusive or expensive-to-acquire data sources (co-location microwave, proprietary order flow); (3) talent moat — teams that have worked together and understand the intricacies of the system; (4) regulatory moat — licenses and relationships that take years to acquire. Pure strategy alpha decays; durable moats come from technology and talent.</p>
<h3>Risk Management at Firm Level</h3>
<p>Firm-level risk: (1) concentration risk (too much P&L from one strategy — if it breaks, the firm breaks); (2) correlation risk (strategies that appear independent can all lose in the same market stress event); (3) key-person risk (trading firms heavily dependent on one researcher/engineer); (4) liquidity risk (ability to unwind positions without catastrophic impact). Risk management is the CEO's job, not only the risk manager's.</p>
<h3>The Full Circle</h3>
<p>From probabilistic thinking (Level 1) to stochastic calculus (Level 4), through microstructure (Level 6-8), options theory (Level 9-13), low-latency systems (Level 16-20), AI/ML (Level 23-24), to firm building (Level 28-30): completing all 30 levels means you have consumed the complete operating system for launching and running a high-frequency trading firm. Zero knowledge gaps.</p>`,
    quiz: [
      { q: 'Which Circle production project handles intra-process communication in HFT systems?',
        opts: ['DPDK UDP Multicast Capturer', 'Zero-Copy FIX Parser', 'Lock-Free SPSC Queue', 'Market Data Normalizer'], a: 2 },
      { q: 'A "technology moat" in HFT refers to:',
        opts: ['Patent protection on trading algorithms', 'Proprietary low-latency infrastructure that competitors cannot easily replicate', 'Exclusive exchange membership', 'Regulatory licenses for high-frequency trading'], a: 1 },
      { q: 'Concentration risk at a trading firm level means:',
        opts: ['Too many correlated positions in one instrument', 'Too much P&L dependence on one strategy — if it stops working, the entire firm is at risk', 'Excessive leverage on a single trade', 'Having all infrastructure in one data center'], a: 1 },
      { q: '"Zero knowledge gaps" in Circle\'s 30-level curriculum means:',
        opts: ['All students score 100% on every quiz', 'All 170 platform content pieces are mapped to levels — completing L30 = consuming all platform content', 'No difficult topics are covered', 'Students never need to reference external materials'], a: 1 },
      { q: 'Which component of the curriculum directly addresses the Level 23-24 topics?',
        opts: ['Options Market Making & Inventory', 'Deep Learning for Order Book Prediction and RL for Market Making', 'Lock-Free Programming & Memory Models', 'Prime Brokers, Clearing & Regulation'], a: 1 }
    ]
  }
];

const MERIT_EXAM = {
  passingScore: 85,
  timeLimit: 45 * 60,
  questions: [
    { q: 'A trade wins 40% of the time with a 3:1 payout. Using EV = Σ(p×outcome), the EV per $1 risked is:', opts: ['$0.20 (positive)', '$0.40', '$0.80', '-$0.20 (negative)'], a: 0 },
    { q: 'The Kelly fraction for a strategy with Sharpe ratio SR and volatility σ is:', opts: ['SR × σ', 'SR / σ', 'SR / σ²', 'μ / σ²'], a: 3 },
    { q: 'The Itô correction term in GBM S(T) = S(0)exp((μ - __) T + σW(T)) is:', opts: ['+σ²', '-σ²', '+σ²/2', '-σ²/2'], a: 3 },
    { q: 'Two price series that are cointegrated share:', opts: ['The same variance over all horizons', 'A stationary long-run spread that mean-reverts', 'Correlation coefficient above 0.9', 'The same ARIMA model order'], a: 1 },
    { q: 'Portfolio variance is w\'Σw. If Σ has a negative eigenvalue, this indicates:', opts: ['High portfolio risk', 'A valid portfolio with negative correlation', 'A corrupted or invalid covariance matrix', 'Short positions dominate the portfolio'], a: 2 },
    { q: 'Order Book Imbalance (OBI) = (BidQty - AskQty)/(BidQty + AskQty) is used as:', opts: ['A measure of bid-ask spread efficiency', 'A short-horizon price direction predictor', 'A proxy for realized volatility', 'An indicator of clearing house default risk'], a: 1 },
    { q: 'In Glosten-Milgrom, the bid-ask spread is compensation for:', opts: ['Exchange transaction fees', 'Market maker inventory costs', 'Adverse selection — losses to informed traders', 'Regulatory compliance overhead'], a: 2 },
    { q: 'VPIN measures order flow toxicity using:', opts: ['Time-weighted price impact', '|BuyVolume - SellVolume| / TotalVolume per bucket', 'Bid-ask spread × order size', 'Number of market orders per minute'], a: 1 },
    { q: 'Under the risk-neutral measure Q used in option pricing, all assets drift at:', opts: ['Zero (martingale)', 'Their Sharpe ratio', 'The risk-free rate r', 'Realized volatility σ'], a: 2 },
    { q: 'Put-call parity: C - P = S - Ke^(-rT) is:', opts: ['A result specific to Black-Scholes', 'Model-free — holds under any no-arbitrage model', 'Valid only for American-style options', 'An approximation valid only for ATM options'], a: 1 },
    { q: 'The volatility smile (IV varying by strike) violates which Black-Scholes assumption?', opts: ['Log-normal asset prices', 'Constant interest rates', 'Constant volatility', 'Continuous trading'], a: 2 },
    { q: 'Long gamma options positions profit when:', opts: ['Implied volatility decreases', 'Realized volatility exceeds implied volatility', 'Time decay accelerates near expiry', 'The underlying price is stable'], a: 1 },
    { q: 'The ETF creation mechanism prevents ETF prices from diverging from NAV by:', opts: ['Automatic exchange circuit breakers', 'Authorized participants arbitraging: if ETF > NAV, buy basket, create ETF shares, sell at premium', 'ETF managers buying/selling shares daily', 'Central counterparty forced settlement'], a: 1 },
    { q: 'The square-root law of market impact means halving your order size reduces market impact by:', opts: ['50% (linear)', '29% (1 - 1/√2)', '75%', '0% (impact is fixed)'], a: 1 },
    { q: 'DPDK reduces network latency by:', opts: ['Using faster Ethernet cables', 'Bypassing the kernel — delivering packets directly from NIC to userspace via polling', 'Compressing packets before transmission', 'Using dedicated network hardware for each trading strategy'], a: 1 },
    { q: 'False sharing in multi-threaded code occurs when:', opts: ['Two threads access the same memory address simultaneously', 'Two threads access different variables that happen to share a CPU cache line, causing cache invalidation', 'Producer and consumer use different memory allocators', 'Lock-free data structures are used incorrectly'], a: 1 },
    { q: 'NUMA-aware memory allocation improves latency because:', opts: ['It uses faster memory chips', 'It eliminates cross-NUMA memory access latency (50-100ns per access)', 'It enables huge page allocation', 'It reduces TLB miss rates directly'], a: 1 },
    { q: 'An FPGA achieves sub-100ns tick-to-trade because:', opts: ['FPGAs have higher GHz clock speeds than CPUs', 'Trading logic executes in parallel hardware pipelines without OS or instruction fetch overhead', 'FPGAs are co-located closer to exchange matching engines', 'FPGAs use specialized memory optimized for financial data'], a: 1 },
    { q: 'C++ CRTP (Curiously Recurring Template Pattern) achieves runtime polymorphism with:', opts: ['Virtual function tables', 'Zero overhead — resolved entirely at compile time through template instantiation', 'Shared memory between derived and base class instances', 'Dynamic dispatch via function pointers'], a: 1 },
    { q: 'LMAX Disruptor outperforms ArrayBlockingQueue because it:', opts: ['Uses kernel bypass for queue operations', 'Uses a ring buffer with sequence number atomics — no locks, better cache behavior', 'Batches messages to amortize overhead', 'Runs in dedicated kernel threads'], a: 1 },
    { q: 'The CAP theorem trade-off made by trading systems (CP over A) means:', opts: ['Trading systems prefer consistency and tolerate being unavailable during network partitions', 'Trading systems sacrifice consistency for higher availability', 'Trading systems guarantee all three properties simultaneously', 'Availability is more important than consistency for execution'], a: 0 },
    { q: 'Event sourcing in trading systems is valued primarily for:', opts: ['Reducing database write latency', 'Audit trail compliance + state reconstruction via log replay after failures', 'Eliminating the need for distributed consensus', 'Preventing duplicate order submission'], a: 1 },
    { q: 'Colocation in the same data center as the exchange reduces round-trip latency from ~300μs to:', opts: ['100μs', '50μs', '1-5μs', 'Sub-100ns'], a: 2 },
    { q: 'DeepLOB uses a combination of which neural network architectures?', opts: ['GAN + Transformer', 'Conv1D + Inception + LSTM', 'BERT + LSTM', 'Random Forest + RNN'], a: 1 },
    { q: 'PPO\'s clipped objective function prevents:', opts: ['Reward sparsity in sparse market environments', 'Large, destructive policy updates that destabilize RL training', 'The agent from taking short positions', 'Overfitting to specific market regimes'], a: 1 },
    { q: 'Look-ahead bias is most dangerously introduced in backtests when using:', opts: ['End-of-day prices', 'Revised fundamental data (not point-in-time) — using data as it appears today, not as it was known historically', 'Tick-level order book data', 'Market cap weighted factor construction'], a: 1 },
    { q: 'SEC Rule 15c3-5 (Market Access Rule) mandates trading firms implement:', opts: ['Post-trade transaction reporting within 15 minutes', 'Pre-trade risk controls — position limits, rate limits, fat-finger checks', 'Annual strategy disclosure to the SEC', 'Minimum capital requirements of $10M'], a: 1 },
    { q: 'The high-water mark in a trading fund\'s 2/20 structure protects LPs by:', opts: ['Guaranteeing a 2% minimum annual return', 'Ensuring performance fees are only charged on profits above previous peak NAV', 'Limiting total management fee to 2% regardless of AUM growth', 'Requiring the fund to return capital after losses'], a: 1 },
    { q: 'Knight Capital\'s $440M loss in 45 minutes (2012) was caused by:', opts: ['Adverse selection from informed traders', 'A software deployment error activating a dormant algorithm without proper risk controls', 'Exchange circuit breaker failure during a flash crash', 'Prime broker credit line withdrawal'], a: 1 },
    { q: 'The durable competitive moat for an HFT firm comes from:', opts: ['Exclusive strategy alpha that is unique and uncopiable', 'Technology + talent moats — infrastructure and teams that compound over time, since pure strategy alpha decays', 'Regulatory licensing that prevents new entrants', 'Being the largest firm by AUM in the target market'], a: 1 }
  ]
};
