let submitButton = document.querySelector("#submit");
let input = document.querySelector("input");
let header = document.querySelector("#question");
let start = document.querySelector("#start");
let content = document.querySelector("#content");
let images = document.querySelectorAll(".images");
let gone = document.querySelectorAll(".gone");
let message = document.querySelector("#message");
let mImg = document.querySelector("#mImg");
let mP = document.querySelector("#mP");
let back = document.querySelector("#back");
let state = 1;
let days = ["Our first official date :), I remember walking into your room with my heart rate going crazy. I liked you so much and I was so scared that I was gonna mess it up. We started watching the miracle in cell no 7 and we ate sushi together. We were both too scared to put our arms around each other during the movie and I remember thinking, 'does she want me to put my arm around her?' 'WHAT DO I DO' 'AAAAAAAA'. After we finished watching we got into your bed and we had our first kiss and our first cuddle. After that moment I was so relieved and I wanted to spend all my time with you. That summer I would walk to you as much as I could and everytime I came it felt like it went by in 2 seconds. We didn't do much together, but we were together which made it amazing.", "Our first time going outside together, we met at the subway and made our way to K-Town. We walked up and down that one street with all the restaurants and you couldn't pick a place after 15 minutes. I ended up picking and we had a HUGE meal, so big that your dress was stretching since you ate so much. You had put your leg on my leg like you always do, but this was the first time you had done that. I remembered thinking it was so sweet, but at the same time I didn't want to tell you that my leg was DYING since you were pushing my wallet into my leg. Although you can't see it in the photo, I know under that hand is an adorable gummy smile :)", "This photo wasn't on a particular day or time, but it reminds me of the longest span of time we went without seeing each other. I hearted this photo the second I took it since it captures your full beautiful smile. During that semester without seeing you, it felt like everyday away from you was longer and longer. After seeing you at the barber shop, it felt like I was meeting you again for the first time. It felt like I was remeeting someone, but I still knew them so well. I wasn't sure what to say or do, then you held my hand it all came back and I felt like I was back in your room on 10th ave in our own little bubble.", "This was on our picnic day, I wanted to take you to central park so we went to whole foods first and got a bunch of snacks, drinks, and food for us. We sat down with some squirrels eyeing our food, and we shared a picnic together. We enjoyed our food and each other's company, UNTIL a squirrel started to approach, then BOOM you jumped up with our food and started throwing donut bits for it to eat. We then spend the next 15 minutes chasing squirrels. This whole day was filled with fun and encapsulated the summer for me, having fun in the city without a care about anything else in the world.", "This photo was only a few weeks ago, but it is probably one of my favorite photos of you. This semester we can see eachother every other week, and that weekend was so much fun. We stayed up late watching friends together, we had a romantic dinner with some BUSSIN cheesecake, and we did some suspicious things in the shower. We had a snowball fight and watched as people fell victim to the brown soggy water. It felt like it went by in an instance, and soon it won't be gone in an instance since we will be living together. This photo reminds me of your kindness, your care, and how sweet you are. I'm so proud of you, and I can't wait to live with you this summer and to live with you after next semester. Thank you for being the most perfect woman in the universe, and for being the light at the end of the tunnel for me. Happy Birthday!"];

submitButton.onclick = function (event) {
  event.preventDefault();

  if (input.value == "02/19/2002") {
    header.innerHTML = "What is our cat's future name?"
    input.placeholder = "Name..."
    state = 2;
  }

  if ((state == 2 && input.value == "cous cous") || input.value == "a") {
    start.style.display = "none";
    start.style.height = "0";
    content.style.display = "block";
    content.style.height = "100vh";

    state == 3;
  }

  input.value = "";
}


for (let i = 0; i < images.length; i++) {
  images[i].onclick = function (event) {
    event.preventDefault();
    gone[0].style.display = "none";
    gone[1].style.display = "none";

    message.style.display = "flex";

    mImg.src = "images/1-" + (i + 1) + ".png";
    mP.innerHTML = days[i];

  }
}

back.onclick = function (event) {
  event.preventDefault();

  gone[0].style.display = "block";
  gone[1].style.display = "flex";

  message.style.display = "none";

}


