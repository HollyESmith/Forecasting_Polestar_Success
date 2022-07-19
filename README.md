# Recession_Resistant_IPOs (update title to be more TSLA specific?)

**README must include** (will delete this text before final submission - this is a reminder):
  - outline of the project (this may include images, but should be easy to follow and digest) 
  - descriptions and explanations required in all other project deliverables


### Project Outline

**Presentation**

We are looking to learn from years past to help us make investment decisions as we go into a slowing economy. We will be reviewing data from 2008 and 2009 but we will specifically be looking at IPOs. More specifically we will be looking IPOs per year, the initial valuations, and then subsequent performance in one year. Once we have this information we will make a predictive model to help us make the best choices going into our first investments. 

Now, what is an IPO? IPO stands for Initial Public Offering and is the very first sale of a stock issued by a company on the public market. This basically means that you are turning your private company into a public one. Why would a company go public? This action raises money for the company that can help it to scale and grow, along with investing in infrastructure and talented employees. Overall the goal is for the company and investors to make a large amount of money personally and for company operations. 

- Description of the source of data:
StockAnalysis.com for a list of IPOS launched in the last recession 2008. Kaggle for a list of US Company information on these IPOS. Finally an API of historical pricing data to train our model for future price predictions.  

- Questions we hope to answer with the data:
Like Warren Buffet, we'd like to capitalize on a down market in the next recession by investing in "Recession Proof IPOs". Specifically buying low and selling high. Our model will try to predict if such a thing exists based on prior IPO performance in the last recession. 

**Assumptions**

When putting this model together a few assumptions were made, such as:
- We assume the economy is going into a recession
- We assume the economy was going into a recession in 2008 and are using 2008 IPO data for the model
- We assume the current market trends are similiar to the 2008 market trends
- We assume the current liquidity tightening is similiar to 2008 liquidity
- Inflation is currently higher than it was in 2008, but we assume the higher inflation has already been factored into market prices
- We assume the economy is similiary to the economy in 2008 - unemployment on the rise, companies tightening budgets and limiting hiring

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

- Blueprint for the dasboard is created and includes all of the following:
  - Storyboard on Google Slides  
  - Description of the tools that will be used to create the final dashboard  
  - Description of interactive element(s)
