# Dynamic Programming Euler's Number

The mathematical constant $e$ (Euler's number) is defined as follows:

$$ e = \sum^{\infty}_{i=0} \frac{1}{i!} = \frac{1}{1} + \frac{1}{1} +
\frac{1}{1\cdot 2} + \frac{1}{1\cdot 2\cdot 3} + \frac{1}{1\cdot 2\cdot 3\cdot
4} + \ldots$$

I've provided an implementation of a function to approximate $e$ up to a number
of $n$ terms in `code.js` for you. However, it does repeated work -- identify
where the repeated work occurs and avoid it through bottom-up dynamic
programming (not memoization). Change the implementation accordingly.

Test your new functions; I've provided some basic testing code in `code.test.js`
but you need to go beyond that.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

## Identify Repeated Work

Initially, for e(3) for example, the code would calculate fact(3) by
calculating fact(2) by calculating fact(1). Then add $1 / 3!$ to a sum. Then
it would calculate fact(2) by calculating fact(1). Then add $1 / 2!$ to a sum.
Then it would calculate fact(1). Then add $1 / 1!$ to a sum. So for e(3), we
were calculating fact(3) once, fact(2) twice, and fact(1) thrice.  

## My Runtime

The run time of both functions is $\Theta(n)$ as they both simply iterate over
n elements to perform their calculations. I could've nested the factorial
function inside of the e function which would've given factorial a runtime of
$\Theta(n)$ and e $\Theta(n^2)$, but that seemed superfluous.  

## Sources

I got 20! from:  
https://www.cuemath.com/questions/what-is-the-factorial-of-20/  

## Plagiarism Notice

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
