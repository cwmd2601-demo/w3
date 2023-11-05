
    document.querySelector('#btn').addEventListener('click', () => {
        alert("Hello");
        document.querySelector('#btn').innerText = "Hello World";
        document.querySelector('#btn').style.color = "red";
        document.querySelector('.myClass').classList.add("highlight");
    })
    