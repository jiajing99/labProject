import service from '../utils/request';

export function getResult(){
    return service.request({
        url: "/result"
    });
}
