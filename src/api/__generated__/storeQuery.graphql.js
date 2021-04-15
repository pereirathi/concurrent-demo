/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ShowCaseType = "BANNER" | "BRAND" | "CATEGORY" | "CUSTOM" | "PRODUCT" | "PRODUCT_GROUP" | "PROMOTION" | "%future added value";
export type ShowCaseFilter = {|
  id?: ?string,
  type?: ?ShowCaseType,
|};
export type storeQueryVariables = {|
  filter?: ?ShowCaseFilter
|};
export type storeQueryResponse = {|
  +loadNewVisitorShowCase: ?{|
    +showCase: ?{|
      +shelves: ?$ReadOnlyArray<?{|
        +items: ?$ReadOnlyArray<?{|
          +id: ?string,
          +images: ?$ReadOnlyArray<?string>,
          +displayName: ?string,
        |}>
      |}>
    |}
  |}
|};
export type storeQuery = {|
  variables: storeQueryVariables,
  response: storeQueryResponse,
|};
*/


/*
query storeQuery(
  $filter: ShowCaseFilter
) {
  loadNewVisitorShowCase(filter: $filter) {
    showCase {
      shelves {
        items {
          id
          images
          displayName
        }
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "filter"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "filter",
    "variableName": "filter"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "ShelfItem",
  "kind": "LinkedField",
  "name": "items",
  "plural": true,
  "selections": [
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "images",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "displayName",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "storeQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "LoadShowCase",
        "kind": "LinkedField",
        "name": "loadNewVisitorShowCase",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ShowCase",
            "kind": "LinkedField",
            "name": "showCase",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Shelf",
                "kind": "LinkedField",
                "name": "shelves",
                "plural": true,
                "selections": [
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "storeQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "LoadShowCase",
        "kind": "LinkedField",
        "name": "loadNewVisitorShowCase",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ShowCase",
            "kind": "LinkedField",
            "name": "showCase",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Shelf",
                "kind": "LinkedField",
                "name": "shelves",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b8ea4c4e4b84b91ca03f96002b1a2641",
    "id": null,
    "metadata": {},
    "name": "storeQuery",
    "operationKind": "query",
    "text": "query storeQuery(\n  $filter: ShowCaseFilter\n) {\n  loadNewVisitorShowCase(filter: $filter) {\n    showCase {\n      shelves {\n        items {\n          id\n          images\n          displayName\n        }\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '217038232267cab5dbe554137a3d3291';

module.exports = node;
