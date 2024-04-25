const findTheOldest = function(peeps) {
    return peeps.reduce((maxAgePerson, currPerson) => {
        const maxAge = getAge(maxAgePerson.yearOfBirth, maxAgePerson.yearOfDeath);
        const currAge = getAge(currPerson.yearOfBirth, currPerson.yearOfDeath);

        return maxAge < currAge ? currPerson : maxAgePerson;
    });
};

const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };

// Do not edit below this line
module.exports = findTheOldest;
