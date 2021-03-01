/**
 * Factory method pattern implementation
 */


 // Product interface
 interface Igun {
     getName() : String;
     getPower(): number;
 }

 // Concrete product
 class Gun implements Igun {
     name: String;
     power: number;

     constructor(n : String, p : number) {
        this.name = n;
        this.power = p;
     }

      getName() : String {
          return this.name;
      };
      getPower() : number {
          return this.power;
      };
 }

 // Concrete product 1 
 class AK47 extends Gun {
     constructor() {
        super("AK47", 99);
     }
 }

 // Concrete product 2
 class AWM extends Gun {
    constructor() {
       super("AWM", 200);
    }
}

// Creator
abstract class GunFactory {
    abstract createGun(): Igun;

    canHit(range: number): Boolean {
        const gun : Igun = this.createGun();

        if(range - gun.getPower() <= 0) {
            return true;
        }

        return false;
    };
}

// Concrete creator 1
class ShortRangeGunFactory extends GunFactory {
    createGun() : Igun {
        return new AK47();
    }
}

// Concrete creator 2
class LongRangeGunFactory extends GunFactory {
    createGun() : Igun {
        return new AWM();
    }
}

// Client Code
function Client(type: String, range: number) {
    let factory : GunFactory;
    let canHit : Boolean;

    if(type == "long") {
        factory = new LongRangeGunFactory();
    };
    if(type == "short") {
        factory = new ShortRangeGunFactory ();
    }
    
    canHit = factory.canHit(range);
    if(canHit) {
        console.log("Boom !");
    } else {
        console.log("Miss...");
    }
}

Client("short", 199);
Client("long", 200);