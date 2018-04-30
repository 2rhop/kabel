
exports.seed = function (knex, Promise) {
  // Inserts seed entries
  return knex('users').insert([
    { username: '2rhop', password: 'sd1234sdgsdf56' },
    { username: 'Harry', password: 'ssdff1234sdfs56' },
    { username: 'Hermione', password: 'dss12dsf3456' },
    { username: 'Draco', password: '1234sdfs56' },
    { username: 'Lucius', password: '1dsfaa23s456' },
    { username: 'Voldemort', password: '1sdfgsdfg23d456' },
  ]);
};
