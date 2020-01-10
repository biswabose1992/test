const assert = require('assert')
const testadata=require("./../data/testdata.json")

class teslahomePage {
  
    get closebutton() {return $('#locale-modal-close');}
    get slider1(){return $('//button[@data-active-slide="item1"]')}
    get slider0(){return $('//button[@data-active-slide="item0"]')}
    get slider2(){return $('//button[@data-active-slide="item2"]')}
    get slidervalue(){return $('//div[@id="item0-heading"]/h1')}


    resizewindow(int){

        browser.setWindowSize(int,int)
        this.closebutton.click();

    }

    performswipeaction(){
        this.slider1.dragAndDrop(this.slider0,2000)
        this.slider0.dragAndDrop(this.slider1,2000)
        this.slider0.dragAndDrop(this.slider1,2000)

    }
    
    assertslidervalue(value){

        const slidervalue= this.slidervalue.getText();   
        assert.equal(slidervalue,value)
    }
}
    module.exports = new teslahomePage();