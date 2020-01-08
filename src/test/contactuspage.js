const assert = require('assert')
//const path = require('path')
const cucumberJson = require('wdio-cucumberjs-json-reporter')
const multipleCucumberHtmlReporter=require ('multiple-cucumber-html-reporter')
const testadata=require("./../data/testdata.json")
     
class Contactuspage {
  
  get messagefield() {return $('#email');}
   
  
  verifytitle(){
      const title = browser.getTitle();
      assert.equal(title,'Contact us - My Store');
      
    }

  setmessage(){
    
    this.messagefield.setValue(testadata.contactusmessage)
    
    
}
  }
  module.exports = new Contactuspage();