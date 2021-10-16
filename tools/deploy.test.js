const deploy = require("./deploy")
// @ponicode
describe("deploy.default", () => {
    test("0", async () => {
        await deploy.default()
    })
})
