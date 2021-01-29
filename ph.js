const axios = require('axios').default;
let email = 'zapbro18@gmail.com'
let username = 'peepeepoopoocheckt'
let password = 'qazwsxedc'

async function index () {
    async function email_check() {
        let data = `&check_what=email&email=${email}`;
        let config = {
            method: 'post',
            url: 'https://www.pornhub.com/user/create_account_check?token=MTYxMTg3NTMxMDT7JqOidWVoakoXt78iMs1HEgdtMUAnS73uLqSJKbDubbbHKPlJOhGg91tOjbSUoKLAXwedv3u1WH0cLKrbxCA.',
            headers: { 
              'authority': 'www.pornhub.com', 
              'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36', 
              'x-requested-with': 'XMLHttpRequest', 
              'content-type': 'application/x-www-form-urlencoded; charset=UTF-8', 
              'accept': '*/*', 
              'sec-gpc': '1', 
              'origin': 'https://www.pornhub.com', 
              'sec-fetch-site': 'same-origin', 
              'sec-fetch-mode': 'cors', 
              'sec-fetch-dest': 'empty', 
              'referer': 'https://www.pornhub.com/signup', 
              'accept-language': 'en-US,en;q=0.9', 
              'cookie': 'ua=c13aa665496786142fe81f1333cd4bec; platform_cookie_reset=pc; platform=pc; bs=jgvz5a281f60kvk7br3jnbn3ssk8bamk; ss=310411909254975941; fg_9d12f2b2865de2f8c67706feaa332230=60919.100000'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
           // console.log(JSON.stringify(response.data));
            console.log('Submitted Email Successfully')
          })
          .catch(function (error) {
            console.log('Email has Already Been Taken');
            
          });
          
    } email_check()
    async function user_check() {
        let data = `&check_what=username&username=${username}`;
    
    let config = {
      method: 'post',
      url: 'https://www.pornhub.com/user/create_account_check?token=MTYxMTg3NTMxMDT7JqOidWVoakoXt78iMs1HEgdtMUAnS73uLqSJKbDubbbHKPlJOhGg91tOjbSUoKLAXwedv3u1WH0cLKrbxCA.',
      headers: { 
        'authority': 'www.pornhub.com', 
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36', 
        'x-requested-with': 'XMLHttpRequest', 
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8', 
        'accept': '*/*', 
        'sec-gpc': '1', 
        'origin': 'https://www.pornhub.com', 
        'sec-fetch-site': 'same-origin', 
        'sec-fetch-mode': 'cors', 
        'sec-fetch-dest': 'empty', 
        'referer': 'https://www.pornhub.com/signup', 
        'accept-language': 'en-US,en;q=0.9', 
        'cookie': 'ua=c13aa665496786142fe81f1333cd4bec; platform_cookie_reset=pc; platform=pc; bs=jgvz5a281f60kvk7br3jnbn3ssk8bamk; ss=310411909254975941; fg_9d12f2b2865de2f8c67706feaa332230=60919.100000'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      //console.log(JSON.stringify(response.data));
      console.log('Username Submitted Successfully')
    })
    .catch(function (error) {
      console.log('Username Has Been Taken');
    });
    
    } user_check()
    async function pass_check() {
        let data = `&check_what=password&password=${password}`;
    
    let config = {
      method: 'post',
      url: 'https://www.pornhub.com/user/create_account_check?token=MTYxMTg3NTMxMDT7JqOidWVoakoXt78iMs1HEgdtMUAnS73uLqSJKbDubbbHKPlJOhGg91tOjbSUoKLAXwedv3u1WH0cLKrbxCA.',
      headers: { 
        'authority': 'www.pornhub.com', 
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36', 
        'x-requested-with': 'XMLHttpRequest', 
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8', 
        'accept': '*/*', 
        'sec-gpc': '1', 
        'origin': 'https://www.pornhub.com', 
        'sec-fetch-site': 'same-origin', 
        'sec-fetch-mode': 'cors', 
        'sec-fetch-dest': 'empty', 
        'referer': 'https://www.pornhub.com/signup', 
        'accept-language': 'en-US,en;q=0.9', 
        'cookie': 'ua=c13aa665496786142fe81f1333cd4bec; platform_cookie_reset=pc; platform=pc; bs=jgvz5a281f60kvk7br3jnbn3ssk8bamk; ss=310411909254975941; fg_9d12f2b2865de2f8c67706feaa332230=60919.100000'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      //console.log(JSON.stringify(response.data));
      console.log('Submited Password Successfully')
    })
    .catch(function (error) {
      console.log('Password Is Not Long Enough');
    });
    
    } pass_check()
    async function main() {
        const qs = require('qs');
    let data = qs.stringify({
     'token': 'MTYxMTg3NjI2MxE8dAeZMtN60_DrBAwT7dQpXFCJcpLqHX3VnflcLfQ1KtYSQcJ9KPLkiumZ9Jn_SalUpv3c1ydaEad5R0Uj6Ck.',
    'redirect': '',
    'taste_profile': '',
    'email': `${email}`,
    'username': `${username}`,
    'password': `${password}` 
    });
    let config = {
      method: 'post',
      url: 'https://www.pornhub.com/signup',
      headers: { 
        'authority': 'www.pornhub.com', 
        'cache-control': 'max-age=0', 
        'upgrade-insecure-requests': '1', 
        'origin': 'https://www.pornhub.com', 
        'content-type': 'application/x-www-form-urlencoded', 
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36', 
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9', 
        'sec-gpc': '1', 
        'sec-fetch-site': 'same-origin', 
        'sec-fetch-mode': 'navigate', 
        'sec-fetch-user': '?1', 
        'sec-fetch-dest': 'document', 
        'referer': 'https://www.pornhub.com/signup', 
        'accept-language': 'en-US,en;q=0.9', 
        'cookie': 'ua=c13aa665496786142fe81f1333cd4bec; platform_cookie_reset=pc; platform=pc; bs=jgvz5a281f60kvk7br3jnbn3ssk8bamk; ss=310411909254975941; fg_9d12f2b2865de2f8c67706feaa332230=60919.100000; expiredEnterModalShown=1; desired_username=jhkfjhiuswhfisdhfk%7Cdafgdfgagafgadfa%40gmail.com'
      },
      data : data
    };
    axios(config)
    .then(function (response) {
      //console.log(JSON.stringify(response.data));
      console.log('Account Created Successfully')
    })
    .catch(function (error) {
      //console.log(error);
      console.log('There Was An Error Creating Your Account Please Try Again later')
    });
    }
    main()
}
index()