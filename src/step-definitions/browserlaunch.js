const {Given,When,Then}= require('cucumber')
const {expect}= require('chai')
const assert = require('assert')
const homepage = require('../test/homepage') 

When ('I click on chrome broswer',function(){

    browser.url("http://automationpractice.com/index.php");
   // browser.url('baseUrl');
    browser.maximizeWindow();
})

Then ('Automation Practice website gets launched',function(){

    homepage.verifytitle();
    
})