migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0gbxfgjmavmwfyx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mty8jknz",
    "name": "box_1_icon",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zudazqvg",
    "name": "box_2_icon",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zcteetbx",
    "name": "box_3_icon",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0gbxfgjmavmwfyx")

  // remove
  collection.schema.removeField("mty8jknz")

  // remove
  collection.schema.removeField("zudazqvg")

  // remove
  collection.schema.removeField("zcteetbx")

  return dao.saveCollection(collection)
})
