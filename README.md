# Predicting Polestar Success

### Project Outline

**Presentation**

We are looking to learn from past experiences to help us make investment decisions as we go into a slowing economy. We will be reviewing stock data from Tesla and 9 other electric vehicle companies. Once we have this information we will make a predictive model to help us make the best choices going into our first investments. 

Polestar electric vehical company went public recently in June 2022. Can past performance of Tesla and other EV companies predict when the best time is to invest in Polestar? 

- Description of the source of data:
Yahoo Finance API of historical pricing data to train our model for future price predictions using volume as a predictor.  

- Questions we hope to answer with the data:
Based on the performance of Tesla from its IPO in 2010 at the tail end of a recession, how well can we anticipate doing when the timeline of our IPO, Polestar is in simular conditions? How well suited are we to be competitive in the market. 


**Assumptions**

When putting this model together a few assumptions were made, such as:
- We assume the current market trends will continue
- We assume the current liquidity tightening will continue, given the inflataion rate
- We assume the higher inflation rate has already been factored into market prices
- We assume the current economy will continue - layoffs/unemployment on the rise, companies tightening budgets and limiting/stop hiring
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

<table><tr><td>Intro</td></tr></table>

In order to create a model that uses trading volume to predict future share price, we first predicted the future price of 10 electric car company stocks, and then compared trading volume to stock prices.
	
<ins>Step 1: Description of preliminary data preprocessing</ins>

Using the Yahoo Finance API to pull historical pricing data for each of the 10 electric vehicle companies and save in csv files. Then create a combined file of historical pricing for all 10 EVs.  Drop irrelevant columns such as Splits and Dividends from our dataframe that add no value to our model.

The columns of information are the following:  1) Date; 2) Close; 3) Volume; and 4) Ticker

<ins>Step 2: Start Building the Model</ins>

Our target for the model will be to predict the price tomorrow. If the price went up, the target will be 1 and if it went down, the target will be 0.

<img width="1085" alt="Start Building the Model " src="https://user-images.githubusercontent.com/97544078/181644570-61b8f07d-8ecb-49d8-8456-fb6fa154d771.png">

<table><tr><td>Explanation of Model Choice</td></tr></table>

Using a Random Forest Classifier to generate our predictions. It is good for our purposes of predicting a binary classifier: 1 if the price goes up or 0 if the price goes down.

<table><tr><td>Benefits of Model Choice</td></tr></table> 

We want to maximize our true positives. Therefore, we'll be using precision as our error metric for our algorithm, which is true positives / (false positives + true positives). If we were investing, this will ensure that we minimize how much money we lose with false positives, days when we buy the stock, but the price actually goes down.

<table><tr><td>Limitations of Model Choice</td></tr></table>

We accept a lot of false negatives - days when we predict that the price will go down, but it actually goes up. This is okay. If we were investing we'd rather minimize our potential losses than maximize our potential gains. It also gives us a better picture of future performance when measuring other EVs against Polestar.

To check how accurate the model is we use precision to measure error. We do this by using the precision score function from scikit-learn. Our model is directionally accurate 52% of the time, only slightly better than a coin flip. 

<table><tr><td>Description of how data was split into training and testing sets</td></tr></table>

Combine both (original and shifted one day forward data) so we have our training data.

With time series data, we have to be mindful of leakage. To avoid this issue we split the data sequentially starting by predicting just the last 100 rows using the other rows.

<ins>Step 3: Optimizing the Model</ins>

Back Testing

Our back testing method will loop over the dataset, and train the model every 750 rows using a function.
The back testing function will: 

• Split the training and test data 

• Train a model 

• Make predictions on the test data using predict_proba  and rolling means to optimize for true positives.
Our precision score increased from 52% to 55%.

<table><tr><td>Using Our Model to Predict Price Based on Volume</td></tr></table>

Next we predict a correlation of higher stock prices and higher trading volume using a linear regression model. By testing the stock price for each Electric Vehicle company (EV) using an arbitrary number of shares (in this example 1 million and billion shares traded), we see a pattern emerge.

<img width="1080" alt="TSLA Price at 1 Billion Volume" src="https://user-images.githubusercontent.com/97544078/181644452-456fe517-19ae-4d91-bce3-588021d7ed3d.png">

<table><tr><td>Results of Prediction</td></tr></table>

The average EV company has an average predicted share price of $200, with a range of $100-$330 with except of a few outliers. Faraday Future’s stock price is not predicted to do well at -$67 per share. However, Rivian is predicted at $582 per share respectively. Telsa is predicted at a whopping $864 per share, which is an unfair comparison to the average EV car company because Telsa does so much more. 

If Polestar would like to be at the same level as Telsa, they would need to add additional businesses and marketing like Tesla who has tremendous brand recognition. However, if they would like to stick with EV vehicles only, they have a good chance at share prices rising to the same level as the average EV companies. Of course, other considerations would need to be taken into account for future success.

 <img width="555" alt="EV Volume Predictors" src="https://user-images.githubusercontent.com/97544078/181644363-19632d60-75f2-4388-8dbb-dc11727baf40.png">

<table><tr><td>Future Recommendations</td></tr></table>

The following predictors could also be used to gauge future predictions:

Economic indicators: 
- Interest Rates 
- News/Sentiment

Company Fundamentals: 
- Earnings and Dividends
- Analyst Ratings
- Company Milestones and Major Announcements


**Database Integration**
  
  - For our project we used the top 10 electic vehicle compananies in the word and the historical data for their stock prices and sales volume.
  
  To start we created an ERD to plan out our tables:
  
  <img width="400" alt="ERD" src="https://github.com/HollyESmith/Forecasting_Polestar_Success/blob/main/Database/Final%20ERD.png">
  
  Then used this to create our tables in PGAdmin where we used SQL:
  
  <img width="400" alt="SQL Database" src="https://github.com/HollyESmith/Forecasting_Polestar_Success/blob/main/Resources/SQL%20Database.png">
  
  Once we determined that joining the tables with SQL would not be beneficial we switched to using Python and Jupyter Notebook:
  
  <img width="400" alt="database integration" src="https://github.com/HollyESmith/Forecasting_Polestar_Success/blob/main/Resources/database%20integration.png">
  
  Then we exported the joined file as a new CSV as you can see in the Database file. 
  
**Dashboard**

- Blueprint for the dashboard is created and includes all of the following:
  Storyboard on Tableau
  - Slide 1 = Predicting Polestar Success
  - Slide 2 = Overview of the project and Team
  - Slide 3 = Technologies used for project
  - Slide 4 = Data Exploration
  - Slide 5 = Model analysis
  - Slide 6 = Model analysis continued
  - Slide 7 = Model analysis results
  - Slide 8 = [Link to Tableau Dashboard](https://public.tableau.com/app/profile/cheryl3177/viz/Forecasting_Polestar_Success/PredictingPolestarSuccess?publish=yes)
  - Slide 9 = Recommendations
  - Slide 10 = Postmortem
  - Slide 11 = Q & A

  Description of the tools that will be used to create the final dashboard  
  - We will be using Tableau to build and display the presentation
  - Tableau will be used to analyze ten public electric vehicle (EV) companies
  
  Description of interactive element(s)
  - We are pulling the Tableau story into the dashboard for the presentation
  - The analysis of EV companies will be interactive
  - We have added news stories related to the ten EV companies to the dashboard
