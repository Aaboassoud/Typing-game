let words = ["the","of","and","a","to","in","is","you","that","it","he","was","for","on","are","as","with","his","they","solo","at","be","this","have","from","or","one","had","by","word","but","not","what","all","were","we","when","your","can","said","there","use","an","each","which","she","do","how","their","if","will","up","other","about","out","many","then","them","these","so","some","her","would","make","like","him","into","time","has","look","two","more","write","go","see","number","no","way","could","people","my","than","first","water","been","call","who","oil","its","now","find","long","down","day","did","get","come","made","may","part"];

print = console.log
print(words.length)


let randomWords=[];
random = Math.ceil(Math.random()*99)

var seconds = 30;                 
time = document.getElementById("timer")
let wordsPerSecond=document.getElementById("wps")
function myLoop() {         
  setTimeout(function() {   
    console.log(seconds); 
    time.innerHTML = seconds 
    seconds--;                    
    if (seconds >= 0) {           
      myLoop();            
    } 
    if (seconds < 0 ){
        document.getElementById("text-paragraph").style.display="none"
        document.getElementById("input1").style.display = "none"
        let word = countInput.length
        let wps = word/30
        wordsPerSecond.innerHTML= `${wps} Word per Second\n(wps)\n`
    }
  }, 10)
}



countInput = []
para = document.getElementById("text-paragraph")
document.getElementById("start").addEventListener("click",()=>{
    myLoop();
    randomWords=[];
    for (i=0;i<20;i++){
        generatedWords = words[random]
        randomWords.push(generatedWords)
        random = Math.ceil(Math.random()*99)
    } print(randomWords)
    para.innerHTML = randomWords.join(' ')
    
    print(para.textContent)
})

input = document.getElementById("input1")
input.addEventListener("keydown",(e)=>{
    if (e.keyCode === 32){
        if (input.value == randomWords[0]){
            del = randomWords.shift()
            countInput.push(del)
            print(randomWords)
            input.value = ""
            e.preventDefault()
            para.innerHTML = randomWords.join(' ')
            if (randomWords.length == 0){
                for (i=0;i<20;i++){
                    generatedWords = words[random]
                    randomWords.push(generatedWords)
                    random = Math.ceil(Math.random()*99)
                } print(randomWords)
                para.innerHTML = randomWords.join(' ')
                print(para.textContent)
            }
    }}
})

