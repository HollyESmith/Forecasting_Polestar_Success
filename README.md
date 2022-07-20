# Recession_Resistant_IPOs (update title to be more TSLA specific?)

**README must include** (will delete this text before final submission - this is a reminder):
  - outline of the project (this may include images, but should be easy to follow and digest) 
  - descriptions and explanations required in all other project deliverables


### Project Outline

**Presentation**

We are looking to learn from past experiences to help us make investment decisions as we go into a slowing economy. We will be reviewing stock data from Tesla starting in 2010 to today. Once we have this information we will make a predictive model to help us make the best choices going into our first investments. 

Polestar electric vehical company has gone public recently, in June 2022. We are looking to learn from the performance of Tesla over the years to predict when the best time is to invest in Polestar.

- Description of the source of data:
StockAnalysis.com for a list of IPOS launched in the last recession 2008. Kaggle for a list of US Company information on these IPOS. Finally an API of historical pricing data to train our model for future price predictions.  

- Questions we hope to answer with the data:
Like Warren Buffet, we'd like to capitalize on a down market in the next recession by investing in "Recession Proof IPOs". Specifically buying low and selling high. Our model will try to predict if such a thing exists based on prior IPO performance in the last recession. 

**Assumptions**

When putting this model together a few assumptions were made, such as:
- We assume the current market trends are similar to the 2010 market trends
- We assume the current liquidity tightening is similar to 2010 liquidity
- Inflation is currently higher than it was in 2010, but we assume the higher inflation has already been factored into market prices
- We assume the economy is similar to the economy in 2010 - layoffs/unemployment on the rise, companies tightening budgets and limiting/stop hiring
- We believe electric vehicles are increasing and will continue to do so, especially given:
    - the current price of gas, 
    - the favorable sentiment towards environmentally friendly products, and
    - emission gas reduction goals

**GitHub Respository**

Description of communication protocols:
- Slack channel created
- Exchanged cell numbers & emails
- Utilize class time Monday & Wednesday


**Machine Learning Model**

- Description of preliminary data preprocessing
 
- Description of preliminary feature engineering and preliminary feature selection, including their decision-making process 
  
  Use the Yahoo Finance API to pull historical pricing data and save in a csv file. 
  
  The columns of information are the following:
  Open - the price the stock opened at.
  High - the highest price during the day
  Low - the lowest price during the day
  Close - the closing price on the trading day
  Volume - how many shares were traded
  *Please note some dates are missing as the stock does not trade weeekends or federal holidays. 
  
  Plot the data to visualize the pricing data overtime. 
  
 Our target is if the price will go up or down tomorrow. If the price went up, the target will be 1 and if it went down, the      target will be 0.

Next shift the data one day "forward" to predict the target price to ensures that we don't use same day data to make predictions. 

Then combine both so we have our training data.

  - Description of how data was split into training and testing sets

With time series data, we have to be mindful of leakage when data from the future will be used to predict past prices. To avoid this issue split the data sequentially starting by predicting just the last 100 rows using the other rows.

  - Explanation of model choice, including limitations and benefits 
  
Usings a random forest classifier to generate our predictions. This is a popular "default" model. It can pick up nonlinear relationships in the data and is somewhat robust to overfitting with the right parameters. It is good for our purposes of predicting a binary classifier 1 if the price goes up or 0 if the price goes down. 

**Database Integration**

- Provisional ERD:

![ERD](https://user-images.githubusercontent.com/97558998/179062689-019852b6-c839-4868-a8b4-328e94726a05.png)

  - Sample data that mimics expected final database structure:
  
  <img width="1042" alt="sample database" src="https://user-images.githubusercontent.com/97558998/179062619-ee092061-c2b0-4cf3-b632-f41576cbaa47.png">
  
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
