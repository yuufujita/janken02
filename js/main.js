// js、jQueryを記述する際はここに記載していく

/* 2023/05/13レビュー会メモ
----------------------------
// コメントに@paramなど書く
// ＋を書くとテキストが数値に
// promiseというオブジェクト
// リクエストアニメーションフレーム
---------------------------- */

/* plan.html（卒業制作でやりたいこと）
---------------------------- */

/* 課題途中の考え中メモなので残させてください
function selectAll() {
  month = $("[name=month]").val();
  let month = parseInt(month.value, 10);
  console.log(month, "選択した月");
  console.log(Number.isNaN(month), "選択した月の数値判定");
  period = $("[name=period]").val();
  objective = $("[name=objective]").val();
}
*/

//画面上部の選択項目（月、期間、目的）の初期値
let month = 0;
let period = 0;
let objective = 0;

//画面上部の選択項目（月）が変化した時
$("[name=month]").change(function () {
  month = $("[name=month]").val();
  period = $("[name=period]").val();
  objective = $("[name=objective]").val();
  let index = Math.floor(Math.random() + 0.09);
  console.log(index, "じゃんけん誘導の出現率");
  if (index === 1) {
    $(".modal-container02").addClass("active"); //9％の確率でじゃんけん誘導
  } else if (
    month == 01 ||
    month == 03 ||
    month == 04 ||
    month == 06 ||
    month == 08 ||
    month == 09 ||
    month == 11 ||
    month == 12
  ) {
    $(".modal-container01").addClass("active"); //該当月が0件ならモーダル表示
    $(".recommend-container").hide(); //前回検索結果を非表示
    $(".recommend").html(
      "ごめんなさい、選択された月は１件もありません。あなたの投稿をお待ちしています。"
    ); //該当月が0件の場合、モーダル閉じた後にも表示させておく
  } else if (
    month == 01 ||
    month == 03 ||
    month == 04 ||
    month == 06 ||
    month == 08 ||
    month == 09 ||
    month == 11 ||
    month == 12
  ) {
    $(".modal-container01").addClass("active"); //該当月が0件ならモーダル表示
    $(".modal-container02").addClass("active"); //10％の確率でじゃんけん誘導
    $(".recommend-container").hide(); //前回検索結果を非表示
    $(".recommend").html(
      "ごめんなさい、選択された月は１件もありません。あなたの投稿をお待ちしています。"
    ); //該当月が0件の場合、モーダル閉じた後にも表示させておく
  } else {
    $(".recommend-container").hide(); //前回検索結果を非表示
    $(".recommend").html("");
  } //前回検索結果を非表示
});

//画面上部の選択項目（期間）が変化した時
$("[name=period]").change(function () {
  month = $("[name=month]").val();
  period = $("[name=period]").val();
  objective = $("[name=objective]").val();
  $(".recommend-container").hide(); //前回検索結果を非表示
  $(".recommend").html(""); //前回検索結果を非表示
});

//画面上部の選択項目（目的）が変化した時
$("[name=objective]").change(function () {
  month = $("[name=month]").val();
  period = $("[name=period]").val();
  objective = $("[name=objective]").val();
  $(".recommend-container").hide(); //前回検索結果を非表示
  $(".recommend").html(""); //前回検索結果を非表示
});

//検索により該当項目があった場合に表示される内容
$(".left01").html("１人旅手軽気軽度");
$(".left02").html("勢いで出発可能度");
$(".left03").html("夜ごはん気楽度");
$(".left04").html("宿の人目気にならない度");
const right = ["☆☆☆☆☆", "★☆☆☆☆", "★★☆☆☆", "★★★☆☆", "★★★★☆", "★★★★★", "-"];

$(".search").on("click", function () {
  //コルテラルゴ＆河津桜
  if (month == 02 && period == 2 && objective == 1) {
    $(".recommend0221").show();
    $(".right01").html(right[3]);
    $(".right02").html(right[2]);
    $(".right03").html(right[5]);
    $(".right04").html(right[5]);
  } //コルテラルゴ＆河津桜
  else if (month == 02 && period == 2 && objective == 2) {
    $(".recommend0222").show();
    $(".right01").html(right[3]);
    $(".right02").html(right[2]);
    $(".right03").html(right[5]);
    $(".right04").html(right[5]);
  } //富士芝桜
  else if (month == 05 && period == 1 && objective == 2) {
    $(".recommend0512").show();
    $(".right01").html(right[5]);
    $(".right02").html(right[4]);
    $(".right03").html(right[6]);
    $(".right04").html(right[6]);
  } //結び家＆ラベンダー畑
  else if (month == 07 && period == 2 && objective == 2) {
    $(".recommend0722").show();
    $(".right01").html(right[3]);
    $(".right02").html(right[2]);
    $(".right03").html(right[4]);
    $(".right04").html(right[4]);
  } //曼珠沙華
  else if (month == 10 && period == 1 && objective == 2) {
    $(".recommend1012").show();
    $(".right01").html(right[5]);
    $(".right02").html(right[5]);
    $(".right03").html(right[6]);
    $(".right04").html(right[6]);
  } //該当なし
  else {
    $(".modal-container01").addClass("active");
    $(".recommend-container").hide(); //前回検索結果を非表示
    $(".recommend").html(
      "ごめんなさい、選択された組み合わせは1件もありません。あなたの投稿をお待ちしています。"
    ); //該当なしの場合、モーダル閉じた後にも表示させておく
  }
});

//モーダルを閉じる時
$(".modal-close").on("click", function () {
  $(".modal-container").removeClass("active");
});

// plan.htmlここまで　----------------------------

/* index.html（じゃんけんアプリ）
---------------------------- */

/* コニーちゃんとの最高戦歴を最下部に表示させる */
if (localStorage.getItem("result01")) {
  let result01 = localStorage.getItem("result01");
  $(".result01").html(result01);
  console.log(result01, "最高勝率");
} else {
  localStorage.setItem("result01", 0);
}

$(".game-img01").on("click", function () {
  /* 対戦相手を選択後に対戦相手の選択画面を非表示にし、戦績初期値としてを0を定義する */
  $(".chara-container").hide(1000);
  let match = 0;
  let win = 0;
  let lose = 0;
  let draw = 0;

  /* 対戦相手を選択後に対戦相手名を表示させる */
  let select;
  select = $(this).attr("id");
  console.log(select, "キャラクター");
  if (select === "s01") {
    $(".chara-set").html("対戦相手はコニーちゃんだよ");
  } else if (select === "s02") {
    $(".chara-set").html("対戦相手はサザエさんだよ");
  } else if (select === "s03") {
    $(".chara-set").html("対戦相手はドラえもんだよ");
  } else if (select === "s04") {
    $(".chara-set").html("対戦相手はバルタン星人だよ");
  } else if (select === "s05") {
    $(".chara-set").html("対戦相手はセーラーマーキュリーだよ");
  }

  /* 対戦相手のyoutube表示中に動画下部に表示する文字に適用するhtmlとcss */
  function gameSet0201() {
    $(".game-set02").html("対戦相手は何を出すかな？");
    $(".game-set02").css("color", "#000000");
    $(".game-set02").css("font-size", "100%");
    $(".game-set02").css("font-weight", "normal");
  }

  /* 対戦相手のyoutube終了後に動画下部に表示する文字に適用するcss */
  function gameset0202() {
    match++;
    console.log(match, "今回の対戦数");
    $(".game-set02").css("color", "#ff00ff");
    $(".game-set02").css("font-size", "130%");
    $(".game-set02").css("font-weight", "bold");
    $(".game-set02").addClass("is-active").dequeue();
  }

  /* 対戦結果を下部に表示させる */
  function resultAll() {
    let result = "あなたの対戦結果　" + win + "勝" + lose + "負" + draw + "分";
    console.log(result);
    $(".result").html(result);
    $(".result").css("color", "#800000");
    $(".result").css("font-size", "130%");
    $(".result").css("font-weight", "bold");
    $(".result").addClass("is-active").dequeue();
  }

  // 対戦相手がコニーちゃんの場合、コニーちゃんはランダムにグーチョキパー
  if (select === "s01") {
    $(".hand-select").on("click", function () {
      $(".result-connie").show();
      let item;
      item = $(this).attr("id");
      console.log(item, "自分の手");
      if (item === "i01") {
        $(".item-set").html("あなたはグーだね");
      } else if (item === "i02") {
        $(".item-set").html("あなたはチョキだね");
      } else if (item === "i03") {
        $(".item-set").html("あなたはパーだね");
      }
      let random = Math.floor(Math.random() * 3 + 1);
      console.log(random, "ランダムな数字の箱");
      if (select === "s01" && random === 1) {
        console.log("コニーちゃんグー");
        $(".game-set01").html(
          `<iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/q5pmq3SkBR4?start=17&end=32&autoplay=1&mute=1&playsinline=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>`
        );
        gameSet0201();
        $(".game-set02")
          .delay(12000)
          .queue(function () {
            if (select === "s01" && random === 1 && item === "i01") {
              draw++;
              $(".game-set02").html(
                "コニーちゃんはグー<br>あなたもグーだからコニーちゃんとあいこだよ"
              );
            } else if (select === "s01" && random === 1 && item === "i02") {
              lose++;
              $(".game-set02").html(
                "コニーちゃんはグー<br>あなたはチョキだからあなたの負けだよ"
              );
            } else if (select === "s01" && random === 1 && item === "i03") {
              win++;
              $(".game-set02").html(
                "コニーちゃんはグー<br>あなたはパーだからあなたの勝ちだよ"
              );
            }
            gameset0202();
          });
      } else if (select === "s01" && random === 2) {
        console.log("コニーちゃんチョキ");
        $(".game-set01").html(
          `<iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/q5pmq3SkBR4?end=15&autoplay=1&mute=1&playsinline=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>`
        );
        gameSet0201();
        $(".game-set02")
          .delay(12000)
          .queue(function () {
            if (select === "s01" && random === 2 && item === "i01") {
              win++;
              $(".game-set02").html(
                "コニーちゃんはチョキ<br>あなたはグーだからあなたの勝ちだよ"
              );
            } else if (select === "s01" && random === 2 && item === "i02") {
              draw++;
              $(".game-set02").html(
                "コニーちゃんはチョキ<br>あなたもチョキだからコニーちゃんとあいこだよ"
              );
            } else if (select === "s01" && random === 2 && item === "i03") {
              lose++;
              $(".game-set02").html(
                "コニーちゃんはチョキ<br>あなたはパーだからあなたの負けだよ"
              );
            }
            gameset0202();
          });
      } else if (select === "s01" && random === 3) {
        console.log("コニーちゃんパー");
        $(".game-set01").html(
          `<iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/q5pmq3SkBR4?start=34&autoplay=1&mute=1&playsinline=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>`
        );
        gameSet0201();
        $(".game-set02")
          .delay(12000)
          .queue(function () {
            if (select === "s01" && random === 3 && item === "i01") {
              lose++;
              $(".game-set02").html(
                "コニーちゃんはパー<br>あなたはグーだからあなたの負けだよ"
              );
            } else if (select === "s01" && random === 3 && item === "i02") {
              win++;
              $(".game-set02").html(
                "コニーちゃんはパー<br>あなたはチョキだからあなたの勝ちだよ"
              );
            } else if (select === "s01" && random === 3 && item === "i03") {
              draw++;
              $(".game-set02").html(
                "コニーちゃんはパー<br>あなたはパーだからコニーちゃんとあいこだよ"
              );
            }
            gameset0202();
          });
      }
      $(".result") //コニーちゃんとの対戦のみ5戦以上の最高勝率をローカルストレージに保存
        .delay(13000)
        .queue(function () {
          resultAll();
          let resultConnie = Math.round((win / match) * 100);
          console.log(resultConnie, "勝率");
          if (match >= 5) {
            let result01 = localStorage.getItem("result01");
            if (result01 <= resultConnie) {
              $(".result01")
                .delay(1000)
                .queue(function () {
                  localStorage.setItem("result01", resultConnie);
                  $(".result01").html(resultConnie);
                  $(".result01").css("color", "#800000");
                  $(".result01").css("font-size", "130%");
                  $(".result01").css("font-weight", "bold");
                  $(".result01").addClass("is-active").dequeue();
                });
            }
          }
        });
    });
  } // 対戦相手がサザエさんの場合、サザエさんには絶対に勝てない
  else if (select === "s02") {
    $(".hand-select").on("click", function () {
      let item;
      item = $(this).attr("id");
      console.log(item, "自分の手");
      if (item === "i01") {
        $(".item-set").html("あなたはグーだね");
      } else if (item === "i02") {
        $(".item-set").html("あなたはチョキだね");
      } else if (item === "i03") {
        $(".item-set").html("あなたはパーだね");
      }

      if (select === "s02" && item === "i02") {
        console.log("サザエさんグー");
        lose++;
        $(".game-set01").html(
          `<iframe
        width="560"
        height="315" 
        src="https://www.youtube.com/embed/xBXynSsz_bM?autoplay=1&mute=1&playsinline=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        ></iframe>`
        );
        gameSet0201();
        $(".game-set02")
          .delay(5000)
          .queue(function () {
            $(".game-set02").html(
              "サザエさんはグー<br>あなたはチョキだからあなたの負けだよ"
            );
            gameset0202();
          });
      } else if (select === "s02" && item === "i03") {
        console.log("サザエさんチョキ");
        lose++;
        $(".game-set01").html(
          `<iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/MIGgLcW4LMw?start=23&autoplay=1&mute=1&playsinline=1" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen
        ></iframe>`
        );
        gameSet0201();
        $(".game-set02")
          .delay(6000)
          .queue(function () {
            $(".game-set02").html(
              "サザエさんはチョキ<br>あなたはパーだからあなたの負けだよ"
            );
            gameset0202();
          });
      } else if (select === "s02" && item === "i01") {
        console.log("サザエさんパー");
        lose++;
        $(".game-set01").html(
          `<iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/8DYYCnzw0ms?start=23&autoplay=1&mute=1&playsinline=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        ></iframe>`
        );
        gameSet0201();
        $(".game-set02")
          .delay(6000)
          .queue(function () {
            $(".game-set02").html(
              "サザエさんはパー<br>あなたはグーだからあなたの負けだよ"
            );
            gameset0202();
          });
      }
      $(".result")
        .delay(7000)
        .queue(function () {
          resultAll();
        });
    });
  } // 対戦相手がドラえもんの場合、ドラえもんはグーのみ
  else if (select === "s03") {
    $(".hand-select").on("click", function () {
      let item;
      item = $(this).attr("id");
      console.log(item, "自分の手");
      if (item === "i01") {
        $(".item-set").html("あなたはグーだね");
      } else if (item === "i02") {
        $(".item-set").html("あなたはチョキだね");
      } else if (item === "i03") {
        $(".item-set").html("あなたはパーだね");
      }
      $(".game-set01").html(
        `<iframe width="560"
        height="315"
        src="https://www.youtube.com/embed/AvZoMJrFqeU?end=11&autoplay=1&mute=1&playsinline=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        ></iframe>`
      );
      gameSet0201();
      $(".game-set02")
        .delay(11000)
        .queue(function () {
          if (select === "s03" && item === "i01") {
            draw++;
            $(".game-set02").html(
              "ドラえもんはグー<br>あなたはグーだからドラえもんとあいこだよ"
            );
          } else if (select === "s03" && item === "i02") {
            lose++;
            $(".game-set02").html(
              "ドラえもんはグー<br>あなたはチョキだからあなたの負けだよ"
            );
          } else if (select === "s03" && item === "i03") {
            win++;
            $(".game-set02").html(
              "ドラえもんはグー<br>あなたはパーだからあなたの勝ちだよ"
            );
          }
          gameset0202();
        });
      $(".result")
        .delay(12000)
        .queue(function () {
          resultAll();
        });
    });
  } // 対戦相手がバルタン星人の場合、バルタン星人はチョキのみ
  else if (select === "s04") {
    $(".hand-select").on("click", function () {
      let item;
      item = $(this).attr("id");
      console.log(item, "自分の手");
      if (item === "i01") {
        $(".item-set").html("あなたはグーだね");
      } else if (item === "i02") {
        $(".item-set").html("あなたはチョキだね");
      } else if (item === "i03") {
        $(".item-set").html("あなたはパーだね");
      }
      $(".game-set01").html(
        `<iframe width="560"
        height="315"
        src="https://www.youtube.com/embed/zCzitW8RZ90?start=252&end=255&autoplay=1&mute=1&playsinline=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        ></iframe>`
      );
      gameSet0201();
      $(".game-set02")
        .delay(4000)
        .queue(function () {
          if (select === "s04" && item === "i01") {
            win++;
            $(".game-set02").html(
              "バルタン星人はチョキ<br>あなたはグーだからあなたの勝ちだよ"
            );
          } else if (select === "s04" && item === "i02") {
            draw++;
            $(".game-set02").html(
              "バルタン星人はチョキ<br>あなたはチョキだからバルタン星人とあいこだよ"
            );
          } else if (select === "s04" && item === "i03") {
            lose++;
            $(".game-set02").html(
              "バルタン星人はチョキ<br>あなたはパーだからあなたの負けだよ"
            );
          }
          gameset0202();
        });
      $(".result")
        .delay(5000)
        .queue(function () {
          resultAll();
        });
    });
  } // 対戦相手がセーラーマーキュリーの場合、セーラーマーキュリーはパーのみ
  else if (select === "s05") {
    $(".hand-select").on("click", function () {
      let item;
      item = $(this).attr("id");
      console.log(item, "自分の手");
      if (item === "i01") {
        $(".item-set").html("あなたはグーだね");
      } else if (item === "i02") {
        $(".item-set").html("あなたはチョキだね");
      } else if (item === "i03") {
        $(".item-set").html("あなたはパーだね");
      }
      $(".game-set01").html(
        `<iframe width="560"
        height="315"
        src="https://www.youtube.com/embed/Z1T5h285S34?start=9&autoplay=1&mute=1&playsinline=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        ></iframe>`
      );
      gameSet0201();
      $(".game-set02")
        .delay(5000)
        .queue(function () {
          if (select === "s05" && item === "i01") {
            lose++;
            $(".game-set02").html(
              "マーキュリーはパー<br>あなたはグーだからあなたの負けだよ"
            );
          } else if (select === "s05" && item === "i02") {
            win++;
            $(".game-set02").html(
              "マーキュリーはパー<br>あなたはチョキだからあなたの勝ちだよ"
            );
          } else if (select === "s05" && item === "i03") {
            draw++;
            $(".game-set02").html(
              "マーキュリーはパー<br>あなたはパーだからマーキュリーとあいこだよ"
            );
          }
          gameset0202();
        });
      $(".result")
        .delay(6000)
        .queue(function () {
          resultAll();
        });
    });
  }
});
