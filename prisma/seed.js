const prisma = require("../prisma");
const seed = async () => {
  // TODO: Create 10 players
  const createPlayers = async () => {
    const Players = [
      { name: "Player 1", breed: "Dog 1", status: "BENCH" },
      { name: "Player 2", breed: "Dog 2", status: "FIELD" },
      { name: "Player 3", breed: "Dog 3", status: "BENCH" },
      { name: "Player 4", breed: "Dog 4", status: "BENCH" },
      { name: "Player 5", breed: "Dog 5", status: "FIELD" },
      { name: "Player 6", breed: "Dog 6", status: "BENCH" },
      { name: "Player 7", breed: "Dog 7", status: "FIELD" },
      { name: "Player 8", breed: "Dog 8", status: "BENCH" },
      { name: "Player 9", breed: "Dog 9", status: "FIELD" },
      { name: "Player 10", breed: "Dog 10", status: "FIELD" },
    ];
    await prisma.player.createMany({ data: Players });
  };

  await createPlayers();
};
seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
