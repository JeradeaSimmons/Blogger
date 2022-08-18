export class Blogs {
  constructor(data) {
    this.id = data.id || ''
    this.imgUrl = data.imgUrl || ''
    this.body = data.body || []
    this.title = data.title || ''
    this.creatorId = data.creatorId || ''
    this.creator = data.creator || {}
    this.createdAt = data.createdAt || ''
    this.updatedAt = data.updatedAt || ''
  }
}