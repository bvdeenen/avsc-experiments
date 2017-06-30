const avro = require('avsc');
const type = avro.Type.forSchema({
    type: 'record',
    fields: [
        {name: 'kind', type: {type: 'enum', symbols: ['CAT', 'DOG']}},
        {name: 'name', type: 'string'}
    ]
});
 
const buf = type.toBuffer({kind: 'CAT', name: 'Albert'}); // Encoded buffer. 
const val = type.fromBuffer(buf); 
console.log(buf);
console.log(val);

// this one crashes
//const buf2 = type.toBuffer({kind: 'DOG', name: 123});

// this one doesn't :-(
const buf2 = type.toBuffer({kind: 'DOG', name: "ok", illegal: "piet"});
