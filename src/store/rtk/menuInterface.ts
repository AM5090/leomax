export interface IMenuItem {
  id: number
  landing: boolean
  name: string
  query: string
  shard: string
  url: string
  childs: {
    id: number
    name: string
    parent: number
    query: string
    seo: string
    shard: string
    url: string
  }
}