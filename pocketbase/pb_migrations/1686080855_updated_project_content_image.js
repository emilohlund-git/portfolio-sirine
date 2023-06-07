migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wbary9m3vfughfy")

  // remove
  collection.schema.removeField("a64dldyd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ibycyuni",
    "name": "media",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "vc8ley2mnobu3q9",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wbary9m3vfughfy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a64dldyd",
    "name": "image",
    "type": "file",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/jpeg",
        "image/png",
        "application/pdf",
        "video/mp4"
      ],
      "thumbs": [],
      "protected": false
    }
  }))

  // remove
  collection.schema.removeField("ibycyuni")

  return dao.saveCollection(collection)
})
