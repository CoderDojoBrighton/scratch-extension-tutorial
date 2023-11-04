const BlockType = require("../../extension-support/block-type")

class TestBlocks {
    constructor(runtime) {
        this.runtime = runtime
    }

    getInfo() {
        return {
            id: 'testBlocks',
            name: 'Test Blocks',
            blocks: [
                {
                    "opcode": 'fetchURL',
                    "blockType": BlockType.REPORTER,
                    "text": "fetch some data from [url]",
                    "arguments": {
                        "url": {
                            "type": "string",
                            "defaultValue": "http://localhost:9999"
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

module.exports = TestBlocks;
