// btn
// const btnHome = document.querySelector(".go-home");
// const btnPlayList = document.querySelector(".play-list");
const btnPlay = document.querySelector(".play-song");
const btnBack = document.querySelector(".back");
const btnForward = document.querySelector(".forward");
const btnRandom = document.querySelector(".random");
//
const audio = document.querySelector("#audio");
// const progress = document.querySelector(".progress");
// const playListBox = document.querySelector(".playlist-box");
const songs = document.querySelector(".list-song");
// const thumbnailSong = document.querySelector(".thumbnail-song img");
const nameSong = document.querySelector(".son-name");
const lyricSong = document.querySelector(".eon-name");

// const author = document.querySelector(".info-song .author");
const timeSong = document.querySelector(".duration-time");
const musicContent = document.querySelector(".music-content");
// const progressBar = document.querySelector(".progress-bar");
const currentTimeDisplay = document.querySelector(".current-time");
const nameSon = document.querySelector(".son-name");

const loop_music = document.querySelector(".loop");
var lyric = [
  "[Verse] Falling in quickly Tell me you feel something too Caught in the moment I'm lost here without you [Pre-Chorus] Tangled up in your web (Web) Holding on to every word you said I'm ready, I know I'm hoping it shows (It shows) Would you say the same? We're falling from outer space [Chorus] We're moving like a full pace supernova We're making all the headlines now And I just wanna seize the moment 'Cause we won't ever slow it down Kissing in the rain Taste just like champagne Balling everyday We're falling from outer space Hoping time won't change Got love on my brain Would you say the same? We're falling from outer space [Drop] We're falling from outer space We're falling from outer space We're falling from outer space We're falling from outer space [Verse] Falling in quickly Tell me you feel something too Caught in the moment I'm lost here without you [Pre-Chorus] Tangled up in your web (Web) Holding on to every word you said I'm ready, I know I'm hoping it shows (It shows) Would you say the same? We're falling from outer space [Chorus] We're moving like a full pace supernova We're making all the headlines now And I just wanna seize the moment 'Cause we won't ever slow it down Kissing in the rain Taste just like champagne Balling everyday We're falling from outer space Hoping time won't change Got love on my brain Would you say the same? We're falling from outer space [Drop] We're falling from outer space We're falling from outer space We're falling from outer space We're falling from outer space",
  "Baby, take my hand I want you to be my husband 'Cause you're my Iron Man And I love you 3000 Baby, take a chance 'Cause I want this to be something Straight out of a Hollywood movie I see you standing there In your hulk outerwear And all I can think Is where is the ring 'Cause I know you wanna ask Scared the moment will pass I can see it in your eyes Just take me by surprise And all my friends they tell me they see You're planning to get on one knee But I want it to be out of the blue So make sure I have no clue When you ask Baby, take my hand I want you to be my husband 'Cause you're my Iron Man And I love you 3000 Baby, take a chance 'Cause I want this to be something Straight out of a Hollywood movie Now we're having dinner And baby you're my winner I see the way you smile You're thinking about the aisle You reach in your pocket Emotion unlocking And before you could ask I answer too fast And all my friends they tell me they see You're planning to get on one knee So now I can't stop thinking about you I figured out all the clues So now I ask Baby, take my hand I want you to be my husband 'Cause you're my Iron Man And I love you 3000 Baby, take a chance 'Cause I want this to be something Straight out of a Hollywood movie Pa da da da da dam No spoilers please Pa da da da da dam No spoilers please Baby, take my hand I want you to be my husband 'Cause you're my Iron Man And I love you 3000 Baby, take a chance 'Cause I want this to be something Straight out of a Hollywood movie, baby Pa da da da da dam No spoilers please Pa da da da da dam No spoilers please Pa da da da da dam No spoiler please Pa da da da da dam And I love you 3000",
  "Don't stay awake for too long, don't go to bed I'll make a cup of coffee for your head It'll get you up and going out of bed Yeah, I don't wanna fall asleep, I don't wanna pass away I been thinking of our future, 'cause I'll never see those days I don't know why this has happened, but I probably deserve it I tried to do my best, but you know that I'm not perfect I been praying for forgiveness, you've been praying for my health When I leave this Earth, hoping you'll find someone else 'Cause, yeah, we still young, there's so much we haven't done Getting married, start a family, watch your husband with his son I wish it could be me, but I won't make it out this bed I hope I go to Heaven, so I see you once again My life was kinda short, but I got so many blessings Happy you were mine, it sucks that it's all ending Don't stay awake for too long, don't go to bed I'll make a cup of coffee for your head It'll get you up and going out of bed (yeah, ayy, ayy) Don't stay awake for too long, don't go to bed I'll make a cup of coffee for your head It'll get you up and going out of bed (ayy, yeah) I'm happy that you here with me, I'm sorry if I tear up When me and you were younger, you would always make me cheer up Taking goofy videos and walking through the park You would jump into my arms every time you heard a bark Cuddle in your sheets, sing me sound asleep And sneak out through your kitchen at exactly 1:03 Sundays, went to church, on Mondays, watched a movie Soon you'll be alone, sorry that you have to lose me Don't stay awake for too long, don't go to bed I'll make a cup of coffee for your head It'll get you up and going out of bed Don't stay awake for too long, don't go to bed I'll make a cup of coffee for your head It'll get you up and going out of bed Don't stay awake for too long, don't go to bed I'll make a cup of coffee for your head It'll get you up and going out of bed Don't stay awake for too long, don't go to bed I'll make a cup of coffee for your head It'll get you up and going out of bed Don't stay awake for too long, don't go to bed I'll make a cup of coffee for your head It'll get you up and going out of bed",
  "Beautiful girls all over the world I could be chasing, but my time would be wasted They got nothing on you, baby Nothing on you, baby They might say hi, and I might say hey But you shouldn't worry, about what they say 'Cause they got nothing on you, baby Nothing on you, baby B.O.B I know you feel where I'm coming from So baby regardless of the things in my past every thing I've done Most of really was for the hell of the fun On the carousel, so around I spun With no directions just tryna get some Tryna chase skirts, living in the summer sun This is how I lost more than I had ever won And honestly I ended up with none There's no much nonsense, it's on my conscience I'm thinking baby, I should get it out And I don't wanna sound redundant, but I was wondering If there was something that you wanna know But never mind that, we should let it go 'Cause we don't wanna be a TV episode And all the bad thoughts, just let them go Go, go Beautiful girls all over the world I could be chasing, but my time would be wasted They got nothing on you, baby Nothing on you, baby They might say hi, and I might say hey But you shouldn't worry about what they say 'Cause they got nothing on you, baby Nothing on you, baby Hands down, there will never be another one I been around, and I never seen another one Look at your style, they ain't really got nothing on And you out, and you ain't got nothing on Baby, you the whole package, plus you pay your taxes And you keep it real while them other stay plastic You're my Wonder Woman, call me Mr. Fantastic Stop, now think about it I've been to London, I've been to Paris Even went out there to Tokyo Back home down in Georgia to New Orleans But you always steal the show And just like that girl you got me froze Like a Nintendo 64 If you never knew, well, now you know Know, know Beautiful girls all over the world I could be chasing, but my time would be wasted They got nothing on you, baby Nothing on you, baby They might say hi, and I might say hey But you shouldn't worry about what they say 'Cause they got nothing on you, baby Nothing on you, baby Everywhere I go, I'm always hearing your name And no matter where I'm at, girl, you make me wanna sing Whether a bus or a plane or a car or a train No other girls on my brain, and you the one to blame Beautiful girls all over the world I could be chasing, but my time would be wasted They got nothing on you, baby Nothing on you, baby They might say hi, and I might say hey But you shouldn't worry about what they say 'Cause they got nothing on you, baby Nothing on you, baby Yeah, and that's just how we do it And I'ma let this ride B.o.B and Bruno Mars",
  "Can I call you baby? Can you be my friend? Can you be my lover up until the very end? Let me show you love, oh, I don't pretend Stick by my side even when the world is givin' in, yeah Oh, oh, oh, don't Don't you worry I'll be there, whenever you want me I need somebody who can love me at my worst No, I'm not perfect, but I hope you see my worth 'Cause it's only you, nobody new, I put you first And for you, girl, I swear I'll do the worst If you stay forever, let me hold your hand I can fill those places in your heart no else can Let me show you love, oh, I don't pretend, yeah I'll be right here, baby, you know I'll sink or swim Oh, oh, oh, don't Don't you worry I'll be there, whenever you want me I need somebody who can love me at my worst No, I'm not perfect, but I hope you see my worth, yeah 'Cause it's only you, nobody new, I put you first (put you first) And for you, girl, I swear I'll do the worst I need somebody who can love me at my worst No, I'm not perfect, but I hope you see my worth 'Cause it's only you, nobody new, I put you first And for you, girl, I swear I'll do the worst",
  "I will always remember the day you kissed my lips, light as a feather. And it went just like this. No it's never been better than the summer of Two Thousand and Two. Ooh. We were only eleven, but acting like grown ups, like we are in the present. Drinking from plastic cups, singing love is forever and ever. Well I guess that was true. Ooh. Dancing on the hood in the middle of the woods on an old Mustang, where we sang songs with all of our childhood friends. And it went like this, say: Oops, I got ninety-nine problems singing bye, bye, bye. Hold up, if you wanna go and take a ride with me, better hit me baby one more time. Ah. Paint a picture for you and me, of the days when we were young. Singing at the top of both our lungs. Now we're under the covers. Fast-forward to eighteen. We are more than lovers. Yeah, we are all we need. When we're holding each other I'm taken back to Two Thousand and Two. Ooh. Dancing on the hood in the middle of the woods, on an old Mustang, where we sang songs with all of our childhood friends. And it went like this, say: Oops, I got ninety-nine problems singing bye, bye, bye. Hold up, if you wanna go and take a ride with me, better hit me baby one more time. Ah. Paint a picture for you and me, of the days when we were young. Singing at the top of both our lungs. On the day we fell in love. Ooh, ooh. Ooh, ooh. On the day we fell in love. Ooh, ooh. Ooh, ooh. Dancing on the hood in the middle of the woods, on an old Mustang where we sang songs with all of our childhood friends. Oh, no. Oops, I got ninety-nine problems singing bye, bye, bye. Hold up, if you wanna go and take a ride with me, better hit me baby one more time. Paint a picture for you and me, of the days when we were young. Singing at the top of both our lungs. On the day we fell in love. Ooh, ooh. Ooh, ooh. On the day we fell in love. Ooh, ooh. Ooh, ooh. On the day we fell in love. Ooh, ooh. Ooh, ooh. On the day we fell in love. Ooh, ooh. Ooh, ooh. On the day we fell in love, love, love.",
"[Verse 1] Thức thâu đêm để nghĩ suy về em nhiều Thật ra có những điều làm cho anh Không yên được giấc Bấy lâu ta không nói nhau một câu nào Chờ dòng tin nhắn chào Trở lại cảm giác như lúc trước Có phải vì anh vẫn thường vô ý Chẳng suy nghĩ, vài lần khiến em u sầu Có phải vì anh trót vài câu nói Chạm vào nơi niềm đau mà người luôn chôn giấu [Chorus] Vài câu nói có khiến người thay đổi Có khiến bờ môi ấm êm Nay chỉ còn trong nỗi nhớ Vài câu nói kéo đến màu u tối Cuốn hết bình yên lúc xưa bên cạnh nhau Mãi đi xa để mình ta trong căn phòng cùng nước mắt trong lòng [Verse 2] Chẳng còn giọt nước mắt nào cho em rơi Cũng chẳng còn gì tha thiết để nói nên lời Sẽ chỉ mang đến thêm u sầu Làm dấu yêu phai màu Chẳng biết ta phải đi về đâu Giờ thì lời xin lỗi còn kịp thời? Làm sao khi cảm xúc em nguội rồi Bao nhiêu lần như thế rồi Không còn cơ hội nào cho anh nữa đâu Tổn thương nhau bấ nhiêu đây thôi Có phải vì anh (cũng tại vì anh) Vẫn thường vô ý Làm em rối trí Ngày đêm tối nghĩ suy Vậy mà người vô tâm nào biết gì đâu Có phải vì anh Trót vài câu nói Chạm vào nơi niềm đau mà người luôn chôn giấu [Chorus] Vài câu nói có khiến người thay đổi Có khiến bờ môi ấm êm Nay chỉ còn trong nỗi nhớ Vài câu nói kéo đến màu u tối Cuốn hết bình yên lúc xưa bên cạnh nhau Mãi đi xa để mình ta trong căn phòng cùng nước mắt trong lòng [Bridge] Vì dòng cảm xúc không thể trở về như lúc ta vừa bắt đầu Và sẽ như thế nào nếu bỏ lại ngày tháng đã từng với nhau Một vài câu nói vô tình đẩy lùi mọi thứ về thì quá khứ Baby i just wanna say im sorry",
  "Light 'em up, light 'em up Tell me where you are, tell me where you are Summer nights, bright lights And the shootin' stars, they break my heart Callin' you now, but you're not pickin' up Shadows so close if that's still enough Light a match, light a match Baby, in the dark, show me where you are Oh, love How I miss you every single day When I see you on those streets Oh, love Tell me there's a river I can swim that will bring you back to me 'Cause I don't know how to love someone else I don't know how to forget your face No, love God, I miss you every single day and now you're so far away So far away It's breakin' me, losin' you We were far from perfect But we were worth it Too many fights, and we cried But never said we're sorry Stop sayin' you love me You're callin' me now, but I can't pick up Your shadow's still close, and I'm still in love The summer's over now But somehow it still breaks my heart We could have had this talk Oh Oh, love How I miss you every single day Whe I see you on those streets Oh, love Tell me there's a river I can swim that will bring you back to me 'Cause I don't know how to love someone else I don't know how to forget your face No, love God, I miss you every single day and now you're so far away So far away So far away, oh So far away So far away Oh, love How I miss you every single day When I see you on those streets Oh, love Tell me there's a river I can swim that will bring you back to me 'Cause I don't know how to love someone else I don't know how to forget your face Oh, love God, I miss you every single day when you're so far away",
  "_________",
  "Eyes blue or brown, can't remember Lot of time has passed since third of December Eyes green or grey, can't remember But I bet you know the color of Heather's Getting cold, but I have my own sweater Fuck your polyester, 'cause cotton's way better You were playing Jack and Rose When you sunk, only you froze, 'cause you gave her your sweater You're lost in Atlantic, trying not to panic But now it's to late to come back I movеd on and I'm better Know my worth, I'm Heathеr not taken for granted Eyes blue or brown, can't remember Lot of time has passed since third of December Eyes green or grey, can't remember But I bet you know the color of Heather's Eyes blue or brown, can't remember Lot of time has passed since third of December Eyes green or grey, can't remember But I bet you know the color of Heather's Eyes blue or brown, can't remember Lot of time has passed since third of December Eyes green or grey, can't remember But I bet you know the color of Heather's Eyes blue or brown, can't remember Lot of time has passed since third of December Eyes green or grey, can't remember But I bet you know the color of Heather's Eyes blue or brown, can't remember Lot of time has passed since third of December Eyes green or grey, can't remember But I bet you know the color of Heather's Getting cold, but I have my own sweater Fuck your polyester, 'cause cotton's way better You were playing Jack and Rose When you sunk, only you froze, 'cause you gave her your sweater You're lost in Atlantic, trying not to panic But now it's to late to come back I movеd on and I'm better Know my worth, I'm Heathеr not taken for granted Eyes blue or brown, can't remember Lot of time has passed since third of December Eyes green or grey, can't remember But I bet you know the color of Heather's Eyes blue or brown, can't remember Lot of time has passed since third of December Eyes green or grey, can't remember But I bet you know the color of Heather's Eyes blue or brown, can't remember Lot of time has passed since third of December Eyes green or grey,can't remember But I bet you know the color of Heather's",
  "[뉴진스 'Hurt' 가사] [Verse 1: Hyein] 보고 싶은 생각에 들어간 우리 창에 나는 말을 거는데 보내지는 않을래 느린 한마디보다 조용함이 더 좋아 기다리고, 있지만 매일 이런 건 아냐 [Pre-Chorus: Haerin] 난 재미없어 게임 같은 건 다 필요 없어 아무리 좋아도 널, no 말로만은 지겨운걸 먼저 와서 보여줘 먼저 와서 보여줘 [Chorus: Haerin, Hanni] 'Cause I'm not gonna be the one to get hurt Hurt (No, no) I'm not gonna be the one to get hurt Hurt (No, no) I'm not gonna be the one to get hurt Hurt (Oh, oh, ooh) I'm not gonna be the one to get hurt (Oh, oh, ooh) I'm not gonna be the one to get hurt (Oh, oh, ooh) I'm not gonna be the one to get hurt (Oh, oh, ooh) [Verse 2: Danielle] 매일 잠들기 전에 그리고 또 아침에 쥐고 있는 내 손엔 너없는 화면인데 느린 한마디보다 조용함이 더 좋아 기다리고 있지만 매일 이런 건 아냐 [Pre-Chorus: Hyein] 난 재미없어 게임 같은 건 다 필요없어 아무리 좋아도 널, no 말로만은 지겨운걸 먼저 와서 보여줘 먼저 와서 보여줘 [Chorus: Hyein, Minji] 'Cause I'm not gonna the one to get hurt Hurt (No, no) I'm not gonna the one to get hurt Hurt (No, no) I'm not gonna the one to get hurt Hurt (Oh, oh, ooh) Hurt (Oh, oh, ooh) [Outro: Haerin, Hanni] 여기까지야, 네가 와있는 곳은 너무 멀었어 I'm not gonna be the one to get hurt 여기까지야, 네가 와있는 곳은 너무 멀었어 I'm not gonna be the one to get hurt",
  "_________",
  "[Verse 1] Em, có nghe! Ngàn muôn suy tư trong màn đêm Và em, em có nghe! Lời yêu kia gió lay vội đem Vụt qua con phố chắc có đến nơi bình yên Chẳng cần cơn mơ chiếu lấp lánh nơi thần tiên Từ bao tan nát hóa một trái tim vẹn nguyên Bầu trời kia tha thiết thêm, chắc có lẽ là vì em [Chorus] Giữa khung trời hoa mộng, đôi mình có nhau (Có nhau) Dưới cung trăng êm đềm, cùng nhau ước ao (Ước ao) Dẫu có khi ta sầu vì không thấy nhau (Thấy nhau) Vẫn yêu nhau đong đầy trăm nghìn kiếp sau [Verse 2] Em, có nghe! Mùa xuân trong tim rộn vang Và em, em có nghe! Tình yêu mà anh hôm nay vội mang Tựa như muôn hoa lấp kín nơi lòng ta Để cho bao nhớ thương kia không bao giờ xa Dù nhận lấy đắng cay giết chết chân tình anh Thật lòng anh vẫn không, không đổi thay (không đổi thay) [Bridge] Người yêu ơi! Hoa mai đâm chồi Để cho thơm hương muôn ngàn lối Còn anh chỉ mong Rằng em vẫn mãi bên cạnh tôi Lời ca anh viết nên có lẽ sẽ tàn phai Dù cho bao thiết tha kia đúng hay là sai Thì vẫn luôn ở đây cất câu hát anh vừa feel Rằng ngày mai đón em chắc có lẽ đó là yêu [Chorus] Giữa khung trời hoa mộng, đôi mình có nhau (Có nhau) Dưới cung trăng êm đềm, cùng nhau ước ao (Ước ao) Dẫu có khi ta sầu vì không thấy nhau (Thấy nhau) Vẫn yêu nhau đong đầy trăm nghìn kiếp sau [Chorus] Giữa khung trời hoa mộng đôi mình có nhau (có nhau) Dưới cung trăng êm đềm cùng nhau ước ao (ah ah ah ah ah) Dẫu có khi ta sầu vì không thấy nhau (thấy nhau) Vẫn yêu nhau đong đầy trăm nghìn kiếp sau (uh uh uh uh uh uh...)",
"1. Muốn đi vài hôm Xa chính nơi ta từng có phút êm đềm Trước ngày giông tố đến tìm Đến khi nhận ra nên quý hơn Những ngày tháng sống bên nhau Thì mình muộn mất rồi. Giờ nay em có lẽ rất vui Cùng người em yêu chung bước Không quay lại nhìn Dù sao thì anh vẫn mong Em luôn bình yên Và xin lỗi vì chẳng đến Chúc phúc cho em. [ĐK:] Vì ngày hôm nay em cưới rồi Vụn vỡ vết thương đau mãi trong tim Người đàn ông may mắn ấy Từ nay đã có em Chỉ muốn đến đây gặp em một lần Để thấy em hạnh phúc Thế nào rồi anh đi. Vì ngày hôm nay em cưới rồi Mai sau anh sống thế nào Một người đã mang cả thế giới Sánh đôi với tình yêu mới Ngày em đẹp nhất trên đời Là ngày chúng ta xa mãi một người Nợ duyên đến nay mình trả hết rồi. 2. Áo cưới em màu trắng tinh Nước mắt anh cũng trắng tinh Có nỗi đau mà vẫn im lặng thinh Nay ngày vui của em Anh thật không dám tin Đến lúc em phải nắm tay người Em sắp kêu là chồng Cười thật tâm chúc phúc Niềm vui ở trên thiệp hồng. [Coda:] Dù có một đời anh cố gắng Thì vẫn không sao giữ em Một người đã mang cả thế giới Sánh đôi với tình yêu mới Ngày em đẹp nhất trên đời Là ngày chúng ta xa mãi một người Nợ duyên đến nay mình trả hết rồi Nợ duyên đến nay mình trả hết rồi.",

]
const listMusic = [

  ["y2mate.com - newjeans 뉴진스  hurt sped up", "Newjeans 뉴진스  Hurt",lyric[10]],
  ["y2mate.com - Em Có Nghe  Kha", "Em Có Nghe",lyric[12]],
  ["y2mate.com - Hôm Nay Em Cưới Rồi Orinn Remix  Khải Đăng  Nhạc Trẻ EDM Hot Tik Tok Gây Nghiện Hay Nhất 2020","Hôm Nay Em Cưới Rồi",lyric[13]],
  ["y2mate.com - Xomu  Tera Original Mix", "Xomu  Tera Original Mix",lyric[11]],
  ["y2mate.com - BEAUZ  Outerspace feat Dallas Monstercat Release", "BEAUZ  Outerspace",lyric[0]],
  ["y2mate.com - Vietsub  Lyrics I Love You 3000  Stephanie Poetri","I Love You 3000",lyric[1]],
  ["y2mate.com - Powfu  death bed Christian Lalama Remix","death bed",lyric[2]],
  ["y2mate.com - Nothing On You  Barry Brizzy  Vietsub  Lyric","Nothing On You",lyric[3]],
  ["y2mate.com - At My Worst  Pink Sweat  Lyrics  Vietsub ","At My Worst",lyric[4]],
  ["y2mate.com - AnneMarie  2002 Official Video","2002",lyric[5]],
  ["y2mate.com - vaicaunoicokhiennguoithaydoi  GREY D x TLINH  Official Music Video","vaicaunoicokhiennguoithaydoi",lyric[6]],
  ["y2mate.com - So Far Away  Adam Christopher Cover  Vietsub  Lyrics","So Far Away",lyric[7]],
  ["y2mate.com - The girl next door  ON TOP sped up","The girl next door - ON TOP",lyric[8]],
  ["y2mate.com - Heather x Eyes Blue Lofi Remix","Heather x Eyes Blue",lyric[9]],
]

songs.textContent = ''
for (let i = 0; i < listMusic.length; ++i) {
  temp = `<p class="name-song${i} char btnchar" data-path="${listMusic[i][0]}" data-index="${i}">[${listMusic[i][1]}]</p>`
  songs.insertAdjacentHTML(
      "beforeend",
      temp
  );
}

songs_event = []
for (let i = 0; i < listMusic.length; i++)
  songs_event.push(songs.querySelector('.name-song' + i))

class UI {
  constructor() {
    this.songIndex = 0
    this.loop = false
  }

  // get duration
  getDuration(music) {
    return new Promise(function (resolve) {
      music.addEventListener("loadedmetadata", function () {
        const time = formatTime(music.duration);
        resolve(time);
      });
    });
  }

  // load detail song when page loaded
  loadSong(music) {
    audio.src = `MP3/${music[0]}.mp3`;

    this.getDuration(audio).then((time) => {
      nameSong.textContent =music[1];
      lyricSong.textContent =music[2];
      timeSong.textContent = time;
    });
  }

  // play song
  playSong() {
    musicContent.classList.add("playing");
    btnPlay.textContent = '[Stop]'
    audio.play();
  }

  // pause song
  pauseSong() {
    musicContent.classList.remove("playing");
    btnPlay.textContent = '[Play]'
    audio.pause();
  }

  // prev song
  prevSong() {
    this.songIndex--;
    if (this.songIndex < 0)
      this.songIndex = listMusic.length - 1;
    this.loadSong(listMusic[this.songIndex]);


  }

  // next song
  nextSong() {
    this.songIndex++;
    if (this.songIndex > listMusic.length - 1)
      this.songIndex = 0;
    this.loadSong(listMusic[this.songIndex]);
  }

  // update progress
  updateProgress(e) {
    const { currentTime, } = e.srcElement;
    const time = formatTime(currentTime);
    currentTimeDisplay.textContent = time;
  }

  // select song in playlist
  selectSong(index) {
    this.songIndex = index
    this.loadSong(listMusic[index]);

    this.playSong();
  }

  //randomsong
  ranDom(index) {
    index = Math.floor(Math.random() *lyric.length);
    this.songIndex = index;
    this.loadSong(listMusic[index]);
  }

}

document.addEventListener("DOMContentLoaded", eventListeners);

function eventListeners() {
  const ui = new UI();

  // load song
  ui.loadSong(listMusic[ui.songIndex]);

  for(let i = 0; i < listMusic.length; ++i){
    songs_event[i].addEventListener("click", function() {
      index = parseInt(songs_event[i].getAttribute('data-index'))
      ui.selectSong(index)
    })
  }

  loop_music.addEventListener("click", function(){
    if(ui.loop)
      loop_music.textContent = '[Loop]'
    else
      loop_music.textContent = '[>Loop<]'
    ui.loop = !ui.loop
  })

  // play/pause song
  btnPlay.addEventListener("click", function () {
    if (musicContent.classList.contains("playing")) {
      ui.pauseSong();
    } else {
      ui.playSong();
    }
  });

  // update progress
  audio.addEventListener("timeupdate", function (e) {
    ui.updateProgress(e);
  });

  btnBack.addEventListener("click", function () {
    ui.prevSong();
    ui.playSong();
  });
  btnRandom.addEventListener("click", function () {
    ui.ranDom();
    ui.playSong();
  });


  btnForward.addEventListener("click", function () {
    ui.nextSong();
    ui.playSong();
  });

  // end song
  audio.addEventListener("ended", function () {
    if(ui.loop === false)
      ui.nextSong();
    ui.playSong();
  });

  // select song
  // songs.addEventListener("click", function (e) {
  //   ui.selectSong(e);
  // });
}

function formatTime(sec_num) {
  let hours = Math.floor(sec_num / 3600);
  let minutes = Math.floor((sec_num - hours * 3600) / 60);
  let seconds = Math.floor(sec_num - hours * 3600 - minutes * 60);

  hours = hours < 10 ? (hours > 0 ? "0" + hours : 0) : hours;

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return (hours !== 0 ? hours + ":" : "") + minutes + ":" + seconds;
}