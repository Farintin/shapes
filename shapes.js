class Shape {
    GetArea() {
        return this.area
    }
    GetName() {
        return this.name
    }
    IncreaseSize(percentage) {
        this.percentage = percentage/100;
    }
}

class Square extends Shape {
    constructor(length = 1) {
        super();
        this.name = "Square";
        this.length = length;
        this.area = this.length**2
    }
    
    IncreaseSize(percentage) {
        super.IncreaseSize(percentage);
        this.length = this.length + (this.length*this.percentage);
        this.area = this.length**2
    }
}

class Circle extends Shape {
    constructor(radius = 1) {
        super();
        this.name = "Circle";
        this.radius = radius;
        this.area = Math.PI * this.radius**2
    }
    
    IncreaseSize(percentage) {
        super.IncreaseSize(percentage);
        this.radius = this.radius + (this.radius*this.percentage);
        this.area = Math.PI * this.radius**2
    }
}



let shapes = [];

shapes.push(new Square(length=3));
shapes.push(new Circle(radius=2));

for (let i = 0; i < shapes.length; i++) {
    const shape = shapes[i];
    console.log(`name: ${shape.GetName()}, area: ${shape.GetArea()}`);
    shape.IncreaseSize(percentage=10);
    console.log(`name: ${shape.GetName()}, new area: ${shape.GetArea()}`);
}