module.exports = Phrase;

// Reverses a string. 

function reverse(string){
   return string.split("").reverse().join("");

}

//Defines a phrase object.

function Phrase(content){
    this.content = content;

    // Returns content processed for palindrome testing.

    this.processedContent = function processedContent(){
       return this.content.toLowerCase();
    }


 // Returns true for a palindrome, false otherwise. 


   this.palindrome = function palindrome(){

        return this. processedContent() === reverse(this.processedContent());
    }
}
 