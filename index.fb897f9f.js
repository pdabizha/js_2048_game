const e=new class{constructor(e=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]){this.initialState=e,this.board=e.map(e=>[...e]),this.score=0,this.isGameStarted=!1}move(e){let t="left"===e||"right"===e,s="right"===e||"down"===e,r=t?this.board:this.transpose(this.board);r=r.map(e=>{let t=(s?e.slice().reverse():e).filter(e=>0!==e),r=this.joinValues(t,e.length);return s?r.reverse():r}),this.board=t?r:this.transpose(r)}moveLeft(){this.move("left")}moveRight(){this.move("right")}moveUp(){this.move("up")}moveDown(){this.move("down")}getScore(){return this.score}getState(){return this.board.map(e=>[...e])}getStatus(){return this.isGameStarted?this.board.some(e=>e.some(e=>2048===e))?"win":this.checkAvailableMoves()?"playing":"lose":"idle"}start(){let e=this.getRandomCell(2),t=this.addNewCell(e);return this.isGameStarted=!0,t}restart(){this.board=this.initialState.map(e=>[...e]),this.score=0,this.isGameStarted=!1}getRandomCell(e){let t=this.getState(),s=[];for(let e=0;e<t.length;e++)for(let r=0;r<t[e].length;r++)0===t[e][r]&&s.push({row:e,col:r});let r=Math.min(e,s.length),o=[];for(;o.length<r;){let e=Math.floor(Math.random()*s.length);o.push(s[e]),s.splice(e,1)}return o}addNewCell(e){let t=[];for(let s of e){let e=s.row,r=s.col;this.board[e][r]=.9>Math.random()?2:4,t.push({row:e,col:r,value:this.board[e][r]})}return t}checkAvailableMoves(){let e=this.board.some(e=>e.some(e=>0===e)),t=this.board.some(e=>e.some((t,s)=>t===e[s+1])),s=this.transpose(this.board).some(e=>e.some((t,s)=>t===e[s+1]));return e||t||s}joinValues(e,t){let s=[],r=0;for(let t=0;t<e.length;t++)if(e[t]===e[t+1]){let o=2*e[t];s.push(o),r+=o,t++}else s.push(e[t]);for(;s.length<t;)s.push(0);return this.score+=r,s}isBoardChanged(e,t){for(let s=0;s<e.length;s++)for(let r=0;r<e[s].length;r++)if(e[s][r]!==t[s][r])return!0;return!1}transpose(e){return e[0].map((t,s)=>e.map(e=>e[s]))}},t=Array.from(document.querySelectorAll(".field-row")).map(e=>Array.from(e.querySelectorAll(".field-cell"))),s=document.querySelector(".message-lose"),r=document.querySelector(".message-win");document.addEventListener("keydown",o=>{let a=e.getState();if("playing"===e.getStatus()){switch(o.key){case"ArrowUp":e.moveUp();break;case"ArrowDown":e.moveDown();break;case"ArrowLeft":e.moveLeft();break;case"ArrowRight":e.moveRight()}if(e.isBoardChanged(a,e.board)){let s=e.addNewCell(e.getRandomCell(1));l(e,t,"new",s)}"win"===e.getStatus()&&r.classList.remove("hidden"),"lose"===e.getStatus()&&s.classList.remove("hidden")}});const o=document.querySelector(".message-start"),a=document.querySelector(".controls .button");function l(e,t,s=null,r=[]){e.getState().forEach((e,o)=>{e.forEach((e,a)=>{let l=t[o][a];l.textContent=0===e?"":e,l.className="field-cell",0!==e&&l.classList.add(`field-cell--${e}`),"new"===s&&r.some(e=>e.row===o&&e.col===a)&&l.classList.add("field-cell--new"),l.addEventListener("animationend",()=>{l.classList.remove("field-cell--new","field-cell--move")},{once:!0})})});let o=e.getScore();document.querySelector(".game-score").textContent=o}a.addEventListener("click",()=>{if(a.classList.contains("start")){let s=e.start();l(e,t,"new",s),o.classList.add("hidden"),a.textContent="Restart"}a.classList.contains("restart")&&(e.restart(),l(e,t),o.classList.remove("hidden"),r.classList.add("hidden"),s.classList.add("hidden"),a.textContent="Start"),a.classList.toggle("start"),a.classList.toggle("restart")});
//# sourceMappingURL=index.fb897f9f.js.map
