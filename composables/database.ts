import { nanoid } from 'nanoid'
import { createStorage } from 'unstorage'
import indexDBDriver from 'unstorage/drivers/indexedb'
import type { Book, Sheet } from '~/assets/types/database'

export const createLocalBooksStorage = () => createStorage<Omit<Book, 'id'>>({ driver: indexDBDriver({ dbName: 'paysha', storeName: 'books' }) })
export const createLocalSheetsStorage = () => createStorage<Omit<Sheet, 'id'>>({ driver: indexDBDriver({ dbName: 'paysha', storeName: 'sheet' }) })

async function fetchLocalBooks() {
  if (!window) return []

  const idbBooks = createLocalBooksStorage()
  const result: Book[] = []

  for (const key of await idbBooks.getKeys()) {
    const book = await idbBooks.getItem(key)

    if (book) result.push({ ...book, id: key })
  }

  return result
}

export async function fetchBooks() {
  const { status } = useAuth()

  if (status.value === 'unauthenticated') return fetchLocalBooks()

  // TODO: fetch books from server or wait for session to load
  return []
}

export async function createBook(data: { name: string; desciption?: string }) {
  const { status } = useAuth()

  if (status.value === 'unauthenticated') {
    const idbBooks = createLocalBooksStorage()
    const id = nanoid()

    idbBooks.setItem(id, {
      created: new Date(),
      modified: new Date(),
      name: data.name,
      sheets: [],
    })

    return id
  }

  return false
}
