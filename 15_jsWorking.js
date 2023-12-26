/*
Javascript execution context

1.global execution context{} => this
in a single thread
2.Function execution context
3.Eval execution context

Runs in 2 phases
1.Memory creation phase
2.Execution phase
++++++++++++++++++++++++++
let val1 =10
let val2 = 5
function add(n1,n2){
    let tot = n1+n2
    return tot
}
let res1 = add(val1,val2)
let res2 = add(6,9)
+++++++++++++++++++++++++++ How this runs +++++++++++
1.Golbal execution
this 

2.Memory phase(always occurs)
val1->undefined
val2->undefined
add->definition
res1->undeined
res2->undefined

3.Execution phase
val1<-10
val2<-5
add (nothing left to execute)

add-> New variable environment(sandbox)+execution thread
                |
                3.1 Memory phase
                val1 undefined
                val2 undefined
                tot undefined

                3.2 Execution context
                n1=val1=10
                n2=val2=5
                tot=15

                return tot(returned to global execution context(or parent execution context))

                Now it gets deleted ***

res1 = 15

add-> new variable environment + execution thread
        memory phase
        n1->undefined
        n2->undefined
        tot->undefined

        execution context
        n1=6
        n2=9
        tot=15
        return tot
res2 = 15
+++++++++++++++++++++++++++++++++++++++++++++++++++
function call stack
                +       +
one() --------->+  one()     +-------------------->one()
                +global +
                +   exe +
                +       +
                +++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++

Now what if function is there within function
LIFO

one()->two()->three()  (nested)

source in inspect
Functions call stack

                    three
            two     two         two
    one     one     one         one     one     ____
         

*/