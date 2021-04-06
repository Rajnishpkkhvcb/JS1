Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@Rajnishpkkhvcb 
bradtraversy
/
axios-crash
7
164176
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
You’re making changes in a project you don’t have write access to. Submitting a change will write it to a new branch in your fork Rajnishpkkhvcb/axios-crash, so you can send a pull request.
axios-crash
/
main.js
in
bradtraversy:master
 

Spaces

2

No wrap
1
// AXIOS GLOBALS
2
axios.defaults.headers.common['X-Auth-Token'] =
3
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
4
​
5
// GET REQUEST
6
function getTodos() {
7
  // axios({
8
  //   method: 'get',
9
  //   url: 'https://jsonplaceholder.typicode.com/todos',
10
  //   params: {
11
  //     _limit: 5
12
  //   }
13
  // })
14
  //   .then(res => showOutput(res))
15
  //   .catch(err => console.error(err));
16
​
17
  axios
18
    .get('https://jsonplaceholder.typicode.com/todos?_limit=5', {
19
      timeout: 5000
20
    })
21
    .then(res => showOutput(res))
22
    .catch(err => console.error(err));
23
}
24
​
25
// POST REQUEST
26
function addTodo() {
27
  axios
28
    .post('https://jsonplaceholder.typicode.com/todos', {
29
      title: 'New Todo',
30
      completed: false
31
    })
32
    .then(res => showOutput(res))
33
    .catch(err => console.error(err));
34
}
35
​
36
// PUT/PATCH REQUEST
37
function updateTodo() {
38
  axios
39
    .patch('https://jsonplaceholder.typicode.com/todos/1', {
40
      title: 'Updated Todo',
41
      completed: true
42
    })
43
    .then(res => showOutput(res))
44
    .catch(err => console.error(err));
45
}
@Rajnishpkkhvcb
Propose changes
Commit summary
Create main.js
Optional extended description
Add an optional extended description…
 
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
