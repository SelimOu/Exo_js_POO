let w1 = new WarriorSword("Johan", 10, 100);
let w2 = new WarriorSpear("Leon", 15, 100);
let w3 = new WarriorAxe("Max", 12, 100);

while (w1.isAlive() && w2.isAlive()) {
    console.log(w1.attack(w2))
    console.log(w2.attack(w3))
}
if (w1.isAlive() > 0) {
    console.log("Johan a gagné");
}
else if (w2.isAlive() > 0) {
    console.log("Leon a gagné");

}

