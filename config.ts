const fs = require("fs")
const yaml = require("yaml")
require("dotenv").config()

const configPath = "config.yaml"
const configFile = fs.readFileSync(configPath, "utf8")
const confY = yaml.parse(configFile)

export const env = process.env.NODE_ENV || "dev"
export const config = confY[env]
