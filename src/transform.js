function groupAdultsByAgeRange(persons) {
  const personOver18 = persons.filter(function(person) {
    return person.age >= 18;
    // on the readme file it says >18 but test expect >= 18
  });

  const groups = personOver18.reduce(function(ageGroups, person) {
    if (person.age <= 20) {
      if (ageGroups["20 and younger"] === undefined) {
        ageGroups["20 and younger"] = [person];
      } else {
        ageGroups["20 and younger"].push(person);
      }
    }

    if (person.age >= 21 && person.age <= 30) {
      if (ageGroups["21-30"] === undefined) {
        ageGroups["21-30"] = [person];
      } else {
        ageGroups["21-30"].push(person);
      }
    }

    if (person.age >= 31 && person.age <= 40) {
      if (ageGroups["31-40"] === undefined) {
        ageGroups["31-40"] = [person];
      } else {
        ageGroups["31-40"].push(person);
      }
    }

    if (person.age >= 41 && person.age <= 50) {
      if (ageGroups["41-50"] === undefined) {
        ageGroups["41-50"] = [person];
      } else {
        ageGroups["41-50"].push(person);
      }
    }

    if (person.age >= 51) {
      if (ageGroups["51 and older"] === undefined) {
        ageGroups["51 and older"] = [person];
      } else {
        ageGroups["51 and older"].push(person);
      }
    }

    return ageGroups;
  }, {});
  //console.log(groups);
  return groups;
}

module.exports = {
  groupAdultsByAgeRange
};
