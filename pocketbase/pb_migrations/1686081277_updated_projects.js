migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xwaj66ih9a3b7h5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "imr79eli",
    "name": "about",
    "type": "editor",
    "required": true,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fxbo9i58",
    "name": "logo",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "wbary9m3vfughfy",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yi6t25it",
    "name": "brand_colors",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "wbary9m3vfughfy",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "23l6w01v",
    "name": "iconography",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "wbary9m3vfughfy",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fdop2lxj",
    "name": "font_family",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "vc8ley2mnobu3q9",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fd5ss7cn",
    "name": "high_fidelity_mock_ups",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "vc8ley2mnobu3q9",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xwaj66ih9a3b7h5")

  // remove
  collection.schema.removeField("imr79eli")

  // remove
  collection.schema.removeField("fxbo9i58")

  // remove
  collection.schema.removeField("yi6t25it")

  // remove
  collection.schema.removeField("23l6w01v")

  // remove
  collection.schema.removeField("fdop2lxj")

  // remove
  collection.schema.removeField("fd5ss7cn")

  // remove
  collection.schema.removeField("4iidjsdn")

  return dao.saveCollection(collection)
})
