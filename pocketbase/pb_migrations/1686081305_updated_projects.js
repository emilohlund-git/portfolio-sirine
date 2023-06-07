migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xwaj66ih9a3b7h5")

  // remove
  collection.schema.removeField("4iidjsdn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tez4bggm",
    "name": "interactive_prototype",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "vc8ley2mnobu3q9",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4iidjsdn",
    "name": "interactive_prototype",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("tez4bggm")

  return dao.saveCollection(collection)
})
