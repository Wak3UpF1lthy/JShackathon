const users = [
  {
    name: "ramin",
    age: 19,
    password: "13579",
    isLogin: false,
  },
  {
    name: "islam",
    age: 20,
    password: "Salam",
    isLogin: false,
  },
  {
    name: "daniel",
    age: 19,
    password: "what",
    isLogin: false,
  },
];

let newUser = {
  name: null,
  age: null,
  password: null,
  isLogin: false,
};

function registerUser() {
  let userName = document.querySelector(".nameinput").value;
  let userAge = document.querySelector(".ageinput").value;
  let userPassword = document.querySelector(".passwordinput").value;
  let userCheckPassword = document.querySelector(".passwordcheckinput").value;

  newUser.name = userName;
  newUser.age = userAge;
  newUser.password = userPassword;
  let { age, name, password } = newUser;
  if (age !== null && name !== null && password !== null) {
    const checkUniqueUsername = users.find(item => item.name === newUser.name);
    if (userCheckPassword != userPassword) {
      alert("Пароли не совпадают");
    } else {
      if (checkUniqueUsername) {
        return alert("Такое имя пользователя уже есть");
      } else {
        users.push(newUser);
        alert("Вы успешно зарегестрировались");
      }
    }
  }
}
function loginUser() {
  let logUserName = document.querySelector(".lognameinput").value;
  let logUserPassword = document.querySelector(".logpasswordinput").value;
  const checkLogin = users.find(
    item => item.name === logUserName && item.password === logUserPassword
  );
  if (checkLogin) {
    alert("Вы вошли в аккаунт");
    newUser.isLogin = true;
    document.querySelector(".divan").innerHTML = newUser.name;
  } else {
    alert("Такого аккаунта не существует");
  }
}
function logoutUser() {
  if (newUser.isLogin == false) {
    alert("Сперва вы должны войти в аккаунт");
  } else {
    newUser.isLogin = false;
    alert("Вы успешно вышли из аккаунта");
  }
}
function updateUserAccount() {
  if (newUser.isLogin === true) {
    let nameChange = confirm("Вы хотите изменить имя?");
    if (nameChange === true) {
      let newName = prompt("Введите новое имя");
      newUser.name = newName;
      document.querySelector(".divan").innerHTML = newUser.name;
      alert("Вы успешно изменили имя!");
    }
  } else {
    alert("Сперва вы должны войти в аккаунт");
  }
  if (newUser.isLogin === true) {
    let ageChange = confirm("Вы хотите изменить возраст?");
    if (ageChange === true) {
      let newAge = prompt("Введите новый возраст");
      newUser.age = newAge;
      alert("Вы успешно изменили возраст!");
    }
  }
  if (newUser.isLogin === true) {
    let passwordChange = confirm("Вы хотите изменить пароль?");
    if (passwordChange === true) {
      let checkPassword = prompt("Введите старый пароль");
      if (checkPassword != newUser.password) {
        let checkPassword = alert("Пароли не совпадают");
      } else {
        let newPassword = prompt("Введите новый пароль");
        newUser.password = newPassword;
        alert("Вы успешно изменили пароль!");
      }
    }
  }
}
function deleteUser() {
  if (newUser.isLogin === true) {
    let checkPassword = prompt("Введите пароль");
    if (checkPassword != newUser.password) {
      let checkPassword = alert("Пароли не совпадают");
    } else {
      let deleteCheck = confirm("Вы точно хотите удалить аккаунт?");
      if (deleteCheck == true) {
        users.pop();
        alert("Вы успешно удалили аккаунт!");
      } else {
        alert("Сперва вы должны войти в аккаунт");
      }
    }
  }
}
