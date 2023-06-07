migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vc8ley2mnobu3q9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "diud2g9f",
    "name": "embed_src",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dw78m3rd",
    "name": "type",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "pdf",
        "video",
        "image",
        "embed"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uknqlzyc",
    "name": "media",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "application/pdf",
        "video/mp4",
        "image/jpeg",
        "image/png"
      ],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vc8ley2mnobu3q9")

  // remove
  collection.schema.removeField("diud2g9f")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dw78m3rd",
    "name": "type",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "pdf",
        "video",
        "image"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uknqlzyc",
    "name": "media",
    "type": "file",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "application/pdf",
        "video/mp4",
        "image/jpeg",
        "image/png"
      ],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
