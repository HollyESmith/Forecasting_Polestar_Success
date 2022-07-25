# Recession_Resistant_IPOs (update title to be more Polestar/TSLA/EV's specific?)

**README must include** (will delete this text before final submission - this is a reminder):
  - outline of the project (this may include images, but should be easy to follow and digest) 
  - descriptions and explanations required in all other project deliverables


### Project Outline

**Presentation**

We are looking to learn from past experiences to help us make investment decisions as we go into a slowing economy. We will be reviewing stock data from Tesla starting in 2010 to today. Once we have this information we will make a predictive model to help us make the best choices going into our first investments. 

Polestar electric vehical company has gone public recently, in June 2022. We are looking to learn from the performance of Tesla and other EV companies over the years to predict when the best time is to invest in Polestar.

- Description of the source of data:
StockAnalysis.com for a list of IPOS launched in the last recession 2008. Kaggle for a list of US Company information on these IPOS. Finally an API of historical pricing data to train our model for future price predictions using volume as a predictor.  

- Questions we hope to answer with the data:
Based on the performance of Tesla from its IPO in 2010 at the tail end of a recession, how well can we anticipate doing when the timeline of our IPO, Polestar is in simular conditions? How well suited are we to be competitive in the market. 

**Assumptions**

When putting this model together a few assumptions were made, such as:
- We assume the current market trends are similar to the 2010 market trends
- We assume the current liquidity tightening is similar to 2010 liquidity
- Inflation is currently higher than it was in 2010, but we assume the higher inflation has already been factored into market prices
- We assume the economy is similar to the economy in 2010 - layoffs/unemployment on the rise, companies tightening budgets and limiting/stop hiring
- We believe electric vehicles are increasing and will continue to do so, especially given:
    - the current price of gas, 
    - the favorable sentiment towards environmentally friendly products, and
    - emission gas reduction goals in the US
    - Tax incentive available with undetermined phaseout period 

**GitHub Respository**

Description of communication protocols:
- Slack channel created
- Exchanged cell numbers & emails
- Utilize class time Monday & Wednesday


**Machine Learning Model**

- Description of preliminary data preprocessing 
 
- Description of preliminary feature engineering and preliminary feature selection, including their decision-making process 
  
  Use the Yahoo Finance API to pull historical pricing data and save in a csv file to avoid having to continuously download from the API. 
  
  The columns of information are the following:
  Open - the price the stock opened at.
  High - the highest price during the day
  Low - the lowest price during the day
  Close - the closing price on the trading day
  Volume - how many shares were traded
  *Please note some dates are missing as the stock does not trade weeekends or federal holidays. 
  
  Dropping irrelevant collumns such as Splits and Dividends from our dataframe that aadd no value to our model. 
  
  Plot the data to visualize the pricing data overtime. 
  
 Our target is if the price will go up or down tomorrow. If the price went up, the target will be 1 and if it went down, the target will be 0.

Next shift the data one day "forward" to predict the target price to ensures that we don't use same day data to make predictions. 

Then combine both (original and shifted one day forward data) so we have our training data.

  - Description of how data was split into training and testing sets

With time series data, we have to be mindful of leakage when data from the future will be used to predict past prices. To avoid this issue we split the data sequentially starting by predicting just the last 100 rows using the other rows.

  - Explanation of model choice, including limitations and benefits 
  
Usings a random forest classifier to generate our predictions. This is a popular "default" model. It can pick up nonlinear relationships in the data and is somewhat robust to overfitting with the right parameters. It is good for our purposes of predicting a binary classifier 1 if the price goes up or 0 if the price goes down. 


We want to maximize our true positives - days when the algorithm predicts that the price will go up, and it actually goes go up. Therefore, we'll be using precision as our error metric for our algorithm, which is true positives / (false positives + true positives). If we were invsting, this will ensure that we minimize how much money we lose with false positives, days when we buy the stock, but the price actually goes down.

We accept a lot of false negatives - days when we predict that the price will go down, but it actually goes up. This is okay, if we were investing we'd rather minimize our potential losses than maximize our potential gains. It also gives us a better picture of furture performance when measuring other EVs against Polestar. 

To check how accurate the model iss we use precision to measure error. We do this by using the precision_score function from scikit-learn. Our model is directionally accurate 52% of the time, only slighly better than a coin flip. We can take a deeper look at the individual predictions and the actuals, and see where we're off.

Backtesting

Our model isn't great, but luckily we can still improve it. Before we do that, let's figure out how to make predictions across the entire dataset, not just the last 100 rows. This will give us a more robust error estimate. The last 100 days may have has atypical market conditions or other issues that make error metrics on those days unrealistic for future predictions (which are what we really care about).

To do this, we'll need to backtest ensuring that we only use data from before the day that we're predicting. If we use data from after the day we're predicting, the algorithm is unrealistic and we won't be able to use future data to predict that past.

Our backtesting method will loop over the dataset, and train a model every 750 rows. We'll make it a function so we can avoid rewriting the code if we want to backtest again.

In the backtesting function, we will:
•	Split the training and test data
•	Train a model
•	Make predictions on the test data using predict_proba - this is because we want to really optimize for true positives. By default, the threshold for splitting 0/1 is .5, but we can set it to different values to tweak the precision. If we set it too high, we'll make fewer trades, but will have a lower potential for losses.

As you can see, we're only making 64 trades! This is because we used .6 as a threshold for trading. However, our precision score increase a bit to 54%. 

We will add more predictors to see if we can improve accuracy. By adding some rolling means, the model can evaluate the current price against recent prices. We'll also look at the ratios between different indicators. The precision score increased anogther point to 55% and we are trading a higher numnber of shares at 244. 

In addition to predicting the price pf Tesla a few days out, we also added an additional prediction comparing volume to price. 

Next we try predicting a correlation of higher stock prices and higher trading volume. When testing the stock price for each Electric Vehicle company (EV) using an arbitrary number of shares (in this example 1 billion shares traded), we see a pattern emerge. 

By editting our code for Telsa and using the other EV's tickers. We see share prices begin to rise: 

Company Name	  Reg Predict

Telsa	          864.0131697

Polestar	      67.50218539

Rivian	        551.8466879

Li Auto	        142.1955553

XPENG INC	      230.6610234

Lucid	          177.0054577

NIO	            100.3015588

Fisker	        221.5805998

Nikola	        330.1966441

Faraday Future	-67.57118235
	
	
	
	![image](https://user-images.githubusercontent.com/97544078/180863473-78cbd0e0-2b55-4218-81d7-ba5bbb6736f3.png)


Most average EV companies have an average predicted share price of $200, with a range of $100-$330 with except of a few outliers. Faraday Future’s stock price is not predicted to do well at -$67 per share. However, Rivian is predicted at $582 per share respectively. 

Telsa is predicted at a whopping $864 per share, which is an unfair comparison to the average EV car company because Telsa does so much more. Tesla would be more on par with Ford or GM who also have other businesses. 

If Polestar would like to be at the same level as Telsa, they would need to add additional businesses and marketing like Tesla who has tremendous brand recognition in the industry.  However, if they would like to stick with EV vehicles only, like the other EV companies, they have a good chance at share prices rising to the same level as your average EV company. Of course, other considerations would need to be made. 

For example adding in more of the following predictors:

•	Account for activity post-close and pre-open
  
    Such as eearly trading and trading on other exchanges that open before the NASDAQ to see what the global sentiment is. 
  
•	Economic indicators

	  Interest rates

    Other important economic news
    
•	Key dates

    Dividends

    External factors like elections
    
•	Company milestones

    Earnings calls
    Analyst ratings
    Major announcements
    
•	Prices of related stocks
    Other companies in the same sector
    Key partners, customers, etc.



**Database Integration**

- Provisional ERD:
<img src="https://github.com/HollyESmith/Recession_Resistant_IPOs/blob/main/Resources/ERD.png">

  - Sample data that mimics expected final database structure:
  
  <img src="https://github.com/HollyESmith/Recession_Resistant_IPOs/blob/main/Resources/2010_IPOs.png">
  
  <img src="https://github.com/HollyESmith/Recession_Resistant_IPOs/blob/main/Resources/tesla_history.png">
  
  - Draft machine learning model is connected to the provisional database - the Yahoo API is connected to the model to pull historical pricing.
  
**Dashboard**

- Blueprint for the dashboard is created and includes all of the following:
  Storyboard on Google Slides
  - Slide 1 = Image of a Tesla
  - Slide 2 = Overview of the project and Team
  - Slide 3 = Data source information and technologies used for the project
  - Slide 4 = Tesla competitor stock information
  - Slide 5 = Information about the electric vehicle (EV) market
  - Slide 6 = The question the team is trying to answer with the model's prediction
  - Slide 7 = Information about the database and output
  - Slide 8 = An analysis of the results of the model
  - Slide 9 = The conclusion from the model's results
  - Slide 10 = Outline of the Dashboard
  - Slide 11 = Recommendations
  - Slide 12 = Postmortem
    
  Description of the tools that will be used to create the final dashboard  
  - We are planning on using Tableau to build and display the dashboard
  - We intend to pull in the clean data output as well as the database information to create charts for some of the information
  
  Description of interactive element(s)
  - We are planning on having a ticket tape scrolling over the page
  - We would like to create a "model" portfolio of electric vehicles and components for electric vehicles  
  - We are hoping to pull in relevant news stories as well
