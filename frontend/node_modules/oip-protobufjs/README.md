# oip-protobufjs
This library provides builder functions to create OIP v0.5 records by serializing data into chain-ready protobuf data

### Overview
OIP v0.5 creates records through Record Templates. A Record Template defines the schema for a given record (i.e: I
can create a Record Template called `Audio Track` with the following fields: `title`, `artist`, `genre` and then create an
Audio Track record using the created template by filling out the given fields). We use 
[protobuf.js](https://github.com/protobufjs/protobuf.js) to create these templates by following the [proto3 message standard](https://developers.google.com/protocol-buffers/docs/proto3).

##### Creating A Record Template
As per the example above we'll create a Record Template called `Audio Track`. 
A template consists of three fields: `title`, `description`, and `fileDescriptor`. 
The `fileDescriptor` is a [description of a proto file](https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/descriptor.proto) and will be used to define
 the schema used for the template, so we'll start with that.

> Building a Record Template
```javascript
// first, define the schema
const schema = [
  { name: 'title', type: 'string' },
  { name: 'artist', type: 'string' },
  { name: 'genre', type: 'string' }
]

// second, build the fileDescriptor
const fileDescriptor = buildDescriptor(schema)

// third, define the template name and description of the record template
const templateName = 'Audio Track'
const description = 'Basic audio track details'

// fourth, build the record template
const { templateBuffer, template64, templateMessage } = buildRecordTemplate({
  friendlyName: templateName,
  description,
  DescriptorSetProto: fileDescriptor
})

// buildRecordTemplate returns the template in buffer format, base64, and as a protobuf.js message
```

##### Creating a Record

As per the `record.proto` schema found in `src/messages/oipProto`, there are four 
fields we can include: `tags`, `payment`, `details`, and `permissions`. We only need to 
pass `details` of type `OipDetails` to create a record. In the same `record.proto` file
we see that `OipDetails` is defined as: `repeated google.protobuf.Any details = 1;` which
means we can pass an array containing values of any type to it. We use this field to pass in the values of the record
as defined by the record template schema. It is necessary to have a repeated ANY field so that a record
can contain multiple data from multiple templates. Mixing and matching templates is the core power of 
oip v0.5. 

After you create a FileDescriptor, you use it to create the OipDetails; doing this is akin
to filling out the template with actual data. 

> **Important!!** You need to first publish the Record Template before you can use it to create a record so
that you can get its template name which contains part of the txid 


