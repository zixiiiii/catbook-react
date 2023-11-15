const SNAKE_SPEED = 5; //num of times update per sec

const main = () => {
    update();
    draw();
}


setInterval(main, 1000 / SNAKE_SPEED);

const update = () => {
    console.log('update')
}

const draw = () => {
}
