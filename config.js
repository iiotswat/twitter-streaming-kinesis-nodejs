/***
Copyright 2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

Licensed under the Amazon Software License (the "License").
You may not use this file except in compliance with the License.
A copy of the License is located at

http://aws.amazon.com/asl/

or in the "license" file accompanying this file. This file is distributed
on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
***/

'use strict';

var config = module.exports = {
 kinesis : {
  StreamName: 'twitter-kinesis-demo', /* required */
  ShardCount: 1,
  region: 'us-east-1'
  //RoleARN: 'arn:aws:iam::160704615511:role/twitter-demo',
  //S3DestinationConfiguration: {
  //  BucketARN: 'arn:aws:s3:::<YOUR BUCKET NAME>', /* required if stream not exists */
  //  RoleARN: 'arn:aws:iam::160704615511:role/twitter-demo', /* required if stream not exists */
  //  BufferingHints: {
  //    IntervalInSeconds: 300,
  //    SizeInMBs: 5
  //  },
  //  CompressionFormat: 'UNCOMPRESSED', /* 'UNCOMPRESSED | GZIP | ZIP | Snappy' */
  //  EncryptionConfiguration: {
  //    NoEncryptionConfig: 'NoEncryption'
  //  },
  //  Prefix: '<YOUR S3 PREFIX>'  /* if stream not exists. example: twitter/raw-data/  */
  //}
  },
  twitter: {
      consumer_key: 'Vme4U1ldTH5KgOHoxLu37HYKJ',
      consumer_secret: 'wfF45LNKuBbbfuqErObuCVVlMJlgqEYS2fmfJwbIqFbtIxUND5',
      access_token: '719904716235370496-Wlq01f3aZFRtxf2Z4VBg9U1T8cjIUnO',
      access_token_secret: 'DlDjc4XkMq8zFXLcAmR32wByDaJwgFOLnXxDRXhV9Noi9'
 },
 //locations: ['-127.33,23.34,-55.52,49.56'], //US   (All the world:'-180,-90,180,90; New York City:-74,40,-73,41; San Francisco:-122.75,36.8,-121.75,37.8, US:-127.33,23.34,-55.52,49.56)
 locations: ['-122.75,36.8,-121.75,37.8'], //US   (All the world:'-180,-90,180,90; New York City:-74,40,-73,41; San Francisco:-122.75,36.8,-121.75,37.8, US:-127.33,23.34,-55.52,49.56)
 waitBetweenDescribeCallsInSeconds: 2,
 recordsToWritePerBatch: 100,
 waitBetweenPutRecordsCallsInMilliseconds: 50,
 region: 'us-east-1',
};
