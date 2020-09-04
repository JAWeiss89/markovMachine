# nodejsTesting (MarkovMachine)

## Running Markov Machine
Application is run from terminal using node command and makeText.js  
`$ node makeText.js <readfile.txt> <newfilename.txt>`  
Where readfilename.txt is a text file of your choice from which text we will read and use for the Markov Machine.  
The newfile.txt can be changed to any name you desire and is where we will be outputting the text. If the file name doesn't exist, the program will create a new file with that name. 

Alternatively, you can run the command with a url. Url should be point to a text file so that the html elements are not read as text. 

`$ node makeText.js http://www.gutenberg.org/files/11/11-0.txt <newfilename.txt>`  

## Testing Markov Machine Class
In root directory there is a js file titled `markov.test.js` and this file can be run with `jest` command to run tests from that file. 
Line will look as follows:  
`$ jest markov.test.js`