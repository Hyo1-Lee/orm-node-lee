// 공통 페이지 제공(로그인, 회원가입, 암호찾기)

var express = require('express');
var router = express.Router();

// http://localhost:3000/ 시 로그인페이지로 바로 이동
// router.get('/', async(req, res)=>{
//   res.render('index.ejs')
// })

// 로그인 웹페이지 요청 및 응답
router.get('/', async(req, res)=>{
  res.render('login.ejs', {layout:"authLayout"})
});

// 로그인 처리 요청 및 응답, 로그인 완료 후 채팅 페이지 이동
router.post('/', async(req, res)=>{
  var email = req.body.email;
  var password = req.body.member_password;

  user = {
    email: email,
    member_password: password
  };

  res.redirect('/chat');
});



// 회원가입 웹페이지 요청 및 응답
router.get('/entry', async(req, res)=>{
  res.render('entry.ejs', {layout:"authLayout"})
});

// 회원가입 처리 요청 및 응답, 회원가입 완료 후 로그인 페이지 이동
router.post('/entry', async(req, res)=>{
  var email = req.body.email;
  var password = req.body.password;

  user = {
    email,
    password
  };

  res.redirect('/')
});

// 암호 찾기 웹페이지 요청 및 응답
router.get('/find', async(req, res)=>{
  res.render('find.ejs', {layout:"authLayout"})
});

// 암호찾기 처리 요청 및 응답,암호 찾기 완료 후 로그인 페이지 이동
router.post('/find', async(req, res)=>{
  
  res.redirect('/')
});


module.exports = router;
