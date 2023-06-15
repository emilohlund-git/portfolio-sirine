migrate((db) => {
  const collection = new Collection({
    "id": "0gbxfgjmavmwfyx",
    "created": "2023-06-07 12:44:58.109Z",
    "updated": "2023-06-07 12:44:58.109Z",
    "name": "front_page_content",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
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
      },
      {
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
      },
      {
        "system": false,
        "id": "eh06ylsq",
        "name": "contact_me_caption",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0gbxfgjmavmwfyx");

  return dao.deleteCollection(collection);
})
