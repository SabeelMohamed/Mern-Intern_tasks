function fact(n)
{
    let fact=1;
    for(i=1;i<=n;i++)
    {
         fact=fact*i;
         console.log(fact);
    }
}
fact(10)
console.log("-----------------------------");
function convert_to_celsius(num)
{
    
    celsius=5/9*(num-32);
    console.log(celsius);
}
convert_to_celsius(100)