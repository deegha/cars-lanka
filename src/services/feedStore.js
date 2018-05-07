import Fire  from "./fire"
import _ from "lodash"

class FeedStore {
  
  pages= {};
  pageSize = 5;
  path = "products"
  
  loadItems = () => {
    let query = Fire.database().ref("products").orderByKey()
    const keys = Object.keys(this.pages)

    if (keys.length > 0)
        query = query.endAt(_.last(keys))


    return query.limitToLast(this.pageSize).once("value").then(snapshot => this.handler(snapshot))
  }

  getItems = () => Promise.resolve( _.flatten(_.map(this.pages, page => page)))

  handler = (snapshot) => { 
    const entries = _.map(snapshot.val(), (entry, id) => { return { id, entry } }) 
    const isLastPage = entries.length < this.pageSize;
    const id = !isLastPage ? entries.splice(0, 1)[0].id : "__lastPage__"
    this.pages[id] = entries.reverse()
    return Promise.resolve(this.pages[id]   )
  }
}

const feedStore = new FeedStore()
export default feedStore