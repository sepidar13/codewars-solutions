//**  D e s c r i p t i o n **//

// Your Quark class should allow you to create quarks of any valid color ("red", "blue", and "green") and any valid flavor ('up', 'down', 'strange', 'charm', 'top', and 'bottom').

// Every quark has the same baryon_number (BaryonNumber in C#): 1/3.

// Every quark should have an .interact() (.Interact() in C#) method that allows any quark to interact with another quark via the strong force. When two quarks interact they exchange colors.

///***  S O L U T I O N ***//

class Quark{
    constructor(color, flavour){
        this.color = color;
        this.flavour = flavour;
        this.baryon_number = 1 / 3
    }
    interact(other){
        return [this.color, other.color] = [other.color, this.color]
    }
}
