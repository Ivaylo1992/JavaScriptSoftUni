function factory(funcLibrary, funcOrders) {
    return funcOrders.map(({template, parts}) => {
            const obj = {...template};
            for (let part of parts) {
                obj[part] = funcLibrary[part]; 
            }
            return obj;
        }
    )
}


// function factory(library, orders) {
//     return orders.map(order => {
//       // Create a shallow copy of the template
//       const product = { ...order.template };
  
//       // Add the requested parts (functions) from the library
//       for (const part of order.parts) {
//         product[part] = library[part];
//       }
  
//       return product;
//     });
//   }
  

const library = {
  print: function () {
    console.log(`${this.name} is printing a page`);
  },

  scan: function () {
    console.log(`${this.name} is scanning a document`);
  },

  play: function (artist, track) {
    console.log(`${this.name} is playing '${track}' by ${artist}`);
  },
};

const orders = [
  {
    template: { name: "ACME Printer" },

    parts: ["print"],
  },

  {
    template: { name: "Initech Scanner" },

    parts: ["scan"],
  },

  {
    template: { name: "ComTron Copier" },

    parts: ["scan", "print"],
  },

  {
    template: { name: "BoomBox Stereo" },

    parts: ["play"],
  },
];

const products = factory(library, orders);
console.log(products);
