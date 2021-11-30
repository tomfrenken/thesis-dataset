const platform = "cf";
const target = "onpremise";
const directory = "./" + platform + "/" + target + "/";
const remainder = "cloudfoundry/10_user/perf-test-summary.json";


const fs = require('fs')
firstJson = fs.readFileSync(directory + "first-"+ platform + "-" + target + "/" + remainder)
secondJson = fs.readFileSync(directory + "second-"+ platform + "-" + target + "/" + remainder)
thirdJson = fs.readFileSync(directory + "third-"+ platform + "-" + target + "/" + remainder)
fourthJson = fs.readFileSync(directory + "fourth-"+ platform + "-" + target + "/" + remainder)
fifthJson = fs.readFileSync(directory + "fifth-"+ platform + "-" + target + "/" + remainder)
sixthJson = fs.readFileSync(directory + "sixth-"+ platform + "-" + target + "/" + remainder)
seventhJson = fs.readFileSync(directory + "seventh-"+ platform + "-" + target + "/" + remainder)
eigthJson = fs.readFileSync(directory + "eigth-"+ platform + "-" + target + "/" + remainder)
ninethJson = fs.readFileSync(directory + "nineth-"+ platform + "-" + target + "/" + remainder)
tenthJson = fs.readFileSync(directory + "tenth-"+ platform + "-" + target + "/" + remainder)

const first = JSON.parse(firstJson);
const second = JSON.parse(secondJson);
const third = JSON.parse(thirdJson);
const fourth = JSON.parse(fourthJson);
const fifth = JSON.parse(fifthJson);
const sixth = JSON.parse(sixthJson);
const seventh = JSON.parse(seventhJson);
const eigth = JSON.parse(eigthJson);
const nineth = JSON.parse(ninethJson);
const tenth = JSON.parse(tenthJson);

const avg_http_req_sending = (
    first.metrics.http_req_sending.avg +
    second.metrics.http_req_sending.avg +
    third.metrics.http_req_sending.avg +
    fourth.metrics.http_req_sending.avg +
    fifth.metrics.http_req_sending.avg + 
    sixth.metrics.http_req_sending.avg +
    seventh.metrics.http_req_sending.avg +
    eigth.metrics.http_req_sending.avg +
    nineth.metrics.http_req_sending.avg +
    tenth.metrics.http_req_sending.avg) / 10

const avg_http_req_waiting = (
    first.metrics.http_req_waiting.avg +
    second.metrics.http_req_waiting.avg +
    third.metrics.http_req_waiting.avg +
    fourth.metrics.http_req_waiting.avg +
    fifth.metrics.http_req_waiting.avg +
    sixth.metrics.http_req_waiting.avg +
    seventh.metrics.http_req_waiting.avg +
    eigth.metrics.http_req_waiting.avg +
    nineth.metrics.http_req_waiting.avg +
    tenth.metrics.http_req_waiting.avg
    ) / 10

const avg_http_req_receiving = (
    first.metrics.http_req_receiving.avg +
    second.metrics.http_req_receiving.avg +
    third.metrics.http_req_receiving.avg +
    fourth.metrics.http_req_receiving.avg +
    fifth.metrics.http_req_receiving.avg +
    sixth.metrics.http_req_receiving.avg +
    seventh.metrics.http_req_receiving.avg +
    eigth.metrics.http_req_receiving.avg +
    nineth.metrics.http_req_receiving.avg +
    tenth.metrics.http_req_receiving.avg 
    ) / 10

    const avg_http_req_duration = (
    first.metrics.http_req_duration.avg +
    second.metrics.http_req_duration.avg+
    third.metrics.http_req_duration.avg +
    fourth.metrics.http_req_duration.avg +
    fifth.metrics.http_req_duration.avg +
    sixth.metrics.http_req_duration.avg+
    seventh.metrics.http_req_duration.avg +
    eigth.metrics.http_req_duration.avg +
    nineth.metrics.http_req_duration.avg +
    tenth.metrics.http_req_duration.avg
    ) / 10

const avg_http_req_duration_true = (
    first.metrics['http_req_duration{expected_response:true}'].avg +
    second.metrics['http_req_duration{expected_response:true}'].avg +
    third.metrics['http_req_duration{expected_response:true}'].avg +
    fourth.metrics['http_req_duration{expected_response:true}'].avg +
    fifth.metrics['http_req_duration{expected_response:true}'].avg +
    sixth.metrics['http_req_duration{expected_response:true}'].avg +
    seventh.metrics['http_req_duration{expected_response:true}'].avg +
    eigth.metrics['http_req_duration{expected_response:true}'].avg +
    nineth.metrics['http_req_duration{expected_response:true}'].avg +
    tenth.metrics['http_req_duration{expected_response:true}'].avg
    ) / 10

console.log("Average Http Req Sending: " + avg_http_req_sending + "ms");
console.log("Average Http Req Waiting: " + avg_http_req_waiting + "ms");
console.log("Average Http Req Receiving: " + avg_http_req_receiving + "ms");
console.log("Average Http Req Duration: " + avg_http_req_duration + "ms");
console.log("Average Http Req Duration for True: " + avg_http_req_duration_true + "ms");
