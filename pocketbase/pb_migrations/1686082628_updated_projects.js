migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xwaj66ih9a3b7h5")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xwaj66ih9a3b7h5")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
