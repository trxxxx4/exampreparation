const myMind = '⠄⠄⠄⣀⠄⠄⠸⢒⢶⣷⣶⣶⣶⣶⣶⢖⠤⠄⠂⠄⢰⠄⠄\n⠄⠄⢠⣥⣠⣄⠄⢀⣙⢿⣿⣿⣿⣿⡿⣁⠠⠄⣰⣆⣤⣆⡀\n⠄⣠⣷⣫⢳⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣺⣇\n⢰⣿⢣⣿⢹⣿⣿⣿⣿⣿⣿⡻⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⢿⣿⣿⣿⣸⣿⣿⣿⣿⣿⣿⣻⣝⣿⣿⣿⣿⣿⣿⣇⣿⡇⣿\n⠸⣿⣷⣿⣯⣻⣿⣿⣿⣿⣿⡿⡿⣿⣿⣿⣿⡿⣿⣾⣟⣽⡟\n⠄⠨⢹⣷⣿⣿⣷⣯⣿⢿⣖⡶⢲⣼⣿⢟⣽⣾⣿⠿⠊⠁⠄\n⠄⠄⠄⢭⣭⣵⣿⣿⣿⣯⣿⣿⣿⣿⣳⣿⣿⣿⣷⣶⠟⠁⠄\n⠄⠄⠄⠄⠘⠻⣿⣿⣿⣿⣷⠛⠉⣵⣿⣿⣿⣿⠟⠃⠄⠄⠄\n⠄⠄⠄⠄⠄⠄⢹⣿⣿⣿⣿⠄⠄⣿⣿⣿⣿⡃⠄⠄⠄⠄⠄\n⠄⠄⠄⠄⠄⢀⣾⣿⣿⣿⠃⠄⠄⢸⣿⣿⣿⣇⠄⠄⠄⠄⠄\n⠄⠄⠄⠄⠄⣼⣿⣿⣿⡏⠄⠄⠄⠘⣿⣿⣿⣿⡄⠄⠄⠄⠄\n⠄⠄⠄⠄⢸⣿⣿⣿⣿⡇⠄⠄⠄⠄⣿⣿⣿⣿⣧⠄⠄⠄⠄ ';
console.log(myMind);
const one = document.querySelector('[data-body="1"]');
const two = document.querySelector('[data-body="2"]');
const four = document.querySelector('[data-body="4"]');
const six = document.querySelector('[data-body="6"]');










const study = "I don't LOVE TO WORK";
console.log(study);









function main() {
    if (one) {
        function numbers() {
            for (i = 0; i != document.querySelectorAll(".number").length; i = i + 1) {
                document.querySelectorAll(".number")[i].innerHTML = i + 1;
            }
        }
        numbers();

        document.querySelector('[data-button="1"]').addEventListener("click", score);
        function score() {
            count = 0;
            let score1 = document.querySelector('[data-input="1"]');
            let score2 = document.querySelector('[data-input="2"]');
            let score3 = document.querySelector('[data-input="3"]');
            let score4 = document.querySelector('[data-input="4"]');
            let score5 = document.querySelector('[data-input="5"]');
            let score6 = document.querySelector('[data-input="6"]');
            let score7 = document.querySelector('[data-input="7"]');
            let score8 = document.querySelector('[data-input="8"]');
            let score9 = document.querySelector('[data-input="9"]');
            let score10 = document.querySelector('[data-input="10"]');
            let score11 = document.querySelector('[data-input="11"]');
            let score12 = document.querySelector('[data-input="12"]');
            if (score1.value == "46") { count++ }
            if (score2.value == "90") { count++ }
            if (score3.value == "28") { count++ }
            if (score4.value == "0,08") { count++ }
            if (score5.value == "0,67") { count++ }
            if (score6.value == "-3") { count++ }
            if (score7.value == "28") { count++ }
            if (score8.value == "0,25") { count++ }
            if (score9.value == "8") { count++ }
            if (score10.value == "0,75") { count++ }
            if (score11.value == "-0,25") { count++ }
            if (score12.value == "10") { count++ }
            console.log(count);



        }

    }
    if (two) {

        function numbers() {
            for (i = 0; i != document.querySelectorAll(".number").length; i = i + 1) {
                document.querySelectorAll(".number")[i].innerHTML = i + 13;
            }
        }
        numbers();






        let allSecond13 = document.querySelectorAll('[data-input_second_part="13"]');
        for (i = 0; i < allSecond13.length; i++) {
            allSecond13[i].addEventListener("change", function () {
                question13 = this.value;
                console.log(question13);
            })
        }
        let allSecond14 = document.querySelectorAll('[data-input_second_part="14"]');
        for (i = 0; i < allSecond14.length; i++) {
            allSecond14[i].addEventListener("change", function () {
                question14 = this.value;
                console.log(question14);
            })
        }
        let allSecond15 = document.querySelectorAll('[data-input_second_part="15"]');
        for (i = 0; i < allSecond15.length; i++) {
            allSecond15[i].addEventListener("change", function () {
                question15 = this.value;
                console.log(question15);

            })
        }
        let allSecond17 = document.querySelectorAll('[data-input_second_part="17"]');
        for (i = 0; i < allSecond17.length; i++) {
            allSecond17[i].addEventListener("change", function () {
                question17 = this.value;
                console.log(question17);
            })
        }
        let allSecond18 = document.querySelectorAll('[data-input_second_part="18"]');
        for (i = 0; i < allSecond18.length; i++) {
            allSecond18[i].addEventListener("change", function () {
                question18 = this.value;
                console.log(question18);
            })
        }
        let allSecond16 = document.querySelectorAll('[data-input_second_part="16"]');
        for (i = 0; i < allSecond16.length; i++) {
            allSecond16[i].addEventListener("change", function () {
                question16 = this.value;
                console.log(question16);
            })
        }
        let allSecond19 = document.querySelectorAll('[data-input_second_part="19"]');

        for (i = 0; i < allSecond19.length; i++) {
            allSecond19[i].addEventListener("change", function () {
                question19 = this.value;
                console.log(question19);

            })
        }
        document.getElementById('button').addEventListener("click", function () {
            let allSecondScore = Number(question19) + Number(question16) + Number(question17) + Number(question15) + Number(question14) + Number(question13) + Number(question18);
            console.log(allSecondScore);
        })
    }
    if (four) {
        function numbers() {
            for (i = 0; i != document.querySelectorAll(".number").length; i = i + 1) {
                document.querySelectorAll(".number")[i].innerHTML = i + 1;
            }
        }
        numbers();
        let numberOfTasks = document.querySelectorAll(".task").length;
        let yourAnswers = [];
        document.querySelector('[data-button="1"]').addEventListener("click", score);
        function score() {
            count = 0;
            let score1 = document.querySelector('[data-input="1"]').value;
            let score2 = document.querySelector('[data-input="2"]').value;
            let score3 = document.querySelector('[data-input="3"]').value;
            let score4 = document.querySelector('[data-input="4"]').value;
            let score5 = document.querySelector('[data-input="5"]').value;
            let score6 = document.querySelector('[data-input="6"]').value;
            let score7 = document.querySelector('[data-input="7"]').value;
            let score8 = document.querySelector('[data-input="8"]').value;
            let score9 = document.querySelector('[data-input="9"]').value;
            let score10 = document.querySelector('[data-input="10"]').value;
            let score11 = document.querySelector('[data-input="11"]').value;
            let score12 = document.querySelector('[data-input="12"]').value;
            let score13 = document.querySelector('[data-input="13"]').value;
            let score14 = document.querySelector('[data-input="14"]').value;
            let score15 = document.querySelector('[data-input="15"]').value;
            if (score1 == "108") {

                count++;
            }
            if (score2 == "41") {

                count++;
            }
            if (score3 == "75") {

                count++;
            }
            if (score4 == "41") {

                count++;
            }
            if (score5 == "22") {

                count++;
            }
            if (score6 == "11") {

                count++;
            }
            if (score7 == "21") {

                count++;
            }
            if (score8 == "0") {

                count++;
            }
            if (score9 == "16") {

                count++;
            }
            if (score10 == "203") {

                count++;
            }
            if (score11 == "13377") {

                count++;
            }
            if (score12 == "229") {

                count++;
            }
            if (score13 == "xywz") {

                count++;
            }
            if (score14 == "29") {

                count++;
            }
            if (score15 == "3") {

                count++;
            }
            console.log(count);

            document.querySelector('main').remove();
            document.querySelector('body').className = "body_second_part";
            let newDiv = document.createElement("div");
            if (count == 0) {
                newDiv.innerHTML = `<h3 style="color:#F9F7F7">Вы решили правильно ${count} заданий</h3><p style="color:#F9F7F7">Попробуйте ещё раз</p>`;
            } else if (count == 1) {

                newDiv.innerHTML = `<h3 style="color:#F9F7F7">Вы решили правильно ${count} задание</h3><p style="color:#F9F7F7">Вам стоит лучше готовится</p>`
            } else if(count <= 8 || count >=5){
                newDiv.innerHTML = `<h3 style="color:#F9F7F7">Вы решили правильно ${count} задание</h3><p style="color:#F9F7F7">Неплохой результат, но можно добиться большего</p>`
            } else if(count <= 13 || count >=8){
                newDiv.innerHTML = `<h3 style="color:#F9F7F7">Вы решили правильно ${count} задание</h3><p style="color:#F9F7F7">Отличный результат</p>`
            }  else if(count <= 15 || count >=13){
                newDiv.innerHTML = `<h3 style="color:#F9F7F7">Вы решили правильно ${count} задание</h3><p style="color:#F9F7F7">Можно уверенно сказать, что ЕГЭ для вас не проблема</p>`
            }
            
            else {
                {
                    newDiv.innerHTML = `<h3 style="color:#F9F7F7">Вы решили правильно ${count} задания</h3><p style="color:#F9F7F7">Вам стоит лучше готовится</p>`
                }

            }
            newDiv.className = 'title_exers';
            document.querySelector('body').appendChild(newDiv);
            let newDiv2 = document.createElement("div");
            newDiv2.className = 'title_exers2';
            document.querySelector('body').appendChild(newDiv2);


            let rightAnswers = ['108', 41, 75, 41, 22, 11, 21, 0, 16, 203, 13377, 229, "xywz", 29, 3];

            for (let i = 0; i < 1; i++) {
                let newDiv = document.createElement("div");
                newDiv.className = 'title_exers2_upper_line';
                document.querySelector('.title_exers2').appendChild(newDiv);

            }
            for (let i = 0; i < 1; i++) {
                let newDiv = document.createElement("div");
                newDiv.className = 'title_exers2_lower_line';
                document.querySelector('.title_exers2').appendChild(newDiv);
            }
            let newDivNumbersSymbol = document.createElement("div");
            newDivNumbersSymbol.className = 'title_exers2_box';
            newDivNumbersSymbol.innerHTML = `<h3 style="color:#F9F7F7">№</h3>`;
            document.querySelector('.title_exers2_upper_line').appendChild(newDivNumbersSymbol);
            for (let i = 1; i < numberOfTasks + 1; i++) {
                let newDiv = document.createElement("div");
                newDiv.className = 'title_exers2_box';
                newDiv.innerHTML = `<h3 style="color:#F9F7F7">${i}</h3>`;
                document.querySelector('.title_exers2_upper_line').appendChild(newDiv);

            }
            let newDivAnswerWord = document.createElement('div');
            newDivAnswerWord.className = 'title_exers2_box';
            newDivAnswerWord.innerHTML = `ответы`;
            document.querySelector('.title_exers2_lower_line').appendChild(newDivAnswerWord);
            for (let i = 1; i < numberOfTasks + 1; i++) {
                let newDiv = document.createElement('div');
                newDiv.className = 'title_exers2_box_lower';
                newDiv.dataset.box = "1"
                document.querySelector('.title_exers2_lower_line').appendChild(newDiv);
            }
            if (score1 == "108") {
                document.querySelectorAll('[data-box="1"]')[0].innerHTML = score1;
                document.querySelectorAll('[data-box="1"]')[0].className = 'title_exers2_box_color_green';
            } else if (score1 == '' || score1 == ' ') {
                document.querySelectorAll('[data-box="1"]')[0].className = 'title_exers2_box_color_red';
                document.querySelectorAll('[data-box="1"]')[0].innerHTML = '   ';
            }
            else {
                document.querySelectorAll('[data-box="1"]')[0].className = 'title_exers2_box_color_red';
                document.querySelectorAll('[data-box="1"]')[0].innerHTML = score1;
            }
            if (score2 == rightAnswers[1]) {
                document.querySelectorAll('[data-box="1"]')[1].innerHTML = score2;
                document.querySelectorAll('[data-box="1"]')[1].className = 'title_exers2_box_color_green';
            } else if (score2 == '' || score2 == ' ') {
                document.querySelectorAll('[data-box="1"]')[1].className = 'title_exers2_box_color_red';
                document.querySelectorAll('[data-box="1"]')[1].innerHTML = '   ';
            }
            else {
                document.querySelectorAll('[data-box="1"]')[1].className = 'title_exers2_box_color_red';
                document.querySelectorAll('[data-box="1"]')[1].innerHTML = score2;

            }
            if (score3 == rightAnswers[2]) {
                document.querySelectorAll('[data-box="1"]')[2].innerHTML = score3;
                document.querySelectorAll('[data-box="1"]')[2].className = 'title_exers2_box_color_green';
            } else if (score3 == '' || score3 == ' ') {
                document.querySelectorAll('[data-box="1"]')[2].className = 'title_exers2_box_color_red';
                document.querySelectorAll('[data-box="1"]')[2].innerHTML = '   ';
            }
            else {
                document.querySelectorAll('[data-box="1"]')[2].className = 'title_exers2_box_color_red';
                document.querySelectorAll('[data-box="1"]')[2].innerHTML = score3;
            }
            if (score4 == rightAnswers[3]) {
                document.querySelectorAll('[data-box="1"]')[3].innerHTML = score4;
                document.querySelectorAll('[data-box="1"]')[3].className = 'title_exers2_box_color_green';
            } else if (score4 == '' || score4 == ' ') {
                document.querySelectorAll('[data-box="1"]')[3].className = 'title_exers2_box_color_red';
                document.querySelectorAll('[data-box="1"]')[3].innerHTML = '   ';
            } else {
                document.querySelectorAll('[data-box="1"]')[3].className = 'title_exers2_box_color_red';
                document.querySelectorAll('[data-box="1"]')[3].innerHTML = score4;
            }
            if (score5 == rightAnswers[4]) {
                document.querySelectorAll('[data-box="1"]')[4].innerHTML = score5;
                document.querySelectorAll('[data-box="1"]')[4].className = 'title_exers2_box_color_green';
            } else if (score5 == '' || score5 == ' ') {
                document.querySelectorAll('[data-box="1"]')[4].className = 'title_exers2_box_color_red';
                document.querySelectorAll('[data-box="1"]')[4].innerHTML = '   ';
            } else {
                document.querySelectorAll('[data-box="1"]')[4].className = 'title_exers2_box_color_red';
                document.querySelectorAll('[data-box="1"]')[4].innerHTML = score5;
            }
            if (score6 == rightAnswers[5]) {
                document.querySelectorAll('[data-box="1"]')[5].innerHTML = score6;
                document.querySelectorAll('[data-box="1"]')[5].className = 'title_exers2_box_color_green';
            } else if (score6 == '' || score6 == ' ') {
                document.querySelectorAll('[data-box="1"]')[5].className = 'title_exers2_box_color_red';
                document.querySelectorAll('[data-box="1"]')[5].innerHTML = '   ';
            } else {
                document.querySelectorAll('[data-box="1"]')[5].className = 'title_exers2_box_color_red';
                document.querySelectorAll('[data-box="1"]')[5].innerHTML = score6;
            }
            if (score7 == rightAnswers[6]) {
                document.querySelectorAll('[data-box="1"]')[6].innerHTML = score7;
                document.querySelectorAll('[data-box="1"]')[6].className = 'title_exers2_box_color_green';
            } else if (score7 == '' || score7 == ' ') {
                document.querySelectorAll('[data-box="1"]')[6].className = 'title_exers2_box_color_red';
                document.querySelectorAll('[data-box="1"]')[6].innerHTML = '   ';
            } else {
                document.querySelectorAll('[data-box="1"]')[6].className = 'title_exers2_box_color_red';
                document.querySelectorAll('[data-box="1"]')[6].innerHTML = score7;
            }
            if (score8 != rightAnswers[7]) {
                document.querySelectorAll('[data-box="1"]')[7].className = 'title_exers2_box_color_red';
                document.querySelectorAll('[data-box="1"]')[7].innerHTML = score8;
            } else if (score8 == '' || score8 == ' ') {
                document.querySelectorAll('[data-box="1"]')[7].className = 'title_exers2_box_color_red';
                document.querySelectorAll('[data-box="1"]')[7].innerHTML = '   ';
            } else {

                document.querySelectorAll('[data-box="1"]')[7].innerHTML = score8;
                document.querySelectorAll('[data-box="1"]')[7].className = 'title_exers2_box_color_green';
            }
            if (score9 == rightAnswers[8]) {
                document.querySelectorAll('[data-box="1"]')[8].innerHTML = score9;
                document.querySelectorAll('[data-box="1"]')[8].className = 'title_exers2_box_color_green';
            } else if (score9 == '' || score9 == ' ') {
                document.querySelectorAll('[data-box="1"]')[8].className = 'title_exers2_box_color_red';
                document.querySelectorAll('[data-box="1"]')[8].innerHTML = '   ';
            } else {
                document.querySelectorAll('[data-box="1"]')[8].className = 'title_exers2_box_color_red';
                document.querySelectorAll('[data-box="1"]')[8].innerHTML = score9;
            }
            if (score10 == rightAnswers[9]) {
                document.querySelectorAll('[data-box="1"]')[9].innerHTML = score10;
                document.querySelectorAll('[data-box="1"]')[9].className = 'title_exers2_box_color_green';
            } else if (score10 == '' || score10 == ' ') {
                document.querySelectorAll('[data-box="1"]')[9].className = 'title_exers2_box_color_red';
                document.querySelectorAll('[data-box="1"]')[9].innerHTML = '   ';
            } else {
                document.querySelectorAll('[data-box="1"]')[9].className = 'title_exers2_box_color_red';
                document.querySelectorAll('[data-box="1"]')[9].innerHTML = score10;
            }
            if (score11 == rightAnswers[10]) {
                document.querySelectorAll('[data-box="1"]')[10].innerHTML = score11;
                document.querySelectorAll('[data-box="1"]')[10].className = 'title_exers2_box_color_green';
            } else if (score11 == '' || score11 == ' ') {
                document.querySelectorAll('[data-box="1"]')[10].className = 'title_exers2_box_color_red';
                document.querySelectorAll('[data-box="1"]')[10].innerHTML = '   ';
            } else {
                document.querySelectorAll('[data-box="1"]')[10].className = 'title_exers2_box_color_red';
                document.querySelectorAll('[data-box="1"]')[10].innerHTML = score11;
            }
            if (score12 == rightAnswers[11]) {
                document.querySelectorAll('[data-box="1"]')[11].innerHTML = score12;
                document.querySelectorAll('[data-box="1"]')[11].className = 'title_exers2_box_color_green';
            } else if (score12 == '' || score12 == ' ') {
                document.querySelectorAll('[data-box="1"]')[11].className = 'title_exers2_box_color_red';
                document.querySelectorAll('[data-box="1"]')[11].innerHTML = '   ';
            } else {
                document.querySelectorAll('[data-box="1"]')[11].className = 'title_exers2_box_color_red';
                document.querySelectorAll('[data-box="1"]')[11].innerHTML = score12;
            }
            if (score13 == rightAnswers[12]) {
                document.querySelectorAll('[data-box="1"]')[12].innerHTML = score13;
                document.querySelectorAll('[data-box="1"]')[12].className = 'title_exers2_box_color_green';
            } else if (score13 == '' || score13 == ' ') {
                document.querySelectorAll('[data-box="1"]')[12].className = 'title_exers2_box_color_red';
                document.querySelectorAll('[data-box="1"]')[12].innerHTML = '   ';
            } else {
                document.querySelectorAll('[data-box="1"]')[12].className = 'title_exers2_box_color_red';
                document.querySelectorAll('[data-box="1"]')[12].innerHTML = score13;
            }


            if (score14 == "29") {
                document.querySelectorAll('[data-box="1"]')[13].innerHTML = score14;
                document.querySelectorAll('[data-box="1"]')[13].className = 'title_exers2_box_color_green';
            } else if (score14 == '' || score14 == ' ') {
                document.querySelectorAll('[data-box="1"]')[13].className = 'title_exers2_box_color_red';
                document.querySelectorAll('[data-box="1"]')[13].innerHTML = '   ';
            }
            else {
                document.querySelectorAll('[data-box="1"]')[13].className = 'title_exers2_box_color_red';
                document.querySelectorAll('[data-box="1"]')[13].innerHTML = score14;
            }
            if (score15 == "3") {
                document.querySelectorAll('[data-box="1"]')[14].innerHTML = score15;
                document.querySelectorAll('[data-box="1"]')[14].className = 'title_exers2_box_color_green';
            } else if (score15 == '' || score15 == ' ') {
                document.querySelectorAll('[data-box="1"]')[14].className = 'title_exers2_box_color_red';
                document.querySelectorAll('[data-box="1"]')[14].innerHTML = '   ';
            }
            else {
                document.querySelectorAll('[data-box="1"]')[14].className = 'title_exers2_box_color_red';
                document.querySelectorAll('[data-box="1"]')[14].innerHTML = score15;
            }
            console.log(document.querySelectorAll('[data-box="1"]').length);

        }
    }
    if (six) {
        function numbers() {
            for (i = 0; i != document.querySelectorAll(".number").length; i = i + 1) {
                document.querySelectorAll(".number")[i].innerHTML = i + 1;
            }
        }
        numbers();
        let numberOfTasks = document.querySelectorAll(".task").length;


        let yourAnswers = [[[334] ], [[123] ], [[18] ], [[17] ], [[57]], [['01']], [[110]], [[21]], [[100]], [[66]], [[117625]], [[206550]], [['wzyx']], [[17]], [[952]]];
        document.querySelector('[data-button="1"]').addEventListener("click", score);
        function score() {
            count = 0;
            for (let i = 0; i < numberOfTasks; i++) {
                yourAnswers[i].push(document.querySelector(`[data-input="${i + 1}"]`).value);
                
            }
            console.log(yourAnswers);
            document.querySelector('main').remove();
            document.querySelector('body').className = "body_second_part";
            let newDiv = document.createElement("div");
            
            newDiv.className = 'title_exers';
            document.querySelector('body').appendChild(newDiv);
            let newDiv2 = document.createElement("div");
            newDiv2.className = 'title_exers2';
            document.querySelector('body').appendChild(newDiv2);
            for (let i = 0; i < 1; i++) {
                let newDiv = document.createElement("div");
                newDiv.className = 'title_exers2_upper_line';
                document.querySelector('.title_exers2').appendChild(newDiv);

            }
            for (let i = 0; i < 1; i++) {
                let newDiv = document.createElement("div");
                newDiv.className = 'title_exers2_lower_line';
                document.querySelector('.title_exers2').appendChild(newDiv);
            }
            let newDivNumbersSymbol = document.createElement("div");
            newDivNumbersSymbol.className = 'title_exers2_box';
            newDivNumbersSymbol.innerHTML = `<h3 style="color:#F9F7F7">№</h3>`;
            document.querySelector('.title_exers2_upper_line').appendChild(newDivNumbersSymbol);
            for (let i = 1; i < numberOfTasks + 1; i++) {
                let newDiv = document.createElement("div");
                newDiv.className = 'title_exers2_box';
                newDiv.innerHTML = `<h3 style="color:#F9F7F7">${i}</h3>`;
                document.querySelector('.title_exers2_upper_line').appendChild(newDiv);

            }
            let newDivAnswerWord = document.createElement('div');
            newDivAnswerWord.className = 'title_exers2_box';
            newDivAnswerWord.innerHTML = `ответы`;
            document.querySelector('.title_exers2_lower_line').appendChild(newDivAnswerWord);
            for (let i = 1; i < numberOfTasks + 1; i++) {
                let newDiv = document.createElement('div');
                newDiv.className = 'title_exers2_box_lower';
                newDiv.dataset.box = `${i}`;
                document.querySelector('.title_exers2_lower_line').appendChild(newDiv);
            }
            
        
            
            

            for (let i = 0; i < numberOfTasks; i++)
                if (yourAnswers[i][0] == yourAnswers[i][1]) {
                    document.querySelectorAll(`[data-box="${i+1}"]`)[0].innerHTML = yourAnswers[i][0];
                    document.querySelectorAll(`[data-box="${i+1}"]`)[0].className = 'title_exers2_box_color_green';
                    count++
                } else if (yourAnswers[i][1] == '' || yourAnswers[i][1] == ' ') {
                    document.querySelectorAll(`[data-box="${i+1}"]`)[0].className = 'title_exers2_box_color_red';
                    document.querySelectorAll(`[data-box="${i+1}"]`)[0].innerHTML = '   ';
                }
                else {
                    document.querySelectorAll(`[data-box="${i+1}"]`)[0].className = 'title_exers2_box_color_red';
                    document.querySelectorAll(`[data-box="${i+1}"]`)[0].innerHTML = yourAnswers[i][1];
                }
                if (count == 0) {
                    newDiv.innerHTML = `<h3 style="color:#F9F7F7">Вы решили правильно ${count} заданий</h3><p style="color:#F9F7F7">Попробуйте ещё раз</p>`;
                } else if (count == 1) {
    
                    newDiv.innerHTML = `<h3 style="color:#F9F7F7">Вы решили правильно ${count} задание</h3><p style="color:#F9F7F7">Вам стоит лучше готовится</p>`
                } else if(count <= 8 || count >=5){
                    newDiv.innerHTML = `<h3 style="color:#F9F7F7">Вы решили правильно ${count} задание</h3><p style="color:#F9F7F7">Неплохой результат, но можно добиться большего</p>`
                } else if(count <= 13 || count >=8){
                    newDiv.innerHTML = `<h3 style="color:#F9F7F7">Вы решили правильно ${count} задание</h3><p style="color:#F9F7F7">Отличный результат</p>`
                }  else if(count <= 15 || count >=13){
                    newDiv.innerHTML = `<h3 style="color:#F9F7F7">Вы решили правильно ${count} задание</h3><p style="color:#F9F7F7">Можно уверенно сказать, что ЕГЭ для вас не проблема</p>`
                }
                
                else {
                    {
                        newDiv.innerHTML = `<h3 style="color:#F9F7F7">Вы решили правильно ${count} задания</h3><p style="color:#F9F7F7">Вам стоит лучше готовится</p>`
                    }
    
                }
        }
    }
}
main();