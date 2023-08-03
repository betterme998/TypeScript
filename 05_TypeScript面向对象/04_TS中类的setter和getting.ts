class Person {
  private _name: string  //私有属性 属性签名加下划线_
  private _price:number

  constructor(name:string,price:number) {
    this._name = name
    this._price = price
  }

  // 在开发中我们想要在外部访问/改变私有属性：setter/getter :
  // 一般不允许访问私有属性，但是我们可以对属性的访问进行拦截操作
  set name(newValue:string) {
    this._name = newValue
  }
  get name() {
    return this._name
  }

  // 对属性操作访问就行拦截
  set price (newValue:number) {
    if (newValue >=0 && newValue < 200) {
      this._price = newValue
    }
  }
  get price (){
    return this._price
  }
}

const p = new Person("why",100)
// 修改私有属性
p.name = "why"
// 访问私有属性
console.log(p.name);

p.price = -10
console.log(p.price);

export{}