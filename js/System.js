class System{

    constructor(){}

    authenticate(actualCode,enteredCode){
        textSize(50);
        fill("black");
        text(code,300,300)
        
        //added code to return true of answer enetered is same.

        if(actualCode === enteredCode.toUpperCase()) 
            return true
        else
            return false
    }

}
