const assert = require('assert')
const cucumberJson = require('wdio-cucumberjs-json-reporter')
const multipleCucumberHtmlReporter=require ('multiple-cucumber-html-reporter')
const testadata=require("./../data/testdata.json")
     
class Contactuspage {
  
  get messagefield() {return $('#email');}
   

  setmessage(){
    
    this.messagefield.setValue(testadata.contactusmessage)
    
     
}
  }
  module.exports = new Contactuspage();