// ^====================>>>>>Elements<<<<<<<<<=======================
var quoteContent = document.getElementById("quoteContentParagrph");
var authorImg = document.getElementById("authorImg");
// *====================>>>>>Variables<<<<<<<<<======================
var quotesArr = [{
    index: 1, quote: `“Be yourself; everyone else is already taken.”
― Oscar Wilde` , Imageurl: `images/1.jpg`
}, {
    index: 2, quote: `““I'm selfish, impatient and a little insecure. I make mistakes”
    ― Marilyn Monroe`  , Imageurl: `images/2.jpg`
}, {
    index: 3, quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`
    , Imageurl: `images/3.jpg`
}, {
    index: 4, quote: `“So many books, so little time.”`
    , Imageurl: `images/4.jpg`
}, {
    index: 5, quote: `“A room without books is like a body without a soul.”`
    , Imageurl: `images/5.jpg`
}, {
    index: 6, quote: `“Be who you are and say what you feel, because those who mind don't matter”`
    , Imageurl: `images/6.jpg`
}, {
    index: 7, quote: `“You've gotta dance like there's nobody watching.”`
    , Imageurl: `images/7.jpg`
}, {
    index: 8, quote: `“You only live once, but if you do it right, once is enough.”`
    , Imageurl: `images/8.jpg`
}, {
    index: 9, quote: `“Be the change that you wish to see in the world.”`
    , Imageurl: `images/9.jpg`
}, {
    index: 10, quote: `“If you tell the truth, you don't have to remember anything.”`
    , Imageurl: `images/10.jpg`
}, {
    index: 11, quote: `“A friend is someone who knows all about you and still loves you.”`
    , Imageurl: `images/11.jpg`
}, {
    index: 12, quote: `“Always forgive your enemies; nothing annoys them so much.”`
    , Imageurl: `images/12.jpg`
}, {
    index: 13, quote: `“The best way to predict the future is to invent it.”`
    , Imageurl: `images/13.jpg`
}, {
    index: 14, quote: `“If you tell the truth, you don't have to remember anything.”`
    , Imageurl: `images/14.jpg`
}, {
    index: 15, quote: `“A friend is someone who understands your past, believes in your future, and accepts you just the way you are.”`
    , Imageurl: `images/15.jpg`
}, {
    index: 16, quote: `“There are only two ways to live your life..”`
    , Imageurl: `images/16.jpg`
}, {
    index: 17, quote: `“The question isn't who's going to let me; it's who's going to stop me.”`
    , Imageurl: `images/17.jpg`
}, {
    index: 18, quote: `“The best way to find yourself is to lose yourself in the service of others.”`
    , Imageurl: `images/18.jpg`
}, {
    index: 19, quote: `“If you look at what you have in life, you'll always have more.”`
    , Imageurl: `images/19.jpg`
}
];
// ~====================>>>>>Function<<<<<<<<<=======================

function generateRandomNumber() {
    var Generatedindex = Math.floor((Math.random() * (quotesArr.length - 1)));
    console.log(quotesArr[Generatedindex]);
    return Generatedindex;
}
function GenerateNewQuote() {
    var index = generateRandomNumber();
    if (quotesArr.length != 0) {
        quoteContent.innerHTML = quotesArr[index].quote;
        authorImg.src = quotesArr[index].Imageurl;
        quotesArr.splice(index, 1); //to remove the chosen item from arry and pervent repeate
    }
}
