class Laptop {
    brandName: string;
    memorySpace: number;
    private isBranded: boolean;

    showIsBrandedDetails() {
        return this.isBranded;
    }

    constructor(brand: string, memory: number, branded: boolean) {
        this.isBranded = branded;
        this.brandName = brand;
        this.memorySpace = memory
    }
}

var myLaptop = new Laptop("Dell", 128, true);
console.log(myLaptop.brandName);
console.log("Is Laptop Branded :" + myLaptop.showIsBrandedDetails());
console.log(myLaptop.memorySpace);