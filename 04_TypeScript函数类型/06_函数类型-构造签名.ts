
class Person {

}

interface ICTORPerson{
  // 构造签名：在调用签名前加关键字 new
  new (): Person
}

function factory(fn:ICTORPerson){
  const f = new fn()
  return f
}

factory(Person)