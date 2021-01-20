# Active calls demo


## Polling

`/restapi/v1.0/account/{accountId}/extension/{extensionId}/active-calls`


## Call extension direct number directly


### Before call answered

```json
{
  "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567/active-calls?view=Detailed&page=1&perPage=100",
  "records": [
    {
      "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567/call-log/LIef14l8Nt_1zUA?view=Detailed",
      "id": "LIef14l8Nt_1zUA",
      "sessionId": "538332041016",
      "startTime": "2021-01-19T23:58:57.000Z",
      "type": "Voice",
      "direction": "Inbound",
      "action": "Phone Call",
      "result": "In Progress",
      "to": {
        "name": "Tyler Liu",
        "phoneNumber": "+16502888888",
        "location": "San Mateo, CA"
      },
      "from": {
        "name": "WIRELESS CALLER",
        "phoneNumber": "+16504366666",
        "location": "San Mateo, CA"
      },
      "extension": {
        "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567",
        "id": 234567
      },
      "telephonySessionId": "s-8f8125f1aeb944f486531c351a2f520e",
      "legs": [
        {
          "startTime": "2021-01-19T23:58:57.000Z",
          "type": "Voice",
          "direction": "Inbound",
          "action": "Phone Call",
          "result": "In Progress",
          "to": {
            "name": "Tyler Liu",
            "phoneNumber": "+16502888888",
            "location": "San Mateo, CA"
          },
          "from": {
            "name": "WIRELESS CALLER",
            "phoneNumber": "+16504366666",
            "location": "San Mateo, CA"
          },
          "extension": {
            "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567",
            "id": 234567
          },
          "telephonySessionId": "s-8f8125f1aeb944f486531c351a2f520e",
          "legType": "Accept",
          "master": true
        }
      ]
    }
  ],
  "paging": {
    "page": 1,
    "perPage": 100,
    "pageStart": 0,
    "pageEnd": 0
  },
  "navigation": {
    "firstPage": {
      "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567/active-calls?view=Detailed&page=1&perPage=100"
    },
    "lastPage": {
      "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567/active-calls?view=Detailed&page=1&perPage=100"
    }
  }
}
```


### After call answered

```json
{
  "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567/active-calls?view=Detailed&page=1&perPage=100",
  "records": [
    {
      "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567/call-log/LIef14l8Nt_1zUA?view=Detailed",
      "id": "LIef14l8Nt_1zUA",
      "sessionId": "538332041016",
      "startTime": "2021-01-19T23:58:57.000Z",
      "type": "Voice",
      "direction": "Inbound",
      "action": "Phone Call",
      "result": "In Progress",
      "to": {
        "name": "Tyler Liu",
        "phoneNumber": "+16502888888",
        "location": "San Mateo, CA"
      },
      "from": {
        "name": "WIRELESS CALLER",
        "phoneNumber": "+16504366666",
        "location": "San Mateo, CA"
      },
      "extension": {
        "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567",
        "id": 234567
      },
      "telephonySessionId": "s-8f8125f1aeb944f486531c351a2f520e",
      "legs": [
        {
          "startTime": "2021-01-19T23:58:57.000Z",
          "type": "Voice",
          "direction": "Inbound",
          "action": "Phone Call",
          "result": "In Progress",
          "to": {
            "name": "Tyler Liu",
            "phoneNumber": "+16502888888",
            "location": "San Mateo, CA"
          },
          "from": {
            "name": "WIRELESS CALLER",
            "phoneNumber": "+16504366666",
            "location": "San Mateo, CA"
          },
          "extension": {
            "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567",
            "id": 234567
          },
          "telephonySessionId": "s-8f8125f1aeb944f486531c351a2f520e",
          "legType": "Accept",
          "master": true
        },
        {
          "startTime": "2021-01-19T23:59:01.000Z",
          "type": "Voice",
          "direction": "Outbound",
          "action": "VoIP Call",
          "result": "In Progress",
          "to": {
            "phoneNumber": "+17203861294",
            "extensionNumber": "11115",
            "location": ", CO"
          },
          "from": {
            "name": "Tyler Liu",
            "extensionNumber": "11115",
            "device": {
              "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/device/803750084020",
              "id": "803750084020"
            }
          },
          "extension": {
            "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567",
            "id": 234567
          },
          "reason": "Accepted",
          "reasonDescription": "The call connected to and was accepted by this number.",
          "telephonySessionId": "s-8f8125f1aeb944f486531c351a2f520e",
          "legType": "PstnToSip",
          "master": false
        }
      ]
    }
  ],
  "paging": {
    "page": 1,
    "perPage": 100,
    "pageStart": 0,
    "pageEnd": 0
  },
  "navigation": {
    "firstPage": {
      "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567/active-calls?view=Detailed&page=1&perPage=100"
    },
    "lastPage": {
      "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567/active-calls?view=Detailed&page=1&perPage=100"
    }
  }
}
```


### After call hang up

```json
{
  "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567/active-calls?view=Detailed&page=1&perPage=100",
  "records": [
    {
      "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567/call-log/LIef14l8Nt_1zUA?view=Detailed",
      "id": "LIef14l8Nt_1zUA",
      "sessionId": "538332041016",
      "startTime": "2021-01-19T23:58:57.000Z",
      "duration": 10,
      "type": "Voice",
      "direction": "Inbound",
      "action": "Phone Call",
      "result": "Accepted",
      "to": {
        "name": "Tyler Liu",
        "phoneNumber": "+16502888888",
        "location": "San Mateo, CA"
      },
      "from": {
        "name": "WIRELESS CALLER",
        "phoneNumber": "+16504366666",
        "location": "San Mateo, CA"
      },
      "extension": {
        "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567",
        "id": 234567
      },
      "reason": "Accepted",
      "reasonDescription": "The call connected to and was accepted by this number.",
      "telephonySessionId": "s-8f8125f1aeb944f486531c351a2f520e",
      "legs": [
        {
          "startTime": "2021-01-19T23:58:57.000Z",
          "duration": 10,
          "type": "Voice",
          "direction": "Inbound",
          "action": "Phone Call",
          "result": "Accepted",
          "to": {
            "name": "Tyler Liu",
            "phoneNumber": "+16502888888",
            "location": "San Mateo, CA"
          },
          "from": {
            "name": "WIRELESS CALLER",
            "phoneNumber": "+16504366666",
            "location": "San Mateo, CA"
          },
          "extension": {
            "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567",
            "id": 234567
          },
          "reason": "Accepted",
          "reasonDescription": "The call connected to and was accepted by this number.",
          "telephonySessionId": "s-8f8125f1aeb944f486531c351a2f520e",
          "legType": "Accept",
          "master": true
        },
        {
          "startTime": "2021-01-19T23:59:01.000Z",
          "duration": 6,
          "type": "Voice",
          "direction": "Outbound",
          "action": "VoIP Call",
          "result": "Accepted",
          "to": {
            "phoneNumber": "+17203861294",
            "extensionNumber": "11115",
            "location": ", CO"
          },
          "from": {
            "name": "Tyler Liu",
            "extensionNumber": "11115",
            "device": {
              "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/device/803750084020",
              "id": "803750084020"
            }
          },
          "extension": {
            "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567",
            "id": 234567
          },
          "reason": "Accepted",
          "reasonDescription": "The call connected to and was accepted by this number.",
          "telephonySessionId": "s-8f8125f1aeb944f486531c351a2f520e",
          "legType": "PstnToSip",
          "master": false
        }
      ]
    }
  ],
  "paging": {
    "page": 1,
    "perPage": 100,
    "pageStart": 0,
    "pageEnd": 0
  },
  "navigation": {
    "firstPage": {
      "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567/active-calls?view=Detailed&page=1&perPage=100"
    },
    "lastPage": {
      "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567/active-calls?view=Detailed&page=1&perPage=100"
    }
  }
}
```


## Call a call queue which ring the extension


### Before call answered

```json
{
  "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567/active-calls?view=Detailed&page=1&perPage=100",
  "records": [
    {
      "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567/call-log/LIfMpYdXOsxPzUA?view=Detailed",
      "id": "LIfMpYdXOsxPzUA",
      "sessionId": "538340306016",
      "startTime": "2021-01-20T00:15:02.000Z",
      "type": "Voice",
      "direction": "Outbound",
      "action": "VoIP Call",
      "result": "In Progress",
      "to": {
        "phoneNumber": "+17203861294",
        "extensionNumber": "11115",
        "location": ", CO"
      },
      "from": {
        "name": "Tyler Liu",
        "extensionNumber": "11115"
      },
      "extension": {
        "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567",
        "id": 234567
      },
      "telephonySessionId": "s-31f9c0cf910a41f98c4c5cb29b72377d",
      "legs": [
        {
          "startTime": "2021-01-20T00:15:02.000Z",
          "type": "Voice",
          "direction": "Outbound",
          "action": "VoIP Call",
          "result": "In Progress",
          "to": {
            "phoneNumber": "+17203861294",
            "extensionNumber": "11115",
            "location": ", CO"
          },
          "from": {
            "name": "Tyler Liu",
            "extensionNumber": "11115"
          },
          "extension": {
            "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567",
            "id": 234567
          },
          "telephonySessionId": "s-31f9c0cf910a41f98c4c5cb29b72377d",
          "legType": "PstnToSip",
          "master": true
        }
      ]
    }
  ],
  "paging": {
    "page": 1,
    "perPage": 100,
    "pageStart": 0,
    "pageEnd": 0
  },
  "navigation": {
    "firstPage": {
      "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567/active-calls?view=Detailed&page=1&perPage=100"
    },
    "lastPage": {
      "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567/active-calls?view=Detailed&page=1&perPage=100"
    }
  }
}
```


### After call answered

```json
{
  "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567/active-calls?view=Detailed&page=1&perPage=100",
  "records": [
    {
      "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567/call-log/LIfMpYdXOsxPzUA?view=Detailed",
      "id": "LIfMpYdXOsxPzUA",
      "sessionId": "538340306016",
      "startTime": "2021-01-20T00:15:02.000Z",
      "type": "Voice",
      "direction": "Outbound",
      "action": "VoIP Call",
      "result": "In Progress",
      "to": {
        "phoneNumber": "+17203861294",
        "extensionNumber": "11115",
        "location": ", CO"
      },
      "from": {
        "name": "Tyler Liu",
        "extensionNumber": "11115",
        "device": {
          "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/device/803750084020",
          "id": "803750084020"
        }
      },
      "extension": {
        "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567",
        "id": 234567
      },
      "reason": "Accepted",
      "reasonDescription": "The call connected to and was accepted by this number.",
      "telephonySessionId": "s-31f9c0cf910a41f98c4c5cb29b72377d",
      "legs": [
        {
          "startTime": "2021-01-20T00:15:02.000Z",
          "type": "Voice",
          "direction": "Outbound",
          "action": "VoIP Call",
          "result": "In Progress",
          "to": {
            "phoneNumber": "+17203861294",
            "extensionNumber": "11115",
            "location": ", CO"
          },
          "from": {
            "name": "Tyler Liu",
            "extensionNumber": "11115",
            "device": {
              "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/device/803750084020",
              "id": "803750084020"
            }
          },
          "extension": {
            "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567",
            "id": 234567
          },
          "reason": "Accepted",
          "reasonDescription": "The call connected to and was accepted by this number.",
          "telephonySessionId": "s-31f9c0cf910a41f98c4c5cb29b72377d",
          "legType": "PstnToSip",
          "master": true
        }
      ]
    }
  ],
  "paging": {
    "page": 1,
    "perPage": 100,
    "pageStart": 0,
    "pageEnd": 0
  },
  "navigation": {
    "firstPage": {
      "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567/active-calls?view=Detailed&page=1&perPage=100"
    },
    "lastPage": {
      "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567/active-calls?view=Detailed&page=1&perPage=100"
    }
  }
}
```


### After call hang up

```json
{
  "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567/active-calls?view=Detailed&page=1&perPage=100",
  "records": [
    {
      "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567/call-log/LIfMpYdXOsxPzUA?view=Detailed",
      "id": "LIfMpYdXOsxPzUA",
      "sessionId": "538340306016",
      "startTime": "2021-01-20T00:15:02.000Z",
      "duration": 18,
      "type": "Voice",
      "direction": "Inbound",
      "action": "Phone Call",
      "result": "Accepted",
      "to": {
        "name": "Tyler Liu",
        "phoneNumber": "+12092271475",
        "location": "Stockton, CA"
      },
      "from": {
        "name": "Tyler's call queue - WIRELESS CALLER",
        "phoneNumber": "+16504366666",
        "location": "San Mateo, CA"
      },
      "extension": {
        "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567",
        "id": 234567
      },
      "reason": "Accepted",
      "reasonDescription": "The call connected to and was accepted by this number.",
      "telephonySessionId": "s-31f9c0cf910a41f98c4c5cb29b72377d",
      "legs": [
        {
          "startTime": "2021-01-20T00:15:02.000Z",
          "duration": 18,
          "type": "Voice",
          "direction": "Inbound",
          "action": "Phone Call",
          "result": "Accepted",
          "to": {
            "name": "Tyler Liu",
            "phoneNumber": "+12092271475",
            "location": "Stockton, CA"
          },
          "from": {
            "name": "Tyler's call queue - WIRELESS CALLER",
            "phoneNumber": "+16504366666",
            "location": "San Mateo, CA"
          },
          "extension": {
            "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567",
            "id": 234567
          },
          "reason": "Accepted",
          "reasonDescription": "The call connected to and was accepted by this number.",
          "telephonySessionId": "s-31f9c0cf910a41f98c4c5cb29b72377d",
          "legType": "Accept",
          "master": true
        },
        {
          "startTime": "2021-01-20T00:15:02.000Z",
          "duration": 18,
          "type": "Voice",
          "direction": "Outbound",
          "action": "VoIP Call",
          "result": "Accepted",
          "to": {
            "phoneNumber": "+17203861294",
            "extensionNumber": "11115",
            "location": ", CO"
          },
          "from": {
            "name": "Tyler Liu",
            "extensionNumber": "11115",
            "device": {
              "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/device/803750084020",
              "id": "803750084020"
            }
          },
          "extension": {
            "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567",
            "id": 234567
          },
          "reason": "Accepted",
          "reasonDescription": "The call connected to and was accepted by this number.",
          "telephonySessionId": "s-31f9c0cf910a41f98c4c5cb29b72377d",
          "legType": "PstnToSip",
          "master": false
        }
      ]
    }
  ],
  "paging": {
    "page": 1,
    "perPage": 100,
    "pageStart": 0,
    "pageEnd": 0
  },
  "navigation": {
    "firstPage": {
      "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567/active-calls?view=Detailed&page=1&perPage=100"
    },
    "lastPage": {
      "uri": "https://platform.ringcentral.com/restapi/v1.0/account/123456/extension/234567/active-calls?view=Detailed&page=1&perPage=100"
    }
  }
}
```


## Common pattern

### How to tell the call has been answered?

As soon as you see `"reason": "Accepted"`, you can assume that call has been answered.
