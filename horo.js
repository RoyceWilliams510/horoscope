var sign = 0;
var message = ["You're moving up the career (or political) ladder, which is somewhat thrilling -- and yet just a little bit terrifying at the same time. Don't beat yourself up over your seriously mixed" +
" feelings about success. After all, the price of getting what you want is having to deal with having gotten what you want. While in many ways it's a great thing to achieve so much, it can be hard to " +
"feel as if you have no goal in sight. That is sure to change soon." , "You need to spend time treading water before you plunge into uncharted depths, especially at a moment like this. Some of the work " +
"you've been doing has stirred up a few surprising emotions or pieces of ancient history that you don't feel quite up to dealing with right now. It's fine if you want to leave them be -- you know they're" +
" there, and you can deal with them when the time is right.", "Some heavy feelings are probably weighing you down right now, but the sooner you address them, the better off you'll be. You don't have to " +
"solve them -- in fact, just acknowledging that they exist might be enough to give you a little breathing room. Afterward, think about going for a long walk or finding some other physical way of gaining" +
" release. Once you've done that, you should feel like a burden's been lifted.", "Even if high school was long ago for you, it's easy (maybe too easy) to slip back into that mentality. Who's got the " +
"newest, shiniest gear? Who's the teacher's pet? Who's the popular one who totally doesn't deserve it? Try to put the brakes on this kind of thinking -- remind yourself that one of the benefits to " +
"adulthood (after the lack of curfew) is getting to rise above such petty superficialities.", "Your mental agility extends across a broad range of topics, but right now you've got the brain power to" +
" go for depth in addition to breadth. You've got the ability to perceive layers of meaning and analyze subtleties in new ways that might surprise you and your colleagues. Is there a work stalemate you " +
"need to break? A relationship you want to shake up? Make sure you use this new skill in the areas that need it most.", "Mulling over past decisions and contemplating what might have been are guaranteed" +
" to drive you totally insane -- so don't do it, no matter what! Push aside all those could-have-beens and concentrate on the here and now. You may find that people sense the change in your energy and " +
"become much more receptive to your thoughts and ideas if you stick to the positive. Remember to keep that perspective as you go throughout your day.", "Irresistibility is a state of mind that's quite " +
"familiar to you, but today's energy gives you even more depth and magnetism for the time being. All around you, people are falling under your spell as if you were a master hypnotist. Even you can't " +
"believe your spiking levels of charm. While romantic and grandiose fantasies might crowd your head with delightful scenarios, don't let them distract you from real-life opportunities.", "Toss aside any" +
" limiting or inhibiting worldviews by diving into deep conversations with those whose intellectual powers meet (or even exceed) yours. It's hard to understand where someone's coming from until you make" +
" a serious attempt to explore their point of view. Fortunately, your mental energy has given you an open, curious mind and the willingness to work on this aspect of yourself. Use these powers to improve " +
"your life.", "Find a way to take a break and soak up some fresh air today. You're about to plunge into some very deep and demanding situation at work or at school, so make sure you spend some time outside" +
" enjoying yourself to restore your sense of balance. Your ambitious plans you're about to put into motion will benefit you all the more if you're not feeling burned out and exhausted before you even start" +
" working on them.", "Leave the routine chores around the house to someone else today -- even if you live alone, you can leave them to future you! Some extraordinary meetings are taking place today, and " +
"you need to be ready for them. The mundane has no place in your day, especially when your charisma is this potent. Expect to meet all the right people as you're in the thick of things all day. It's win-win" +
" wherever you end up -- you know how to make the most of the opportunities coming your way.","You're in an extra-weird mood and possibly feeling off balance -- but that's all. So why are you trying so hard " +
"to make sure that what you're feeling isn't seen as a big deal? Dismissing your emotions right now isn't the best course of action (it rarely is), though superficially it may seem like the easiest thing for " +
"you to do. Try instead to take a good, long look at what's really going on in your heart." , "It may feel as if you've got the whole world on your shoulders. You are pretty strong, but it's still time to do" +
" something about your burden. You could end up with a serious crick in your neck -- and who could possibly take on your load if that happens? Not everyone can be quite so competent and on the ball as you, but" +
" someone could certainly help you shift your responsibilities somewhat so they don't drag you down." ]

function horoscope(){
    var name = document.getElementById("name").value;
    var m = document.getElementById("month").value;
    var d = document.getElementById("days").value;
    var y = document.getElementById("year").value;
    console.log(m);
    console.log(d);
    document.getElementById("sign").innerHTML = getHoroscope(m,d,name);
    document.getElementById("image").innerHTML = getImage();
    document.getElementById("paragraph").innerHTML = determineHoroscope();
    document.getElementById("zodiac").innerHTML = getZodiac(y);
}
var thing = 0;
function getHoroscope(m,d,name ){
    if(m== 2 && d>=29){
        return "Please enter a valid date"
    }
    if(m==4 && d>=31){
        return "Please enter a valid date."
    }
    if(m==6 && d>=31){
        return "Please enter a valid date."
    }
    if(m==9 && d>=31){
        return "Please enter a valid date."
    }
    if(m==11 && d>=31){
        return "Please enter a valid date."
    }
    if((m == 3 && d >= 21) ||(m == 4 && d <= 20)){
        sign = 3;
        return name + ", you are an Aries!";
    }
    if ((m == 4 && d >= 21) || (m == 5 && d <= 20)) {
        sign =4;
        return name + ", you are a Taurus!";
    }
    if ((m == 5 && d >= 21) || (m == 6 && d <= 20)) {
        sign =5;
        return name +", you are a Gemini!";
    }
    if ((m == 6 && d >= 21) || (m == 7 && d <= 22)) {
        sign = 6;
        return name + ", you are a Cancer!";
    }
    if ((m == 7 && d >= 23) || (m == 8 && d <= 22)) {
        sign = 7;
        return name + ", you are a Leo!";
    }
    if ((m == 8 && d >= 23) || (m == 9 && d <= 22)) {
        sign = 8;
        return name +", you are a Vrigo!";
    }
    if ((m == 9 && d >= 23) || (m == 10 && d <= 22)) {
        sign =9;
        return name +", you are a Libra!";
    }
    if ((m == 10 && d >= 23) || (m == 11 && d <= 22)) {
        sign = 10;
        return name + ", you are a Scorpio!";
    }
    if ((m == 11 && d >= 23) || (m == 12 && d <= 21)) {
        sign =11;
        return name + ", you are a Sagittarius!";
    }
    if ((m == 12 && d >= 22) || (m == 1 && d <= 19)) {
        sign =12;
        return name + ", you are a Capicorn!";
    }
    if ((m == 1 && d >= 20) || (m == 2 && d <= 19)) {
        sign = 1;
        return name + ", you are a Aquarius!";
    }
    if ((m = 2 && d >= 20) || (m = 3 && d <= 20)) {
        sign = 2;
        return name +  ", you are a Pisces!";
    }
}
function getImage(){
    if(sign ==1){
        return "<img src= 'img/1.jpg' />";
    }
    if(sign ==2){
        return "<img src= 'img/2.ico' />";
    }
    if(sign ==3){
        return "<img src= 'img/3.jpg' />";
    }
    if(sign ==4){
        return "<img src= 'img/4.jpg' />";
    }
    if(sign ==5){
        return "<img src= 'img/5.jpg' />";
    }
    if(sign ==6){
        return "<img src= 'img/6.jpg' />";
    }
    if(sign ==7){
        return "<img src= 'img/7.png' />";
    }
    if(sign ==8){
        return "<img src= 'img/8.png' />";
    }
    if(sign ==9){
        return "<img src= 'img/9.png' />";
    }
    if(sign ==10){
        return "<img src= 'img/10.png' />";
    }
    if(sign ==11){
        return "<img src= 'img/11.png' />";
    }
    if(sign ==12){
        return "<img src= 'img/12.JPG' />";
    }
}

function determineHoroscope() {
    if (sign == 1) {
        return message[0];
    }
    if (sign == 2) {
        return message[1];
    }
    if (sign == 3) {
        return message[2];
    }
    if (sign == 4) {
        return message[3];
    }
    if (sign == 5) {
        return message[4];
    }
    if (sign == 6) {
        return message[5];
    }
    if (sign == 7) {
        return message[6];
    }
    if (sign == 8) {
        return message[7];
    }
    if (sign == 9) {
        return message[8];
    }
    if (sign == 10) {
        return message[9];
    }
    if (sign == 11) {
        return message[10];
    }
    if (sign == 12) {
        return message[11];
    }
}
function getZodiac(y) {
    if (y == 2008 || y == 1996 || y == 1984 || y == 1972 || y == 1960) {
        thing = "Your Zodiac animal is the year of the Rat!" + " <img src= 'zodiac/1z.jpeg' />";
    }
    if (y == 2009 || y == 1997 || y == 1985 || y == 1973 || y == 1961) {
        thing = "Your Zodiac animal is the year of the 0x!"+ " <img src= 'zodiac/2z.jpeg' />";
    }
    if (y == 2010 || y == 1998 || y == 1986 || y == 1974 || y == 1962) {
        thing= "Your Zodiac animal is the year of the tiger!" + "<img src= 'zodiac/3z.jpg' />";

    }
    if (y == 2011 || y == 1999 || y == 1987 || y == 1975 || y == 1963) {
        thing = "Your Zodiac animal is the year of the Rabbit!" + "<img src= 'zodiac/4z.jpeg' />";

    }
    if (y == 2012 || y == 2000 || y == 1988 || y == 1976 || y == 1964) {
        thing = "Your Zodiac animal is the year of the Dragon!" + "<img src= 'zodiac/5z.jpeg' />";
    }
    if (y == 2013 || y == 2001 || y == 1989 || y == 1977 || y == 1965) {
        thing = "Your Zodiac animal is the year of the Snake!" + " <img src= 'zodiac/6z.jpg' />";
    }
    if (y == 2014 || y == 2002 || y == 1989 || y == 1978 || y == 1966) {
        thing ="Your Zodiac animal is the year of the Horse!" + " <img src= 'zodiac/7z.jpeg' />";
    }
    if (y == 2015 || y == 2003 || y == 1990 || y == 1979 || y == 1967) {
        thing ="Your Zodiac animal is the year of the Goat!" + "<img src= 'zodiac/8z.jpg' />";
    }
    if (y == 2016 || y == 2004 || y == 1991 || y == 1980 || y == 1968) {
        thing = "Your Zodiac animal is the year of the Monkey!" + "<img src= 'zodiac/9z.jpeg' />";
    }
    if (y == 2017 || y == 2005 || y == 1992 || y == 1981 || y == 1969) {
        thing = "Your Zodiac animal is the year of the Rooster!" + "<img src= 'zodiac/10z.jpg' />";
    }
    if (y == 2018 || y == 2006 || y == 1993 || y == 1982 || y == 1970) {
        thing ="Your Zodiac animal is the year of the Dog!" +  "<img src= 'zodiac/11z.jpg' />";
    }
    if (y == 2019 || y == 2007 || y == 1994 || y == 1983 || y == 1971) {
        thing  ="Your Zodiac animal is the year of the Pig!" + "<img src= 'zodiac/12z.jpeg' />";
    }
    return thing;
}





