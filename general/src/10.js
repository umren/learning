var place = "city",
  user = "ivan";
var target = {
  userplace: "Уфа",
  ["user" + place]: "Рязань",
  [user + "place"]: "Сыктывкар",
  [user + place]: "Москва",
  show() {
    console.log(target.userplace, target.ivancity);
  }
};

target.show();
