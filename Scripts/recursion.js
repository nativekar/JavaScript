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

const categories = {
  id: "e_id_1",
  electronics: {
    mobiles: {
      name: "Google Pixel 4",
      id: "G101",
    },
    tablets: {
      name: "Apple iPad",
      id: "i201",
    },
    televisions: {
      name: "OnePlus TV U series",
      id: "OP301",
    },
  },
  groceries: {
    snacks: {
      name: "Muesli",
      id: "M102",
    },
    fruits: {
      name: "Mango",
      id: "F202",
    },
  },
};

const allCategories = {};

const getAllCategories = (categories, parent) => {
  for (key in categories) {
    if (typeof categories[key] === "object")
      getAllCategories(categories[key], parent + ">" + key);
    else {
      allCategories[parent + ">" + key] = categories[key];
    }
  }
  return allCategories;
};

console.log(getAllCategories(categories, "categories"));
