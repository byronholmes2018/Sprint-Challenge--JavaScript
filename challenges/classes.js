
/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

// 1. Copy and paste your prototype in here and refactor into class syntax.

/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

// == Class ==

class CuboidMaker{
    constructor(properties){

    this.length = properties.length;
    this.width = properties.width;
    this.height = properties.height;

}
   volume(){
     return (this.length*this.width*this.height);}


   surfaceArea(){
     return(2*(this.length*this.width + this.length*this.height + this.width*this.height));}

   }


/* == Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.
*/

const cuboid = new CuboidMaker({length:4, width:5, height: 5});


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130




// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker{
  constructor(cubeProps){
    super(cubeProps);
    this.width = cubeProps.length;
    this.height = cubeProps.length;
    this.length = cubeProps.length;
  }

}

const cube = new CubeMaker({length:2});
console.log(cube.volume());
console.log(cube.surfaceArea());
