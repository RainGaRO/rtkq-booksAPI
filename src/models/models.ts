export interface ResponseBook {
    kind?: string
    totalItems?: number
    items?: IBook[]
    length: number
}

export interface IBook {
    kind: string
    id: string
    etag: string
    selfLink: string
    volumeInfo: VolumeInfo
}

export interface IBookId {
    kind: string
    id: string
    etag: string
    selfLink: string
    volumeInfo: VolumeInfo
  }

export interface VolumeInfo {
    title: string
    authors: string[]
    publisher: string
    publishedDate: string
    description: string
    pageCount?: number
    printType: string
    imageLinks?: ImageLinks
    categories: string[]
    maturityRating: string
    allowAnonLogging: boolean
    contentVersion: string
    language: string
    previewLink: string
    infoLink: string
    canonicalVolumeLink: string
}

export interface ImageLinks {
    smallThumbnail: string
    thumbnail: string
  }

export interface ParamsQuery {
    terms: string
    categories: string
    sorting: string
    startIndex: number
}