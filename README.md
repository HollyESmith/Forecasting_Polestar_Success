# Recession_Resistant_IPOs

## Deliverable 1, Due 7/17/2022

### Project Outline

**Presentation**

We are looking to learn from years past to help us make investment decisions as we go into a slowing economy. We will be reviewing data from 2008 and 2009 but we will specifically be looking at IPOs. More specifically we will be looking IPOs per year, the initial valuations, and then subsequent performance in one year. Once we have this information we will make a predictive model to help us make the best choices going into our first investments. 

- Description of the source of data:
StockAnalysis.com for a list of IPOS launched in the last recession 2008. Kaggle for a list of US Company information on these IPOS. Finally an API of historical pricing data to train our model for future price predictions.  

- Questions we hope to answer with the data:
Like Warren Buffet, we'd like to capitalize on a down market in the next recession by investing in "Recession Proof IPOs". Specifically buying low and selling high. Our model will try to predict if such a thing exists based on prior IPO performance in the last recession. 

**GitHub Respository**

- Description of communication protocols:

  - Slack channel created
  
  - Exchanged cell numbers & emails
  
  - Utilize class time Monday & Wednesday
  
**Data Aquisition and Cleaning

Step 1 - Pull a list of 2008 IPOS from StockAnalysis.com and a list of US company data from Kaggle.
Step 2 - Read both files into a Pandas dataframe; IPOS_2008_df and us_companies_df.
Step 3 - Rename symbol column in IPO_2008_df to ticker.
Step 4 - Merge two files with an inner merge on ticker column. 
Step 5 - Inner merge produced only 66 complete rows of data out of 144. Compared with a left merge and screened for nan/null values, which were 80 rows. Researched some of the missing 80 companies to determine if they are still in existance. They are, which indicated our Kaggle data is incomplete. However, for our purpooses a sampling of 66 IPO/company data is fine and it is more important to proceed with complete a complete data set. We will set our parameters to these 66 IPOS. 
Step 6 - Set Parameters to drop all rows with incomplete data. 
Step 7 - Rename and reorder columns. Drop irrelevant columns of data. 

**Machine Learning Model**

- Create a provisional machine learning model that stands in for the final model and

  i. takes in data from the provisional database

  ii. outputs label for input data

**Database Integration**

- Provisional database:

  i. has sample data that mimics expected final database structure
  
  ii. Draft machine learning model is connected to the provisional database
  
**Dashboard**
  
  No deliverables for segment 1
  
## Deliverable 2, Due 7/24/2022

**Presentation**

Presentation is drafted in Google Slides. 

**GitHub Respository**

Main Branch:

- All code in the main branch is production-ready. Main branch should include:

  - All code necessary to perform exporatory analysis
  
  - Some code necessary to complete the machine learning portion of the project.
  
- README must include: 

  - outline of the project (this may include images, but should be easy to follow and digest) 

  - descriptions and explanations required in all other project deliverables
  
- Each team member has at least four commits for the duration of the second segment 

**Machine Learning Model**

- Team members submit the code for their machine learning model, as well as:

  - Description of preliminary data preprocessing
 
  - Description of preliminary feature engineering and preliminary feature selection, including their decision-making process 
 
  - Description of how data was split into training and testing sets

  - Explanation of model choice, including limitations and benefits 
 
**Database**

- Present a fully integrated database:

  - Database stores static data for use during the project

  - Database interfaces with the project in some format (e.g. webscraping or connect to the model)

  - Includes at least 2 tables

  - Includes at least one join

  - Includes at least one connection string (using SQLAcademy or PyMongo)

  - ERD with relationships

**Dashboard**

- Blueprint for the dasboard is created and includes all of the following:

  - Storyboard on Google Slides
  
  - Description of the tools that will be used to create the final dashboard
  
  - Description of interactive element(s)
