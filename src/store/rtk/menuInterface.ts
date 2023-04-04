export interface IMenuItemChilds {
  id: number
  name: string
  parent: number
  query: string
  seo: string
  shard: string
  url: string
}

export interface IMenuItem {
  id: number
  landing: boolean
  name: string
  query: string
  shard: string
  url: string
  childs: IMenuItemChilds[]
}