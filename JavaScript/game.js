// Seleccionar el elemento canvas del DOM
const canvas = document.querySelector('#game');

// Crear el contexto 2D para el canvas
const game = canvas.getContext('2d');

// Agregar un listener de carga para asegurarse de que todo el documento ha cargado antes de ejecutar la función de inicio
window.addEventListener('load', setSizeCanvas);

// Agregar un listener de resize para que se ejecute la función resizeCanvas cuando se cambie el tamaño de pantalla
window.addEventListener('resize', setSizeCanvas)

// Declarar una variable let nombrada canvasSize para usarlo en la función startGame 
let canvasSize;

// Declarar una variable let llamada elementSize para calcular el tamaño de los elementos
let elementSize;

// Función de inicio que se ejecuta después de que se ha cargado todo el documento
function startGame() {
// Agregar aquí cualquier código necesario para iniciar el juego

    // Insertar un texto y bucle para insertarlo en filo o columna
    game.font = elementSize + 'px Verdana';
    game.textAlign = 'end';
    for (let i = 1; i <= 10; i++) {
        game.fillText(emojis['X'], elementSize + 12, elementSize * i)
    }
}

// Función de cambio de tamaño de elemento canvas en relación al tamaño de pantalla
function setSizeCanvas() {
    // Obtener el width de la pantalla y lo multiplico por 0.8 para que tenga una valor menor al width de la pantalla
    const width = window.innerWidth * 0.8;

    // Obtener el heightde la pantalla y lo multiplico por 0.8 para que tenga una valor menor al height de la pantalla
    const height = window.innerHeight * 0.8;


    // crear una condición para establecer el valor de canvasSize y darle un valor responsive
    (width > height) ?
        canvasSize = height :
        canvasSize = width;

    // Modificar el atributo width del elemento canvas y lo multiplico por una constante menor a 1 para que sea responsive
    canvas.setAttribute('width', canvasSize);

    // Modificar el atributo width del elemento canvas y lo multiplico por una constante menor a 1 para que sea responsive
    canvas.setAttribute('height', canvasSize);

    // asignamos el valor del elementSize para calcular el tamaño de los elementos
    elementSize = (canvasSize / 10)-2;

    // Mostrar en consola el valor de elementSize
    console.log({ canvasSize, elementSize });

    // Inicializamos la función startGame
    startGame();
}
