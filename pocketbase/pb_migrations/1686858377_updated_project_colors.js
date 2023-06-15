migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w08iil0t0jlrupl")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "z3o5obdg",
    "name": "process_steps_color",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w08iil0t0jlrupl")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "z3o5obdg",
    "name": "process_steps_color",
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
