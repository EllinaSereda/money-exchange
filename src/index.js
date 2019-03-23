// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency <= 0){
        return {};
    }
    if (currency > 10000 ){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    else{
        let result={};
        let p = 0;
        let n = 0;
        let d = 0;
        let q = 0;
        let h = 0;
        
        let hh = currency % 50;
        h = (currency - hh) / 50;
        if (hh > 0){
            let qq = hh % 25;
            q = (hh - qq) / 25;
            if (qq > 0){
                let dd = qq % 10;
                d = (qq - dd) / 10;
                if (dd > 0){
                    p = dd % 5;
                    n = (dd - p) / 5;
                }
            }
        }
        
        if (h!=0){
            result["H"]=h;
        }
        if (q!=0){
            result["Q"]=q;
        }
        if (d!=0){
            result["D"]=d;
        }
        if (n!=0){
            result["N"]=n;
        }
        if (p!=0){
            result["P"]=p;
        }
       
        
        
        
        return result;
    }
}
