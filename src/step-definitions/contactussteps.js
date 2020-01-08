const {Given,When,Then}= require('cucumber')
const {expect}= require('chai')
const assert = require('assert')
const homepage = require('../test/homepage') 
const contactuspage = require('../test/contactuspage') 



When ('I click on contact us page',function(){
    
   
   homepage.gotocontactus();
})

Then ('Contact us page is diplsayed with proper details',function(){

    contactuspage.verifytitle();
    
})

Then ('User can enter message',function(){
 
    
    contactuspage.setmessage();
    
})


