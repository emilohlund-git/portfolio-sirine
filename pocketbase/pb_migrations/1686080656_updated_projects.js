migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xwaj66ih9a3b7h5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rfxq2pim",
    "name": "colors",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "w08iil0t0jlrupl",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xwaj66ih9a3b7h5")

  // remove
  collection.schema.removeField("rfxq2pim")

  return dao.saveCollection(collection)
})
