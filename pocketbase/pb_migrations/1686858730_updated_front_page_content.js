migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0gbxfgjmavmwfyx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "stw6hxjy",
    "name": "box_1_title",
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
    "id": "kacp15ed",
    "name": "box_2_title",
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
    "id": "zo8365no",
    "name": "box_3_text",
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
    "id": "j9dxrtbp",
    "name": "box_3_title",
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
    "id": "mrj1e9rw",
    "name": "box_1_text",
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
    "id": "hbpfpjeb",
    "name": "box_2_text",
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
  collection.schema.removeField("stw6hxjy")

  // remove
  collection.schema.removeField("kacp15ed")

  // remove
  collection.schema.removeField("zo8365no")

  // remove
  collection.schema.removeField("j9dxrtbp")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mrj1e9rw",
    "name": "branding_text",
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
    "id": "hbpfpjeb",
    "name": "ui_ux_text",
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
