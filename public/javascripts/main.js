

function insertRandomtoRandom(a, b){
  const randomNumA = Math.floor(Math.random() * a.length)
  const randomNumB = Math.floor(Math.random() * b.length)
  b = b.split('')
  b[randomNumB] = a[randomNumA]
  return b.join('')
}

function checkInclude(pwd, pool){
  const filterPwd = pwd.split('').filter(letter => pool.includes(letter)).join('')
  if (filterPwd.length === 0){
    return insertRandomtoRandom(pool, pwd)
  } else {
    return pwd
  }
}

function userExclude(pool, exclude){
  const newPool = pool.split('').filter((letter) => !exclude.includes(letter)
  )
  return newPool.join('')
}

function getPassword(pwd_len, lower=false, upper=false, num=false, symbol=false, exclude){
  const lowerPool = 'abcdefghijklmnopqrstuvwxyz'
  const upperPool = 'ABCDEFGHIJKLNOPQRSTUVWXYZ'
  const numPool = '1234567890'
  const symbolPool = '!@#$%^&*()?]['
  let pool = ''
  let password = ''

  if (lower){pool += lowerPool}
  if (upper) { pool += upperPool }
  if (num) { pool += numPool }
  if (symbol) { pool += symbolPool }
 
  pool = userExclude(pool, exclude) //去掉排除字
  if(!pool.length){
    return ''
  }

  for (let i = 1; i <= pwd_len; i++) {
    const randomNum = Math.floor(Math.random() * pool.length)
    password += pool[randomNum]
  }
  //確認是否有包含大寫/小寫/數字/符號，如果沒有則隨機插入一個，以去掉排除字的pool來檢查
  if (lower) { password = checkInclude(password, userExclude(lowerPool, exclude))}
  if (upper) { password = checkInclude(password, userExclude(upperPool, exclude))}
  if (num) { password = checkInclude(password, userExclude(numPool, exclude))}
  if (symbol) { password = checkInclude(password, userExclude(symbolPool, exclude))}
 
  return password
}
function fn() {
  console.log('this is fn')
}
module.exports = getPassword