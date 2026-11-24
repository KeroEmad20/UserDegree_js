var UserDegree = +prompt("enter your degree");
if( UserDegree >= 0 && UserDegree <= 100 ) { 
    if(UserDegree >= 90) {
        console.log("A");
    } else{
        if( UserDegree >= 85){
            console.log("A-");
        } else {
            if(UserDegree >= 80){
                console.log("B+");
            } else{
                if(UserDegree >= 75){
                    console.log("B"); 
                }   else{
                    if(UserDegree >= 70){
                        console.log("B-");
                    } else {
                        if (UserDegree >= 65) {
                            console.log("C+");
                        } else {
                            if (UserDegree >= 60) {
                                console.log(" C");
                            } else {
                                if (UserDegree >= 55) {
                                    console.log("C-");
                                } else {
                                    if (UserDegree >= 50) {
                                        console.log("D");
                                    } else {
                                        if(UserDegree < 50){
                                            console.log("F");
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
} else {
    console.log("invalid degree");
}