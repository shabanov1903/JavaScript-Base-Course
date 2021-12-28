"use strict";

let game = {
    counter: 0,
    score: 0,
    run() {
        this.counter = 0;
        this.score = 0;
        while (true)
        {
            this.questionPrinter(this.counter);
            this.answerParser(this.counter);
            if(this.showResults(this.counter)) break;
        }
    },
    questionPrinter(index) {
        console.clear();
        console.log(`Вопрос ${index + 1}: ${questions[index]._question}`);
        questions[index]._answers.forEach((element, i) => {
            console.log((i + 1) + ". " + element)
        });
    },
    answerParser(index) {
        while (true)
        {
            var answerNumbers = [1, 2, 3, 4];
            var answer = prompt("Введите номер варианта ответа (1, 2, 3 или 4)");
            if (answer == null)
            {
                this.showResults(questions.length);
                this.counter = questions.length + 1;
                break;
            }
            if (answerNumbers.includes(+answer))
            {
                if (+answer == questions[index]._right)
                {
                    this.score++;
                    this.counter++;
                    break;
                }
                else
                {
                    this.counter++;
                    break;
                }
            }
            else
            {
                alert("Синтаксическая ошибка: вариант ответа введён некорректно. Повторите попытку.");
                continue;
            }
        }
    },
    showResults(index) {
        if (this.counter > questions.length) return true;
        if (index != questions.length) return false;
        else
        {
            alert(`Игра завершена! Текущий счёт: ${this.score} из ${questions.length}`);
        }
        while (true)
        {
            var answer = prompt("Чтобы сыграть ещё раз введите 'Yes', нажатие 'Отмена' приведет к окончанию работы программы");
            if (answer == null) return true;
            else if (answer == 'Yes')
            {
                this.counter = 0;
                this.score = 0;
                return false;
            }
            else continue;
        }
    }
}
