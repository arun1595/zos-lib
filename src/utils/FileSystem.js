import fs from 'fs'

export function read(filename) {
  return fs.readFileSync(filename)
}

export function readDir(dir) {
  return fs.readdirSync(dir)
}

export function exists(filename) {
  return fs.existsSync(filename)
}

export function createDir(dir) {
  fs.mkdirSync(dir)
}

export function ifExistsThrow(filename, message) {
  if(exists(filename)) throw Error(message)
}

export function ifNotExistsThrow(filename, message) {
  if(!exists(filename)) throw Error(message)
}

export function parseJson(filename) {
  return JSON.parse(read(filename))
}

export function parseJsonIfExists(filename) {
  if (exists(filename)) {
    return JSON.parse(read(filename))
  }
}

export function editJson(file, edit) {
  const data = this.parseJson(file)
  edit(data)
  this.writeJson(file, data)
}

export function writeJson(filename, data) {
  const json = JSON.stringify(data, null, 2)
  write(filename, json)
}

export function write(filename, data) {
  fs.writeFileSync(filename, data)
}

export function copy(source, target) {
  fs.createReadStream(source).pipe(fs.createWriteStream(target))
}

export default {
  read,
  readDir,
  exists,
  ifExistsThrow,
  ifNotExistsThrow,
  parseJson,
  createDir,
  editJson,
  parseJsonIfExists,
  writeJson,
  write,
  copy
}
