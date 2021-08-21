function getData() {
    return "1";
    return "2";
    return "3";
    return "4";
    return "5";
}


 var data = getData()
 console.log(data)
 data = getData()
 console.log(data)
 data = getData()
 console.log(data)
 data = getData()
 console.log(data)
 data = getData()
 console.log(data)

 var employeeList = [
    {
      "id":"1",
      "createdAt":"2018-12-03T11:37:42.015Z",
      "name":"Ms. Gaylord Streich",
      "avatar":"https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8"
    },
    {
      "id":"2",
      "createdAt":"2018-12-02T21:06:49.825Z",
      "name":"Roxanne Kunde",
      "avatar":"https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8"
    },
    {
      "id":"3",
      "createdAt":"2018-12-03T03:37:39.995Z",
      "name":"Dante Spencer",
      "avatar":"https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8"
    },
    {
      "id":"4",
      "createdAt":"2018-12-03T11:07:34.261Z",
      "name":"Benny Hartmann",
      "avatar":"https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8"
    },
    {
      "id":"5",
      "createdAt":"2018-12-03T11:38:36.583Z",
      "name":"Easton Fisher",
      "avatar":"https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8"
    },
    {
      "id":"6",
      "createdAt":"2018-12-02T17:48:52.784Z",
      "name":"Mrs. Brandi Grant",
      "avatar":"https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8"
}, {
    "id":"7",
    "createdAt":"2018-12-02T17:48:52.784Z",
    "name":"Mayank Gupta",
    "avatar":"https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8"
}];

function* evenNameGenerator() {
for(let i=0; i< employeeList.length; i++) {
    if(+employeeList[i].id % 2 == 0) {
        yield employeeList[i].name;
    }
    
    }
}

function* oddNameGenerator() {
    for(let i=0; i< employeeList.length; i++) {
        if(+employeeList[i].id % 2 == 1) {
            yield employeeList[i].name;
        } 
    }
}

for(var data of evenNameGenerator()) {
 console.log(data);
}

for(var data of oddNameGenerator()) {
 console.log(data);
}