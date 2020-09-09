
// destructuring variables from the library/ see notes line 34
// im just litteraly using an example giving by the library
// https://github.com/liabru/matter-js/blob/master/examples/mixed.js
function setup() {

    const { Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse} = Matter;
    const width = 800;
    const height = 600
    // when we create the engine we get a world object along with it
    // create engine
    const engine = Engine.create(); 
    const { world } = engine; 
    // create renderer-this is an additive process to document.body in other words it will not destroy any element inside of the body in the html
    const render = Render.create({
        element: document.body,
        engine: engine, 
        options: {
            wireframes: false,
            width,
            height
        }
    });

    Render.run(render);
    Runner.run(Runner.create(), engine);

    function shape(x,y,width,height,gravity) {
        return Bodies.rectangle(x, y, width, height, gravity);
    } 

    // console.log(shape)

    // console.log(world)
    //  => we can see all the shapes we created in the console 

    const walls = 
    [
    shape(400, 0, 800, 40, {isStatic: true}),
    shape(0, 400, 40, 800, {isStatic: true}),
    shape(400, 600, 800, 40, {isStatic: true}),
    shape(800, 300, 40, 800, {isStatic: true})
    ]

    World.add(world, walls);
    World.add(world, MouseConstraint.create(engine,{
        mouse: Mouse.create(render.canvas)
    }))

    for (let i=0; i < 20; i++){
      World.add(world, shape(Math.random()*width, Math.random()*height, 40, 40, {isStatic: false})) 
    }

}

document.addEventListener("DOMContentLoaded", event => {
setup()
});
