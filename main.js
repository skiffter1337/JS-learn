//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.

const repeatString = (str, num, dev) =>  Array(num).fill(str).join(dev)


console.log(repeatString("yo", 3, " "))
console.log(repeatString(repeatString("yo", 3, ",")))
console.log(repeatString(repeatString("yoregerger", 7, "-")))




//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
const checkStart = (str, substr) => str.toLowerCase().startsWith(substr.toLowerCase())

console.log(checkStart("Incubator", "inc"))
console.log(checkStart("Incubator", "yo"))
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.

const truncateString = (str, num) =>  str.slice(0, 10) + "..."

console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))
// truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка или не строка, то возвращает null.

const getMinLengthWord = (str) =>  typeof str === "string" && str !== "" ? str.split(" ").sort((a, b) => a.length - b.length)[0] : null

console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи."))
console.log(getMinLengthWord(""))
console.log(getMinLengthWord(123))
// getMinLengthWord("Всем студентам инкубатора желаю удачи.") => "Всем"
// getMinLengthWord("") => null
// getMinLengthWord(123) => null


//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.

const setUpperCase = (str) => str.toLowerCase().split(" ").map(el => el[0].toUpperCase() + el.slice(1)).join(" ")

console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ"))
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ") => "Всем Студентам Инкубатора Желаю Удачи!"

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учёта
// повторяющихся символов.
// * с учётом повторяющихся символов в подстроке

const isIncludes = (str, subst) => subst.toLowerCase().split("").every((char) => str.toLowerCase().includes(char))


console.log(isIncludes("Incubator", "Cut"))
console.log(isIncludes("Incubator", "table"))
console.log(isIncludes("Incubator", "inbba"))
console.log(isIncludes("Incubator", "inba"))
console.log(isIncludes("Incubator", "Incubatorrr"))

// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true //*false
// isIncludes("Incubator", "inba") => true  //*true
// isIncludes("Incubator", "Incubatorrr")=> true //*false





  




