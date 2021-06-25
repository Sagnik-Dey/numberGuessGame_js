const numberTxt = document.querySelector("#numberTxt");
const submitBtn = document.querySelector("#submit");
const output = document.querySelector("#result");

submitBtn.addEventListener("click", checkNumber);

let randomNum = Math.ceil(Math.random()*(49))
let count = 1;

function checkNumber(event)
{
    event.preventDefault();

    let originalNum = randomNum;
    let num = numberTxt.value;

    if (num == "")
    {
        output.innerHTML = `
            <h3 style="color: red;">Enter a number to check</h3>
        `;
    }
    else
    {
        num = Number(num);
        let result = check(originalNum, num);

        if (result == 0)
        {
            output.innerHTML = `
                <h3 class="right">That's Right</h3>
                <h4 style="text=align: center; color: #fff">Congratulations ! You take ${count} guesses to win<h4>
                <input type="button" value="Replay" onclick=replay()>
            `;
        submitBtn.setAttribute("disabled", null)
        }
        else if (result == 1)
        {
            output.innerHTML = `
                <h3 class="wrong">That's Wrong</h3>
                <h4 style="text=align: center; color: #fff">Your number is greater than the original number<h4>
            `;
            count++;
        }
        else if (result == -1)
        {
            output.innerHTML = `
            <h3 class="wrong">That's Wrong</h3>
            <h4 style="text=align: center; color: #fff">Your number is less than the original number<h4>
            `;
            count++;
        }
        numberTxt.value = "";
    }
}

function check(originalNum, num)
{
    if (num > originalNum)
    {
        return 1
    }
    else if (num < originalNum)
    {
        return -1
    }
    else
    {
        return 0
    }
}

function replay(event)
{
    randomNum = Math.ceil(Math.random()*(49))
    submitBtn.removeAttribute("disabled")
    numberTxt.value = "";
    output.innerHTML = `<h3>Result will be shown here</h3>`;
    count = 1;
}