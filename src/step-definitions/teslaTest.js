const {Given,When,Then}= require('cucumber')
const teslahomePage = require('../test/teslahomepage.') 
const testadata=require("./../data/testdata.json")

Given ('Tesla website launched',function(){
     
    browser.url(testadata.teslaurl); 

})

Then ('I resize window to {int} ppx',function(int){
    
    teslahomePage.resizewindow(int);

   
})

Then ('I swipe on the carmodel slider',function(){
     
    teslahomePage.performswipeaction();

})

Then (/^Item displayed is "([^"]*)"$/,function(value){
    
    teslahomePage.assertslidervalue(value);

})

