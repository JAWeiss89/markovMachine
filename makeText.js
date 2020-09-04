/** Command-line tool to generate Markov text. */
const fs = require("fs");
const axios = require("axios");
const argv = process.argv;
const fileToRead = argv[2] //  first argument passed from command line
const fileToWrite = argv[3] // second argument passed from command line

// import markovmachine 
const markov = require("./markov");
let MarkovMachine = markov.MarkovMachine;


function readAndWrite(fileToRead, fileToWrite) {
    fs.readFile(fileToRead, 'utf8', function(err, textRead) {
        if (err) {
            console.log("Yikes! Error reading data from file")
            process.exit(1);
        } else {

            let mm = new MarkovMachine(textRead);
            textToWrite = mm.makeText(200);
            fs.writeFile(fileToWrite, textToWrite, "utf8", function(err) {
                if (err) {
                    console.log("Error writing data on new file")
                }
            })
        }
    })
}

async function urlAndWrite(urlToRead, fileToWrite) {
    try {
        let response = await axios.get(urlToRead);
        let mm = new MarkovMachine(response.data);
        textToWrite = mm.makeText(200);
        fs.writeFile(fileToWrite, textToWrite, "utf8", function(err) {
            if (err) {
                console.log("Error writing file with fetched data from specidied URL");
            }
        })

    } catch(error) {
        console.log("Error fetching data from specified URL  :(");
        process.exit(1);
    }
}




if (fileToRead.includes("http")) {
    urlAndWrite(fileToRead, fileToWrite)
} else {
    readAndWrite(fileToRead, fileToWrite)
}