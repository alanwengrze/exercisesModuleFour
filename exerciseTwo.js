
let students = [
  {
    name: "Alan",
    firstTest: 8,
    secondTest:7
  },
  {
    name: "Alisson",
    firstTest: 4.5,
    secondTest:6.8
  },
  {
    name: "Ágata",
    firstTest: 9,
    secondTest:9.8
  },
  {
    name: "Alice",
    firstTest: 7,
    secondTest:6.2
  }
]

const avaregeStudents = function(n1, n2){
  let result = (n1 + n2) / 2
  return result
}
avaregeStudents()

for(let i = 1; i < students.length; i++){
  if(avaregeStudents(students[i].firstTest, students[i].secondTest) < 7){
    alert(`
    A média do(a) aluno(a) ${students[i].name} é ${avaregeStudents(students[i].firstTest, students[i].secondTest)}.
    Não foi dessa vez, ${students[i].name}! Mais sorte da próxima vez!`)
  }else{
    alert(`
    A média do(a) aluno(a) ${students[i].name} é ${avaregeStudents(students[i].firstTest, students[i].secondTest)}.
    Parabéns, ${students[i].name}! Você foi aprovado(a) no concurso!`)
  }
}
