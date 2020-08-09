let assert = require("assert");
let Phrase = require("../index.js");
const { isMainThread } = require("worker_threads");


describe("Phrase", function(){
// Phrase#palindrome
describe("#palindrome", function(){

    it("should return false for a non-palindrome", function(){
             let nonPalindrome = new Phrase("apple");
             assert(!nonPalindrome.palindrome());

    });

    it("should return true for a plain  palindrome", function(){
        let plainPalindrome = new Phrase("racecar");
        assert(plainPalindrome.palindrome);
    
        });

        it("Should return true for a mixed-palindrome", function(){
            let mixedCase = new Phrase("Racecar");
            assert(mixedCase.palindrome);
        });
        it("should return true for a palindrome with punctuation", function(){
            let punctuatedPalindrome = new Phrase("Madam, I'm Adam");
            assert(punctuated.palindrome);
        })
        describe("#letters", function(){
            it("should return only letter", function(){
                let punctuatedPalindrome = new Phrase("Madam, I'm Adam")
                assert(punctuatedPalindrome.letters()==="MadamImAdam")
            });

        });
});

});
