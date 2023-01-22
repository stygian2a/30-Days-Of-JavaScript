// 1
let sentence_1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// Case sensitive
console.log(sentence_1.match(/love/g).length)

// 2
let sentence_2 = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence_2.match(/because/g).length)

// 3
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let cleaned_sentence = sentence.replace(/%|@|&|#|\$|;/g,'')
console.log(cleaned_sentence)
let wordCounts = { };
let words = cleaned_sentence.split(" ");
let max=0;
let current_best="aaa"
for(var i = 0; i < words.length-1; i++){
    wordCounts[words[i]] = (wordCounts[words[i]] || 0) + 1;
    
    if ((wordCounts[words[i]] || 0) > max){

        max = wordCounts[words[i]]
        current_best = words[i]
    }
}
    
console.log(current_best)

// 4
let sentence_4 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let numbers = sentence_4.match(/\d+/g)
console.log((parseInt(numbers[0])+parseInt(numbers[2]))*12+parseInt(numbers[1]))