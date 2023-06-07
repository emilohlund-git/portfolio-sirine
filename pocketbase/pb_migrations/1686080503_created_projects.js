migrate((db) => {
  const collection = new Collection({
    "id": "xwaj66ih9a3b7h5",
    "created": "2023-06-06 19:41:43.392Z",
    "updated": "2023-06-06 19:41:43.392Z",
    "name": "projects",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fvhnwuqk",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "mzwlhdah",
        "name": "slogan",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "0cl9tpkd",
        "name": "orientation",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "left",
            "right"
          ]
        }
      },
      {
        "system": false,
        "id": "rfe1ubmk",
        "name": "cover_image",
        "type": "file",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpeg",
            "image/png",
            "image/webp"
          ],
          "thumbs": [],
          "protected": false
        }
      },
      {
        "system": false,
        "id": "wsj1qfaj",
        "name": "roles",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 4,
          "values": [
            "UX Designer",
            "Interaction Designer",
            "UI Designer",
            "Visual Designer"
          ]
        }
      },
      {
        "system": false,
        "id": "4bzpal3k",
        "name": "processes",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 5,
          "values": [
            "Research",
            "Analyze / Empathize",
            "Ideate",
            "Design",
            "Test"
          ]
        }
      },
      {
        "system": false,
        "id": "z87oq6rk",
        "name": "tools",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 6,
          "values": [
            "Figma",
            "Miro",
            "Photoshop",
            "Illustrator",
            "DaVinci Resolve",
            "Canva"
          ]
        }
      },
      {
        "system": false,
        "id": "xyujk9ag",
        "name": "problem",
        "type": "editor",
        "required": true,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "nznktqnz",
        "name": "potential_solution",
        "type": "editor",
        "required": true,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("xwaj66ih9a3b7h5");

  return dao.deleteCollection(collection);
})
