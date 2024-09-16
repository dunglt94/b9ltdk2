// Bài 1
function bai1_convertCtoF() {
    let bai1_c = +document.getElementById("bai1_degree").value;
    let bai1_f = bai1_c * 9 / 5 +32;
    document.getElementById("bai1_result").innerHTML = `<p>Result: ${bai1_f} &deg;F</p>`;
}

// Bài 2
function bai2_MtoFt() {
    let bai2_m = +document.getElementById("bai2_meter").value;
    let bai2_ft = bai2_m * 3.2808;
    document.getElementById("bai2_result").innerText = `Result: ${bai2_ft} ft`;
}

// Bài 3
function bai3_squareArea() {
    let bai3_side = +document.getElementById("bai3_square_side").value;
    let bai3_area = bai3_side ** 2;
    document.getElementById("bai3_result").innerText = `Result: ${bai3_area} cm`;
}

// Bài 4
function bai4_rectangleArea() {
    let bai4_side1 = +document.getElementById("bai4_rectangle_side1").value;
    let bai4_side2 = +document.getElementById("bai4_rectangle_side2").value;
    let bai4_area = bai4_side1 * bai4_side2;
    document.getElementById("bai4_result").innerHTML = `Result: ${bai4_area} cm&sup2;`;
}

// Bài 5
function bai5_triangleArea() {
    let bai5_side1 = +document.getElementById("bai5_triangle_side1").value;
    let bai5_side2 = +document.getElementById("bai5_triangle_side2").value;
    let bai5_area = bai5_side1 * bai5_side2 / 2;
    document.getElementById("bai5_result").innerHTML = `Result: ${bai5_area} cm&sup2;`;
}

// Bài 6
function bai6_find_x() {
    let bai6_num1 = +document.getElementById("bai6_number1").value;
    let bai6_num2 = +document.getElementById("bai6_number2").value;
    let bai6_num3 = +document.getElementById("bai6_number3").value;
    let bai6_x = (bai6_num3 - bai6_num2) / bai6_num1;
    document.getElementById("bai6_result").innerHTML = `Result: x = ${bai6_x}`;
}

// Bài 7
function bai7_find_x() {
    let bai7_num1 = +document.getElementById("bai7_number1").value;
    let bai7_num2 = +document.getElementById("bai7_number2").value;
    let bai7_num3 = +document.getElementById("bai7_number3").value;
    let bai7_d = bai7_num2 ** 2 - 4 * bai7_num1 * bai7_num3;
    let bai7_x1;
    let bai7_x2;
    let bai7_result = document.getElementById("bai7_result");
    if (bai7_num1 === 0) {
        bai7_result.innerText = `Result: Đây không phải là phương trình bậc 2.`;
        return;
    }
    if (bai7_d > 0) {
        bai7_x1 = (-bai7_num2 - bai7_d ** (1/2)) / (2 * bai7_num1);
        bai7_x2 = (-bai7_num2 + bai7_d ** (1/2)) / (2 * bai7_num1);
        bai7_result.innerHTML = `Result: x<sub>1</sub> = ${bai7_x1} và x<sub>2</sub> = ${bai7_x2}`;
    } else {
        if (bai7_d === 0) {
            bai7_x1 = bai7_x2 = -bai7_num2 / (2 * bai7_num1);
            bai7_result.innerHTML = `Result: x<sub>1</sub> = x<sub>2</sub> = ${bai7_x1}`;
        } else {
            bai7_result.innerText = `Result: Phương trình vô nghiệm.`;
        }
    }
}

//Bài 8
function bai8_checkAge() {
    let bai8_age = +document.getElementById("bai8_age").value;
    let bai8_result = document.getElementById("bai8_result");
    if (bai8_age > 0  && bai8_age < 120) {
        bai8_result.innerText = `Result: ${bai8_age} là tuổi của 1 người`;
    } else {
        bai8_result.innerText = `Result: ${bai8_age} không phải là tuổi của 1 người`;
    }
}

//Bài 9
function bai9_check() {
    let bai9_a = +document.getElementById("bai9_side1").value;
    let bai9_b = +document.getElementById("bai9_side2").value;
    let bai9_c = +document.getElementById("bai9_side3").value;
    let bai9_result = document.getElementById("bai9_result");
    let bai9_result1 = `Result: ${bai9_a}, ${bai9_b} và ${bai9_c} là cạnh của 1 tam giác`
    let bai9_result2 = `Result: ${bai9_a}, ${bai9_b} và ${bai9_c} không phải là cạnh của 1 tam giác`;
    if (bai9_a > 0 && bai9_b > 0 && bai9_c > 0) {
        if ((bai9_a + bai9_b) > bai9_c) {
            if ((bai9_b + bai9_c) > bai9_a) {
                if ((bai9_a + bai9_c) > bai9_b) {
                    bai9_result.innerText = bai9_result1;
                } else {
                    bai9_result.innerText = bai9_result2;
                }
            } else {
                bai9_result.innerText = bai9_result2;
            }
        } else {
            bai9_result.innerText = bai9_result2;
        }
    } else {
        bai9_result.innerText = bai9_result2
    }
}

//Bài 10
function bai10_calElectricitybill() {
    let bai10_usage = +document.getElementById("bai10_usage").value;
    let bai10_bill;
    let bai10_result = document.getElementById("bai10_result");
    if (bai10_usage <= 50) {
        bai10_bill = bai10_usage * 1806;
    } else if (bai10_usage <= 100) {
        bai10_bill = (bai10_usage - 50) * 1866 + 50 * 1806;
    } else if (bai10_usage <= 200) {
        bai10_bill = (bai10_usage - 100) * 2167 + 500 * 1866 + 50 * 1806;
    } else if (bai10_usage <= 300) {
        bai10_bill = (bai10_usage - 200) * 2729 + 100 * 2167 + 50 * 1866 + 50 * 1806;
    } else if (bai10_usage <= 400) {
        bai10_bill = (bai10_usage - 300) * 3050 + 100 * 2729 + 100 * 2167 + 50 * 1866 + 50 * 1806;
    } else {
        bai10_bill = (bai10_usage - 400) * 3151 + 100 * 3050 + 100 * 2729 + 100 * 2167 + 50 * 1866 + 50 * 1806;
    }
    bai10_result.innerText = `Result: Tháng này tiền điện bạn phải nộp là ${bai10_bill} đ.`;
}

//Bài 11
function bai11_calPersonaltax() {
    let bai11_income = +document.getElementById("bai11_income").value;
    let bai11_P_deduct = 11000000;
    let bai11_NoP = +document.getElementById("bai11_NoP").value;
    let bai11_D_deduct = bai11_NoP * 4400000;
    let bai11_taxed_income = bai11_income - bai11_P_deduct - bai11_D_deduct;
    let ba11_Personal_tax;
    let bai11_result1 = document.getElementById("bai11_result1");
    let bai11_result2 = document.getElementById("bai11_result2");
    if (bai11_taxed_income < 0) {
        bai11_result1.innerText = `Thu nhập tính thuế: 0 đ.`;
        bai11_result2.innerText = `Thuế thu nhập cá nhân: 0 đ.`;
        return;
    }
    if (bai11_taxed_income <= 5000000) {
        ba11_Personal_tax = bai11_taxed_income * 0.05;
    } else if (bai11_taxed_income <= 10000000) {
        ba11_Personal_tax = bai11_taxed_income * 0.1 - 250000;
    } else if (bai11_taxed_income <= 18000000) {
        ba11_Personal_tax = bai11_taxed_income * 0.15 - 750000;
    } else if (bai11_taxed_income <= 32000000) {
        ba11_Personal_tax = bai11_taxed_income * 0.2 - 1650000;
    } else if (bai11_taxed_income <= 52000000) {
        ba11_Personal_tax = bai11_taxed_income * 0.25 - 3250000;
    } else if (bai11_taxed_income <= 80000000) {
        ba11_Personal_tax = bai11_taxed_income * 0.3 - 5850000;
    } else {
        ba11_Personal_tax = bai11_taxed_income * 0.35 - 9850000;
    }
    bai11_result1.innerText = `Thu nhập tính thuế: ${bai11_taxed_income} đ.`;
    bai11_result2.innerText = `Thuế thu nhập cá nhân: ${ba11_Personal_tax} đ.`;
}

// Bài 12
function bai12_calTotalInterest() {
    let bai12_P = +document.getElementById("bai12_initial_amount").value;
    let bai12_n = +document.getElementById("bai12_months").value;
    let bai12_a = +document.getElementById("bai12_annual_interest").value;
    if (bai12_P <= 0 || bai12_n <= 0 || bai12_a <= 0) {
        alert('Vui lòng nhập lại');
        return;
    }
    let bai12_r = (1 + bai12_a/100) ** (1/12) - 1;
    let bai12_r_percentage = bai12_r * 100;

    let bai12_result1 = document.getElementById("bai12_monthly_interest");
    let bai12_result2 = document.getElementById("bai12_totalMoney");
    let bai12_result3 = document.getElementById("bai12_result");

    let bai12_A = bai12_P * ((1 + bai12_r) ** bai12_n);
    let bai12_total_interest = bai12_A - bai12_P;

    bai12_result1.innerText = `Lãi xuất hàng tháng: ${bai12_r_percentage} %`;
    bai12_result2.innerText = `Tổng số tiền phải trả: ${bai12_A} đ`
    bai12_result3.innerText = `Số tiền lãi phải trả: ${bai12_total_interest}đ`;
}