class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

  public addToEnd(l: ListNode){
    let keeping: ListNode = this.getEnd()
    keeping.next = l
  }

  public getEnd(): ListNode{
    let keeping: ListNode = this
    while (keeping.next !== null){
      keeping = keeping.next
    }
    return keeping
  }

  public printList(){
    let result: number[] = []
    let keeping: ListNode | null = this
    while (keeping){
      result.push(keeping.val)
      keeping = keeping.next
    }
    result.forEach(elem => {
      console.log(elem)
    })
  }
}

function min(l1: ListNode | null, l2: ListNode | null): number{
  if (l1 === null || l2 === null){
    return 0
  }
  let result: number = 1

  while (l1.next !== null && l2.next !== null){
    result += 1
    l1 = l1.next
    l2 = l2.next
  }

  return result
}


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let i: number
  let result: ListNode = new ListNode()
  if(l1 !== null && l2 !== null){
    let length = min(l1, l2)
    for(i = 0; i < length; i++){
      let sum = l1!.val + l2!.val
      let endNode = result.getEnd()
      if(sum >= 10){
        let sumStr = sum.toString()
        endNode.val += +sumStr.charAt(1)
        result.addToEnd(new ListNode(1))
        l1 = l1!.next
        l2 = l2!.next
      } else {
        endNode.val += sum
        result.addToEnd(new ListNode())
      }
    }
    result.printList()
  }

  return new ListNode()
}

let l1 = new ListNode(9)
l1.addToEnd(new ListNode(3))
l1.addToEnd(new ListNode(3))

let l2 = new ListNode(2)
l2.addToEnd(new ListNode(9))
l2.addToEnd(new ListNode(3))
l2.addToEnd(new ListNode(3))

addTwoNumbers(l1, l2)
