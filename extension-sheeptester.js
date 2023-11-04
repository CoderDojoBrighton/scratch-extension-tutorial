class TestBlocks {
    getInfo() {
        return {
            id: 'testBlocks',
            name: 'Test Blocks',
            blocks: [
                {
                    "opcode": 'fetchURL',
                    "blockType":'reporter',
                    "text": "fetch some data from [url]",
                    "arguments": {
                        "url": {
                            "type": "string",
                            "defaultValue": "https://api.weather.gov/"
                        },
                    }
                },
            ]
        }
    }

    fetchURL({url}) {
        return fetch(url).then(response => response.text())
    }
}

Scratch.extensions.register(new TestBlocks());
