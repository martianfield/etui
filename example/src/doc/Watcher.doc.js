import React from "react"
import {Button, Checkbox, Watcher} from "etui"


class WatcherDocumentation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isDirty:false,
      entity: {
        name:"Peter",
        isMarried:true,
        hasChildren:false
      }
    }

    this.watcher = new Watcher()
    this.watcher.addEventListener("change", this.onFormChanged)
  }

  render() {
    return (
      <div>
        <h1>Watcher</h1>
        <Checkbox entity={this.state.entity} property="isMarried" onChange={this.onChange} watcher={this.watcher} />
        <Checkbox entity={this.state.entity} property="hasChildren" onChange={this.onChange} watcher={this.watcher} />
        <Button onClick={this.onClickSave} disabled={!this.state.isDirty}>Save</Button>
      </div>
    )
  }

  onChange = (e) => {
    //this.watcher.change(e.property, e.value, e.isDirty)
  }

  onFormChanged = (watcher) => {
    if(watcher.isDirty !== this.state.isDirty) {
      this.setState({...this.state, isDirty:watcher.isDirty})
    }
  }

  onClickSave = () => {
    let updatedEntity = this.watcher.getUpdatedEntity(this.state.entity)
    this.watcher.clear()
    this.setState({...this.state, entity:updatedEntity, isDirty:false})
  }
}

export default WatcherDocumentation