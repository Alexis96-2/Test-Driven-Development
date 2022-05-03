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
})