# Algolia_Filtering




#INSTALLATION

1 npm install algoliasearch react-instantsearch-hooks
           =============OR==================        
yarn add algoliasearch react-instantsearch-hooks


2.yarn add react-instantsearch-native

3.These are the dependencies we need    
 dependencies:  
    "@types/react-instantsearch-native": "^6.3.2",   
    "algoliasearch": "^4.14.2",  
    "react": "18.1.0",  
    "react-instantsearch-dom": "^6.38.1",  
    "react-instantsearch-native": "^6.38.1",  
    "react-native": "0.70.6"


<InstantSearch> provider component connects your InstantSearch app to your Algolia application.
 It accepts a search client and the index to search into.

 #Algolia SetUp

1. Go to algolia.com and create account
2. create index name and upload datashet
                                        
#Project procedure
 
In src folder we should create 5 files   
  1.searchBox.tsx
  It is a search box. It’s usually your users’ entry point to discover the content of the app.
  2.Filter.tsx
    It helps us to filter the data 
  3.InfiniteHits.tsx
   It helps us to render the data which contains hits
  4.HighLight.tsx
   It helps us to highlight the text which we are searching
  5.RefinmentList.tsx
     It helps to refine the data by brand or any attributes which we are passed 

In App.tsx we call components under <InstantSearch>
    we need the 
    API ID:_____________
    API KEY:____________


    
FOR APPLY BRAND FILTER<img width="1500" alt="Screenshot 2022-12-07 at 3 22 46 PM" src="https://user-images.githubusercontent.com/103095958/206160879-465f6b13-f289-4ee4-b34b-304599bed774.png">



    

https://user-images.githubusercontent.com/103095958/206159995-3dec0687-5b6b-44d8-a96b-d493380c354c.mp4



 


