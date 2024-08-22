export type Sheet = {
  id: string
  name: string
  created: Date
  modified: Date
}

export type Book = {
  id: string
  name: string
  created: Date
  modified: Date
  sheets: Sheet[]
}
