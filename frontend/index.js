
// destructuring variables from the library/ see notes line 34
// im just litteraly using an example giving by the library
// https://github.com/liabru/matter-js/blob/master/examples/mixed.js
const { Engine, Render, Runner, World, Bodies} = Matter;

// when we create the engine we get a world object along with it
 // create engine
const engine = Engine.create(); 
const { world } = engine; 
// create renderer-this is an additive process to document.body in other words it will not destroy any element inside of the body in the html
const render = Render.create({
    element: document.body,
    engine: engine, 
    options: {
        width: 800,
        height: 600
    }
});

Render.run(render);
Runner.run(Runner.create(), engine);

const shape = Bodies.rectangle(200, 200, 50, 50, {
    isStatic: true
});
// console.log(shape)
World.add(world, shape)
// console.log(world) => we can see all the shapes we created in the console 