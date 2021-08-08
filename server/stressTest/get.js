import http from 'k6/http';
import { check } from 'k6';

export let options = {
    scenarios: {
      constant_request_rate: {
        executor: "constant-arrival-rate",
        rate: 100,
        timeUnit: "1s",
        duration: "120s",
        preAllocatedVUs: 100,
        maxVUs: 300,
      },
    }
  };

export default function () {
    const testUrl = 'http://18.118.9.156:5000/?courseId=9123456';
    const response = http.get(testUrl);
    check(response, {
        'response status 200': (r) => r.status === 200,
    });
}
