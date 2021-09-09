$(document).ready(function () {
  if (localStorage.getItem("table") !== null) {
    var cart = localStorage.getItem("table");
    // console.log(`cart = ${cart}`);
    $("tbody").append(`${cart}`);
  }
  $("#btnAdd").click(function () {
    if ($("#fullName").val() && $("#email").val() && $("#city").val()) {
      let newHtml = GetHtml()
        .replace("$[fullName]", $("#fullName").val())
        .replace("$[email]", $("#email").val())
        .replace("$[city]", $("#city").val())
        .replace("$[action]", "Edit")
        .replace("$[Delete]", "Delete");
      $("#table_td").append(newHtml);
      $("#fullName").val("");
      $("#email").val("");
      $("#city").val("");
      var x = newHtml;
      var s = ``;
      console.log(x);
      let d = [];
      // for (let index = 0; index < x.length; index++) {
      //   d[index] = x[index].innerHTML;
      //   // console.log(d[index]);
      //   s += `<td> ${d[index]}</td>`;
      // }

      // // table.innerHTML += j;
      // table.innerHTML += `</tr>`;
      localStorage.setItem("table", table.innerHTML);
      localStorage.getItem("table");

      // console.log(`s = ${s}`);
      // console.log(`j = ${j}`);
    }
  });

  $("#btnUpdate").click(function () {
    let newHtml = GetHtml()
      .replace("$[fullName]", $("#fullName").val())
      .replace("$[email]", $("#email").val())
      .replace("$[city]", $("#city").val())
      .replace("$[action]", "Edit")
      .replace("$[Delete]", "Delete");

    // console.log(newHtml);
    // if($("#table_td")[0])
    // var row_index = $(this).parent().index();
    // console.log($("#table_td").find(".del")).replaceWith(newHtml);
    // console.log($(".j"));
    var ddd = $("#table_td").find(".del");
    // console.log(ddd);
    let x = ddd.replaceWith(newHtml);
    localStorage.setItem("table", table.innerHTML);
    localStorage.getItem("table");

    $("#btnAdd").show();
    $("#btnrest").show();
    $("#btnUpdate").hide();
    $("#fullName").val("");
    $("#email").val("");
    $("#city").val("");
    $("#txtId").hide();
  });

  $(document).on("click", "#A_Edit", function () {
    $("#btnAdd").hide();
    $("#btnrest").hide();
    $("#btnUpdate").show();
    $("#txtId").show();
    // console.log($(this).parents("tr"));z

    $("#fullName").val($(this).parent().parent().find(".fullName").html());
    $("#email").val($(this).parent().parent().find(".email").html());
    $("#city").val($(this).parent().parent().find(".city").html());
    // $("#table_td").find(".del").remove();
    // $(this).parents("tr").remove();
    $(this).parents("tr").addClass("del");
    $("#btnUpdate").focus();
  });

  $(document).on("click", "#A_delete", function () {
    var id = $(this).parents("tr").remove();
    localStorage.setItem("table", table.innerHTML);
    localStorage.getItem("table");
  });
  $(document).on("click", "#btnrest", function () {
    localStorage.removeItem("table");
    location.reload();
  });
  var table = document
    .getElementById("UserInfo")
    .getElementsByTagName("tbody")[0];
});

function GetHtml() {
  return (
    "<tr>" +
    "<td class='fullName'>$[fullName]</td>" +
    "<td class='email'>$[email]</td>" +
    "<td class='city'>$[city]</td>" +
    "<td class='action'><a href='#' id='A_Edit' class='btn btn-secondary btn-sm'> $[action] </a> <a href='#' id='A_delete' class='btn btn-danger btn-sm'>$[Delete]</a></td></tr>"
  );
}
var table = $("#table_td");
// console.log(table);
