# Predicting Polestar Success

**README must include** (will delete this text before final submission - this is a reminder):
  - outline of the project (this may include images, but should be easy to follow and digest) 
  - descriptions and explanations required in all other project deliverables


### Project Outline

**Presentation**

We are looking to learn from past experiences to help us make investment decisions as we go into a slowing economy. We will be reviewing stock data from Tesla starting in 2010 to today. Once we have this information we will make a predictive model to help us make the best choices going into our first investments. 

Polestar electric vehical company has gone public recently, in June 2022. We are looking to learn from the performance of Tesla and other EV companies over the years to predict when the best time is to invest in Polestar.

- Description of the source of data:
Yahoo Finance API of historical pricing data to train our model for future price predictions using volume as a predictor.  

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

Intro

In order to create a model that uses trading volume to predict future share price, we created two steps: 

•	Predicts the future price of 10 Electric car company stocks

•	Compared trading volume to stock prices
	
•	Step 1: Description of preliminary data preprocessing

Using the Yahoo Finance API to pull historical pricing data for each of the 10 electric vehicle companies and save in csv files. Then create a combined file of historical pricing for all 10 EVs.  Drop irrelevant columns such as Splits and Dividends from our dataframe that add no value to our model.

The columns of information are the following: 

Date 
Close 
Volume 
Ticker 

•	Step 2: Start Building the Model

Our target for the model will be to predict the price tomorrow. If the price went up, the target will be 1 and if it went down, the target will be 0.

<img width="1085" alt="Start Building the Model " src="https://user-images.githubusercontent.com/97544078/181644570-61b8f07d-8ecb-49d8-8456-fb6fa154d771.png">

 
•	Explanation of Model Choice 

Using a Random Forest Classifier to generate our predictions. This is a popular "default" model. It can pick up nonlinear relationships in the data and is somewhat robust to overfitting with the right parameters. It is good for our purposes of predicting a binary classifier: 1 if the price goes up or 0 if the price goes down.

•	Benefits of Model Choice 

We want to maximize our true positives - days when the algorithm predicts that the price will go up, and it actually goes go up. Therefore, we'll be using precision as our error metric for our algorithm, which is true positives / (false positives + true positives). If we were investing, this will ensure that we minimize how much money we lose with false positives, days when we buy the stock, but the price actually goes down.
•	Limitations of Model Choice

We accept a lot of false negatives - days when we predict that the price will go down, but it actually goes up. This is okay. If we were investing we'd rather minimize our potential losses than maximize our potential gains. It also gives us a better picture of future performance when measuring other EVs against Polestar.

To check how accurate the model is we use precision to measure error. We do this by using the precision score function from scikit-learn. Our model is directionally accurate 52% of the time, only slightly better than a coin flip. We can take a deeper look at the individual predictions and the actuals, and see where we're off.

•	Description of how data was split into training and testing sets

Combine both (original and shifted one day forward data) so we have our training data.
With time series data, we have to be mindful of leakage (when data from the future will be used to predict past prices). To avoid this issue we split the data sequentially starting by predicting just the last 100 rows using the other rows.

•	Step 3 Optimizing the Model

Beck Testing

Our back testing method will loop over the dataset, and train a model every 750 rows using a function.
The back testing function will: 

• Split the training and test data 

• Train a model 

• Make predictions on the test data using predict_proba  and rolling means to optimize for true positives.
Our precision score increased from 52% to 55%.

•	Using Our Model to Predict Price Based on Volume

Next we predict a correlation of higher stock prices and higher trading volume using a linear regression model. By testing the stock price for each Electric Vehicle company (EV) using an arbitrary number of shares (in this example 1 million and billion shares traded), we see a pattern emerge.

<img width="1080" alt="TSLA Price at 1 Billion Volume" src="https://user-images.githubusercontent.com/97544078/181644452-456fe517-19ae-4d91-bce3-588021d7ed3d.png">


•	Results of Prediction

The average EV company has an average predicted share price of $200, with a range of $100-$330 with except of a few outliers. Faraday Future’s stock price is not predicted to do well at -$67 per share. However, Rivian is predicted at $582 per share respectively.
Telsa is predicted at a whopping $864 per share, which is an unfair comparison to the average EV car company because Telsa does so much more. Tesla would be more on par with Ford or GM who also have other businesses.

If Polestar would like to be at the same level as Telsa, they would need to add additional businesses and marketing like Tesla who has tremendous brand recognition. However, if they would like to stick with EV vehicles only, like the other EV companies, they have a good chance at share prices rising to the same level as it’s competitors. Of course, other considerations would need to be taken into account for future success.

 <img width="555" alt="EV Volume Predictors" src="https://user-images.githubusercontent.com/97544078/181644363-19632d60-75f2-4388-8dbb-dc11727baf40.png">

•	Future Recommendations 

The following predictors could also be used to gauge future predictions:

Economic indicators: 
Interest Rates 
News/Sentiment
Company Fundamentals: 
Earnings and Dividends
Analyst Ratings
Company Milestones and Major Announcements


 


**Database Integration**


  
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
