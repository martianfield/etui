class Watcher {
  constructor() {
    //this._entity = entity
    this._dirties = {} // one property for each dirty property ... the value is the new value
    this._eventListeners = {} // one property for each event ... the value for each is a Set with event handler functions
  }

  /*
  get entity() {
    return this._entity
  }

  set entity(value) {
    this._entity = value
  }

  */

  get isDirty() {
    return Object.keys(this._dirties).length > 0
  }

  getChangeset() {
    let changeset = {}
    for(let key in this._dirties) {
      changeset[key] = this._dirties[key]
    }
    return changeset
  }

  getUpdatedEntity(entity) {
    let updatedEntity = JSON.parse(JSON.stringify(entity))
    let changeset = this.getChangeset()
    for(let key in changeset) {
      updatedEntity[key] = changeset[key]
    }
    return updatedEntity
  }

  addEventListener(eventName, func) {
    if(!this._eventListeners[eventName]) {
      this._eventListeners[eventName] = new Set()
    }
    this._eventListeners[eventName].add(func)
  }

  removeEventListener(eventName, func) {
    if(this._eventListeners[eventName]) {
      this._eventListeners.delete(func)
    }
  }

  change(property, value, isDirty) {
    if(!isDirty) {
      delete this._dirties[property]
    }
    else {
      this._dirties[property] = value
    }

    // inform listeners
    if(this._eventListeners["change"]) {
      for(let listener of this._eventListeners["change"]) {
        listener(this)
      }
    }
  }

  clear() {
    this._dirties = {}
  }
}

export default Watcher