import Fire  from "./fire"
import _ from "lodash"

class FeedStore {
  
  pages= {};
  pageSize = 10;
  path = "products"
  
  loadItems = (filter) => {
    let query = Fire.database().ref("products")
    const keys = Object.keys(this.pages)
    return query.once("value").then(snapshot => this.handler(snapshot, filter))
  }

  handler = (snapshot, filter) => { 
    const entries = _.map(snapshot.val(), (entry, id) => { return { id, entry } }) 
    const numOfitems = snapshot.numChildren()
    this.pages = entries.reverse()
    let filtered = []
    if(filter) {
      filtered = this.pages

      
      if(filter.make !== "") {
        filtered = filtered.filter(item => (item.entry.make === filter.make)?item:null )
      }

      if(filter.min_price !== "") {
        filtered = filtered.filter(item => (item.entry.price >= filter.min_price)?item:null )
      }

      if(filter.max_price !== "") {
        filtered = filtered.filter(item => (item.entry.price <= filter.max_price)?item:null )
      }

      if(filter.location.city !== "") {
        filtered = filtered.filter(item => (item.entry.location.address_components && filter.location.city === item.entry.location.address_components[0].long_name)?item:null)
      }


      return Promise.resolve(filtered)
    }

    return Promise.resolve(this.pages)
  }

}

const feedStore = new FeedStore()
export default feedStore