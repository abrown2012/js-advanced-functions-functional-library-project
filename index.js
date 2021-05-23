const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i], i, collection)
        }
      } else {
        for (let x in collection) {
          callback(collection[x], x, collection)
        }
      }
      return collection
    },

    map: function(collection, callback) {
      let newArray = [];
      if(Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++){
          newArray.push(callback(collection[i], i, collection))
        } 
      } else {
        for (let x in collection) {
          newArray.push(callback(collection[x], x, collection))
        }
      }
      return newArray 
    }, 



    reduce: function(collection, callback, acc) {
        let i = 0;
        if (!acc) {
          acc = collection[i];
          i=1;
        }
        for (; i < collection.length; i++){
          acc = callback(acc, collection[i], collection)
        }
        return acc; 
    },

    functions: function() {

    },

    find: function(collection, predicate){
      for (let i = 0; i < collection.length; i++){
        if (predicate(collection[i])) {
          return collection[i]
        }
      }
      return undefined
    }, 

    filter: function(collection, predicate){
      let newArray = [];
      for (let i = 0; i < collection.length; i++){
        if (predicate(collection[i])){
          newArray.push(collection[i])
        }
      }
      return newArray
    },

    size: function(collection){
      let sizeNumber = 0;
      if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++) {
          sizeNumber++
        }
      } else {
        for (let x in collection) {
          sizeNumber++
        }
      }
    
    return sizeNumber
  },

  first: function(array, num){
    if (!num) {
      return array[0]
    } else {
      const newArray = [];
      for (let i = 0; i < num; i++) {
        newArray.push(array[i])
      }
      return newArray
    }
  },

  last: function(array, num) {
    if (!num) {
      return array[array.length - 1]
    } else {
      const newArray = [];
      let index = 1
      for (let i = 0; i < num; i++) {
        newArray.unshift(array[array.length - index])
        index += 1
      }
      return newArray
    }
  },

  compact: function(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        newArray.push(array[i])
      }
    }
    return newArray
  },

  sortBy: function(array, callback) {
    const newArr = array.slice(0)
    return newArr.sort( (a, b) => callback(a) - callback(b))
  },

  flatten: function(array, shallow) {
    const newArray = [];
    if (shallow) {
      for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
          for (let j = 0; j < array[i].length; j++) {
            newArray.push(array[i][j])
          }
        } else {
          newArray.push(array[i])
        }
      }
    } else {
      for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
          newArray.push(...fi.flatten(array[i]))
        } else {
          newArray.push(array[i])
        }
      }
    }
    return newArray
  },

  uniq: function (array, isSorted, callback) {

    function argUnique(array){
      const set = new Set(array)
      const keepers = []
      for (let i = 0; i<array.length; i++){
        if (set.has(array[i])){
          keepers.push(i)
          set.delete(array[i])
        }
      }
      return keepers
    }

    let newArr = array.slice(0)
    if (callback){
      newArr = array.map(e => callback(e))
    }

    const keep_inds = argUnique(newArr)
    for (let i = 0; i<keep_inds.length; i++ ){
      keep_inds[i] = array[keep_inds[i]]
    }
    return keep_inds
  },
  
  keys: function (object) {
    let newArray = [];
    for (let key in object) {
      newArray.push(key)
    }
    return newArray
  },
  
  values: function(object) {
    const newArray = [];
    for (const key in object) {
      newArray.push(object[key])
    }
    return newArray
  },

  functions: function(object) {
    const functions = []
    const allValues = fi.values(object)
    for (let i = 0; i < allValues.length; i++) {
      if (typeof allValues[i] === 'function') {
        functions.push(allValues[i])
      }
    }
    return functions
  },

}})()

fi.libraryMethod()
