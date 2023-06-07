migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wbary9m3vfughfy")

  collection.name = "project_content_media"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wbary9m3vfughfy")

  collection.name = "project_content_image"

  return dao.saveCollection(collection)
})
