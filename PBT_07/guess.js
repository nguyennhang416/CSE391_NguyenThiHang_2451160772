// guess.js — Bài B3: game đoán số trên browser using prompt()/alert()
(function(){
  function play() {
    const answer = Math.floor(Math.random()*100) + 1;
    const guesses = new Set();
    let attempts = 0;
    const maxAttempts = 7;

    while(attempts < maxAttempts) {
      let input = prompt(`Lần ${attempts+1}/${maxAttempts} - Nhập số (1-100):`);
      if (input === null) { alert('Bạn đã hủy trò chơi'); return; }
      input = input.trim();
      const num = Number(input);
      if (!Number.isInteger(num) || num < 1 || num > 100) { alert('Vui lòng nhập số nguyên 1-100'); continue; }
      if (guesses.has(num)) { alert('Bạn đã đoán số này rồi!'); continue; }
      guesses.add(num);
      attempts++;
      if (num === answer) { alert(`Đúng rồi! Bạn đoán đúng sau ${attempts} lần.`); return; }
      if (num < answer) alert('Cao hơn'); else alert('Thấp hơn');
    }
    alert(`Hết lượt! Đáp án là ${answer}`);
  }

  if (typeof window !== 'undefined') {
    window.playGuessNumber = play;
  }
})();
