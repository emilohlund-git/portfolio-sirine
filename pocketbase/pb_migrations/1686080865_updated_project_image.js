migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vc8ley2mnobu3q9")

  collection.name = "project_media"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vc8ley2mnobu3q9")

  collection.name = "project_image"

  return dao.saveCollection(collection)
})
