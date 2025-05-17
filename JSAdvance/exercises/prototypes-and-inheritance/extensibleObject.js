function extensibleObject() {
  const obj = {
    extend(template) {
      for (let key in template) {
        if ((typeof template[key]) === 'function'){
            Object.getPrototypeOf(this)[key] = template[key]
        } else {
            this[key] = template[key]
        }
        
      }
    },
  };
  return obj;
}

const template = {
    fight: function(target) { return `object fights with ${target}` },
    health: 100,
    mana: 50
};

const testObject = extensibleObject();
testObject.extend(template);
// expect(Object.getPrototypeOf(testObject).hasOwnProperty('fight')).to.equal(true, "Object's prototype was not extended");
// expect(testObject.hasOwnProperty('health')).to.equal(true, "Template properties were not cloned correctly.");
// expect(testObject.hasOwnProperty('mana')).to.equal(true, "Template properties were not cloned correctly.");
// expect(testObject.fight('me')).to.equal('object fights with me', "Extension method wasn't cloned correctly.");

console.log(Object.getPrototypeOf(testObject).hasOwnProperty('fight'));
console.log(Object.getPrototypeOf(testObject));
