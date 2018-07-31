/**
 * This script uses carto to compile templated MML files
 * to XML that mapnik can understand. This script is only run prior
 * to deployment, so it makes use of some devDependencies that won't
 * exist in production. Under no circumstances should this be
 * run in production (unless you make Carto a regular dependency).
 */

/* eslint-disable no-console */

/* eslint-disable-next-line import/no-extraneous-dependencies */
import carto from 'carto'
import path from 'path'
import mkdirp from 'mkdirp'

import { readFile, writeFile, readDir } from './fs-promise'

const IN_DIR = process.argv[2]
const OUT_DIR = process.argv[3]

// Takes in a string and templates in the proper env variables
/**
 * Variables are templated in to MML using custom bash-like syntax.
 * If the needs of the project become more complicated, this should
 * be changed to a defined YAML templating convention and/or use a
 * templating library, rather than add new nuances to this
 * implementation.
 */
const fillTemplate = (mmlString, env) => {
    const envPrefix = env.NODE_ENV === 'production' ? 'PROD_' : 'DEV_'

    return mmlString.replace(
        /\$\{([a-z0-9_]+)\}/gi,
        (_, envName) => {
            const varName = `${envPrefix}${envName}`
            return `"${env[varName]}"`
        },
    )
}


// Loads properly formatted MML into an MML object
const loadMML = (fullMML, fileName) => new Promise((resolve, reject) => {
    const mml = new carto.MML({})

    // Carto CAN read MSSs from file, which is why it
    // needs the directory of the MML file (for relative path calculation)
    mml.load(path.dirname(fileName), fullMML, (err, data) => {
        if (err) reject(err)
        else resolve(data)
    })
})


// Converts an MML object to an XML string
const mmlToXML = (mml) => {
    // MML.load is asynchronous, but render is NOT, and you have to
    // manually check for errors by checking the members of the result
    const jsonResponse = new carto.Renderer({}).render(mml)

    if (jsonResponse.msg) {
        jsonResponse.msg.forEach(m =>
            console.log(carto.Util.getMessageToPrint(m)))
    }

    if (jsonResponse.data) return jsonResponse.data

    // Actually throw an error if no data result
    throw new Error('Error: could not render MML to XML, no result from render()')
}

const convertFile = filename => readFile(filename, 'utf-8')
    .then(mmlTemplate => fillTemplate(mmlTemplate, process.env))
    .then(fullMML => loadMML(fullMML, filename))
    .then(mmlToXML)
    .then(xml => new Promise((resolve, reject) => {
        mkdirp(OUT_DIR, (err) => {
            if (err) reject(err)
            else resolve(xml)
        })
    }))
    .then((xml) => {
        const newFileName = `${OUT_DIR}${path.basename(filename, '.mml')}.xml`
        return writeFile(newFileName, xml, 'utf-8')
    })
    .then(newFileName => console.log(`\t${IN_DIR}${filename} => ${newFileName}`))

// loop over contents of directory to build pipeline of xml to transpile
console.log(`Transpiling .mml files in ${IN_DIR} to ${OUT_DIR}...`)
readDir(IN_DIR)
    .then((files) => {
        const promises = []
        files.forEach((fileName) => {
            if (path.extname(fileName) === '.mml') {
                promises.push(convertFile(`${IN_DIR}${fileName}`))
            }
        })
        return promises
    })
    .then(promises =>
        Promise.all(promises)
            .catch(e => console.error(e))
    )
