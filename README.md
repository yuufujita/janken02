# janken02
じゃんけん02
# 課題2 Carless travel　（じゃんけんアプリ.リッチver）
## ①課題内容（どんな作品か）
- 卒業制作で作り上げたい「自動車運転なしの女性1人旅を気軽で手軽なものにする」実現手段の駆け出し版です。
- 「月」「期間」「目的」の組み合わせで旅がレコメンドされます。（現在は私の旅の記録の一部しかないので5件のみです。）
- レコメンドと同時に行き道も表示されます。（bing mapの鉄道モードは使えないことがわかったので、今は車のルートが出てしまいます…。）
- 9％（私の誕生月、どうでもいい情報っすね）の確率で、前回作成のじゃんけんアプリへの誘導モーダルが表示されます。

## ②工夫した点・こだわった点
- 自分の思いのままに作りたいものを作りました。皆さんから「こうなったらもっと旅が気軽で手軽になると思うよ」みたいな率直なご意見を頂きたいです。
- ようやく森田先生の仰ってた「出現率自由に調整できる」の意味がわかりました。→ math.floor(math.random + n )、0 < n < 1
- モーダルを取り入れることや、配列とbing mapにより出発地（現在地）から到達地の行き道を表示させることができて嬉しかったです。
- 配列により、★5点評価の表記も楽になりました。（1ヶ月前の自分ならhtmlに全部書いてました。）
- 前回提出時点ではできなかった（その後、金曜夜にできた）、じゃんけんの過去最大勝率（5戦以上）をlocal storageに自動保存するようにしています。

## ③難しかった点・次回トライしたいこと(又は機能)
- returnの使い方が今１つ理解できません。
- firebaseがわかるようになったら、ユーザー投稿機能を取り入れてみたいです。同期の皆さんがハマっている「サウナイキタイ」の「1人旅行きたい」版を作りたいのです。
- jsonがわかるようになったら、データ型も考えてみたいです。

## ④質問・疑問・感想、シェアしたいこと等なんでも
- [質問]
- 今回の課題提出内容において、returnを使える箇所があるなら、ご教示いただきたいです。
