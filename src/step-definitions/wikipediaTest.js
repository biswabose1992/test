const {Given,When,Then}= require('cucumber')
const assert = require('assert')
const homepage = require('../test/homepage') 
const searchPage = require('../test/searchpage')
const testadata=require("./../data/testdata.json")

Given ('Wikipedia website launched',function(){
     
    browser.url(testadata.url);
    browser.maximizeWindow();
    homepage.verifytitle();

})

When ('I search for furry rabbits',function(){

    homepage.enterserachdata();
    homepage.clicksearchbutton();
    
})

Then ('Do you mean suggestion should appear',function(){

    searchPage.verifysuggestiontext();
    
})


Then ('I click on the suggestion',function(){

    searchPage.clicksuggestion();
    
})

Then ('{int} search results shoud appear',function(int){

    searchPage.verifyserachresultcount();
   
    
})


Then ('I click on first search result to verify article title and contents',function(){

    searchPage.verifyfirstarticle();
})