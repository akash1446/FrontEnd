class company{

    // constructor(){
    //     console.log("constructor will be called");
    // }
    constructor(giveName,PhoneNumber){
        this.name=giveName;
        this.phoneNumber=PhoneNumber;

    }

    submit(){
        alert("The Form is Submitted Successfully")
    }
    fill(giveName){
        this.giveName=giveName;
        alert("This form is filled by",this.username);

    }
    cancel(){
        alert("the form is cancelled")
    }
}

let vasuform = new company('vasu',1234567890)
console.log(vasuform);


vasuform.fill("vasupraveen");


let rahulform = new company()



rahulform.fill("rahul");
vasuform.submit()
rahulform.submit()
rahulform.cancel()
