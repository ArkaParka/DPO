import {sendRequest} from "./CoursesAPI";

export const APIs = {
    user: {
        get: '/api/User/Get/'
    },
    profile: {
        get: '/api/Profile/Get'
    }
};

export async function getUserInfo() {
    let response = (await sendRequest(APIs.user.get, 'GET')).response;
    return response;
}
// {
//     "id": "string",
//     "username": "string",
//     "firstName": "string",
//     "lastName": "string",
//     "isActive": "string"
// }

export async function getProfileInfo() {
    let response = (await sendRequest(APIs.profile.get, 'GET')).response;
    return response;
}
// {
//     "userId": "string",
//     "firstName": "string",
//     "secondName": "string",
//     "diaries": [
//     {
//         "courseId": "string",
//         "courseName": "string",
//         "startedAt": "2022-05-18T06:31:28.826Z",
//         "status": 1
//     }
// ]
// }
