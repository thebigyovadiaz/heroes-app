const { heroes } = require("../data/heroes");

export const getHeroById = (heroId) => {
  return heroes.find(hero => hero.id === heroId);
};
