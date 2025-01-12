for(i=0;i<=10;i++)
    {
         console.log(i,"*5=",i*5);
    }
    console.log("------------------------------");
    let sum=0;
    for(i=0;i<=10;i++)
    {
        sum=sum+i;
        console.log("sum=",sum);
    }
    
    console.log("--------------------------------");
    for(i=0;i<=100;i++)
        {
            if(i%2==1)
            {
                console.log(i);
            }
        }
    console.log("--------------------------------");
       
    for(i=10;i>=0;i--)
    {
        console.log(i);
    }
    console.log("--------------------------------");
    for (let i = 1; i <= 5; i++) {
        let row = ""; 
        for (let j = 1; j <= i; j++) {
            row += "*";
        }
        console.log(row);
    }
    console.log("-----------------------");
    function Task(candidate,company)
    {
        console.log("hey dear",candidate);
        console.log("welcome to our",company);
        console.log("happy to welcome you");
    
    }
    Task("SRI","VIBRO");
    console.log("-----------------------");