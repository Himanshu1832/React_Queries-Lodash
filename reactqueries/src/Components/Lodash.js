import React from 'react'
import _ from 'lodash'

const Lodash = () => {

    // console.log(_)
    const arr = [1,2,3,4,5,6,7,8,9,10]
    console.log("Chunk ",_.chunk(arr,3) )
    console.log("nth ",_.nth(arr,3))
    console.log("difference ",_.difference(arr,[1,4,5]))
    console.log("drop ",_.drop(arr,4))
    const filled = _.fill(Array(7),5)
    console.log("fill ",filled)

    const num = [1,1,[2,[4]],[5]]
    console.log("flattendepth ",_.flattenDepth(num,2))


    const c = [1,3,5];
    const d = [4,3,6]

    console.log("intersection",_.intersection(c,d))
    console.log("union",_.union(c,d))


    const employees = [
        {
            "id":1,
            "name":"abc",
            "gender":"male",
            "salary": "$1"
        },
        {
            "id":2,
            "name":"uhery",
            "gender":"female",

            "salary": "$8"

        },
        {
            "id":3,
            "name":"reerf",
            "gender":"male",
            "salary": "$3"


        },

    ]

    console.log(_.countBy(employees,"gender"))
    console.log(_.groupBy(employees,"gender"))
    const maxSal = _.orderBy(employees,"salary","desc")
    console.log(maxSal)

    const top2 = _.take(maxSal,2)
    const top2Id = _.map(top2,'id')
    console.log(top2Id)
    const totalSalary = _.reduce(employees,(accu,curr)=> accu+curr.salary.split('$')[1]*1,0)
    console.log(totalSalary)

    
    
  return (
    <div>Lodash</div>
  )
}

export default Lodash
