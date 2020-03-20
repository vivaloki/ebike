/*
* @Author: vivaloki
* @Date:   2020-03-02 13:20:51
* @Last Modified by:   vivaloki
* @Last Modified time: 2020-03-02 13:22:55
*/
import JsonP from 'jsonp'

            JsonP('https://api.gugudata.com/weather/weatherinfo?appkey=Z8EPABR2K5DH&code=101280601&days=1', {
                param: 'callback'
            }, function (err, response) {
                if (response) {
                    console.log(response);
                } else {
                    reject(response.messsage);
                }
            })
   