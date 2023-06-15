migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0gbxfgjmavmwfyx")

  // remove
  collection.schema.removeField("ygci2dcs")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0gbxfgjmavmwfyx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ygci2dcs",
    "name": "product_design_text",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
