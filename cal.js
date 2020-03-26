function case1(){
  document.pcr_form.total.value = 10000
  document.pcr_form.infection.value = 100
  document.pcr_form.sensitivity.value = 70
  document.pcr_form.specificity.value = 95
  cal()
}

function case2(){
  document.pcr_form.total.value = 14000000
  document.pcr_form.infection.value = 100000
  document.pcr_form.sensitivity.value = 70
  document.pcr_form.specificity.value = 95
  cal()
}

function case3(){
  document.pcr_form.total.value = 14000000
  document.pcr_form.infection.value = 100000
  document.pcr_form.sensitivity.value = 99
  document.pcr_form.specificity.value = 99
  cal()
}

function case4(){
  document.pcr_form.total.value = 1000
  document.pcr_form.infection.value = 500
  document.pcr_form.sensitivity.value = 70
  document.pcr_form.specificity.value = 95
  cal()
}

function cal(){
  check()
  
  const total = document.pcr_form.total.value
  const infection = document.pcr_form.infection.value
  const sensitivity = document.pcr_form.sensitivity.value
  const specificity = document.pcr_form.specificity.value
  
  let a1 = Math.floor(infection * sensitivity/100)
  let a2 = Math.floor(infection * (1 - sensitivity/100))
  let a3 = Math.floor((total-infection) * specificity/100)
  let a4 = Math.floor((total-infection) * (1-specificity/100))
  let a5 = a1 + a4
  let a6 = Math.round((a1 / (a1 + a4)) * 1000) / 10
  
  document.pcr_form.a1.value = a1 + " 人"
  document.pcr_form.a2.value = a2 + " 人"
  document.pcr_form.a3.value = a3 + " 人"
  document.pcr_form.a4.value = a4 + " 人"

  document.getElementById("num1").innerText  = a5;
  document.getElementById("num2").innerText  = a1;
  document.getElementById("num3").innerText  = a6;
}

function check(){
  // PCR検査全体数がマイナスのとき、ゼロ
  if (eval(document.pcr_form.total.value) < 0) {
    document.pcr_form.total.value = 0
  }
  // 感染者数がマイナスのとき、ゼロ
  if (eval(document.pcr_form.infection.value) < 0) {
    document.pcr_form.infection.value = 0
  }
  // PCR検査全体数より感染者数が多いとき、感染者数＝PCR検査全体数
  if (eval(document.pcr_form.total.value) < eval(document.pcr_form.infection.value)) {
    document.pcr_form.infection.value = document.pcr_form.total.value
  }
  // PCR感度が50未満のとき、50
  if (eval(document.pcr_form.sensitivity.value) < 50) {
    document.pcr_form.sensitivity.value = 50
  }
  // PCR感度が100以上のとき、100
  if (eval(document.pcr_form.sensitivity.value) > 100) {
    document.pcr_form.sensitivity.value = 100
  }
  // PCR特異度が50未満のとき、50
  if (eval(document.pcr_form.specificity.value) < 50) {
    document.pcr_form.specificity.value = 50
  }
  // PCR感度が100以上のとき、100
  if (eval(document.pcr_form.specificity.value) > 100) {
    document.pcr_form.specificity.value = 100
  }
}
