const markov = require("./markov");
let MarkovMachine = markov.MarkovMachine;


const aliceWonderlandText = "Alice could only see her. She is such a new pair of white kid gloves and the blades of grass but she remembered the number of bathing machines in the kitchen that did not like the wind and was just beginning to grow up any more if you would like it put the Dormouse again so she went nearer to make out that it was certainly English"

const zuText = "What does it mean to look back on a failed assassination? Why does one decide to forget a legacy of radicalism? Inauguration looks at the fragmented history of the Young China Association (少年学社). Interweaving temporal connections with faint chances of synchronous events between two disparate events at the margins of Chinese revolutionary history: a failed assassination and an impossible trip. The film narrates a forecast of the past, wherein it renders visible the processes of erasure, remembrance, and archival anchors of the early overseas Chinese revolutionary politics and its aftermaths. The underground revolutionary group, Young China Association, was established in 1905 by the Chinese and Chinese Americans in the United States to promote the Chinese Revolution which later overthrew the last feudalist dynasty of Qing and proceeded with the establishment of the Republic of China. Through a series of anachronistic travels and narratives between Texas, California, and Havana, the film offers an assemblage of two disparate events at the margins of Chinese revolutionary history: The forgotten story of an unsuccessful assassination attempt in 1910 by George Fong, a member of the Young China Association, who aimed to eliminate a royal prince of the Qing Empire while he was traveling in the United States. The film intertwines this failed assassination with the story of two Chinese-Cuban activists who travelled to the United States for the Young China Association's inauguration one year prior in 1909. Movements, geographies, and events do not follow a linear arch but rather are scattered across memories and places, only to be treated as residues, witnesses or simply discards of the history. What happens when the premise of the story is, in fact, the assurance of its erasure?"



test("Sample test", function() {
    expect(2 + 2).toEqual(4);
})


test("Should construct correctly", function() {
    let mm = new MarkovMachine("hello my name is jorge and his name is daniel");
    expect(mm.chains.name).toEqual(['is', 'is']);
    expect(mm.chains.is).toEqual(['jorge', 'daniel']);
    expect(mm.chains).toHaveProperty('jorge');
    expect(mm.chains).toBeTruthy();
})

test("makeText should make new phrases according to chain pattern", function() {
    let mm = new MarkovMachine(zuText);
    expect(mm.makeText()).toBeTruthy;
    expect(mm.makeText()).toEqual(expect.any(String))
    console.log(mm.makeText(100));
});

