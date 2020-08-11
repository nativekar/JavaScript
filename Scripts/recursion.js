const users = {
  name: "Jane Doe",
  age: "22",
  address: {
    personal: { city: "London", country: "United Kingdom", zipCode: "L102" },
    official: {
      city: "London",
      country: "United Kingdom",
      zipCode: "L202",
      landmark: {
        name: "National History Museum",
      },
    },
  },
};

/* Plain ol' JS to create breadcrumb. */
let breadCrumb = {};

const fetchLine = (users, parent) => {
  for (let key in users) {
    if (typeof users[key] === "object")
      fetchLine(users[key], parent + "." + key);
    else breadCrumb[parent + "." + key] = users[key];
  }
  return breadCrumb;
};

console.log(fetchLine(users, "users"));
