var min = +prompt("Enter Minutes Digits : ")
var sec = +prompt("Enter Seconds Digits : ")
var timer = setInterval(function () {
var minindex=min.toString()

    document.write(minindex.indexOf("0"))
// document.write(min.indexOf('0'))
    if (sec === -1) {
        min--
        sec = 59
    }
    //-------------------------------------------------------------
    // این پایین توی شرط دو تا مساوی گذاشتم
    //  که اون صفر استرینگی که پایین گذاشتم و 
    //  مقدار ثانیه و دقیقه رو استرینگی میکنه ، شرط رو به هم نزنه
    if (sec == 0 && min == 0) {
        clearInterval(timer)
    }
//الان میخواستم مثلا تایمر اینجوری بشه :  00:00 
    if (sec < 10) {//08-7=07
        // این جا گفتم که وقتی ثانیه کمتر از ده هستش ، یه دونه صفر بذار کنارش
        sec = "0" + sec
    }

    if (min < 10 && minindex.indexOf("0")==0) {
        // این جا هم گفتم که وقتی دقیقه کمتر از ده هستش ، یه دونه صفر بذار کنارش
        min = "0" + min
    }
    //ولی با هر بار تکرار کد ، یه صفر جدید اضافه میشه :(

    console.log("Timer " + min + " : " + sec)
    sec--

}, 1000)