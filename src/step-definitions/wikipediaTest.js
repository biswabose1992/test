const {Given,When,Then}= require('cucumber')
const assert = require('assert')
const homepage = require('../test/homepage') 


Given ('Wikipedia website',function(){
     
    browser.url("https://wikipedia.org");
    // browser.url('baseUrl');
    browser.maximizeWindow();
    homepage.verifytitle();



})

When ('I search for furry rabbits',function(){

    homepage.enterserachdata();
    
})

Then ('Wikipedia website gets launched',function(){

    
    
})