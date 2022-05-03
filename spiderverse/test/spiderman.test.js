const Spiderman = require("./../app/spiderman")
describe("Unit Test for Spiderman Class",()=>{
  test('1) Create an Spiderman Object', ()=>{
    const andrewGarfield = new Spiderman("The Amazing Spiderman", 31, "Andrew Garfield", 2, "Sony")

    //Validamos
    expect(andrewGarfield.name).toBe("The Amazing Spiderman")
    expect(andrewGarfield.age).toBe(31)
    expect(andrewGarfield.actor).toBe("Andrew Garfield")
    expect(andrewGarfield.movies).toBe(2)
    expect(andrewGarfield.studio).toBe("Sony")
  });
  test('2) Used the method getInfo()', ()=>{
    const tomHolland = new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel")

    //Validamos
    expect(tomHolland.getInfo()).toBe("Hey I'm Tom Holland from Marvel studio")
  });
})