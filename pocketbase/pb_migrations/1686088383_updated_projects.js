migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xwaj66ih9a3b7h5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rfxq2pim",
    "name": "colors",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "w08iil0t0jlrupl",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iy04yput",
    "name": "primary_research",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "wbary9m3vfughfy",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "09uu22rs",
    "name": "secondary_research",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "wbary9m3vfughfy",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "msmgw9fs",
    "name": "findings",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "vc8ley2mnobu3q9",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v6htohxq",
    "name": "persona",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "vc8ley2mnobu3q9",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hstdhdhv",
    "name": "affinity_map",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "vc8ley2mnobu3q9",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xaxauhpr",
    "name": "user_scenario",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "vc8ley2mnobu3q9",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lxihxll7",
    "name": "user_flow",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "vc8ley2mnobu3q9",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "um7xwvdd",
    "name": "navigation_map",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "vc8ley2mnobu3q9",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fxbo9i58",
    "name": "logo",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "wbary9m3vfughfy",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yi6t25it",
    "name": "brand_colors",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "wbary9m3vfughfy",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "23l6w01v",
    "name": "iconography",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "wbary9m3vfughfy",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fdop2lxj",
    "name": "font_family",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "vc8ley2mnobu3q9",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fd5ss7cn",
    "name": "high_fidelity_mock_ups",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "vc8ley2mnobu3q9",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tez4bggm",
    "name": "interactive_prototype",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "vc8ley2mnobu3q9",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xwaj66ih9a3b7h5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rfxq2pim",
    "name": "colors",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "w08iil0t0jlrupl",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
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

  // update
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

  // update
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

  // update
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

  // update
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

  // update
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

  // update
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

  // update
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

  // update
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

  // update
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

  // update
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

  // update
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

  // update
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

  // update
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
})
