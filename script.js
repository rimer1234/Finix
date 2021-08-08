var answer_selected = 0;
var answer_correct = 0;

function startquiz()
{
    const c0 = document.querySelector('.card0');
    const c1 = document.querySelector('.card1');
    c0.classList.add("card0-back");
    c1.classList.add("card1-top");
    c1.classList.remove("card1-back");
    c0.classList.remove("card0-top");
}


function button1()
{
        if (answer_selected == 1)
        {
        /* Card 1 should go back and card 2 should come front.*/
            const c1 = document.querySelector('.card1');
            const c2 = document.querySelector('.card2');
            c1.classList.add("card1-back");
            c2.classList.add("card2-top");
            c2.classList.remove("card2-back");
            c1.classList.remove("card1-top");
            move();
            answer_selected = 0;
        }
        else
        {
        	window.alert("Please select an answer.")
        }
};
    
function button2()
{
    if (answer_selected == 1)
    {
        /* Card 2 should go back and card 3 should come front.*/
        const c2 = document.querySelector('.card2');
        const c3 = document.querySelector('.card3');
        c2.classList.add("card2-back");
        c3.classList.add("card3-top");
        c3.classList.remove("card3-back");
        c2.classList.remove("card2-top");
        move();
        answer_selected = 0;
    }
    else
    {
        	window.alert("Please select an answer.")
    }
};
    
    function button3()
    {
        if (answer_selected == 1)
        {
            /* Card 3 should go back and card 4 should come front.*/
            const c4 = document.querySelector('.card4');
            const c3 = document.querySelector('.card3');
            c4.classList.add("card4-top");
            c3.classList.add("card3-back");
            c4.classList.remove("card4-back");
            c3.classList.remove("card3-top");
            move();
            answer_selected = 0;
        }
        else
        {
        	window.alert("Please select an answer.")
        }
    };
    
    function button4()
    {
        if (answer_selected == 1)
        {
            /* Card 4 should go back and card 5 should come front.*/
            const c5 = document.querySelector('.card5');
            const c4 = document.querySelector('.card4');
            c5.classList.add("card5-top");
            c4.classList.add("card4-back");
            c5.classList.remove("card5-back");
            c4.classList.remove("card4-top");
            move();
            answer_selected = 0;
        }
        else
        {
        	window.alert("Please select an answer.")
        }
    };

    function button5()
    {
        if (answer_selected == 1)
        {
            /* Card 4 should go back and card 5 should come front.*/
            const c5 = document.querySelector('.card5');
            const c6 = document.querySelector('.card6');
            c6.classList.add("card6-top");
            c5.classList.add("card5-back");
            c6.classList.remove("card6-back");
            c5.classList.remove("card5-top");
            move();

            var elem = document.getElementById("score");
            elem.innerHTML = "Your score: " + score + "!";
            answer_selected = 0;
        }
        else
        {
        	window.alert("Please select an answer.")
        }
    };

    function button6()
    {
        window.location.href="main.html";
    }

    let score = 0;
    let complete = 0;

    function q1_correct()
    {
        q1_change_colors();
        answer_correct = 1;
    }

    function q1_change_colors()
    {
        const b1 = document.getElementById("q1_a1");
        const b2 = document.getElementById("q1_a2")
        const b3 = document.getElementById("q1_a3")
        const b4 = document.getElementById("q1_a4")

        b1.style.backgroundColor = "#c6ff90";
        b2.style.backgroundColor = "#E97451";
        b3.style.backgroundColor = "#E97451";
        b4.style.backgroundColor = "#E97451";
        answer_selected = 1;
    }

    function q2_correct()
    {
        q2_change_colors();
        answer_correct = 1;
    }

    function q2_change_colors()
    {
        const b1 = document.getElementById("q2_a1");
        const b2 = document.getElementById("q2_a2")
        const b3 = document.getElementById("q2_a3")
        const b4 = document.getElementById("q2_a4")

        b1.style.backgroundColor = "#E97451";
        b2.style.backgroundColor = "#c6ff90";
        b3.style.backgroundColor = "#E97451";
        b4.style.backgroundColor = "#E97451";
        answer_selected = 1;
    }

    function q3_correct()
    {
        q3_change_colors();
        answer_correct = 1;
    }

    function q3_change_colors()
    {
        const b1 = document.getElementById("q3_a1");
        const b2 = document.getElementById("q3_a2")
        const b3 = document.getElementById("q3_a3")
        const b4 = document.getElementById("q3_a4")

        b1.style.backgroundColor = "#E97451";
        b2.style.backgroundColor = "#E97451";
        b3.style.backgroundColor = "#c6ff90";
        b4.style.backgroundColor = "#E97451";
        answer_selected = 1;
    }

    function q4_correct()
    {
        q4_change_colors();
        answer_correct = 1;
    }

    function q4_change_colors()
    {
        const b1 = document.getElementById("q4_a1");
        const b2 = document.getElementById("q4_a2")
        const b3 = document.getElementById("q4_a3")
        const b4 = document.getElementById("q4_a4")

        b1.style.backgroundColor = "#c6ff90";
        b2.style.backgroundColor = "#E97451";
        b3.style.backgroundColor = "#E97451";
        b4.style.backgroundColor = "#E97451";
        answer_selected = 1;
    }

    function q5_correct()
    {
        q5_change_colors();
        answer_correct = 1;
    }

    function q5_change_colors()
    {
        const b1 = document.getElementById("q5_a1");
        const b2 = document.getElementById("q5_a2")
        const b3 = document.getElementById("q5_a3")
        const b4 = document.getElementById("q5_a4")

        b1.style.backgroundColor = "#c6ff90";
        b2.style.backgroundColor = "#E97451";
        b3.style.backgroundColor = "#E97451";
        b4.style.backgroundColor = "#E97451";
        answer_selected = 1;
    }

    function move()
    {
        if (answer_correct == 1)
            score += 20;

        complete += 20;
        answer_correct = 0;
        var elem = document.getElementById("done");
        elem.style.width = complete + "%";
        elem.innerHTML = " " + complete + "% ";
    }