
const a = {
    en: 'Bye',
    de: 'Tschüss'
  }
  let b = Object.assign(a)
  b.de = 'Ciao'
  console.log(a) // Ciao
  console.log(b) // Tschüss
  function fun(){
    console.log("aaa")
  }
  fun()