migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xwaj66ih9a3b7h5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rzw9pmvb",
    "name": "research_goals",
    "type": "editor",
    "required": true,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iy04yput",
    "name": "primary_research",
    "type": "relation",
    "required": false,
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
    "id": "09uu22rs",
    "name": "secondary_research",
    "type": "relation",
    "required": false,
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
    "id": "msmgw9fs",
    "name": "findings",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bpnrcztt",
    "name": "key_insights",
    "type": "editor",
    "required": true,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v6htohxq",
    "name": "persona",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hstdhdhv",
    "name": "affinity_map",
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
    "id": "xaxauhpr",
    "name": "user_scenario",
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
    "id": "lxihxll7",
    "name": "user_flow",
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
    "id": "um7xwvdd",
    "name": "navigation_map",
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

  // remove
  collection.schema.removeField("rzw9pmvb")

  // remove
  collection.schema.removeField("iy04yput")

  // remove
  collection.schema.removeField("09uu22rs")

  // remove
  collection.schema.removeField("msmgw9fs")

  // remove
  collection.schema.removeField("bpnrcztt")

  // remove
  collection.schema.removeField("v6htohxq")

  // remove
  collection.schema.removeField("hstdhdhv")

  // remove
  collection.schema.removeField("xaxauhpr")

  // remove
  collection.schema.removeField("lxihxll7")

  // remove
  collection.schema.removeField("um7xwvdd")

  return dao.saveCollection(collection)
})
