export class Game {
    constructor(id, imagen, alt, nombre, genero, descripcion, precio) {
        this.id = id;
        this.imagen = imagen;
        this.alt = alt;
        this.nombre = nombre;
        this.genero = genero;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}

export const gameArray = [
    new Game("1", "./assets/cards/card01.jpg", "Neko Odyssey cover page", "Neko Odyssey", "Adventure", "A Game for Cat Lovers You Can't Miss! Here's a slightly unusual Casual Adventure game where the main gameplay centers around taking pictures of cats. The pixel art graphics in a 3D setting create a charming atmosphere reminiscent of Japanese animation.", 19.99),
    new Game("2", "./assets/cards/card02.jpg", "Zodiacats cover page","Zodiacats", "Puzzle", "Follow cat Catherine on her journey for the lost astrology papyri and learn more about her job as a witch assistant for bringing good vibes into this Earth! Let Catherine guide you through the zodiac wheel, showing you about features of each solar sign. You can also learn about your cat's sign!", 3.99),
    new Game("3", "./assets/cards/card03.jpg", "Catizens cover page", "Catizens", "Strategy", "Catizens is a colony management simulation game where you watch over unique cats with quirky personalities, as you help them build and grow their settlement while exploring new lands, facing off against wildlife and overcoming the challenges of each environment", 17.99),
    new Game("4", "./assets/cards/card04.jpg", "Everdeep Aurora cover page", "Everdeep Aurora", "Puzzle", "An ongoing apocalyptic meteor shower has forced the world’s population to settle underground. As Shell, a feline child who awakens to find her mother missing, drill downward from the surface layer through a tile-based underground and discover the Everdeep", 18.99),
    new Game("5", "./assets/cards/card05.jpg", "Quilts and Cats of Calico cover page", "Quilts and Cats of Calico", "Strategy", "Quilts & Cats of Calico is a wholesome, award-winning complex puzzle game for 1 to 4 players. Meet adorable cats and sew the coziest quilts. Compete with other players in multiplayer mode, play solo, or delve into the story of a quilter sewing their way through the city of cats.", 15.99),
    new Game("6", "./assets/cards/card06.jpg", "Cat Quest cover page", "Cat Quest", "Open World", "The multi award-winning Action RPG. Some say 'Diablo with Cats' others a 'Super-cute Skyrim', whatever your take, Cat Quest's loot-fuelled cat-venture is as beautifully crafted, as its combat and magic are ultra-satisfying. Universally adored by critics - it'll have you purring for joy!.", 12.99),
    new Game("7", "./assets/cards/card07.jpg", "Flying Neko Delivery cover page", "Flying Neko Delivery", "Open World", "Take on the role of Onigiri, a feline witch who lives in a cottage and delivers packages flying on a broomstick. Customize your cottage, explore new worlds, forage plants and fungi, and meet quirky villagers along the way, while enjoying music by Mark Sparling, the composer for A Short Hike.", 19.99),
    new Game("8", "./assets/cards/card08.jpg", "Snacko cover page", "Snacko", "Adventure", "Lift a curse and revitalize a ruined island in Snacko, where former big city kitties Momo and Mikan are starting a new life! Grow crops, raise fluffy cows, go fishing, exploring, customize and decorate as you please, and much, much more in this farming cat-venture.", 14.99),
    new Game("9", "./assets/cards/card09.jpg", "Little Kitty, Big City cover page", "Little Kitty, Big City", "Adventure", "You're a curious little kitty with a big personality, on an adventure to find your way back home. Explore the city, make new friends with stray animals, wear delightful hats, and leave more than a little chaos in your wake. After all, isn't that what cats do best?", 12.99),
    new Game("10", "./assets/cards/card10.jpg", "Cats Organized Neatly cover page", "Cats Organized Neatly", "Puzzle", "In this 2D puzzle game you have the responsibility to arrange your feline friends in a way that fits the grid. Cats Organized Neatly comes with 80 different handcrafted levels and a whole bunch of cats in all shapes and sizes.", 4.99),
]