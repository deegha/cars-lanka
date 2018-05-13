import Fire  from "./fire"
import _ from "lodash"

class FeedStore {
  
  pages= {};
  pageSize = 10;
  path = "products"
  
  loadItems = () => {
    let query = Fire.database().ref("products").orderByKey()
    const keys = Object.keys(this.pages)

    return query.once("value").then(snapshot => this.handler(snapshot))
  }

  handler = (snapshot) => { 
    const entries = _.map(snapshot.val(), (entry, id) => { return { id, entry } }) 
    const numOfitems = snapshot.numChildren()
    this.pages = entries.reverse()
    return Promise.resolve(this.pages)
  }
}

const feedStore = new FeedStore()
export default feedStore