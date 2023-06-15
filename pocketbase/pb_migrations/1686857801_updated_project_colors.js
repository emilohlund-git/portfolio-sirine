migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w08iil0t0jlrupl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a0u7t5tz",
    "name": "role_list_color",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pmsycvkr",
    "name": "process_list_color",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "unclftnz",
    "name": "tools_list_color",
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

  // remove
  collection.schema.removeField("a0u7t5tz")

  // remove
  collection.schema.removeField("pmsycvkr")

  // remove
  collection.schema.removeField("unclftnz")

  return dao.saveCollection(collection)
})
