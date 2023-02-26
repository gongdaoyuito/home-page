// //domの取得
// const ul = document.getElementById("users");
// const btn = document.getElementById("btn");
// const translate = document.getElementById("translate");
// const input = document.getElementById("translate_text");
// //async(アシンク,エーシンク)をつけると非同期にできる。
// //通信のような時間のかかる処理は非同期にする

// btn.addEventListener("click", async function() {
//     var translate_select = document.getElementById("translate_select");
//     var language_num = translate_select.selectedIndex;
//     var language_str = translate_select.options[language_num].value;
//     console.log(input.value);

//     if (language_str == "en") {
//         var url = "https://script.google.com/macros/s/AKfycbz6B-xGhsJzMqjCderfQPSqyCE_cJKIxtbR-uIJ2otiVh1UAhByID_XMMSFU5xgqnwjzw/exec?text=" + input.value + "&source=en&target=ja";
//         var res = await fetch(url);
//         console.log(users);
//         //awaitをつけてjsonメソッドを実行するとjsonデータを取得できる
//         var users = await res.json();

//         //DOMの作成
//         const div = document.createElement("div");
//         //textContentの中にタグを含めたい場合はinnerHTMLを使う
//         div.innerHTML = `翻訳後:${users.text}`;
//         ul.appendChild(div);
//     } else {
//         var url = "https://script.google.com/macros/s/AKfycbz6B-xGhsJzMqjCderfQPSqyCE_cJKIxtbR-uIJ2otiVh1UAhByID_XMMSFU5xgqnwjzw/exec?text=" + input.value + "&source=ja&target=en";
//         var res = await fetch(url);
//         //awaitをつけてjsonメソッドを実行するとjsonデータを取得できる
//         var users = await res.json();
//         console.log(users);

//         //DOMの作成
//         const div = document.createElement("div");
//         //textContentの中にタグを含めたい場合はinnerHTMLを使う
//         div.innerHTML = `翻訳後:${users.text}`;
//         ul.appendChild(div);
//     }
// });

const btn = document.querySelector("#modeChange");

// チェックした時の挙動
btn.addEventListener("change", () => {
    if (btn.checked == true) {
        // daimeiクラスの要素を取得
        const daimeiElements = document.querySelectorAll(".daimei");

        // 各要素に対して処理を行う
        daimeiElements.forEach((element) => {
        // lang属性がjaの場合、非表示にする
        if (element.getAttribute("lang") === "ja") {
            element.style.display = "none";
        }
        // lang属性がenの場合、表示する
        else if (element.getAttribute("lang") === "en") {
            element.style.display = "block";
        }
        });
        const setumei1Elements = document.querySelectorAll(".setumei1");

        // 各要素に対して処理を行う
        setumei1Elements.forEach((element) => {
        // lang属性がjaの場合、非表示にする
        if (element.getAttribute("lang") === "ja") {
            element.style.display = "none";
        }
        // lang属性がenの場合、表示する
        else if (element.getAttribute("lang") === "en") {
            element.style.display = "block";
        }
        });
        const setumei2Elements = document.querySelectorAll(".setumei2");

        // 各要素に対して処理を行う
        setumei2Elements.forEach((element) => {
        // lang属性がjaの場合、非表示にする
        if (element.getAttribute("lang") === "ja") {
            element.style.display = "none";
        }
        // lang属性がenの場合、表示する
        else if (element.getAttribute("lang") === "en") {
            element.style.display = "block";
        }
        });
        const buttonElements = document.querySelectorAll(".button");

        // 各要素に対して処理を行う
        buttonElements.forEach((element) => {
        // lang属性がjaの場合、非表示にする
        if (element.getAttribute("lang") === "ja") {
            element.style.display = "none";
        }
        // lang属性がenの場合、表示する
        else if (element.getAttribute("lang") === "en") {
            element.style.display = "block";
        }
        });
    } else {
        // daimeiクラスの要素を取得
        const daimeiElements = document.querySelectorAll(".daimei");

        // 各要素に対して処理を行う
        daimeiElements.forEach((element) => {
        // lang属性がjaの場合、非表示にする
        if (element.getAttribute("lang") === "en") {
            element.style.display = "none";
        }
        // lang属性がenの場合、表示する
        else if (element.getAttribute("lang") === "ja") {
            element.style.display = "block";
        }
        });
        const setumei1Elements = document.querySelectorAll(".setumei1");

        // 各要素に対して処理を行う
        setumei1Elements.forEach((element) => {
        // lang属性がjaの場合、非表示にする
        if (element.getAttribute("lang") === "en") {
            element.style.display = "none";
        }
        // lang属性がenの場合、表示する
        else if (element.getAttribute("lang") === "ja") {
            element.style.display = "block";
        }
        });
        const setumei2Elements = document.querySelectorAll(".setumei2");

        // 各要素に対して処理を行う
        setumei2Elements.forEach((element) => {
        // lang属性がjaの場合、非表示にする
        if (element.getAttribute("lang") === "en") {
            element.style.display = "none";
        }
        // lang属性がenの場合、表示する
        else if (element.getAttribute("lang") === "ja") {
            element.style.display = "block";
        }
        });
        const buttonElements = document.querySelectorAll(".button");

        // 各要素に対して処理を行う
        buttonElements.forEach((element) => {
        // lang属性がjaの場合、非表示にする
        if (element.getAttribute("lang") === "en") {
            element.style.display = "none";
        }
        // lang属性がenの場合、表示する
        else if (element.getAttribute("lang") === "ja") {
            element.style.display = "block";
        }
        });
    }
});
